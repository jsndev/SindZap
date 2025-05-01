"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { AdminSidebar } from "@/app/admin/components/admin-sidebar"
import { AdminHeader } from "@/app/admin/components/admin-header"
import { AdminFooter } from "@/app/admin/components/admin-footer"
import { getUserData } from "./actions"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Start collapsed
  const [collapsed, setCollapsed] = useState(true)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUserData()
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#f9fafb" }}>
      <div className={`flex flex-col transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"}`}>
        <div className="flex-1">
          <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <AdminFooter collapsed={collapsed} userData={userData} loading={loading} />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader userData={userData} loading={loading} />
        <main className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: "#f9fafb" }}>
          {children}
        </main>
      </div>
    </div>
  )
}
