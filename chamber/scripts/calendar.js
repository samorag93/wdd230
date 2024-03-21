document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        {
          title: 'Meeting',
          start: '2023-03-22',
          rendering: 'background'
        }
      ],
      eventDidMount: function(info) {
        if (info.event.rendering === 'background') {
          var dayEl = info.el.closest('.fc-daygrid-day');
          if (dayEl.dataset.date.split('-')[0] % 2 === 0 && dayEl.dataset.date.split('-')[1] === '3') {
            dayEl.classList.add('meeting');
          }
        }
      }
    });
    calendar.render();
  });