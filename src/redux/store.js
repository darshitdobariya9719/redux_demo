import { createStore } from "redux";
import createReducer from "./redusers";

const store = createStore(
    createReducer(),
);

export { store};
