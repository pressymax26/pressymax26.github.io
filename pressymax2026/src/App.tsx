
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Layout from './components/Layout';

function App() {
  return (
    
        <HashRouter>
          <Layout>
        <Routes >
          <Route path="/" Component={Home} />
          <Route path="/article/:id" Component={Article} />
        </Routes>
        </Layout >
        </HashRouter>

    
  );
}

export default App;