"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/context/auth-context";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  // NOTE: mapping still guessed — confirm which Vector belongs to which item.
  const navItems = [
    { name: "Dashboard", href: ROUTES.DASHBOARD, icon: "/Vector.png" },
    { name: "Your Feed", href: "/dashboard/feed", icon: "/Vector (1).png" },
    { name: "Imported Repos", href: "/dashboard/imported-repos", icon: "/Vector (1).png" },
    { name: "GitHub Search", href: "/dashboard/repositories", icon: "/Vector.png" },
    { name: "Profile", href: ROUTES.PROFILE, icon: "/Vector (2).png" },
    { name: "Settings", href: "#", icon: "/Vector (3).png" },
  ];

  return (
    <Sidebar className="fixed inset-y-0 left-0 z-50 w-[220px] shrink-0 -translate-x-full border-r border-white/[0.05] bg-black text-white transition-transform duration-300 md:translate-x-0">
      <SidebarHeader className="p-6 bg-black flex-shrink-0">
        <div className="flex items-center gap-1.5 mt-2 justify-center w-full">
          <span className="text-3xl font-semibold tracking-tight italic text-white font-serif">
            osca
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-5 py-2 bg-black overflow-x-hidden flex flex-col flex-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      style={isActive ? { backgroundColor: "#093C02" } : undefined}
                      className="w-full flex items-center gap-[14px] px-4 h-[45px] rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                    >
                      <Link href={item.href}>
                        <span
                          aria-hidden="true"
                          className="shrink-0"
                          style={{
                            width: 16,
                            height: 16,
                            backgroundImage: `url("${item.icon}")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        />
                        <span
                          style={{ whiteSpace: "nowrap", overflow: "visible", textOverflow: "unset" }}
                          className="font-mona-sans font-medium text-[15px] leading-[20.47px] tracking-[0%] text-[#EEF0F2]"
                        >
                          {item.name}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto pb-4">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={logout}
                  className="w-full flex items-center gap-[14px] px-4 h-[45px] rounded-xl border border-white/[0.1] transition-all duration-200 hover:bg-red-500/10 hover:border-red-500/20"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0"
                    style={{
                      width: 16,
                      height: 16,
                      backgroundImage: `url("/arr.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <span
                    style={{ whiteSpace: "nowrap", overflow: "visible", textOverflow: "unset" }}
                    className="font-mona-sans font-medium text-[15px] leading-[20.47px] tracking-[0%] text-[#EEF0F2]"
                  >
                    Logout
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}