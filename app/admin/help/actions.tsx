"use server"

import { delay } from "@/lib/utils"

export async function getHelpData() {
  await delay(300)
  
  return {
    status: "success",
    timestamp: new Date().toISOString()
  }
}