const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { useState } from "react";
import {
  Users, Shield, Building2, Stethoscope, Tags, ScrollText, Settings2,
  Search, Plus, MoreHorizontal, CheckCircle2, XCircle, Activity,
  Mail, Phone, ChevronRight, Edit3, Trash2, KeyRound, Database, Cloud,
} from "lucide-react";

export const Route = createFileRoute("/_app/administration")({
  head: () => ({ meta: [{ title: "Administration" }] }),
  component: Administration,
});



const TABS = [
  { id: "users", label: "Users", icon: Users },
  { id: "roles", label: "Roles & Permissions", icon: Shield },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "doctors", label: "Doctors", icon: Stethoscope },
  { id: "tariffs", label: "Tariffs", icon: Tags },
  { id: "audit", label: "Audit Log", icon: ScrollText },
  { id: "settings", label: "System Settings", icon: Settings2 },
];

function Administration() {
  const [tab, setTab] = useState("users");
  return (
    _jsxDEV('div', { className: "p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Administration",
        breadcrumb: "System · Control Center"   ,
        description: "Manage users, access policies, masters and hospital-wide configuration."       ,
        action: 
          _jsxDEV('div', { className: "flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground"       , children: [
            _jsxDEV('span', { className: "size-1.5 rounded-full bg-primary pulse-dot"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this ), " All systems nominal"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this
      )

      /* KPI strip */
      , _jsxDEV('div', { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6"    , children: 
        [
          { label: "Active Users", value: 184, sub: "+6 this week", icon: Users, tone: "primary" },
          { label: "Roles Defined", value: 12, sub: "3 system · 9 custom", icon: Shield, tone: "accent" },
          { label: "Departments", value: 24, sub: "All operational", icon: Building2, tone: "primary" },
          { label: "Audit Events / 24h", value: "1,402", sub: "0 critical alerts", icon: Activity, tone: "warning" },
        ].map((s) => (
          _jsxDEV(Card, { className: "p-5", children: [
            _jsxDEV('div', { className: "flex items-start justify-between mb-3"   , children: [
              _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground"    , children: s.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
              , _jsxDEV(s.icon, { className: `size-4 ${s.tone === "primary" ? "text-primary" : s.tone === "accent" ? "text-accent" : "text-warning"}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)
            , _jsxDEV('div', { className: "text-3xl font-semibold tracking-tight"  , children: s.value}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
            , _jsxDEV('div', { className: "text-[11px] text-muted-foreground mt-1"  , children: s.sub}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
          ]}, s.label, true, {fileName: _jsxFileName, lineNumber: 50}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)

      /* Tabs */
      , _jsxDEV('div', { className: "flex gap-1.5 mb-6 p-1.5 bg-card ring-1 ring-border rounded-xl overflow-x-auto"        , children: 
        TABS.map((t) => {
          const active = tab === t.id;
          return (
            _jsxDEV('button', {

              onClick: () => setTab(t.id),
              className: `flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                active ? "bg-primary text-primary-foreground glow-emerald" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`,
 children: [
              _jsxDEV(t.icon, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this ), " " , t.label
            ]}, t.id, true, {fileName: _jsxFileName, lineNumber: 66}, this)
          );
        })
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)

      , tab === "users" && _jsxDEV(UsersTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this )
      , tab === "roles" && _jsxDEV(RolesTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this )
      , tab === "departments" && _jsxDEV(DepartmentsTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this )
      , tab === "doctors" && _jsxDEV(DoctorsTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this )
      , tab === "tariffs" && _jsxDEV(TariffsTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this )
      , tab === "audit" && _jsxDEV(AuditTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this )
      , tab === "settings" && _jsxDEV(SettingsTab, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)
  );
}

/* ============== USERS ============== */
const USERS = [
  { name: "Dr. Julian Vance", email: "j.vance@aetheris.io", role: "Chief Administrator", dept: "Executive", status: "online", last: "Just now" },
  { name: "Renu Kapoor", email: "r.kapoor@aetheris.io", role: "Consultant · Cardiology", dept: "Cardiology", status: "online", last: "4 min ago" },
  { name: "Aman Joshi", email: "a.joshi@aetheris.io", role: "Resident", dept: "Internal Med.", status: "away", last: "1 hr ago" },
  { name: "Meera Patel", email: "m.patel@aetheris.io", role: "Front Desk", dept: "Reception", status: "online", last: "12 min ago" },
  { name: "Vikram Sethi", email: "v.sethi@aetheris.io", role: "Consultant · Ortho", dept: "Orthopaedics", status: "offline", last: "Yesterday" },
  { name: "Nisha Rao", email: "n.rao@aetheris.io", role: "Billing Manager", dept: "Finance", status: "online", last: "2 min ago" },
];

const STATUS_TONE = {
  online: "bg-primary text-primary",
  away: "bg-warning text-warning",
  offline: "bg-muted-foreground/40 text-muted-foreground",
};

function UsersTab() {
  return (
    _jsxDEV(Card, { children: [
      _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"       , children: [
        _jsxDEV('div', { className: "relative flex-1 min-w-[240px] max-w-md"   , children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this )
          , _jsxDEV('input', { placeholder: "Search by name, email, role…"    , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 110}, this)
        , _jsxDEV('div', { className: "flex gap-2" , children: [
          _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: _jsxDEV('option', { children: "All Roles" }, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: _jsxDEV('option', { children: "All Departments" }, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)
          , _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:brightness-110"          , children: [
            _jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this ), " Invite User"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 114}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 109}, this)
      , _jsxDEV('div', { className: "overflow-x-auto", children: 
        _jsxDEV('table', { className: "w-full text-sm" , children: [
          _jsxDEV('thead', { className: "text-[11px] text-muted-foreground uppercase tracking-wider"   , children: 
            _jsxDEV('tr', { className: "border-b border-border" , children: 
              ["User", "Role", "Department", "Status", "Last Active", ""].map((h) => (
                _jsxDEV('th', { className: "text-left px-5 py-3 font-medium"   , children: h}, h, false, {fileName: _jsxFileName, lineNumber: 127}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)
          , _jsxDEV('tbody', { children: 
            USERS.map((u) => {
              const tone = STATUS_TONE[u.status];
              const [dot, text] = tone.split(" ");
              return (
                _jsxDEV('tr', { className: "border-b border-border/60 hover:bg-white/[0.02]"  , children: [
                  _jsxDEV('td', { className: "px-5 py-3" , children: 
                    _jsxDEV('div', { className: "flex items-center gap-3"  , children: [
                      _jsxDEV('div', { className: "size-9 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 ring-1 ring-white/10 grid place-items-center text-xs font-semibold"          , children: 
                        u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this)
                      , _jsxDEV('div', { children: [
                        _jsxDEV('div', { className: "font-medium", children: u.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this)
                        , _jsxDEV('div', { className: "text-[11px] text-muted-foreground" , children: u.email}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 142}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 137}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: u.role}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: u.dept}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
                  , _jsxDEV('td', { className: "px-5 py-3" , children: 
                    _jsxDEV('span', { className: `inline-flex items-center gap-1.5 text-xs ${text}`, children: [
                      _jsxDEV('span', { className: `size-1.5 rounded-full ${dot}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this ), " " , u.status
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 151}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground font-mono text-xs"    , children: u.last}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-right"  , children: 
                    _jsxDEV('button', { className: "p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5"    , children: _jsxDEV(MoreHorizontal, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 156}, this)
                ]}, u.email, true, {fileName: _jsxFileName, lineNumber: 136}, this)
              );
            })
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 123}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
      , _jsxDEV('div', { className: "p-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground"       , children: [
        _jsxDEV('span', { children: "Showing 6 of 184 users"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 166}, this)
        , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [_jsxDEV('button', { className: "px-2 py-1 hover:bg-white/5 rounded"   , children: "Prev"}, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this), _jsxDEV('span', { className: "font-mono", children: "1 / 31"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this), _jsxDEV('button', { className: "px-2 py-1 hover:bg-white/5 rounded"   , children: "Next"}, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 167}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 165}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 108}, this)
  );
}

/* ============== ROLES ============== */
const ROLES = [
  { name: "Chief Administrator", users: 2, perms: "Full access", system: true },
  { name: "Consultant", users: 38, perms: "Clinical + Billing", system: true },
  { name: "Resident", users: 22, perms: "Clinical (limited)", system: true },
  { name: "Billing Manager", users: 6, perms: "Finance + Reports", system: false },
  { name: "Front Desk", users: 14, perms: "Registration + Appts", system: false },
  { name: "Pharmacy", users: 9, perms: "Inventory + Dispense", system: false },
];

const PERMS = [
  { group: "Patient Management", items: ["View patients", "Edit demographics", "Discharge"] },
  { group: "Billing", items: ["Create bills", "Apply concessions", "Process refunds"] },
  { group: "Inventory", items: ["View stock", "Receive goods", "Adjust stock"] },
  { group: "Administration", items: ["Manage users", "Configure system", "View audit log"] },
];

function RolesTab() {
  const [selected, setSelected] = useState("Consultant");
  return (
    _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6"   , children: [
      _jsxDEV(Card, { children: [
        _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"     , children: [
          _jsxDEV('h3', { className: "font-semibold", children: "Roles"}, void 0, false, {fileName: _jsxFileName, lineNumber: 196}, this)
          , _jsxDEV('button', { className: "text-xs px-3 py-1.5 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-1.5"         , children: [_jsxDEV(Plus, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 197}, this ), " New Role"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 197}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 195}, this)
        , _jsxDEV('div', { className: "divide-y divide-border" , children: 
          ROLES.map((r) => {
            const active = r.name === selected;
            return (
              _jsxDEV('button', {

                onClick: () => setSelected(r.name),
                className: `w-full text-left p-4 flex items-center justify-between transition-colors ${active ? "bg-primary/5" : "hover:bg-white/[0.02]"}`,
 children: [
                _jsxDEV('div', { children: [
                  _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
                    _jsxDEV('span', { className: `font-medium ${active ? "text-primary" : ""}`, children: r.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 210}, this)
                    , r.system && _jsxDEV('span', { className: "text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-secondary text-muted-foreground rounded ring-1 ring-border"         , children: "System"}, void 0, false, {fileName: _jsxFileName, lineNumber: 211}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 209}, this)
                  , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-0.5"  , children: [r.users, " users · "   , r.perms]}, void 0, true, {fileName: _jsxFileName, lineNumber: 213}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
                , _jsxDEV(ChevronRight, { className: `size-4 ${active ? "text-primary" : "text-muted-foreground"}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 215}, this )
              ]}, r.name, true, {fileName: _jsxFileName, lineNumber: 203}, this)
            );
          })
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 199}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 194}, this)

      , _jsxDEV(Card, { className: "p-6", children: [
        _jsxDEV('div', { className: "flex items-center justify-between mb-5 pb-4 border-b border-border"      , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground"    , children: "Permissions for" }, void 0, false, {fileName: _jsxFileName, lineNumber: 225}, this)
            , _jsxDEV('h3', { className: "text-lg font-semibold mt-0.5"  , children: selected}, void 0, false, {fileName: _jsxFileName, lineNumber: 226}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 224}, this)
          , _jsxDEV('div', { className: "flex gap-2" , children: [
            _jsxDEV('button', { className: "px-3 py-1.5 bg-secondary ring-1 ring-border rounded-md text-xs"      , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 229}, this)
            , _jsxDEV('button', { className: "px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium"      , children: "Save Changes" }, void 0, false, {fileName: _jsxFileName, lineNumber: 230}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 228}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 223}, this)
        , _jsxDEV('div', { className: "space-y-5", children: 
          PERMS.map((g) => (
            _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2"     , children: g.group}, void 0, false, {fileName: _jsxFileName, lineNumber: 236}, this)
              , _jsxDEV('div', { className: "space-y-1.5", children: 
                g.items.map((p, i) => (
                  _jsxDEV('label', { className: "flex items-center justify-between p-3 bg-background ring-1 ring-border rounded-lg cursor-pointer hover:ring-primary/30"         , children: [
                    _jsxDEV('span', { className: "text-sm", children: p}, void 0, false, {fileName: _jsxFileName, lineNumber: 240}, this)
                    , _jsxDEV('input', { type: "checkbox", defaultChecked: i !== 2, className: "accent-primary size-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 241}, this )
                  ]}, p, true, {fileName: _jsxFileName, lineNumber: 239}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 237}, this)
            ]}, g.group, true, {fileName: _jsxFileName, lineNumber: 235}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 233}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 222}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 193}, this)
  );
}

/* ============== DEPARTMENTS ============== */
const DEPARTMENTS = [
  { name: "Cardiology", code: "CARD", head: "Dr. Renu Kapoor", staff: 14, beds: 28 },
  { name: "Orthopaedics", code: "ORTH", head: "Dr. Vikram Sethi", staff: 11, beds: 22 },
  { name: "Internal Medicine", code: "MED", head: "Dr. Aman Joshi", staff: 18, beds: 36 },
  { name: "Paediatrics", code: "PAED", head: "Dr. Leela Iyer", staff: 9, beds: 18 },
  { name: "Radiology", code: "RAD", head: "Dr. Sahil Verma", staff: 7, beds: 0 },
  { name: "Emergency", code: "ER", head: "Dr. Kavya Nair", staff: 22, beds: 12 },
];

function DepartmentsTab() {
  return (
    _jsxDEV(Card, { children: [
      _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"     , children: [
        _jsxDEV('h3', { className: "font-semibold", children: "Departments"}, void 0, false, {fileName: _jsxFileName, lineNumber: 267}, this)
        , _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2"         , children: [_jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 268}, this ), " Add Department"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 268}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 266}, this)
      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-5"     , children: 
        DEPARTMENTS.map((d) => (
          _jsxDEV('div', { className: "p-5 bg-background ring-1 ring-border rounded-xl hover:ring-primary/30 transition-all"      , children: [
            _jsxDEV('div', { className: "flex items-start justify-between mb-3"   , children: [
              _jsxDEV('div', { children: [
                _jsxDEV('div', { className: "font-semibold", children: d.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 275}, this)
                , _jsxDEV('div', { className: "text-[11px] font-mono text-muted-foreground mt-0.5"   , children: d.code}, void 0, false, {fileName: _jsxFileName, lineNumber: 276}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 274}, this)
              , _jsxDEV('div', { className: "flex gap-1" , children: [
                _jsxDEV('button', { className: "p-1.5 text-muted-foreground hover:text-foreground rounded hover:bg-white/5"    , children: _jsxDEV(Edit3, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 279}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 279}, this)
                , _jsxDEV('button', { className: "p-1.5 text-muted-foreground hover:text-warning rounded hover:bg-white/5"    , children: _jsxDEV(Trash2, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 280}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 280}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 278}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 273}, this)
            , _jsxDEV('div', { className: "text-xs text-muted-foreground mb-3"  , children: ["Head · "  , _jsxDEV('span', { className: "text-foreground", children: d.head}, void 0, false, {fileName: _jsxFileName, lineNumber: 283}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 283}, this)
            , _jsxDEV('div', { className: "grid grid-cols-2 gap-3 pt-3 border-t border-border"     , children: [
              _jsxDEV('div', { children: [_jsxDEV('div', { className: "text-[10px] uppercase tracking-widest text-muted-foreground"   , children: "Staff"}, void 0, false, {fileName: _jsxFileName, lineNumber: 285}, this), _jsxDEV('div', { className: "text-lg font-semibold" , children: d.staff}, void 0, false, {fileName: _jsxFileName, lineNumber: 285}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 285}, this)
              , _jsxDEV('div', { children: [_jsxDEV('div', { className: "text-[10px] uppercase tracking-widest text-muted-foreground"   , children: "Beds"}, void 0, false, {fileName: _jsxFileName, lineNumber: 286}, this), _jsxDEV('div', { className: "text-lg font-semibold" , children: d.beds}, void 0, false, {fileName: _jsxFileName, lineNumber: 286}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 286}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 284}, this)
          ]}, d.code, true, {fileName: _jsxFileName, lineNumber: 272}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 270}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 265}, this)
  );
}

/* ============== DOCTORS ============== */
const DOCTORS = [
  { name: "Dr. Renu Kapoor", spec: "Interventional Cardiology", reg: "MCI/123456", fee: 1200, slot: "10:00 – 14:00" },
  { name: "Dr. Vikram Sethi", spec: "Orthopaedic Surgery", reg: "MCI/123890", fee: 1500, slot: "11:00 – 16:00" },
  { name: "Dr. Aman Joshi", spec: "Internal Medicine", reg: "MCI/124002", fee: 800, slot: "09:00 – 13:00" },
  { name: "Dr. Leela Iyer", spec: "Paediatrics", reg: "MCI/124188", fee: 900, slot: "10:30 – 15:30" },
  { name: "Dr. Sahil Verma", spec: "Radiology", reg: "MCI/124310", fee: 1000, slot: "08:00 – 17:00" },
];

function DoctorsTab() {
  return (
    _jsxDEV(Card, { children: [
      _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"       , children: [
        _jsxDEV('div', { className: "relative flex-1 min-w-[240px] max-w-md"   , children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 309}, this )
          , _jsxDEV('input', { placeholder: "Search doctors…" , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 310}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 308}, this)
        , _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2"         , children: [_jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 312}, this ), " Onboard Doctor"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 312}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 307}, this)
      , _jsxDEV('div', { className: "overflow-x-auto", children: 
        _jsxDEV('table', { className: "w-full text-sm" , children: [
          _jsxDEV('thead', { className: "text-[11px] text-muted-foreground uppercase tracking-wider"   , children: 
            _jsxDEV('tr', { className: "border-b border-border" , children: 
              ["Doctor", "Specialisation", "Registration", "Consult Fee", "Daily Slot", ""].map((h) => (
                _jsxDEV('th', { className: "text-left px-5 py-3 font-medium"   , children: h}, h, false, {fileName: _jsxFileName, lineNumber: 319}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 317}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 316}, this)
          , _jsxDEV('tbody', { children: 
            DOCTORS.map((d) => (
              _jsxDEV('tr', { className: "border-b border-border/60 hover:bg-white/[0.02]"  , children: [
                _jsxDEV('td', { className: "px-5 py-3 font-medium"  , children: d.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 326}, this)
                , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: d.spec}, void 0, false, {fileName: _jsxFileName, lineNumber: 327}, this)
                , _jsxDEV('td', { className: "px-5 py-3 font-mono text-xs text-muted-foreground"    , children: d.reg}, void 0, false, {fileName: _jsxFileName, lineNumber: 328}, this)
                , _jsxDEV('td', { className: "px-5 py-3 font-mono"  , children: ["₹", d.fee]}, void 0, true, {fileName: _jsxFileName, lineNumber: 329}, this)
                , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: d.slot}, void 0, false, {fileName: _jsxFileName, lineNumber: 330}, this)
                , _jsxDEV('td', { className: "px-5 py-3 text-right"  , children: _jsxDEV('button', { className: "p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5"    , children: _jsxDEV(MoreHorizontal, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 331}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 331}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 331}, this)
              ]}, d.reg, true, {fileName: _jsxFileName, lineNumber: 325}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 323}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 315}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 314}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 306}, this)
  );
}

/* ============== TARIFFS ============== */
const TARIFFS = [
  { code: "OPD-GEN", name: "OPD Consultation – General", cat: "Consultation", price: 500 },
  { code: "OPD-SPC", name: "OPD Consultation – Specialist", cat: "Consultation", price: 1200 },
  { code: "ECG", name: "Electrocardiogram", cat: "Diagnostics", price: 350 },
  { code: "X-RAY", name: "X-Ray (Single View)", cat: "Radiology", price: 450 },
  { code: "CBC", name: "Complete Blood Count", cat: "Pathology", price: 280 },
  { code: "ROOM-PVT", name: "Private Room (per night)", cat: "Accommodation", price: 4500 },
];

function TariffsTab() {
  return (
    _jsxDEV(Card, { children: [
      _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"       , children: [
        _jsxDEV('div', { className: "flex items-center gap-2 flex-wrap"   , children: [
          _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: [_jsxDEV('option', { children: "Standard Tariff" }, void 0, false, {fileName: _jsxFileName, lineNumber: 356}, this), _jsxDEV('option', { children: "Insurance Tariff" }, void 0, false, {fileName: _jsxFileName, lineNumber: 356}, this), _jsxDEV('option', { children: "Corporate Tariff" }, void 0, false, {fileName: _jsxFileName, lineNumber: 356}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 356}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: _jsxDEV('option', { children: "All Categories" }, void 0, false, {fileName: _jsxFileName, lineNumber: 357}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 357}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 355}, this)
        , _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2"         , children: [_jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 359}, this ), " New Service"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 359}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 354}, this)
      , _jsxDEV('div', { className: "overflow-x-auto", children: 
        _jsxDEV('table', { className: "w-full text-sm" , children: [
          _jsxDEV('thead', { className: "text-[11px] text-muted-foreground uppercase tracking-wider"   , children: 
            _jsxDEV('tr', { className: "border-b border-border" , children: 
              ["Code", "Service", "Category", "Price", ""].map((h) => _jsxDEV('th', { className: "text-left px-5 py-3 font-medium"   , children: h}, h, false, {fileName: _jsxFileName, lineNumber: 365}, this))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 364}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 363}, this)
          , _jsxDEV('tbody', { children: 
            TARIFFS.map((t) => (
              _jsxDEV('tr', { className: "border-b border-border/60 hover:bg-white/[0.02]"  , children: [
                _jsxDEV('td', { className: "px-5 py-3 font-mono text-xs text-muted-foreground"    , children: t.code}, void 0, false, {fileName: _jsxFileName, lineNumber: 371}, this)
                , _jsxDEV('td', { className: "px-5 py-3 font-medium"  , children: t.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 372}, this)
                , _jsxDEV('td', { className: "px-5 py-3" , children: _jsxDEV('span', { className: "text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent ring-1 ring-accent/20"       , children: t.cat}, void 0, false, {fileName: _jsxFileName, lineNumber: 373}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 373}, this)
                , _jsxDEV('td', { className: "px-5 py-3 font-mono text-primary"   , children: ["₹", t.price.toLocaleString()]}, void 0, true, {fileName: _jsxFileName, lineNumber: 374}, this)
                , _jsxDEV('td', { className: "px-5 py-3 text-right"  , children: _jsxDEV('button', { className: "p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5"    , children: _jsxDEV(MoreHorizontal, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 375}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 375}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 375}, this)
              ]}, t.code, true, {fileName: _jsxFileName, lineNumber: 370}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 368}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 362}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 361}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 353}, this)
  );
}

/* ============== AUDIT ============== */
const AUDIT = [
  { t: "10:42:18", actor: "n.rao@aetheris.io", action: "Applied concession ₹500", target: "Bill #BL-22041", ok: true },
  { t: "10:38:02", actor: "m.patel@aetheris.io", action: "Created patient", target: "UH-204971", ok: true },
  { t: "10:21:55", actor: "system", action: "Backup completed", target: "Daily snapshot", ok: true },
  { t: "10:14:33", actor: "v.sethi@aetheris.io", action: "Login attempt failed", target: "Wrong password", ok: false },
  { t: "10:02:19", actor: "j.vance@aetheris.io", action: "Updated role permissions", target: "Billing Manager", ok: true },
  { t: "09:48:07", actor: "a.joshi@aetheris.io", action: "Discharged patient", target: "UH-204871", ok: true },
];

function AuditTab() {
  return (
    _jsxDEV(Card, { children: [
      _jsxDEV('div', { className: "p-5 border-b border-border flex items-center justify-between gap-3 flex-wrap"       , children: [
        _jsxDEV('h3', { className: "font-semibold", children: "Audit Log · Last 24h"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 399}, this)
        , _jsxDEV('div', { className: "flex gap-2" , children: [
          _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: _jsxDEV('option', { children: "All Actions" }, void 0, false, {fileName: _jsxFileName, lineNumber: 401}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 401}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm"      , children: _jsxDEV('option', { children: "All Users" }, void 0, false, {fileName: _jsxFileName, lineNumber: 402}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 402}, this)
          , _jsxDEV('button', { className: "px-3 py-2 bg-secondary ring-1 ring-border rounded-lg text-sm"      , children: "Export CSV" }, void 0, false, {fileName: _jsxFileName, lineNumber: 403}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 400}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 398}, this)
      , _jsxDEV('div', { className: "divide-y divide-border" , children: 
        AUDIT.map((e, i) => (
          _jsxDEV('div', { className: "p-4 flex items-center gap-4 hover:bg-white/[0.02]"    , children: [
            _jsxDEV('div', { className: "font-mono text-[11px] text-muted-foreground w-20"   , children: e.t}, void 0, false, {fileName: _jsxFileName, lineNumber: 409}, this)
            , _jsxDEV('div', { className: `size-7 rounded-full grid place-items-center shrink-0 ${e.ok ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"}`, children: 
              e.ok ? _jsxDEV(CheckCircle2, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 411}, this ) : _jsxDEV(XCircle, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 411}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 410}, this)
            , _jsxDEV('div', { className: "flex-1 min-w-0" , children: [
              _jsxDEV('div', { className: "text-sm", children: [_jsxDEV('span', { className: "font-medium", children: e.action}, void 0, false, {fileName: _jsxFileName, lineNumber: 414}, this), " " , _jsxDEV('span', { className: "text-muted-foreground", children: ["— " , e.target]}, void 0, true, {fileName: _jsxFileName, lineNumber: 414}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 414}, this)
              , _jsxDEV('div', { className: "text-[11px] text-muted-foreground mt-0.5 font-mono"   , children: e.actor}, void 0, false, {fileName: _jsxFileName, lineNumber: 415}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 413}, this)
          ]}, i, true, {fileName: _jsxFileName, lineNumber: 408}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 406}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 397}, this)
  );
}

/* ============== SETTINGS ============== */
function SettingsTab() {
  return (
    _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-6"   , children: [
      _jsxDEV(Card, { className: "p-6", children: [
        _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
          _jsxDEV(Building2, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 430}, this )
          , _jsxDEV('h3', { className: "font-semibold", children: "Facility Profile" }, void 0, false, {fileName: _jsxFileName, lineNumber: 431}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 429}, this)
        , _jsxDEV('div', { className: "space-y-3", children: [
          [
            ["Hospital Name", "Aetheris Medical Centre"],
            ["Registration No.", "HMS-2026-IN-00184"],
            ["GSTIN", "27AABCA1234F1Z5"],
            ["Address", "Plot 14, Sector 9, Mumbai 400703"],
          ].map(([k, v]) => (
            _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "text-[11px] text-muted-foreground mb-1"  , children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 441}, this)
              , _jsxDEV('input', { defaultValue: v, className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 442}, this )
            ]}, k, true, {fileName: _jsxFileName, lineNumber: 440}, this)
          ))
          , _jsxDEV('div', { className: "grid grid-cols-2 gap-3"  , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "text-[11px] text-muted-foreground mb-1 flex items-center gap-1.5"     , children: [_jsxDEV(Mail, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 447}, this ), " Email" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 447}, this)
              , _jsxDEV('input', { defaultValue: "contact@aetheris.io", className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 448}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 446}, this)
            , _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "text-[11px] text-muted-foreground mb-1 flex items-center gap-1.5"     , children: [_jsxDEV(Phone, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 451}, this ), " Phone" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 451}, this)
              , _jsxDEV('input', { defaultValue: "+91 22 4000 1234"   , className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 452}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 450}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 445}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 433}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 428}, this)

      , _jsxDEV(Card, { className: "p-6", children: [
        _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
          _jsxDEV(KeyRound, { className: "size-4 text-accent" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 460}, this )
          , _jsxDEV('h3', { className: "font-semibold", children: "Security & Access"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 461}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 459}, this)
        , _jsxDEV('div', { className: "space-y-3", children: 
          [
            { label: "Two-factor authentication", desc: "Require TOTP for all admin logins", on: true },
            { label: "Session timeout (15 min)", desc: "Auto-logout idle sessions", on: true },
            { label: "Password rotation (90 days)", desc: "Force periodic password change", on: false },
            { label: "IP allowlist", desc: "Restrict logins to hospital network", on: false },
            { label: "Audit retention · 365 days", desc: "Compliant with NABH archival", on: true },
          ].map((s) => (
            _jsxDEV('div', { className: "flex items-center justify-between p-3 bg-background ring-1 ring-border rounded-lg"       , children: [
              _jsxDEV('div', { children: [
                _jsxDEV('div', { className: "text-sm font-medium" , children: s.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 473}, this)
                , _jsxDEV('div', { className: "text-[11px] text-muted-foreground" , children: s.desc}, void 0, false, {fileName: _jsxFileName, lineNumber: 474}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 472}, this)
              , _jsxDEV('button', { className: `relative w-10 h-5 rounded-full transition-colors ${s.on ? "bg-primary" : "bg-secondary ring-1 ring-border"}`, children: 
                _jsxDEV('span', { className: `absolute top-0.5 size-4 rounded-full bg-background transition-all ${s.on ? "left-[22px]" : "left-0.5"}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 477}, this )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 476}, this)
            ]}, s.label, true, {fileName: _jsxFileName, lineNumber: 471}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 463}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 458}, this)

      , _jsxDEV(Card, { className: "p-6 lg:col-span-2" , children: [
        _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
          _jsxDEV(Database, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 486}, this )
          , _jsxDEV('h3', { className: "font-semibold", children: "Integrations"}, void 0, false, {fileName: _jsxFileName, lineNumber: 487}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 485}, this)
        , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4"   , children: 
          [
            { name: "Tally ERP", desc: "Ledger sync · ₹ accounting", on: true, icon: Database },
            { name: "WhatsApp Cloud API", desc: "Appointment reminders & OTP", on: true, icon: Cloud },
            { name: "ABHA / ABDM", desc: "National Health Stack", on: false, icon: Shield },
          ].map((i) => (
            _jsxDEV('div', { className: "p-4 bg-background ring-1 ring-border rounded-lg"    , children: [
              _jsxDEV('div', { className: "flex items-start justify-between mb-3"   , children: [
                _jsxDEV(i.icon, { className: "size-5 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 497}, this )
                , _jsxDEV('span', { className: `text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ring-1 ${i.on ? "bg-primary/10 text-primary ring-primary/20" : "bg-secondary text-muted-foreground ring-border"}`, children: 
                  i.on ? "Connected" : "Not Linked"
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 498}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 496}, this)
              , _jsxDEV('div', { className: "font-medium", children: i.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 502}, this)
              , _jsxDEV('div', { className: "text-xs text-muted-foreground mt-1"  , children: i.desc}, void 0, false, {fileName: _jsxFileName, lineNumber: 503}, this)
              , _jsxDEV('button', { className: "mt-3 text-xs font-medium text-primary"   , children: i.on ? "Configure →" : "Connect →"}, void 0, false, {fileName: _jsxFileName, lineNumber: 504}, this)
            ]}, i.name, true, {fileName: _jsxFileName, lineNumber: 495}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 489}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 484}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 427}, this)
  );
}
