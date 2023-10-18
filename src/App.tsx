import { useEffect, useState } from "react";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { CssBaseline, Stack } from "@mui/material";
import { languages } from "./languages/languages";
import jsCookie from "js-cookie";
import { useTranslation } from "react-i18next";
import { Routes as RoutesLogin, Route, useLocation } from "react-router-dom";
import Login from "./pages/login/container/Login";
import Unauthorized from "./pages/login/views/unauthorized/Unauthorized";
import { theme } from "./share/utils/theme";
import { DarkModeProvider } from "./context/DarkMode";
import Sidebar from "./share/components/sidebar/Sidebar";
import Navbar from "./share/components/navbar/Navbar";
import MainLayout from "./share/components/mainLayout/MainLayout";

function App() {
  const currentLanguageCode = jsCookie.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [openSidebar, setOpenSidebar] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = t("app_title");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);
  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>
        <CssBaseline />
        {location.pathname === "/login" ||
        location.pathname === "/unauthorized" ? (
          <RoutesLogin>
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </RoutesLogin>
        ) : (
          <Stack direction={"row"}>
            <Sidebar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            <MainLayout isOpenSidebar={openSidebar}>
              <Navbar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
              <Routes />
            </MainLayout>
          </Stack>
        )}
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
