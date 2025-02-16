import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  const { searchTerm } = await params
  
  const res = await fetch(
    `https://cinemaguide.skillbox.cc/movie?title=${searchTerm}`
  );
  const data = await res.json();
  const results = data;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}