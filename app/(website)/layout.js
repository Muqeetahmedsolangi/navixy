"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import useRtl from "@/hooks/useRtl";
import useDarkMode from "@/hooks/useDarkMode";
import useSkin from "@/hooks/useSkin";
import Loading from "@/components/Loading";

export default function WebsiteLayout({ children }) {
  const [isRtl] = useRtl();
  const [isDark] = useDarkMode();
  const [skin] = useSkin();
  const location = usePathname();

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`website-wrapper min-h-screen ${isDark ? "dark" : "light"} ${
        skin === "bordered" ? "skin--bordered" : "skin--default"
      }`}
    >
      <ToastContainer />
      
      <main className="website-content">
        <motion.div
          key={location}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              y: 30,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
            },
            pageExit: {
              opacity: 0,
              y: -30,
            },
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
          }}
        >
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </motion.div>
      </main>
    </div>
  );
} 