import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import albumPlaceholder from '@/assets/album-placeholder.jpg';

interface MusicCardProps {
  title: string;
  artist: string;
  albumArt?: string;
  duration?: string;
  isPlaying?: boolean;
  onPlay?: () => void;
  onLike?: () => void;
  isLiked?: boolean;
}

export const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  albumArt = albumPlaceholder,
  duration = "3:24",
  isPlaying = false,
  onPlay,
  onLike,
  isLiked = false
}) => {
  return (
    <div className="group relative bg-card/50 rounded-xl p-4 hover:bg-card/80 transition-all duration-300 cursor-pointer music-card-hover border border-accent/10">
      <div className="relative">
        <img
          src={albumArt}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg mb-4 shadow-lg"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center mb-4">
          <Button
            variant="player"
            size="icon"
            onClick={onPlay}
            className="h-12 w-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-xl backdrop-blur-sm"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </Button>
        </div>
        
        {/* Music Wave Animation for Playing State */}
        {isPlaying && (
          <div className="absolute top-2 right-2 flex items-center gap-1">
            <div className="w-1 bg-primary music-wave rounded-full"></div>
            <div className="w-1 bg-primary music-wave rounded-full"></div>
            <div className="w-1 bg-primary music-wave rounded-full"></div>
            <div className="w-1 bg-primary music-wave rounded-full"></div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">{duration}</span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={onLike}
              className={`h-8 w-8 ${isLiked ? 'text-accent' : 'text-muted-foreground'} hover:text-accent`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};