"use client";

import Navbar from "@/app/components/landing/Navbar";
import Footer from "@/app/components/landing/Footer";
import { useState } from "react";
import {
  Activity,
  Book,
  Building,
  ChevronDown,
  Mail,
  MessageCircle,
  Send,
  User,
  Briefcase,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "How quickly will I get a response?",
    answer:
      "We aim to respond to all inquiries within 24 hours on business days. For urgent matters, please use our live chat available within the app.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all users, and priority live chat support for our enterprise customers. Our comprehensive documentation is also available 24/7.",
  },
  {
    question: "Do you offer customized enterprise solutions?",
    answer:
      "Yes, we offer tailored solutions including dedicated instances, custom integrations, and SLA guarantees for our enterprise clients. Contact our sales team to learn more.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 pb-16 text-center">
          {/* Subtle dotted background pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="container-main relative z-10 flex flex-col items-center">
            <span className="mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Contact Us
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
              We&apos;d <span className="text-primary">love</span> to hear from
              you
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-medium">
              Have questions, feedback, or need support? Our team is here to
              help. <br className="hidden sm:block" />
              Reach out to us anytime.
            </p>
          </div>
        </section>

        {/* Contact Split Layout */}
        {/* <section className="container-main pb-24"> */}
        <section className="pb-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_400px]">
            {/* Form Card */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-text-dark">
                  Send us a message
                </h2>
                <p className="text-sm text-text-light mt-2">
                  Fill out the form and we&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter"
                      />
                      <input
                        type="text"
                        placeholder="Your name"
                        className="h-12 w-full rounded-lg border border-border bg-white pl-11 pr-4 text-sm outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter"
                      />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-lg border border-border bg-white pl-11 pr-4 text-sm outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-text-dark">
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <Building
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter"
                    />
                    <input
                      type="text"
                      placeholder="Your company name"
                      className="h-12 w-full rounded-lg border border-border bg-white pl-11 pr-4 text-sm outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-text-dark">
                    Subject
                  </label>
                  <div className="relative">
                    <HelpCircle
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter"
                    />
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="h-12 w-full rounded-lg border border-border bg-white pl-11 pr-4 text-sm outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-text-dark">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your question or message..."
                    className="w-full resize-y rounded-lg border border-border bg-white p-4 text-sm outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    className="btn btn-primary w-full h-12 flex justify-center text-base"
                  >
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                  <p className="mt-4 text-xs text-text-light">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </form>
            </div>

            {/* Info Card */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 h-fit">
              <h2 className="mb-8 text-xl font-bold text-text-dark">
                Other ways to reach us
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-text-dark">Email Us</h3>
                    <p className="text-sm font-medium text-text-medium">
                      hello@knowmatrix.ai
                    </p>
                    <p className="text-sm text-text-light">
                      We&apos;ll reply as soon as possible
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-text-dark">Live Chat</h3>
                    <p className="text-sm font-medium text-text-medium">
                      Available in the app
                    </p>
                    <p className="text-sm text-text-light">
                      Chat with our support team
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Book size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-text-dark">
                      Documentation
                    </h3>
                    <p className="text-sm font-medium text-text-medium">
                      docs.knowmatrix.ai
                    </p>
                    <p className="text-sm text-text-light">
                      Find answers to common questions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-text-dark">
                      Status Page
                    </h3>
                    <p className="text-sm font-medium text-text-medium">
                      status.knowmatrix.ai
                    </p>
                    <p className="text-sm text-text-light">
                      Check system status and updates
                    </p>
                  </div>
                </div>

                {/* Sales Box */}
                <div className="mt-8 rounded-xl bg-primary/5 p-6 border border-primary/10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="font-bold text-text-dark text-lg">
                      For Sales Inquiries
                    </h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-text-medium">
                    Looking for an enterprise solution? Contact our sales team
                    for a personalized demo.
                  </p>
                  <button className="btn bg-white border border-border text-text-dark hover:bg-section-bg w-full justify-center">
                    Contact Sales <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="bg-section-bg py-24">
          <div className="container-main max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-lg text-text-medium">
                Quick answers to common questions.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-border bg-white shadow-sm transition-all overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-text-dark">{faq.question}</span>
                    <ChevronDown size={20} className={`text-text-lighter transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-[200px]" : "max-h-0"}`}>
                    <div className="px-6 pb-6 text-text-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-text-medium">
              Still have questions? Check out our <a href="/docs" className="font-bold text-primary hover:underline">documentation</a> or start a <a href="#" className="font-bold text-primary hover:underline">live chat</a>.
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
