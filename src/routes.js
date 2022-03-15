import Home from "./navigationPage/Home";
import Login from "./navigationPage/Login";
import Prouduct from "./navigationPage/Prouduct";
import Services from "./navigationPage/Services";
import { HOME_PAGE, LOGIN_PAGE, PRODUCT_PAGE, SERVICES_PAGE } from "./utils/const";

export const privateRoutes = [
  { path: HOME_PAGE, element: Home },
  { path: PRODUCT_PAGE, element: Prouduct },
  { path: SERVICES_PAGE, element: Services },
  { path: '*', element: Home },
]
export const publicRoutes = [
  { path: LOGIN_PAGE, element: Login },
  { path: '*', element: Login },
]