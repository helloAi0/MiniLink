import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#E5E4E2] min-h-[90vh] flex items-center justify-center">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-12 gap-12">

        {/* Left Side: Content */}
        <div className="flex flex-col gap-6 items-start justify-center text-left">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-[#1A1A1B]">
            The best URL shortener <br />
            <span className="text-[#36454F]/70">in the Market.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#36454F] max-w-md font-medium leading-relaxed opacity-80">
            We are the most straightforward URL shortener in the world.
            Clean links. Powerful analytics. No clutter.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href ="/shorten"> <button className="bg-[#1A1A1B] text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform active:scale-95">
              Get Started
            </button></Link>
            <button className="border-2 border-[#1A1A1B] text-[#1A1A1B] px-8 py-4 rounded-full font-bold hover:bg-[#1A1A1B] hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative h-[400px] md:h-[550px] w-full flex items-center justify-center">
      
          <div className="absolute inset-0 bg-gradient-to-tr from-[#36454F]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20">
            <Image
              className="object-cover transition-scale duration-700 hover:scale-110"
              alt="Modern office vector"
              src="/office.gif"
              fill
              priority
            />
          </div>
        </div>

      </section>
    </main>
  );
}
