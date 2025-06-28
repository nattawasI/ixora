'use client'

import { useRef, useState } from 'react'
import { Video } from '@/components/ui/icons-outline/video'

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative aspect-video">
      <video
        ref={videoRef}
        className="size-full object-cover object-center"
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying ? (
        <div className="absolute inset-0 z-[1] flex items-center justify-center" onClick={handlePlay}>
          <button
            type="button"
            className="typo-body-2 group/play-button flex flex-col gap-y-1.25 font-bold uppercase"
            onClick={handlePlay}
          >
            <span className="group-hover/play-button:bg-blue flex size-11.5 items-center justify-center bg-white transition-colors duration-300">
              <Video className="text-blue transition-colors duration-300 group-hover/play-button:text-white" />
            </span>
            <span className="text-white">PLAY</span>
          </button>
        </div>
      ) : null}
    </div>
  )
}

export { VideoPlayer }
