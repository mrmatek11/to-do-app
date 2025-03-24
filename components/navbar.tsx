'use client';

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { 
  CheckSquare, 
  PlusSquare, 
  ListTodo, 
  Settings, 
  Search, 
  Moon, 
  Sun 
} from 'lucide-react';

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Todo List", href: "/", icon: <CheckSquare size={20} /> },
    { label: "Categories", href: "/categories", icon: <ListTodo size={20} /> },
    { label: "New Todo", href: "/new", icon: <PlusSquare size={20} /> },
    { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
  ];

  const searchInput = (
    <Input
      aria-label="Search todos"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search todos..."
      startContent={
        <Search className="text-default-400" size={20} />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left side - Brand and Navigation */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <CheckSquare className="text-primary" size={24} />
            <p className="font-bold text-inherit">Todo App</p>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium flex items-center gap-2",
                )}
                color="foreground"
                href={item.href}
              >
                {item.icon}
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right side - Actions */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex mr-4">
          {searchInput}
        </NavbarItem>
        
        <NavbarItem className="flex items-center gap-3">
          <ThemeSwitch />
          
          <Button
            color="primary"
            variant="shadow"
            as={NextLink}
            href="/new"
            startContent={<PlusSquare size={20} />}
          >
            New Todo
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : "foreground"
                }
                href={item.href}
                size="lg"
                className="flex items-center gap-3"
              >
                {item.icon}
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};