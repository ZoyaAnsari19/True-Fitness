"use client";

import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import "./login.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TILT_MAX_DEG = 4;

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const shake = (el: HTMLElement | null) => {
    if (!el || typeof el.animate !== "function") return;
    el.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(-4px)" },
        { transform: "translateX(4px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 360, easing: "ease-in-out" }
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    const trimmedEmail = email.trim();
    const emailValid = EMAIL_REGEX.test(trimmedEmail);
    const passwordValid = password.length >= 6;

    setEmailError(!emailValid);
    setPasswordError(!passwordValid);

    if (!emailValid) shake(emailRef.current);
    if (!passwordValid) shake(passwordRef.current);
    if (!emailValid || !passwordValid) return;

    setIsLoading(true);
    setIsSuccess(false);

    window.setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      window.setTimeout(() => setIsSuccess(false), 1800);
    }, 1500);
  };

  const handleSocialClick = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    if (typeof btn.animate === "function") {
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.96)" },
          { transform: "scale(1)" },
        ],
        { duration: 220, easing: "ease-out" }
      );
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const card = cardRef.current;
    if (!card) return;
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) {
      return;
    }

    let raf: number | null = null;

    const onMouseMove = (e: globalThis.MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1200px) rotateX(${(-y * TILT_MAX_DEG).toFixed(
          2
        )}deg) rotateY(${(x * TILT_MAX_DEG).toFixed(2)}deg) translateZ(0)`;
      });
    };

    const onMouseLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = "";
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = "";
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const orbs = document.querySelectorAll<HTMLElement>(".login-page .orb");
    if (orbs.length === 0) return;

    let raf: number | null = null;

    const onMouseMove = (e: globalThis.MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        orbs.forEach((orb, i) => {
          const depth = (i + 1) * 8;
          orb.style.translate = `${x * depth}px ${y * depth}px`;
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
      orbs.forEach((orb) => {
        orb.style.translate = "";
      });
    };
  }, []);

  return (
    <div className="login-page">
      <div className="bg-wrapper" aria-hidden="true">
        <div className="bg-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="noise"></div>
      </div>

      <header className="top-bar">
        <a href="#" className="brand" aria-label="True Fitness Home">
          <span className="brand-mark">
            <i className="fa-solid fa-bolt"></i>
          </span>
          <span className="brand-text">
            TRUE <span className="brand-accent">FITNESS</span>
          </span>
        </a>
        <a href="#" className="top-link">
          <i className="fa-solid fa-headset"></i>
          <span>Support</span>
        </a>
      </header>

      <main className="page">
        <section className="login-shell">
          <aside className="visual-side" aria-hidden="true">
            <div className="visual-inner">
              <div className="visual-brand">
                <span className="brand-mark large">
                  <i className="fa-solid fa-bolt"></i>
                </span>
                <span className="brand-text large">
                  TRUE <span className="brand-accent">FITNESS</span>
                </span>
              </div>

              <div className="hero-copy">
                <span className="eyebrow">
                  <span className="dot"></span> Premium Members Club
                </span>
                <h1>
                  Train Smarter.
                  <br />
                  <span className="gradient-text">Live Stronger.</span>
                </h1>
                <p>
                  Track every rep, every run, every breakthrough &mdash; all in one elite platform
                  built for athletes who never settle.
                </p>
              </div>

              <div className="floating-cards">
                <div className="float-card float-card-1">
                  <div className="fc-icon green">
                    <i className="fa-solid fa-fire-flame-curved"></i>
                  </div>
                  <div className="fc-body">
                    <span className="fc-label">Calories Today</span>
                    <span className="fc-value">
                      1,248 <span className="fc-unit">kcal</span>
                    </span>
                    <div className="fc-bar">
                      <span style={{ width: "72%" }}></span>
                    </div>
                  </div>
                </div>

                <div className="float-card float-card-2">
                  <div className="fc-icon blue">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                  <div className="fc-body">
                    <span className="fc-label">Heart Rate</span>
                    <span className="fc-value">
                      142 <span className="fc-unit">bpm</span>
                    </span>
                    <div className="pulse-wave">
                      <svg viewBox="0 0 120 30" preserveAspectRatio="none">
                        <polyline
                          points="0,15 15,15 20,5 25,25 30,15 50,15 55,8 60,22 65,15 90,15 95,10 100,20 105,15 120,15"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="float-card float-card-3">
                  <div className="fc-icon white">
                    <i className="fa-solid fa-dumbbell"></i>
                  </div>
                  <div className="fc-body">
                    <span className="fc-label">Workout Streak</span>
                    <span className="fc-value">
                      28 <span className="fc-unit">days</span>
                    </span>
                    <div className="streak-row">
                      <span className="dot-on"></span>
                      <span className="dot-on"></span>
                      <span className="dot-on"></span>
                      <span className="dot-on"></span>
                      <span className="dot-on"></span>
                      <span className="dot-on"></span>
                      <span className="dot-off"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="visual-footer">
                <div className="trust-item">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>256-bit Encrypted</span>
                </div>
                <div className="trust-item">
                  <i className="fa-solid fa-bolt-lightning"></i>
                  <span>Built for Athletes</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="form-side">
            <div className="login-card" ref={cardRef}>
              <span className="card-border-glow" aria-hidden="true"></span>

              <div className="card-head">
                <span className="badge">
                  <i className="fa-solid fa-lock"></i> Secure Member Access
                </span>
                <h2>Welcome Back</h2>
                <p className="subtitle">Login to continue your fitness journey.</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <span className="field-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder=" "
                    required
                    ref={emailRef}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(false);
                    }}
                    className={emailError ? "has-error" : undefined}
                    aria-invalid={emailError}
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="field">
                  <span className="field-icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder=" "
                    required
                    minLength={6}
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError(false);
                    }}
                    className={passwordError ? "has-error" : undefined}
                    aria-invalid={passwordError}
                  />
                  <label htmlFor="password">Password</label>
                  <button
                    type="button"
                    className="toggle-pass"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <i
                      className={
                        showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                      }
                    ></i>
                  </button>
                </div>

                <div className="row-between">
                  <label className="check">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span className="check-box">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="check-label">Remember me</span>
                  </label>
                  <a href="#" className="forgot-link">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`btn-primary${isLoading ? " is-loading" : ""}${
                    isSuccess ? " is-success" : ""
                  }`}
                  disabled={isLoading}
                >
                  <span className="btn-text">
                    {isSuccess ? (
                      <>
                        <i className="fa-solid fa-circle-check"></i> Welcome back!
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Member Login
                      </>
                    )}
                  </span>
                  <span className="btn-loader" aria-hidden="true">
                    <span className="spinner"></span> Authenticating...
                  </span>
                  <span className="btn-glow" aria-hidden="true"></span>
                </button>

                <div className="divider">
                  <span>or continue with</span>
                </div>

                <div className="socials">
                  <button
                    type="button"
                    className="social-btn"
                    aria-label="Continue with Google"
                    onClick={handleSocialClick}
                  >
                    <i className="fa-brands fa-google"></i>
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    className="social-btn"
                    aria-label="Continue with Apple"
                    onClick={handleSocialClick}
                  >
                    <i className="fa-brands fa-apple"></i>
                    <span>Apple</span>
                  </button>
                  <button
                    type="button"
                    className="social-btn"
                    aria-label="Continue with Facebook"
                    onClick={handleSocialClick}
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                  </button>
                </div>

                <p className="signup-hint">
                  New to True Fitness?{" "}
                  <a href="#" className="link-accent">
                    Visit your gym front desk
                  </a>
                </p>
              </form>
            </div>

            <p className="legal">
              <i className="fa-solid fa-shield-halved"></i>
              Protected by enterprise-grade encryption. By logging in you agree to our{" "}
              <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
