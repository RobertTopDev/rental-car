import{u as i}from"./index-BvGlqA_N.js";import{h as e}from"./heroBg-xqvqUgNj.js";const t=i.div`
  min-height: 100vh;
  height: 100vh;
  margin: 0 auto;
`,n=i.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${e});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    background-size: 100%;
    min-height: auto;
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`;export{t as P,n as a};
