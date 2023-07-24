import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("current", store.getState());
  next(action);
};

export default logger;
