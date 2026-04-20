import Link from "next/link";
import { BookIcon, SearchNavIcon, PenIcon, BellIcon } from "./icons";

type Tab = "feed" | "search" | "editor" | "alerts" | "profile";

const tabs = [
  { id: "feed",    href: "/feed",    Icon: BookIcon },
  { id: "search",  href: "/search",  Icon: SearchNavIcon },
  { id: "editor",  href: "/editor",  Icon: PenIcon },
  { id: "alerts",  href: "/alerts",  Icon: BellIcon },
  { id: "profile", href: "/profile", Icon: null },
] as const;

export function BottomNav({ current }: { current: Tab }) {
  return (
    <nav className="bnav" aria-label="메인 메뉴">
      <div className="bnav__icons">
        {tabs.map(({ id, href, Icon }) => {
          const active = id === current;
          return (
            <Link key={id} href={href} className={`bnav__item${active ? " active" : ""}`}>
              {Icon ? (
                <span className="bnav__wrap">
                  <Icon active={active} />
                </span>
              ) : (
                <span className={`bnav__avatar${active ? " is-active" : ""}`} />
              )}
            </Link>
          );
        })}
      </div>
      <div className="bnav__home-indicator" aria-hidden="true" />
    </nav>
  );
}
