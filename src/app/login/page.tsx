import type { Metadata } from "next";
import LoginView from "./LoginView";

export const metadata: Metadata = {
  title: "True Fitness | Member Login",
  description:
    "True Fitness - Premium Gym Management System. Login to continue your fitness journey.",
};

export default function LoginPage() {
  return <LoginView />;
}
