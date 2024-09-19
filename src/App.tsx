import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SideBar from "./Components/General/Sidebar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0
}
  body {
    height:100vh;
    width:100vw;
  }
`;

function App() {
  return (
    <>
      <SideBar></SideBar>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
