import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Flame, ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-liquid.jpg";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "lqkm.p — Liquidy 10ml za 30 zł" },
      { name: "description", content: "Premium liquidy 10ml w cenie 30 zł. Zamów przez Instagram @lqkm.p — DM i odbierasz." },
      { property: "og:title", content: "lqkm.p — Liquidy 10ml za 30 zł" },
      { property: "og:description", content: "Premium liquidy 10ml w cenie 30 zł. Zamów przez Instagram @lqkm.p" },
    ],
  }),
  component: Index,
});

const IG_URL = "https://www.instagram.com/lqkm.p/";

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3 text-xl font-bold">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-md border border-blood/50 bg-white shadow-blood">
            <img src={logoImg} alt="lqkm.p logo" className="h-full w-full object-cover" />
          </span>
          <span className="font-grunge text-2xl tracking-wider">lqkm.p</span>
        </a>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-blood hover:bg-blood/10"
        >
          <Instagram className="h-4 w-4" />
          @lqkm.p
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 pt-6 md:grid-cols-2 md:gap-6 md:pt-10">
        <div className="order-2 md:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blood/40 bg-blood/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blood">
            <Flame className="h-3.5 w-3.5" />
            świeża dostawa
          </div>
          <h1 className="font-grunge text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
            <span className="block">Premium</span>
            <span className="block text-blood animate-flicker">liquidy</span>
            <span className="block">10ml.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Smaki które dowożą. Bez gadania, bez kombinowania. Pisz na DM i odbierasz.
          </p>

          <div className="mt-8 flex items-end gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">cena</div>
              <div className="font-grunge text-7xl leading-none text-white">
                30<span className="text-blood">zł</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">za butelkę 10ml</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-blood px-7 py-4 font-bold uppercase tracking-wider text-white shadow-blood transition hover:scale-[1.02] hover:bg-blood/90"
            >
              <Instagram className="h-5 w-5" />
              Zamów na DM
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#info"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-7 py-4 font-bold uppercase tracking-wider transition hover:border-blood"
            >
              Info
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-blood/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-blood">
              <img
                src={heroImg}
                alt="Liquid 10ml lqkm.p — premium e-liquid"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 rotate-[-4deg] bg-blood px-3 py-1 font-grunge text-lg uppercase tracking-wider text-white shadow-blood">
                10ml · 30zł
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section id="info" className="relative z-10 border-y border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/5 sm:grid-cols-3">
          {[
            { k: "10 ml", v: "Pojemność" },
            { k: "30 zł", v: "Stała cena" },
            { k: "DM", v: "Tylko Instagram" },
          ].map((it) => (
            <div key={it.k} className="bg-background px-6 py-8 text-center">
              <div className="font-grunge text-5xl text-blood">{it.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{it.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-grunge text-5xl md:text-6xl">
          Jak <span className="text-blood">zamówić</span>?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Pisz na DM", d: "Wpadaj na @lqkm.p i daj znać co bierzesz." },
            { n: "02", t: "Ustalamy", d: "Smak, ilość i sposób odbioru — szybko." },
            { n: "03", t: "Odbierasz", d: "Płacisz 30 zł za 10ml i lecisz." },
          ].map((s) => (
            <div key={s.n} className="group relative overflow-hidden rounded-xl border border-white/10 bg-card p-6 transition hover:border-blood">
              <div className="font-grunge text-7xl text-white/10 transition group-hover:text-blood/40">{s.n}</div>
              <div className="mt-2 font-grunge text-2xl uppercase tracking-wider">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-blood/40 bg-gradient-to-br from-blood/30 via-background to-background p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blood/40 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-grunge text-5xl leading-none md:text-7xl">
                Lecimy z <span className="text-blood">DM</span>?
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Cały kontakt i zamówienia tylko przez Instagram. Wpadaj.
              </p>
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blood px-8 py-4 font-bold uppercase tracking-widest text-white shadow-blood transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              @lqkm.p
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} lqkm.p · 18+
      </footer>
    </main>
  );
}
