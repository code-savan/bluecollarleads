"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO SECTION */}
      <section id="hero" className={`h-screen flex items-center relative ${isVisible["hero"] ? "animate-fade-in" : "opacity-0"} px-5`}>
        <div className=" flex flex-col lg:flex-row items-center md:space-x-5">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[var(--accent)]">Set It</span> and <span className="text-[var(--accent)]">Forget It</span> — <br className="hidden md:block" />
              Let This Smart Bot Book Jobs While You Work
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[var(--dark-gray)] max-w-2xl mx-auto lg:mx-0">
              Capture leads, book appointments, and follow up 24/7 — even when you're busy fixing things.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#demo" className="btn btn-primary text-lg">Watch Demo</a>
              <button className="btn btn-secondary text-lg">Start Free Trial</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden glass-card border">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/C2NZs1fCLfo"
                title="The Ultimate AI Agency Masterclass"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bouncing arrow at bottom center */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="bounce">
            <svg
              className="text-[var(--accent)]"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5v14m-7-7l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className={`py-16 bg-[var(--light-gray)] ${isVisible["how-it-works"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-fit h-fit rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                <Image src="/cog.png" alt="Collect Leads" width={50} height={50} />
              </div>
              <h3 className="text-[18px] w-[70%] mx-auto font-bold text-gray-200 mb-1">Collect Leads While You're On The Job</h3>
              <p className="text-base text-[var(--dark-gray)]">Customers chat, leave their info, and get added to your list.</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-fit h-fit rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                <Image src="/notification.png" alt="Collect Leads" width={50} height={50} />
              </div>
              <h3 className="text-[18px] w-[70%] mx-auto font-bold text-gray-200 mb-1">Get Real-Time Alerts by Email or SMS</h3>
              <p className="text-base text-[var(--dark-gray)]">No missed calls or ghost messages.</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-fit h-fit rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                <Image src="/calendar.png" alt="Collect Leads" width={50} height={50} />
              </div>
              <h3 className="text-[18px] w-[70%] mx-auto font-bold text-gray-200 mb-1">Jobs Get Booked Automatically</h3>
              <p className="text-base text-[var(--dark-gray)]">Your calendar stays full — without lifting a finger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS TABLE SECTION */}
      <section id="why-set-forget" className={`py-16 ${isVisible["why-set-forget"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">The Difference is Clear</h2>

          <div className="glass-card overflow-hidden mb-4">
            {/* Header - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]">
                <h3 className="text-2xl font-bold text-[var(--negative)] flex items-center gap-3">
                  <svg className="lucide-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  Without Us
                </h3>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                <h3 className="text-2xl font-bold text-[var(--accent)] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 bg-green-600 rounded-full text-white">✓</span>
                  With Us
                </h3>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Missed leads = lost revenue</p>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Bot captures every inquiry 24/7</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Scattered info in texts & stickies</p>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Leads stored cleanly, ready to follow up</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Forgotten follow-ups</p>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Bot handles follow-up automatically</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Constant interruptions</p>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">You work, bot handles chats</p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:border-r border-[rgba(255,255,255,0.1)]">
                <p className="text-lg text-white">Hiring admin staff</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-white">No need — bot never sleeps or eats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR / MONEY LOSS SECTION */}
      <section id="roi-calculator" className={`py-20 ${isVisible["roi-calculator"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">Missed Calls Are Costing You More Than You Think</h2>
          <p className="text-lg text-[var(--dark-gray)] text-center max-w-3xl mx-auto mb-6">
            Every unanswered call could be a lost customer. If you're out in the field and missing calls, chances are they're calling your competitor next. Let's calculate how much you're leaving on the table.
          </p>
          <p className="text-center text-[var(--accent)] font-semibold mb-12">
            Over 1,200 service pros fixed their revenue leaks with us
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Calculator inputs */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="mr-2">📊</span> Calculate Your Missed Revenue
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">Average job value (in $)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-gray)]">$</span>
                    <input type="number" placeholder="200" defaultValue="200" className="w-full bg-[rgba(255,255,255,0.05)] text-white py-3 px-8 rounded-lg border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--accent)]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">Missed calls per week</label>
                  <input type="number" placeholder="5" defaultValue="5" className="w-full bg-[rgba(255,255,255,0.05)] text-white py-3 px-4 rounded-lg border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--accent)]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--dark-gray)] mb-2">Close rate (how often you land a job when you answer)</label>
                  <div className="relative">
                    <input type="number" placeholder="40" defaultValue="40" className="w-full bg-[rgba(255,255,255,0.05)] text-white py-3 px-4 rounded-lg border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--accent)]" />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-gray)]">%</span>
                  </div>
                </div>

                <button className="w-full btn btn-primary py-4 text-lg font-bold">
                  Calculate My Loss
                </button>
              </div>
            </div>

            {/* Right side - Results */}
            <div className="glass-card p-8 rounded-lg flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-center">
                  <span className="mr-2">💸</span> You Could Be Losing:
                </h3>
                <div className="mb-6">
                  <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--negative)] to-red-400 mb-2">$1,733</div>
                  <p className="text-sm text-[var(--dark-gray)]">per month in missed revenue</p>
                </div>

                <div className="mb-8 py-4 px-6 bg-[rgba(239,68,68,0.1)] rounded-lg border border-[rgba(239,68,68,0.3)]">
                  <p className="text-xl font-bold text-[var(--negative)]">That's 104 Jobs a Year Gone.</p>
                </div>

                <div className="flex justify-center">
                  <a href="#book-call" className="btn btn-negative py-3 px-8 text-lg">
                    Fix This Today
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[var(--dark-gray)] max-w-2xl mx-auto">
              <span className="text-[var(--negative)]">🚫 Missed call = 💸 lost revenue.</span> Our automation captures leads 24/7, with many customers reporting a 30-40% increase in booked jobs within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section id="demo" className={`py-16 bg-[var(--light-gray)] ${isVisible["demo"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Watch the Bot in Action</h2>
          <div className="max-w-5xl mx-auto rounded-[20px] overflow-hidden border border-[rgba(59,130,246,0.3)] mb-6">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/C2NZs1fCLfo"
                title="The Ultimate AI Agency Masterclass"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-base text-[var(--dark-gray)] max-w-2xl mx-auto">
            Here's how our smart chatbot handles your leads — from chat to booked job.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section id="testimonials" className={`py-16 ${isVisible["testimonials"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 text-white">Hear from our Happy Customers</h2>
          <p className="text-lg text-[var(--dark-gray)] text-center max-w-3xl mx-auto mb-12">
            Hear what local service pros have to say: Real stories, real results. Testimonials that show how our bot is changing the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Large */}
            <div className="glass-card rounded-lg overflow-hidden lg:col-span-2 lg:row-span-2">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eEKjtV2NJDo"
                  title="UGC CONTENT IDEAS"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden">
                    <Image src="/cog.png" alt="Profile" width={48} height={48} />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[var(--foreground)]">Mike R.</p>
                    <p className="text-sm text-[var(--dark-gray)]">HVAC Technician</p>
                  </div>
                </div>
                <p className="text-base text-[var(--dark-gray)]">
                  "This bot has been a game-changer for my business. I went from missing 40% of my calls to booking 3 new jobs while on a roof repair. Best investment I've made."
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nzy1YgJcLSc"
                  title="UGC sample video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Sarah T., Electrician</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "Booked 6 jobs this week without lifting a finger."
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8keSYEeoy4o"
                  title="UGC Example Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">John D., Plumber</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "Never miss a call even when I'm under a sink. Revenue up 32%."
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zgUvJGRyMoE"
                  title="Tips for creating the perfect UGC video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Luis G., Roofer</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "The automation saved me from hiring a receptionist. Pure profit."
                </p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="glass-card rounded-lg overflow-hidden lg:col-span-2">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/uZAzQbJnN68"
                  title="A UGC example of a TOP PERFORMING AD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Jennifer K., Home Inspector</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "I was losing jobs while doing inspections. Now I book 3x more appointments while I'm on site with other clients."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK A CALL SECTION */}
      <section id="book-call" className={`py-20 bg-[var(--light-gray)] ${isVisible["book-call"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[#60a5fa]">
            Stop Bleeding Money From Missed Calls
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white max-w-2xl mx-auto">
            Every day you wait is another job lost to voicemail hell. Your competitors are already using our system.
          </p>

          <div className="glass-card p-8 md:p-10 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">15-Minute Bot Assessment Call</h3>
            <p className="text-lg mb-6 text-[var(--dark-gray)]">
              We'll analyze your current lead capture system and show you exactly how many jobs you're losing while on-site with customers.
            </p>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8 mb-8">
              <ul className="text-left space-y-4 w-fit">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">Custom revenue leakage report</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">Personalized bot demo for your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">No-BS pricing based on your call volume</span>
                </li>
              </ul>
              <ul className="text-left space-y-4 w-fit">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">Competitor analysis and market insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">Implementation timeline and strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--accent)] text-xl">✓</span>
                  <span className="text-base">ROI projection for your specific business</span>
                </li>
              </ul>
            </div>
            <a href="#" className="btn btn-primary py-4 px-10 text-lg inline-block">
              Book Your Money-Stop-Leaking Call
            </a>
          </div>

          <p className="text-sm text-[var(--dark-gray)]">
            No hard sell. No BS. Just a straight-up assessment of how much cash your business is leaking through missed calls.
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="final-cta" className={`py-32 text-center bg-gradient-to-b from-black to-[#050A20] ${isVisible["final-cta"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[#60a5fa]">Set It. Forget It. Get More Jobs.</h2>
          <p className="text-lg mb-10 text-[var(--dark-gray)]">
            Your tools keep missing calls. Your voicemail is full. Leads are ghosting you. Fix it all with one bot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book-call" className="btn btn-primary text-lg py-4 px-8">Book Your Assessment Call</a>
            <a href="#demo" className="btn btn-secondary text-lg">Watch Demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
