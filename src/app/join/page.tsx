import type { Metadata } from "next";
import { Suspense } from "react";
import JoinView from "./JoinView";

export const metadata: Metadata = {
  title: "True Fitness | Join Now",
  description:
    "Apply for True Fitness membership. Choose your plan and our team will get back to you.",
};

function JoinLoading() {
  return (
    <div
      className="login-page"
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        color: "#a4adbb",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <span aria-live="polite">Loading…</span>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<JoinLoading />}>
      <JoinView />
    </Suspense>
  );
}
