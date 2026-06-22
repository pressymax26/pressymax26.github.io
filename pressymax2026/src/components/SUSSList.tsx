import React from 'react';
import "../index.css"
import SUSSCard from './SUSSCard';
import {sussArticles} from '../content/deliverables';

const SUSSList: React.FC = () => {
  return (
    <div className="article-list">
      {sussArticles.map(sussArticle => (
        <SUSSCard key={sussArticle.id} article={sussArticle} />
      ))}
    </div>
  );
};

export default SUSSList;