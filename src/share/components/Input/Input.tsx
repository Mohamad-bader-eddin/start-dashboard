import { Box, TextField, ThemeProvider, createTheme } from "@mui/material";
import { InputMargin } from "../../constants";
import { FormikProps } from "formik";
import { useDarkMode } from "../../../context/DarkMode";

const Input = <T extends Record<string, unknown>>({
  formik,
  label,
  name,
  type,
}: InputProps<T>) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ mb: InputMargin }}>
        <TextField
          error={Boolean(formik.touched[name] && formik.errors[name])}
          label={label}
          name={name}
          type={type ? type : "text"}
          onChange={formik.handleChange}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched[name] && formik.errors[name] ? (
              <>{formik.errors[name]}</>
            ) : null
          }
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Box>
    </ThemeProvider>
  );
};

type InputProps<T> = {
  formik: FormikProps<T>;
  label: string;
  name: string;
  type?: "text" | "email";
};

export default Input;
