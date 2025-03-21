import { useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";

// Imported Components
import Navbar from "./Header";
import Sidebar from "./Sidebar";

// Imported Pages
import DashboardView from "../../pages/teacher/dashboard";
import AssignmentView from "../../pages/teacher/assignments";
import StudentInsightsView from "../../pages/teacher/student_insights";
import CommunicationsView from "../../pages/teacher/communication";
import SettingsView from "../../pages/teacher/settings";

export default function Layout() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuItems = [
    { name: "Dashboard", component: <DashboardView /> },
    { name: "Assignments", component: <AssignmentView/> },
    { name: "Student Insights", component: <StudentInsightsView/> },
    { name: "Communication", component:<CommunicationsView/> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar open={open} setSelectedMenu={setSelectedMenu} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {selectedMenu === "Settings" ? <SettingsView/> : 
        menuItems.find((item) => item.name === selectedMenu)?.component}
      </Box>
    </Box>
  );
}
