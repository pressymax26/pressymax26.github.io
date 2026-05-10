import React from 'react';
import PodcastList from '../components/PodcastList';
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
        <h1>Podcasts</h1>
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