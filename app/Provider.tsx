'use client'; // This directive is the key!

import { Provider } from "react-redux";
import { store } from "@/Store/store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}