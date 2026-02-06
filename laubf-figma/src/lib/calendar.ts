import { startOfMonth, endOfMonth, eachDayOfInterval, format, parseISO, addMonths, subMonths, getDay, isSameDay, isWithinInterval, areIntervalsOverlapping, isSameMonth } from 'date-fns';
import { events, Event } from './events';
import { programs, Program } from './programs';
import { meetings, Meeting } from './meetings';

export type CalendarItemType = 'event' | 'program' | 'meeting';

export interface CalendarItem {
  id: string;
  originalId: string;
  title: string;
  date: Date; // The specific occurrence date
  type: CalendarItemType;
  time: string;
  location: string;
  ministry: string;
  description: string;
  // For modal
  fullItem: Event | Program | Meeting;
  // Multi-day info
  isMultiDay?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

const DAYS_MAP: { [key: string]: number } = {
  'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6,
  'Sundays': 0, 'Mondays': 1, 'Tuesdays': 2, 'Wednesdays': 3, 'Thursdays': 4, 'Fridays': 5, 'Saturdays': 6
};

// Helper to check if a string contains a day name
const getDayFromSchedule = (schedule: string): number | null => {
  for (const [day, val] of Object.entries(DAYS_MAP)) {
    if (schedule.includes(day)) return val;
  }
  return null;
};

export const getCalendarItemsForMonth = (date: Date): CalendarItem[] => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const items: CalendarItem[] = [];

  // 1. Process Events (Multi-day support)
  events.forEach(event => {
    const startDate = parseISO(event.startDate);
    const endDate = parseISO(event.endDate);
    
    // Check overlap with current month
    // We use a safe overlap check
    if (startDate <= monthEnd && endDate >= monthStart) {
        // Generate all days for this event
        const days = eachDayOfInterval({ start: startDate, end: endDate });
        
        days.forEach((day, index) => {
            // Only add if day is in the requested month
            if (isSameMonth(day, date)) {
                 items.push({
                    id: `evt-${event.id}-${format(day, 'yyyy-MM-dd')}`,
                    originalId: event.id,
                    title: event.title,
                    date: day,
                    type: 'event',
                    time: format(startDate, 'h:mm a'), // Keep start time for reference
                    location: event.location,
                    ministry: event.ministry,
                    description: event.description,
                    fullItem: event,
                    isMultiDay: days.length > 1,
                    isStart: index === 0,
                    isEnd: index === days.length - 1
                  });
            }
        });
    }
  });

  // 2. Process Meetings (Recurring)
  meetings.forEach(meeting => {
    let targetDays: number[] = [];
    
    // Handle "Monday - Friday" explicitly
    if (meeting.day.toLowerCase().includes('monday - friday') || meeting.day.toLowerCase().includes('mon-fri')) {
        targetDays = [1, 2, 3, 4, 5];
    } else {
        // Handle single days (existing logic)
        const meetingDay = getDayFromSchedule(meeting.day);
        if (meetingDay !== null) targetDays = [meetingDay];
    }

    if (targetDays.length > 0) {
      // Find all matching days in this month
      allDays.forEach(day => {
        if (targetDays.includes(getDay(day))) {
          items.push({
            id: `mtg-${meeting.id}-${format(day, 'yyyy-MM-dd')}`,
            originalId: meeting.id,
            title: meeting.title,
            date: day,
            type: 'meeting',
            time: meeting.time,
            location: meeting.location,
            ministry: meeting.ministry,
            description: meeting.description,
            fullItem: meeting
          });
        }
      });
    }
  });

  // 3. Process Programs
  // Logic: If it has a schedule like "Saturdays @ 9AM", treat as recurring within start/end date
  // If no recurring pattern, just show start date
  programs.forEach(program => {
    const progStart = program.startDate.includes('T') ? parseISO(program.startDate) : null;
    const progEnd = program.endDate ? parseISO(program.endDate) : (progStart ? addMonths(progStart, 3) : null); // Default duration if not set
    
    const recurringDay = getDayFromSchedule(program.schedule);

    if (recurringDay !== null && progStart) {
        // Recurring logic
        // Only generate if the day falls within program duration AND current month
        allDays.forEach(day => {
            if (getDay(day) === recurringDay) {
                // Check if this day is within the program's running period
                const isRunning = progEnd ? isWithinInterval(day, { start: progStart, end: progEnd }) : (day >= progStart);
                
                if (isRunning) {
                    items.push({
                        id: `prg-${program.id}-${format(day, 'yyyy-MM-dd')}`,
                        originalId: program.id,
                        title: program.title,
                        date: day,
                        type: 'program',
                        time: program.schedule.split('@')[1]?.trim() || "TBA",
                        location: program.location,
                        ministry: program.ministry,
                        description: program.description,
                        fullItem: program
                    });
                }
            }
        });
    } else if (progStart) {
        // Single start date logic (treat as Event-like if needed, but usually Programs are recurring)
         if (isWithinInterval(progStart, { start: monthStart, end: monthEnd })) {
            items.push({
                id: `prg-${program.id}`,
                originalId: program.id,
                title: program.title,
                date: progStart,
                type: 'program',
                time: program.schedule,
                location: program.location,
                ministry: program.ministry,
                description: program.description,
                fullItem: program
            });
         }
    }
  });

  return items.sort((a, b) => a.date.getTime() - b.date.getTime());
};
