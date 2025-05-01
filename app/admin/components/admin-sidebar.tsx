"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building,
  Users,
  TicketCheck,
  Settings,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Solicitações",
    icon: TicketCheck,
    href: "/admin/tickets",
  },
  {
    title: "Condôminos",
    icon: Users,
    href: "/admin/residents",
  },
  {
    title: "Condomínios",
    icon: Building,
    href: "/admin/buildings",
  },
]

interface AdminSidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function AdminSidebar({ collapsed, setCollapsed }: AdminSidebarProps) {
  const pathname = usePathname()

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className={cn("relative h-full bg-white transition-all duration-300 ease-in-out", collapsed ? "w-16" : "w-64")}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!collapsed ? (
            <div className="flex items-center">
              <span className="text-xl font-medium text-black">Condomínio</span>
            </div>
          ) : (
            <div className="mx-auto"></div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn("h-8 w-8 rounded-full", collapsed ? "mx-auto" : "ml-auto")}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <TooltipProvider delayDuration={0}>
            <ul className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.title}>
                    {collapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg",
                              isActive
                                ? "bg-primary text-white hover:bg-primary hover:text-white"
                                : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="border bg-white text-gray-700">
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-lg px-3 py-2 text-sm font-normal",
                          isActive
                            ? "bg-primary text-white hover:bg-primary hover:text-white"
                            : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                        )}
                      >
                        <item.icon className="mr-3 h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>

            {!collapsed && (
              <div className="mt-8">
                <h2 className="px-3 text-xs font-medium uppercase tracking-wider text-gray-500">Suporte</h2>
                <ul className="mt-2 space-y-1">
                  <li>
                    <Link
                      href="/admin/settings"
                      className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-sm font-normal",
                        pathname === "/admin/settings"
                          ? "bg-primary text-white hover:bg-primary hover:text-white"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      <Settings className="mr-3 h-4 w-4" />
                      <span>Configurações</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/help"
                      className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-sm font-normal",
                        pathname === "/admin/help"
                          ? "bg-primary text-white hover:bg-primary hover:text-white"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      <LifeBuoy className="mr-3 h-4 w-4" />
                      <span>Ajuda</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {collapsed && (
              <div className="mt-8 flex flex-col items-center space-y-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/admin/settings"
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        pathname === "/admin/settings"
                          ? "bg-primary text-white hover:bg-primary hover:text-white"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      <Settings className="h-5 w-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="border bg-white text-gray-700">
                    Configurações
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/admin/help"
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        pathname === "/admin/help"
                          ? "bg-primary text-white hover:bg-primary hover:text-white"
                          : "text-gray-700 hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      <LifeBuoy className="h-5 w-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="border bg-white text-gray-700">
                    Ajuda
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </TooltipProvider>
        </nav>
      </div>
    </div>
  )
}
