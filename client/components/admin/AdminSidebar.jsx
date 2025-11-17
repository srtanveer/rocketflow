import { cn } from "../../lib/utils"
import { Home, FileText, BookOpen, Settings, LogOut, Menu, ChevronLeft, Grid } from "lucide-react"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { logout as apiLogout } from './api'
import Card from '../ui/Card'
import Button from '../ui/Button'

export function AdminSidebar({ className }) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  return (
    <Card className={cn('h-screen py-4 px-3 flex flex-col transition-width', collapsed ? 'w-20' : 'w-72', className)} hover={false} padding="md">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("flex items-center gap-3 transition-all", collapsed ? 'justify-center w-full' : '')}>
          <div className={cn("w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center text-white font-bold text-lg")}>RF</div>
          {!collapsed && (
            <div>
              <div className="font-bold text-base text-coral-500">RocketFlow</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
          )}
        </div>
        <Button variant="ghost" size="sm" className="p-1" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <Menu size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <nav className="flex flex-col gap-2">
        <div className="text-xs uppercase text-gray-400 px-2 mb-1">Manage</div>
        <SidebarLink href="/dashboard" icon={<Home size={18} />} label="Dashboard" collapsed={collapsed} />
        <SidebarLink href="/posts" icon={<FileText size={18} />} label="Posts" collapsed={collapsed} />
        <SidebarLink href="/tutorials" icon={<BookOpen size={18} />} label="Tutorials" collapsed={collapsed} />

        <div className="text-xs uppercase text-gray-400 px-2 mt-4 mb-1">Settings</div>
        <SidebarLink href="/dashboard/settings" icon={<Settings size={18} />} label="Settings" collapsed={collapsed} />
      </nav>

      <div className="mt-auto pt-4">
        <button onClick={() => { apiLogout(); router.push('/admin') }} className="w-full text-left flex items-center gap-3 px-2 py-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-500">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </Card>
  )
}

function SidebarLink({ href, icon, label, collapsed }) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors hover:bg-coral-50 hover:text-coral-500",
        "text-gray-700"
      )}
      title={label}
    >
      <div className="flex items-center justify-center w-6">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </a>
  )
}
