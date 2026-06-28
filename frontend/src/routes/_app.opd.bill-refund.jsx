const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, Calendar, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/opd/bill-refund")({
  head: () => ({ meta: [{ title: "Bill Refund · OPD" }] }),
  component: BillRefund,
});

function BillRefund() {
  const [mode, setMode] = useState("bill");
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "Bill Refund" , breadcrumb: "Patient Management · OPD · Billing"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto_auto] gap-3 items-center"    , children: [
          _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this )
            , _jsxDEV('input', { placeholder: "Search by patient name / UHID / OPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
          , _jsxDEV('div', { className: "relative", children: [
            _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this )
            , _jsxDEV('input', { defaultValue: "23-06-2026", className: "bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:ring-primary/40"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
          , _jsxDEV('div', { className: "inline-flex p-1 bg-secondary rounded-lg"   , children: [
            _jsxDEV('button', { onClick: () => setMode("bill"), className: `px-3 py-1.5 text-xs font-medium rounded-md transition-all ${mode === "bill" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Bill Wise" }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
            , _jsxDEV('button', { onClick: () => setMode("service"), className: `px-3 py-1.5 text-xs font-medium rounded-md transition-all ${mode === "service" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Service Wise" }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
          , _jsxDEV('div', { className: "flex gap-2" , children: [
            _jsxDEV('button', { className: "px-3 py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm"      , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('button', { className: "px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"      , children: "Search"}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 35}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
          _jsxDEV('div', { className: "size-12 rounded-full bg-secondary ring-1 ring-border grid place-items-center"      , children: _jsxDEV(User, { className: "size-5 text-muted-foreground" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
          , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 flex-1 text-xs"      , children: 
            ["UHID", "Contact", "Doctor", "Outstanding Amt"].map((k) => (
              _jsxDEV('div', { className: "flex justify-between" , children: [_jsxDEV('span', { className: "text-muted-foreground", children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this), _jsxDEV('span', { className: "font-mono", children: "—"}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)]}, k, true, {fileName: _jsxFileName, lineNumber: 47}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"    , children: [
        _jsxDEV(Card, { className: "p-5", children: [
          _jsxDEV('div', { className: "flex justify-between items-center mb-4 pb-3 border-b border-border"      , children: [
            _jsxDEV('h3', { className: "font-semibold text-sm" , children: "Bills"}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
            , _jsxDEV('span', { className: "text-xs text-muted-foreground font-mono"  , children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
          , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
        , _jsxDEV(Card, { className: "p-5 ring-warning/20" , children: [
          _jsxDEV('div', { className: "mb-4 pb-3 border-b border-border"   , children: 
            _jsxDEV('h3', { className: "font-semibold text-sm" , children: "Services"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
          , _jsxDEV('div', { className: "grid place-items-center py-16 text-muted-foreground text-sm"    , children: "Please select a bill to view services"      }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)

      , _jsxDEV('div', { className: "flex justify-end gap-2"  , children: [
        _jsxDEV('button', { className: "px-5 py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
        , _jsxDEV('button', { className: "px-5 py-2.5 bg-warning/20 ring-1 ring-warning/30 text-warning rounded-lg text-sm font-medium hover:bg-warning/30"         , children: "Refund"}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 69}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 14}, this)
  );
}
