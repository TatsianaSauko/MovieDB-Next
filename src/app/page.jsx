import Results from '@/components/Results';

export default async function Home({ searchParams }) {
  let { genre } = await searchParams;
  if (!genre) {
    genre = 'fetchTrending';
  }
  
  let results;

  try {
    const res = await fetch(
      `https://cinemaguide.skillbox.cc/movie${
        genre === 'fetchTopRated' ? `/top10` : ``
      }`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 10000 }
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    results = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    results = { error: 'Failed to fetch data' };
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
