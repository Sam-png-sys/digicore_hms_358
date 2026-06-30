import { createFileRoute } from "@tanstack/react-router";
import { stubs } from "@/components/stub";
export const Route = createFileRoute("/_app/inventory")({ head: () => ({ meta: [{ title: "Inventory" }] }), component: stubs.makeStub("Inventory", "Supply Chain", "Pharmacy stock, consumables and reordering.") });
