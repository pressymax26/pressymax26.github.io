import React from 'react';
import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url("/background.png")', minHeight: '100vh', color: 'white' , padding: '20px'}}>
        <header>
        <h1>YMAX Press 2026</h1>
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