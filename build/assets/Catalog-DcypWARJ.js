import{u as t,p as c,I as T,b as H,r as a,c as O,j as o,s as R,d as A,e as D,f as B,H as W,a as E,g as N,h as U}from"./index-DDd1WRLG.js";import{v as F,C as S}from"./v4-JLfIpmq1.js";const V=e=>e.cars.cars.items,J=e=>e.cars.filter,Y=t.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,G=t.ul`
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
`,K=t.li`
  font-family: ${c};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,q=["Buick","Volvo","Honda","Toyota","Ford","Jeep","HUMMER","Subaru","Mitsubishi","Tesla","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover","Porsche","Lexus","Jaguar"],Q=t.form`
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
`,X=t.button`
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
`,I=t.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;

  font-family: ${c};
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

  @media (min-width: 1440px) {
    width: 22.4rem;
  }
`,M=t.div`
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
`,L=t.span`
  font-family: ${c};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,v=t.label`
  font-family: ${c};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,Z=t.div`
  display: flex;
  max-width: 32rem;
`,_=t.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${c};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${c};
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
`,ee=t.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${c};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${c};
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
`;const z=t(T)`
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
`,P=t(H)`
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
`;function oe({handlePage:e}){const[d,C]=a.useState(""),[p,m]=a.useState(""),[u,f]=a.useState(""),[k,b]=a.useState(""),[g,l]=a.useState(!1),[h,w]=a.useState(!1),x=O(),j=()=>{const r=[];for(let s=10;s<=250;s+=10)r.push(o.jsxs(L,{onClick:()=>y(s),children:[s," $"]},F()));return r},n=r=>{C(r),l(!1)},y=r=>{m(r),w(!1)};function i(r){r.preventDefault();const s={brand:d,price:p||"250",mileage:{from:u||"0",to:k||"15000"}};p===""&&m("250"),x(R(s.brand)),x(A(s.price)),x(D({min:s.mileage.from,max:s.mileage.to})),e(),C(""),m(""),f(""),b("")}return o.jsxs(Q,{onSubmit:i,children:[o.jsxs($,{children:[o.jsx(v,{htmlFor:"carBrand",children:"Car brand:"}),o.jsxs(I,{onClick:()=>l(!g),children:[d||"Enter the text",g?o.jsx(P,{}):o.jsx(z,{})]}),g&&o.jsx(M,{children:q.map(r=>o.jsx(L,{onClick:()=>n(r),children:r},r))})]}),o.jsxs($,{children:[o.jsx(v,{htmlFor:"price",children:"Price / 1 hour"}),o.jsxs(I,{onClick:()=>w(!h),children:[p||"To $",h?o.jsx(P,{}):o.jsx(z,{})]}),h&&o.jsx(M,{children:j()})]}),o.jsxs($,{children:[o.jsx(v,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(Z,{children:[o.jsx(ee,{type:"text",placeholder:"From",value:u,onChange:r=>f(r.target.value)}),o.jsx(_,{type:"text",placeholder:"To $",value:k,onChange:r=>b(r.target.value)})]})]}),o.jsx(X,{type:"submit",children:"Search"})]})}const re=t.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${e=>e.theme.colors.accentColor};

  font-family: ${c};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function te({onLoadMoreClick:e}){return o.jsx(re,{onClick:e,children:"Load More"})}function ae(){var y;const e=O(),d=B(V),[C,p]=a.useState(!0),[m,u]=a.useState(1),[f,k]=a.useState(!0),[b,g]=a.useState([]),l=B(J);async function h(i){}function w(){u(i=>i+1)}function x(){u(1)}a.useEffect(()=>{async function i(){try{const r=await e(N());g(r.payload),await e(U(m)).unwrap()}catch(r){console.log(r.message)}finally{p(!1)}}i()},[e,m]);function j(){return b.filter(r=>r.make===l.brand&&parseInt(r.rentalPrice.replace("$",""))<=l.price&&r.mileage>l.mileageRange.min&&r.mileage<=l.mileageRange.max)}const n=j();return o.jsxs(o.Fragment,{children:[o.jsx(W,{children:o.jsxs(E,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(Y,{children:[o.jsx(oe,{handlePage:x}),o.jsx(G,{children:(n==null?void 0:n.length)===0&&((y=l==null?void 0:l.brand)==null?void 0:y.length)>0?o.jsx(K,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(i=>o.jsx(S,{items:i,handleFavoriteToggle:h},F())):d==null?void 0:d.map(i=>o.jsx(S,{items:i,handleFavoriteToggle:h},F()))}),f&&o.jsx(te,{onLoadMoreClick:w})]})]})}export{ae as default};
