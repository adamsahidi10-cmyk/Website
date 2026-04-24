import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Users, Rocket } from "lucide-react";
import { useState } from "react";

/**
 * Modern Minimalist SaaS Marketing Website
 * Design: Clean layouts, bold typography, gradient accents, smooth animations
 * Color Scheme: Indigo (#4F46E5) to Teal (#14B8A6) gradients
 * Typography: Poppins (headings) + Inter (body)
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl text-slate-900">Nexora</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition">Benefits</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
            <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                  ✨ Introducing Nexora Pro
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Empower Your Team to <span className="gradient-text">Build Faster</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Connect your entire workflow in one powerful platform. Collaborate seamlessly, automate repetitive tasks, and ship products with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <form onSubmit={handleSubmit} className="flex-1">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </div>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  ✓ Thanks! Check your email for early access.
                </div>
              )}

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-900">2,500+</span> teams already using Nexora
                </p>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663593227513/n5tSTJMF8P5rvJccgLyjdV/dashboard-mockup-Bw8YoHq3Rvk34DhhBJYriD.webp"
                  alt="Dashboard Preview"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">10x Faster</p>
                    <p className="text-sm text-slate-600">Boost productivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500"></div>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Powerful Features Built for Teams
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to collaborate, create, and ship amazing products faster than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Real-time Collaboration",
                description: "Work together seamlessly with live editing, comments, and version control built in.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance ensures your team stays productive without slowdowns.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Get actionable insights with comprehensive dashboards and detailed reports.",
              },
              {
                icon: Rocket,
                title: "Easy Integration",
                description: "Connect with 500+ tools and services your team already uses.",
              },
              {
                icon: CheckCircle2,
                title: "Enterprise Security",
                description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Dedicated support team ready to help you succeed at any time.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600"></div>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663593227513/n5tSTJMF8P5rvJccgLyjdV/team-collaboration-93yrBspHUfEuxSzLGQX4N7.webp"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Benefits List */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Why Teams Choose Nexora
              </h2>

              {[
                {
                  title: "Increased Productivity",
                  description: "Automate workflows and eliminate manual tasks. Save 10+ hours per week per team member.",
                },
                {
                  title: "Better Collaboration",
                  description: "Break down silos with unified communication and shared workspaces for all teams.",
                },
                {
                  title: "Faster Time to Market",
                  description: "Ship features faster with streamlined processes and integrated development tools.",
                },
                {
                  title: "Cost Savings",
                  description: "Reduce tool sprawl and consolidate your tech stack. Save 40% on software costs.",
                },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500"></div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small teams",
                features: ["Up to 5 team members", "Basic analytics", "Email support", "2GB storage"],
              },
              {
                name: "Professional",
                price: "$99",
                description: "For growing teams",
                features: ["Up to 50 team members", "Advanced analytics", "Priority support", "100GB storage", "Custom integrations"],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Unlimited team members", "Custom analytics", "24/7 dedicated support", "Unlimited storage", "SSO & advanced security"],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-indigo-600 to-teal-500 text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 hover:border-indigo-300"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? "text-indigo-100" : "text-slate-600"}>
                  {plan.description}
                </p>
                <div className="my-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className={plan.highlighted ? "text-indigo-100" : "text-slate-600"}>/month</span>}
                </div>
                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-white text-indigo-600 hover:bg-gray-100"
                      : "w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg"
                  }
                >
                  Get Started
                </Button>
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-teal-500 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Nexora to build better products, faster. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg"></div>
                <span className="font-bold text-white">Nexora</span>
              </div>
              <p className="text-sm">Empowering teams to build amazing products.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">&copy; 2026 Nexora. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
