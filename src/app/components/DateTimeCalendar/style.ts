import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from "styled-components";


export const CustomDateCalendarContainer = styled(LocalizationProvider)`
`

export const CustomDateCalendar = styled(DateCalendar)`
   && {
    &.MuiDateCalendar-root {
        background-color: white;
        border: 1px solid rgba(0 0 0 / 0.1);
        border-radius: 8px;
        min-height: auto;
        height: fit-content;
        width: 100%;
        margin: 0;

        .MuiPickersDay-root {
            &.Mui-selected {
               background-color: #828DD4;
            }
        }

        .MuiPickersMonth-monthButton {
            text-transform: capitalize;

            &.Mui-selected {
                background-color: #828DD4;
            }
        }

        .MuiPickersYear-yearButton {
            &.Mui-selected {
                background-color: #828DD4;
            }
        }
    }

    .MuiPickersArrowSwitcher-root {
        display: none;
    }

    .MuiYearCalendar-root {
        width: 100%;
    }

    .MuiMonthCalendar-root {
        width: 100%;
    }

    .MuiDayCalendar-root {
        height: fit-content;
    }

    .MuiDayCalendar-slideTransition {
        min-height: auto;
    }

    .MuiDayCalendar-header {
        justify-content: space-around;
    }

    .MuiPickersCalendarHeader-root {
        justify-content: center;
    }

    .MuiPickersCalendarHeader-labelContainer {
        margin-right: 0;
    }

    .MuiPickersCalendarHeader-label {
        color: #000000;
        font-size: 15px;
        line-height: 18.95px;
        text-transform: capitalize;
        margin: 0;
    }
    
    .MuiDayCalendar-weekContainer {
        margin: 0;
        justify-content: space-around;
    }

    .MuiDayCalendar-weekDayLabel {
        font-family: 'Oxygen';
        font-weight: 700;
        font-size: 15px;
        color: #000000;
    }
   }
`