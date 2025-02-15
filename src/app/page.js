import Results from '@/components/Results';

export default async function Home({searchParams}) {
  const genre = searchParams?.genre || 'fetchTrending';
    let results;

    try {
        const res = await fetch(
            `https://cinemaguide.skillbox.cc/movie${
              genre === 'fetchTopRated' ? `/top10` : ``
            }`,
            { next: { revalidate: 10000 } },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        results = await res.json();
        console.log(results)
    } catch (error) {
        console.error('Error fetching data:', error);
        data = { error: 'Failed to fetch data' };
    }
  return (
    <div>
    <Results results={results} />
  </div>
  )
}
