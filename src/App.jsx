import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Error,
  Login,
  DashboardLayout,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob/>
          },
          {
            path: 'stats',
            element: <Stats/>
          },
          {
            path: 'all-jobs',
            element: <AllJobs/>
          },
          {
            path: 'profile',
            element: <Profile/>
          },
          {
            path: 'admin',
            element: <Admin/>
          }
        ]
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
