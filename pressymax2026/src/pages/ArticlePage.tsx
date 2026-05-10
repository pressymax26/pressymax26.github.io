import React from 'react';
import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout';
import TopBar from '../components/topBar';


const Home: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url("/background.png")', minHeight: '100vh', color: 'white' , padding: '20px'}}>
        <header style={{paddingBottom:"7vw"}}>
        <TopBar/>
      </header>
    <Layout>
        
      <div>
        <h1>Latest News</h1>
        <ArticleList />
      </div>
    </Layout>
    <footer>
        <p> YMAX Press & Co.{new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default Home;