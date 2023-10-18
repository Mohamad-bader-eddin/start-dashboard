import { Route, Routes as AppRotes } from "react-router-dom";
import HomeContainer from "../pages/home/container/HomeContainer";
import RequireAuth from "../auth/RequireAuth";
import PendingOrdersContainer from "../pages/orders/views/pendingOrders/container/PendingOrdersContainer";
import TrackOrders from "../pages/orders/container/TrackOrders";
import InfoOrder from "../pages/orders/container/InfoOrder";
import Clietntinfo from "../pages/users/views/clients/view/Clietntinfo";
import ActiveOrdersContainer from "../pages/orders/views/activeOrders/container/ActiveOrdersContainer";
import ArrivedOrdersContainer from "../pages/orders/views/arrivedOrders/container/ArrivedOrdersContainer";
import CanceledOrdersContainer from "../pages/orders/views/canceledOrders/container/CanceledOrdersContainer";
import ScheduleOrdersContainer from "../pages/orders/views/scheduleOrders/container/ScheduleOrdersContainer";
import CourierOnDemandContainer from "../pages/createNewOrder/views/courierOnDemand/container/CourierOnDemandContainer";
import P2pContainer from "../pages/createNewOrder/views/p2p/container/P2pContainer";

const Routes = () => {
  return (
    <AppRotes>
      <Route
        path="/"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <HomeContainer />
          </RequireAuth>
        }
      />
      <Route
        path="/orders/pending-orders"
        element={<PendingOrdersContainer />}
      />
      <Route path="/orders/track-order/:type" element={<TrackOrders />} />
      <Route path="/orders/info-orders/:type" element={<InfoOrder />} />
      <Route path="/orders/active-orders" element={<ActiveOrdersContainer />} />
      <Route
        path="/orders/arrived-orders"
        element={<ArrivedOrdersContainer />}
      />
      <Route
        path="/orders/canceled-orders"
        element={<CanceledOrdersContainer />}
      />
      <Route
        path="/orders/scheduled-orders"
        element={<ScheduleOrdersContainer />}
      />
      <Route
        path="/orders/scheduled-orders"
        element={<ScheduleOrdersContainer />}
      />
      <Route
        path="/create-new-order/courier-on-demand"
        element={<CourierOnDemandContainer />}
      />
      <Route path="/create-new-order/p2p" element={<P2pContainer />} />
      <Route path="/users/clients/:id" element={<Clietntinfo />} />
    </AppRotes>
  );
};

export default Routes;
