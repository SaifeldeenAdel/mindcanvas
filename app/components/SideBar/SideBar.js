import {
	TfiDesktop,
	TfiPalette,
	TfiThought,
	TfiBookmarkAlt,
	TfiHome,
} from "react-icons/tfi";
import { VscLayoutSidebarLeft } from "react-icons/vsc";

import SideBarItem from "./SideBarItem";
export default function SideBar() {
	return (
		<>
			<div className="peer absolute top-2 left-2 z-[9999] mt-4 mb-8 ml-1 flex h-16 w-16 items-center justify-center rounded-[2rem] bg-slate-200">
				<VscLayoutSidebarLeft size="30" />
			</div>
			<div className=" fixed top-0 left-0 z-20 m-0 hidden h-screen w-[12rem] flex-col bg-white p-2 pt-[8rem] text-primary shadow-xl transition-all duration-100 ease-in-out hover:flex peer-hover:flex">
				<SideBarItem icon={<TfiHome size="20" />} text="Home" />
				<SideBarItem icon={<TfiThought size="20" />} text="Self" />
				<SideBarItem icon={<TfiPalette size="20" />} text="Art" />
				<SideBarItem icon={<TfiDesktop size="20" />} text="Tech" />
				<SideBarItem icon={<TfiBookmarkAlt size="18" />} text="Books" />
			</div>
		</>
	);
}
