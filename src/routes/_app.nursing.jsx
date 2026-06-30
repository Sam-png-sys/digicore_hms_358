import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/nursing")({ head: () => ({ meta: [{ title: "Nursing" }] }), component: stubs.makeStub("Nursing", "Care Operations", "Admissions, assessment, charges, monitoring and observations.") });
