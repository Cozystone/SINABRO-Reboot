"use client";

import { useEffect, useState } from "react";

const PHONE_W = 393;
const PHONE_H = 852;
const BEZEL   = 13;

export function AppFrame({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function calc() {
      const totalW = PHONE_W + BEZEL * 2;
      const totalH = PHONE_H + BEZEL * 2;
      const sh = Math.min(1, (window.innerHeight - 24) / totalH);
      const sw = Math.min(1, (window.innerWidth  - 24) / totalW);
      setScale(Math.min(sh, sw));
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <div className="shell">
      <div className="iphone" style={{ transform: `scale(${scale})` }}>
        <div className="iphone-left">
          <div className="iphone-btn iphone-btn--silent" />
          <div className="iphone-btn iphone-btn--vol" />
          <div className="iphone-btn iphone-btn--vol" />
        </div>
        <div className="iphone-right">
          <div className="iphone-btn iphone-btn--power" />
        </div>
        <div className={`phone${dark ? " phone--dark" : ""}`}>
          <div className="dynamic-island" aria-hidden="true" />
          {children}
        </div>
      </div>
    </div>
  );
}
