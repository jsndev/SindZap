"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { UserData } from "@/app/admin/actions"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface AdminFooterProps {
  collapsed: boolean
  userData: UserData | null
  loading: boolean
}

export function AdminFooter({ collapsed, userData, loading }: AdminFooterProps) {
  if (loading) {
    return (
      <div className={`bg-white ${collapsed ? "p-2" : "p-3"}`}>
        <div className="animate-pulse flex items-center justify-center">
          <div className={`rounded-full bg-gray-200 ${collapsed ? "h-8 w-8" : "h-8 w-8 mr-6"}`}></div>
          {!collapsed && (
            <div className="flex-1">
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
              <div className="h-2 w-16 bg-gray-200 rounded mt-2"></div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (collapsed) {
    return (
      <div className="bg-white p-2 flex justify-center">
        <Avatar className="h-8 w-8 border">
          <AvatarFallback>{userData?.initials || "AD"}</AvatarFallback>
        </Avatar>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="border-t border-gray-200 p-3">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 border">
            <AvatarFallback>{userData?.initials || "AD"}</AvatarFallback>
          </Avatar>
          <div className="flex-1 ml-6">
            <p className="text-sm font-medium leading-none text-gray-900">{userData?.name || "Usuário"}</p>
            <Button
              variant="ghost"
              className="flex h-auto items-center p-0 pt-0.5 text-xs font-normal text-gray-500 hover:text-primary"
            >
              <LogOut className="mr-1 h-3 w-3" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
