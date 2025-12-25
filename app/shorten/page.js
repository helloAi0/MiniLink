"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generatedLinks, setGeneratedLinks] = useState([])

    const generate = () => {
        // Basic validation: ensure the user didn't just type 'google.com'
        // Next.js redirects need the protocol (https://) to know it's external
        let finalUrl = url;
        if (!url.startsWith('http')) {
            finalUrl = `https://${url}`;
        }

        const raw = JSON.stringify({
            "url": finalUrl, // This now includes the full query string
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const newLink = {
                        original: finalUrl,
                        short: `${window.location.origin}/${shorturl}`,
                        clicks: 0
                    };
                    setGeneratedLinks([newLink, ...generatedLinks]);
                    seturl("");
                    setshorturl("");
                    alert("URL Generated Successfully!");
                } else {
                    alert(result.message);
                }
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="bg-[#1a1a1b] p-20 min-h-screen flex items-center justify-center">

            <div className='mx-auto max-w-lg w-full p-1 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]'>
                <div className='p-10 rounded-[2.8rem] bg-gradient-to-b from-white/10 to-transparent flex flex-col gap-10'>

                    {/* Header: Made text pure white and silver more distinct */}
                    <div className="space-y-2 text-center">
                        <h1 className='font-black text-4xl md:text-5xl tracking-tighter text-white leading-[0.9]'>
                            Generate <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ffffff] via-[#c0c0c0] to-[#808080]">
                                short URLs
                            </span>
                        </h1>
                        <p className="text-[#adb5bd] text-xs font-bold uppercase tracking-[0.3em] opacity-60">
                            Encrypted & Optimized
                        </p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {/* URL Input Group: Darker background for visibility */}
                        <div className="group relative flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70 ml-4">
                                Destination URL
                            </label>
                            <div className="relative">
                                <input
                                    type='text'
                                    value={url}
                                    className='w-full px-7 py-5 rounded-[1.5rem] bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/80 focus:border-white/40 transition-all duration-500 text-sm shadow-inner'
                                    placeholder='https://very-long-link.com'
                                    onChange={e => { seturl(e.target.value) }}
                                />
                            </div>
                        </div>

                        {/* Custom Back-half Group */}
                        <div className="group relative flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70 ml-4">
                                Custom Back-half
                            </label>
                            <div className="flex items-center relative">
                                <span className="absolute left-6 text-white/40 font-bold text-sm">minilinks.com/</span>
                                <input
                                    type='text'
                                    value={shorturl}
                                    className='w-full pl-32 pr-7 py-5 rounded-[1.5rem] bg-black/60 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/80 focus:border-white/40 transition-all duration-500 text-sm shadow-inner'
                                    placeholder='slug'
                                    onChange={e => { setshorturl(e.target.value) }}
                                />
                            </div>
                        </div>


                        <button onClick={generate} className='group relative mt-2 overflow-hidden rounded-[1.5rem] bg-white text-black py-5 font-black text-xs tracking-[0.2em] shadow-2xl hover:bg-[#efefef] transition-all duration-500 active:scale-[0.97]'>
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                GENERATE LINK
                                <div className="h-[2px] w-6 bg-black group-hover:w-10 transition-all duration-500" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Generated Links Table/List */}
            {generatedLinks.length > 0 && (
                <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h2 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-6 ml-4 opacity-50">Your Recent Links</h2>
                    <div className="flex flex-col gap-4">
                        {generatedLinks.map((item, index) => (

                            <div key={index} className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-all">

                                <div className="flex flex-col gap-1 overflow-hidden mr-4">
                                    <span className="text-[10px] font-bold text-[#adb5bd] uppercase tracking-wider opacity-60">Original</span>
                                    <p className="text-white/40 text-xs truncate max-w-[150px] italic">{item.original}</p>
                                </div>

                                {/* NEW: Analytics Badge */}
                                <div className="flex flex-col items-center px-4 border-x border-white/5">
                                    <span className="text-[10px] font-bold text-[#adb5bd] uppercase tracking-wider opacity-60">Clicks</span>
                                    <span className="text-white font-black text-lg">
                                        {item.clicks || 0}
                                    </span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col gap-1 text-right">
                                        <span className="text-[10px] font-bold text-[#adb5bd] uppercase tracking-wider opacity-60">Short Link</span>
                                        <Link href={item.short} target="_blank" className="text-white font-bold hover:text-[#c0c0c0] transition-colors">
                                            {item.short.replace('http://', '').replace('https://', '')}
                                        </Link>
                                    </div>

                                    <button
                                        onClick={() => { navigator.clipboard.writeText(item.short); alert("Copied!") }}
                                        className="bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-xl transition-all active:scale-90"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shorten
