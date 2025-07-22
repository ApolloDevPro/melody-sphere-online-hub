import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MusicPlayer } from '@/components/MusicPlayer';
import { MusicCard } from '@/components/MusicCard';
import { GenreCard } from '@/components/GenreCard';
import { PlaylistCard } from '@/components/PlaylistCard';
import { SearchBar } from '@/components/SearchBar';
import { 
  TrendingUp, 
  Music, 
  Plus, 
  Clock, 
  Heart,
  Library,
  Radio,
  Mic2
} from 'lucide-react';
import musicHero from '@/assets/music-hero.jpg';

const Index = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const featuredTracks = [
    { id: '1', title: 'Midnight Dreams', artist: 'Luna Wave', duration: '3:42' },
    { id: '2', title: 'Electric Pulse', artist: 'Neon Riders', duration: '4:15' },
    { id: '3', title: 'Ocean Breeze', artist: 'Azure Sky', duration: '3:28' },
    { id: '4', title: 'Digital Love', artist: 'Cyber Hearts', duration: '4:02' },
    { id: '5', title: 'Sunset Drive', artist: 'Retro Future', duration: '3:55' },
    { id: '6', title: 'Starlight', artist: 'Cosmic Drift', duration: '4:33' },
  ];

  const genres = [
    { name: 'Electronic', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Pop', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { name: 'Rock', color: 'bg-gradient-to-br from-red-500 to-orange-500' },
    { name: 'Hip Hop', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { name: 'Jazz', color: 'bg-gradient-to-br from-yellow-500 to-amber-500' },
    { name: 'Classical', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
  ];

  const playlists = [
    { name: 'Chill Vibes', description: 'Relax and unwind', trackCount: 24 },
    { name: 'Workout Mix', description: 'High energy tracks', trackCount: 18 },
    { name: 'Study Focus', description: 'Instrumental background', trackCount: 32 },
    { name: 'Party Time', description: 'Dance floor hits', trackCount: 15 },
  ];

  const handlePlay = (trackId: string) => {
    setCurrentlyPlaying(currentlyPlaying === trackId ? null : trackId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/20">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-music-gradient rounded-lg flex items-center justify-center">
                  <Music className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-foreground">SoundWave</h1>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Discover
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Library className="h-4 w-4 mr-2" />
                  Library
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Radio className="h-4 w-4 mr-2" />
                  Radio
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <SearchBar onSearch={(query) => console.log('Search:', query)} />
              <Button variant="music" className="hidden md:flex">
                <Mic2 className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${musicHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="relative max-w-screen-xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white mb-4">
                Discover Your
                <span className="bg-music-gradient bg-clip-text text-transparent"> Sound</span>
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Stream millions of songs, create playlists, and find your new favorite artists.
              </p>
              <div className="flex gap-4">
                <Button variant="music" size="lg" className="text-lg px-8">
                  Start Listening
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-background">
                  Browse Genres
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-screen-xl mx-auto px-6 py-12 pb-32 space-y-12">
        {/* Quick Actions */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="player" className="h-16 justify-start gap-3">
            <Heart className="h-5 w-5 text-accent" />
            <span>Liked Songs</span>
          </Button>
          <Button variant="player" className="h-16 justify-start gap-3">
            <Clock className="h-5 w-5 text-blue-400" />
            <span>Recently Played</span>
          </Button>
          <Button variant="player" className="h-16 justify-start gap-3">
            <Plus className="h-5 w-5 text-green-400" />
            <span>Create Playlist</span>
          </Button>
          <Button variant="player" className="h-16 justify-start gap-3">
            <TrendingUp className="h-5 w-5 text-orange-400" />
            <span>Trending Now</span>
          </Button>
        </section>

        {/* Featured Tracks */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Tracks</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredTracks.map((track) => (
              <MusicCard
                key={track.id}
                title={track.title}
                artist={track.artist}
                duration={track.duration}
                isPlaying={currentlyPlaying === track.id}
                onPlay={() => handlePlay(track.id)}
              />
            ))}
          </div>
        </section>

        {/* Browse by Genre */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Browse Genres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre) => (
              <GenreCard
                key={genre.name}
                genre={genre.name}
                color={genre.color}
                onClick={() => console.log('Genre clicked:', genre.name)}
              />
            ))}
          </div>
        </section>

        {/* Your Playlists */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Playlists</h2>
            <Button variant="music">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.name}
                name={playlist.name}
                description={playlist.description}
                trackCount={playlist.trackCount}
                onPlay={() => console.log('Playlist clicked:', playlist.name)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
