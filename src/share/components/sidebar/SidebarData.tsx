import HouseIcon from "@mui/icons-material/House";
import StyleIcon from "@mui/icons-material/Style";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const SidebarData = [
  {
    title: "dashboard",
    path: "/",
    icon: <HouseIcon />,
  },
  {
    title: "orders",
    path: "/orders",
    icon: <StyleIcon />,
    subNav: [
      {
        title: "pending_orders",
        path: "/orders/pending-orders",
      },
      {
        title: "active_orders",
        path: "/orders/active-orders",
      },
      {
        title: "arrived_orders",
        path: "/orders/arrived-orders",
      },
      {
        title: "canceled_orders",
        path: "/orders/canceled-orders",
      },
      {
        title: "scheduled_orders",
        path: "/orders/scheduled-orders",
      },
    ],
  },
  {
    title: "create_new_order",
    path: "/create-new-order",
    icon: <AddCircleIcon />,
    subNav: [
      {
        title: "courier_on_demand",
        path: "/create-new-order/courier-on-demand",
      },
      {
        title: "P2P",
        path: "/create-new-order/p2p",
      },
    ],
  },
];
