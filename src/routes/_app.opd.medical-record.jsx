const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, Calendar, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/opd/medical-record")({
  head: () => ({ meta: [{ title: "Medical Record · OPD" }] }),
  component: MedicalRecord,
});

const TABS = [
  { id: "all", label: "All", count: 0 },
  { id: "queue", label: "In Queue", count: 0, accent: "accent" },
  { id: "called", label: "Called", count: 0, accent: "warning" },
  { id: "ongoing", label: "On going", count: 0, accent: "primary" },
];

function MedicalRecord() {
  const [tab, setTab] = useState("all");
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "Medical Record" , breadcrumb: "Patient Management · OPD"   , description: "Track patient progression through OPD stations."     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-end"    , children: [
          _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )
            , _jsxDEV('input', { placeholder: "Search by patient name, mobile no."     , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 26}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 min-w-40"         , children: _jsxDEV('option', { children: "Department"}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
          , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 min-w-40"         , children: _jsxDEV('option', { children: "Doctor"}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
          , _jsxDEV('div', { className: "flex gap-2" , children: [
            _jsxDEV('button', { className: "px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"      , children: "Search"}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            , _jsxDEV('button', { className: "p-2.5 bg-secondary ring-1 ring-border rounded-lg text-muted-foreground hover:text-foreground"      , title: "Reset", children: _jsxDEV(RotateCcw, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)

      , _jsxDEV('div', { className: "flex gap-2 mb-5"  , children: 
        TABS.map((t) => {
          const active = tab === t.id;
          return (
            _jsxDEV('button', {

              onClick: () => setTab(t.id),
              className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ring-1 ${
                active ? "bg-primary text-primary-foreground ring-primary glow-emerald" : "bg-card ring-border text-muted-foreground hover:text-foreground"
              }`,
 children: [
              t.label, " " , _jsxDEV('span', { className: "opacity-60", children: ["(", t.count, ")"]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
            ]}, t.id, true, {fileName: _jsxFileName, lineNumber: 47}, this)
          );
        })
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)

      , _jsxDEV(Card, { children: [
        _jsxDEV('div', { className: "flex items-center justify-between p-5 border-b border-border"     , children: [
          _jsxDEV('h3', { className: "font-semibold", children: "Medical record list"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          , _jsxDEV('div', { className: "flex items-center gap-2 text-xs text-muted-foreground"    , children: [
            _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronLeft, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
            , _jsxDEV('span', { children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
            , _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronRight, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
        , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
  );
}
