"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DashboardHeader } from "./components/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Cabeçalho do Dashboard */}
      <DashboardHeader />

      {/* Conteúdo simplificado */}
      <Card>
        <CardContent className="p-6">
          <div className="h-full w-full flex items-center justify-center text-gray-500 py-12">
            <div className="max-w-md text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">Painel Administrativo</h1>
              <p className="text-gray-600 mb-4">
                Esta é a estrutura base do painel administrativo com menu lateral deslizante.
              </p>
              <p className="text-sm text-gray-500">
                O painel completo será implementado posteriormente.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}