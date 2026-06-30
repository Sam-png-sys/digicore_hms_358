const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, User, ListOrdered, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_app/opd/bill-concession")({
  head: () => ({ meta: [{ title: "Bill Concession · OPD" }] }),
  component: BillConcession,
});

function BillConcession() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Bill Concession" ,
        breadcrumb: "Patient Management · OPD · Billing"     ,
        action: 
          _jsxDEV(Link, { to: "/opd/bill-list", className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:brightness-110"          , children: [
            _jsxDEV(ListOrdered, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this ), " Bill List"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 17}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this
      )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "relative", children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this )
          , _jsxDEV('input', { placeholder: "Search by patient name / UHID / OPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 26}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 24}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
          _jsxDEV('div', { className: "size-12 rounded-full bg-secondary ring-1 ring-border grid place-items-center"      , children: _jsxDEV(User, { className: "size-5 text-muted-foreground" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
          , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 flex-1 text-xs"      , children: 
            ["Name", "UHID", "Gender", "Mobile"].map((k) => (
              _jsxDEV('div', { className: "flex justify-between" , children: [_jsxDEV('span', { className: "text-muted-foreground", children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this), _jsxDEV('span', { className: "font-mono", children: "—"}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)]}, k, true, {fileName: _jsxFileName, lineNumber: 35}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)

      , _jsxDEV(Card, { children: [
        _jsxDEV('div', { className: "flex items-center justify-between p-5 border-b border-border"     , children: [
          _jsxDEV('h3', { className: "font-semibold", children: "Bill Listing" }, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
          , _jsxDEV('div', { className: "flex items-center gap-2 text-xs text-muted-foreground"    , children: [
            _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronLeft, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
            , _jsxDEV('span', { children: "1 / 0"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
            , _jsxDEV('button', { className: "p-1 hover:bg-white/5 rounded"  , children: _jsxDEV(ChevronRight, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)
        , _jsxDEV(EmptyState, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 41}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
  );
}
