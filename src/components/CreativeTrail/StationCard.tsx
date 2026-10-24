import { Calendar, Check, Clock, Footprints, MapPin, MoveUpRight, ShoppingBag, Ticket, Users, type LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CATEGORY_META, type TrailStation } from '@/lib/creativeTrailData';

const META_ROW_ICONS: {key: keyof TrailStation; icon: LucideIcon}[] = [
  {key: 'sessions', icon: Clock},
  {key: 'duration', icon: Clock},
  {key: 'ages', icon: Users},
  {key: 'capacity', icon: Users},
  {key: 'availability', icon: Footprints},
  {key: 'shop', icon: ShoppingBag},
];

function StationMeta({station}: {station: TrailStation}) {
  const rows = META_ROW_ICONS
    .map(({key, icon}) => {
      const value = station[key];
      return typeof value === 'string' ? {icon, value} : null;
    })
    .filter((row): row is {icon: LucideIcon; value: string} => row !== null);

  return (
    <>
      {station.date && (
        <div className="ct-station-meta">
          {[
            {icon: Calendar, value: station.date},
            station.time ? {icon: Clock, value: station.time} : null,
            station.location ? {icon: MapPin, value: station.location} : null,
          ].filter((row): row is {icon: LucideIcon; value: string} => row !== null).map(({icon: Icon, value}) => (
            <div className="ct-meta-row ct-meta-row--emphasis" key={value}>
              <Icon aria-hidden="true" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}

      {rows.length > 0 && (
        <div className="ct-station-meta">
          {rows.map(({icon: Icon, value}) => (
            <div className="ct-meta-row" key={`${station.number}-${value}`}>
              <Icon aria-hidden="true" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function StationPrice({station}: {station: TrailStation}) {
  if (station.free) {
    return (
      <div className="ct-price-list">
        <span className="ct-price-tag ct-price-tag--free">
          <Footprints aria-hidden="true" /> Free entry
        </span>
      </div>
    );
  }

  if (!station.price?.length) return null;

  return (
    <div className="ct-price-list" aria-label="Prices">
      {station.price.map((line) => (
        <span className="ct-price-tag" key={line}>
          <Ticket aria-hidden="true" /> {line}
        </span>
      ))}
    </div>
  );
}

export function StationCard({
  station,
  isSelected,
  onToggleSelection,
}: {
  station: TrailStation;
  isSelected: boolean;
  onToggleSelection: () => void;
}) {
  const {ref, inView} = useScrollReveal({threshold: 0.08});
  const isFeature = Boolean(station.featured);
  const category = CATEGORY_META[station.category];

  return (
    <article
      ref={ref}
      aria-labelledby={`station-${station.number}-title`}
      className={`ct-station-card ct-station-card--${station.category}${inView ? ' is-revealed' : ''}${isSelected ? ' is-selected' : ''}`}
    >
      <div className="ct-station-content">
        <div className="ct-station-topline">
          <span className="ct-station-index">
            <span className="ct-station-number" aria-hidden="true">{station.number}</span>
            <span>Station</span>
          </span>
          <span className="ct-station-category">{category.title}</span>
          <button
            className="ct-station-select"
            type="button"
            aria-label={`${isSelected ? 'Return' : 'Pop out'} Station ${station.number}: ${station.title}${isSelected ? ' to the grid' : ''}`}
            aria-pressed={isSelected}
            onClick={onToggleSelection}
          >
            {isSelected ? <Check aria-hidden="true" /> : <MoveUpRight aria-hidden="true" />}
          </button>
        </div>
        {isFeature && (
          <span className="ct-station-ribbon">
            {station.number === '11' ? 'Evening showcase' : 'Two activities'}
          </span>
        )}
        <div className="ct-station-heading">
          <h3 id={`station-${station.number}-title`}>{station.title}</h3>
        </div>
        <p className="ct-station-description">{station.description}</p>

        <StationMeta station={station} />

        {station.variants && (
          <div className="ct-activity-variants">
            {station.variants.map((variant, index) => (
              <div className="ct-activity-variant" key={variant.label}>
                <p className="ct-variant-title">{variant.label}</p>
                <p className="ct-variant-description">{variant.description}</p>
                <div className="ct-station-meta">
                  {variant.sessions && (
                    <div className="ct-meta-row">
                      <Clock aria-hidden="true" />
                      <span>{variant.sessions}</span>
                    </div>
                  )}
                  {variant.duration && (
                    <div className="ct-meta-row">
                      <Clock aria-hidden="true" />
                      <span>{variant.duration}</span>
                    </div>
                  )}
                  {variant.capacity && (
                    <div className="ct-meta-row">
                      <Users aria-hidden="true" />
                      <span>{variant.capacity}</span>
                    </div>
                  )}
                </div>
                {variant.price && (
                  <span className="ct-price-tag">
                    <Ticket aria-hidden="true" /> {variant.price}
                  </span>
                )}
                {index < station.variants.length - 1 && <span className="ct-variant-divider" aria-hidden="true" />}
              </div>
            ))}
          </div>
        )}

        {!station.variants && <StationPrice station={station} />}
      </div>
    </article>
  );
}
