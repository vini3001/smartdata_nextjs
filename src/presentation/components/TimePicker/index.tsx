import { useState } from 'react';
import { Container, ContainerArrows, CustomButton, CustomDateTimePicker } from './style'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ManualMinuteUpdater() {
  const [currentTime, setCurrentTime] = useState(dayjs());

  const addOneMinute = () => {
    setCurrentTime((prevTime) => prevTime.add(1, 'minute'));
  };

  const removeOneMinute = () => {
    setCurrentTime((prevTime) => prevTime.subtract(1, 'minute'));
  };

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='time-container'>
          <CustomDateTimePicker disableOpenPicker value={currentTime} 
          onChange={(newValue) => newValue !== null && setCurrentTime(newValue)} sx={{ fontFamily: 'Oxygen', fontWeight: '300', fontSize: '14px'}} />
        </div>
      </LocalizationProvider>
      <ContainerArrows>
        <CustomButton onClick={addOneMinute}>
          <img style={{height: '12px', width: '12px'}} src="/src/presentation/assets/Schedule/button-up-icon.svg" />
        </CustomButton>
        <CustomButton onClick={removeOneMinute}>
          <img style={{height: '12px', width: '12px'}} src="/src/presentation/assets/Schedule/button-down-icon.svg" />
        </CustomButton>
      </ContainerArrows>
    </Container>
  );
};