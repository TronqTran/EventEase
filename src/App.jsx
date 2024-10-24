import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserManagement from "./admin/routes/userManagementPage/UserManagement";
import OrderManagement from "./admin/routes/orderManagement/OrderManagement";
import BookingForm from "./routes/bookingForm/BookingForm";
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
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        },
        {
          path: "/booking",
          element: <BookingForm />,
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

  return <RouterProvider router={router} />;
}

export default App;
