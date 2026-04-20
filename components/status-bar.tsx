export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`sbar${dark ? " sbar--dark" : ""}`} aria-hidden="true">
      <span className="sbar__time">9:41</span>
      <div className="sbar__icons">
        <span className="sig"><i /><i /><i /></span>
        <span className="wifi" />
        <span className="batt"><span /></span>
      </div>
    </div>
  );
}
