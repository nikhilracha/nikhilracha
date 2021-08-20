import React from "react"

import Layout from "./components/Layout"
// import SEO from "../components/seo"
// Components
import Header from "./components/Header"
// import Work from "../components/Work"
// import About from "../components/about"
import Skills from "./components/Skills"
// import Promotion from "../components/Promotion"
// import Footer from "../components/Footer"

function App() {
  return (
    <Layout>
      {/* <SEO title="Sri Nikhil Racha" /> */}
      <Header></Header>
      <Skills></Skills>
      {/* <Work></Work>
    <About></About>

    <Promotion></Promotion>
    <Footer></Footer> */}
    </Layout>
  );
}

export default App;




