"use client";
import React from "react";
import Link from "next/link";
import { Bug } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/dashboard", label: "Dashboard" },
    { id: 3, href: "/issues", label: "Issues" },
  ];

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-foreground transition-colors"
        >
          <Bug className="w-5 h-5" />
          <span>VA ISSUE APP</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {links.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                  currentPath === item.href
                    ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
