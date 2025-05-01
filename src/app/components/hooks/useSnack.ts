import { enqueueSnackbar, SnackbarMessage, useSnackbar } from 'notistack'


const useSnack = () => {
  const { enqueueSnackbar } = useSnackbar()

  const openSnack = (msg: SnackbarMessage, variant: "default" | "error" | "success" | "warning" | "info" | undefined) => {
    return enqueueSnackbar(
      variant === 'error' ? msg!.toString().replace(/TRPCClientError: |ApolloError: /, '') : msg,
      {  
        variant,
      }
    )
  }

  return openSnack
}

export default useSnack
