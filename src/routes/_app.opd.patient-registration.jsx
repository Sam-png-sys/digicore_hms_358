const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/AppShell";
import { UserPlus, Upload, User, ClipboardList, Receipt, Search, Plus, FileBadge, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/opd/patient-registration")({
  head: () => ({ meta: [{ title: "Patient Registration · OPD" }] }),
  component: Registration,
});

function Field({ label, required, children }) {
  return (
    _jsxDEV('label', { className: "block", children: [
      _jsxDEV('span', { className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5 inline-block"      , children: [
        label, " " , required && _jsxDEV('span', { className: "text-warning", children: "*"}, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 14}, this)
      , children
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 13}, this)
  );
}

const inputCls = "w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-primary/40 transition-all";

function Registration() {
  const [services, setServices] = useState([
    { name: "OPD Consultation", qty: 1, price: 500 },
  ]);
  const total = services.reduce((s, x) => s + x.qty * x.price, 0);

  return (
    _jsxDEV('div', { className: "p-8 max-w-[1500px] mx-auto"  , children: [
      _jsxDEV(PageHeader, {
        title: "Patient Registration" ,
        breadcrumb: "Patient Management · OPD"   ,
        description: "Create a new patient record, capture visit details and bill in one flow."            ,
        action: 
          _jsxDEV('button', { className: "px-4 py-2 bg-secondary ring-1 ring-border text-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5"            , children: [
            _jsxDEV(ClipboardList, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this ), " Appointment Patients"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 37}, this)
        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this
      )

      , _jsxDEV('div', { className: "grid grid-cols-1 xl:grid-cols-3 gap-6"   , children: [
        /* Personal */
        _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(User, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Personal Details" }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)

          , _jsxDEV('div', { className: "flex flex-col items-center mb-5"   , children: [
            _jsxDEV('div', { className: "size-24 rounded-full bg-secondary ring-1 ring-border grid place-items-center mb-2"       , children: 
              _jsxDEV(User, { className: "size-10 text-muted-foreground" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 53}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this)
            , _jsxDEV('button', { className: "text-xs text-primary hover:underline"  , children: "Upload photo" }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 51}, this)

          , _jsxDEV('div', { className: "relative mb-4" , children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
            , _jsxDEV('input', { placeholder: "Search by patient name or mobile"     , className: inputCls + " pl-10",}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 58}, this)

          , _jsxDEV('div', { className: "grid grid-cols-2 gap-3"  , children: [
            _jsxDEV(Field, { label: "Prefix", required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Mr."}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this), _jsxDEV('option', { children: "Mrs."}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this), _jsxDEV('option', { children: "Ms."}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this), _jsxDEV('option', { children: "Dr."}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 64}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
            , _jsxDEV(Field, { label: "First Name" , required: true, children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
            , _jsxDEV(Field, { label: "Middle Name" , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 66}, this)
            , _jsxDEV(Field, { label: "Last Name" , required: true, children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 67}, this)
            , _jsxDEV(Field, { label: "Gender", required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Male"}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this), _jsxDEV('option', { children: "Female"}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this), _jsxDEV('option', { children: "Other"}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 68}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
            , _jsxDEV(Field, { label: "Date of Birth"  , required: true, children: _jsxDEV('input', { type: "date", className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
            , _jsxDEV(Field, { label: "Year", children: _jsxDEV('input', { className: inputCls, placeholder: "--",}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 70}, this)
            , _jsxDEV(Field, { label: "Month", children: _jsxDEV('input', { className: inputCls, placeholder: "--",}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 71}, this)
            , _jsxDEV(Field, { label: "Days", children: _jsxDEV('input', { className: inputCls, placeholder: "--",}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
            , _jsxDEV(Field, { label: "Blood Group" , children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "O+"}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this), _jsxDEV('option', { children: "A+"}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this), _jsxDEV('option', { children: "B+"}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this), _jsxDEV('option', { children: "AB+"}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 73}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
            , _jsxDEV('div', { className: "col-span-2", children: _jsxDEV(Field, { label: "Marital Status" , children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Single"}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this), _jsxDEV('option', { children: "Married"}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 74}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
            , _jsxDEV('div', { className: "col-span-2", children: _jsxDEV(Field, { label: "Address", required: true, children: _jsxDEV('textarea', { rows: 2, className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 75}, this)
            , _jsxDEV(Field, { label: "Pin Code" , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this)
            , _jsxDEV(Field, { label: "Country", required: true, children: _jsxDEV('input', { className: inputCls, defaultValue: "India",}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
            , _jsxDEV(Field, { label: "State", required: true, children: _jsxDEV('input', { className: inputCls, defaultValue: "Maharashtra",}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 78}, this)
            , _jsxDEV(Field, { label: "District", required: true, children: _jsxDEV('input', { className: inputCls, defaultValue: "Pune",}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)

        /* Visit / ID */
        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(FileBadge, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 86}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "ID Proof & Visit Details"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 87}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 85}, this)

          , _jsxDEV('div', { className: "grid grid-cols-2 gap-3 mb-4"   , children: [
            _jsxDEV(Field, { label: "ID Proof Type"  , children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Aadhaar"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this), _jsxDEV('option', { children: "PAN"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this), _jsxDEV('option', { children: "Passport"}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 91}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this)
            , _jsxDEV(Field, { label: "ID Proof No."  , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 90}, this)

          , _jsxDEV('div', { className: "mb-6", children: [
            _jsxDEV('div', { className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-2"     , children: "Upload ID Proof Document"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 96}, this)
            , _jsxDEV('div', { className: "grid grid-cols-2 gap-3"  , children: [
              _jsxDEV('button', { className: "flex items-center justify-center gap-2 py-3 bg-background ring-1 ring-dashed ring-border rounded-lg text-sm text-muted-foreground hover:ring-primary/40 hover:text-foreground transition-all"              , children: [
                _jsxDEV(Upload, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 99}, this ), " Click to Upload"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 98}, this)
              , _jsxDEV('button', { className: "flex items-center justify-center gap-2 py-3 bg-background ring-1 ring-border rounded-lg text-sm text-primary hover:bg-primary/5"           , children: [
                _jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this ), " More Docs"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 101}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 97}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 95}, this)

          , _jsxDEV('div', { className: "flex items-center gap-2 mb-4 pb-4 border-b border-border"      , children: [
            _jsxDEV(FileBadge, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Visit Details" }, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)

          , _jsxDEV('div', { className: "flex gap-4 mb-4"  , children: 
            ["Visit Only", "Mark VIP", "MLC"].map((l) => (
              _jsxDEV('label', { className: "flex items-center gap-2 text-sm cursor-pointer"    , children: [
                _jsxDEV('input', { type: "checkbox", className: "size-3.5 accent-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 115}, this ), " " , l
              ]}, l, true, {fileName: _jsxFileName, lineNumber: 114}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)

          , _jsxDEV('div', { className: "grid grid-cols-2 gap-3"  , children: [
            _jsxDEV(Field, { label: "Patient Type" , required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Outpatient"}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this), _jsxDEV('option', { children: "Inpatient"}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 121}, this)
            , _jsxDEV(Field, { label: "Patient Source" , required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Walk-in"}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this), _jsxDEV('option', { children: "Referral"}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 122}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
            , _jsxDEV('div', { className: "col-span-2", children: _jsxDEV(Field, { label: "Company", required: true, children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
            , _jsxDEV(Field, { label: "Tariff", required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "General"}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this), _jsxDEV('option', { children: "Premium"}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 124}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this)
            , _jsxDEV(Field, { label: "Department", required: true, children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Cardiology"}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this), _jsxDEV('option', { children: "Neurology"}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
            , _jsxDEV(Field, { label: "Doctor", required: true, children: _jsxDEV('select', { className: inputCls, children: _jsxDEV('option', { children: "Dr. Sneha Shah"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
            , _jsxDEV(Field, { label: "Cabin", children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this)
            , _jsxDEV(Field, { label: "Ref Doctor" , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
            , _jsxDEV(Field, { label: "Other Doctor" , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
            , _jsxDEV('div', { className: "col-span-2", children: _jsxDEV(Field, { label: "Previous Diagnosis" , children: _jsxDEV('textarea', { rows: 2, className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this)
            , _jsxDEV(Field, { label: "Relative Name" , children: _jsxDEV('input', { className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
            , _jsxDEV(Field, { label: "Relation", children: _jsxDEV('select', { className: inputCls, children: [_jsxDEV('option', { children: "Spouse"}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this), _jsxDEV('option', { children: "Parent"}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this), _jsxDEV('option', { children: "Child"}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 132}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 120}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 84}, this)

        /* Billing */
        , _jsxDEV(Card, { className: "p-6", children: [
          _jsxDEV('div', { className: "flex items-center gap-2 mb-5"   , children: [
            _jsxDEV(Receipt, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this )
            , _jsxDEV('h3', { className: "font-semibold", children: "Billing Details" }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)

          , _jsxDEV('div', { className: "relative mb-3" , children: [
            _jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this )
            , _jsxDEV('input', { placeholder: "Search by service name"   , className: inputCls + " pl-10",}, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 143}, this)

          , _jsxDEV('div', { className: "grid grid-cols-3 gap-2 mb-3"   , children: [
            _jsxDEV('input', { placeholder: "Quantity", className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this )
            , _jsxDEV('input', { placeholder: "Price *" , className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this )
            , _jsxDEV('input', { placeholder: "Total Amount" , className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 148}, this)

          , _jsxDEV('div', { className: "grid grid-cols-[1fr_auto] gap-2 mb-5"   , children: [
            _jsxDEV('input', { placeholder: "Doctor", className: inputCls,}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this )
            , _jsxDEV('button', { className: "px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:brightness-110"          , children: [
              _jsxDEV(Plus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this ), " Add Service"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 156}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 154}, this)

          , _jsxDEV('div', { className: "text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-2"     , children: "Added Services" }, void 0, false, {fileName: _jsxFileName, lineNumber: 161}, this)
          , _jsxDEV('div', { className: "bg-background ring-1 ring-border rounded-lg overflow-hidden mb-5"     , children: 
            _jsxDEV('table', { className: "w-full text-sm" , children: [
              _jsxDEV('thead', { className: "bg-secondary/40 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"     , children: 
                _jsxDEV('tr', { children: [_jsxDEV('th', { className: "text-left p-2.5" , children: "Service"}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this), _jsxDEV('th', { className: "p-2.5", children: "Qty"}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this), _jsxDEV('th', { className: "text-right p-2.5" , children: "Amount"}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this), _jsxDEV('th', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 165}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)
              , _jsxDEV('tbody', { children: 
                services.map((s, i) => (
                  _jsxDEV('tr', { className: "border-t border-border" , children: [
                    _jsxDEV('td', { className: "p-2.5", children: s.name}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
                    , _jsxDEV('td', { className: "text-center p-2.5" , children: s.qty}, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this)
                    , _jsxDEV('td', { className: "text-right p-2.5 font-mono"  , children: ["₹", (s.qty * s.price).toLocaleString()]}, void 0, true, {fileName: _jsxFileName, lineNumber: 172}, this)
                    , _jsxDEV('td', { className: "p-2.5", children: _jsxDEV('button', { onClick: () => setServices(services.filter((_, j) => j !== i)), className: "text-muted-foreground hover:text-warning" , children: _jsxDEV(Trash2, { className: "size-3.5",}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
                  ]}, i, true, {fileName: _jsxFileName, lineNumber: 169}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 167}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 163}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 162}, this)

          , _jsxDEV('div', { className: "bg-primary/5 ring-1 ring-primary/20 rounded-lg p-4 mb-4"     , children: [
            _jsxDEV('div', { className: "flex justify-between text-sm mb-2"   , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Subtotal"}, void 0, false, {fileName: _jsxFileName, lineNumber: 181}, this), _jsxDEV('span', { className: "font-mono", children: ["₹", total.toLocaleString()]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)
            , _jsxDEV('div', { className: "flex justify-between text-sm mb-2"   , children: [_jsxDEV('span', { className: "text-muted-foreground", children: "Tax (5%)" }, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this), _jsxDEV('span', { className: "font-mono", children: ["₹", (total * 0.05).toFixed(0)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 182}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 182}, this)
            , _jsxDEV('div', { className: "flex justify-between text-base font-semibold pt-2 border-t border-primary/20"      , children: [_jsxDEV('span', { children: "Net Payable" }, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this), _jsxDEV('span', { className: "font-mono text-primary" , children: ["₹", (total * 1.05).toFixed(0)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 183}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 183}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 180}, this)

          , _jsxDEV('div', { className: "grid grid-cols-2 gap-2"  , children: [
            _jsxDEV('button', { className: "py-2.5 bg-secondary ring-1 ring-border rounded-lg text-sm font-medium hover:bg-white/5"       , children: "Reset"}, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this)
            , _jsxDEV('button', { className: "py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110 flex items-center justify-center gap-2"          , children: [
              _jsxDEV(UserPlus, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this ), " Proceed"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 188}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 186}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 137}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
