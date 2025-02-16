'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = useMemo(() => searchParams.get('genre'), [searchParams]);
  return (
    <div>
      <Link
      href={`/?genre=${param}`}
      prefetch={false}
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
        
      >
        {title}
      </Link>
    </div>
  );
}
