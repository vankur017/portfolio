import React, { useState } from 'react';
import { Search, Star, Film, Play, Heart, Eye } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  category: string;
  rating: string;
  year: string;
  image: string;
}

export const TMDBMovieDemo: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar Odyssey',
      category: 'Sci-Fi',
      rating: '8.9',
      year: '2024',
      image: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-black',
    },
    {
      id: 2,
      title: 'Neon Cyberpunk 2099',
      category: 'Action',
      rating: '8.6',
      year: '2025',
      image: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-black',
    },
    {
      id: 3,
      title: 'The Silent Horizon',
      category: 'Drama',
      rating: '8.4',
      year: '2023',
      image: 'bg-gradient-to-br from-zinc-800 via-stone-900 to-black',
    },
    {
      id: 4,
      title: 'Quantum Paradox',
      category: 'Sci-Fi',
      rating: '9.1',
      year: '2026',
      image: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-black',
    },
  ];

  const filtered = movies.filter(
    (m) =>
      (category === 'All' || m.category === category) &&
      m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full rounded-2xl bg-[#0A0B10] border border-white/10 p-6 font-sans text-zinc-100 shadow-2xl space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Film className="w-5 h-5 text-cyan-400" />
          <h4 className="text-lg font-bold font-mono text-white">TMDB CINEMATIC DISCOVERY</h4>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search movie title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-black/50 border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 text-xs font-mono">
        {['All', 'Sci-Fi', 'Action', 'Drama'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full border transition-all ${
              category === cat
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                : 'bg-white/5 text-zinc-400 border-white/5 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Movies Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`h-40 ${movie.image} p-4 flex flex-col justify-between`}>
              <div className="flex justify-between items-center">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-white backdrop-blur">
                  {movie.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                  <Star className="w-3 h-3 fill-amber-300" /> {movie.rating}
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <span className="p-3 rounded-full bg-cyan-500 text-black shadow-lg">
                  <Play className="w-4 h-4 fill-black" />
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold font-mono text-white truncate">{movie.title}</div>
              <div className="text-[11px] text-zinc-400 font-mono mt-0.5">{movie.year} • Ultra HD 4K</div>
            </div>
          </div>
        ))}
      </div>

      {/* Movie Details Modal Preview */}
      {selectedMovie && (
        <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-200">
          <div className="flex items-center gap-3">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>Viewing details for <strong>{selectedMovie.title}</strong> ({selectedMovie.year})</span>
          </div>
          <button
            onClick={() => setSelectedMovie(null)}
            className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
          >
            CLOSE PREVIEW
          </button>
        </div>
      )}
    </div>
  );
};
