#!/usr/bin/env bash
set -euo pipefail

# Requires GitHub CLI (`gh`) authenticated for this repo.

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI 'gh' is not installed or not in PATH." >&2
  exit 1
fi

ensure_label() {
  local name="$1"; shift
  local color="$1"; shift
  local desc="$1"; shift
  if ! gh label list --limit 200 2>/dev/null | awk '{print $1}' | grep -qx "$name"; then
    echo "Creating missing label '$name'"
    gh label create "$name" -c "$color" -d "$desc" >/dev/null 2>&1 || true
  fi
}

ensure_issue() {
  local title="$1"; shift
  local body_file="$1"; shift
  local label="${1:-bug}"; shift || true

  # Choose default colors/descriptions for common labels
  local color desc
  case "$label" in
    feature) color="#1f883d"; desc="Feature request" ;;
    enhancement) color="#a2eeef"; desc="Enhancement" ;;
    bug|fix) color="#d73a4a"; desc="Bug / Fix" ;;
    *) color="#6e7781"; desc="Task" ;;
  esac

  ensure_label "$label" "$color" "$desc"

  # Find existing issue by exact title (any state)
  local issue_number
  issue_number=$(TITLE="$title" gh issue list --state all --search "$title in:title" --json number,title,labels \
    --jq '.[] | select(.title == env.TITLE) | .number' | head -n1 || true)

  if [[ -z "${issue_number:-}" ]]; then
    echo "Creating: $title"
    gh issue create --title "$title" --body-file "$body_file" --label "$label" >/dev/null
    issue_number=$(TITLE="$title" gh issue list --state all --search "$title in:title" --json number,title \
      --jq '.[] | select(.title == env.TITLE) | .number' | head -n1 || true)
  else
    echo "Exists (#$issue_number): $title"
  fi

  if [[ -n "${issue_number:-}" ]]; then
    gh issue edit "$issue_number" --add-label "$label" >/dev/null 2>&1 || true
  fi
}

# Fix: navbar alignment and theming parity with live site
ensure_issue "Fix: add logo to navbar. make navbar static. make sure all links from live PIW site(https://www.pwaniinnovationweek.com/) are added on the updated nav, and it inherits the color themes" \
  "docs/issues/fix-navbar-logo-static-links-theme.md" bug

echo "Requested issues ensured."
