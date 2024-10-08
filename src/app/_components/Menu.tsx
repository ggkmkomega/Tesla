import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { role } from "~/lib/data";
type menuitem = {
  title: string;
  items: item[];
};
type item = { icon: LucideIcon; label: string; href: string; visible: Visible };
export type Visibility = "admin" | "teacher" | "student" | "parent";
type Visible = Visibility | Visibility[];
const menuItems: menuitem[] = [
  {
    title: "MENU",
    items: [
      {
        icon: Icons.Placeholder,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: Icons.Placeholder,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: Icons.Placeholder,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: Icons.Placeholder,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: Icons.Placeholder,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: Icons.Placeholder,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: Icons.Placeholder,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: Icons.Placeholder,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Icons.Placeholder,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="my-4 hidden font-light lg:block">{i.title}</span>
          <MenuItem items={i.items}></MenuItem>
        </div>
      ))}
    </div>
  );
};

const MenuItem = ({ items }: { items: item[] }) => {
  return (
    <>
      {items.map((i) => {
        if (i.visible.includes(role)) {
          return (
            <Link
              className="flex items-center justify-center gap-4 py-2 hover:bg-blue-100 md:px-2 lg:justify-start"
              key={i.label}
              href={i.href}
            >
              <i.icon />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          );
        }
      })}
    </>
  );
};
export default Menu;
