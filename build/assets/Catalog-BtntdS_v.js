import{u as n,p as c,r as i,b as z,j as o,s as O,c as H,d as I,e as F,H as T,a as R,t as E,f as W,g as D}from"./index-Btp4t5aC.js";import{v as B,C as S}from"./v4-DFnB3D4e.js";const A=e=>e.cars.cars.items,N=e=>e.cars.filter,V=n.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`,G=n.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
  height: 100%;

  position: relative;
`,K=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],U=n.form`
  display: flex;
  align-items: end;
  gap: 1.8rem;
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`,q=n.button`
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
`,M=n.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 22.4rem;

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
`,L=n.div`
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
`,P=n.span`
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
`,w=n.label`
  font-family: ${c};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,J=n.input`
  border: none;
  outline: none;
  background: none;
  width: 16rem;
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
`,Q=n.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 16rem;
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
`;n.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;function X({handlePage:e}){const[d,v]=i.useState(""),[m,h]=i.useState(""),[p,f]=i.useState(""),[j,x]=i.useState(""),[b,l]=i.useState(!1),[u,y]=i.useState(!1),g=z(),k=()=>{const r=[];for(let s=10;s<=250;s+=10)r.push(o.jsxs(P,{onClick:()=>C(s),children:[s," $"]},B()));return r},a=r=>{v(r),l(!1)},C=r=>{h(r),y(!1)};function t(r){r.preventDefault();const s={brand:d,price:m||"250",mileage:{from:p||"0",to:j||"15000"}};m===""&&h("250"),g(O(s.brand)),g(H(s.price)),g(I({min:s.mileage.from,max:s.mileage.to})),e(),v(""),h(""),f(""),x("")}return o.jsxs(U,{onSubmit:t,children:[o.jsxs($,{children:[o.jsx(w,{htmlFor:"carBrand",children:"Car brand:"}),o.jsx(M,{onClick:()=>l(!b),children:d||"Enter the text"}),b&&o.jsx(L,{children:K.map(r=>o.jsx(P,{onClick:()=>a(r),children:r},r))})]}),o.jsxs($,{children:[o.jsx(w,{htmlFor:"price",children:"Price / 1 hour"}),o.jsx(M,{onClick:()=>y(!u),children:m||"To $"}),u&&o.jsx(L,{children:k()})]}),o.jsxs($,{children:[o.jsx(w,{htmlFor:"mileage",children:"Car mileage / km"}),o.jsxs("div",{children:[o.jsx(Q,{type:"text",placeholder:"From",value:p,onChange:r=>f(r.target.value)}),o.jsx(J,{type:"text",placeholder:"To $",value:j,onChange:r=>x(r.target.value)})]})]}),o.jsx(q,{type:"submit",children:"Search"})]})}const Y=n.button`
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
`;function Z({onLoadMoreClick:e}){return o.jsx(Y,{onClick:e,children:"Load More"})}function oe(){var C;const e=z(),d=F(A),[v,m]=i.useState(!0),[h,p]=i.useState(1),[f,j]=i.useState(!0),[x,b]=i.useState([]),l=F(N);async function u(t){console.log(t),await e(E(t))}function y(){p(t=>t+1)}function g(){p(1)}i.useEffect(()=>{async function t(){try{const r=await e(W());b(r.payload),await e(D(h)).unwrap()}catch(r){console.log(r.message)}finally{m(!1)}}t()},[e,h]);function k(){return x.filter(r=>r.make===l.brand&&parseInt(r.rentalPrice.replace("$",""))<=l.price&&r.mileage>l.mileageRange.min&&r.mileage<=l.mileageRange.max)}const a=k();return o.jsxs(o.Fragment,{children:[o.jsx(T,{children:o.jsxs(R,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(V,{children:[o.jsx(X,{handlePage:g}),o.jsx(G,{children:(a==null?void 0:a.length)===0&&((C=l==null?void 0:l.brand)==null?void 0:C.length)>0?o.jsx("li",{children:"No matching cars found"}):(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>o.jsx(S,{items:t,handleFavoriteToggle:u},B())):d==null?void 0:d.map(t=>o.jsx(S,{items:t,handleFavoriteToggle:u},B()))}),f&&o.jsx(Z,{onLoadMoreClick:y})]})]})}export{oe as default};
