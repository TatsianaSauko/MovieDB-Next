import Image from 'next/image';

export default async function MoviePage({ params }) {
  if (!params || !params.id) {
    throw new Error("Movie ID is missing");
  }

  const movieId = params.id;

  const res = await fetch(`https://cinemaguide.skillbox.cc/movie/${movieId}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movie = await res.json();

  const imageUrl = movie.posterUrl || movie.backdropUrl || null;

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        {imageUrl && (
          <Image
          src={imageUrl}
          alt={`${movie.title} poster`}
          width={300}
          height={450}
          style={{ width: 'auto', height: 'auto' }}
          className='rounded-lg'
          priority
        />
        )}
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.originalTitle}
          </h2>
          <p className='text-lg mb-3'>{movie.plot}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.releaseDate || movie.releaseYear}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.tmdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}
