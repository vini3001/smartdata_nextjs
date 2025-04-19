import { useState } from 'react'

import Popover from '@mui/material/Popover'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// import useSnack from './useSnack'

const StyledText = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'inline-block',
}))

const StyledYes = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  margin: theme.spacing(2),
  marginLeft: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

const useConfirm = (submit: any) => {
  // const openSnack = useSnack()
  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)

  const toogle = (elem: any) => setAnchor(elem || null)

  const run = () => {
    toogle(null)
    submit()
    // .then(() => openSnack('Sucesso!', 'success'))
    // .catch(error => openSnack(error, 'error'))
  }

  const popover = (
    <Popover
      anchorEl={anchor}
      open={open}
      onClose={() => toogle(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{mt: -2}}
    >
      <StyledText variant='subtitle1'>Confirmar Exclusão?</StyledText>
      <StyledYes variant='h6' color='primary' onClick={run}>
        Sim
      </StyledYes>
    </Popover>
  )

  return [toogle, popover]
}

export default useConfirm
