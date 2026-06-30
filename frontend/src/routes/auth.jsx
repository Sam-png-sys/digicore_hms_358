const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ShieldCheck, Lock, Mail, User, Fingerprint, Eye, EyeOff,
  ArrowRight, CheckCircle2, Hospital, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in · DIGICORE HMIS" },
      { name: "description", content: "Secure clinical gateway for DIGICORE HMIS administrators and clinicians." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 600);
  }

  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground flex"   , children: [
      /* Left brand panel */
      _jsxDEV('div', { className: "hidden lg:flex w-[44%] relative overflow-hidden border-r border-border flex-col p-12 justify-between bg-sidebar"          , children: [
        _jsxDEV('div', {
          className: "absolute inset-0 opacity-60 pointer-events-none"   ,
          style: {
            background:
              "radial-gradient(60% 50% at 20% 10%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 70%), radial-gradient(50% 50% at 90% 90%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
          },}, void 0, false, {fileName: _jsxFileName, lineNumber: 34}, this
        )
        , _jsxDEV('div', {
          className: "absolute inset-0 opacity-[0.04]"  ,
          style: {
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          },}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this
        )

        , _jsxDEV('div', { className: "relative z-10 flex items-center gap-3"    , children: [
          _jsxDEV('div', { className: "size-11 bg-primary rounded-xl grid place-items-center glow-emerald"     , children: 
            _jsxDEV(Activity, { className: "size-6 text-primary-foreground" , strokeWidth: 2.5,}, void 0, false, {fileName: _jsxFileName, lineNumber: 52}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
          , _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "text-xl font-semibold tracking-tight"  , children: "DIGICORE HMIS" }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
            , _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground"    , children: "Clinical Command · v2.6"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 56}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)

        , _jsxDEV('div', { className: "relative z-10 max-w-md space-y-8"   , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('div', { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary text-[11px] font-medium mb-5"            , children: [
              _jsxDEV(Sparkles, { className: "size-3",}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this ), " New · Realtime ward telemetry"
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 62}, this)
            , _jsxDEV('h1', { className: "text-4xl font-semibold tracking-tight leading-[1.05] text-balance"    , children: "The command deck for modern hospitals."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
            , _jsxDEV('p', { className: "text-muted-foreground mt-4 text-[15px] leading-relaxed"   , children: "Unify patient flow, billing, beds, OT and pharmacy in one live workspace — built for the people who keep care moving."


            }, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)

          , _jsxDEV('div', { className: "space-y-3", children: 
            [
              { icon: Hospital, text: "Live bed availability across 24+ wards" },
              { icon: ShieldCheck, text: "HIPAA-grade audit & RBAC controls" },
              { icon: Fingerprint, text: "Multi-factor biometric sign-in" },
            ].map((f) => (
              _jsxDEV('div', { className: "flex items-center gap-3 text-sm text-muted-foreground"    , children: [
                _jsxDEV('div', { className: "size-8 rounded-lg bg-white/[0.03] ring-1 ring-border grid place-items-center"      , children: 
                  _jsxDEV(f.icon, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this )
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 81}, this)
                , f.text
              ]}, f.text, true, {fileName: _jsxFileName, lineNumber: 80}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 60}, this)

        , _jsxDEV('div', { className: "relative z-10 grid grid-cols-3 gap-4"    , children: 
          [
            { k: "1,248", v: "Active patients" },
            { k: "78%", v: "Bed occupancy" },
            { k: "14m", v: "Avg wait" },
          ].map((s) => (
            _jsxDEV('div', { className: "bg-card/60 ring-1 ring-border rounded-lg p-3"    , children: [
              _jsxDEV('div', { className: "text-lg font-semibold" , children: s.k}, void 0, false, {fileName: _jsxFileName, lineNumber: 97}, this)
              , _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5"     , children: s.v}, void 0, false, {fileName: _jsxFileName, lineNumber: 98}, this)
            ]}, s.v, true, {fileName: _jsxFileName, lineNumber: 96}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 90}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)

      /* Right form panel */
      , _jsxDEV('div', { className: "flex-1 flex flex-col"  , children: [
        _jsxDEV('div', { className: "flex justify-between items-center p-6"   , children: [
          _jsxDEV(Link, { to: "/auth", className: "lg:hidden flex items-center gap-2"   , children: [
            _jsxDEV('div', { className: "size-8 bg-primary rounded-lg grid place-items-center glow-emerald"     , children: 
              _jsxDEV(Activity, { className: "size-4 text-primary-foreground" , strokeWidth: 2.5,}, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this )
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this)
            , _jsxDEV('span', { className: "font-semibold tracking-tight" , children: "DIGICORE"}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
          , _jsxDEV('div', { className: "ml-auto text-xs text-muted-foreground flex items-center gap-1.5"     , children: [
            _jsxDEV('span', { className: "size-1.5 rounded-full bg-primary pulse-dot"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 114}, this ), " All systems operational"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 113}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 106}, this)

        , _jsxDEV('div', { className: "flex-1 grid place-items-center p-6"   , children: 
          _jsxDEV('div', { className: "w-full max-w-md animate-rise"  , children: [
            /* Mode switcher */
            _jsxDEV('div', { className: "inline-flex p-1 rounded-lg bg-card ring-1 ring-border mb-8"      , children: [
              _jsxDEV('button', {
                onClick: () => setMode("signin"),
                className: `px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  mode === "signin" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`,
 children: "Sign in"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
              , _jsxDEV('button', {
                onClick: () => setMode("signup"),
                className: `px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  mode === "signup" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`,
 children: "Create account"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)

            , _jsxDEV('h2', { className: "text-3xl font-semibold tracking-tight"  , children: 
              mode === "signin" ? "Welcome back, clinician." : "Request clinical access."
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            , _jsxDEV('p', { className: "text-muted-foreground mt-2 text-sm"  , children: 
              mode === "signin"
                ? "Sign in with your hospital credentials to enter the command deck."
                : "Your account will be provisioned after IT verification."
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 143}, this)

            , _jsxDEV('form', { onSubmit: handleSubmit, className: "mt-8 space-y-4" , children: [
              mode === "signup" && (
                _jsxDEV('div', { children: [
                  _jsxDEV('label', { className: "block text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5"      , children: "Full name" }, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
                  , _jsxDEV('div', { className: "relative", children: [
                    _jsxDEV(User, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 154}, this )
                    , _jsxDEV('input', {
                      required: true,
                      type: "text",
                      placeholder: "Dr. Aris Thorne"  ,
                      className: "w-full bg-card ring-1 ring-border rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-primary/50 transition-all outline-none"           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 155}, this
                    )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 153}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 151}, this)
              )

              , _jsxDEV('div', { children: [
                _jsxDEV('label', { className: "block text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-1.5"      , children: 
                  mode === "signin" ? "Clinical ID or email" : "Work email"
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 166}, this)
                , _jsxDEV('div', { className: "relative", children: [
                  _jsxDEV(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this )
                  , _jsxDEV('input', {
                    required: true,
                    type: "text",
                    placeholder: mode === "signin" ? "vance@aetheris.med" : "you@hospital.org",
                    className: "w-full bg-card ring-1 ring-border rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-primary/50 transition-all outline-none"           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this
                  )
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 169}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 165}, this)

              , _jsxDEV('div', { children: [
                _jsxDEV('div', { className: "flex justify-between items-center mb-1.5"   , children: [
                  _jsxDEV('label', { className: "block text-[11px] font-medium uppercase tracking-widest text-muted-foreground"     , children: "Verification key" }, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this)
                  , mode === "signin" && _jsxDEV('a', { className: "text-[11px] text-primary hover:underline cursor-pointer"   , children: "Forgot?"}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 181}, this)
                , _jsxDEV('div', { className: "relative", children: [
                  _jsxDEV(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this )
                  , _jsxDEV('input', {
                    required: true,
                    type: showPw ? "text" : "password",
                    placeholder: "••••••••••",
                    className: "w-full bg-card ring-1 ring-border rounded-lg py-3 pl-10 pr-10 text-sm focus:ring-primary/50 transition-all outline-none"           ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this
                  )
                  , _jsxDEV('button', { type: "button", onClick: () => setShowPw((v) => !v), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"     , children: 
                    showPw ? _jsxDEV(EyeOff, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 194}, this ) : _jsxDEV(Eye, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 194}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 193}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 185}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 180}, this)

              , mode === "signin" && (
                _jsxDEV('label', { className: "flex items-center gap-2 text-xs text-muted-foreground cursor-pointer"     , children: [
                  _jsxDEV('input', { type: "checkbox", className: "size-3.5 accent-primary" , defaultChecked: true,}, void 0, false, {fileName: _jsxFileName, lineNumber: 201}, this ), "Keep me signed in on this workstation"

                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 200}, this)
              )

              , _jsxDEV('button', {
                type: "submit",
                disabled: loading,
                className: "w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-60"             ,
 children: 
                loading ? (
                  _jsxDEV(_Fragment, { children: "Authenticating…"}, void 0, false, {fileName: _jsxFileName, lineNumber: 212}, this)
                ) : (
                  _jsxDEV(_Fragment, { children: [
                    mode === "signin" ? "Enter command deck" : "Request access", " " , _jsxDEV(ArrowRight, { className: "size-4",}, void 0, false, {fileName: _jsxFileName, lineNumber: 215}, this )
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 214}, this)
                )
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 206}, this)

              , _jsxDEV('div', { className: "flex items-center gap-3 my-2"   , children: [
                _jsxDEV('div', { className: "flex-1 h-px bg-border"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 221}, this )
                , _jsxDEV('span', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground"    , children: "or"}, void 0, false, {fileName: _jsxFileName, lineNumber: 222}, this)
                , _jsxDEV('div', { className: "flex-1 h-px bg-border"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 223}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 220}, this)

              , _jsxDEV('button', { type: "button", className: "w-full py-3 bg-card ring-1 ring-border rounded-lg text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2"             , children: [
                _jsxDEV(Fingerprint, { className: "size-4 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 227}, this ), " Continue with biometric"
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 226}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 149}, this)

            , _jsxDEV('div', { className: "mt-8 p-4 rounded-lg bg-card/60 ring-1 ring-border"     , children: [
              _jsxDEV('div', { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2"     , children: "Security protocols" }, void 0, false, {fileName: _jsxFileName, lineNumber: 232}, this)
              , _jsxDEV('div', { className: "grid grid-cols-1 gap-1.5"  , children: 
                ["Multi-factor biometric enabled", "IP-restricted access zone", "Real-time session logging"].map((s) => (
                  _jsxDEV('div', { className: "flex items-center gap-2 text-xs text-muted-foreground"    , children: [
                    _jsxDEV(CheckCircle2, { className: "size-3.5 text-primary" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 236}, this ), " " , s
                  ]}, s, true, {fileName: _jsxFileName, lineNumber: 235}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 233}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 231}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 119}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)

        , _jsxDEV('div', { className: "p-6 text-center text-[11px] text-muted-foreground"   , children: "© 2026 Aetheris Systems · Built for clinicians who keep care moving."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 244}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
