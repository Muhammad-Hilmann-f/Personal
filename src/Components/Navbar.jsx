/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  VscHome,
  VscTools,
  VscProject,
  VscSettingsGear,
} from "react-icons/vsc";
import Dock from "../blocks/Components/Dock/Dock";

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      icon: <VscHome size={18} color="white" />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <VscTools size={18} color="white" />,
      label: "Skills",
      onClick: () => navigate("/Skills"),
    },
    {
      icon: <VscProject size={18} color="white" />,
      label: "Projects",
      onClick: () => navigate("/Projects"),
    },
    {
      icon: <VscSettingsGear size={18} color="white" />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navbar;
