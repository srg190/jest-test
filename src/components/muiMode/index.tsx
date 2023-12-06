import { Typography, useTheme } from "@mui/material";

const Mode = () => {
  const theme = useTheme();
  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>;
};
export default Mode;
