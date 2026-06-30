import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/tally")({ head: () => ({ meta: [{ title: "Tally Interface" }] }), component: stubs.makeStub("Tally Interface", "Finance", "Sync ledgers with Tally accounting.") });
