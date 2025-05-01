"use server"

import { delay } from "@/lib/utils"

// Função simples para obter dados básicos do dashboard
export async function getDashboardData() {
  await delay(300)
  
  return {
    status: "success",
    timestamp: new Date().toISOString()
  }
}