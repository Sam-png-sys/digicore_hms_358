import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/ot")({ head: () => ({ meta: [{ title: "OT Details" }] }), component: stubs.makeStub("OT Details", "Surgical Operations", "Operating theatre schedules and procedure tracking.") });
