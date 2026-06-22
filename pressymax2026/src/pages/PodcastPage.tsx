import React from 'react';
import PodcastList from '../components/PodcastList';
import Layout from '../components/Layout';
import TopBar from '../components/topBar';


const Home: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url("/background.png")', minHeight: '100vh', color: 'white'}} className="topBar">
        <header>
        <TopBar/>
      </header>
    <Layout>
        
      <div style={{marginTop:'10vh'}}>
        <h1 className="latest">Podcasts</h1>
        <PodcastList />
      </div>
    </Layout>
    <footer>
        <p> YMAX Press & Co.{new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default Home;