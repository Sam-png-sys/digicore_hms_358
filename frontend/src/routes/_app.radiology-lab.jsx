import { createFileRoute } from "@tanstack/react-router";
import { LabModule } from "@/components/LabModule";

export const Route = createFileRoute("/_app/radiology-lab")({
  head: () => ({ meta: [{ title: "Radiology Lab" }] }),
  component: () => <LabModule type="radiology" />,
});
