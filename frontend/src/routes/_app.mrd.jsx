import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/mrd")({ head: () => ({ meta: [{ title: "MRD" }] }), component: stubs.makeStub("MRD", "Medical Records", "Centralized patient record archive.") });
