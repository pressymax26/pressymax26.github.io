
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import PodcastPage from './pages/PodcastPage';
import SUSSArticles from './pages/SUSSArticles';
import SUSSArticle from './pages/SUSSArticle';

function App() {
  return (
    
        <HashRouter>
          <Layout>
        <Routes >
          <Route path="/" Component={Home} />
          <Route path="/article" Component={ArticlePage} />
          <Route path="/podcast" Component={PodcastPage} />
          <Route path="/suss" Component={SUSSArticles} />
          <Route path="/suss/:id" Component={SUSSArticle}/>
          <Route path="/article/:id" Component={Article} />
          <Route path="/about" Component={About} />
        </Routes>
        </Layout >
        </HashRouter>

    
  );
}

export default App;