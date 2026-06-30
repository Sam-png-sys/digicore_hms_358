const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { Monitor, Volume2 } from "lucide-react";

export const Route = createFileRoute("/_app/ipd/token-display")({
  head: () => ({ meta: [{ title: "Token Display · IPD" }] }),
  component: TokenDisplay,
});

const NOW = [
  { token: "A-104", room: "ICU-02", patient: "Priya Sharma" },
  { token: "B-217", room: "OT-1", patient: "Daniel Cruz" },
];
const NEXT = ["A-105", "B-218", "C-088", "C-089", "A-106", "B-219"];

function TokenDisplay() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Token Display" ,
        breadcrumb: "Patient Management · IPD"   ,
        description: "Public-facing token board for waiting halls and ward corridors."        ,
        action: 
          _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2"         , children: [
            _jsxDEV(Monitor, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this ), " Open Full-Screen Board"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 24}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this
      )

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"    , children: 
        NOW.map((t) => (
          _jsxDEV(Card, { glow: "emerald", className: "p-8 text-center" , children: [
            _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2 flex items-center justify-center gap-2"         , children: [
              _jsxDEV(Volume2, { className: "size-3 text-primary pulse-dot"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this ), " Now Serving"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
            , _jsxDEV('div', { className: "text-7xl font-bold tracking-tight text-primary glow-emerald"    , children: t.token}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('div', { className: "text-lg mt-3 font-medium"  , children: t.patient}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            , _jsxDEV('div', { className: "text-sm text-muted-foreground mt-1 font-mono"   , children: ["Room " , t.room]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, t.token, true, {fileName: _jsxFileName, lineNumber: 32}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)

      , _jsxDEV(Card, { className: "p-6", children: [
        _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-4"     , children: "Up Next" }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
        , _jsxDEV('div', { className: "grid grid-cols-3 md:grid-cols-6 gap-3"   , children: 
          NEXT.map((n, i) => (
            _jsxDEV('div', { className: `p-4 rounded-lg ring-1 text-center font-mono text-xl ${i === 0 ? "bg-accent/10 ring-accent/30 text-accent" : "bg-card ring-border text-muted-foreground"}`, children: 
              n
            }, n, false, {fileName: _jsxFileName, lineNumber: 47}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
  );
}
