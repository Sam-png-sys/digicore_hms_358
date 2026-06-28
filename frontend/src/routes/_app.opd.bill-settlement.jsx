const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/opd/bill-settlement")({
  head: () => ({ meta: [{ title: "Bill Settlement · OPD" }] }),
  component: BillSettlement,
});

function BillSettlement() {
  const [tab, setTab] = useState("patient");
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: `Bill Settlement · ${tab === "patient" ? "Patient" : "Company"}`,
        breadcrumb: "Patient Management · OPD · Billing"     ,
        action: 
          _jsxDEV('div', { className: "inline-flex p-1 bg-card ring-1 ring-border rounded-lg"     , children: [
            _jsxDEV('button', { onClick: () => setTab("patient"), className: `px-3 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "patient" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Patient"}, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
            , _jsxDEV('button', { onClick: () => setTab("company"), className: `px-3 py-1.5 text-xs font-medium rounded-md transition-all ${tab === "company" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Company"}, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 19}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this
      )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "relative", children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this )
          , _jsxDEV('input', { placeholder: tab === "patient" ? "Patient Search (Name / UHID / OPD No.)" : "Company Search (Name / GSTIN)", className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this)

      , _jsxDEV(Card, { className: "p-5 mb-6" , children: 
        _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
          _jsxDEV('div', { className: "size-12 rounded-full bg-secondary ring-1 ring-border grid place-items-center"      , children: _jsxDEV(User, { className: "size-5 text-muted-foreground" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
          , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 flex-1 text-xs"      , children: 
            ["Name", "UHID", "Gender", "Mobile"].map((k) => (
              _jsxDEV('div', { className: "flex justify-between" , children: [_jsxDEV('span', { className: "text-muted-foreground", children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this), _jsxDEV('span', { className: "font-mono", children: "—"}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)]}, k, true, {fileName: _jsxFileName, lineNumber: 38}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"    , children: [
        _jsxDEV(Card, { glow: "emerald", className: "p-5", children: [
          _jsxDEV('div', { className: "flex justify-between items-center mb-4 pb-3 border-b border-border"      , children: [
            _jsxDEV('h3', { className: "font-semibold text-sm" , children: "Paid Bills" }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
            , _jsxDEV('span', { className: "text-xs text-muted-foreground font-mono"  , children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
          , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
        , _jsxDEV(Card, { glow: "cyan", className: "p-5", children: [
          _jsxDEV('div', { className: "flex justify-between items-center mb-4 pb-3 border-b border-border"      , children: [
            _jsxDEV('h3', { className: "font-semibold text-sm" , children: "Credit Bills" }, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
            , _jsxDEV('span', { className: "text-xs text-muted-foreground font-mono"  , children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
          , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)

      , _jsxDEV('div', { className: "flex justify-end gap-2"  , children: [
        _jsxDEV('button', { className: "px-5 py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
        , _jsxDEV('button', { className: "px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110"       , children: "Settlement"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 14}, this)
  );
}
