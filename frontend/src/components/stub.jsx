import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  Filter,
  Plus,
  Search,
} from "lucide-react";
import { PageHeader, Card } from "@/components/AppShell";

const MODULE_DATA = {
  Nursing: {
    stats: [
      ["Round Tasks", "42", "8 pending"],
      ["Vitals Logged", "216", "Today"],
      ["Medication Due", "17", "Next 2h"],
      ["Escalations", "3", "Needs review"],
    ],
    lanes: ["Ward rounds", "Medication charting", "Nurse notes", "Handover"],
    records: [
      ["Aarav Mehta", "ICU Bed 04", "Vitals due in 12 min", "warning"],
      ["Priya Sharma", "General G-21", "Medication completed", "success"],
      ["Sara Khan", "Private 312", "Pain score review", "info"],
    ],
  },
  "OT Details": {
    stats: [
      ["Scheduled", "9", "Today"],
      ["In Theatre", "2", "Live"],
      ["Recovery", "4", "PACU"],
      ["Delayed", "1", "Consent pending"],
    ],
    lanes: ["Pre-op checklist", "Theatre allocation", "Procedure notes", "Recovery"],
    records: [
      ["OT-2041", "Lap chole", "Theatre 2 ready", "success"],
      ["OT-2042", "ORIF femur", "Anaesthesia review", "warning"],
      ["OT-2043", "C-section", "Recovery observation", "info"],
    ],
  },
  Investigations: {
    stats: [
      ["Lab Orders", "86", "32 pending"],
      ["Radiology", "18", "6 awaiting"],
      ["Reports Ready", "54", "Today"],
      ["Critical", "2", "Call doctor"],
    ],
    lanes: ["Sample collection", "Lab processing", "Radiology queue", "Report release"],
    records: [
      ["CBC - UH-204871", "Pathology", "Report ready", "success"],
      ["MRI Brain", "Radiology", "Slot at 14:30", "info"],
      ["Troponin I", "Biochemistry", "Critical value", "warning"],
    ],
  },
  Inventory: {
    stats: [
      ["Stock Items", "1,842", "Across stores"],
      ["Low Stock", "26", "Reorder"],
      ["GRNs", "12", "This week"],
      ["Expiring", "19", "30 days"],
    ],
    lanes: ["Pharmacy store", "Consumables", "Purchase orders", "Vendor returns"],
    records: [
      ["Inj. Ceftriaxone", "Pharmacy", "Below reorder level", "warning"],
      ["IV Cannula 20G", "Consumables", "Stock received", "success"],
      ["Surgical gloves", "Central store", "Vendor quote pending", "info"],
    ],
  },
  MRD: {
    stats: [
      ["Files Indexed", "12,480", "Archive"],
      ["Requests", "38", "Today"],
      ["Pending Scan", "91", "Backlog"],
      ["Released", "24", "Verified"],
    ],
    lanes: ["Record request", "File retrieval", "Scanning", "Release approval"],
    records: [
      ["UH-204871", "Discharge summary", "Ready for release", "success"],
      ["UH-198431", "Insurance copy", "Scanning pending", "warning"],
      ["UH-202110", "Legal request", "Approval required", "info"],
    ],
  },
  NABH: {
    stats: [
      ["Indicators", "64", "Tracked"],
      ["Audits", "7", "Open"],
      ["Incidents", "3", "CAPA due"],
      ["Compliance", "94%", "Monthly"],
    ],
    lanes: ["Quality indicators", "Incident reports", "CAPA tracker", "Audit evidence"],
    records: [
      ["Medication safety", "Clinical audit", "Evidence uploaded", "success"],
      ["Fall incident", "Patient safety", "CAPA due tomorrow", "warning"],
      ["Fire drill", "Facility audit", "Scheduled Friday", "info"],
    ],
  },
  "Tally Interface": {
    stats: [
      ["Ledgers Synced", "218", "Today"],
      ["Pending Bills", "42", "Export queue"],
      ["Receipts", "156", "Matched"],
      ["Exceptions", "5", "Review"],
    ],
    lanes: ["OPD receipts", "IPD invoices", "Concessions", "Refund vouchers"],
    records: [
      ["BL-22041", "OPD receipt", "Synced to ledger", "success"],
      ["IPD-88412", "Corporate bill", "GST mapping needed", "warning"],
      ["RF-3042", "Refund voucher", "Waiting approval", "info"],
    ],
  },
};

const toneClass = {
  success: "bg-primary/10 text-primary ring-primary/20",
  warning: "bg-warning/10 text-warning ring-warning/20",
  info: "bg-accent/10 text-accent ring-accent/20",
};

function makeStub(title, breadcrumb, description) {
  return function ModuleDashboard() {
    const data = MODULE_DATA[title] ?? {
      stats: [
        ["Open Items", "24", "Live"],
        ["Completed", "118", "Today"],
        ["Pending", "9", "Attention"],
        ["Alerts", "2", "Review"],
      ],
      lanes: ["Intake", "Processing", "Approval", "Reports"],
      records: [
        ["Record A", breadcrumb, "Updated recently", "success"],
        ["Record B", breadcrumb, "Pending action", "warning"],
        ["Record C", breadcrumb, "In progress", "info"],
      ],
    };

    return (
      <div className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
        <PageHeader
          title={title}
          breadcrumb={breadcrumb}
          description={description}
          action={
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 sm:w-auto">
              <Plus className="size-4" />
              New Entry
            </button>
          }
        />

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {data.stats.map(([label, value, sub], index) => (
            <Card key={label} className="p-4 sm:p-5" glow={index === 0 ? "emerald" : undefined}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                {index % 2 === 0 ? (
                  <Activity className="size-4 shrink-0 text-primary" />
                ) : (
                  <Clock3 className="size-4 shrink-0 text-accent" />
                )}
              </div>
              <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.9fr]">
          <Card>
            <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <h3 className="font-semibold">Operational Workbench</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Responsive workspace for daily {title.toLowerCase()} activity.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    placeholder="Search module..."
                    className="w-full rounded-lg bg-background py-2 pr-3 pl-9 text-sm ring-1 ring-border outline-none focus:ring-primary/40 sm:w-56"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm ring-1 ring-border">
                  <Filter className="size-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4 sm:p-5">
              {data.lanes.map((lane, index) => (
                <div key={lane} className="rounded-lg bg-background p-4 ring-1 ring-border">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <ClipboardList className="size-4 text-primary" />
                    <span className="rounded-full bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground ring-1 ring-border">
                      {index + 1}
                    </span>
                  </div>
                  <div className="text-sm font-medium">{lane}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {index % 2 === 0 ? "Live queue enabled" : "Auto-saved drafts"}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="border-b border-border p-4 sm:p-5">
              <h3 className="font-semibold">Recent Activity</h3>
              <p className="mt-1 text-xs text-muted-foreground">Latest operational records.</p>
            </div>
            <div className="divide-y divide-border">
              {data.records.map(([name, meta, status, tone]) => (
                <div key={`${name}-${status}`} className="flex gap-3 p-4 hover:bg-white/[0.02] sm:p-5">
                  <div className={`grid size-9 shrink-0 place-items-center rounded-lg ring-1 ${toneClass[tone]}`}>
                    {tone === "success" ? <CheckCircle2 className="size-4" /> : <FileText className="size-4" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{name}</div>
                    <div className="truncate text-xs text-muted-foreground">{meta}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{status}</div>
                  </div>
                  <button className="self-start rounded-md p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  };
}

export const stubs = { makeStub };
