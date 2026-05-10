
import { useParams } from 'react-router-dom';
import {articles} from '../content/deliverables';
import backgroundImage from '/background.png';
import Topbar from '../components/topBar';

const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', color: 'white', padding: '20px'}}>
      <header className="topBar">
      <Topbar />
      </header>
      <div style={{backgroundColor:'black', padding:'20px', borderRadius:'5px'}}>
        {article.articleThumbnail && (
        <img src={article.articleThumbnail} alt={article.title} style={{width:'100%', height:'auto'}} />
      )}
      <h1>{article.title}</h1>
      <p style={{textAlign:'justify', lineHeight:'2'}} dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
};

export default Article;