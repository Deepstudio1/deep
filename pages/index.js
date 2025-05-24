import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
        <h1 className="text-3xl font-bold tracking-tight">Deep Studios</h1>
        <button className="bg-white text-black hover:bg-neutral-200 rounded-xl px-6 py-2">
          Launch App
        </button>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Erschaffe brillante KI-Bilder mit einem Klick
        </motion.h2>
        <p className="text-lg text-neutral-400 mb-10">
          Deep Studios ist dein Einstieg in die Zukunft der visuellen Kreativität. Unsere KI-Technologie verwandelt Worte in atemberaubende Kunstwerke – einfach, schnell, revolutionär.
        </p>
        <button className="bg-white text-black text-lg px-8 py-4 rounded-2xl hover:bg-neutral-200">
          Demo ansehen
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-24 max-w-6xl mx-auto">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-6">
            <Sparkles className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
            <p className="text-neutral-400 text-sm">
              Eine kurze Beschreibung eines innovativen Features, das deine Kreativität entfesselt.
            </p>
          </div>
        ))}
      </section>

      <footer className="border-t border-neutral-800 text-neutral-500 text-center text-sm py-6 px-4">
        © 2025 Deep Studios. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}