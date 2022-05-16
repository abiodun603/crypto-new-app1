import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd"
import {Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies} from "./components"
import "./App.css"
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes" >
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
              <Route  path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>

              {/* <Route exact path="/news">
                <News />
              </Route> */}
            </Routes>
          </div>
        </Layout>
        <div className="footer" >
          <Typography.Title level = {5} style={{color: "white", textAlign: " center "}}>
            Cryptoverse <br/>
            All right reservered
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/">Exchanges</Link>
            <Link to="/">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
 