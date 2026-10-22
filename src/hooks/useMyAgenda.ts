import {useCallback, useEffect, useState} from 'react';

const STORAGE_KEY = 'piw-my-agenda';

const readStoredIds = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
};

// Persists a visitor's starred sessions to localStorage so "My Agenda" survives reloads/devices-less sync.
export const useMyAgenda = () => {
  const [bookmarked, setBookmarked] = useState<Set<string>>(() => readStoredIds());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(bookmarked)));
    } catch {
      // Storage unavailable (private mode / quota) — bookmarks just won't persist this session.
    }
  }, [bookmarked]);

  const isBookmarked = useCallback((id: string) => bookmarked.has(id), [bookmarked]);

  const toggle = useCallback((id: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const clear = useCallback(() => setBookmarked(new Set()), []);

  return {bookmarked, isBookmarked, toggle, clear, count: bookmarked.size};
};
