import React from "react";
import { useRoutes } from "react-router-dom";

const ProductList = React.lazy(() => import("./pages/ProductList/productList"));

const routesList = () => [{ path: "", element: <ProductList /> }];
function AppRoutes() {
  const routes = useRoutes(routesList());
  return routes;
}

export default AppRoutes;
