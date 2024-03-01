import{b as t,p as d,o as J,q as Y,r as a,t as U,j as o,v as q,x as I,y as L,z as O,A as z,C as R,H as G,n as K,D as Q}from"./index-5Z8bNcPP.js";import{v as P,C as T}from"./v4-C2SBEUU8.js";const X=e=>e.cars.cars.items,Z=e=>e.cars.filter,_=t.div`
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
`,H=t.div`
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
`,A=t.div`
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
`,M=t.label`
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
`;const W=t(J)`
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
`,E=t(Y)`
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
`;function ce({handlePage:e,setDisplayedCars:h,setFilteredSearch:p}){const[w,g]=a.useState(""),[u,C]=a.useState(""),[x,y]=a.useState(""),[f,l]=a.useState(""),[b,k]=a.useState(!1),[v,j]=a.useState(!1),i=U(),$=()=>{const r=[];for(let c=10;c<=250;c+=10)r.push(o.jsxs(D,{onClick:()=>s(c),children:[c," $"]},P()));return r},n=r=>{g(r),k(!1)},s=r=>{C(r),j(!1)},m=async()=>{g(""),C(""),y(""),l("");const r=await i(I());h(r.payload),i(L("")),i(O("")),i(z({min:"",max:""})),p(!1)},S=()=>{m(),e()};async function B(r){if(r.preventDefault(),w.length===0&&!u&&x.length===0&&f.length===0){q.warning("Please choose a brand, price, or mileage range to refine your search.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"});return}const c={brand:w,price:u||"250",mileage:{from:x||"0",to:f||"15000"}},V=await i(I());h(V.payload),p(!0),i(L(c.brand)),i(O(c.price)),i(z({min:c.mileage.from,max:c.mileage.to})),e()}return o.jsxs(te,{onSubmit:B,children:[o.jsxs(F,{children:[o.jsx(M,{htmlFor:"carBrand",children:"Car brand:"}),o.jsxs(H,{onClick:()=>k(!b),children:[w||"Enter the text",b?o.jsx(E,{}):o.jsx(W,{})]}),b&&o.jsx(A,{children:re.map(r=>o.jsx(D,{onClick:()=>n(r),children:r},r))})]}),o.jsxs(F,{children:[o.jsx(M,{htmlFor:"price",children:"Price / 1 hour"}),o.jsxs(H,{onClick:()=>j(!v),children:[u||"To $",v?o.jsx(E,{}):o.jsx(W,{})]}),v&&o.jsx(A,{children:$()})]}),o.jsxs(F,{children:[o.jsx(M,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(ae,{children:[o.jsx(le,{type:"text",placeholder:"From",value:x?parseInt(x).toLocaleString():"",onChange:r=>y(r.target.value)}),o.jsx(se,{type:"text",placeholder:"To",value:f?parseInt(f).toLocaleString():"",onChange:r=>l(r.target.value)})]})]}),o.jsx(ne,{type:"submit",children:"Search"}),o.jsx(ie,{onClick:S,type:"button",children:"Reset"})]})}const de=t.button`
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
`;function N({onLoadMoreClick:e}){return o.jsx(de,{onClick:e,children:"Load More"})}function pe(){const e=U(),h=R(X),[p,w]=a.useState(!1),[g,u]=a.useState(1),[C,x]=a.useState(!0),[y,f]=a.useState([]),l=R(Z);function b(){u(s=>s+1)}function k(){u(1)}const i=Math.ceil(52/12);a.useEffect(()=>{async function s(){try{x(g<i),await e(Q(g)).unwrap()}catch(m){console.log(m.message)}}s()},[e,g,i]);function $(){return y.filter(m=>{const S=!l.brand||m.make===l.brand,B=parseInt(m.rentalPrice.replace("$",""))<=l.price,r=!l.mileageRange||m.mileage>=l.mileageRange.min&&m.mileage<=l.mileageRange.max;return S&&B&&r})}const n=$();return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsxs(K,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(_,{children:[o.jsx(ce,{handlePage:k,setDisplayedCars:f,setFilteredSearch:w}),o.jsx(ee,{children:n&&(n==null?void 0:n.length)===0&&p?o.jsx(oe,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(s=>o.jsx(T,{items:s},P())):h==null?void 0:h.map(s=>o.jsx(T,{items:s},P()))}),p&&n.length>12&&o.jsx(N,{onLoadMoreClick:b}),!p&&C&&o.jsx(N,{onLoadMoreClick:b})]})]})}export{pe as default};
