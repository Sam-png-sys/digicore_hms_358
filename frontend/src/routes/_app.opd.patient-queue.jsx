const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, EmptyState } from "@/components/AppShell";

export const Route = createFileRoute("/_app/opd/patient-queue")({
  head: () => ({ meta: [{ title: "Patient Queue · OPD" }] }),
  component: () => (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, { title: "Patient Queue" , breadcrumb: "Patient Management · OPD"   , description: "Live queue across all consulting rooms."     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 8}, this )
      , _jsxDEV(Card, { children: _jsxDEV(EmptyState, { title: "Queue is empty"  , description: "No patients waiting at the moment."     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 9}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 9}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 7}, this)
  ),
});
