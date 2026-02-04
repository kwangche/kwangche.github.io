"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s work <span className="text-blue-500">together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            현재 새로운 기회를 찾고 있습니다. 궁금한 점이 있거나 인사를 나누고 싶으시다면,
            언제든 편하게 연락주세요! 최대한 빠르게 답변 드리겠습니다.
          </p>

          <a
            href="mailto:dlrhkdcp11@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg mb-12"
          >
            <Mail size={20} />
            dlrhkdcp11@gmail.com
          </a>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/kwangche"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <Github size={24} />
              </div>
              <span className="text-sm">GitHub</span>
            </a>

            {/* Add LinkedIn if available, placeholder for now */}
            {/* 
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            */}
          </div>

          <footer className="mt-24 text-gray-600 text-sm">
            © {new Date().getFullYear()} Gwangche Lee. All rights reserved.
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
