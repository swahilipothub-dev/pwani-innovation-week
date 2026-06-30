import { Track } from '../models/Schedule.js';

export const DEFAULT_TRACKS = [
  {
    name: 'Youth Agency',
    slug: 'youth-agency',
    description: 'Sessions centered on empowering youth leadership and impact.'
  },
  {
    name: 'Digital',
    slug: 'digital',
    description: 'Talks exploring technology, innovation, and the digital economy.'
  },
  {
    name: 'Sustainable Economy',
    slug: 'sustainable-economy',
    description: 'Programming focused on sustainability, climate, and green growth.'
  }
];

const slugify = (str = '') =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 60);

export async function ensureDefaultTracks() {
  try {
    const names = DEFAULT_TRACKS.map(track => track.name);
    const existing = await Track.find({ name: { $in: names } });
    const existingNames = new Set(existing.map(track => track.name));

    const toInsert = DEFAULT_TRACKS.filter(track => !existingNames.has(track.name)).map(track => ({
      ...track,
      slug: track.slug || slugify(track.name)
    }));

    if (toInsert.length) {
      await Track.insertMany(toInsert);
    }
  } catch (err) {
    console.error('Failed to ensure default tracks:', err);
  }
}
