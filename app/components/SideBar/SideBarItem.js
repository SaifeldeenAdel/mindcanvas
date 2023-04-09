"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarItem({ icon, text }) {
	const lower = text != "Home" ? text.toLowerCase() : "";
	const path = usePathname();

	return (
		<Link
			href={`/${lower}`}
			className={`sidebar-item ${path == `/${lower}` ? "bg-slate-100" : ""}`}
		>
			<div className="sidebar-icon">{icon}</div>
			<div className="sidebar-content">{text}</div>
		</Link>
	);
}
