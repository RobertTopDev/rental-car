import{u as r,p as t,L as o,j as e,H as n,a}from"./index-DDd1WRLG.js";import{h as s}from"./heroBg-xqvqUgNj.js";const d=r.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`,l=r.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${s});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 620px) {
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
    justify-content: end;
  }

  @media (min-width: 1440px) {
    padding: 3.2rem;

    align-items: end;
    justify-content: end;
  }
`,c=r.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60rem;
  height: 100%;

  background-color: ${i=>i.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  @media (min-width: 1440px) {
    width: 82.6rem;
  }

  @media (min-width: 1440px) {
    width: 82.6rem;
  }
`,m=r.h1`
  font-family: ${t};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: ${i=>i.theme.colors.lightWhiteColor};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`,h=r.span`
  font-size: 24px;
  font-weight: 500;
  color: ${i=>i.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 54px;
  }
`,p=r.p`
  color: ${i=>i.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,u=r(o)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${i=>i.theme.colors.white};
  background-color: ${i=>i.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${i=>i.theme.colors.accentColorHover};
  }
`;function f(){return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx("title",{children:"Cruise Wheels - Home Page"}),e.jsx("meta",{name:"description",content:"Unlock boundless journeys with Cruise Wheels. Rent a car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."}),e.jsx("meta",{name:"keywords",content:"car rental, adventure travel, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),e.jsx(d,{children:e.jsx(l,{children:e.jsxs(c,{children:[e.jsxs(m,{children:["Drive Your Dreams: Explore the World with"," ",e.jsx(h,{children:"Cruise Wheels"})," Rental Cars"]}),e.jsx(p,{children:"Welcome to Cruise Wheels, where every road leads to adventure. CruiseWheels is more than just a rental – it's a gateway to experiences beyond the ordinary. Cruise in style, comfort, and confidence, making every mile a story. Your unforgettable adventure begins with CruiseWheels – Your Drive, Your Experience."}),e.jsx("div",{style:{textAlign:"end"},children:e.jsx(u,{to:"catalog",children:"View our Catalog"})})]})})})]})}export{f as default};
