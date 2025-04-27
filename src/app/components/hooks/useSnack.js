import { useSnackbar } from 'notistack'

const useSnack = () => {
  const { enqueueSnackbar } = useSnackbar()

  const openSnack = (msg, variant) =>
    enqueueSnackbar(
      variant === 'error' ? msg.toString().replace(/TRPCClientError: |ApolloError: /, '') : msg,
      {
        variant,
      }
    )

  return openSnack
}

export default useSnack
