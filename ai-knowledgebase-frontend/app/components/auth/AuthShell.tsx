import Image from "next/image";
import Link from "next/link";
import { Check, Database, Eye, LockKeyhole, Mail, UserRound } from "lucide-react";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <main className="min-h-screen w-full bg-white grid lg:grid-cols-2">
      <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#5B3FE6] via-primary to-[#7C5CE6] p-8 sm:p-12 lg:p-16 xl:p-20 text-white">
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <Link href="/" className="inline-flex w-fit items-center gap-2.5 mb-10 sm:mb-14">
              <Image src="/logo.svg" alt="" width={48} height={48} priority className="h-11 w-11 object-contain brightness-0 invert" />
              <span className="text-xl font-bold">KnowMatrix</span>
            </Link>

            <div className="max-w-md">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mb-8 text-base leading-7 text-white/80 sm:text-lg">{subtitle}</p>
              <ul className="space-y-4 text-sm font-medium text-white/90 sm:text-base">
                {["No credit card required", "Setup in less than 2 minutes", "Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 text-white/70 max-w-xs">
            <div className="rounded-xl bg-white/10 p-3.5 backdrop-blur-sm flex items-center justify-center"><Database size={22} /></div>
            <div className="rounded-xl bg-white/10 p-3.5 backdrop-blur-sm flex items-center justify-center"><LockKeyhole size={22} /></div>
            <div className="rounded-xl bg-white/10 p-3.5 backdrop-blur-sm flex items-center justify-center"><Mail size={22} /></div>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-black/10 blur-3xl pointer-events-none" />
      </section>

      <section className="flex min-h-full items-center justify-center px-6 py-12 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}

export function AuthField({ 
  label, 
  type = "text", 
  placeholder, 
  icon,
  name,
  value,
  onChange,
  required
}: { 
  label: string; 
  type?: string; 
  placeholder: string; 
  icon: "user" | "mail" | "lock";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const Icon = icon === "user" ? UserRound : icon === "mail" ? Mail : LockKeyhole;

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-text-medium">{label}</span>
      <span className="flex h-12 items-center gap-3 rounded-lg border border-border bg-white px-4 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
        <Icon size={18} className="text-text-lighter" />
        <input 
          type={type} 
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder} 
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-text-dark outline-none placeholder:text-text-lighter" 
        />
        {type === "password" && <Eye size={18} className="text-text-lighter" />}
      </span>
    </label>
  );
}
