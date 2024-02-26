import{u as i,p as l,r as s,b as p,h as g,j as e,H as u,a as f,f as x}from"./index-BSlj1cPm.js";import{C as v,v as y}from"./v4-DKglgBCa.js";import{h as j}from"./heroBg-xqvqUgNj.js";const w=i.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,b=i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  height: 100%;

  position: relative;

  @media (min-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    gap: 2.4rem;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 5rem;
    column-gap: 2.4rem;
  }
`,C=i.div`
  min-height: 100vh;
  height: 100vh;
  margin: 0 auto;
`,F=i.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${j});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

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
`,k=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60%;
  background-color: ${t=>t.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  height: 100%;
`,E=i.h2`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${l};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,W=i.p`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${l};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;function S(){const[t,d]=s.useState([]),a=p(),m=g();return s.useEffect(()=>{async function r(){try{const o=await a(x()),c=JSON.parse(localStorage.getItem("favorites"))||[],n=o.payload.filter(h=>c.includes(h.id));n.length===0&&localStorage.removeItem("favorites"),d(n)}catch(o){console.log(o.message)}}r()},[a,m]),console.log(t.length),e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs(f,{children:[e.jsx("title",{children:"Cruise Wheels - Your Favorite Cars"}),e.jsx("meta",{name:"description",content:"Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."}),e.jsx("meta",{name:"keywords",content:"favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),t.length===0?e.jsx(C,{children:e.jsx(F,{children:e.jsxs(k,{children:[e.jsx(E,{children:"No Favorite Cars Found!"}),e.jsx(W,{children:"It looks like you haven't added any cars to your favorites yet. Explore Cruise Wheels' main page to find stylish and comfy rides for your next journey!"})]})})}):e.jsx(w,{children:e.jsx(b,{children:t==null?void 0:t.map(r=>e.jsx(v,{items:r},y()))})})]})}export{S as default};
