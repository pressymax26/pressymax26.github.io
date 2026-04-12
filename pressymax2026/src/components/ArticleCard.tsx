import React from 'react';
import type { Article } from '../content/deliverables';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.deck}</p>
      <a href={`/article/${article.id}`}>Read more</a>
    </div>
  );
};

export default ArticleCard;