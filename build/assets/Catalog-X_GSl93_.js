import{u as t,p as c,r as a,b as P,j as o,s as I,c as O,d as H,e as F,H as T,a as R,f as W,g as E}from"./index-fbTBOemn.js";import{v as B,C as S}from"./v4-CglciN1L.js";const D=e=>e.cars.cars.items,N=e=>e.cars.filter,A=t.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,V=t.ul`
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
`,G=t.li`
  font-family: ${c};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
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
`,$=t.div`
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
`,z=t.span`
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
`,k=t.label`
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
`;function Y({handlePage:e}){const[d,C]=a.useState(""),[h,m]=a.useState(""),[p,f]=a.useState(""),[j,x]=a.useState(""),[b,l]=a.useState(!1),[u,y]=a.useState(!1),g=P(),v=()=>{const r=[];for(let s=10;s<=250;s+=10)r.push(o.jsxs(z,{onClick:()=>w(s),children:[s," $"]},B()));return r},n=r=>{C(r),l(!1)},w=r=>{m(r),y(!1)};function i(r){r.preventDefault();const s={brand:d,price:h||"250",mileage:{from:p||"0",to:j||"15000"}};h===""&&m("250"),g(I(s.brand)),g(O(s.price)),g(H({min:s.mileage.from,max:s.mileage.to})),e(),C(""),m(""),f(""),x("")}return o.jsxs(U,{onSubmit:i,children:[o.jsxs($,{children:[o.jsx(k,{htmlFor:"carBrand",children:"Car brand:"}),o.jsx(M,{onClick:()=>l(!b),children:d||"Enter the text"}),b&&o.jsx(L,{children:K.map(r=>o.jsx(z,{onClick:()=>n(r),children:r},r))})]}),o.jsxs($,{children:[o.jsx(k,{htmlFor:"price",children:"Price / 1 hour"}),o.jsx(M,{onClick:()=>y(!u),children:h||"To $"}),u&&o.jsx(L,{children:v()})]}),o.jsxs($,{children:[o.jsx(k,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs(J,{children:[o.jsx(X,{type:"text",placeholder:"From",value:p,onChange:r=>f(r.target.value)}),o.jsx(Q,{type:"text",placeholder:"To $",value:j,onChange:r=>x(r.target.value)})]})]}),o.jsx(q,{type:"submit",children:"Search"})]})}const Z=t.button`
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
`;function _({onLoadMoreClick:e}){return o.jsx(Z,{onClick:e,children:"Load More"})}function re(){var w;const e=P(),d=F(D),[C,h]=a.useState(!0),[m,p]=a.useState(1),[f,j]=a.useState(!0),[x,b]=a.useState([]),l=F(N);async function u(i){}function y(){p(i=>i+1)}function g(){p(1)}a.useEffect(()=>{async function i(){try{const r=await e(W());b(r.payload),await e(E(m)).unwrap()}catch(r){console.log(r.message)}finally{h(!1)}}i()},[e,m]);function v(){return x.filter(r=>r.make===l.brand&&parseInt(r.rentalPrice.replace("$",""))<=l.price&&r.mileage>l.mileageRange.min&&r.mileage<=l.mileageRange.max)}const n=v();return o.jsxs(o.Fragment,{children:[o.jsx(T,{children:o.jsxs(R,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(A,{children:[o.jsx(Y,{handlePage:g}),o.jsx(V,{children:(n==null?void 0:n.length)===0&&((w=l==null?void 0:l.brand)==null?void 0:w.length)>0?o.jsx(G,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(i=>o.jsx(S,{items:i,handleFavoriteToggle:u},B())):d==null?void 0:d.map(i=>o.jsx(S,{items:i,handleFavoriteToggle:u},B()))}),f&&o.jsx(_,{onLoadMoreClick:y})]})]})}export{re as default};
