import{b as n,p as l,n as H,o as A,r as a,q as T,j as o,t as R,v as D,x as W,y as B,H as E,m as N,z as U,A as V}from"./index-96C16E93.js";import{v as S,C as M}from"./v4-C6aQhSw0.js";const J=e=>e.cars.cars.items,Y=e=>e.cars.filter,q=n.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,G=n.ul`
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
`,K=n.li`
  font-family: ${l};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,Q=["Buick","Volvo","Honda","Toyota","Ford","Jeep","HUMMER","Subaru","Mitsubishi","Tesla","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover","Porsche","Lexus","Jaguar"],X=n.form`
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
`,v=n.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`,Z=n.button`
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
`,P=n.div`
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

  @media (min-width: 1440px) {
    width: 22.4rem;
  }
`,I=n.div`
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
`,L=n.span`
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
`,$=n.label`
  font-family: ${l};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,_=n.div`
  display: flex;
  max-width: 32rem;
`,ee=n.input`
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
`,oe=n.input`
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
`;n.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const z=n(H)`
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
`,O=n(A)`
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
`;function re({handlePage:e}){const[m,k]=a.useState(""),[h,d]=a.useState(""),[p,x]=a.useState(""),[f,b]=a.useState(""),[u,s]=a.useState(!1),[g,w]=a.useState(!1),y=T(),F=()=>{const r=[];for(let t=10;t<=250;t+=10)r.push(o.jsxs(L,{onClick:()=>j(t),children:[t," $"]},S()));return r},C=r=>{k(r),s(!1)},j=r=>{d(r),w(!1)};function i(r){r.preventDefault();const t={brand:m,price:h||"250",mileage:{from:p||"0",to:f||"15000"}};h===""&&d("250"),y(R(t.brand)),y(D(t.price)),y(W({min:t.mileage.from,max:t.mileage.to})),e(),k(""),d(""),x(""),b("")}return o.jsxs(X,{onSubmit:i,children:[o.jsxs(v,{children:[o.jsx($,{htmlFor:"carBrand",children:"Car brand:"}),o.jsxs(P,{onClick:()=>s(!u),children:[m||"Enter the text",u?o.jsx(O,{}):o.jsx(z,{})]}),u&&o.jsx(I,{children:Q.map(r=>o.jsx(L,{onClick:()=>C(r),children:r},r))})]}),o.jsxs(v,{children:[o.jsx($,{htmlFor:"price",children:"Price / 1 hour"}),o.jsxs(P,{onClick:()=>w(!g),children:[h||"To $",g?o.jsx(O,{}):o.jsx(z,{})]}),g&&o.jsx(I,{children:F()})]}),o.jsxs(v,{children:[o.jsx($,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(_,{children:[o.jsx(oe,{type:"text",placeholder:"From",value:p,onChange:r=>x(r.target.value)}),o.jsx(ee,{type:"text",placeholder:"To $",value:f,onChange:r=>b(r.target.value)})]})]}),o.jsx(Z,{type:"submit",children:"Search"})]})}const te=n.button`
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
`;function ne({onLoadMoreClick:e}){return o.jsx(te,{onClick:e,children:"Load More"})}function se(){var r;const e=T(),m=B(J),[k,h]=a.useState(!0),[d,p]=a.useState(1),[x,f]=a.useState(!0),[b,u]=a.useState([]),s=B(Y);function g(){p(t=>t+1)}function w(){p(1)}const C=Math.ceil(52/12);a.useEffect(()=>{async function t(){try{const c=await e(U());u(c.payload),f(d<C),await e(V(d)).unwrap()}catch(c){console.log(c.message)}finally{h(!1)}}t()},[e,d,C]);function j(){return b.filter(c=>c.make===s.brand&&parseInt(c.rentalPrice.replace("$",""))<=s.price&&c.mileage>s.mileageRange.min&&c.mileage<=s.mileageRange.max)}const i=j();return o.jsxs(o.Fragment,{children:[o.jsx(E,{children:o.jsxs(N,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(q,{children:[o.jsx(re,{handlePage:w}),o.jsx(G,{children:(i==null?void 0:i.length)===0&&((r=s==null?void 0:s.brand)==null?void 0:r.length)>0?o.jsx(K,{children:"No matching cars found"}):(i==null?void 0:i.length)>0?i==null?void 0:i.map(t=>o.jsx(M,{items:t},S())):m==null?void 0:m.map(t=>o.jsx(M,{items:t},S()))}),x&&o.jsx(ne,{onLoadMoreClick:g})]})]})}export{se as default};
