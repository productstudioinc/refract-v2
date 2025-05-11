import DashboardClient from "./client";
import { getQueryClient, HydrateClient } from "@/utils/tanstack-query.utils";
import { orpc } from "@/utils/orpc";
import { auth } from "../../../../server/src/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
	const user = await auth.api.getSession({
		headers: await headers(),
	});

	if (!user) {
		redirect("/login");
	}
	const queryClient = getQueryClient();

	queryClient.prefetchQuery(orpc.privateData.queryOptions());

	return (
		<HydrateClient>
			<DashboardClient />
		</HydrateClient>
	);
}
