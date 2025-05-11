"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";
import { getQueryClient } from "@/utils/tanstack-query.utils";
import { ORPCContext } from "@/utils/orpc.client";
import { orpc } from "@/utils/orpc";

export default function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = getQueryClient();
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<QueryClientProvider client={queryClient}>
				<ORPCContext.Provider value={orpc}>{children}</ORPCContext.Provider>
			</QueryClientProvider>
			<Toaster richColors />
		</ThemeProvider>
	);
}
