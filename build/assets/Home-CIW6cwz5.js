import{u as o,p as t,L as i,j as r,H as n,a}from"./index-Btp4t5aC.js";import{h as s}from"./heroBg-xqvqUgNj.js";const l=o.div`
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
`,d=o.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${s});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  align-items: end;
  justify-content: end;

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

  @media (min-width: 768px) {
    background-size: 100%;
    min-height: auto;
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`,c=o.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60%;
  background-color: ${e=>e.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);
`,h=o.h1`
  font-family: ${t};
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  color: ${e=>e.theme.colors.lightWhiteColor};
`,m=o.span`
  font-size: 54px;
  font-weight: 500;
  color: ${e=>e.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  &::before {
    content: "Cruise Wheels";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.colors.lightWhiteColor};
    z-index: -5;
  }
`,u=o.p`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,g=o(i)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${e=>e.theme.colors.white};
  background-color: ${e=>e.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function f(){return r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs(a,{children:[r.jsx("title",{children:"Cruise Wheels - Home Page"}),r.jsx("meta",{name:"description",content:"Unlock boundless journeys with Cruise Wheels. Rent a car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."}),r.jsx("meta",{name:"keywords",content:"car rental, adventure travel, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),r.jsx(l,{children:r.jsx(d,{children:r.jsxs(c,{children:[r.jsxs(h,{children:["Drive Your Dreams: Explore the World with"," ",r.jsx(m,{children:"Cruise Wheels"})," Rental Cars"]}),r.jsx(u,{children:"Welcome to Cruise Wheels, where every road leads to adventure. CruiseWheels is more than just a rental – it's a gateway to experiences beyond the ordinary. Cruise in style, comfort, and confidence, making every mile a story. Your unforgettable adventure begins with CruiseWheels – Your Drive, Your Experience."}),r.jsx("div",{style:{textAlign:"end"},children:r.jsx(g,{to:"catalog",children:"View or Catalog"})})]})})})]})}export{f as default};
