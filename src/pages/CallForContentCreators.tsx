import React from 'react'

const CallForContentCreators = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
        <img
          src="/content.jpg"
          alt="Content creator capturing Pwani Innovation Week moments"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 max-w-3xl px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Call for Content Creators
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Help us capture the heartbeat of Pwani Innovation Week 2025.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-2xl font-semibold text-gray-900">
                Calling all Pwani Content Creators &amp; Reel Masters!
              </p>
              <p>
                Want to be part of the Pwani Innovation Week (PIW) 6th Edition buzz? We’re looking for passionate
                creators to capture the energy, innovation, and sustainability of the Coastal Economies.
              </p>
              <div className="rounded-2xl bg-orange-50 p-6 text-gray-900 shadow-sm">
                <p>
                  Send us your best 3 video samples on Instagram{' '}
                  <a
                    href="https://www.instagram.com/swahilipothub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#F97316] underline underline-offset-4"
                  >
                    @swahilipothub
                  </a>{' '}
                  by <span className="font-semibold">October 25, 2025</span>.
                </p>
              </div>
              <p className="font-semibold text-[#F97316]">
                Let’s make some noise! #PIW2025 #PwaniInnovationWeek #ContentCreator #Mombasa #SwahilipotHub
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/content.jpg"
                  alt="Content creator working during Pwani Innovation Week"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-[#F97316]/20 blur-2xl md:block" />
              <div className="absolute -top-6 -right-6 hidden h-32 w-32 rounded-full bg-purple-500/10 blur-3xl md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallForContentCreators
