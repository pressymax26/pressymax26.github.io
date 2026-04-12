
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/article/:id" Component={Article} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;