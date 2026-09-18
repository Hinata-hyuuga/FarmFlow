import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Home,
  LogOut,
  User,
  Leaf,
  Sprout,
  TreePine,
  Wheat,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { usePushSetup } from "@/hooks/usePushSetup";

const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
  return [
    "group flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium",
    "transition-all duration-200",
    isActive
      ? "bg-green-100 text-green-700 shadow-sm"
      : "text-neutral-600 hover:bg-green-50 hover:text-green-700",
  ].join(" ");
};

const iconProps = {
  size: 18,
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

export const AppShell: React.FC = () => {
  const { user, logout } = useAuth();
  usePushSetup(Boolean(user));

  const firstName = user?.name?.split(" ")[0] || "Farmer";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f7faf7]">
      {/* -------------------------------------------------- */}
      {/* Decorative farming background */}
      {/* -------------------------------------------------- */}

      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Large soft green circles */}
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute -right-32 top-[45%] h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[35%] h-72 w-72 rounded-full bg-lime-100/30 blur-3xl" />

        {/* Top-left plants */}
        <Leaf
          className="absolute left-5 top-28 rotate-[-25deg] text-green-600/30"
          size={42}
        />

        <Sprout
          className="absolute left-20 top-44 rotate-12 text-emerald-600/30"
          size={34}
        />

        <TreePine
          className="absolute left-2 top-[55%] text-green-700/30"
          size={70}
        />

        {/* Right side plants */}
        <Leaf
          className="absolute right-8 top-36 rotate-45 text-green-600/20"
          size={48}
        />

        <Sprout
          className="absolute right-20 top-[52%] rotate-[-15deg] text-emerald-600/20"
          size={38}
        />

        <TreePine
          className="absolute right-0 top-[68%] text-green-700/30"
          size={76}
        />

        {/* Bottom farming symbols */}
        <Wheat
          className="absolute bottom-20 left-10 rotate-[-15deg] text-lime-700/30"
          size={55}
        />

        <Leaf
          className="absolute bottom-10 right-24 rotate-[-35deg] text-green-600/20"
          size={45}
        />

        <Sprout
          className="absolute bottom-32 right-5 text-emerald-600/20"
          size={32}
        />
      </div>

      {/* -------------------------------------------------- */}
      {/* Header */}
      {/* -------------------------------------------------- */}

      <header className="sticky top-0 z-20 overflow-hidden border-b border-green-700/10 bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 text-white shadow-lg shadow-green-900/10">
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Soft glow */}
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-lime-300/15 blur-3xl" />
          <div className="absolute right-[-50px] top-[-70px] h-56 w-56 rounded-full bg-emerald-200/15 blur-3xl" />

          {/* Botanical decoration */}
          <Leaf
            size={90}
            className="absolute -left-3 top-2 rotate-[-25deg] text-white/[0.08]"
          />

          <Leaf
            size={65}
            className="absolute right-[22%] top-[-20px] rotate-45 text-lime-200/[0.08]"
          />

          <TreePine
            size={100}
            className="absolute right-[-10px] bottom-[-35px] text-white/[0.06]"
          />

          <Sprout
            size={60}
            className="absolute left-[42%] bottom-[-25px] rotate-[-15deg] text-lime-200/[0.07]"
          />

          {/* Tiny decorative dots */}
          <div className="absolute left-[35%] top-4 h-1.5 w-1.5 rounded-full bg-lime-200/30" />
          <div className="absolute left-[65%] top-8 h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute right-[35%] bottom-3 h-1.5 w-1.5 rounded-full bg-lime-200/20" />
        </div>

        <div className="relative mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <NavLink to="/" className="group flex items-center gap-2.5">
            {/* Logo icon */}
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/15 shadow-inner ring-1 ring-white/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-white/20">
              <span className="relative z-10 text-xl">🌾</span>

              {/* Small glow behind emoji */}
              <span className="absolute inset-0 rounded-xl bg-lime-300/10 blur-md" />
            </span>

            {/* Brand */}
            <div className="leading-none">
              <span className="block text-lg font-extrabold tracking-tight text-white">
                FarmFlow
              </span>

              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-lime-100/75">
                Smart Farming
              </span>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-black/10 p-1 shadow-inner backdrop-blur-md">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [
                  "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              <Home {...iconProps} />
              <span className="hidden sm:inline">Home</span>
            </NavLink>

            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                [
                  "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              <BookOpen {...iconProps} />
              <span className="hidden sm:inline">Bookings</span>
            </NavLink>

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                [
                  "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              <Bell {...iconProps} />
              <span className="hidden sm:inline">Alerts</span>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                [
                  "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              <User {...iconProps} />
              <span className="hidden sm:inline">Profile</span>
            </NavLink>

            {/* Logout */}
            <button
              type="button"
              onClick={() => void logout()}
              title="Logout"
              className="ml-0.5 flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-white/75 transition-all duration-200 hover:bg-red-400/15 hover:text-red-100"
            >
              <LogOut {...iconProps} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* Main content */}
      {/* -------------------------------------------------- */}

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-4 py-7">
        {/* Greeting */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Sprout size={19} strokeWidth={2} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-green-600/70">
              Welcome back
            </p>

            <p className="text-sm text-neutral-500">
              Namaste,{" "}
              <span className="font-bold text-neutral-800">{firstName}</span> 🌱
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <Outlet />
        </div>
      </main>

      {/* -------------------------------------------------- */}
      {/* Footer */}
      {/* -------------------------------------------------- */}

      <footer className="relative z-10 border-t border-green-100 bg-white/70 px-4 py-5 text-center backdrop-blur">
        <div className="mb-1 flex items-center justify-center gap-1.5 text-green-600/80">
          <Leaf size={13} />
          <span className="text-s font-semibold">FarmFlow</span>
          <Leaf size={13} className="rotate-180" />
        </div>

        <p className="text-[13px] text-black-400">
          Smart Farmer Procurement Management - SIH PIEMR
        </p>
      </footer>
    </div>
  );
};
