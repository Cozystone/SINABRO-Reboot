// iPhone mockup removed — app now runs natively on mobile (iOS & Android).
// AppFrame kept as a no-op wrapper so existing page imports don't break.
export function AppFrame({
  dark: _dark = false,
  children,
}: {
  dark?: boolean;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
