'use client'

import Link from "next/link";
import Logo from "@/public/logog.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer({ border = false }: { border?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div 
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo and copyright */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Image src={Logo} alt="Logo" width={150} height={90} />
            </div>
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Clarity - All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/features"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/community"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://www.linkedin.com/company/chaos2clarity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
