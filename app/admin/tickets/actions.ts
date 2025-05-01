"use server"

import { delay } from "@/lib/utils"

// Função simples para obter dados básicos de solicitações
export async function getTicketsData() {
  await delay(300)
  
  return {
    status: "success",
    timestamp: new Date().toISOString()
  }
}