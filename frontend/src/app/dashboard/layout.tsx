"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.push("/login");
    }
  }, [token, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-screen bg-black px-4">
        <div className="w-7 h-7 sm:w-8 sm:h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex bg-black min-h-screen w-screen text-white font-sans">
        <AppSidebar />
        <main className="flex-1 min-h-screen flex flex-col p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}