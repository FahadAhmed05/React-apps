import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui-Slice";
import cartSlice from "./Cart-Slice";

const store = configureStore({
    reducer: { ui: UiSlice.reducer, cart: cartSlice.reducer }
});

export default store