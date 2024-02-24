import{u as n,p as a,F as $,a as w,r as p,j as r,b as k,c as I,f as F,d as L}from"./index-Dyk1zt2W.js";const z=e=>e.cars.cars.items,B=n.li`
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,M=n.div`
  position: relative;
`,H=n.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 1.4rem;
  border-top-left-radius: 1.4rem;
  object-fit: cover;
  aspect-ratio: 3/2;
`,T=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;
  height: 100%;
  padding: 1.2rem;
  background-color: ${e=>e.theme.colors.headerBgColor};
`,U=n.div`
  /* padding: 1.2rem; */
`,S=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,D=n.div`
  display: flex;
  align-items: center;
`,E=n.h2`
  font-family: ${a};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,y=n.span`
  font-family: ${a};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,d=n.span`
  font-family: ${a};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,R=n.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 1.4rem;
  width: 100%;
  padding: 1.2rem;

  font-family: ${a};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};
  transition: var(--primary-transition);

  background-color: ${e=>e.theme.colors.accentColor};

  &:hover {
    background-color: ${e=>e.theme.colors.accentColorHover};
    cursor: pointer;
  }
`,W=n.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`,P=n($)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.accentColor};
    cursor: pointer;
  }
`,O=n(w)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.accentColor};

  transition: all var(--primary-transition);

  &:hover {
    color: ${e=>e.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;function V({items:e}){const[o,i]=p.useState(!1),l=c=>{var f,j;const h=c.split(","),u=((f=h[h.length-2])==null?void 0:f.trim())||"",s=((j=h[h.length-1])==null?void 0:j.trim())||"";return r.jsxs(r.Fragment,{children:[r.jsx(d,{children:u}),r.jsxs(d,{children:[" | ",s]})]})};return r.jsxs(B,{children:[r.jsxs(M,{children:[r.jsx(H,{src:e.img,alt:e.make}),r.jsx(W,{onClick:()=>i(c=>!c),children:o?r.jsx(O,{}):r.jsx(P,{})})]}),r.jsxs(T,{children:[r.jsxs(U,{children:[r.jsxs(S,{children:[r.jsxs(D,{children:[r.jsx(E,{children:e.make}),r.jsxs(y,{children:[", ",e.year]})]}),r.jsx(y,{children:e.rentalPrice})]}),r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(d,{children:l(e.address)}),r.jsxs(d,{children:[" | ",e.rentalCompany]})]}),r.jsxs("div",{children:[r.jsx(d,{children:e.type}),r.jsxs(d,{children:[" | ",e.model]}),r.jsxs(d,{children:[" | miles: ",e.mileage]})]})]})]}),r.jsx(R,{children:"Learn More"})]})]},e.id)}const A=n.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 9.6rem 12.8rem;
`,N=n.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2.4rem;
  width: 100%;
`,G=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"];let m;const K=new Uint8Array(16);function Y(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(K)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function q(e,o=0){return t[e[o+0]]+t[e[o+1]]+t[e[o+2]]+t[e[o+3]]+"-"+t[e[o+4]]+t[e[o+5]]+"-"+t[e[o+6]]+t[e[o+7]]+"-"+t[e[o+8]]+t[e[o+9]]+"-"+t[e[o+10]]+t[e[o+11]]+t[e[o+12]]+t[e[o+13]]+t[e[o+14]]+t[e[o+15]]}const J=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:J};function C(e,o,i){if(b.randomUUID&&!o&&!e)return b.randomUUID();e=e||{};const l=e.random||(e.rng||Y)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,o){i=i||0;for(let c=0;c<16;++c)o[i+c]=l[c];return o}return q(l)}const Q=n.form`
  display: flex;
  align-items: end;
  gap: 1.8rem;
`,g=n.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,X=n.button`
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
`,v=n.select`
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;

  font-family: ${a};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};
`,x=n.label`
  font-family: ${a};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,Z=n.input`
  border: none;
  outline: none;
  background: none;
  width: 16rem;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${a};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  &::placeholder {
    font-family: ${a};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }
`,_=n.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 16rem;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${a};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  &::placeholder {
    font-family: ${a};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }
`;function ee(){const e=()=>{const o=[];for(let i=10;i<=200;i+=10)o.push(r.jsxs("option",{value:i,children:[i," $"]},C()));return o};return r.jsxs(Q,{children:[r.jsxs(g,{children:[r.jsx(x,{htmlFor:"carBrand",children:"Car brand:"}),r.jsxs(v,{id:"carBrand",name:"carBrand",children:[r.jsx("option",{value:"",hidden:!0,children:"Enter the text"}),G.map(o=>r.jsx("option",{value:o,children:o},C()))]})]}),r.jsxs(g,{children:[r.jsx(x,{htmlFor:"price",children:"Price / 1 hour"}),r.jsxs(v,{id:"price",name:"price",children:[r.jsx("option",{value:"",hidden:!0,children:"To $"}),e()]})]}),r.jsxs(g,{children:[r.jsx(x,{htmlFor:"mileage",children:"Car mileage / km"}),r.jsxs("div",{children:[r.jsx(_,{type:"text",placeholder:"From"}),r.jsx(Z,{type:"text",placeholder:"To $"})]})]}),r.jsx(X,{children:"Search"})]})}const re=n.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${e=>e.theme.colors.accentColor};

  font-family: ${a};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function oe({onLoadMoreClick:e}){return r.jsx(re,{onClick:e,children:"Load More"})}function te(){const e=k(),o=I(z),[i,l]=p.useState(!0),[c,h]=p.useState(1);function u(){h(s=>s+1)}return p.useEffect(()=>{try{e(F(c)).unwrap().catch(s=>{console.error("Error fetching cars:",s)}).finally(()=>{l(!1)})}catch(s){console.log(s.message)}},[e,c]),i?r.jsx(L,{}):r.jsxs(A,{children:[r.jsx(ee,{}),r.jsx(N,{children:o.map(s=>r.jsx(V,{items:s},s.id))}),r.jsx(oe,{onLoadMoreClick:u})]})}export{te as default};
