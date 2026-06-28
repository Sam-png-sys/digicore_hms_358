const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Card } from "@/components/AppShell";
import { Search, Calendar, Users, Clock, ChevronLeft, ChevronRight, CheckCircle2, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/_app/opd/appointments")({
  head: () => ({ meta: [{ title: "Appointments · OPD" }] }),
  component: Appointments,
});

const DEPTS = ["All", "Cardiology", "Pediatrics", "Neurology", "Gastroenterology", "Oncology", "Orthopedics", "Dermatology"];
const DOCTORS = [
  { name: "Prasad Anand Deshmukh", dept: "Cardiology", slots: 5, exp: "12 yrs" },
  { name: "Ravi Kumar Patel", dept: "Neurology", slots: 5, exp: "9 yrs" },
  { name: "Sneha Ramesh Shah", dept: "Orthopedics", slots: 3, exp: "15 yrs" },
  { name: "Amit Rajesh Desai", dept: "Dermatology", slots: 5, exp: "7 yrs" },
  { name: "Neha Arun Mehta", dept: "Pediatrics", slots: 4, exp: "11 yrs" },
  { name: "Aarav Manoj Trivedi", dept: "Neurology", slots: 5, exp: "8 yrs" },
  { name: "Meena Rajesh Bhatia", dept: "Neurology", slots: 2, exp: "14 yrs" },
  { name: "Karan Vijay Patil", dept: "Neurology", slots: 5, exp: "6 yrs" },
];
const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "16:00", "16:30", "17:00", "17:30"];
const DAYS = Array.from({ length: 14 }, (_, i) => 18 + i);

function Appointments() {
  const [dept, setDept] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDay, setSelectedDay] = useState(23);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const filtered = dept === "All" ? DOCTORS : DOCTORS.filter((d) => d.dept === dept);

  return (
    _jsxDEV('div', { className: "p-8 max-w-[1400px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Appointments",
        breadcrumb: "Patient Management · OPD"   ,
        description: "Select a doctor and pick an available time slot."        ,
        action: 
          _jsxDEV('button', { className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:brightness-110"          , children: [
            _jsxDEV(ClipboardList, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this ), " Appointment List"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this
      )

      , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-6"   , children: [
        /* Doctor selection */
        _jsxDEV('div', { className: "lg:col-span-2 space-y-4" , children: 
          _jsxDEV(Card, { className: "p-5", children: [
            _jsxDEV('div', { className: "flex items-center gap-2 mb-4"   , children: [
              _jsxDEV(Users, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 50}, this )
              , _jsxDEV('h3', { className: "font-semibold", children: "Select Doctor" }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 49}, this)
            , _jsxDEV('div', { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4"    , children: [
              _jsxDEV('div', { className: "relative", children: [
                _jsxDEV(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this )
                , _jsxDEV('input', { type: "text", defaultValue: "23-06-2026", className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
              , _jsxDEV('select', { className: "bg-background ring-1 ring-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-primary/40"        , children: [
                _jsxDEV('option', { children: "Choose department (optional)"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this)
                , DEPTS.slice(1).map((d) => _jsxDEV('option', { children: d}, d, false, {fileName: _jsxFileName, lineNumber: 60}, this))
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)
              , _jsxDEV('div', { className: "relative", children: [
                _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this )
                , _jsxDEV('input', { type: "text", placeholder: "Search doctor" , className: "w-full bg-background ring-1 ring-border rounded-lg pl-10 pr-3 py-2 text-sm outline-none focus:ring-primary/40"          ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)

            , _jsxDEV('div', { className: "flex flex-wrap gap-1.5 mb-5"   , children: 
              DEPTS.map((d) => (
                _jsxDEV('button', {

                  onClick: () => setDept(d),
                  className: `px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    dept === d ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`,
 children: 
                  d
                }, d, false, {fileName: _jsxFileName, lineNumber: 70}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)

            , _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3"     , children: ["Doctors list · "   , filtered.length]}, void 0, true, {fileName: _jsxFileName, lineNumber: 82}, this)

            , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[500px] overflow-y-auto pr-1"      , children: 
              filtered.map((doc) => {
                const active = selectedDoctor === doc.name;
                return (
                  _jsxDEV('button', {

                    onClick: () => setSelectedDoctor(doc.name),
                    className: `text-left p-3 rounded-lg transition-all ring-1 ${
                      active ? "bg-primary/10 ring-primary/40 glow-emerald" : "bg-background ring-border hover:ring-primary/30"
                    }`,
 children: 
                    _jsxDEV('div', { className: "flex items-start gap-3"  , children: [
                      _jsxDEV('div', { className: `size-10 rounded-lg grid place-items-center shrink-0 font-semibold text-sm ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`, children: 
                        doc.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
                      }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
                      , _jsxDEV('div', { className: "flex-1 min-w-0" , children: [
                        _jsxDEV('p', { className: "font-medium text-sm truncate"  , children: doc.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 100}, this)
                        , _jsxDEV('p', { className: "text-[11px] text-muted-foreground" , children: [doc.dept, " · "  , doc.exp]}, void 0, true, {fileName: _jsxFileName, lineNumber: 101}, this)
                        , _jsxDEV('p', { className: "text-[11px] mt-1 flex items-center gap-1.5"    , children: [
                          _jsxDEV('span', { className: `size-1.5 rounded-full ${doc.slots > 3 ? "bg-primary" : doc.slots > 0 ? "bg-warning" : "bg-destructive"}`,}, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this )
                          , _jsxDEV('span', { className: "text-muted-foreground", children: [doc.slots, " slots available"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 102}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 99}, this)
                    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 95}, this)
                  }, doc.name, false, {fileName: _jsxFileName, lineNumber: 88}, this)
                );
              })
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)

        /* Slot picker */
        , _jsxDEV('div', { children: 
          _jsxDEV(Card, { className: "p-5 sticky top-20"  , children: [
            _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
              _jsxDEV(Clock, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this )
              , _jsxDEV('h3', { className: "font-semibold", children: "Select Slot" }, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 118}, this)

            , _jsxDEV('div', { className: "flex items-center justify-between mb-3"   , children: [
              _jsxDEV('button', { className: "p-1.5 hover:bg-white/5 rounded-md"  , children: _jsxDEV(ChevronLeft, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)
              , _jsxDEV('div', { className: "flex items-center gap-2 text-sm font-medium"    , children: [_jsxDEV(Calendar, { className: "size-4 text-muted-foreground" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this ), " June 2026"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)
              , _jsxDEV('button', { className: "p-1.5 hover:bg-white/5 rounded-md"  , children: _jsxDEV(ChevronRight, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 123}, this)

            , _jsxDEV('div', { className: "flex gap-1.5 overflow-x-auto pb-2 mb-5"    , children: 
              DAYS.map((d) => (
                _jsxDEV('button', {

                  onClick: () => setSelectedDay(d),
                  className: `shrink-0 size-9 rounded-lg text-xs font-medium transition-all ${
                    selectedDay === d ? "bg-primary text-primary-foreground glow-emerald" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`,
 children: 
                  d
                }, d, false, {fileName: _jsxFileName, lineNumber: 131}, this)
              ))
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)

            , !selectedDoctor ? (
              _jsxDEV('div', { className: "p-4 rounded-lg bg-warning/10 ring-1 ring-warning/20 text-warning text-xs"      , children: "Please select a doctor first to view and book appointment slots."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this)
            ) : (
              _jsxDEV(_Fragment, { children: [
                _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3"     , children: "Morning"}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
                , _jsxDEV('div', { className: "grid grid-cols-3 gap-1.5 mb-5"   , children: 
                  SLOTS.slice(0, 6).map((s) => (
                    _jsxDEV('button', {

                      onClick: () => setSelectedSlot(s),
                      className: `py-2 rounded-md text-xs font-medium transition-all ${
                        selectedSlot === s ? "bg-primary text-primary-foreground glow-emerald" : "bg-secondary text-foreground hover:bg-white/10"
                      }`,
 children: 
                      s
                    }, s, false, {fileName: _jsxFileName, lineNumber: 152}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this)
                , _jsxDEV('div', { className: "text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3"     , children: "Evening"}, void 0, false, {fileName: _jsxFileName, lineNumber: 163}, this)
                , _jsxDEV('div', { className: "grid grid-cols-3 gap-1.5 mb-5"   , children: 
                  SLOTS.slice(6).map((s) => (
                    _jsxDEV('button', {

                      onClick: () => setSelectedSlot(s),
                      className: `py-2 rounded-md text-xs font-medium transition-all ${
                        selectedSlot === s ? "bg-primary text-primary-foreground glow-emerald" : "bg-secondary text-foreground hover:bg-white/10"
                      }`,
 children: 
                      s
                    }, s, false, {fileName: _jsxFileName, lineNumber: 166}, this)
                  ))
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)

                , _jsxDEV('button', {
                  disabled: !selectedSlot,
                  className: "w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-50"            ,
 children: [
                  _jsxDEV(CheckCircle2, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this ), " Confirm Booking"
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 178}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 148}, this)
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 116}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
  );
}
