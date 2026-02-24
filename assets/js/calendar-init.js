/* ==========================================================================
   REDDASH ADMIN TEMPLATE - FULLCALENDAR INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const calEl = document.getElementById('fullCalendar');
  if (!calEl || typeof FullCalendar === 'undefined') return;

  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

  const calendar = new FullCalendar.Calendar(calEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    height: 'auto',
    editable: true,
    selectable: true,
    dayMaxEvents: 3,
    events: [
      { id: '1', title: 'Team Meeting', start: getRelativeDate(0), backgroundColor: '#ff0038', borderColor: '#ff0038' },
      { id: '2', title: 'Product Launch', start: getRelativeDate(2), end: getRelativeDate(4), backgroundColor: '#198754', borderColor: '#198754' },
      { id: '3', title: 'Design Review', start: getRelativeDate(5), backgroundColor: '#0dcaf0', borderColor: '#0dcaf0', textColor: '#000' },
      { id: '4', title: 'Sprint Planning', start: getRelativeDate(-2), backgroundColor: '#6c757d', borderColor: '#6c757d' },
      { id: '5', title: 'Q1 Report Due', start: getRelativeDate(8), backgroundColor: '#ffc107', borderColor: '#ffc107', textColor: '#000' },
      { id: '6', title: 'Client Call', start: getRelativeDate(10) + 'T10:00:00', end: getRelativeDate(10) + 'T11:00:00', backgroundColor: '#ff0038', borderColor: '#ff0038' },
      { id: '7', title: 'Code Review', start: getRelativeDate(12) + 'T14:00:00', end: getRelativeDate(12) + 'T15:30:00', backgroundColor: '#6c757d', borderColor: '#6c757d' },
      { id: '8', title: 'Deployment', start: getRelativeDate(15), backgroundColor: '#198754', borderColor: '#198754' },
      { id: '9', title: 'Board Meeting', start: getRelativeDate(-5), backgroundColor: '#0dcaf0', borderColor: '#0dcaf0', textColor: '#000' },
      { id: '10', title: 'Holiday', start: getRelativeDate(20), end: getRelativeDate(22), backgroundColor: '#ffc107', borderColor: '#ffc107', textColor: '#000' },
    ],
    select(info) {
      const title = prompt('Enter event title:');
      if (title) {
        calendar.addEvent({
          title,
          start: info.startStr,
          end: info.endStr,
          allDay: info.allDay,
          backgroundColor: '#ff0038',
          borderColor: '#ff0038'
        });
      }
      calendar.unselect();
    },
    eventClick(info) {
      if (confirm(`Delete event "${info.event.title}"?`)) {
        info.event.remove();
      }
    },
    eventDidMount(info) {
      // Add tooltip
      info.el.title = info.event.title;
    }
  });

  calendar.render();

  // Apply custom styles based on theme
  applyCalendarTheme();
  document.addEventListener('themechange', applyCalendarTheme);

  function applyCalendarTheme() {
    const dark = isDark();
    const style = document.getElementById('fc-theme-style') || (() => {
      const s = document.createElement('style');
      s.id = 'fc-theme-style';
      document.head.appendChild(s);
      return s;
    })();

    style.textContent = dark ? `
      .fc { --fc-border-color: #2a2d35; --fc-button-bg-color: #252830; --fc-button-border-color: #2a2d35;
        --fc-button-text-color: #e4e6eb; --fc-button-hover-bg-color: #ff0038; --fc-button-hover-border-color: #ff0038;
        --fc-button-active-bg-color: #ff0038; --fc-today-bg-color: rgba(255,0,56,0.08);
        --fc-neutral-bg-color: #1c1f26; --fc-list-event-hover-bg-color: #252830; }
      .fc-col-header-cell, .fc-daygrid-day-number { color: #8d96a4; }
      .fc-toolbar-title { color: #e4e6eb; }
    ` : `
      .fc { --fc-border-color: #e9ecef; --fc-button-bg-color: #f8f9fa; --fc-button-border-color: #e9ecef;
        --fc-button-text-color: #212529; --fc-button-hover-bg-color: #ff0038; --fc-button-hover-border-color: #ff0038;
        --fc-button-active-bg-color: #ff0038; --fc-today-bg-color: rgba(255,0,56,0.05); }
    `;
  }
});

function getRelativeDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}
