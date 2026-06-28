const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { Search, User, BedDouble, Calendar, Stethoscope, FileSignature } from "lucide-react";

export const Route = createFileRoute("/_app/ipd/admission")({
  head: () => ({ meta: [{ title: "Admission · IPD" }] }),
  component: Admission,
});

function Admission() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "New Admission" ,
        breadcrumb: "Patient Management · IPD"   ,
        description: "Capture patient intake, assign a bed, and lock in the attending physician."           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this
      )

      , _jsxDEV(Card, { className: "p-5 mb-5" , children: 
        _jsxDEV('div', { className: "relative", children: [
          _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this )
          , _jsxDEV('input', { placeholder: "Search existing patient by name / UHID / mobile"        , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 22}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 20}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6"   , children: [
        _jsxDEV(Card, { className: "lg:col-span-2 p-6" , children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(User, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Patient & Clinical Details"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 28}, this)
          , _jsxDEV('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-3"   , children: [
            ["Full Name", "UHID", "Age", "Gender", "Mobile", "Email", "Address", "Emergency Contact"].map((p) => (
              _jsxDEV('input', { placeholder: p, className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        ,}, p, false, {fileName: _jsxFileName, lineNumber: 34}, this )
            ))
            , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        , children: _jsxDEV('option', { children: "Department"}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        , children: _jsxDEV('option', { children: "Attending Physician" }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
            , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40"        , children: _jsxDEV('option', { children: "Admission Type" }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
            , _jsxDEV('input', { placeholder: "Provisional Diagnosis" , className: "bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 sm:col-span-2"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 27}, this)

        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(BedDouble, { className: "size-4 text-accent" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Bed Allocation" }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
          , _jsxDEV('div', { className: "space-y-3", children: [
            _jsxDEV('select', { className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       , children: [_jsxDEV('option', { children: "Ward Type" }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this), _jsxDEV('option', { children: "General Ward" }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this), _jsxDEV('option', { children: "ICU"}, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this), _jsxDEV('option', { children: "Private Room" }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
            , _jsxDEV('select', { className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       , children: _jsxDEV('option', { children: "Floor / Block"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this)
            , _jsxDEV('select', { className: "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm"       , children: _jsxDEV('option', { children: "Bed Number" }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
            , _jsxDEV('div', { className: "relative", children: [
              _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
              , _jsxDEV('input', { type: "datetime-local", className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2.5 text-sm"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this )
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 52}, this)
            , _jsxDEV('div', { className: "p-3 rounded-lg bg-primary/10 ring-1 ring-primary/20 text-xs text-primary flex items-center gap-2"         , children: [
              _jsxDEV(Stethoscope, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 57}, this ), " 23 beds currently free across all wards"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 26}, this)

      , _jsxDEV('div', { className: "flex justify-end gap-2 mt-6"   , children: [
        _jsxDEV('button', { className: "px-5 py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
        , _jsxDEV('button', { className: "px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110 flex items-center gap-2"          , children: [
          _jsxDEV(FileSignature, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this ), " Admit Patient"
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 65}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)
  );
}
