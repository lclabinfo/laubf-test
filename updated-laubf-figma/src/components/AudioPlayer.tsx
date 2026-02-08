import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, FastForward } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { cn } from './ui/utils';

interface AudioPlayerProps {
  src: string;
  title: string;
  onClose?: () => void;
}

export function AudioPlayer({ src, title, onClose }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleSpeed = () => {
      const rates = [1, 1.25, 1.5, 2];
      const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
      setPlaybackRate(rates[nextIndex]);
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 z-50 animate-in slide-in-from-bottom-full duration-500">
      <audio ref={audioRef} src={src} />
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
        
        {/* Info */}
        <div className="flex-1 min-w-0 text-center md:text-left">
           <div className="text-xs font-bold text-[#3667B1] uppercase tracking-widest mb-1">Now Playing</div>
           <h4 className="font-bold text-gray-900 truncate">{title}</h4>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center w-full md:w-1/2 gap-2">
           <div className="flex items-center gap-6">
              <button onClick={() => { if(audioRef.current) audioRef.current.currentTime -= 10; }} className="text-gray-400 hover:text-gray-900 transition-colors" title="-10s">
                 <RotateCcw className="w-5 h-5" />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                 {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
              </button>
              
              <button onClick={toggleSpeed} className="text-gray-400 hover:text-gray-900 transition-colors font-bold text-xs w-8" title="Playback Speed">
                 {playbackRate}x
              </button>
           </div>
           
           <div className="flex items-center gap-3 w-full">
              <span className="text-xs font-medium text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
              <Slider 
                value={[currentTime]} 
                max={duration} 
                step={1} 
                onValueChange={handleSeek}
                className="flex-1"
              />
              <span className="text-xs font-medium text-gray-400 w-10">{formatTime(duration)}</span>
           </div>
        </div>

        {/* Volume & Close */}
        <div className="hidden md:flex items-center gap-4 justify-end flex-1">
           <button onClick={toggleMute} className="text-gray-400 hover:text-gray-900">
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
           </button>
        </div>

      </div>
    </div>
  );
}
