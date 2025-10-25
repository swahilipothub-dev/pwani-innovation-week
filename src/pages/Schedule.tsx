import React, {useEffect, useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {format, parseISO} from 'date-fns';
import {ArrowUpRight, Calendar, Clock, Filter, Loader2, MapPin, RefreshCcw, Users, X} from 'lucide-react';
import {API_ENDPOINTS} from '@/lib/config';

// New Speaker interface based on the updated API response
interface Speaker {
  name?: string | null;
  title?: string | null;
  speakerType?: string | null;
  organization?: string | null;
}

interface ScheduleTrack {
  id?: string; // Added 'id' based on new structure
  _id?: string;
  name?: string;
  slug?: string;
  description?: string;
}

interface ScheduleItem {
  _id: string;
  id?: string; // Added 'id' based on new structure
  day?: number;
  date?: string;
  title: string;
  description?: string;
  track?: ScheduleTrack | null;
  // Updated type for speakers
  speakers?: Speaker[];
  venue?: string;
  start_time?: string;
  end_time?: string;
  moderator?: string;
  type?: string;
}

const TRACK_COLORS: Record<string, string> = {
  General: 'from-gray-500 to-gray-600',
  'Youth Agency': 'from-[#F97316] to-[#EA580C]',
  'Sustainable Coastal Economies': 'from-green-500 to-green-600',
  'Digital Transformation': 'from-purple-500 to-purple-600',
};

const getTrackColor = (trackName?: string | null) => {
  if (!trackName) return 'from-[#F97316] to-[#EA580C]';
  return TRACK_COLORS[trackName] || 'from-[#F97316] to-[#EA580C]';
};

const hasMeaningfulText = (value?: string | null) => {
  if (!value) return false;
  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.toLowerCase() !== 'n/a';
};

const getSpeakerDisplayText = (speaker: Speaker) => {
  if (hasMeaningfulText(speaker.name)) return speaker.name!.trim();
  if (hasMeaningfulText(speaker.title)) return speaker.title!.trim();
  if (hasMeaningfulText(speaker.organization)) return speaker.organization!.trim();
  if (hasMeaningfulText(speaker.speakerType)) return speaker.speakerType!.trim();
  return '';
};

const safeFormatDate = (date?: string, formatString = 'MMM d') => {
  if (!date) return undefined;
  try {
    return format(parseISO(date), formatString);
  } catch {
    return undefined;
  }
};

const formatTime = (value?: string) => {
  if (!value) return undefined;
  const [hours, minutes] = value.split(':');
  if (hours === undefined || minutes === undefined) return undefined;
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));
  date.setSeconds(0, 0);
  // Using toLocaleTimeString for reliable time formatting without external libs
  return date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
};

const formatTimeRange = (start?: string, end?: string) => {
  const formattedStart = formatTime(start);
  const formattedEnd = formatTime(end);
  if (formattedStart && formattedEnd) return `${formattedStart} – ${formattedEnd}`;
  return formattedStart || formattedEnd || 'Time TBA';
};

const getSpeakerInitials = (name?: string | null) => {
  const source = hasMeaningfulText(name) ? name : undefined;
  if (!source) return 'SP';
  const matches = source
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '');
  return matches.join('') || 'SP';
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState('All');
  const [activeSpeaker, setActiveSpeaker] = useState<{speaker: Speaker; session: ScheduleItem} | null>(null);

  const closeSpeakerModal = () => setActiveSpeaker(null);

  const {
    data: schedules = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<ScheduleItem[]>({
    queryKey: ['schedules'],
    queryFn: async () => {
      const response = await fetch(API_ENDPOINTS.SCHEDULES);
      if (!response.ok) {
        throw new Error('Failed to fetch schedules');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  const groupedSchedules = useMemo(() => {
    const groups = new Map<number, {day: number; date?: string; sessions: ScheduleItem[]}>();
    schedules.forEach((item) => {
      const day = item.day ?? 0;
      const existing = groups.get(day);
      if (existing) {
        existing.sessions.push(item);
        if (!existing.date && item.date) existing.date = item.date;
        return;
      }
      groups.set(day, {day, date: item.date, sessions: [item]});
    });
    return Array.from(groups.values())
      .sort((a, b) => a.day - b.day)
      .map((group) => ({
        ...group,
        sessions: [...group.sessions].sort((a, b) => {
          const aStart = a.start_time || '';
          const bStart = b.start_time || '';
          return aStart.localeCompare(bStart);
        }),
      }));
  }, [schedules]);

  const trackFilters = useMemo(() => {
    const values = new Set<string>();
    schedules.forEach((item) => {
      if (item.track?.name) values.add(item.track.name);
    });
    return ['All', ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }, [schedules]);

  const showTrackFilters = groupedSchedules.length > 0 && trackFilters.length > 0;

  useEffect(() => {
    if (!groupedSchedules.length) {
      setSelectedDay(null);
      return;
    }
    if (selectedDay === null || !groupedSchedules.some((group) => group.day === selectedDay)) {
      setSelectedDay(groupedSchedules[0].day);
    }
  }, [groupedSchedules, selectedDay]);

  useEffect(() => {
    if (!trackFilters.includes(selectedTrack)) setSelectedTrack('All');
  }, [trackFilters, selectedTrack]);

  useEffect(() => {
    if (!activeSpeaker) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveSpeaker(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSpeaker]);

  const sessionsForDay = useMemo(() => {
    if (selectedDay === null) return [];
    const targetDay = groupedSchedules.find((group) => group.day === selectedDay);
    return targetDay?.sessions ?? [];
  }, [groupedSchedules, selectedDay]);

  const filteredSessions = useMemo(() => {
    if (selectedTrack === 'All') return sessionsForDay;
    return sessionsForDay.filter((session) => session.track?.name === selectedTrack);
  }, [sessionsForDay, selectedTrack]);

  const selectedDayTitle = useMemo(() => {
    if (selectedDay === null) return 'Schedule';
    const target = groupedSchedules.find((group) => group.day === selectedDay);
    if (!target) return 'Schedule';
    if (target.day && target.day > 0) return `Day ${target.day} Schedule`;
    const index = groupedSchedules.indexOf(target);
    return `Day ${index + 1} Schedule`;
  }, [groupedSchedules, selectedDay]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#F97316]" />
          <p className="text-gray-600">Loading schedule...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    const errorMessage = error instanceof Error ? error.message : 'Unable to load schedule';
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-600 text-lg">{errorMessage}</p>
          <button
            onClick={() => refetch()}
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-3 rounded-lg transition-colors"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden transition-colors duration-300 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl dark:bg-purple-500/10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-orange-200/20 rounded-full blur-2xl dark:bg-orange-400/10"></div>
        </div>
        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 dark:text-white">
              Event <span className="gradient-text">Schedule</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
              Five days of innovation, collaboration, and transformation • October 27-31, 2025
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white border-b transition-colors duration-300 dark:bg-slate-950 dark:border-slate-800">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {groupedSchedules.map(({day, date}, index) => {
              const dayNumber = typeof day === 'number' ? day : 0;
              const dayLabel = dayNumber > 0 ? `Day ${dayNumber}` : `Day ${index + 1}`;
              const shortDate = safeFormatDate(date);
              return (
                <button
                  key={`day-${dayNumber}-${index}`}
                  onClick={() => setSelectedDay(dayNumber)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedDay === dayNumber
                      ? 'bg-[#F97316] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md dark:bg-slate-900 dark:text-gray-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {dayLabel}
                    {shortDate && <span className="text-sm opacity-75">{shortDate}</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {showTrackFilters && (
            <div className="flex flex-wrap justify-center gap-3">
              {trackFilters.map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    selectedTrack === track
                      ? 'bg-[#F97316] text-white shadow-md'
                      : 'bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-slate-800 dark:text-orange-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Filter className="w-3 h-3 inline mr-1" />
                  {track}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">{selectedDayTitle}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {filteredSessions.length} session{filteredSessions.length !== 1 ? 's' : ''} planned
              </p>
            </div>

            <div className="space-y-6">
              {filteredSessions.map((session, index) => {
                const speakerList =
                  session.speakers?.filter((speaker) => {
                    if (!speaker) return false;
                    return [speaker.name, speaker.title, speaker.organization, speaker.speakerType].some(
                      (value) => hasMeaningfulText(value),
                    );
                  }) ?? [];
                const hasSpeakers = speakerList.length > 0;
                const speakerSummary = speakerList
                  .map((speaker) => getSpeakerDisplayText(speaker))
                  .filter((name): name is string => !!name)
                  .join(', ');
                const isPanelSession = session.type?.trim().toLowerCase() === 'panel';
                return (
                  <div
                    // Use 'id' or '_id' for a stable key, falling back to index if necessary
                    key={session.id || session._id || index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in dark:bg-slate-900 dark:border-slate-800"
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTrackColor(session.track?.name)}`}>
                              {session.track?.name || 'Track TBA'}
                            </div>
                            {session.type && (
                              <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-200">
                                {session.type}
                              </div>
                            )}
                          </div>

                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 dark:text-white">{session.title}</h3>

                          {isPanelSession && (
                            <div className="mb-4 rounded-2xl border border-[#F97316]/30 bg-[#F97316]/5 px-4 py-3 text-sm text-[#7c2d12] dark:border-[#F97316]/40 dark:bg-[#F97316]/10 dark:text-orange-200">
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316] dark:bg-[#F97316]/20">
                                  <Users className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#EA580C] dark:text-orange-300">
                                    Panel Session
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed">
                                    Engage with multiple experts sharing perspectives in a moderated discussion.
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {session.description?.trim() && (
                            <p className="text-gray-600 mb-5 dark:text-gray-300">{session.description}</p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <Clock className="w-4 h-4 mr-2 text-[#F97316]" />
                              {formatTimeRange(session.start_time, session.end_time)}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <MapPin className="w-4 h-4 mr-2 text-[#F97316]" />
                              {session.venue?.trim() || 'Venue TBA'}
                            </div>
                            {hasSpeakers && speakerSummary && (
                              <div className="flex items-center text-gray-600 dark:text-gray-300 sm:col-span-2">
                                <Users className="w-4 h-4 mr-2 text-[#F97316]" />
                                {speakerSummary}
                              </div>
                            )}
                          </div>

                          {session.moderator && (
                            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 border border-dashed border-gray-200 rounded-xl px-4 py-3 dark:border-slate-700">
                              <span className="font-semibold text-gray-700 dark:text-gray-100">Moderator:</span>{' '}
                              <span className="text-gray-600 dark:text-gray-300">{session.moderator}</span>
                            </div>
                          )}
                        </div>

                        {hasSpeakers && (
                          <div className="lg:w-80">
                            <div className="h-full rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white p-5 shadow-inner dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold">Speakers</p>
                                  <p className="text-base font-semibold text-gray-800 dark:text-gray-100">Meet the speakers</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                                  <Users className="w-5 h-5" />
                                </div>
                              </div>

                              <div className="mt-5 space-y-3">
                                {speakerList.map((speaker, speakerIndex) => (
                                  <button
                                    type="button"
                                    onClick={() => setActiveSpeaker({speaker, session})}
                                    key={`${session.id || session._id || index}-speaker-${speakerIndex}`}
                                    className="group w-full flex items-start gap-3 rounded-xl border border-orange-100 bg-white/70 px-3 py-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-[#F97316]/70"
                                  >
                                    <div className="relative mt-1">
                                      <div className="w-11 h-11 rounded-full bg-[#F97316]/15 text-[#F97316] flex items-center justify-center font-semibold text-sm">
                                        {getSpeakerInitials(getSpeakerDisplayText(speaker))}
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      {getSpeakerDisplayText(speaker) && (
                                        <p className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-[#F97316]">
                                          {getSpeakerDisplayText(speaker)}
                                        </p>
                                      )}
                                      {hasMeaningfulText(speaker.title) && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{speaker.title}</p>
                                      )}
                                      {hasMeaningfulText(speaker.organization) && (
                                        <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
                                          {speaker.organization}
                                        </p>
                                      )}
                                    </div>
                                    <ArrowUpRight className="mt-1 h-4 w-4 text-gray-300 transition-colors group-hover:text-[#F97316]" />
                                  </button>
                                ))}
                              </div>

                              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                                Tap a speaker to read their full bio and session role.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`h-2 bg-gradient-to-r ${getTrackColor(session.track?.name)}`}></div>
                  </div>
                );
              })}
            </div>

            {filteredSessions.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center dark:bg-slate-800">
                  <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2 dark:text-gray-300">No sessions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try selecting a different day or track filter.</p>
              </div>
            )}

            {!groupedSchedules.length && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center dark:bg-slate-800">
                  <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2 dark:text-gray-300">Schedule coming soon</h3>
                <p className="text-gray-500 dark:text-gray-400">We will publish the program as soon as it is ready.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {activeSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeSpeakerModal}></div>
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={closeSpeakerModal}
              aria-label="Close speaker details"
              className="absolute right-4 top-4 rounded-full border border-gray-200 p-2 text-gray-500 transition-colors hover:border-[#F97316] hover:text-[#F97316] dark:border-slate-700 dark:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-orange-50 p-6 text-center dark:bg-slate-800/60">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#F97316]/10 text-2xl font-semibold text-[#F97316]">
                  {getSpeakerInitials(getSpeakerDisplayText(activeSpeaker.speaker))}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-orange-500">Speaker</p>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {getSpeakerDisplayText(activeSpeaker.speaker) || 'Speaker'}
                  </h3>
                  {hasMeaningfulText(activeSpeaker.speaker.title) && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{activeSpeaker.speaker.title}</p>
                  )}
                  {hasMeaningfulText(activeSpeaker.speaker.organization) && (
                    <p className="text-sm uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      {activeSpeaker.speaker.organization}
                    </p>
                  )}
                  {hasMeaningfulText(activeSpeaker.speaker.speakerType) && (
                    <span className="mt-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 dark:bg-slate-800 dark:text-orange-300">
                      {activeSpeaker.speaker.speakerType}
                    </span>
                  )}
                </div>

                <div className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Session overview
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {activeSpeaker.session.title}
                  </h4>
                  {activeSpeaker.session.description?.trim() && (
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {activeSpeaker.session.description}
                    </p>
                  )}
                  <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#F97316]" />
                      {formatTimeRange(activeSpeaker.session.start_time, activeSpeaker.session.end_time)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#F97316]" />
                      {activeSpeaker.session.venue?.trim() || 'Venue TBA'}
                    </div>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-[#F97316]" />
                      {activeSpeaker.session.track?.name || 'Track TBA'}
                    </div>
                    {activeSpeaker.session.moderator && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#F97316]" />
                        Moderator: {activeSpeaker.session.moderator}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={closeSpeakerModal}
                    className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#EA580C]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
