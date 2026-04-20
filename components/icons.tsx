/* ── Navigation ── */
export function BookIcon({ active = false }: { active?: boolean }) {
  const c = active ? "#fff" : "#323232";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchNavIcon({ active = false }: { active?: boolean }) {
  const c = active ? "#fff" : "#323232";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="5.5" stroke={c} strokeWidth="1.8" />
      <path d="M15 15 19.5 19.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PenIcon({ active = false }: { active?: boolean }) {
  const c = active ? "#fff" : "#323232";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 5l6 6-8.5 8.5L4 20l.5-5.5L12 5z" stroke={c} strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.2" fill={c} />
    </svg>
  );
}

export function BellIcon({ active = false }: { active?: boolean }) {
  const c = active ? "#fff" : "#323232";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8 17s0 3 4 3 4-3 4-3" stroke={c} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5 17h14l-1.5-2V10a5.5 5.5 0 0 0-11 0v5L5 17z" stroke={c} strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Actions ── */
export function BackIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 5.5L8.5 12 15 18.5" stroke={dark ? "#f4f4f4" : "#1a1a1a"} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MoreIcon({ dark = false }: { dark?: boolean }) {
  const f = dark ? "#f4f4f4" : "#1a1a1a";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="5.5" cy="12" r="1.4" fill={f} />
      <circle cx="12" cy="12" r="1.4" fill={f} />
      <circle cx="18.5" cy="12" r="1.4" fill={f} />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5L9.5 17 19 7" stroke="#1a1a1a" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ dark = false }: { dark?: boolean }) {
  const c = dark ? "#f4f4f4" : "#1a1a1a";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="5.5" stroke="#888" strokeWidth="1.8" />
      <path d="M15 15 19.5 19.5" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20L5.2 13.4C3.4 11.7 3.4 8.9 5.2 7.2 6.7 5.8 9.1 5.8 10.6 7.2L12 8.6l1.4-1.4c1.5-1.4 3.9-1.4 5.4 0 1.8 1.7 1.8 4.5 0 6.2L12 20z"
        fill={filled ? "#ef2b2b" : "none"}
        stroke={filled ? "#ef2b2b" : "#666"}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#666" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#666" strokeWidth="1.7" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#666" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.8" stroke="#1a1a1a" strokeWidth="1.7" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#1a1a1a" strokeWidth="1.7" />
    </svg>
  );
}

export function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#757576" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#757576" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function XMarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M18 6 6 18M6 6l12 12" stroke="#757576" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

/* ── Social ── */
export function KakaoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3C6.96 3 3 6.27 3 10.3c0 2.62 1.74 4.93 4.37 6.24l-.93 3.44c-.08.3.23.54.5.37L11.1 17.9c.29.03.59.04.9.04 5.04 0 9-3.27 9-7.3C21 6.27 17.04 3 12 3z" fill="#3C1E1E" />
    </svg>
  );
}

export function NaverIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M13.2 12.6 10.56 8H8v9h2.8v-4.6L13.44 17H16V8h-2.8v4.6z" fill="#ffffff" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M17.05 12.54c-.02-2.3 1.88-3.41 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.42-.14-2.77.84-3.49.84-.71 0-1.82-.82-2.99-.8-1.54.02-2.96.9-3.75 2.28-1.6 2.77-.41 6.88 1.15 9.13.77 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.39 0 1.78.74 2.99.71 1.24-.02 2.02-1.12 2.78-2.23.87-1.27 1.23-2.51 1.25-2.57-.03-.01-2.39-.92-2.41-3.66z" fill="#000" />
      <path d="M14.42 5.57c.64-.78 1.07-1.86.95-2.94-.92.04-2.03.61-2.69 1.38-.59.68-1.1 1.77-.96 2.82 1.02.08 2.06-.52 2.7-1.26z" fill="#000" />
    </svg>
  );
}
