const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_app/opd/bill-list")({
  head: () => ({ meta: [{ title: "Bill List · OPD" }] }),
  component: BillList,
});

function BillList() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "Bill List" , breadcrumb: "Patient Management · OPD · Billing"     , description: "Search and review processed bills."    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-3 items-center"    , children: [
          _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this )
            , _jsxDEV('input', { placeholder: "Search by patient name / UHID / OPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 17}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 25}, this)
          , _jsxDEV('div', { className: "flex gap-2" , children: [
            _jsxDEV('button', { className: "px-4 py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
            , _jsxDEV('button', { className: "px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"      , children: "Show"}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 16}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this)

      , _jsxDEV(Card, { children: [
        _jsxDEV('div', { className: "flex justify-end items-center p-4 border-b border-border text-xs text-muted-foreground gap-2"        , children: [
          _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronLeft, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          , _jsxDEV('span', { children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
          , _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronRight, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
        , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 36}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
  );
}
