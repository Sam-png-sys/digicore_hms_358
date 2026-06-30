import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  BadgePercent,
  BedDouble,
  Bell,
  Boxes,
  Building2,
  Calculator,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  DoorOpen,
  FileHeart,
  FileSignature,
  FileText,
  FlaskConical,
  HeartPulse,
  Home,
  Hospital,
  LayoutDashboard,
  ListChecks,
  ListOrdered,
  LogOut,
  Maximize2,
  Menu,
  Monitor,
  Microscope,
  ScanSearch,
  Receipt,
  RotateCcw,
  Scissors,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  User as UserIcon,
  UserCheck,
  UserPlus,
  Wallet,
  X,
} from "lucide-react";

const NAV = [
  {
    section: "Core Systems",
    items: [
      { label: "Command Deck", icon: LayoutDashboard, to: "/dashboard" },
      {
        label: "OPD",
        icon: Home,
        children: [
          { label: "Appointments", to: "/opd/appointments", icon: CalendarDays },
          { label: "Patient Registration", to: "/opd/patient-registration", icon: UserPlus },
          { label: "Patient Queue", to: "/opd/patient-queue", icon: ListChecks },
          { label: "Medical Record", to: "/opd/medical-record", icon: FileHeart },
          { label: "Bill", to: "/opd/bill", icon: Receipt },
          { label: "Bill List", to: "/opd/bill-list", icon: ListOrdered },
          { label: "Bill-Refund", to: "/opd/bill-refund", icon: RotateCcw },
          { label: "Bill Concession", to: "/opd/bill-concession", icon: BadgePercent },
        ],
      },
      {
        label: "Bill Settlement",
        icon: Wallet,
        children: [
          { label: "Patient", to: "/opd/bill-settlement", icon: UserIcon },
          { label: "Company", to: "/opd/bill-settlement", icon: Building2 },
        ],
      },
      {
        label: "IPD",
        icon: BedDouble,
        children: [
          { label: "Admission", to: "/ipd/admission", icon: UserCheck },
          { label: "Admission List", to: "/ipd/admission-list", icon: ListOrdered },
          { label: "IPD Charge", to: "/ipd/charge", icon: Receipt },
          { label: "Token Display", to: "/ipd/token-display", icon: Monitor },
          { label: "ERE", to: "/ipd/ere", icon: FileSignature },
        ],
      },
      {
        label: "Ward Management",
        icon: Hospital,
        children: [
          { label: "General Ward", to: "/ipd/ward/general", icon: BedDouble },
          { label: "ICU", to: "/ipd/ward/icu", icon: HeartPulse },
          { label: "Private Rooms", to: "/ipd/ward/private", icon: DoorOpen },
        ],
      },
      { label: "Nursing", icon: Stethoscope, to: "/nursing" },
      { label: "OT Details", icon: Scissors, to: "/ot" },
      { label: "Pathology Lab", icon: Microscope, to: "/pathology-lab" },
      { label: "Radiology Lab", icon: ScanSearch, to: "/radiology-lab" },
    ],
  },
  {
    section: "Administrative",
    items: [
      { label: "Investigations", icon: FlaskConical, to: "/investigations" },
      { label: "Inventory", icon: Boxes, to: "/inventory" },
      { label: "MRD", icon: FileText, to: "/mrd" },
      { label: "NABH", icon: ShieldCheck, to: "/nabh" },
      { label: "Administration", icon: Settings2, to: "/administration" },
      { label: "Tally Interface", icon: Calculator, to: "/tally" },
    ],
  },
];

function NavGroup({ item, pathname, onNavigate }) {
  const childActive = item.children?.some((child) => pathname.startsWith(child.to));
  const [open, setOpen] = useState(Boolean(childActive));

  useEffect(() => {
    if (childActive) setOpen(true);
  }, [childActive]);

  if (!item.children) {
    const active = item.to === pathname;
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all group ${
          active
            ? "bg-primary/10 text-primary glow-emerald"
            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
        }`}
      >
        <item.icon className="size-4 shrink-0" />
        <span>{item.label}</span>
        {active && <span className="ml-auto size-1.5 rounded-full bg-primary pulse-dot" />}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((value) => !value)}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
          childActive ? "text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
        }`}
      >
        <item.icon className="size-4 shrink-0" />
        <span>{item.label}</span>
        <ChevronDown className={`ml-auto size-3.5 transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <div className="mt-1 ml-3 space-y-0.5 border-l border-border pl-3">
          {item.children.map((child) => {
            const active = pathname === child.to;
            return (
              <Link
                key={child.label}
                to={child.to}
                onClick={onNavigate}
                className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-all ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <child.icon className="size-3.5 shrink-0 opacity-70" />
                <span>{child.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Brand({ compact = false }) {
  return (
    <Link to="/dashboard" className="flex items-center gap-2.5 group">
      <div className="grid size-9 place-items-center rounded-lg bg-primary glow-emerald transition-transform group-hover:scale-105">
        <Activity className="size-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
      {!compact && (
        <div>
          <div className="text-base font-semibold tracking-tight leading-none">DIGICORE</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            HMIS - v2.6
          </div>
        </div>
      )}
    </Link>
  );
}

function Sidebar({ pathname, onNavigate }) {
  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="p-5">
        <Brand />
      </div>
      <nav className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {NAV.map((section) => (
          <div key={section.section}>
            <div className="mb-2 px-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
              {section.section}
            </div>
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavGroup key={item.label} item={item} pathname={pathname} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5">
          <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 text-xs font-semibold ring-1 ring-white/10">
            JV
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Dr. Julian Vance</p>
            <p className="truncate text-[11px] text-muted-foreground">Chief Administrator</p>
          </div>
          <Link to="/auth" className="rounded-md p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
            <LogOut className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AppShell({ children }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border lg:block">
        <Sidebar pathname={pathname} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative h-full w-[min(20rem,88vw)] border-r border-border shadow-2xl">
            <div className="absolute right-3 top-3 z-10">
              <button
                aria-label="Close menu"
                className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <Sidebar pathname={pathname} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <main className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex min-h-16 items-center gap-3 border-b border-border bg-background/80 px-3 backdrop-blur-md sm:px-6">
          <button
            aria-label="Open menu"
            className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <div className="lg:hidden">
            <Brand compact />
          </div>
          <div className="hidden w-full max-w-md flex-1 items-center md:flex">
            <div className="relative flex w-full items-center">
              <Search className="absolute left-3 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search records, patients, doctors..."
                className="w-full rounded-full bg-card py-2 pr-4 pl-10 text-sm ring-1 ring-border outline-none transition-all placeholder:text-muted-foreground/60 focus:ring-primary/40"
              />
              <kbd className="absolute right-3 hidden items-center gap-1 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground/60 md:flex">
                Ctrl K
              </kbd>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              <BedDouble className="size-4" />
            </button>
            <button className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:block">
              <Maximize2 className="size-4" />
            </button>
            <button className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              <Bell className="size-4" />
              <span className="pulse-dot absolute top-1.5 right-1.5 size-1.5 rounded-full bg-warning" />
            </button>
            <Link
              to="/opd/patient-registration"
              className="hidden rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 sm:inline-flex"
            >
              + Register Patient
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}

export function PageHeader({ title, description, action, breadcrumb }) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-6 animate-rise">
      <div>
        {breadcrumb && (
          <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>{breadcrumb}</span>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{title}</span>
          </div>
        )}
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl">
          {title}
        </h1>
        {description && <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </header>
  );
}

export function Card({ children, className = "", glow }) {
  const glowClass =
    glow === "emerald"
      ? "border-b-2 border-b-primary"
      : glow === "cyan"
        ? "border-b-2 border-b-accent"
        : glow === "amber"
          ? "border-b-2 border-b-warning"
          : "";

  return <div className={`rounded-xl bg-card ring-1 ring-border ${glowClass} ${className}`}>{children}</div>;
}

export function EmptyState({
  title = "No data available",
  description = "There are no records to display at this time.",
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 grid size-14 place-items-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
        <Activity className="size-6 text-primary/70" />
      </div>
      <p className="text-base font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
