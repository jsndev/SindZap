"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw, PlusCircle } from "lucide-react"
import { useState } from "react"
import { getTicketsData } from "../actions"

export function TicketsHeader() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<string | null>(null)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      // Usar a server action para obter dados
      const data = await getTicketsData()
      setLastUpdate(data.timestamp)
      console.log("Dados atualizados:", data)
    } catch (error) {
      console.error("Erro ao atualizar dados:", error)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Solicitações</h1>
        <p className="text-sm text-muted-foreground">
          Gerenciar chamados e solicitações dos condôminos.
          {lastUpdate && <span className="ml-2 text-xs opacity-70">Última atualização: {new Date(lastUpdate).toLocaleTimeString()}</span>}
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Nova Solicitação</span>
        </Button>
        <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing} className="h-8 gap-1">
          <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {isRefreshing ? "Atualizando..." : "Atualizar"}
          </span>
        </Button>
      </div>
    </div>
  )
}