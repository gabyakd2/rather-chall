import React from "react";


function MediaCard() {
  return (
    <div>
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/810540156/rendition/1080p/file.mp4?loc=external&signature=2a5151aab821c7370780c1f9dee70d84a41ea77d7a1762f3e7ba9891992e5f03"
        width={400}
        height={400}
        loop
        muted
        autoPlay
        preload="metadata"
      />
      <div className="flex justify-between text-xl font-semibold">
        <p >Core Glow</p>
        <p>USDT 28,900</p>
      </div>
      <div className="flex justify-between text-xs font-normal">
        <p>Edges of Reality</p>
        <p>$ 28,900</p>
      </div>
    </div>
  );
}

export default MediaCard;
