
import { useParams } from 'react-router-dom';
import {sussArticles} from '../content/deliverables';
import backgroundImage from '/background.png';
import Topbar from '../components/topBar';

const SUSSArticle = () => {
  const { id } = useParams();
  const sussArticle = sussArticles.find(sussArticle => sussArticle.id === id);

  if (!sussArticle) {
    return <div>SUSS Article not found</div>;
  }

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', color: 'white', padding: '20px'}}>
      <header className="topBar">
      <Topbar />
      </header>
      <div style={{backgroundColor:'black', padding:'20px', borderRadius:'5px'}}>
        {sussArticle.articleThumbnail && (
        <img src={sussArticle.articleThumbnail} alt={sussArticle.title} style={{width:'100%', height:'auto'}} />
      )}
      <h1>{sussArticle.title}</h1>
      <p style={{textAlign:'justify', lineHeight:'2'}} dangerouslySetInnerHTML={{ __html: sussArticle.content }} />
      </div>
    </div>
  );
};

export default SUSSArticle;