import React from "react";

const TopBar: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#333", color: "white", padding: "10px", width: "100%", top: 0, position: "fixed", left: 0 }}>
      <h1>YMAX Press 2026</h1>

      <a href="/" className="barLinks">Latest News</a><a href="#/article" className="barLinks">Articles</a><a href="#/podcast" className="barLinks">Podcasts</a><a href="https://tinyurl.com/ymax2026letterstojournalists" className="barLinks" target="_blank" rel="noopener noreferrer">Letters to Journalists</a>
    </div>
  );
}

export default TopBar;