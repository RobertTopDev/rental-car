import{u as o,r as i,b as d,j as e,H as u,a as p,f as h}from"./index-Y9j0Stfh.js";import{C as f,v}from"./v4-DKYnCRXr.js";const g=o.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`,x=o.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
  height: 100%;

  position: relative;
`;function C(){const[r,n]=i.useState([]),a=d();return i.useEffect(()=>{async function t(){try{const s=await a(h()),l=JSON.parse(localStorage.getItem("favorites"))||[],c=s.payload.filter(m=>l.includes(m.id));n(c)}catch(s){console.log(s.message)}}t()},[a]),e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs(p,{children:[e.jsx("title",{children:"Cruise Wheels - Your Favorite Cars"}),e.jsx("meta",{name:"description",content:"Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."}),e.jsx("meta",{name:"keywords",content:"favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),e.jsx(g,{children:e.jsx(x,{children:r==null?void 0:r.map(t=>e.jsx(f,{items:t},v()))})})]})}export{C as default};
