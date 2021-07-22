import { Router } from "express";
import BarnsEndpoints from "./barns";
import LogsEndpoints from "./logs";

interface RouteType {
  route: string,
  endpoints: Router,
}

type RoutesAvailableType = 'barns' | 'logs';

const routes: { [key in RoutesAvailableType]: RouteType } = {
  barns: {
    route: '/barns',
    endpoints: BarnsEndpoints,
  },
  logs: {
    route: '/logs',
    endpoints: LogsEndpoints,
  }
};

export default routes;