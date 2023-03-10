import Link from "next/link";

export default function SideBarItem({ icon , text}) {
	return (
		<Link href={`/${text.toLowerCase()}`} className="sidebar-item">
			<div className="sidebar-icon">{icon}</div> 
      <div className="sidebar-content">{text}</div> 
		</Link>
	);
}
