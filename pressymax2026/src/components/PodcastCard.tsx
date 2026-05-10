import React from 'react';
import type { Podcast } from '../content/deliverables';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div className="article-card">
      <h2>{podcast.title}</h2>
      <p>{podcast.agency}</p>
      <audio src={podcast.content} autoPlay={false} controls></audio>
    </div>
  );
};

export default PodcastCard;