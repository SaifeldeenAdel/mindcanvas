"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
	TfiDesktop,
	TfiPalette,
	TfiThought,
	TfiBookmarkAlt,
	TfiHome,
} from "react-icons/tfi";
import { VscLayoutSidebarLeft, VscLayoutSidebarRight } from "react-icons/vsc";

import SideBarItem from "./SideBarItem";
export default function SideBar() {
  const path = usePathname();
	const [visible, setVisible] = useState(false);
	const sidebarRef = useRef();

	const handleVisible = () => {
		setVisible(!visible);
	};

	useEffect(() => {
		const handler = (e) => {
			if (!sidebarRef?.current?.contains(e.target)) {
				setVisible(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);
  if(path == '/') {
    return;
  } else {

    return (
      <>
        <div
          onClick={handleVisible}
          className="fixed top-5 left-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 hover:cursor-pointer"
        >
          {visible ? (
            <VscLayoutSidebarRight size="30" />
          ) : (
            <VscLayoutSidebarLeft size="30" />
          )}
        </div>
        <div
          ref={sidebarRef}
          className={`${
            visible ? "flex" : "hidden"
          } fixed top-0 left-0 z-20 m-0 h-screen w-[12rem] flex-col justify-between bg-white pt-[8rem] font-sans text-primary shadow-xl`}
        >
          <div className="px-2">
            <SideBarItem
              icon={<TfiHome size="20" />}
              text="Home"
              handleVisible={handleVisible}
            />
            <SideBarItem
              icon={<TfiThought size="20" />}
              text="Self"
              handleVisible={handleVisible}
            />
            <SideBarItem
              icon={<TfiPalette size="20" />}
              text="Art"
              handleVisible={handleVisible}
            />
            <SideBarItem
              icon={<TfiBookmarkAlt size="18" />}
              text="Books"
              handleVisible={handleVisible}
            />
            <SideBarItem
              icon={<TfiDesktop size="20" />}
              text="Tech"
              handleVisible={handleVisible}
            />
          </div>
          <Link
            href="https://saifdev.vercel.app"
            className="flex flex-col"
          >
            <hr className=""/>
            <div className="flex flex-row items-center gap-3 hover:bg-slate-100 duration-200 py-2 px-2">
              <img src="/saif.png" alt="Creator" className="h-9 rounded-full" />
              <div className="flex flex-col ">
                <span className="text-sm">Created By</span>
                <span className="font-bold">Saif</span>
              </div>
            </div>
            <hr className=""/>
  
          </Link>
        </div>
      </>
    );
  }
}
