import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Profile from "./views/admin/profile";
import CallCenter from "./views/admin/callCenter";
import Warhouse from "./views/admin/warHouse";
import NewOrder from "./views/admin/newOrder";
import AllOrder from "./views/admin/allOrder";
import DeliverOrder from "./views/admin/deliverOrder";
import NotDeliverOrder from "./views/admin/notDeliveredOrder";
import AvailableStock from "./views/admin/availableStock";

// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import { FcAssistant ,FcHome,FcFactory,FcUnlock,FcBusinessman} from "react-icons/fc";

const routes = [
  {
    name: "Main Dashboard",
    navBarName:"Main Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <FcHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Call Center",
    navBarName:"Call Center",
    layout: "/admin",
    path: "call-center",
    icon: <FcAssistant className="h-6 w-6" />,
    component: <CallCenter />,
    secondary: true,
  },
  {
    name: "Warhaouse",
    navBarName:"Warhaouse",
    layout: "/admin",
    icon: <FcFactory className="h-6 w-6" />,
    path: "war-house",
    component: <Warhouse />,
  },
  {
    name: "Profile",
    navBarName:"Profile",
    layout: "/admin",
    path: "profile",
    icon: <FcBusinessman className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    layout: "/admin",
    navBarName:"New Order",
    path: "new-order",
    component: <NewOrder />,
  },
  {
    layout: "/admin",
    navBarName:"All Order",
    path: "all-order",
    component: <AllOrder />,
  },
  {
    layout: "/admin",
    navBarName:"Deliver Order",
    path: "deliver-order",
    component: <DeliverOrder />,
  },
  {
    layout: "/admin",
    navBarName:"Not Delivered Order",
    path: "not-delivered-order",
    component: <NotDeliverOrder />,
  },
  {
    layout: "/admin",
    navBarName:"Available Stock",
    path: "available-stock",
    component: <AvailableStock />,
  },
  {
    name: "Log out",
    layout: "/auth",
    path: "sign-in",
    icon: <FcUnlock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
