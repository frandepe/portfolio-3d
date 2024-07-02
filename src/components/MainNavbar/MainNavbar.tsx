import { useLayoutEffect, useRef } from "react";
import "./MainNavbar.css";
import gsap from "gsap";

export const MainNavbar = () => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const menuToggle = menuToggleRef.current;

    const menuBar = gsap.timeline();

    menuBar.to(
      ".bar-1",
      0.5,
      {
        attr: { d: "M8,2 L2,8" },
        x: 1,
        ease: "Power2.easeInOut",
      },
      "start"
    );

    menuBar.to(
      ".bar-2",
      0.5,
      {
        autoAlpha: 0,
      },
      "start"
    );

    menuBar.to(
      ".bar-3",
      0.5,
      {
        attr: { d: "M8,8 L2,2" },
        x: 1,
        ease: "Power2.easeInOut",
      },
      "start"
    );

    menuBar.reverse();

    const tl = gsap.timeline({ paused: true });

    tl.to(".fullpage-menu", {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    });

    tl.from(".menu-bg span", {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });

    tl.from(
      ".main-menu li a",
      {
        duration: 1.5,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    tl.from(
      ".social-links li",
      {
        duration: 1,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    tl.reverse();

    const handleMenuToggleClick = () => {
      menuBar.reversed(!menuBar.reversed());
      tl.reversed(!tl.reversed());
    };

    menuToggle?.addEventListener("click", handleMenuToggleClick);

    return () => {
      menuToggle?.removeEventListener("click", handleMenuToggleClick);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-row">
          <div className="brand-logo">
            <a href="#"></a>
          </div>
          <button className="menu-toggle" ref={menuToggleRef}>
            <svg
              viewBox="0 0 12 10"
              className="hamburger"
              height="40px"
              width="40px"
            >
              <path d="M10,2 L2,2" className="bar-1"></path>
              <path d="M2,5 L10,5" className="bar-2"></path>
              <path d="M10,8 L2,8" className="bar-3"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="fullpage-menu">
        <div className="fullpage-menu-inner">
          <div className="menu-bg">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav>
            <ul className="main-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-nav-footer">
            <ul className="social-links">
              <li>
                <a
                  target="__blank"
                  href="https://www.linkedin.com/in/franco-de-paulo/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a target="__blank" href="https://github.com/frandepe">
                  GitHub
                </a>
              </li>

              <li>&copy;2024</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
