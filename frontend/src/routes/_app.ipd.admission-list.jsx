const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { Search, Calendar, ChevronLeft, ChevronRight, BedDouble } from "lucide-react";

export const Route = createFileRoute("/_app/ipd/admission-list")({
  head: () => ({ meta: [{ title: "Admission List · IPD" }] }),
  component: AdmissionList,
});

const ROWS = [
  { uhid: "UH-204871", name: "Aarav Mehta", ward: "ICU · Bed 04", doctor: "Dr. Renu Kapoor", dept: "Cardiology", date: "23-06-2026 09:42", status: "Stable" },
  { uhid: "UH-204902", name: "Sara Khan", ward: "Private · 312", doctor: "Dr. Vikram Sethi", dept: "Orthopaedics", date: "23-06-2026 11:08", status: "Observation" },
  { uhid: "UH-204938", name: "Daniel Cruz", ward: "General · G-21", doctor: "Dr. Aman Joshi", dept: "Internal Medicine", date: "23-06-2026 12:55", status: "Stable" },
  { uhid: "UH-204971", name: "Priya Sharma", ward: "ICU · Bed 02", doctor: "Dr. Renu Kapoor", dept: "Cardiology", date: "23-06-2026 14:21", status: "Critical" },
];

const TONE = {
  Stable: "bg-primary/10 text-primary ring-primary/20",
  Observation: "bg-accent/10 text-accent ring-accent/20",
  Critical: "bg-warning/10 text-warning ring-warning/20",
};

function AdmissionList() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "Admission List" , breadcrumb: "Patient Management · IPD"   , description: "Live roster of in-patient admissions."    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-center"    , children: [
          _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this )
            , _jsxDEV('input', { placeholder: "Search by patient name / UHID / IPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 30}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm min-w-36"       , children: _jsxDEV('option', { children: "Ward"}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm min-w-36"       , children: _jsxDEV('option', { children: "Doctor"}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
          , _jsxDEV('button', { className: "px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"      , children: "Search"}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)

      , _jsxDEV(Card, { children: [
        _jsxDEV('div', { className: "flex items-center justify-between p-5 border-b border-border"     , children: [
          _jsxDEV('h3', { className: "font-semibold flex items-center gap-2"   , children: [_jsxDEV(BedDouble, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this ), " Active Admissions"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
          , _jsxDEV('div', { className: "flex items-center gap-2 text-xs text-muted-foreground"    , children: [
            _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronLeft, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
            , _jsxDEV('span', { className: "font-mono", children: "1 / 1"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)
            , _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronRight, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
        , _jsxDEV('div', { className: "overflow-x-auto", children: 
          _jsxDEV('table', { className: "w-full text-sm" , children: [
            _jsxDEV('thead', { className: "text-xs text-muted-foreground uppercase tracking-wider"   , children: 
              _jsxDEV('tr', { className: "border-b border-border" , children: 
                ["UHID", "Patient", "Ward / Bed", "Doctor", "Department", "Admitted", "Status"].map((h) => (
                  _jsxDEV('th', { className: "text-left px-5 py-3 font-medium"   , children: h}, h, false, {fileName: _jsxFileName, lineNumber: 58}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
            , _jsxDEV('tbody', { children: 
              ROWS.map((r) => (
                _jsxDEV('tr', { className: "border-b border-border/60 hover:bg-white/[0.02]"  , children: [
                  _jsxDEV('td', { className: "px-5 py-3 font-mono text-xs text-muted-foreground"    , children: r.uhid}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 font-medium"  , children: r.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
                  , _jsxDEV('td', { className: "px-5 py-3" , children: r.ward}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: r.doctor}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 text-muted-foreground"  , children: r.dept}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
                  , _jsxDEV('td', { className: "px-5 py-3 font-mono text-xs text-muted-foreground"    , children: r.date}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
                  , _jsxDEV('td', { className: "px-5 py-3" , children: 
                    _jsxDEV('span', { className: `px-2 py-0.5 rounded-full text-[11px] ring-1 ${TONE[r.status]}`, children: r.status}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
                ]}, r.uhid, true, {fileName: _jsxFileName, lineNumber: 64}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
  );
}
