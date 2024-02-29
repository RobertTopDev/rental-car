import{b as t,p as d,n as J,o as Y,r as i,q as V,j as o,B as q,t as P,v as O,x as z,y as R,z as T,H as G,m as K,A as Q}from"./index-Dt6HK62b.js";import{v as L,C as H}from"./v4-DybBqjF_.js";const X=e=>e.cars.cars.items,Z=e=>e.cars.filter,_=t.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,ee=t.ul`
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
`,oe=t.li`
  font-family: ${d};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,re=["Buick","Volvo","Honda","Toyota","Ford","Jeep","HUMMER","Subaru","Mitsubishi","Tesla","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover","Porsche","Lexus","Jaguar"],te=t.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 1.4rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 1.8rem;
  }
`,F=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`,ne=t.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: ${e=>e.theme.colors.accentColor};
  color: ${e=>e.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 840px) {
    padding: 1.4rem 4.4rem;
  }
`,ie=t.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: transparent;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.accentColor};
    border-bottom: 1px solid ${e=>e.theme.colors.accentColor};
    border-top: 1px solid ${e=>e.theme.colors.accentColor};
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 860px) {
    padding: 1.4rem 4.4rem;
  }
`,A=t.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;

  font-family: ${d};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 840px) {
    width: 16rem;
  }

  @media (min-width: 1000px) {
    width: 22.4rem;
  }
`,W=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27.2rem;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1.4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  padding: 1.4rem 1.8rem;
  background-color: ${e=>e.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,D=t.span`
  font-family: ${d};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,I=t.label`
  font-family: ${d};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,ae=t.div`
  display: flex;
  max-width: 32rem;
`,se=t.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${d};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${d};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`,le=t.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${d};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${d};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>e.theme.colors.boxFocus} 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;t.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const E=t(J)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.black};

  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,N=t(Y)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.black};

  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`;function ce({handlePage:e,setDisplayedCars:p,setFilteredSearch:$}){const[b,g]=i.useState(""),[w,u]=i.useState(""),[h,y]=i.useState(""),[x,k]=i.useState(""),[C,l]=i.useState(!1),[f,v]=i.useState(!1),c=V(),M=()=>{const r=[];for(let a=10;a<=250;a+=10)r.push(o.jsxs(D,{onClick:()=>S(a),children:[a," $"]},L()));return r},j=r=>{g(r),l(!1)},S=r=>{u(r),v(!1)},n=async()=>{g(""),u(""),y(""),k("");const r=await c(P());p(r.payload),c(O("")),c(z("")),c(R({min:"",max:""})),$(!1)},s=()=>{n(),e()};async function m(r){if(r.preventDefault(),b.length===0&&!w&&h.length===0&&x.length===0){q.warning("Please choose a brand, price, or mileage range to refine your search.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"});return}const a={brand:b,price:w||"250",mileage:{from:h||"0",to:x||"15000"}},B=await c(P());p(B.payload),$(!0),c(O(a.brand)),c(z(a.price)),c(R({min:a.mileage.from,max:a.mileage.to})),e()}return o.jsxs(te,{onSubmit:m,children:[o.jsxs(F,{children:[o.jsx(I,{htmlFor:"carBrand",children:"Car brand:"}),o.jsxs(A,{onClick:()=>l(!C),children:[b||"Enter the text",C?o.jsx(N,{}):o.jsx(E,{})]}),C&&o.jsx(W,{children:re.map(r=>o.jsx(D,{onClick:()=>j(r),children:r},r))})]}),o.jsxs(F,{children:[o.jsx(I,{htmlFor:"price",children:"Price / 1 hour"}),o.jsxs(A,{onClick:()=>v(!f),children:[w||"To $",f?o.jsx(N,{}):o.jsx(E,{})]}),f&&o.jsx(W,{children:M()})]}),o.jsxs(F,{children:[o.jsx(I,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(ae,{children:[o.jsx(le,{type:"text",placeholder:"From",value:h?parseInt(h).toLocaleString():"",onChange:r=>y(r.target.value)}),o.jsx(se,{type:"text",placeholder:"To",value:x?parseInt(x).toLocaleString():"",onChange:r=>k(r.target.value)})]})]}),o.jsx(ne,{type:"submit",children:"Search"}),o.jsx(ie,{onClick:s,type:"button",children:"Reset"})]})}const de=t.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${e=>e.theme.colors.accentColor};

  font-family: ${d};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function U({onLoadMoreClick:e}){return o.jsx(de,{onClick:e,children:"Load More"})}function pe(){const e=V(),p=T(X),[$,b]=i.useState(!0),[g,w]=i.useState(!1),[u,h]=i.useState(1),[y,x]=i.useState(!0),[k,C]=i.useState([]),l=T(Z);function f(){h(s=>s+1)}function v(){h(1)}const j=Math.ceil(52/12);i.useEffect(()=>{async function s(){try{x(u<j),await e(Q(u)).unwrap()}catch(m){console.log(m.message)}finally{b(!1)}}s()},[e,u,j]);function S(){return k.filter(m=>{const r=!l.brand||m.make===l.brand,a=parseInt(m.rentalPrice.replace("$",""))<=l.price,B=!l.mileageRange||m.mileage>=l.mileageRange.min&&m.mileage<=l.mileageRange.max;return r&&a&&B})}const n=S();return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsxs(K,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(_,{children:[o.jsx(ce,{handlePage:v,setDisplayedCars:C,setFilteredSearch:w}),o.jsx(ee,{children:n&&(n==null?void 0:n.length)===0&&g?o.jsx(oe,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(s=>o.jsx(H,{items:s},L())):p==null?void 0:p.map(s=>o.jsx(H,{items:s},L()))}),g&&n.length>12&&o.jsx(U,{onLoadMoreClick:f}),!g&&y&&o.jsx(U,{onLoadMoreClick:f})]})]})}export{pe as default};
