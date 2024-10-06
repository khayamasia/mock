import { theme } from "@/Theme";
import { styled, useMediaQuery } from "@mui/material";
import { Toolbar, Box, Button } from "@mui/material";

export const useNavbar = () => {
  // Define the types for the styled components
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  });

  const StyledBox = styled(Box)(({ theme }) => ({
    display: "none",
    marginTop: "15px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  }));

  const StyledButtonNav = styled(Button)(({ theme }) => ({
    border: 0,
    alignItems: "center",
    fontSize: "16px",
    padding: "0",
    // marginRight: "1rem",
    // color: theme.palette.secondary.main,
    "& .MuiButton-startIcon": {},
  }));

  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return {
    biggerThanMd,
  };
};
