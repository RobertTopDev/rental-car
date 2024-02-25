import { PrivacyContainer, PrivacyWrapper } from "../Privacy/Privacy.styled";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Terms() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Terms and Conditions</title>
          <meta
            name="description"
            content="Review Cruise Wheels' Terms and Conditions for a comprehensive understanding of our services and user agreements. Navigate confidently with clarity on our terms for car rentals and adventure experiences."
          />
          <meta
            name="keywords"
            content="terms and conditions, user agreements, Cruise Wheels, car rental terms, adventure experiences"
          />
        </Helmet>
      </HelmetProvider>

      <PrivacyContainer>
        <PrivacyWrapper>
          <span>Terms</span>
        </PrivacyWrapper>
      </PrivacyContainer>
    </>
  );
}

export default Terms;
