import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Database,
  FileText,
  HardDrive,
  HelpCircle,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  MoreHorizontal,
  Network,
  Search,
  Settings,
  Sparkles,
  Upload,
  Users,
  Zap,
} from "lucide-react";

const primaryNav = [
  { label: "Overview", icon: LayoutDashboard, active: true },
];

const knowledgeNav = [
  { label: "Data Sources", icon: Database },
  { label: "Documents", icon: FileText },
  { label: "Chunks", icon: Network },
  { label: "Embeddings", icon: Sparkles },
  { label: "Vector Indexes", icon: HardDrive },
];

const assistantNav = [
  { label: "Assistants", icon: Bot },
  { label: "Conversations", icon: MessageSquare },
  { label: "Prompt Library", icon: Code2 },
];

const analyticsNav = [
  { label: "Usage & Analytics", icon: BarChart3 },
  { label: "Feedback", icon: CheckCircle2 },
  { label: "Reports", icon: FileText },
];

const settingsNav = [
  { label: "Integrations", icon: Zap },
  { label: "Users & Teams", icon: Users },
  { label: "API Keys", icon: LockKeyhole },
  { label: "Billing & Plans", icon: CreditCard },
  { label: "Settings", icon: Settings },
];

const statCards = [
  { label: "Documents", value: "24,532", change: "+12.5% vs last 7 days", icon: FileText, tone: "purple" },
  { label: "Chunks", value: "3.2M", change: "+8.3% vs last 7 days", icon: Network, tone: "blue" },
  { label: "Embeddings", value: "3.2M", change: "+8.3% vs last 7 days", icon: Sparkles, tone: "green" },
  { label: "Queries", value: "128,842", change: "+18.7% vs last 7 days", icon: Search, tone: "amber" },
  { label: "Active Assistants", value: "18", change: "+5 vs last 7 days", icon: Bot, tone: "violet" },
];

const assistants = [
  { name: "HR Helper", detail: "Answers HR policy-related questions", status: "Active", queries: "24,532", accuracy: "98.3%", updated: "2h ago" },
  { name: "IT Support Bot", detail: "Helps with IT-related issues", status: "Active", queries: "18,323", accuracy: "97.1%", updated: "8h ago" },
  { name: "Sales Assistant", detail: "Product & sales information", status: "Active", queries: "14,873", accuracy: "95.4%", updated: "14h ago" },
  { name: "Compliance Q&A", detail: "Compliance & legal queries", status: "Draft", queries: "2,894", accuracy: "-", updated: "2d ago" },
];

const activities = [
  { label: "Document uploaded", detail: "Employee_Handbook.pdf", time: "2m ago", icon: Upload, tone: "orange" },
  { label: "Assistant HR Helper published", detail: "Production", time: "5m ago", icon: Bot, tone: "purple" },
  { label: "Data source synced", detail: "Confluence", time: "11m ago", icon: CheckCircle2, tone: "green" },
  { label: "New API key generated", detail: "Backend", time: "1h ago", icon: LockKeyhole, tone: "blue" },
  { label: "Chunking completed", detail: "Quarterly_Report_Q2.pdf", time: "2h ago", icon: FileText, tone: "violet" },
];

const quickActions = [
  { label: "Upload Documents", icon: Upload },
  { label: "Create Assistant", icon: Bot },
  { label: "Add Data Source", icon: Database },
  { label: "View Analytics", icon: BarChart3 },
  { label: "API Documentation", icon: Code2 },
  { label: "Manage Users", icon: Users },
];

const topSources = [
  { label: "Product Docs", value: "32.5%", color: "bg-primary" },
  { label: "HR Policies", value: "24.8%", color: "bg-blue-500" },
  { label: "Technical Guides", value: "18.7%", color: "bg-teal-500" },
  { label: "Process Manuals", value: "11.4%", color: "bg-amber-400" },
  { label: "Other Sources", value: "12.6%", color: "bg-slate-300" },
];

const storageItems = [
  { label: "Documents", value: "450 GB", color: "bg-primary" },
  { label: "Embeddings", value: "320 GB", color: "bg-blue-500" },
  { label: "Chunks & Indexes", value: "180 GB", color: "bg-teal-500" },
  { label: "Other Data", value: "60 GB", color: "bg-amber-400" },
];

const systemItems = ["Ingestion Pipeline", "API Services", "Vector Database", "Embedding Service"];

function NavGroup({ title, items }: { title: string; items: { label: string; icon: typeof LayoutDashboard; active?: boolean }[] }) {
  return (
    <div className="space-y-1.5">
      <p className="px-3 text-[10px] font-bold uppercase tracking-wide text-text-lighter">{title}</p>
      {items.map(({ label, icon: Icon, active }) => (
        <Link
          key={label}
          href="#"
          className={`flex min-h-9 items-center gap-3 rounded-lg px-3 text-xs font-semibold ${
            active ? "bg-primary-lighter text-primary" : "text-text-light hover:bg-section-bg hover:text-text-dark"
          }`}
        >
          <Icon size={15} />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

function MetricCard({ card }: { card: (typeof statCards)[number] }) {
  const toneMap = {
    purple: "bg-primary-lighter text-primary",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    violet: "bg-violet-50 text-violet-600",
  } as const;
  const Icon = card.icon;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-[0_1px_3px_rgba(17,24,39,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-text-medium">{card.label}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-text-dark">{card.value}</p>
          <p className="mt-2 text-[11px] font-semibold text-emerald-600">{card.change}</p>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${toneMap[card.tone as keyof typeof toneMap]}`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

function Panel({ title, action, children, className = "" }: { title: string; action?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-lg border border-border bg-white p-5 shadow-[0_1px_3px_rgba(17,24,39,0.04)] ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-bold text-text-dark">{title}</h2>
        {action && <Link href="#" className="text-xs font-bold text-primary hover:text-primary-dark">{action}</Link>}
      </div>
      {children}
    </section>
  );
}

function QueryChart() {
  const points = "0,104 64,66 128,90 192,96 256,78 320,48 384,102";
  return (
    <div className="h-60">
      <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-text-light">
        <span>Query Overview</span>
        <button className="rounded-md border border-border px-2.5 py-1 text-text-medium">Past 7 days</button>
      </div>
      <svg viewBox="0 0 420 150" className="h-36 w-full overflow-visible" aria-hidden="true">
        {[20, 50, 80, 110].map((y) => (
          <line key={y} x1="0" x2="410" y1={y} y2={y} stroke="#EEF0F5" strokeWidth="1" />
        ))}
        <polyline points={points} fill="none" stroke="#6C3FEE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.split(" ").map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r="3" fill="#fff" stroke="#6C3FEE" strokeWidth="2" />;
        })}
      </svg>
      <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-text-lighter">
        {['May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18'].map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3 border-t border-border-light pt-4">
        {[
          ['Total Queries', '128,842', '+18.7%'],
          ['Successful Responses', '126,978', '98.6%'],
          ['Avg. Response Time', '1.4s', '-0.4s'],
          ['User Satisfaction', '4.6/5', '+7.2%'],
        ].map(([label, value, change]) => (
          <div key={label}>
            <p className="text-[10px] font-semibold text-text-lighter">{label}</p>
            <p className="mt-1 text-sm font-bold text-text-dark">{value}</p>
            <p className="text-[10px] font-bold text-emerald-600">{change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Donut({ center, caption, size = "h-32 w-32" }: { center: string; caption: string; size?: string }) {
  return (
    <div className={`relative grid shrink-0 place-items-center rounded-full ${size} bg-[conic-gradient(#6C3FEE_0_36%,#3B82F6_36%_62%,#14B8A6_62%_80%,#F59E0B_80%_91%,#CBD5E1_91%_100%)]`}>
      <div className="grid h-[68%] w-[68%] place-items-center rounded-full bg-white text-center shadow-inner">
        <div>
          <p className="text-base font-bold text-text-dark">{center}</p>
          <p className="text-[9px] font-semibold text-text-lighter">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] text-text-dark">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-white lg:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-5">
          <Image src="/logo-mark.png" alt="" width={38} height={38} className="h-9 w-9 object-contain" />
          <span className="text-sm font-bold text-text-dark">KnowMatrix</span>
        </div>

        <div className="border-b border-border p-4">
          <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-white p-3 text-left hover:bg-section-bg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-lighter text-primary">
              <Building2 size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-text-dark">Acme Corporation</p>
              <p className="text-[10px] font-semibold text-text-lighter">Enterprise Plan</p>
            </div>
            <ChevronDown size={14} className="text-text-lighter" />
          </button>
        </div>

        <nav className="flex-1 space-y-5 overflow-y-auto px-4 py-5">
          <NavGroup title="" items={primaryNav} />
          <NavGroup title="Knowledge" items={knowledgeNav} />
          <NavGroup title="AI Assistants" items={assistantNav} />
          <NavGroup title="Analytics" items={analyticsNav} />
          <NavGroup title="Settings" items={settingsNav} />
        </nav>

        <div className="border-t border-border p-4">
          <div className="rounded-lg border border-border bg-primary-lighter/45 p-4">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary">
              <HelpCircle size={16} />
            </div>
            <p className="text-xs font-bold text-text-dark">Need Help?</p>
            <p className="mt-1 text-[11px] leading-5 text-text-light">Explore docs or contact support.</p>
            <button className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-xs font-bold text-primary shadow-sm">Visit Help Center</button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-border bg-white/90 backdrop-blur-xl">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-xl font-bold text-text-dark">Overview</h1>
              <p className="mt-1 hidden text-xs font-medium text-text-light sm:block">Welcome back, Sarah. Here is what is happening with your knowledge platform.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden h-10 w-72 items-center gap-2 rounded-lg border border-border bg-white px-3 md:flex">
                <Search size={15} className="text-text-lighter" />
                <input aria-label="Search" placeholder="Search anything..." className="w-full bg-transparent text-xs font-medium outline-none placeholder:text-text-lighter" />
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-bold text-text-lighter">Ctrl K</span>
              </div>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-text-medium hover:text-primary">
                <Bell size={17} />
                <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="hidden items-center gap-3 sm:flex">
                <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#111827,#6C3FEE)]" />
                <div>
                  <p className="text-xs font-bold text-text-dark">Sarah Johnson</p>
                  <p className="text-[10px] font-semibold text-text-lighter">Admin</p>
                </div>
                <ChevronDown size={14} className="text-text-lighter" />
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-white px-3 text-xs font-bold text-text-medium">
              <CalendarDays size={14} />
              May 12 - May 18, 2024
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {statCards.map((card) => <MetricCard key={card.label} card={card} />)}
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.95fr_0.8fr]">
            <Panel title="Query Overview" className="xl:col-span-1">
              <QueryChart />
            </Panel>

            <Panel title="Top Sources by Queries" action="View All Sources">
              <div className="flex items-center gap-5">
                <Donut center="128,842" caption="Total" />
                <div className="flex-1 space-y-3">
                  {topSources.map((source) => (
                    <div key={source.label} className="flex items-center justify-between gap-3 text-[11px] font-semibold">
                      <span className="flex items-center gap-2 text-text-medium"><span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />{source.label}</span>
                      <span className="text-text-light">{source.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Recent Activity" action="View All">
              <div className="space-y-4">
                {activities.map(({ label, detail, time, icon: Icon }) => (
                  <div key={`${label}-${detail}`} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-primary">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-text-dark">{label}</p>
                      <p className="truncate text-[11px] font-medium text-text-light">{detail}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-text-lighter">{time}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.8fr_0.85fr]">
            <Panel title="Your Assistants" action="View All" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left">
                  <thead>
                    <tr className="border-b border-border-light text-[10px] font-bold uppercase text-text-lighter">
                      <th className="py-3">Name</th>
                      <th>Status</th>
                      <th>Queries</th>
                      <th>Accuracy</th>
                      <th>Updated</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light">
                    {assistants.map((assistant) => (
                      <tr key={assistant.name}>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-lighter text-primary"><Bot size={16} /></div>
                            <div>
                              <p className="text-xs font-bold text-text-dark">{assistant.name}</p>
                              <p className="text-[11px] text-text-light">{assistant.detail}</p>
                            </div>
                          </div>
                        </td>
                        <td><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${assistant.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}>{assistant.status}</span></td>
                        <td className="text-xs font-semibold text-text-medium">{assistant.queries}</td>
                        <td className="text-xs font-semibold text-text-medium">{assistant.accuracy}</td>
                        <td className="text-xs font-semibold text-text-light">{assistant.updated}</td>
                        <td><button className="text-text-lighter hover:text-primary"><MoreHorizontal size={16} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            <div className="space-y-5">
              <Panel title="Storage Overview" action="View All">
                <div className="flex items-center gap-5">
                  <Donut center="1.2 TB" caption="of 5TB Used" size="h-28 w-28" />
                  <div className="flex-1 space-y-3">
                    {storageItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-3 text-[11px] font-semibold">
                        <span className="flex items-center gap-2 text-text-medium"><span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />{item.label}</span>
                        <span className="text-text-light">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>

              <Panel title="System Status">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                  <CheckCircle2 size={12} />
                  All Systems Operational
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {systemItems.map((item) => (
                    <div key={item} className="rounded-lg border border-border-light p-3">
                      <div className="mb-2 flex items-center justify-between"><span className="h-2 w-2 rounded-full bg-emerald-500" /><CheckCircle2 size={13} className="text-emerald-500" /></div>
                      <p className="text-[11px] font-bold text-text-dark">{item}</p>
                      <p className="text-[10px] font-semibold text-emerald-600">Operational</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="space-y-5">
              <Panel title="Quick Actions">
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map(({ label, icon: Icon }) => (
                    <button key={label} className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-border-light bg-white p-3 text-center text-[11px] font-bold text-text-medium hover:border-primary/30 hover:bg-primary-lighter hover:text-primary">
                      <Icon size={18} />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </Panel>

              <Panel title="Current Plan">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-text-dark">Enterprise</p>
                    <p className="text-[11px] font-semibold text-text-light">Advanced security and scale</p>
                  </div>
                  <button className="rounded-lg border border-border px-3 py-2 text-xs font-bold text-primary">Manage Plan</button>
                </div>
                <div className="space-y-4">
                  {[
                    ["Storage Used", "1.2 TB / 5 TB", "24%"],
                    ["Queries This Month", "128.8K / 500K", "26%"],
                    ["Active Assistants", "18 / 50", "36%"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-[11px] font-bold text-text-medium"><span>{label}</span><span>{value}</span></div>
                      <div className="h-2 rounded-full bg-section-bg"><div className="h-full rounded-full bg-primary" style={{ width }} /></div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>

          <footer className="mt-8 flex flex-col gap-3 border-t border-border py-5 text-[11px] font-semibold text-text-lighter sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2024 KnowMatrix. All rights reserved.</p>
            <div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Status</Link></div>
          </footer>
        </main>
      </div>
    </div>
  );
}