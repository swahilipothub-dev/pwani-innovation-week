import React, { useMemo, useState } from 'react';
import {
  ArrowDown,
  Calendar,
  Clapperboard,
  Clock,
  Footprints,
  MapPin,
  Sparkles,
  Ticket,
} from 'lucide-react';
import { StationCard } from '@/components/CreativeTrail/StationCard';
import { CREATIVE_TRAIL_STATIONS, FILTER_OPTIONS, type FilterKey } from '@/lib/creativeTrailData';
import './Experience.css';

const ORDERED_STATIONS = [...CREATIVE_TRAIL_STATIONS].sort(
  (first, second) => Number(first.number) - Number(second.number),
);

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  const visibleStations = useMemo(
    () => (activeFilter === 'all' ? ORDERED_STATIONS : ORDERED_STATIONS.filter((station) => station.tags.includes(activeFilter))),
    [activeFilter],
  );

  return (
    <div className="ct-page">
      <section className="ct-hero">
        <figure className="ct-hero__banner">
          <img
            src="/images/creative-trail-banner.webp"
            alt="The Creative Trail banner, presented by Imani Collective. October 27–29, 2026, 9:30 AM–5:00 PM daily in Old Town, Mombasa. Walk-ins welcome; session spaces are limited. The Film and Fashion Showcase is October 28, 5:30–7:00 PM at Forodhani."
            className="ct-hero__banner-image"
            width="1920"
            height="768"
            loading="eager"
            decoding="async"
          />
        </figure>
        <div className="ct-hero__inner section-container">
          <div className="ct-hero__copy">
            <h1 className="sr-only">The Creative Trail</h1>
            <p className="ct-hero__intro">
              Join us for three days of creativity, culture, and hands-on experiences throughout Old Town, Mombasa, as part of Pwani Innovation Week 2026.
            </p>

            <div className="ct-hero__facts">
              {[
                {icon: Calendar, label: 'October 27–29, 2026'},
                {icon: Clock, label: '9:30 AM – 5:00 PM daily'},
                {icon: MapPin, label: 'Old Town, Mombasa'},
              ].map(({icon: Icon, label}) => (
                <span key={label}>
                  <Icon aria-hidden="true" /> {label}
                </span>
              ))}
            </div>

            <p className="ct-hero__availability">
              Walk-ins welcome. Session spaces are limited.
            </p>

            <div className="ct-hero__actions">
              <a href="#stations" className="ct-button ct-button--primary">
                Explore the Stations <ArrowDown aria-hidden="true" />
              </a>
              <a href="#visit" className="ct-button ct-button--outline">
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience overview */}
      <section className="ct-overview">
        <div className="section-container">
          <p className="ct-overview__intro">
            The Creative Trail offers 16 creative stations across Old Town where visitors meet local makers, discover
            traditional and contemporary practices, hear the stories behind their crafts, and take part in hands-on
            activities — walk-ins welcome, subject to session availability.
          </p>
          <div className="ct-overview__facts">
            {[
              {icon: Sparkles, value: '16', label: 'Creative Stations'},
              {icon: Calendar, value: '3', label: 'Days of Activities'},
              {icon: MapPin, value: 'Old Town', label: 'Mombasa'},
              {icon: Clock, value: 'Oct 27–29', label: '2026'},
              {icon: Footprints, value: 'Walk-in', label: 'Access, spaces limited'},
            ].map(({icon: Icon, value, label}) => (
              <div key={label} className="ct-overview__fact">
                <Icon aria-hidden="true" />
                <p>{value}</p>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station directory */}
      <section id="stations" className="ct-directory scroll-mt-24">
        <div className="section-container">
          <div className="ct-directory__intro">
            <p className="ct-eyebrow">Find your point of curiosity</p>
            <h2>The 16 Creative Stations</h2>
            <p>
              Follow the numbered trail from Station 01 to Station 16. Every stop is in Old Town, Mombasa — use the
              filters to find experiences that interest you.
            </p>
          </div>

          <div role="group" aria-label="Filter stations by type" className="ct-filters">
            {FILTER_OPTIONS.map(({key, label}) => {
              const active = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(key)}
                  className={`ct-filter${active ? ' is-active' : ''}`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <p aria-live="polite" className="sr-only">
            Showing {visibleStations.length} of {ORDERED_STATIONS.length} stations
          </p>

          <div className="ct-station-grid">
            {visibleStations.map((station) => (
              <div key={station.number} className="ct-station-grid__item">
                <StationCard
                  station={station}
                  isSelected={selectedStation === station.number}
                  onToggleSelection={() => setSelectedStation((current) => current === station.number ? null : station.number)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film & Fashion Showcase — dedicated callout */}
      <section className="ct-showcase">
        <div className="section-container">
          <div className="ct-showcase__art" aria-hidden="true">
            <span className="ct-showcase__frame"><Clapperboard /></span>
            <span className="ct-showcase__spotlight" />
            <span className="ct-showcase__line" />
          </div>
          <div className="ct-showcase__content">
            <span className="ct-eyebrow">One night only · October 28</span>
            <h2>Film &amp; Fashion Showcase</h2>
            <p className="ct-showcase__description">
              {CREATIVE_TRAIL_STATIONS.find((station) => station.number === '11')?.description}
            </p>
            <div className="ct-showcase__facts">
              <span>
                <Calendar aria-hidden="true" /> October 28, 2026
              </span>
              <span>
                <Clock aria-hidden="true" /> 5:30–7:00 PM
              </span>
              <span>
                <MapPin aria-hidden="true" /> Forodhani
              </span>
              <span className="ct-showcase__free">Free entry</span>
            </div>
            <p className="ct-showcase__note">This showcase runs one evening only and is separate from the daily trail hours.</p>
          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section id="visit" className="ct-visit scroll-mt-24">
        <div className="section-container">
          <div className="ct-visit__intro">
            <p className="ct-eyebrow">Before you set out</p>
            <h2>Plan Your Visit</h2>
            <p>Everything you need to know before you set out on the trail.</p>
          </div>
          <div className="ct-visit__grid">
            <div className="ct-visit__card">
              <p className="ct-visit__label">
                <Calendar aria-hidden="true" /> Dates &amp; Hours
              </p>
              <p className="ct-visit__main">October 27–29, 2026</p>
              <p>9:30 AM – 5:00 PM daily</p>
              <p className="ct-visit__note">Swahili Cooking starts at 9 AM.</p>
            </div>
            <div className="ct-visit__card">
              <p className="ct-visit__label">
                <MapPin aria-hidden="true" /> Start Here
              </p>
              <p className="ct-visit__main">Swahilipot Hub Foundation</p>
              <p>or Old Town off Ndia Kuu Road</p>
              <p className="ct-visit__note">Walk-ins welcome.</p>
            </div>
            <div className="ct-visit__card">
              <p className="ct-visit__label">
                <Ticket aria-hidden="true" /> Passport
              </p>
              <p className="ct-visit__main">Collect stamps, win prizes</p>
              <p>Each stamp = 1 raffle ticket.</p>
              <p className="ct-visit__note">Sign in at Reed Weaving (Station 09).</p>
            </div>
            <div className="ct-visit__card">
              <p className="ct-visit__label">
                <Footprints aria-hidden="true" /> Good to Know
              </p>
              <p className="ct-visit__main">Walk-ins welcome</p>
              <p>Session spaces are limited.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="ct-closing">
        <div className="section-container ct-closing__inner">
          <p className="ct-eyebrow">Take the long way through Old Town</p>
          <h2>
            Discover the Makers. Experience the Heritage. Celebrate the Craft.
          </h2>
          <p className="ct-closing__description">
            Sixteen stations, three days, one trail through Old Town. Walk-ins are always welcome — just remember
            that session spaces are limited.
          </p>
          <div className="ct-closing__actions">
            <a
              href="#stations"
              className="ct-button ct-button--light"
            >
              Explore the 16 Stations
            </a>
            <a
              href="#visit"
              className="ct-button ct-button--outline"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
