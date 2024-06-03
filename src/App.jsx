import Navigation from "./components/Navigation";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscription,
  SuperQuality,
} from "./sections";

export default () => {
  return (
    <>
      <header className="max-container">
        <Navigation />
      </header>
      <main className="relative">
        <section className="max-container padding-b xl:padding-x">
          <Hero />
        </section>
        <section className="max-container padding-b">
          <PopularProducts />
        </section>
        <section className="max-container padding-b">
          <SuperQuality />
        </section>
        <section className="max-container padding-b">
          <Services />
        </section>
        <section className="max-container padding-b">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding-b">
          <CustomerReviews />
        </section>
        <section className="max-container padding-b">
          <Subscription />
        </section>
      </main>
      <footer className="bg-black padding-b">
        <Footer />
      </footer>
    </>
  );
};
