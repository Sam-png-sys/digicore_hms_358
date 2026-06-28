const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, User, Plus, Receipt } from "lucide-react";

export const Route = createFileRoute("/_app/ipd/charge")({
  head: () => ({ meta: [{ title: "IPD Charge" }] }),
  component: IpdCharge,
});

const META = [
  ["UHID", "—"], ["IPD No.", "—"], ["Ward / Bed", "—"], ["Doctor", "—"],
  ["Department", "—"], ["Tariff", "—"], ["Admission Date", "—"], ["LOS", "—"], ["Age / Gender", "— / —"],
];

function IpdCharge() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "IPD Charge" , breadcrumb: "Patient Management · IPD"   , description: "Post daily services, consumables and room charges to an in-patient."         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "relative", children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this )
          , _jsxDEV('input', { placeholder: "Search by patient name / UHID / IPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 21}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)

      , _jsxDEV(Card, { className: "p-5 mb-6" , children: 
        _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
          _jsxDEV('div', { className: "size-14 rounded-full bg-secondary ring-1 ring-border grid place-items-center text-muted-foreground"       , children: _jsxDEV(User, { className: "size-6",}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this)
          , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 flex-1 text-xs"      , children: 
            META.map(([k, v]) => (
              _jsxDEV('div', { className: "flex justify-between gap-3"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this), _jsxDEV('span', { className: "font-mono", children: v}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)]}, k, true, {fileName: _jsxFileName, lineNumber: 32}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6"   , children: [
        _jsxDEV(Card, { className: "lg:col-span-2 p-6" , children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(Receipt, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Add Charge" }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 40}, this)
          , _jsxDEV('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3"    , children: [
            _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"      , children: [_jsxDEV('option', { children: "Charge Category" }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this), _jsxDEV('option', { children: "Room Rent" }, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this), _jsxDEV('option', { children: "Consumable"}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this), _jsxDEV('option', { children: "Procedure"}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
            , _jsxDEV('input', { placeholder: "Search service name"  , className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
          , _jsxDEV('div', { className: "grid grid-cols-3 gap-2 mb-3"   , children: [
            _jsxDEV('input', { placeholder: "Quantity", className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this )
            , _jsxDEV('input', { placeholder: "Unit Price" , className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
            , _jsxDEV('input', { placeholder: "Total", className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
          , _jsxDEV('button', { className: "w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center justify-center gap-2"          , children: [_jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this ), " Post Charge"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)
          , _jsxDEV('div', { className: "mt-6", children: _jsxDEV(EmptyState, { description: "No charges posted yet for this stay."      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)

        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('h3', { className: "font-semibold mb-5 flex items-center gap-2"    , children: [_jsxDEV(Receipt, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this ), " Running Total"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
          , _jsxDEV('div', { className: "bg-background ring-1 ring-border rounded-lg p-4 space-y-3"     , children: [
            _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Room & Bed"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this), _jsxDEV('span', { className: "font-mono", children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Procedures"}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this), _jsxDEV('span', { className: "font-mono", children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Consumables"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this), _jsxDEV('span', { className: "font-mono", children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Investigations"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this), _jsxDEV('span', { className: "font-mono", children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
            , _jsxDEV('div', { className: "flex justify-between text-base font-semibold pt-3 border-t border-border"      , children: [_jsxDEV('span', { children: "Total To Date"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this), _jsxDEV('span', { className: "font-mono text-primary" , children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 64}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 17}, this)
  );
}
