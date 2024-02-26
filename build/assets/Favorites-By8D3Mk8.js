import{u as n,r as i,b as d,j as e,H as p,a as u,f}from"./index-CKoIQajm.js";import{C as h,v as g}from"./v4-CFnMsq-_.js";const x=n.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,v=n.ul`
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
`;function C(){const[t,o]=i.useState([]),s=d();return i.useEffect(()=>{async function r(){try{const a=await s(f()),l=JSON.parse(localStorage.getItem("favorites"))||[],c=a.payload.filter(m=>l.includes(m.id));o(c)}catch(a){console.log(a.message)}}r()},[s]),e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(u,{children:[e.jsx("title",{children:"Cruise Wheels - Your Favorite Cars"}),e.jsx("meta",{name:"description",content:"Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."}),e.jsx("meta",{name:"keywords",content:"favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),e.jsx(x,{children:e.jsx(v,{children:t==null?void 0:t.map(r=>e.jsx(h,{items:r},g()))})})]})}export{C as default};
