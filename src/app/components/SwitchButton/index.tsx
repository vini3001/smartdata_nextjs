import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { Controller, useForm } from 'react-hook-form';


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(calc(100% - 4px))',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(calc(100% - 4px))',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#828DD4',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: '100%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '99999px',
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

interface CustomSwitchProps {
  props: SwitchProps
  handleState?: (value: boolean) => void
  customControl: any
}

export default function CustomSwitchButton({props, handleState, customControl}: CustomSwitchProps) {
  const {control} = useForm()

  return (
    <Controller
      name={props.name ?? ''}
      control={customControl ? customControl : control}
      defaultValue={[]}
      render={({ field }) => {
        function handleSetAtivo(event: React.ChangeEvent<HTMLInputElement>) {
          field.onChange(event.target.checked)
          handleState && handleState(event.target.checked)
        }

        return (
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <AntSwitch {...props} onChange={handleSetAtivo} inputProps={{ 'aria-label': 'ant design' }} />
          </Stack>
        )
      }}
    />
  );
}