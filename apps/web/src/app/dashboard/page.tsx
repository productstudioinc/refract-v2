import { orpc } from "@/utils/orpc";
import { HydrateClient, getQueryClient } from "@/utils/tanstack-query.utils";
import { redirect } from "next/navigation";
import DashboardClient from "./client";

export default async function Dashboard() {
	const queryClient = getQueryClient();
	const session = await queryClient.fetchQuery(orpc.getSession.queryOptions());

	if (!session?.user) {
		redirect("/login");
	}

	queryClient.prefetchQuery(orpc.privateData.queryOptions());

	return (
		<HydrateClient>
			<DashboardClient />
		</HydrateClient>
	);
}
