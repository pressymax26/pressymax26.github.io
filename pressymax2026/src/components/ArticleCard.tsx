import React from 'react';
import type { Article } from '../content/deliverables';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      {article.articleThumbnail && (
        <img src={article.articleThumbnail} alt={article.title} style={{width:'100%', height:'auto'}} />
      )}
      <p>{article.agency}</p>
      <p>{article.deck}</p>
      <a className='article-card-button' href={`#/article/${article.id}`}>Read</a>
    </div>
  );
};

export default ArticleCard;