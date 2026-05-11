import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Sparkles, Zap, Droplet, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "lqkm.p — Liquidy 10ml za 30 zł" },
      { name: "description", content: "Premium liquidy 10ml w cenie 30 zł. Zamów przez Instagram @lqkm.p — szybko, prosto, vibe." },
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
      {/* Animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="animate-blob absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl" style={{ animationDelay: "-6s" }} />
        <div className="animate-blob absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-neon-3/30 blur-3xl" style={{ animationDelay: "-12s" }} />
      </div>

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-vibe shadow-glow">
            <Droplet className="h-5 w-5 text-background" />
          </span>
          <span className="text-gradient">lqkm.p</span>
        </a>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:scale-105"
        >
          <Instagram className="h-4 w-4" />
          @lqkm.p
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-24 text-center md:pt-20">
        <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-neon" />
          świeża dostawa · vibe only
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Liquidy <span className="text-gradient">10ml</span><br />
          za <span className="text-gradient">30 zł</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Smaki które uderzają. Bez lania wody, bez gadania. Pisz na DM i odbierasz vibe.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-vibe px-7 py-3.5 font-semibold text-background shadow-glow transition hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            Zamów na Instagramie
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#produkt" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:scale-105">
            Zobacz ofertę
          </a>
        </div>

        {/* Floating bottle */}
        <div id="produkt" className="relative mx-auto mt-20 w-full max-w-md">
          <div className="animate-pulse-glow absolute inset-0 rounded-[2.5rem] bg-gradient-vibe opacity-30 blur-2xl" />
          <div className="glass animate-float relative rounded-[2.5rem] p-10">
            <div className="mx-auto flex h-56 w-32 flex-col items-center">
              <div className="h-6 w-10 rounded-t-md bg-foreground/80" />
              <div className="h-3 w-16 rounded-sm bg-foreground/60" />
              <div className="relative mt-1 h-44 w-28 overflow-hidden rounded-2xl bg-gradient-vibe shadow-glow">
                <div className="absolute inset-x-3 top-6 rounded-md bg-background/80 p-2 text-center">
                  <div className="text-[10px] font-bold tracking-widest text-foreground">LQKM.P</div>
                  <div className="text-[9px] text-muted-foreground">10ml · 20mg</div>
                </div>
                <div className="absolute -right-6 top-1/3 h-20 w-20 rounded-full bg-white/30 blur-2xl" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="text-sm uppercase tracking-widest text-muted-foreground">cena za sztukę</div>
              <div className="mt-1 text-6xl font-extrabold text-gradient">30 zł</div>
              <div className="mt-1 text-sm text-muted-foreground">10ml · różne smaki</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-4 px-6 pb-24 sm:grid-cols-3">
        {[
          { icon: Zap, title: "Szybko", desc: "DM → ustalamy → odbierasz. Bez kombinowania." },
          { icon: ShieldCheck, title: "Sprawdzone", desc: "Tylko smaki które naprawdę dowożą." },
          { icon: Droplet, title: "10ml za 30 zł", desc: "Stała cena. Bez ukrytych kosztów." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-vibe">
              <Icon className="h-5 w-5 text-background" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
        <div className="glass relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-vibe opacity-20" />
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Gotowy na <span className="text-gradient">vibe</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Cały kontakt i zamówienia przez Instagram. Wpadaj na DM.
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-vibe px-8 py-4 font-semibold text-background shadow-glow transition hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            @lqkm.p
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} lqkm.p · produkt dla osób pełnoletnich (18+)
      </footer>
    </main>
  );
}
