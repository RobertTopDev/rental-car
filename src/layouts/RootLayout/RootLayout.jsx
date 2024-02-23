import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ toggleTheme }) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
