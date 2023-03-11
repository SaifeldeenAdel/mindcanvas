import Link from "next/link";
import { FaBookOpen} from "react-icons/fa";
import { TfiDesktop, TfiPalette, TfiThought, TfiBookmark, TfiBookmarkAlt, TfiHome } from "react-icons/tfi";
import { VscLayoutSidebarLeft} from 'react-icons/vsc'

import SideBarItem from './SideBarItem'
export default function SideBar() {
	return (
    <>

      <div className="logo peer"> <VscLayoutSidebarLeft size="30" /></div>
      <div className="sidebar">
        <SideBarItem icon = {<TfiHome size="20"/>} text="Home"/>
        <SideBarItem icon = {<TfiThought size="20"/>} text="Self"/>
        <SideBarItem icon = {<TfiPalette size="20"/>} text="Art"/>
        <SideBarItem icon = {<TfiDesktop size="20"/>} text="Tech"/>
        <SideBarItem icon = {<TfiBookmarkAlt size="18"/>} text="Books"/>
      </div>
    </>
	);
}

