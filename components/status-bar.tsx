// On real devices the OS draws the status bar.
// This component only adds safe-area-inset-top spacing so content
// doesn't overlap the notch / Dynamic Island on iOS.
export function StatusBar({ dark: _dark = false }: { dark?: boolean }) {
  return <div className="sbar" aria-hidden="true" />;
}
