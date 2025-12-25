"use client"
import React from 'react'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message received. Our team will reach out shortly.");
    }

    return (
        <main className="bg-[#1a1a1b] min-h-screen text-white pt-24 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-[#adb5bd] text-xs font-black uppercase tracking-[0.4em] opacity-60">
                        Get in Touch
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
                        Let's talk <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ffffff] via-[#c0c0c0] to-[#808080]">
                            about your links.
                        </span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Contact Info */}
                    <div className="space-y-10 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                        <div>
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-50">Support</h3>
                            <p className="text-xl font-medium">support@minilinks.com</p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-50">Business</h3>
                            <p className="text-xl font-medium">partners@minilinks.com</p>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <p className="text-white/40 text-sm leading-relaxed italic">
                                "Our average response time is under 12 hours. We take link management seriously."
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-4">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-white/40 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-4">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-white/40 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-4">Message</label>
                            <textarea
                                rows="4"
                                required
                                className="w-full px-6 py-4 rounded-3xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-white/40 transition-all resize-none"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-white text-black py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-[#efefef] transition-all active:scale-[0.98] shadow-2xl"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contact