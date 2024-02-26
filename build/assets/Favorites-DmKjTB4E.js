import{u as l,r as o,b as p,h as u,j as e,H as f,a as g,f as h}from"./index-fbTBOemn.js";import{C as v,v as x}from"./v4-CglciN1L.js";const y=l.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,j=l.ul`
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
`;function F(){const[t,c]=o.useState([]),s=p(),i=u();return o.useEffect(()=>{async function r(){try{const a=await s(h()),m=JSON.parse(localStorage.getItem("favorites"))||[],n=a.payload.filter(d=>m.includes(d.id));n.length===0&&(localStorage.removeItem("favorites"),i("/rental-car/")),c(n)}catch(a){console.log(a.message)}}r()},[s,i]),e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsxs(g,{children:[e.jsx("title",{children:"Cruise Wheels - Your Favorite Cars"}),e.jsx("meta",{name:"description",content:"Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."}),e.jsx("meta",{name:"keywords",content:"favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),e.jsx(y,{children:e.jsx(j,{children:t==null?void 0:t.map(r=>e.jsx(v,{items:r},x()))})})]})}export{F as default};
