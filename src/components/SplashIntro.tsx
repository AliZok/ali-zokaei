"use client";

import React, { useEffect, useState } from "react";

export default function SplashIntro() {
  const [show, setShow] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 2700);
    const removeTimer = setTimeout(() => setShow(false), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`splash-overlay ${hiding ? "splash-hide" : ""}`}>
      <div className="splash-center">
        <div className="splash-text">
          <div className="name">ALI ZOKAEI</div>
          <div className="by">by</div>
        </div>
      </div>
    </div>
  );
}
