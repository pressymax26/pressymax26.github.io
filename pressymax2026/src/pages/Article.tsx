
import { useParams } from 'react-router-dom';
import {articles} from '../content/deliverables';
import backgroundImage from '/background.png';

const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', color: 'white', padding: '20px'}}>
      <h1>{article.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;