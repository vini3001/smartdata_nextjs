import { DesktopDatePicker, PickersLayout } from "@mui/x-date-pickers";
import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   color: #525252;

   .text-container {
        position: absolute;
        font-weight: 400;
        top: 0.6rem;
        left: 0;
  }
`

export const CustomDateTimePickerContainerStandard  = styled(DesktopDatePicker)`
  && {
    &&.MuiFormControl-root {
        width: 100%;
    }

    .MuiInputBase-root {
        justify-content: end;
    }

    .MuiInputBase-input {
        font-family: 'Oxygen';
        font-weight: 700;
        font-size: 20px;
        color: #828DD4;
        padding-left: 0.4rem;
        width: 75%;
    }
  }
`
export const CustomDateTimePickerContainerFilled  = styled(DesktopDatePicker)`
  && {
    &&.MuiFormControl-root {
        width: 100%;
    }

    .MuiInputBase-root {
        border-radius: 8px;
        height: 40px;
        justify-content: space-between;
        background-color: ${(props) => props.theme.colors.background};
    }

    .MuiFilledInput-root {
        border-color: #DCDCDC;
    }

    .MuiInputBase-input {
        font-family: 'Oxygen';
        width: 75%;
    }
  }
`

export const styles = styled(PickersLayout)`
    && {
        .MuiDateCalendar-root {
            background-color: white;
            border: 1px solid rgba(0 0 0 / 0.1);
            border-radius: 8px;
            min-height: auto;
            height: fit-content;
            width: 420px;
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

    .MuiDayCalendar-root {
        height: fit-content;
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

    .MuiYearCalendar-root {
        width: 100%;
    }

    .MuiMonthCalendar-root {
        width: 100%;
    }

    .MuiDayCalendar-weekDayLabel {
        font-family: 'Oxygen';
        font-weight: 700;
        font-size: 15px;
        color: #000000;
    }
   }
`