import{u as i,r as o,a as p,j as r,f as u}from"./index-MyG7cDGB.js";import{C as d,v as f}from"./v4-DZDegn-z.js";const g=i.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`,v=i.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
  height: 100%;

  position: relative;
`;function C(){const[t,n]=o.useState([]),s=p();return o.useEffect(()=>{async function e(){try{const a=await s(u()),c=JSON.parse(localStorage.getItem("favorites"))||[],l=a.payload.filter(m=>c.includes(m.id));n(l)}catch(a){console.log(a.message)}}e()},[s]),r.jsx(g,{children:r.jsx(v,{children:t==null?void 0:t.map(e=>r.jsx(d,{items:e},f()))})})}export{C as default};
