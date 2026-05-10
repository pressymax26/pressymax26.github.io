import React from 'react';
import "../index.css"
import PodcastCard from './PodcastCard';
import {podcasts} from '../content/deliverables';

const PodcastList: React.FC = () => {
    return(
        <div className="article-list">
            {podcasts.map(podcast => (
                <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
        </div>
    )

}

export default PodcastList;