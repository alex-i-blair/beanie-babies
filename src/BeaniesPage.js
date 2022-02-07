import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const PER_PAGE = 40;

  useEffect(() => {
    async function fetch() {
      const start = PER_PAGE * (page - 1) + 1;
      const end = start + PER_PAGE;
      const beanies = await getBeanieBabies(start, end, search);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [page, search]); // what can you do with this array to trigger a fetch every time the page changes?

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <h3>Search</h3>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </button>
        {/* on click, this button should increment the page in state  */}
        <button onClick={() => setPage(page + 1)} disabled={beanieBabies.length < PER_PAGE}>
          Next Page
        </button>
      </div>
      <BeaniesList beanieBabies={beanieBabies} />
      {/* pass the beanie babies into the BeaniesList component */}
    </>
  );
}

export default App;
