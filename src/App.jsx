import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import ServicePage from "./routes/servicePage/ServicePage";
import EventList from "./routes/eventListPage/EventList";
import UserManagement from "./admin/routes/userManagementPage/UserManagement";
import OrderManagement from "./admin/routes/orderManagement/OrderManagement";
import AddVenuePage from "./routes/addVenuePage/AddVenuePage";
import PaymentPage from "./routes/paymentPage/PaymentPage";
import OrderPage from "./routes/orderPage/OrderPage";
import UpdateProfile from "./routes/updateProfile/UpdateProfile";
import CreateService from "./routes/createService/CreateService";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/location",
          element: <ListPage />,
        },
        {
          path: "/location/:id",
          element: <SinglePage />,
        },
        {
          path: "/event",
          element: <EventList />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/update",
          element: <UpdateProfile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/payment",
          element: <PaymentPage />,
        },
        {
          path: "/add/venue",
          element: <AddVenuePage />,
        },
        {
          path: "/add/venue/step-2",
          element: <CreateService />,
        },
        {
          path: "/admin/user",
          element: <UserManagement />,
        },
        {
          path: "/admin/order",
          element: <OrderManagement />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
