import { enqueueSnackbar } from "notistack";

export const createNewPush = ({ message, type }) => {
  enqueueSnackbar(message, {
    variant: type, // 'success', 'error', 'info', 'warning'
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};
