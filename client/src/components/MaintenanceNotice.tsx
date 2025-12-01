import React from 'react';
import { Wrench, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaintenanceNotice: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="section-container flex flex-col items-center text-center space-y-10">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center animate-bounce">
            <Wrench className="h-20 w-20 text-[#F97316]" />
          </div>
        </div>

        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
            We&apos;re fine-tuning the schedule
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We&apos;re fixing something, and our devs think it&apos;ll be ready in a few hours. Thanks for bearing with us while we polish the experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Clock className="h-5 w-5" />
            Check Back Soon
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F97316] hover:text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Talk to Us
          </Link>
        </div>

        <div className="w-full max-w-3xl">
          <div className="rounded-3xl border border-dashed border-[#F97316]/50 bg-white/70 dark:bg-slate-900/70 px-6 py-5 shadow-inner flex flex-col sm:flex-row items-center gap-4 animate-pulse">
            <div className="flex items-center gap-3 text-[#F97316] font-semibold text-sm uppercase tracking-wide">
              <div className="h-3 w-3 rounded-full bg-[#F97316] animate-ping" />
              Live Update Stream
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We&apos;ll publish the refreshed agenda here and share it on email as soon as the dust settles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceNotice;
