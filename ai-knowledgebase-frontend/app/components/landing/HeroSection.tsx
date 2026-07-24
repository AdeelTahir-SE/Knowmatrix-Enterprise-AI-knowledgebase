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
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        stroke=""
      >
        <line x1="50" y1="50" x2="25" y2="25" className="dash-line" />
        <line x1="50" y1="50" x2="75" y2="20" className="dash-line" />
        <line x1="50" y1="50" x2="15" y2="45" className="dash-line" />
        <line x1="50" y1="50" x2="85" y2="40" className="dash-line" />
        <line x1="50" y1="50" x2="25" y2="75" className="dash-line" />
        <line x1="50" y1="50" x2="45" y2="85" className="dash-line" />
        <line x1="50" y1="50" x2="65" y2="80" className="dash-line" />
        <line x1="50" y1="50" x2="80" y2="65" className="dash-line" />
      </svg>

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

      {/* 1. Notion (Top Left) */}
      <div className="node-in node-float node-delay-1 absolute top-[18%] left-[20%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/notion.svg" alt="Notion" width={24} height={24} />
      </div>

      {/* 2. Slack (Top Right) */}
      <div className="node-in node-float node-delay-2 absolute top-[12%] right-[22%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/slack.svg" alt="Slack" width={24} height={24} />
      </div>

      {/* 3. GitHub (Right) */}
      <div className="node-in node-float node-delay-3 absolute top-[35%] right-[10%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/github.svg" alt="Github" width={24} height={24} />
      </div>

      {/* 4. PDF Red Solid (Bottom Right) */}
      <div className="node-in node-float node-delay-4 absolute top-[60%] right-[12%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/pdf.svg" alt="Pdf" width={24} height={24} />
      </div>

      {/* 5. Docs Blue (Bottom Right Lower) */}
      <div className="node-in node-float node-delay-5 absolute bottom-[15%] right-[28%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/docs.svg" alt="docs" width={24} height={24} />
      </div>

      {/* 6. Cloud (Bottom) */}
      <div className="node-in node-float node-delay-6 absolute bottom-[8%] left-[40%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/cloud.svg" alt="Cloud" width={24} height={24} />
      </div>

      {/* 7. Database (Bottom Left) */}
      <div className="node-in node-float node-delay-7 absolute bottom-[20%] left-[18%] flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/database.svg" alt="Database" width={24} height={24} />
      </div>

      {/* 8. Google drive (Left) */}
      <div className="node-in node-float node-delay-8 absolute top-[40%] left-[10%] flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-transform hover:scale-110">
        <Image src="/google-drive.svg" alt="Database" width={24} height={24} />
      </div>
    </div>
  );
}
