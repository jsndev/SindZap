"use client"

import { Bell, Settings, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { UserData } from "@/app/admin/actions"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface AdminHeaderProps {
  userData: UserData | null
  loading: boolean
}

export function AdminHeader({ userData, loading }: AdminHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="h-9 w-full rounded-md bg-gray-100 pl-10 pr-4 text-sm font-normal text-gray-700 outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
          <Bell className="h-5 w-5" />
        </Button>

        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-sm font-medium text-gray-900">Configurações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Perfil</DropdownMenuItem>
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Preferências</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Sistema</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-500 hover:text-primary">
              {loading ? (
                <div className="h-10 w-10 rounded-full bg-gray-200/60 animate-pulse"></div>
              ) : (
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>{userData?.initials || "AD"}</AvatarFallback>
                </Avatar>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-sm font-medium text-gray-900">Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Perfil</DropdownMenuItem>
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm font-normal text-gray-700">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
