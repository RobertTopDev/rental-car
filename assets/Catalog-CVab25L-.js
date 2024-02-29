import{b as t,p as l,n as E,o as N,r as a,q as A,j as o,B as U,t as V,v as J,x as Y,y as q,z as M,H as G,m as K,A as Q}from"./index-aFkszU-m.js";import{v as B,C as I}from"./v4-CpqAiAVW.js";const X=e=>e.cars.cars.items,Z=e=>e.cars.filter,_=t.div`
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
  font-family: ${l};
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
`,$=t.div`
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
`,L=t.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;

  font-family: ${l};
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
    width: 14.4rem;
  }

  @media (min-width: 1000px) {
    width: 22.4rem;
  }
`,O=t.div`
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
`,z=t.span`
  font-family: ${l};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,S=t.label`
  font-family: ${l};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,ie=t.div`
  display: flex;
  max-width: 32rem;
`,ae=t.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${l};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${l};
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
`,se=t.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${l};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${l};
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
`;const H=t(E)`
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
`,T=t(N)`
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
`;function le({handlePage:e,setDisplayedCars:m,setFilteredSearch:F}){const[h,p]=a.useState(""),[g,u]=a.useState(""),[c,y]=a.useState(""),[x,k]=a.useState(""),[f,s]=a.useState(!1),[d,w]=a.useState(!1),b=A(),P=()=>{const r=[];for(let n=10;n<=250;n+=10)r.push(o.jsxs(z,{onClick:()=>j(n),children:[n," $"]},B()));return r},C=r=>{p(r),s(!1)},j=r=>{u(r),w(!1)};async function i(r){if(r.preventDefault(),h.length===0&&!g&&c.length===0&&x.length===0){U.warning("Please choose a brand, price, or mileage range to refine your search.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"});return}const n={brand:h,price:g||"250",mileage:{from:c||"0",to:x||"15000"}},v=await b(V());m(v.payload),F(!0),b(J(n.brand)),b(Y(n.price)),b(q({min:n.mileage.from,max:n.mileage.to})),e()}return o.jsxs(te,{onSubmit:i,children:[o.jsxs($,{children:[o.jsx(S,{htmlFor:"carBrand",children:"Car brand:"}),o.jsxs(L,{onClick:()=>s(!f),children:[h||"Enter the text",f?o.jsx(T,{}):o.jsx(H,{})]}),f&&o.jsx(O,{children:re.map(r=>o.jsx(z,{onClick:()=>C(r),children:r},r))})]}),o.jsxs($,{children:[o.jsx(S,{htmlFor:"price",children:"Price / 1 hour"}),o.jsxs(L,{onClick:()=>w(!d),children:[g||"To $",d?o.jsx(T,{}):o.jsx(H,{})]}),d&&o.jsx(O,{children:P()})]}),o.jsxs($,{children:[o.jsx(S,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(ie,{children:[o.jsx(se,{type:"text",placeholder:"From",value:c,onChange:r=>y(r.target.value)}),o.jsx(ae,{type:"text",placeholder:"To",value:x,onChange:r=>k(r.target.value)})]})]}),o.jsx(ne,{type:"submit",children:"Search"})]})}const ce=t.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${e=>e.theme.colors.accentColor};

  font-family: ${l};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function R({onLoadMoreClick:e}){return o.jsx(ce,{onClick:e,children:"Load More"})}function he(){const e=A(),m=M(X),[F,h]=a.useState(!0),[p,g]=a.useState(!1),[u,c]=a.useState(1),[y,x]=a.useState(!0),[k,f]=a.useState([]),s=M(Z);function d(){c(r=>r+1)}function w(){c(1)}const C=Math.ceil(52/12);a.useEffect(()=>{async function r(){try{x(u<C),await e(Q(u)).unwrap()}catch(n){console.log(n.message)}finally{h(!1)}}r()},[e,u,C]);function j(){return k.filter(n=>{const v=!s.brand||n.make===s.brand,D=parseInt(n.rentalPrice.replace("$",""))<=s.price,W=!s.mileageRange||n.mileage>s.mileageRange.min&&n.mileage<=s.mileageRange.max;return v&&D&&W})}const i=j();return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsxs(K,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(_,{children:[o.jsx(le,{handlePage:w,setDisplayedCars:f,setFilteredSearch:g}),o.jsx(ee,{children:i&&(i==null?void 0:i.length)===0&&p?o.jsx(oe,{children:"No matching cars found"}):(i==null?void 0:i.length)>0?i==null?void 0:i.map(r=>o.jsx(I,{items:r},B())):m==null?void 0:m.map(r=>o.jsx(I,{items:r},B()))}),p&&i.length>12&&o.jsx(R,{onLoadMoreClick:d}),!p&&y&&o.jsx(R,{onLoadMoreClick:d})]})]})}export{he as default};
