import {
  Activity,
  ArrowUpRight,
  Beaker,
  CalendarClock,
  CheckCircle2,
  ClipboardPlus,
  FileImage,
  FileText,
  Filter,
  Image as ImageIcon,
  Plus,
  Search,
  UploadCloud,
} from "lucide-react";
import { Card, PageHeader } from "@/components/AppShell";

const LABS = {
  pathology: {
    title: "Pathology Lab",
    breadcrumb: "Core Systems",
    description: "Request pathology reports, store patient test records, and manage uploaded lab images.",
    accent: "emerald",
    stats: [
      ["Requests", "74", "28 pending"],
      ["Samples", "116", "Collected today"],
      ["Reports Ready", "49", "Awaiting release"],
      ["Images Stored", "312", "Slides and scans"],
    ],
    tests: ["CBC", "LFT", "KFT", "Blood Sugar", "Urine Routine", "Lipid Profile"],
    requests: [
      ["REQ-P-2041", "Aarav Mehta", "CBC, LFT", "Sample collected", "In Process"],
      ["REQ-P-2042", "Sara Khan", "KFT", "Report verified", "Ready"],
      ["REQ-P-2043", "Priya Sharma", "Urine Routine", "Collection pending", "Pending"],
    ],
    records: [
      ["UH-204871", "CBC Report", "PDF + smear image", "26 Jun 2026"],
      ["UH-204902", "LFT Report", "PDF report", "26 Jun 2026"],
      ["UH-204971", "Urine Microscopy", "Microscopy image", "25 Jun 2026"],
    ],
    gallery: [
      ["Blood smear", "UH-204871", "Microscopy"],
      ["Urine sediment", "UH-204971", "Slide image"],
      ["Biochemistry chart", "UH-204902", "Analyzer output"],
    ],
  },
  radiology: {
    title: "Radiology Lab",
    breadcrumb: "Core Systems",
    description: "Request radiology reports, archive patient imaging records, and track test history.",
    accent: "cyan",
    stats: [
      ["Requests", "38", "12 waiting"],
      ["Scans Today", "61", "Across rooms"],
      ["Reports Ready", "24", "For dispatch"],
      ["Images Stored", "1,284", "DICOM and previews"],
    ],
    tests: ["X-Ray Chest", "USG Abdomen", "CT Brain", "MRI Spine", "Echo", "Doppler"],
    requests: [
      ["REQ-R-8811", "Aman Joshi", "X-Ray Chest", "Image captured", "Reporting"],
      ["REQ-R-8812", "Meera Patel", "USG Abdomen", "Radiologist signed", "Ready"],
      ["REQ-R-8813", "Daniel Cruz", "CT Brain", "Patient waiting", "Pending"],
    ],
    records: [
      ["UH-204938", "CT Brain", "DICOM + report", "26 Jun 2026"],
      ["UH-204771", "X-Ray Chest PA", "Image + PDF", "26 Jun 2026"],
      ["UH-204810", "USG Abdomen", "Report + key images", "25 Jun 2026"],
    ],
    gallery: [
      ["CT Brain slice", "UH-204938", "DICOM preview"],
      ["X-Ray Chest", "UH-204771", "Radiograph"],
      ["USG Abdomen", "UH-204810", "Key image"],
    ],
  },
};

const statusTone = {
  "In Process": "bg-accent/10 text-accent ring-accent/20",
  Reporting: "bg-accent/10 text-accent ring-accent/20",
  Ready: "bg-primary/10 text-primary ring-primary/20",
  Pending: "bg-warning/10 text-warning ring-warning/20",
};

function LabStat({ label, value, sub, tone }) {
  return (
    <Card className="p-4 sm:p-5" glow={tone}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <Activity className="size-4 shrink-0 text-primary" />
      </div>
      <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
    </Card>
  );
}

function ImageTile({ item, index }) {
  const gradients = [
    "from-primary/30 via-accent/15 to-transparent",
    "from-accent/30 via-primary/10 to-transparent",
    "from-warning/25 via-accent/10 to-transparent",
  ];

  return (
    <div className="overflow-hidden rounded-lg bg-background ring-1 ring-border">
      <div className={`grid aspect-[4/3] place-items-center bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        <ImageIcon className="size-10 text-foreground/70" />
      </div>
      <div className="p-3">
        <div className="truncate text-sm font-medium">{item[0]}</div>
        <div className="mt-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>{item[1]}</span>
          <span>{item[2]}</span>
        </div>
      </div>
    </div>
  );
}

export function LabModule({ type }) {
  const lab = LABS[type];

  return (
    <div className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
      <PageHeader
        title={lab.title}
        breadcrumb={lab.breadcrumb}
        description={lab.description}
        action={
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium ring-1 ring-border">
              <UploadCloud className="size-4" />
              Upload Record
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
              <Plus className="size-4" />
              New Request
            </button>
          </div>
        }
      />

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {lab.stats.map(([label, value, sub], index) => (
          <LabStat
            key={label}
            label={label}
            value={value}
            sub={sub}
            tone={index === 0 ? lab.accent : undefined}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <Card>
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <h3 className="font-semibold">Patient Report Requests</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Create, search, and track report requests from OPD/IPD patients.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search patient or request..."
                  className="w-full rounded-lg bg-background py-2 pr-3 pl-9 text-sm ring-1 ring-border outline-none focus:ring-primary/40 sm:w-64"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm ring-1 ring-border">
                <Filter className="size-4" />
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr className="border-b border-border">
                  {["Request ID", "Patient", "Tests", "Progress", "Status", ""].map((head) => (
                    <th key={head} className="px-5 py-3 text-left font-medium">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lab.requests.map((row) => (
                  <tr key={row[0]} className="border-b border-border/60 hover:bg-white/[0.02]">
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{row[0]}</td>
                    <td className="px-5 py-3 font-medium">{row[1]}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row[2]}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row[3]}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2 py-1 text-[11px] ring-1 ${statusTone[row[4]]}`}>
                        {row[4]}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button className="rounded-md p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
                        <ArrowUpRight className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="border-b border-border p-4 sm:p-5">
            <h3 className="font-semibold">Available Tests</h3>
            <p className="mt-1 text-xs text-muted-foreground">Common test catalog for quick ordering.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-1">
            {lab.tests.map((test) => (
              <button
                key={test}
                className="flex items-center justify-between gap-3 rounded-lg bg-background p-3 text-left ring-1 ring-border transition-colors hover:bg-white/[0.03]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Beaker className="size-4" />
                  </span>
                  <span className="truncate text-sm font-medium">{test}</span>
                </span>
                <ClipboardPlus className="size-4 shrink-0 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="border-b border-border p-4 sm:p-5">
            <h3 className="font-semibold">Stored Patient Records</h3>
            <p className="mt-1 text-xs text-muted-foreground">Reports linked to patient UHID and visit history.</p>
          </div>
          <div className="divide-y divide-border">
            {lab.records.map((record) => (
              <div key={`${record[0]}-${record[1]}`} className="flex gap-3 p-4 hover:bg-white/[0.02] sm:p-5">
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                  <FileText className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{record[1]}</div>
                  <div className="truncate text-xs text-muted-foreground">{record[0]}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{record[2]}</span>
                    <span className="hidden sm:inline">-</span>
                    <span>{record[3]}</span>
                  </div>
                </div>
                <CalendarClock className="size-4 shrink-0 text-muted-foreground" />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <h3 className="font-semibold">Images & Attachments</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Frontend preview storage for scans, slides, PDFs, and captured images.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm ring-1 ring-border">
              <FileImage className="size-4" />
              Attach Images
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:p-5">
            {lab.gallery.map((item, index) => (
              <ImageTile key={`${item[0]}-${item[1]}`} item={item} index={index} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
