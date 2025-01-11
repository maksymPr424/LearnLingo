import { enqueueSnackbar, MaterialDesignContent } from "notistack";
import { styled } from "@mui/material";

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "var(--active-green)",
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: "var(--error)",
    },
    "&.notistack-MuiContent-info": {
      backgroundColor: "var(--info)",
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: "var(--accent)",
    },
  })
);

export const createNewPush = ({ message, type }) => {
  enqueueSnackbar(message, {
    variant: type, // 'success', 'error', 'info', 'warning'
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};
