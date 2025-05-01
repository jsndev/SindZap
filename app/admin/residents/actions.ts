"use server"

import { delay } from "@/lib/utils"

// Função simples para obter dados básicos de condôminos
export async function getResidentsData() {
  await delay(300)
  
  return {
    status: "success",
    timestamp: new Date().toISOString()
  }
}