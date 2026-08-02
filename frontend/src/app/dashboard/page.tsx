"use client";

import React from "react";
import { ChatConsole } from "@/components/dashboard/chat-console";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl w-full mx-auto h-full flex flex-col justify-center items-center relative pb-16 px-3 sm:px-6">
      {/* Ambient background glows */}
      <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full bg-emerald-500/[0.04] blur-[70px] sm:blur-[110px] pointer-events-none" />
      <div className="absolute -right-24 -top-24 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] rounded-full bg-emerald-400/[0.03] blur-[60px] sm:blur-[90px] pointer-events-none" />
      <div className="absolute -left-24 bottom-0 w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] rounded-full bg-white/[0.02] blur-[60px] sm:blur-[90px] pointer-events-none" />

      {/* Claude-style Welcome & Input Section (Centered Component) */}
      <ChatConsole />
    </div>
  );
}