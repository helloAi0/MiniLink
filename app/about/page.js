import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <main className="bg-[#1a1a1b] min-h-screen text-white pt-20 pb-10 px-6">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Section 1: Hero Header */}
                <section className="text-center space-y-6">
                    <h2 className="text-[#adb5bd] text-xs font-black uppercase tracking-[0.4em] opacity-60">
                        Our Mission
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                        The shortest distance <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ffffff] via-[#c0c0c0] to-[#808080]">
                            between two points.
                        </span>
                    </h1>
                    <p className="text-lg text-white/40 max-w-xl mx-auto font-medium leading-relaxed">
                        MiniLinks was built for those who value precision. We transform cluttered, long-form URLs into clean, high-performance assets.
                    </p>
                </section>

                {/* Section 2: Features Grid */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-white/10 transition-all group">
                        <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Every link is encrypted and monitored. We ensure your destination is safe and your data remains private.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-white/10 transition-all group">
                        <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Track your performance with millisecond precision. Know exactly who is clicking and when.
                        </p>
                    </div>
                </section>

                {/* Section 3: The "Mini" Philosophy */}
                <section className="bg-gradient-to-b from-white/5 to-transparent p-12 rounded-[3rem] border border-white/10 text-center space-y-8">
                    <h2 className="text-3xl font-black tracking-tight">Simple. Fast. Elegant.</h2>
                    <p className="text-white/50 max-w-2xl mx-auto italic">
                        "Complexity is the enemy of execution. We stripped away the noise to give you the most efficient URL management tool on the web."
                    </p>
                    <div className="pt-4">
                        <Link href="/shorten">
                            <button className="bg-white text-black px-10 py-4 rounded-full font-black text-xs tracking-widest uppercase hover:invert transition-all active:scale-95">
                                Start Creating
                            </button>
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default About