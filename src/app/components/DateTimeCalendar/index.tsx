import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CustomDateCalendar, CustomDateCalendarContainer } from './style';
import 'dayjs/locale/pt';

export default function DateCalendarCustom(){

  return (
      <CustomDateCalendarContainer dateAdapter={AdapterDayjs} adapterLocale='pt'>
          <CustomDateCalendar
            slotProps={{calendarHeader: {format: 'MMMM / YYYY'}}}
            dayOfWeekFormatter={(prop) => `${prop.format('ddd').charAt(0).toUpperCase() + prop.format('ddd').slice(1)}`}
            views={['year', 'month', 'day']}
            />
      </CustomDateCalendarContainer>
  );
}