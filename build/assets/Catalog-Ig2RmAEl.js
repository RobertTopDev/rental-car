import{u as t,p as c,r as a,b as z,j as o,s as O,c as H,d as I,e as B,H as T,a as R,t as W,f as E,g as D}from"./index-BGrW-uSs.js";import{v as F,C as S}from"./v4-C0Xt-x3q.js";const A=e=>e.cars.cars.items,N=e=>e.cars.filter,V=t.div`
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
`,K=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],U=t.form`
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
`,k=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`,q=t.button`
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
`,M=t.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;

  appearance: none;

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
`,L=t.div`
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

  padding: 1.4rem 1.8rem;
  background-color: ${e=>e.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,P=t.span`
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
`,$=t.label`
  font-family: ${c};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,J=t.div`
  display: flex;
  max-width: 32rem;
`,Q=t.input`
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
`,X=t.input`
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
`;function Y({handlePage:e}){const[d,C]=a.useState(""),[h,m]=a.useState(""),[p,f]=a.useState(""),[j,x]=a.useState(""),[b,l]=a.useState(!1),[u,y]=a.useState(!1),g=z(),v=()=>{const r=[];for(let s=10;s<=250;s+=10)r.push(o.jsxs(P,{onClick:()=>w(s),children:[s," $"]},F()));return r},i=r=>{C(r),l(!1)},w=r=>{m(r),y(!1)};function n(r){r.preventDefault();const s={brand:d,price:h||"250",mileage:{from:p||"0",to:j||"15000"}};h===""&&m("250"),g(O(s.brand)),g(H(s.price)),g(I({min:s.mileage.from,max:s.mileage.to})),e(),C(""),m(""),f(""),x("")}return o.jsxs(U,{onSubmit:n,children:[o.jsxs(k,{children:[o.jsx($,{htmlFor:"carBrand",children:"Car brand:"}),o.jsx(M,{onClick:()=>l(!b),children:d||"Enter the text"}),b&&o.jsx(L,{children:K.map(r=>o.jsx(P,{onClick:()=>i(r),children:r},r))})]}),o.jsxs(k,{children:[o.jsx($,{htmlFor:"price",children:"Price / 1 hour"}),o.jsx(M,{onClick:()=>y(!u),children:h||"To $"}),u&&o.jsx(L,{children:v()})]}),o.jsxs(k,{children:[o.jsx($,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(J,{children:[o.jsx(X,{type:"text",placeholder:"From",value:p,onChange:r=>f(r.target.value)}),o.jsx(Q,{type:"text",placeholder:"To $",value:j,onChange:r=>x(r.target.value)})]})]}),o.jsx(q,{type:"submit",children:"Search"})]})}const Z=t.button`
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
`;function _({onLoadMoreClick:e}){return o.jsx(Z,{onClick:e,children:"Load More"})}function re(){var w;const e=z(),d=B(A),[C,h]=a.useState(!0),[m,p]=a.useState(1),[f,j]=a.useState(!0),[x,b]=a.useState([]),l=B(N);async function u(n){console.log(n),await e(W(n))}function y(){p(n=>n+1)}function g(){p(1)}a.useEffect(()=>{async function n(){try{const r=await e(E());b(r.payload),await e(D(m)).unwrap()}catch(r){console.log(r.message)}finally{h(!1)}}n()},[e,m]);function v(){return x.filter(r=>r.make===l.brand&&parseInt(r.rentalPrice.replace("$",""))<=l.price&&r.mileage>l.mileageRange.min&&r.mileage<=l.mileageRange.max)}const i=v();return o.jsxs(o.Fragment,{children:[o.jsx(T,{children:o.jsxs(R,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(V,{children:[o.jsx(Y,{handlePage:g}),o.jsx(G,{children:(i==null?void 0:i.length)===0&&((w=l==null?void 0:l.brand)==null?void 0:w.length)>0?o.jsx("li",{children:"No matching cars found"}):(i==null?void 0:i.length)>0?i==null?void 0:i.map(n=>o.jsx(S,{items:n,handleFavoriteToggle:u},F())):d==null?void 0:d.map(n=>o.jsx(S,{items:n,handleFavoriteToggle:u},F()))}),f&&o.jsx(_,{onLoadMoreClick:y})]})]})}export{re as default};
