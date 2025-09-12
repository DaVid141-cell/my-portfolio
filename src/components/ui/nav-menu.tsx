"use client"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu"

export default function NavMenu() {
  const [active, setActive] = useState("")

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`relative px-3 py-2 transition-colors ${
                active === item.href
                  ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500 after:content-['']"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
