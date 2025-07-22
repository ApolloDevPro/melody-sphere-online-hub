import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, MoreHorizontal } from 'lucide-react';
import albumPlaceholder from '@/assets/album-placeholder.jpg';

interface PlaylistCardProps {
  name: string;
  description?: string;
  trackCount: number;
  coverImage?: string;
  onPlay?: () => void;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  name,
  description,
  trackCount,
  coverImage = albumPlaceholder,
  onPlay
}) => {
  return (
    <div className="group relative bg-card/50 rounded-xl p-4 hover:bg-card/80 transition-all duration-300 cursor-pointer music-card-hover border border-accent/10">
      <div className="relative">
        <img
          src={coverImage}
          alt={name}
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
            <Play className="h-6 w-6 ml-1" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">
            {trackCount} {trackCount === 1 ? 'track' : 'tracks'}
          </span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};