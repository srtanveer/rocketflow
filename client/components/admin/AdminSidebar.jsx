'use client'

import { cn } from "../../lib/utils"
import { Home, FileText, BookOpen, Settings, LogOut, Menu, X, Grid, DollarSign, Sparkles, List } from "lucide-react"
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { logout as apiLogout } from './api'
import Card from '../ui/Card'
import Button from '../ui/Button'

export function AdminSidebar({ className }) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={cn(
      'h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col transition-all duration-300 shadow-2xl border-r border-gray-700',
      collapsed ? 'w-20' : 'w-72',
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className={cn("flex items-center justify-between transition-all", collapsed ? 'justify-center' : '')}>
          <div className={cn("flex items-center gap-3 transition-all", collapsed ? 'justify-center w-full' : '')}>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral-500 to-coral-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-coral-500/30">
                RF
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            {!collapsed && (
              <div>
                <div className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  RocketFlow
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Sparkles size={10} className="text-coral-400" />
                  Admin Panel
                </div>
              </div>
            )}
          </div>
          {!collapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-all"
              onClick={() => setCollapsed(!collapsed)}
            >
              <X size={18} />
            </Button>
          )}
        </div>
        {collapsed && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-700/50 text-gray-400 hover:text-white rounded-lg transition-all mt-4 w-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu size={18} />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className={cn("text-xs uppercase text-gray-500 font-semibold mb-3 tracking-wider", collapsed ? 'text-center px-0' : 'px-3')}>
          {!collapsed && 'Main Menu'}
        </div>
        <div className="space-y-1">
          <SidebarLink
            href="/dashboard"
            icon={<Home size={20} />}
            label="Dashboard"
            collapsed={collapsed}
            active={pathname === '/dashboard'}
          />
          <SidebarLink
            href="/posts"
            icon={<FileText size={20} />}
            label="Posts"
            collapsed={collapsed}
            active={pathname?.startsWith('/posts')}
          />
          <SidebarLink
            href="/tutorials"
            icon={<BookOpen size={20} />}
            label="Tutorials"
            collapsed={collapsed}
            active={pathname?.startsWith('/tutorials')}
          />
          <SidebarLink
            href="/packages"
            icon={<Grid size={20} />}
            label="Packages"
            collapsed={collapsed}
            active={pathname?.startsWith('/packages')}
          />
          <SidebarLink
            href="/features"
            icon={<List size={20} />}
            label="Features"
            collapsed={collapsed}
            active={pathname?.startsWith('/features')}
          />
          <SidebarLink
            href="/admin/pricing"
            icon={<DollarSign size={20} />}
            label="Pricing"
            collapsed={collapsed}
            active={pathname?.startsWith('/admin/pricing')}
          />
        </div>

        <div className={cn("text-xs uppercase text-gray-500 font-semibold mt-8 mb-3 tracking-wider", collapsed ? 'text-center px-0' : 'px-3')}>
          {!collapsed && 'System'}
        </div>
        <div className="space-y-1">
          <SidebarLink
            href="/dashboard/settings"
            icon={<Settings size={20} />}
            label="Settings"
            collapsed={collapsed}
            active={pathname?.startsWith('/dashboard/settings')}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700/50">
        <button
          onClick={() => { apiLogout(); router.push('/admin') }}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
            "bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300",
            "border border-red-500/20 hover:border-red-500/30",
            collapsed ? 'justify-center' : ''
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, label, collapsed, active }) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group relative overflow-hidden",
        active
          ? "bg-gradient-to-r from-coral-500 to-coral-600 text-white shadow-lg shadow-coral-500/30"
          : "text-gray-400 hover:text-white hover:bg-gray-700/50",
        collapsed ? 'justify-center' : ''
      )}
      title={label}
    >
      {active && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
      )}
      <div className={cn(
        "flex items-center justify-center w-6 relative z-10 transition-transform group-hover:scale-110",
        active && "drop-shadow-lg"
      )}>
        {icon}
      </div>
      {!collapsed && <span className="relative z-10">{label}</span>}
      {!collapsed && active && (
        <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
      )}
    </a>
  )
}
