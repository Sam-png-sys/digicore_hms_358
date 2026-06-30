const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import {
  Users, CalendarCheck2, BedDouble, Pill, DollarSign, Clock,
  ArrowUpRight, ArrowDownRight, TrendingUp, AlertCircle,
  Activity as ActivityIcon, Stethoscope, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "DIGICORE" }] }),
  component: Dashboard,
});

const KPIS = [
  { label: "Active Patients", value: "1,248", delta: "+12.4%", trend: "up", icon: Users, accent: "emerald" },
  { label: "Today's Appointments", value: "42", delta: "Steady", trend: "flat", icon: CalendarCheck2, accent: "cyan" },
  { label: "Bed Occupancy", value: "78%", sub: "124/160 units", delta: "-3%", trend: "down", icon: BedDouble, accent: "cyan", glow: "cyan"  },
  { label: "Pharmacy Orders", value: "48", delta: "+8%", trend: "up", icon: Pill, accent: "emerald" },
  { label: "Avg Wait Time", value: "14m", delta: "-3m", trend: "up", icon: Clock, accent: "emerald" },
  { label: "Revenue Today", value: "$24,860", delta: "+15%", trend: "up", icon: DollarSign, accent: "emerald", glow: "emerald"  },
];

const DEPTS = [
  { name: "Cardiology", pct: 88, patients: 42, color: "bg-primary", critical: false },
  { name: "Oncology", pct: 64, patients: 31, color: "bg-accent", critical: false },
  { name: "Pediatrics", pct: 42, patients: 38, color: "bg-zinc-600", critical: false },
  { name: "Orthopedics", pct: 72, patients: 29, color: "bg-primary", critical: false },
  { name: "Neurology", pct: 55, patients: 22, color: "bg-accent", critical: false },
  { name: "Emergency Room", pct: 94, patients: 18, color: "bg-warning", critical: true },
];

const APPTS = [
  { name: "Marcus Chen", time: "10:30 AM", doctor: "Dr. Sarah Miller", type: "Pre-op Consultation", status: "Urgent" },
  { name: "Elena Rodriguez", time: "11:15 AM", doctor: "Dr. Marcus Thorne", type: "Post-op Review", status: "Confirmed" },
  { name: "David Okoro", time: "12:00 PM", doctor: "Dr. Julian Vance", type: "General Diagnostic", status: "Confirmed" },
  { name: "Hanna Schmidt", time: "01:45 PM", doctor: "Dr. Li Wei", type: "Neurology Urgent", status: "Urgent" },
  { name: "Jeevan Sasane", time: "02:20 PM", doctor: "Dr. Sneha Shah", type: "Orthopedic Follow-up", status: "Pending" },
];

const ACTIVITY = [
  { time: "2m ago", text: "Bed #B-204 marked available", type: "ok" },
  { time: "8m ago", text: "Patient Jeevan Sasane registered", type: "info" },
  { time: "15m ago", text: "Pharmacy order PO-8821 dispatched", type: "info" },
  { time: "22m ago", text: "ER capacity exceeded 90%", type: "warn" },
  { time: "45m ago", text: "Lab result ready for Anita Patel", type: "ok" },
];

function Dashboard() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Command Deck" ,
        description: "Real-time facility telemetry and clinical activity across all primary departments."         ,
        action: 
          _jsxDEV('div', { className: "text-right", children: [
            _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground"    , children: "System Status" }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
            , _jsxDEV('div', { className: "flex items-center gap-1.5 justify-end mt-1"    , children: [
              _jsxDEV('span', { className: "size-2 rounded-full bg-primary pulse-dot"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this )
              , _jsxDEV('span', { className: "text-sm font-medium" , children: "Operational"}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this
      )

      /* KPI Grid */
      , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"     , children: 
        KPIS.map((k, i) => (
          _jsxDEV(Card, { glow: k.glow, className: "p-4 hover:ring-primary/30 transition-all group cursor-pointer animate-rise"     , children: [
            _jsxDEV('div', { className: "flex items-start justify-between mb-3"   , style: { animationDelay: `${i * 50}ms` }, children: [
              _jsxDEV('div', { className: `size-8 rounded-lg grid place-items-center ${
                k.accent === "emerald" ? "bg-primary/10 text-primary" : k.accent === "cyan" ? "bg-accent/10 text-accent" : "bg-warning/10 text-warning"
              }`, children: 
                _jsxDEV(k.icon, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
              , _jsxDEV(ArrowUpRight, { className: "size-3.5 text-muted-foreground/40 group-hover:text-foreground transition-colors"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 69}, this)
            , _jsxDEV('p', { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1"     , children: k.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
            , _jsxDEV('div', { className: "text-2xl font-semibold tracking-tight"  , children: k.value}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
            , k.sub && _jsxDEV('div', { className: "text-[10px] text-muted-foreground mt-0.5"  , children: k.sub}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
            , _jsxDEV('div', { className: `text-[11px] mt-1.5 flex items-center gap-1 ${
              k.trend === "up" ? "text-primary" : k.trend === "down" ? "text-warning" : "text-muted-foreground"
            }`, children: [
              k.trend === "up" ? _jsxDEV(ArrowUpRight, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this ) : k.trend === "down" ? _jsxDEV(ArrowDownRight, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this ) : _jsxDEV(TrendingUp, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this )
              , k.delta, " vs yesterday"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 80}, this)
          ]}, k.label, true, {fileName: _jsxFileName, lineNumber: 68}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)

      /* Middle row */
      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"    , children: [
        /* Department Occupancy */
        _jsxDEV(Card, { className: "lg:col-span-2 p-6" , children: [
          _jsxDEV('div', { className: "flex items-center justify-between mb-6"   , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h3', { className: "text-base font-semibold" , children: "Departmental Load" }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
              , _jsxDEV('p', { className: "text-xs text-muted-foreground mt-0.5"  , children: "Live capacity across all wards"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 95}, this)
            , _jsxDEV('button', { className: "text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"      , children: ["View detailed logs "
                 , _jsxDEV(ChevronRight, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 99}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
          , _jsxDEV('div', { className: "space-y-5", children: 
            DEPTS.map((d) => (
              _jsxDEV('div', { className: "group", children: [
                _jsxDEV('div', { className: "flex justify-between items-center text-xs mb-2"    , children: [
                  _jsxDEV('span', { className: "text-foreground font-medium flex items-center gap-2"    , children: [
                    d.name
                    , d.critical && _jsxDEV('span', { className: "px-1.5 py-0.5 rounded text-[9px] bg-warning/10 text-warning font-mono uppercase tracking-wider"        , children: "Critical"}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
                  , _jsxDEV('span', { className: "text-muted-foreground", children: [_jsxDEV('span', { className: `font-medium ${d.critical ? "text-warning" : "text-foreground"}`, children: [d.pct, "%"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 111}, this), " · "  , d.patients, " patients" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 111}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)
                , _jsxDEV('div', { className: "h-1.5 w-full bg-secondary rounded-full overflow-hidden"    , children: 
                  _jsxDEV('div', {
                    className: `h-full ${d.color} rounded-full transition-all duration-1000 ${d.critical ? "glow-amber" : d.color === "bg-primary" ? "glow-emerald" : d.color === "bg-accent" ? "glow-cyan" : ""}`,
                    style: { width: `${d.pct}%` },}, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this
                  )
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
              ]}, d.name, true, {fileName: _jsxFileName, lineNumber: 105}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 93}, this)

        /* Priority Rounds */
        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center justify-between mb-5"   , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h3', { className: "text-base font-semibold" , children: "Today's Appointments" }, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
              , _jsxDEV('p', { className: "text-xs text-muted-foreground mt-0.5"  , children: [APPTS.length, " scheduled" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 129}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
            , _jsxDEV(Link, { to: "/opd/appointments", className: "text-xs text-primary hover:underline"  , children: "View All" }, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 126}, this)
          , _jsxDEV('div', { className: "space-y-2", children: 
            APPTS.map((a) => (
              _jsxDEV('div', { className: "p-3 hover:bg-white/[0.03] rounded-lg transition-colors cursor-pointer group border border-transparent hover:border-border"        , children: [
                _jsxDEV('div', { className: "flex justify-between items-start mb-1"   , children: [
                  _jsxDEV('span', { className: "text-sm font-medium" , children: a.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 137}, this)
                  , _jsxDEV('span', { className: `text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    a.status === "Urgent" ? "bg-warning/10 text-warning" :
                    a.status === "Pending" ? "bg-accent/10 text-accent" :
                    "bg-primary/10 text-primary"
                  }`, children: a.time}, void 0, false, {fileName: _jsxFileName, lineNumber: 138}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 136}, this)
                , _jsxDEV('p', { className: "text-[11px] text-muted-foreground" , children: [a.type, " · "  , a.doctor]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)
              ]}, a.name, true, {fileName: _jsxFileName, lineNumber: 135}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 91}, this)

      /* Bottom row */
      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6"   , children: [
        _jsxDEV(Card, { className: "p-6 lg:col-span-2" , children: [
          _jsxDEV('div', { className: "flex items-center justify-between mb-5"   , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h3', { className: "text-base font-semibold" , children: "Patient Flow · Last 24h"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this)
              , _jsxDEV('p', { className: "text-xs text-muted-foreground mt-0.5"  , children: "Admissions, discharges and ER intake"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 155}, this)
            , _jsxDEV('div', { className: "flex gap-3 text-[11px] text-muted-foreground"   , children: [
              _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV('span', { className: "size-2 rounded-full bg-primary"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this ), " Admissions" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 160}, this)
              , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV('span', { className: "size-2 rounded-full bg-accent"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 161}, this ), " Discharges" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 161}, this)
              , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV('span', { className: "size-2 rounded-full bg-warning"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 162}, this ), " ER" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 162}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 159}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 154}, this)
          , _jsxDEV(MiniChart, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 153}, this)

        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center justify-between mb-5"   , children: [
            _jsxDEV('h3', { className: "text-base font-semibold" , children: "Activity Stream" }, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
            , _jsxDEV('span', { className: "size-2 rounded-full bg-primary pulse-dot"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
          , _jsxDEV('div', { className: "space-y-4", children: 
            ACTIVITY.map((a, i) => (
              _jsxDEV('div', { className: "flex gap-3 text-xs"  , children: [
                _jsxDEV('div', { className: `size-6 rounded-md grid place-items-center shrink-0 ${
                  a.type === "warn" ? "bg-warning/10 text-warning" : a.type === "ok" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`, children: 
                  a.type === "warn" ? _jsxDEV(AlertCircle, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this ) : a.type === "ok" ? _jsxDEV(ActivityIcon, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this ) : _jsxDEV(Stethoscope, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this )
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 176}, this)
                , _jsxDEV('div', { className: "flex-1 pt-0.5" , children: [
                  _jsxDEV('p', { className: "text-foreground", children: a.text}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this)
                  , _jsxDEV('p', { className: "text-[10px] text-muted-foreground font-mono mt-0.5"   , children: a.time}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)
              ]}, i, true, {fileName: _jsxFileName, lineNumber: 175}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 168}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 152}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)
  );
}

function MiniChart() {
  // Hand-drawn SVG sparkline trio
  const adm = [20, 28, 24, 32, 38, 30, 42, 48, 36, 44, 52, 46];
  const dis = [12, 18, 22, 16, 24, 28, 20, 26, 32, 28, 24, 30];
  const er = [6, 9, 7, 12, 10, 14, 18, 16, 22, 19, 24, 28];
  const max = 60;
  const w = 600, h = 180;
  const path = (data) => {
    const step = w / (data.length - 1);
    return data.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (v / max) * h}`).join(" ");
  };
  const area = (data) => `${path(data)} L ${w} ${h} L 0 ${h} Z`;
  return (
    _jsxDEV('div', { className: "w-full h-44" , children: 
      _jsxDEV('svg', { viewBox: `0 0 ${w} ${h}`, className: "w-full h-full" , preserveAspectRatio: "none", children: [
        _jsxDEV('defs', { children: [
          _jsxDEV('linearGradient', { id: "g1", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            _jsxDEV('stop', { offset: "0%", stopColor: "oklch(0.72 0.17 162)"  , stopOpacity: "0.4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 211}, this )
            , _jsxDEV('stop', { offset: "100%", stopColor: "oklch(0.72 0.17 162)"  , stopOpacity: "0",}, void 0, false, {fileName: _jsxFileName, lineNumber: 212}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 210}, this)
          , _jsxDEV('linearGradient', { id: "g2", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            _jsxDEV('stop', { offset: "0%", stopColor: "oklch(0.72 0.13 215)"  , stopOpacity: "0.3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 215}, this )
            , _jsxDEV('stop', { offset: "100%", stopColor: "oklch(0.72 0.13 215)"  , stopOpacity: "0",}, void 0, false, {fileName: _jsxFileName, lineNumber: 216}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 214}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 209}, this)
        , [0.25, 0.5, 0.75].map((y) => (
          _jsxDEV('line', { x1: "0", x2: w, y1: h * y, y2: h * y, stroke: "oklch(1 0 0 / 0.05)"    , strokeDasharray: "2 4" ,}, y, false, {fileName: _jsxFileName, lineNumber: 220}, this )
        ))
        , _jsxDEV('path', { d: area(adm), fill: "url(#g1)",}, void 0, false, {fileName: _jsxFileName, lineNumber: 222}, this )
        , _jsxDEV('path', { d: area(dis), fill: "url(#g2)",}, void 0, false, {fileName: _jsxFileName, lineNumber: 223}, this )
        , _jsxDEV('path', { d: path(adm), stroke: "oklch(0.72 0.17 162)"  , strokeWidth: "2", fill: "none",}, void 0, false, {fileName: _jsxFileName, lineNumber: 224}, this )
        , _jsxDEV('path', { d: path(dis), stroke: "oklch(0.72 0.13 215)"  , strokeWidth: "2", fill: "none",}, void 0, false, {fileName: _jsxFileName, lineNumber: 225}, this )
        , _jsxDEV('path', { d: path(er), stroke: "oklch(0.76 0.16 70)"  , strokeWidth: "2", fill: "none", strokeDasharray: "4 3" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 226}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 207}, this)
  );
}
