import React from 'react';
import SUSSList from '../components/SUSSList';
import Layout from '../components/Layout';
import TopBar from '../components/topBar';

const Home : React.FC = () => {  
    return (
        <div style={{ backgroundImage: 'url("/background.png")', minHeight: '100vh', color: 'white' , padding: '45px'}}>
        <header >
        <TopBar/>
      </header>
    <Layout>
        
      <div style={{marginTop:'10vh'}}>
        <h1 className="latest">SUSS Articles!</h1>
        <SUSSList/>
      </div>
    </Layout>
    <footer>
        <p> YMAX Press & Co.{new Date().getFullYear()} </p>
      </footer>
    </div>
    )
}
export default Home;