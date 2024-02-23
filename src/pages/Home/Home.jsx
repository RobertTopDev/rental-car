import { Link } from "react-router-dom";
import {
  HeroWrapper,
  HomeContainer,
  HeroTextWrapper,
  CatalogBtn,
} from "./Home.styled";

function Home() {
  return (
    <HomeContainer>
      <HeroWrapper>
        <HeroTextWrapper>
          <h1>welcome to our car rental website</h1>
          <div>
            <CatalogBtn>
              <Link to="catalog">catalog</Link>
            </CatalogBtn>
            <Link to="favorites">favorites</Link>
          </div>
        </HeroTextWrapper>
      </HeroWrapper>
    </HomeContainer>
  );
}

export default Home;
