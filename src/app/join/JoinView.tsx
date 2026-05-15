"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import "../login/login.css";
import "./join.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLANS = ["basic", "pro", "premium"] as const;
type Plan = (typeof PLANS)[number];

function normalizePlan(value: string | null): Plan {
  const v = (value || "").toLowerCase();
  return PLANS.includes(v as Plan) ? (v as Plan) : "pro";
}

export default function JoinView() {
  const searchParams = useSearchParams();
  const initialPlan = normalizePlan(searchParams.get("plan"));

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState<Plan>(initialPlan);
  const [goals, setGoals] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setPlan(normalizePlan(searchParams.get("plan")));
  }, [searchParams]);

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

    const trimmedName = fullName.trim();
    const nameValid = trimmedName.length >= 2;
    const trimmedEmail = email.trim();
    const emailValid =
      trimmedEmail.length === 0 || EMAIL_REGEX.test(trimmedEmail);
    const digits = phone.replace(/\D/g, "");
    const phoneValid = digits.length >= 10;

    setNameError(!nameValid);
    setEmailError(!emailValid);
    setPhoneError(!phoneValid);

    if (!nameValid) shake(nameRef.current);
    if (!phoneValid) shake(phoneRef.current);
    if (!nameValid || !emailValid || !phoneValid) return;

    setIsLoading(true);
    setIsSuccess(false);

    window.setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      window.setTimeout(() => setIsSuccess(false), 2200);
    }, 1200);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const card = cardRef.current;
    if (!card) return;
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) {
      return;
    }

    const TILT_MAX_DEG = 4;
    let raf: number | null = null;

    const onMouseMove = (ev: globalThis.MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width - 0.5;
      const y = (ev.clientY - rect.top) / rect.height - 0.5;
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

  return (
    <div className="login-page join-page">
      <div className="bg-wrapper" aria-hidden="true">
        <div className="bg-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="noise"></div>
      </div>

      <header className="top-bar">
        <Link href="/" className="brand" aria-label="True Fitness Home">
          <span className="brand-mark">
            <i className="fa-solid fa-bolt"></i>
          </span>
          <span className="brand-text">
            TRUE <span className="brand-accent">FITNESS</span>
          </span>
        </Link>
        <Link href="/login" className="top-link">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Member Login</span>
        </Link>
      </header>

      <main className="page">
        <section className="login-shell">
          <aside className="visual-side" aria-hidden="true">
            <div className="visual-inner">
              <div className="visual-brand">
                <span className="brand-mark large">
                  <i className="fa-solid fa-dumbbell"></i>
                </span>
                <span className="brand-text large">
                  TRUE <span className="brand-accent">FITNESS</span>
                </span>
              </div>

              <div className="hero-copy">
                <span className="eyebrow">
                  <span className="dot"></span> New member signup
                </span>
                <h1>
                  Join the club.
                  <br />
                  <span className="gradient-text">Own your goals.</span>
                </h1>
                <p>
                  Tell us a bit about yourself and we&apos;ll reach out with next steps, tour
                  options, and the plan that fits you best.
                </p>
              </div>

              <div className="visual-footer">
                <div className="trust-item">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>Your data stays private</span>
                </div>
                <div className="trust-item">
                  <i className="fa-solid fa-bolt-lightning"></i>
                  <span>Same-day callbacks</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="form-side">
            <div className="login-card" ref={cardRef}>
              <span className="card-border-glow" aria-hidden="true"></span>

              <div className="card-head">
                <span className="badge">
                  <i className="fa-solid fa-user-plus"></i> Membership inquiry
                </span>
                <h2>Join True Fitness</h2>
                <p className="subtitle">Complete the form and our team will contact you shortly.</p>
              </div>

              <form className="join-form" onSubmit={handleSubmit} noValidate>
                <div className="join-field">
                  <label htmlFor="join-full-name">Full name</label>
                  <input
                    id="join-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    ref={nameRef}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (nameError) setNameError(false);
                    }}
                    className={nameError ? "has-error" : undefined}
                    aria-invalid={nameError}
                    placeholder="Alex Johnson"
                  />
                </div>

                <div className="join-field">
                  <label htmlFor="join-email">Email (optional)</label>
                  <input
                    id="join-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(false);
                    }}
                    className={emailError ? "has-error" : undefined}
                    aria-invalid={emailError}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="join-field">
                  <label htmlFor="join-phone">Phone</label>
                  <input
                    id="join-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    ref={phoneRef}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(false);
                    }}
                    className={phoneError ? "has-error" : undefined}
                    aria-invalid={phoneError}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="join-field">
                  <label htmlFor="join-plan">Preferred plan</label>
                  <select
                    id="join-plan"
                    name="plan"
                    value={plan}
                    onChange={(e) => setPlan(normalizePlan(e.target.value))}
                  >
                    <option value="basic">Basic — $29/mo</option>
                    <option value="pro">Pro — $59/mo</option>
                    <option value="premium">Premium — $99/mo</option>
                  </select>
                </div>

                <div className="join-field">
                  <label htmlFor="join-goals">Fitness goals (optional)</label>
                  <textarea
                    id="join-goals"
                    name="goals"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="e.g. weight loss, strength, marathon training…"
                    rows={4}
                  />
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
                        <i className="fa-solid fa-circle-check"></i> Request received
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i> Submit application
                      </>
                    )}
                  </span>
                  <span className="btn-loader" aria-hidden="true">
                    <span className="spinner"></span> Sending...
                  </span>
                  <span className="btn-glow" aria-hidden="true"></span>
                </button>

                <p className="join-hint">
                  Already a member?{" "}
                  <Link href="/login" className="link-accent">
                    Sign in here
                  </Link>
                  .
                </p>
              </form>
            </div>

            <p className="legal">
              <i className="fa-solid fa-shield-halved"></i>
              By submitting you agree to our <a href="#">Terms</a> &amp;{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
