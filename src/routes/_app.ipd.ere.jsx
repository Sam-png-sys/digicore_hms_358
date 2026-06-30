const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { FileSignature, ShieldCheck, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/_app/ipd/ere")({
  head: () => ({ meta: [{ title: "ERE · IPD" }] }),
  component: ERE,
});

const TEMPLATES = [
  { title: "Surgical Consent", desc: "Pre-operative authorization & risk acknowledgement", icon: FileSignature },
  { title: "Anaesthesia Consent", desc: "GA / spinal / regional risk acknowledgement", icon: ShieldCheck },
  { title: "High-Risk Consent", desc: "Critical care escalation & DAMA disclosure", icon: AlertTriangle },
];

function ERE() {
  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "ERE — Electronic Record & e-Consent"     ,
        breadcrumb: "Patient Management · IPD"   ,
        description: "Capture digitally signed admission consents and risk acknowledgements."       ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this
      )

      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-6"    , children: 
        TEMPLATES.map((t) => (
          _jsxDEV(Card, { className: "p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group"    , children: [
            _jsxDEV('div', { className: "size-10 rounded-lg bg-primary/10 ring-1 ring-primary/20 grid place-items-center mb-4 group-hover:glow-emerald transition-all"         , children: 
              _jsxDEV(t.icon, { className: "size-5 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 29}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 28}, this)
            , _jsxDEV('h3', { className: "font-semibold mb-1" , children: t.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
            , _jsxDEV('p', { className: "text-xs text-muted-foreground leading-relaxed"  , children: t.desc}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)
            , _jsxDEV('button', { className: "mt-4 text-xs font-medium text-primary"   , children: "Start signing →"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)
          ]}, t.title, true, {fileName: _jsxFileName, lineNumber: 27}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)

      , _jsxDEV(Card, { className: "p-6", children: [
        _jsxDEV('h3', { className: "font-semibold mb-4" , children: "Pending Signatures" }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)
        , _jsxDEV('div', { className: "space-y-2", children: 
          ["Aarav Mehta · Surgical Consent", "Sara Khan · High-Risk Consent"].map((row) => (
            _jsxDEV('div', { className: "flex items-center justify-between p-3 bg-background ring-1 ring-border rounded-lg"       , children: [
              _jsxDEV('div', { className: "flex items-center gap-3 text-sm"   , children: [
                _jsxDEV('span', { className: "size-2 rounded-full bg-warning pulse-dot"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this )
                , row
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
              , _jsxDEV('button', { className: "px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium"      , children: "Capture"}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
            ]}, row, true, {fileName: _jsxFileName, lineNumber: 42}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
  );
}
