
import { useInView } from 'react-intersection-observer';
import React from "react";

const Impacts = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="bg-white">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Pwani Innovation Week in Numbers</h2>
                    <div className="w-24 h-1 bg-ocean mx-auto"></div>
                </div>
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className={`text-center transition-all duration-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                        <p className="text-4xl font-bold text-[#F97316]">3,000+</p>
                        <p className="text-gray-600 font-medium">Delegates</p>
                    </div>

                    <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                        <p className="text-4xl font-bold text-[#F97316]">5</p>
                        <p className="text-gray-600 font-medium">Days</p>
                    </div>

                    <div className={`text-center transition-all duration-700 delay-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                        <p className="text-4xl font-bold text-[#F97316]">12+</p>
                        <p className="text-gray-600 font-medium">Sessions</p>
                    </div>

                    <div className={`text-center transition-all duration-700 delay-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                        <p className="text-4xl font-bold text-[#F97316]">50+</p>
                        <p className="text-gray-600 font-medium">Speakers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impacts;
