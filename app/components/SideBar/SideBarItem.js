"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarItem({ hideSidebar, icon, text }) {
	const lower = text != "Home" ? text.toLowerCase() : "";
	const path = usePathname();

	return (
		<Link
			onClick={hideSidebar}
			href={`/${lower}`}
			className={`mt-1 mb-1  flex items-center rounded-lg py-2 transition-all duration-300 hover:cursor-pointer  hover:bg-slate-100 ${
				path == `/${lower}` ? "bg-slate-100" : "bg-white"
			}`}
		>
			<div className="relative mr-1 flex w-10 items-center justify-center">
				{icon}
			</div>
			<div className="font-montserrat text-[1rem] font-light">{text}</div>
		</Link>
	);
}
