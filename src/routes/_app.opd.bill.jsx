const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";
import { Search, Receipt, ClipboardList, ListOrdered, HelpCircle, Plus } from "lucide-react";

export const Route = createFileRoute("/_app/opd/bill")({
  head: () => ({ meta: [{ title: "OPD Billing" }] }),
  component: BillPage,
});

const META = [
  ["Doctor name", "—"], ["UHID", "—"], ["OPD No.", "—"], ["Department", "—"],
  ["Tariff", "—"], ["Patient type", "—"], ["Company", "—"], ["Billing status", "—"], ["Age / Gender", "— / —"],
];

function BillPage() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "OPD Billing" ,
        breadcrumb: "Patient Management · OPD"   ,
        action: 
          _jsxDEV('div', { className: "flex gap-2" , children: [
            _jsxDEV('button', { className: "px-4 py-2 bg-card ring-1 ring-border rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5"           , children: [
              _jsxDEV(ClipboardList, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this ), " Visit Patients"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)
            , _jsxDEV(Link, { to: "/opd/bill-list", className: "px-4 py-2 bg-card ring-1 ring-border rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5"           , children: [
              _jsxDEV(ListOrdered, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 27}, this ), " Bill List"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 26}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 22}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 18}, this
      )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "relative", children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this )
          , _jsxDEV('input', { placeholder: "Search by patient name / UHID / OPD no."        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)

      /* Patient meta */
      , _jsxDEV(Card, { className: "p-5 mb-6" , children: 
        _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
          _jsxDEV('div', { className: "size-14 rounded-full bg-secondary ring-1 ring-border grid place-items-center text-muted-foreground"       , children: _jsxDEV(HelpCircle, { className: "size-6",}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
          , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 flex-1 text-xs"      , children: 
            META.map(([k, v]) => (
              _jsxDEV('div', { className: "flex justify-between gap-3"  , children: [
                _jsxDEV('span', { className: "text-muted-foreground", children: k}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
                , _jsxDEV('span', { className: "text-foreground font-mono" , children: v}, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
              ]}, k, true, {fileName: _jsxFileName, lineNumber: 46}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 42}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6"   , children: [
        /* Add services */
        _jsxDEV(Card, { className: "lg:col-span-2 p-6" , children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(Receipt, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Add Services" }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)

          , _jsxDEV('div', { className: "p-3 rounded-lg bg-warning/10 ring-1 ring-warning/20 text-warning text-xs mb-5"       , children: "Please select a patient to search and add services."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)

          , _jsxDEV('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2"    , children: [
            _jsxDEV('input', { placeholder: "Search by service name"   , className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this )
            , _jsxDEV('input', { placeholder: "Quantity", className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)
          , _jsxDEV('div', { className: "grid grid-cols-3 gap-2 mb-3"   , children: [
            _jsxDEV('input', { placeholder: "Price", className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this )
            , _jsxDEV('input', { placeholder: "Doctor", className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this )
            , _jsxDEV('input', { placeholder: "Total Amount" , className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 71}, this)
          , _jsxDEV('button', { className: "w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:brightness-110"           , children: [
            _jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this ), " Add Service"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 76}, this)

          , _jsxDEV('div', { className: "mt-6", children: 
            _jsxDEV(EmptyState, { description: "No services added yet."   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)

        /* Payment */
        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(Receipt, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Payment Details" }, void 0, false, {fileName: _jsxFileName, lineNumber: 89}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 87}, this)

          , _jsxDEV('div', { className: "bg-background ring-1 ring-border rounded-lg p-4 space-y-3 mb-5"      , children: [
            _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Total Billed Amount"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this), _jsxDEV('span', { className: "font-mono", children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 93}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 93}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Concession Amount" }, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this), _jsxDEV('span', { className: "font-mono", children: "₹0"}, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm"  , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Tax Amount" }, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this), _jsxDEV('span', { className: "font-mono", children: "₹0"}, void 0, false, {fileName: _jsxFileName, lineNumber: 95}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 95}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm items-center pt-2 border-t border-border"      , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Apply Concession" }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this), _jsxDEV('input', { className: "w-24 bg-secondary rounded-md px-2 py-1 text-right text-xs font-mono"       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this )]}, void 0, true, {fileName: _jsxFileName, lineNumber: 96}, this)
            , _jsxDEV('div', { className: "flex justify-between text-base font-semibold pt-2 border-t border-border"      , children: [_jsxDEV('span', { children: "Net Amount To Pay"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this), _jsxDEV('span', { className: "font-mono text-primary" , children: "₹0.00"}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 97}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 92}, this)

          , _jsxDEV('select', { className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 mb-3"          , children: _jsxDEV('option', { children: "Concession authority" }, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
          , _jsxDEV('textarea', { placeholder: "Billing Note / Concession Remark"    , rows: 3, className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 mb-4"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 101}, this )

          , _jsxDEV('div', { className: "grid grid-cols-2 gap-2"  , children: [
            _jsxDEV('button', { className: "py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium hover:bg-white/5"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this)
            , _jsxDEV('button', { className: "py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110"      , children: "Pay"}, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 103}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 86}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 55}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 17}, this)
  );
}
