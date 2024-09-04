"use client"
import MainPage from "@/components/mainPage";
import { store } from "@/redux/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
    <Provider store={store}>
    <MainPage/>
    </Provider>
    </>
  );
}
