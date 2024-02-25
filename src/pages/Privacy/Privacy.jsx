import { PrivacyContainer, PrivacyWrapper } from "./Privacy.styled";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Privacy() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Explore the Catalog</title>
          <meta
            name="description"
            content="Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."
          />
          <meta
            name="keywords"
            content="car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <PrivacyContainer>
        <PrivacyWrapper>
          <span>Privacy</span>
        </PrivacyWrapper>
      </PrivacyContainer>
    </>
  );
}

export default Privacy;
