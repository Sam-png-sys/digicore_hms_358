import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/nabh")({ head: () => ({ meta: [{ title: "NABH" }] }), component: stubs.makeStub("NABH", "Accreditation", "Quality, safety and compliance dashboards.") });
