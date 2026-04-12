import React from 'react';
import ArticleCard from './ArticleCard';
import {articles} from '../content/deliverables';

const ArticleList: React.FC = () => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;