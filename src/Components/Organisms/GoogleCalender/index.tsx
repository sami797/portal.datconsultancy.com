import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './GoogleCalendar.css'; // Import CSS for styling
import { format } from 'date-fns';
import './GoogleCalendar.css'; // Import CSS for styling
import { enUS } from 'date-fns/locale';

const GoogleCalendar = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [hoveredEvent, setHoveredEvent] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const response = await axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
          code: codeResponse.code,
          client_id: '889820433427-0vvq25v96atkibebp1jutc4a9pfahik6.apps.googleusercontent.com',
          client_secret: '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',
          redirect_uri: 'http://localhost:3000',
          grant_type: 'authorization_code'
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        setAccessToken(response.data.access_token);
        fetchEvents(response.data.access_token);
      } catch (error) {
        console.error("Error exchanging code for token", error);
      }
    },
    onError: (error) => console.error("Login failed", error),
    scope: 'https://www.googleapis.com/auth/calendar',
    flow: 'auth-code'
  });

  const fetchEvents = async (token: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const formattedEvents = response.data.items.map((event: any) => ({
        id: event.id,
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
        location: event.location,
        description: event.description,
        url: event.hangoutLink
      }));

      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching events: ', error);
    }
  };

  const handleDateClick = (info: any) => {
    const title = prompt('Enter event title');
    if (title) {
      const newEvent = {
        summary: title,
        start: info.dateStr,
        end: info.dateStr,
      };

      createEvent(newEvent);
    }
  };

  const createEvent = async (newEvent: any) => {
    if (!accessToken) {
      console.error("User is not authenticated");
      return;
    }

    const event = {
      summary: newEvent.summary,
      start: {
        dateTime: newEvent.start,
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: newEvent.end,
        timeZone: 'America/Los_Angeles'
      }
    };

    try {
      const response = await axios.post(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        event,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Event created: ', response.data);
      fetchEvents(accessToken);
    } catch (error) {
      console.error('Error creating event: ', error);
    }
  };

  const handleEventMouseEnter = (info: any) => {
    setHoveredEvent(info.event);
  };

  const handleEventMouseLeave = () => {
    setHoveredEvent(null);
  };

  useEffect(() => {
    if (accessToken) {
      fetchEvents(accessToken);
    }
  }, [accessToken]);

  const formatDate = (date: string) => {
    return format(new Date(date), 'EEEE, MMMM d - h:mm a', { locale: enUS });
  };

  return (
    <>
      <div>
        <div style={{ marginTop: '20px' }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            eventMouseEnter={handleEventMouseEnter}
            eventMouseLeave={handleEventMouseLeave}
            eventContent={(eventInfo) => (
              <div className="contentevent">
              {eventInfo.event.title}
            </div>
            
            )}
          />
        </div>

        {/* Tooltip for event details */}
        {hoveredEvent && (
          <div className="tooltip">
            <h2>{hoveredEvent.title}</h2>
            <p><strong>Start:</strong> {formatDate(hoveredEvent.start)}</p>
            <p><strong>End:</strong> {formatDate(hoveredEvent.end)}</p>
            <p><strong>Description:</strong> {hoveredEvent.extendedProps.description || 'No description'}</p>
            <p><strong>Location:</strong> {hoveredEvent.extendedProps.location || 'No location'}</p>
            {hoveredEvent.extendedProps.url && (
              <p><a href={hoveredEvent.extendedProps.url} target="_blank" rel="noopener noreferrer">Join Meeting</a></p>
            )}
          </div>
        )}
      </div>
      <div className="parent-container">
        <button type="button" className="login-with-google-btn" onClick={() => login()}>
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default GoogleCalendar;
