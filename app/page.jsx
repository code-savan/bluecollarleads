"use client";

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
      <section id="hero" className={`h-screen flex items-center relative ${isVisible["hero"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container flex flex-col lg:flex-row items-center">
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
          <div className="w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden glass-card">
            {/* Video embed would go here */}
            <div className="w-full h-full bg-black/40 flex items-center justify-center">
              <p className="text-[var(--dark-gray)]">Hero Concept Video</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">✅</div>
              <h3 className="text-xl font-bold mb-3">Collect Leads While You're On The Job</h3>
              <p className="text-base text-[var(--dark-gray)]">Customers chat, leave their info, and get added to your list.</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">🔔</div>
              <h3 className="text-xl font-bold mb-3">Get Real-Time Alerts by Email or SMS</h3>
              <p className="text-base text-[var(--dark-gray)]">No missed calls or ghost messages.</p>
            </div>
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">📅</div>
              <h3 className="text-xl font-bold mb-3">Jobs Get Booked Automatically</h3>
              <p className="text-base text-[var(--dark-gray)]">Your calendar stays full — without lifting a finger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS TABLE SECTION */}
      <section id="why-set-forget" className={`py-16 ${isVisible["why-set-forget"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Difference is Clear</h2>

          <div className="glass-card p-1 rounded-lg overflow-hidden mb-4">
            {/* Header - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.05)]">
                <h3 className="text-2xl font-bold text-[var(--negative)]">Without Us</h3>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
                <h3 className="text-2xl font-bold text-[var(--accent)]">With Us</h3>
              </div>
            </div>

            {/* Row 1 - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--negative)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--negative)]">Missed Leads</h4>
                    <p className="text-base">Missing calls while on jobs costs you thousands in lost revenue.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--accent)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--accent)]">Works 24/7 — even while you sleep</h4>
                    <p className="text-base text-[var(--dark-gray)]">Your virtual receptionist never takes breaks or days off.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--negative)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--negative)]">Scattered Information</h4>
                    <p className="text-base">Customer details spread across texts, voicemails, and sticky notes.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--accent)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--accent)]">No apps to install or dashboards to manage</h4>
                    <p className="text-base text-[var(--dark-gray)]">Everything integrates with tools you already use.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:border-r border-[rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--negative)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--negative)]">Ghosted Clients</h4>
                    <p className="text-base">Forgetting follow-ups damages your reputation and repeat business.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <svg className="lucide-icon text-[var(--accent)] flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--accent)]">We build it. You relax.</h4>
                    <p className="text-base text-[var(--dark-gray)]">Full setup and customization done for you by our team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section id="demo" className={`py-16 bg-[var(--light-gray)] ${isVisible["demo"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Watch the Bot in Action</h2>
          <div className="max-w-5xl mx-auto aspect-video rounded-[20px] overflow-hidden border-10 border-blue-500 mb-6">
            {/* Video embed would go here */}
            <div className="w-full h-full bg-black/40 flex items-center justify-center">
              <p className="text-lg text-[var(--dark-gray)]">Feature Demo Video</p>
            </div>
          </div>
          <p className="text-base text-[var(--dark-gray)] max-w-2xl mx-auto">
            Here's how our smart chatbot handles your leads — from chat to booked job.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL BENTO GRID SECTION */}
      <section id="testimonials" className={`py-16 ${isVisible["testimonials"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Other Pros Are Saying</h2>

          <div className="bento-grid stagger-children">
            {/* Large testimonial 1 */}
            <div className="glass-card rounded-lg overflow-hidden bento-span-2 bento-span-row-2">
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <p className="text-lg text-[var(--dark-gray)]">Testimonial Video 1</p>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Mike R., HVAC Technician</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "This bot has been a game-changer for my business. I went from missing 40% of my calls to booking 3 new jobs while on a roof repair. Best investment I've made."
                </p>
              </div>
            </div>

            {/* Regular testimonial 2 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <p className="text-lg text-[var(--dark-gray)]">Testimonial 2</p>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Sarah T., Electrician</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "Booked 6 jobs this week without lifting a finger."
                </p>
              </div>
            </div>

            {/* Regular testimonial 3 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <p className="text-lg text-[var(--dark-gray)]">Testimonial 3</p>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">John D., Plumber</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "Never miss a call even when I'm under a sink. Revenue up 32%."
                </p>
              </div>
            </div>

            {/* Regular testimonial 4 */}
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <p className="text-lg text-[var(--dark-gray)]">Testimonial 4</p>
              </div>
              <div className="p-5">
                <p className="font-bold text-lg mb-1">Luis G., Roofer</p>
                <p className="text-base text-[var(--dark-gray)]">
                  "The automation saved me from hiring a receptionist. Pure profit."
                </p>
              </div>
            </div>

            {/* Regular testimonial 5 */}
            <div className="glass-card rounded-lg overflow-hidden bento-span-2">
              <div className="aspect-video bg-black/40 flex items-center justify-center">
                <p className="text-lg text-[var(--dark-gray)]">Testimonial 5</p>
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
