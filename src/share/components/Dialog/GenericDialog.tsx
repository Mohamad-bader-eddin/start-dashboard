import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.JSX.Element;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const GenericDialog = ({
  open,
  setOpen,
  title,
  elementContent,
  fullScreen,
}: GenericDialogProps) => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullScreen={fullScreen}
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            minWidth: "300px",
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {typeof elementContent === "string" ? (
            <DialogContentText>{elementContent}</DialogContentText>
          ) : (
            elementContent
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ marginInlineEnd: "8px" }}
          >
            {t("disagree")}
          </Button>
          <Button onClick={handleClose} variant="outlined">
            {t("agree")}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

type GenericDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  elementContent: JSX.Element | string;
  fullScreen?: boolean;
};

export default GenericDialog;
