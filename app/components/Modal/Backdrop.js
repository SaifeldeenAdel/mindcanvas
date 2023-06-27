import { motion } from "framer-motion";

export default function Backdrop({ children, onClick }) {
	return (
		<motion.div
			className="fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center bg-[#0F172Ae4]"
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3}}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
}
