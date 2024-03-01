import{b as F,p as z,r as s,o as J,j as e,F as K,O as P,q as k,S as O,A as I,t as L,v as R,x as $,y as q,z as G,C as Q,D as V,R as X,J as Y,K as H,M as T,N as W,P as A,Q as D,H as Z,n as _,U as ee}from"./index-BkRDdSHq.js";import{v as B,C as E}from"./v4-Vr2ufL92.js";const te=r=>r.cars.cars.items,re=r=>r.cars.filter,ae=F.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,ne=F.ul`
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
`,se=F.li`
  font-family: ${z};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${r=>r.theme.colors.mainTextColor};
`,oe=["Buick","Volvo","Honda","Toyota","Ford","Jeep","HUMMER","Subaru","Mitsubishi","Tesla","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover","Porsche","Lexus","Jaguar"];function ie({handlePage:r,setDisplayedCars:d,setFilteredSearch:m}){const[x,h]=s.useState(""),[p,j]=s.useState(""),[u,C]=s.useState(""),[g,i]=s.useState(""),[f,y]=s.useState(!1),[S,b]=s.useState(!1),n=J(),v=()=>{const t=[];for(let l=10;l<=250;l+=10)t.push(e.jsxs($,{onClick:()=>o(l),children:[l," $"]},B()));return t},a=t=>{h(t),y(!1)},o=t=>{j(t),b(!1)},c=async()=>{h(""),j(""),C(""),i("");const t=await n(H());d(t.payload),n(T("")),n(W("")),n(A({min:"",max:""})),m(!1)},w=()=>{c(),r()};async function M(t){if(t.preventDefault(),x.length===0&&!p&&u.length===0&&g.length===0){Y.warning("Please choose a brand, price, or mileage range to refine your search.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"});return}const l={brand:x,price:p||"250",mileage:{from:u||"0",to:g||"15000"}},U=await n(H());d(U.payload),m(!0),n(T(l.brand)),n(W(l.price)),n(A({min:l.mileage.from,max:l.mileage.to})),r()}return e.jsxs(K,{onSubmit:M,children:[e.jsxs(P,{children:[e.jsx(k,{htmlFor:"carBrand",children:"Car brand:"}),e.jsxs(O,{onClick:()=>y(!f),children:[x||"Enter the text",f?e.jsx(I,{}):e.jsx(L,{})]}),f&&e.jsx(R,{children:oe.map(t=>e.jsx($,{onClick:()=>a(t),children:t},t))})]}),e.jsxs(P,{children:[e.jsx(k,{htmlFor:"price",children:"Price / 1 hour"}),e.jsxs(O,{onClick:()=>b(!S),children:[p||"To $",S?e.jsx(I,{}):e.jsx(L,{})]}),S&&e.jsx(R,{children:v()})]}),e.jsxs(P,{children:[e.jsx(k,{htmlFor:"mileage",children:"Car mileage / km"}),e.jsxs(q,{children:[e.jsx(G,{type:"text",placeholder:"From",value:u?parseInt(u).toLocaleString():"",onChange:t=>C(t.target.value)}),e.jsx(Q,{type:"text",placeholder:"To",value:g?parseInt(g).toLocaleString():"",onChange:t=>i(t.target.value)})]})]}),e.jsx(V,{type:"submit",children:"Search"}),e.jsx(X,{onClick:w,type:"button",children:"Reset"})]})}const le=F.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${r=>r.theme.colors.accentColor};

  font-family: ${z};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${r=>r.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${r=>r.theme.colors.accentColorHover};
  }
`;function N({onLoadMoreClick:r}){return e.jsx(le,{onClick:r,children:"Load More"})}function me(){const r=J(),d=D(te),[m,x]=s.useState(!1),[h,p]=s.useState(1),[j,u]=s.useState(!0),[C,g]=s.useState([]),i=D(re);function f(){p(o=>o+1)}function y(){p(1)}const n=Math.ceil(52/12);s.useEffect(()=>{async function o(){try{u(h<n),await r(ee(h)).unwrap()}catch(c){console.log(c.message)}}o()},[r,h,n]);function v(){return C.filter(c=>{const w=!i.brand||c.make===i.brand,M=parseInt(c.rentalPrice.replace("$",""))<=i.price,t=!i.mileageRange||c.mileage>=i.mileageRange.min&&c.mileage<=i.mileageRange.max;return w&&M&&t})}const a=v();return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs(_,{children:[e.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),e.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),e.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),e.jsxs(ae,{children:[e.jsx(ie,{handlePage:y,setDisplayedCars:g,setFilteredSearch:x}),e.jsx(ne,{children:a&&(a==null?void 0:a.length)===0&&m?e.jsx(se,{children:"No matching cars found"}):(a==null?void 0:a.length)>0?a==null?void 0:a.map(o=>e.jsx(E,{items:o},B())):d==null?void 0:d.map(o=>e.jsx(E,{items:o},B()))}),m&&a.length>12&&e.jsx(N,{onLoadMoreClick:f}),!m&&j&&e.jsx(N,{onLoadMoreClick:f})]})]})}export{me as default};
