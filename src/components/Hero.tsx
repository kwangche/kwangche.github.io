"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] opacity-50 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] opacity-50 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
            End-to-end Full-stack Developer
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Design. Build. <br className="hidden md:block" />
            <span className="text-blue-500">Optimize.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            " 실패를 두려워하지 않고 코드의 흐름을 빠르게 읽고 문제점을 파악하여 "<br />바로 개선할 수 있는 개발자입니다.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              프로젝트 보기
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
