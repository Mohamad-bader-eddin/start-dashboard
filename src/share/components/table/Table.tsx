import { Box, ThemeProvider, createTheme, Typography } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import LoadingSkeleton from "./LoadingSkeleton";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Table = ({ rows, columns, title, totalCount, ...props }: TableType) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant="h5" sx={{ marginBottom: "15px" }}>
        {title ? title : ""} {totalCount ? ` - ${totalCount}` : ""}
      </Typography>
      <Box
        sx={{
          height: "500px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: CustomToolbar,
            loadingOverlay: LoadingSkeleton,
          }}
          sx={{
            direction: "ltr",
            ".css-wop1k0-MuiDataGrid-footerContainer,.css-128fb87-MuiDataGrid-toolbarContainer":
              { direction: "ltr" },
          }}
          {...props}
        />
      </Box>
    </ThemeProvider>
  );
};

type HeadType = {
  title?: string;
  totalCount?: number;
};

export type TableType = HeadType & {
  rows: GridRowsProp;
  columns: GridColDef[];
};

export default Table;
