
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Connect with KINGFOUNDER and begin your leadership journey.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* Hero */}
        <section className="px-6 pb-20 pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full border border-yellow-400/30 bg-slate-900/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-yellow-300">
              CONTACT KINGFOUNDER
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Let's Build The Next
              <br />
              <span className="text-yellow-400">Generation Of Leaders.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Whether you want to join a program, invite KINGFOUNDER to speak,
              start a mentorship journey, or collaborate with us, we would love
              to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur">
              <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

              <p className="mt-4 leading-7 text-slate-300">
                We believe every conversation has the potential to change a
                life. Reach out to us through any of the channels below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Mail className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-slate-300">kingfounder1@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-slate-300">+234 912 659 0125</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-slate-300">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349126590125"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur">
              <h2 className="text-3xl font-bold text-white">Send A Message</h2>

              <form
                action="mailto:kingfounder1@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-800 bg-[#020B1D] px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-800 bg-[#020B1D] px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-2xl border border-slate-800 bg-[#020B1D] px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-2xl border border-slate-800 bg-[#020B1D] px-4 py-3 text-white outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
