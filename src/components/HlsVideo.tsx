import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const HlsVideo = ({ src, className = "", style }: HlsVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    if (src.endsWith(".m3u8") && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (hls.levels.length > 0) {
          const highestLevel = hls.levels.length - 1;
          hls.currentLevel = highestLevel;
          hls.nextLevel = highestLevel;
          hls.loadLevel = highestLevel;
        }
        void video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else {
      video.src = src;
      void video.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      crossOrigin="anonymous"
      className={className}
      style={style}
    />
  );
};

export default HlsVideo;
