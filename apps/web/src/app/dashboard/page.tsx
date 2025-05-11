"use client";
import { authClient } from "@/lib/auth-client";
import { useORPC } from "@/utils/orpc.client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardClient from "./client";
import { getQueryClient, HydrateClient } from "@/utils/tanstack-query.utils";
import { orpc } from "@/utils/orpc";

export default function Dashboard() {
	const queryClient = getQueryClient();

	queryClient.prefetchQuery(orpc.privateData.queryOptions());

	return (
		<HydrateClient>
			<DashboardClient />
		</HydrateClient>
	);
}
