import { Product, FooterBanner, HeroBanner } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Beset selling products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className="products-container">
        {["Product1", "Product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
