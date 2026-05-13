import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gift, Sparkles, Star, Truck } from "lucide-react";
import { useState } from "react";

const featuredScents = [
  {
    name: "Midnight Amber",
    notes: "Amber • Vanilla • Cedarwood",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Rose Atelier",
    notes: "Damask Rose • Musk • Bergamot",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Citrus Bloom",
    notes: "Mandarin • Neroli • White Tea",
    price: "$69",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?auto=format&fit=crop&w=1000&q=80",
  },
];

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
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900">Velora Scents</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#collection" className="text-slate-600 hover:text-slate-900 transition">Collection</a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition">Why Us</a>
            <a href="#offers" className="text-slate-600 hover:text-slate-900 transition">Offers</a>
            <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg">Shop Now</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">✨ New Summer Capsule</span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Signature Perfumes for Every <span className="gradient-text">Mood & Moment</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover luxury fragrances crafted by world-class perfumers. From fresh daytime notes to bold evening blends,
              find your unforgettable scent.
            </p>

            <form onSubmit={handleSubmit} className="max-w-xl">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for 10% off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <Button type="submit" className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white hover:shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ You&apos;re in! Your welcome discount is on its way.
              </div>
            )}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615634262417-8dd4b91ee3f0?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury perfume bottles"
                className="w-full h-[560px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs border border-gray-100">
              <p className="font-semibold text-slate-900">4.9/5 average rating</p>
              <p className="text-sm text-slate-600">Trusted by 25,000+ fragrance lovers</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Best-Selling Collection</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Handpicked premium scents designed to leave a lasting impression.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredScents.map((item) => (
              <article key={item.name} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl text-slate-900 font-bold mb-2">{item.name}</h3>
                  <p className="text-slate-600 mb-4">{item.notes}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-lg text-slate-900">{item.price}</p>
                    <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white">Add to Cart</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why shoppers choose Velora</h2>
            {[
              { icon: Truck, title: "Fast Worldwide Delivery", copy: "Reliable shipping with real-time order tracking." },
              { icon: Gift, title: "Luxury Gift Packaging", copy: "Premium gift wrap included on every order." },
              { icon: Star, title: "Authenticity Guaranteed", copy: "100% original perfumes sourced from trusted houses." },
              { icon: CheckCircle2, title: "Easy Returns", copy: "Risk-free 14-day returns for unopened products." },
            ].map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 text-white flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-slate-600">{point.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
              alt="Perfume packaging"
              className="w-full h-[560px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Get 10% Off Your First Order</h2>
          <p className="text-xl text-indigo-100 mb-8">Join our fragrance club for early access to limited drops, exclusive bundles, and scent guides.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">Claim Discount</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold">Explore All Scents</Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 Velora Scents. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">TikTok</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
