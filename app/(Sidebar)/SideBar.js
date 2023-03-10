import Link from "next/link";
import { FaLightbulb, FaBookOpen, FaLaptop, FaPalette, FaPersonBooth, FaDesktop } from "react-icons/fa";
import { TfiDesktop, TfiPalette, TfiThought, TfiBookmark, TfiBookmarkAlt } from "react-icons/tfi";

import SideBarItem from './SideBarItem'
export default function SideBar() {
	return (
		<div className="sidebar">
      <Link href={""} className="logo"> <FaBookOpen size="30" /></Link>
			<SideBarItem icon = {<TfiThought size="20"/>} text="Self"/>
			<SideBarItem icon = {<TfiPalette size="20"/>} text="Art"/>
			<SideBarItem icon = {<TfiDesktop size="20"/>} text="Tech"/>
			<SideBarItem icon = {<TfiBookmarkAlt size="18"/>} text="Books"/>
		</div>
	);
}

