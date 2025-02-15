import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  const imageUrl = result.posterUrl || result.backdropUrl || null;
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link rel="preload" href={`/movie/${result.id}`}>
      {imageUrl &&<Image
          src={imageUrl}
          alt={`${result.title} poster`}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          priority={true}
        ></Image>}
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.plot}</p>
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.originalTitle}
          </h2>
          <p className='flex items-center'>
            {result.releaseDate || result.releaseYear}
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.tmdbRating}
          </p>
        </div>
      </Link>
    </div>
  );
}