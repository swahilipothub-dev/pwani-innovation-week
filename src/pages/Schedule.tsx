import React, {useEffect, useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {format, parseISO} from 'date-fns';
import {Calendar, Clock, Filter, Loader2, MapPin, RefreshCcw, Users} from 'lucide-react';
import {API_ENDPOINTS} from '@/lib/config';

interface ScheduleTrack {
  _id?: string;
  name?: string;
  slug?: string;
  description?: string;
}

interface ScheduleItem {
  _id: string;
  day?: number;
  date?: string;
  title: string;
  description?: string;
  track?: ScheduleTrack | null;
  speakers?: string[];
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
  return date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'});
};

const formatTimeRange = (start?: string, end?: string) => {
  const formattedStart = formatTime(start);
  const formattedEnd = formatTime(end);
  if (formattedStart && formattedEnd) return `${formattedStart} – ${formattedEnd}`;
  return formattedStart || formattedEnd || 'Time TBA';
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState('All');

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
    <div className="min-h-screen">
      <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-orange-200/20 rounded-full blur-2xl"></div>
        </div>
        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Event <span className="gradient-text">Schedule</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Five days of innovation, collaboration, and transformation • October 27-31, 2025
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white border-b">
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
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
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
                      : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
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

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedDayTitle}</h2>
              <p className="text-gray-600">
                {filteredSessions.length} session{filteredSessions.length !== 1 ? 's' : ''} planned
              </p>
            </div>

            <div className="space-y-6">
              {filteredSessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTrackColor(session.track?.name)}`}>
                            {session.track?.name || 'Track TBA'}
                          </div>
                          {session.type && (
                            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                              {session.type}
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">{session.title}</h3>

                        <p className="text-gray-600 mb-4">
                          {session.description?.trim() ? session.description : 'Session details will be announced soon.'}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-[#F97316]" />
                            {formatTimeRange(session.start_time, session.end_time)}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-[#F97316]" />
                            {session.venue?.trim() || 'Venue TBA'}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-[#F97316]" />
                            {session.speakers?.length ? session.speakers.join(', ') : 'Speakers TBA'}
                          </div>
                        </div>

                        {session.moderator && (
                          <div className="mt-3 text-sm text-gray-600">
                            Moderator: <span className="font-medium text-gray-700">{session.moderator}</span>
                          </div>
                        )}
                      </div>
                      <div className="lg:ml-6" />
                    </div>
                  </div>
                  <div className={`h-2 bg-gradient-to-r ${getTrackColor(session.track?.name)}`}></div>
                </div>
              ))}
            </div>

            {filteredSessions.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No sessions found</h3>
                <p className="text-gray-500">Try selecting a different day or track filter.</p>
              </div>
            )}

            {!groupedSchedules.length && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Schedule coming soon</h3>
                <p className="text-gray-500">We will publish the program as soon as it is ready.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Register now to secure your spot at Pwani Innovation Week 2025 and be part of the coastal transformation.
          </p>
          <button className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Schedule;