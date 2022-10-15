import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./utilts/getData";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
