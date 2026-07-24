import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Code2, MessageCircle, Play } from "lucide-react";

const footerLinks = {
  Product: ["Features", "How It Works", "Security", "Integrations", "Pricing"],
  Solutions: ["Customer Support", "Knowledge Management", "Internal Tools", "Compliance", "AI Agents"],
  Resources: ["Docs", "Blog", "Case Studies", "Webinars", "Help Center"],
  Developers: ["API Reference", "SDKs", "Changelog", "Status", "Community"],
  Company: ["About Us", "Careers", "Contact Us", "Partners", "Privacy Policy"],
};

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
  { label: "Twitter", href: "#", icon: MessageCircle },
  { label: "GitHub", href: "#", icon: Code2 },
  { label: "YouTube", href: "#", icon: Play },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-main pb-10 pt-14 sm:pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-6">
            <Link href="/" className="group mb-4 inline-flex items-center gap-2.5">
              <Image src="/logo.svg" alt="" width={48} height={48} className="h-11 w-11 object-contain" />
              <span className="text-xl font-bold text-text-dark">KnowMatrix</span>
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-7 text-text-light">Enterprise AI Knowledge Platform to build, manage and deploy intelligent assistants over your private data.</p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link key={label} href={href} className="flex h-8 w-8 items-center justify-center rounded-lg bg-section-bg text-text-light hover:bg-primary hover:text-white" aria-label={label}>
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-bold text-text-dark">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((label) => (
                  <li key={label}>
                    <Link href={label === "Pricing" ? "/pricing" : label === "Blog" ? "/blog" : label === "Docs" ? "/docs" : label === "Privacy Policy" ? "/terms" : "#"} className="text-sm text-text-light hover:text-primary">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-lighter">(c) 2024 KnowMatrix.AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-text-lighter hover:text-primary">Terms of Service</Link>
            <Link href="/terms" className="text-xs text-text-lighter hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}






