"use server"

import { delay } from "@/lib/utils"

// Interface para dados do usuário
export interface UserData {
  name: string
  email: string
  image: string | null
  initials: string
}

// Função para obter dados do usuário
export async function getUserData(): Promise<UserData> {
  await delay(500)

  return {
    name: "João Silva",
    email: "joao.silva@example.com",
    image: null,
    initials: "JS",
  }
}