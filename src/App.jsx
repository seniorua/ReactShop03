// import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
// import { wareObj } from "./constants/wareData" 

export const App = () => {
// const [wares, setWares] = useState(wareObj);
  return (
    <>
      <Header></Header>
      {/* <Main wares={wares} setWares={setWares}></Main> */}
      <Main></Main>
      <Footer></Footer>    
    </>
    )
}