import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Tooltip } from "@mui/material";

// MUI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsightsIcon from "@mui/icons-material/Insights";
import CommentIcon from "@mui/icons-material/Comment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ open, setSelectedMenu }) => {
  const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Assignments", icon: <AssignmentIcon /> },
    { name: "Communication", icon: <CommentIcon /> },
    { name: "Student Insights", icon: <InsightsIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 56,
        flexShrink: 10,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 56,
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
        },
      }}
      open={open}
    >
      <DrawerHeader />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setSelectedMenu(item.name)}
              sx={{ justifyContent: open ? "initial" : "center" }}
            >
              <Tooltip title={!open ? item.name : ""} placement="right">
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => setSelectedMenu("Settings")}
            sx={{ justifyContent: open ? "initial" : "center" }}
          >
            <Tooltip title={!open ? "Settings" : ""} placement="right">
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
