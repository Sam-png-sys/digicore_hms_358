import { createFileRoute } from "@tanstack/react-router";
import { LabModule } from "@/components/LabModule";

export const Route = createFileRoute("/_app/pathology-lab")({
  head: () => ({ meta: [{ title: "Pathology Lab" }] }),
  component: () => <LabModule type="pathology" />,
});
