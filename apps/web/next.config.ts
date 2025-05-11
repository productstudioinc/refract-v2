import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	serverExternalPackages: ["pg", "pg-cloudflare"],
};

export default nextConfig;
