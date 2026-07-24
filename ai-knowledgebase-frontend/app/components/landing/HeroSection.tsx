"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  GitBranch as Github,
  Cloud,
  FileText,
  File,
} from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-lighter/45 via-white to-white" />

      <div className="container-main relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-text-dark sm:text-5xl lg:mx-0 lg:text-[3.45rem]">
              Turn Your Enterprise Data <br className="hidden sm:block" />
              Into <span className="text-primary">Intelligent</span> Answers
            </h1>
            <div className="badge mb-7">
              AI-Powered Enterprise Knowledge Platform
            </div>

            <p className="mx-auto mb-9 max-w-xl text-base leading-8 text-text-light sm:text-lg lg:mx-0">
              Secure, scalable, and production-grade RAG-as-a-Service platform
              to build AI knowledge assistants over your private data.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="#" className="btn btn-primary">
                Start Building Free
              </Link>
              <Link href="#" className="btn btn-secondary">
                Book a Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-light lg:justify-start">
              {[
                "No credit card required",
                "Setup in minutes",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeWithLine({ 
  icon, 
  alt,
  delayClass,
  posClass,
  baseX,
  baseY,
  widthClass = "w-14",
  heightClass = "h-14"
}: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // approximate px to viewBox % conversion (assume 450px container)
  const lineX = useTransform(x, (val) => baseX + (val / 4.5));
  const lineY = useTransform(y, (val) => baseY + (val / 4.5));

  return (
    <>
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="50"
          y1="50"
          x2={lineX}
          y2={lineY}
          className="dash-line"
        />
      </svg>
      
      <div className={`node-float ${delayClass} absolute ${posClass}`}>
        <motion.div
          drag
          dragConstraints={{ top: -30, right: 30, bottom: 30, left: -30 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
          style={{ x, y }}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 0.9, rotate: -5 }}
          className={`node-in flex ${heightClass} ${widthClass} items-center justify-center rounded-2xl border border-border bg-white shadow-sm cursor-grab active:cursor-grabbing`}
        >
          <Image src={icon} alt={alt} width={24} height={24} />
        </motion.div>
      </div>
    </>
  );
}

function HeroDiagram() {
  return (
    <div className="relative aspect-square w-full max-w-[430px] sm:max-w-[520px] lg:max-w-[580px] select-none">
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .dash-line {
          stroke: #a78bfa;
          stroke-width: 0.6;
          stroke-dasharray: 2;
          opacity: 0.6;
          animation: dash 2s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        .node-float {
          animation: float 4s ease-in-out infinite;
        }
        .node-delay-1 { animation-delay: 0s; }
        .node-delay-2 { animation-delay: 0.5s; }
        .node-delay-3 { animation-delay: 1.0s; }
        .node-delay-4 { animation-delay: 1.5s; }
        .node-delay-5 { animation-delay: 2.0s; }
        .node-delay-6 { animation-delay: 2.5s; }
        .node-delay-7 { animation-delay: 3.0s; }
        .node-delay-8 { animation-delay: 3.5s; }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(139,92,246,0.4); }
          50% { box-shadow: 0 0 65px rgba(139,92,246,0.8); }
        }
        .center-pulse {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
      {/* Center Circle */}
      <div className="center-pulse absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-primary">
        <Image
          src="/logo.svg"
          alt="KnowMatrix"
          width={64}
          height={64}
          className="object-contain brightness-0 invert filter"
        />
      </div>

      {/* Nodes */}
      <NodeWithLine icon="/notion.svg" alt="Notion" delayClass="node-delay-1" posClass="top-[18%] left-[20%]" baseX={25} baseY={25} />
      <NodeWithLine icon="/slack.svg" alt="Slack" delayClass="node-delay-2" posClass="top-[12%] right-[22%]" baseX={75} baseY={20} />
      <NodeWithLine icon="/github.svg" alt="Github" delayClass="node-delay-3" posClass="top-[35%] right-[10%]" baseX={85} baseY={40} />
      <NodeWithLine icon="/pdf.svg" alt="Pdf" delayClass="node-delay-4" posClass="top-[60%] right-[12%]" baseX={80} baseY={65} />
      <NodeWithLine icon="/docs.svg" alt="docs" delayClass="node-delay-5" posClass="bottom-[15%] right-[28%]" baseX={65} baseY={80} />
      <NodeWithLine icon="/cloud.svg" alt="Cloud" delayClass="node-delay-6" posClass="bottom-[8%] left-[40%]" baseX={45} baseY={85} />
      <NodeWithLine icon="/database.svg" alt="Database" delayClass="node-delay-7" posClass="bottom-[20%] left-[18%]" baseX={25} baseY={75} />
      <NodeWithLine icon="/google-drive.svg" alt="Google Drive" delayClass="node-delay-8" posClass="top-[40%] left-[10%]" baseX={15} baseY={45} widthClass="w-12" heightClass="h-12" />
    </div>
  );
}
