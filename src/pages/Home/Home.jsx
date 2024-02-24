import {
  HeroWrapper,
  HomeContainer,
  HeroTextWrapper,
  CatalogBtn,
  HeroTitle,
  HeroText,
  HeroTitleSpan,
} from "./Home.styled";

function Home() {
  return (
    <HomeContainer>
      <HeroWrapper>
        <HeroTextWrapper>
          <HeroTitle>
            Drive Your Dreams: Explore the World with{" "}
            <HeroTitleSpan>Cruise Wheels</HeroTitleSpan> Rental Cars
          </HeroTitle>
          <HeroText>
            Welcome to Cruise Wheels, where every road leads to adventure.
            CruiseWheels is more than just a rental – it's a gateway to
            experiences beyond the ordinary. Cruise in style, comfort, and
            confidence, making every mile a story. Your unforgettable adventure
            begins with CruiseWheels – Your Drive, Your Experience.
          </HeroText>
          <div style={{ textAlign: "end" }}>
            <CatalogBtn to="catalog">View or Catalog</CatalogBtn>
          </div>
        </HeroTextWrapper>
      </HeroWrapper>
    </HomeContainer>
  );
}

export default Home;
