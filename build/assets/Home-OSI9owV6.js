import{u as r,p as s,L as c,G as l,j as t,H as d,a as m}from"./index-CRsV7v_g.js";import{h}from"./heroBg-xqvqUgNj.js";const p=r.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`,x=r.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${h});
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
    align-items: end;
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
`,u=r.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  margin-bottom: 4.8rem;
  width: 60rem;
  height: 100%;

  background-color: ${e=>e.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    margin-bottom: 0;
    /* width: 82.6rem; */
  }

  @media (min-width: 1440px) {
    width: 82.6rem;
  }
`,g=r.h1`
  font-family: ${s};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: ${e=>e.theme.colors.lightWhiteColor};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`,f=r.span`
  font-size: 24px;
  font-weight: 500;
  color: ${e=>e.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 54px;
  }
`,v=r.p`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${s};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,w=r(c)`
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
`;function b(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0049 13.0029C13.6617 13.0029 15.0049 14.3461 15.0049 16.0029C15.0049 16.8521 14.6521 17.6188 14.0851 18.1646L12.175 20.0025L15.0049 20.0029V22.0029H9.00488L9.00398 20.2785L12.6983 16.7235C12.8874 16.5413 13.0049 16.2858 13.0049 16.0029C13.0049 15.4506 12.5572 15.0029 12.0049 15.0029C11.4526 15.0029 11.0049 15.4506 11.0049 16.0029H9.00488C9.00488 14.3461 10.348 13.0029 12.0049 13.0029ZM18.0049 13.0029V17.0029H20.0049V13.0029H22.0049V22.0029H20.0049V19.0029H16.0049V13.0029H18.0049ZM4.00488 12.0029C4.00488 14.5295 5.17612 16.7825 7.00527 18.2486L7.0049 20.6651C4.01588 18.9361 2.00488 15.7043 2.00488 12.0029H4.00488ZM12.0049 2.00293C17.1902 2.00293 21.4537 5.94955 21.9555 11.0028L19.943 11.003C19.4509 7.05664 16.0845 4.00293 12.0049 4.00293C9.2551 4.00293 6.82935 5.39027 5.3894 7.50317L8.00488 7.50293V9.50293H2.00488V3.50293H4.00488L4.00477 6.00211C5.82922 3.57368 8.73362 2.00293 12.0049 2.00293Z"},child:[]}]})(e)}function j(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)}function C(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"},child:[]}]})(e)}function y(e){return l({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.658 4.91l-1.58-1.58c-0.387-0.387-1.021-1.021-1.409-1.409l-1.58-1.58c-0.387-0.387-1.077-0.456-1.533-0.152l-4.319 2.88c-0.456 0.304-0.628 0.954-0.383 1.444l1.101 2.203c0.034 0.067 0.073 0.139 0.115 0.213l-5.571 5.571-0.5 3.5h3v-1h2v-2h2v-2h2v-1.112c0.1 0.060 0.196 0.113 0.284 0.157l2.203 1.101c0.49 0.245 1.14 0.072 1.444-0.383l2.88-4.319c0.304-0.456 0.236-1.146-0.152-1.533zM2.354 13.354l-0.707-0.707 4.868-4.868 0.707 0.707-4.868 4.868zM14.328 6.621l-0.707 0.707c-0.194 0.194-0.513 0.194-0.707 0l-4.243-4.243c-0.194-0.194-0.194-0.513 0-0.707l0.707-0.707c0.194-0.194 0.513-0.194 0.707 0l4.243 4.243c0.194 0.194 0.194 0.513 0 0.707z"},child:[]}]})(e)}const z=r.div`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`,H=r.ul`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`,o=r.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 4.8rem 2.4rem;
  border-radius: 1.4rem;
  position: relative;
  background-color: ${e=>e.theme.colors.headerBgColor};
  max-width: 36.5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-bottom: 1px solid ${e=>e.theme.colors.mainBgColorReverse};

  @media (min-width: 1440px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`,i=r.h3`
  font-family: ${s};
  font-weight: 500;
  font-size: 22px;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainTextColor};
`,n=r.p`
  font-family: ${s};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainTextColor};
`,a=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${e=>e.theme.colors.mainBgColor};

  position: absolute;
  top: -3.2rem;
  left: 50%;

  border-bottom: 1px solid ${e=>e.theme.colors.mainBgColorReverse};

  transform: translateX(-50%);
`,$=r(b)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,k=r(j)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,L=r(C)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,W=r(y)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`;function M(){return t.jsx(z,{children:t.jsxs(H,{children:[t.jsxs(o,{children:[t.jsx(a,{children:t.jsx($,{})}),t.jsx(i,{children:"24/7 Customer Service"}),t.jsx(n,{children:"Our customer service team is available around the clock to assist you with your rental car needs."})]}),t.jsxs(o,{children:[t.jsx(a,{children:t.jsx(k,{})}),t.jsx(i,{children:"Convenient Locations"}),t.jsx(n,{children:"We have rental car locations conveniently situated all around the US for easy access."})]}),t.jsxs(o,{children:[t.jsx(a,{children:t.jsx(L,{})}),t.jsx(i,{children:"Trusted Since 1980"}),t.jsx(n,{children:"With a rich history dating back to 1980, we take pride in being a trusted name in the rental car industry."})]}),t.jsxs(o,{children:[t.jsx(a,{children:t.jsx(W,{})}),t.jsx(i,{children:"Flexible Rental Options"}),t.jsx(n,{children:"Choose from a variety of rental options to fit your needs, whether it's a short trip or a long-term rental."})]})]})})}function I(){return t.jsxs(t.Fragment,{children:[t.jsx(d,{children:t.jsxs(m,{children:[t.jsx("title",{children:"Cruise Wheels - Home Page"}),t.jsx("meta",{name:"description",content:"Unlock boundless journeys with Cruise Wheels. Rent a car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."}),t.jsx("meta",{name:"keywords",content:"car rental, adventure travel, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),t.jsxs(p,{children:[t.jsx(x,{children:t.jsxs(u,{children:[t.jsxs(g,{children:["Drive Your Dreams: Explore the World with"," ",t.jsx(f,{children:"Cruise Wheels"})," Rental Cars"]}),t.jsx(v,{children:"Welcome to Cruise Wheels, where every road leads to adventure. CruiseWheels is more than just a rental – it's a gateway to experiences beyond the ordinary. Cruise in style, comfort, and confidence, making every mile a story. Your unforgettable adventure begins with CruiseWheels – Your Drive, Your Experience."}),t.jsx("div",{style:{textAlign:"end"},children:t.jsx(w,{to:"catalog",children:"View our Catalog"})})]})}),t.jsx(M,{})]})]})}export{I as default};
