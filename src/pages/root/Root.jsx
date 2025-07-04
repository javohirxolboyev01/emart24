import React, { lazy } from "react";
import { Suspense } from "@/utilist/index";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollTop/ScrollTop";
const ProductDetailes = lazy(() => import("../productDetaile/ProductDetailes"));
const Layout = lazy(() => import("@/components/Layout/Layout"));
const Home = lazy(() => import("../Home/Home"));
const Shop = lazy(() => import("../Shop/Shop"));
const About = lazy(() => import("../About/About"));
const Wishlist = lazy(() => import("../Wishlist/Wishlist"));
const Cart = lazy(() => import("../cartCheck/Cart"));
const NotFound = lazy(() => import("../NoteFoun/NoteFound"));
const Contact = lazy(() => import("../Contact/Contact"));
const Checkout = lazy(() => import("../Checkout/Checkout"));
const Root = () => {
  return (
    <>
      <ScrollToTop />
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: (
                <Suspense>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: "/shop",
              element: (
                <Suspense>
                  {" "}
                  <Shop />
                </Suspense>
              ),
            },
            {
              path: "/about",
              element: (
                <Suspense>
                  <About />
                </Suspense>
              ),
            },
            {
              path: "/contact",
              element: (
                <Suspense>
                  <Contact />{" "}
                </Suspense>
              ),
            },
            {
              path: "/product/:id",
              element: (
                <Suspense>
                  <ProductDetailes />
                </Suspense>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <Suspense>
                  <Wishlist />
                </Suspense>
              ),
            },
            {
              path: "/cart",
              element: (
                <Suspense>
                  <Cart />
                </Suspense>
              ),
            },
            {
              path: "chek",
              element: (
                <Suspense>
                  <Checkout />
                </Suspense>
              ),
            },
            {
              path: "*",
              element: (
                <Suspense>
                  {" "}
                  <NotFound />{" "}
                </Suspense>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default Root;
