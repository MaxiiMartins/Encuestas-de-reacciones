import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import NotFound from "./pages/NotFound.jsx";
import ContextLayout from "./context/ContextLayout";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <>
//           <Home />
//         </>
//         ,
//       },
//       {
//         path: "/generador",
//         element: <Generator />,
//       },

//     ],
//   },
// ]);

export const router = createBrowserRouter(createRoutesFromElements(
  <Route
    element={<ContextLayout />}
  >
    <Route element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/generador" element={<Generator />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))