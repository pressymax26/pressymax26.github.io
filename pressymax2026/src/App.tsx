
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import PodcastPage from './pages/PodcastPage';

function App() {
  return (
    
        <HashRouter>
          <Layout>
        <Routes >
          <Route path="/" Component={Home} />
          <Route path="/article" Component={ArticlePage} />
          <Route path="/podcast" Component={PodcastPage} />
          <Route path="/article/:id" Component={Article} />
          <Route path="/about" Component={About} />
        </Routes>
        </Layout >
        </HashRouter>

    
  );
}

export default App;