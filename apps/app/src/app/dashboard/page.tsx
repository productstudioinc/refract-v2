import { client, orpc } from "@/utils/orpc";
import { HydrateClient, getQueryClient } from "@/utils/tanstack-query.utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../../server/src/lib/auth";
import DashboardClient from "./client";

export default async function Dashboard() {
	return (
		<>
			<div>Dashboard</div>
		</>
	);
}
