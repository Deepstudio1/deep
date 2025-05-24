import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between px-8 py-6 border-b border-neutral-800 shadow-md backdrop-blur-lg bg-black/80">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Deep Studios</h1>
        <Button className="bg-white text-black hover:bg-neutral-200 rounded-xl px-6 py-2 shadow-sm">
          Launch App
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative text-center px-6 py-40 bg-cover bg-center" style={{ backgroundImage: "url('/hero-modern.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-sky-400 to-white bg-clip-text text-transparent"
          >
            Erschaffe KI-generierte Bilder in Sekunden
          </motion.h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Deep Studios verwandelt deine Texteingabe in eindrucksvolle visuelle Kunstwerke.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-xl w-full mx-auto shadow-2xl border border-white/20">
            <Input
              placeholder="z. B. eine surreale Landschaft bei Sonnenuntergang"
              className="mb-4 px-4 py-3 text-black bg-white rounded-xl placeholder:text-neutral-500"
            />
            <Button className="w-full py-3 text-lg bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 rounded-xl">
              Generieren (Demo)
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-950 py-28 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Was macht uns besonders?</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Deep Studios kombiniert modernste KI mit einem stilvollen Interface für grenzenlose Kreativität.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Intuitives Interface",
              description: "Ein modernes, klares Design macht die Bedienung kinderleicht.",
              image: "/feature-interface.jpg"
            },
            {
              title: "Realistische Ergebnisse",
              description: "Unsere KI erzeugt fotorealistische oder künstlerische Bilder auf höchstem Niveau.",
              image: "/feature-quality.jpg"
            },
            {
              title: "Sofortige Vorschau",
              description: "Erhalte eine Bildvorschau sofort nach deiner Eingabe (Demo-Modus).",
              image: "/feature-preview.jpg"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="overflow-hidden rounded-3xl shadow-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-28 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-indigo-600 to-sky-400 p-12 rounded-3xl shadow-lg text-black"
        >
          <h3 className="text-4xl font-bold mb-4">Bereit, deine Kreativität zu entfesseln?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Erstelle einzigartige Bilder mithilfe modernster künstlicher Intelligenz – einfach, schnell und kostenlos.
          </p>
          <button
  onClick={() => window.location.href = 'https://www.youtube.com/watch?v=zMprELBTrcg'}
  className="bg-white text-black hover:bg-neutral-200 rounded-xl px-6 py-2 shadow-sm"
>
  Demo ansehen
</button>

        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-neutral-800 text-neutral-500 text-center text-sm py-10 px-4">
        © 2025 Deep Studios. Entwickelt mit Leidenschaft und KI.
      </footer>
    </main>
  );
}

