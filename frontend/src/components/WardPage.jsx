const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { PageHeader, Card } from "@/components/AppShell";
import { BedDouble, UserCircle2 } from "lucide-react";

 

const CONFIG = {
  general: { title: "General Ward", breadcrumb: "Patient Management · IPD · Wards", desc: "Open-bay beds with shared nursing station.", beds: 24, cols: 6, accent: "emerald" },
  icu: { title: "Intensive Care Unit", breadcrumb: "Patient Management · IPD · Wards", desc: "Critical-care monitoring with 1:1 nursing coverage.", beds: 12, cols: 4, accent: "amber" },
  private: { title: "Private Rooms", breadcrumb: "Patient Management · IPD · Wards", desc: "Single-occupancy suites with attendant accommodation.", beds: 16, cols: 4, accent: "cyan" },
};

const STATUSES = ["occupied", "free", "cleaning", "reserved"] ;


const TONE = {
  occupied: "bg-warning/10 ring-warning/30 text-warning",
  free: "bg-primary/10 ring-primary/30 text-primary",
  cleaning: "bg-secondary ring-border text-muted-foreground",
  reserved: "bg-accent/10 ring-accent/30 text-accent",
};

function seedBeds(n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(STATUSES[(i * 7 + 3) % STATUSES.length]);
  return out;
}

export function WardPage({ kind }) {
  const cfg = CONFIG[kind];
  const beds = seedBeds(cfg.beds);
  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: beds.filter((b) => b === s).length }), {} );

  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: cfg.title, breadcrumb: cfg.breadcrumb, description: cfg.desc,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )

      , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"    , children: 
        STATUSES.map((s) => (
          _jsxDEV(Card, { className: "p-4", children: [
            _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2"     , children: s}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
            , _jsxDEV('div', { className: "text-2xl font-semibold" , children: counts[s]}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
            , _jsxDEV('div', { className: `mt-2 h-1 rounded-full ${TONE[s].split(" ")[0]}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
          ]}, s, true, {fileName: _jsxFileName, lineNumber: 39}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)

      , _jsxDEV(Card, { glow: cfg.accent, className: "p-6", children: [
        _jsxDEV('div', { className: "flex items-center justify-between mb-5"   , children: [
          _jsxDEV('h3', { className: "font-semibold flex items-center gap-2"   , children: [_jsxDEV(BedDouble, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this ), " Bed Map · "    , cfg.beds, " units" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
          , _jsxDEV('div', { className: "flex items-center gap-3 text-[11px] text-muted-foreground"    , children: 
            STATUSES.map((s) => (
              _jsxDEV('div', { className: "flex items-center gap-1.5 capitalize"   , children: [
                _jsxDEV('span', { className: `size-2 rounded-sm ${TONE[s].split(" ")[0]}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this ), s
              ]}, s, true, {fileName: _jsxFileName, lineNumber: 52}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)

        , _jsxDEV('div', { className: `grid gap-3`, style: { gridTemplateColumns: `repeat(${cfg.cols}, minmax(0,1fr))` }, children: 
          beds.map((s, i) => (
            _jsxDEV('div', { className: `relative p-4 rounded-lg ring-1 transition-all hover:scale-[1.02] cursor-pointer ${TONE[s]}`, children: [
              _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                _jsxDEV('span', { className: "text-[10px] font-mono uppercase tracking-widest opacity-70"    , children: "Bed"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
                , _jsxDEV(BedDouble, { className: "size-3.5 opacity-60" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
              , _jsxDEV('div', { className: "text-2xl font-bold mt-1 font-mono"   , children: String(i + 1).padStart(2, "0")}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
              , s === "occupied" && (
                _jsxDEV('div', { className: "mt-2 flex items-center gap-1.5 text-[11px] opacity-80"     , children: [
                  _jsxDEV(UserCircle2, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this ), " Patient #"  , 1000 + i
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)
              )
              , s !== "occupied" && _jsxDEV('div', { className: "mt-2 text-[11px] capitalize opacity-70"   , children: s}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
            ]}, i, true, {fileName: _jsxFileName, lineNumber: 61}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
  );
}
