import{u as t,p as c,r as a,a as O,j as r,s as P,b as I,c as T,d as S,t as H,f as R,e as D}from"./index-CVL9R2Vk.js";import{v as B,C as F}from"./v4-CJiQHGNi.js";const E=e=>e.cars.cars.items,A=e=>e.cars.filter,N=t.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`,W=t.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
  height: 100%;

  position: relative;
`,V=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],G=t.form`
  display: flex;
  align-items: end;
  gap: 1.8rem;
`,w=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`,K=t.button`
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
`,j=t.label`
  font-family: ${c};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,U=t.input`
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
`,q=t.input`
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
`;t.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;function J({handlePage:e}){const[d,$]=a.useState(""),[h,m]=a.useState(""),[p,f]=a.useState(""),[k,x]=a.useState(""),[b,l]=a.useState(!1),[u,y]=a.useState(!1),g=O(),v=()=>{const o=[];for(let s=10;s<=250;s+=10)o.push(r.jsxs(z,{onClick:()=>C(s),children:[s," $"]},B()));return o},i=o=>{$(o),l(!1)},C=o=>{m(o),y(!1)};function n(o){o.preventDefault();const s={brand:d,price:h||"250",mileage:{from:p||"0",to:k||"15000"}};h===""&&m("250"),g(P(s.brand)),g(I(s.price)),g(T({min:s.mileage.from,max:s.mileage.to})),e(),$(""),m(""),f(""),x("")}return r.jsxs(G,{onSubmit:n,children:[r.jsxs(w,{children:[r.jsx(j,{htmlFor:"carBrand",children:"Car brand:"}),r.jsx(M,{onClick:()=>l(!b),children:d||"Enter the text"}),b&&r.jsx(L,{children:V.map(o=>r.jsx(z,{onClick:()=>i(o),children:o},o))})]}),r.jsxs(w,{children:[r.jsx(j,{htmlFor:"price",children:"Price / 1 hour"}),r.jsx(M,{onClick:()=>y(!u),children:h||"To $"}),u&&r.jsx(L,{children:v()})]}),r.jsxs(w,{children:[r.jsx(j,{htmlFor:"mileage",children:"Car mileage / km"}),r.jsxs("div",{children:[r.jsx(q,{type:"text",placeholder:"From",value:p,onChange:o=>f(o.target.value)}),r.jsx(U,{type:"text",placeholder:"To $",value:k,onChange:o=>x(o.target.value)})]})]}),r.jsx(K,{type:"submit",children:"Search"})]})}const Q=t.button`
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
`;function X({onLoadMoreClick:e}){return r.jsx(Q,{onClick:e,children:"Load More"})}t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;function _(){var C;const e=O(),d=S(E),[$,h]=a.useState(!0),[m,p]=a.useState(1),[f,k]=a.useState(!0),[x,b]=a.useState([]),l=S(A);async function u(n){console.log(n),await e(H(n))}function y(){p(n=>n+1)}function g(){p(1)}a.useEffect(()=>{async function n(){try{const o=await e(R());b(o.payload),await e(D(m)).unwrap()}catch(o){console.log(o.message)}finally{h(!1)}}n()},[e,m]);function v(){return x.filter(o=>o.make===l.brand&&parseInt(o.rentalPrice.replace("$",""))<=l.price&&o.mileage>l.mileageRange.min&&o.mileage<=l.mileageRange.max)}const i=v();return r.jsxs(N,{children:[r.jsx(J,{handlePage:g}),r.jsx(W,{children:(i==null?void 0:i.length)===0&&((C=l==null?void 0:l.brand)==null?void 0:C.length)>0?r.jsx("li",{children:"No matching cars found"}):(i==null?void 0:i.length)>0?i==null?void 0:i.map(n=>r.jsx(F,{items:n,handleFavoriteToggle:u},B())):d==null?void 0:d.map(n=>r.jsx(F,{items:n,handleFavoriteToggle:u},B()))}),f&&r.jsx(X,{onLoadMoreClick:y})]})}export{_ as default};
