import { Navbar } from "../components/first/Navbar/Navbar";
import { Product } from "../components/first/Product/Product";
import { Details } from "../components/first/Details/Details";
import { Extras } from "../components/first/Extras/Extras";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Details />
      <Extras />
    </>
  );
};
