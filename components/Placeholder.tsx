type Props = { label?: string; className?: string; dark?: boolean; children?: React.ReactNode };
export default function Placeholder({ label, className = "", dark, children }: Props) {
  return (
    <div className={`relative overflow-hidden grid place-items-center font-mono text-[11px] border border-dashed ${dark ? "stripes-dark text-slate-400 border-transparent" : "stripes text-slate-600 border-slate-400"} ${className}`}>
      {label && <span>{label}</span>}
      {children}
    </div>
  );
}
