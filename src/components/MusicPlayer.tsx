import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Repeat, 
  Shuffle,
  Heart
} from 'lucide-react';
import albumPlaceholder from '@/assets/album-placeholder.jpg';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  albumArt: string;
}

const currentTrack: Track = {
  id: '1',
  title: 'Midnight Dreams',
  artist: 'Luna Wave',
  album: 'Neon Nights',
  duration: '3:42',
  albumArt: albumPlaceholder
};

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([45]);
  const [volume, setVolume] = useState([80]);
  const [isLiked, setIsLiked] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setIsLiked(!isLiked);
  const toggleRepeat = () => setIsRepeat(!isRepeat);
  const toggleShuffle = () => setIsShuffle(!isShuffle);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-accent/20 p-4 z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Current Track Info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="relative group">
              <img
                src={currentTrack.albumArt}
                alt={currentTrack.album}
                className="w-14 h-14 rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-foreground truncate">{currentTrack.title}</h4>
              <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLike}
              className={`${isLiked ? 'text-accent' : 'text-muted-foreground'} hover:text-accent transition-colors`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleShuffle}
                className={`${isShuffle ? 'text-accent' : 'text-muted-foreground'} hover:text-accent transition-colors`}
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button
                variant="player"
                size="icon"
                onClick={togglePlay}
                className="h-12 w-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <SkipForward className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleRepeat}
                className={`${isRepeat ? 'text-accent' : 'text-muted-foreground'} hover:text-accent transition-colors`}
              >
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full text-xs text-muted-foreground">
              <span>1:23</span>
              <Slider
                value={currentTime}
                onValueChange={setCurrentTime}
                max={222}
                step={1}
                className="flex-1"
              />
              <span>3:42</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};