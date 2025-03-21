import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";

// Styled Search Box
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

export default function Navbar({ open, handleDrawerToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section: Menu & Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" onClick={handleDrawerToggle} edge="start" sx={{ marginRight: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Website Name
          </Typography>
        </Box>

        {/* Right Section: Search, Notification, Profile, Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Search Box */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>

          {/* Notification Icon */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          {/* Profile Icon */}
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>

          {/* Three Dots Menu */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            <MenuItem onClick={handleMenuClose}>Theme Change</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
