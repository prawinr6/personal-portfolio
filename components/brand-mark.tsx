export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="0 0 72 72" width="52" height="52" fill="none" aria-hidden="true" focusable="false">
      <rect className="brand-mark-frame" x="1" y="1" width="70" height="70" rx="16" />
      <path className="brand-mark-p" d="M15 53V19H23C31 19 34 23.5 34 30S31 41 23 41H15" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round" />
      <path className="brand-mark-r" d="M39 53V19H46C53 19 57 23.5 57 30S53 41 46 41H39" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="round" />
      <path className="brand-mark-r" d="M46 41L58 53" strokeWidth="3.5" strokeLinecap="butt" />
    </svg>
  );
}
