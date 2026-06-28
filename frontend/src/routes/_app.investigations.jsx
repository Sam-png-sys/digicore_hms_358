import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/investigations")({ head: () => ({ meta: [{ title: "Investigations" }] }), component: stubs.makeStub("Investigations", "Diagnostics", "Lab orders, radiology and report tracking.") });
