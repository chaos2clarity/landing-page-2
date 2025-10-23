'use client'

import Link from "next/link";
import Logo from "@/public/logog.png";
import LogoDark from "@/public/images/claritylogoblue.png"
import LogoPurple from "@/public/images/claritylogopurple.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer({ border = false }: { border?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  
  return (
    <footer ref={ref} className="bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div 
          className={`flex flex-col items-center justify-center py-8 md:py-12 space-y-4 ${
            border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <Image src={theme === "dark"? LogoDark : LogoPurple} alt="Logo" width={150} height={90} />
          </div>
          <div className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Clarity - All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
