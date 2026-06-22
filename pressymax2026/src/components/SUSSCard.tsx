import React from 'react';
import type { sussArticle } from '../content/deliverables';

interface ArticleCardProps {
  article: sussArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <h3>{article.deck}</h3>
      {article.articleThumbnail && (
        <img src={article.articleThumbnail} alt={article.title} style={{width:'100%', height:'auto'}} />
      )}

      <a className='article-card-button' href={`#/suss/${article.id}`}>Read</a>
    </div>
  );
};

export default ArticleCard;