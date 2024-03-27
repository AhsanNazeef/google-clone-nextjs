import { useRouter } from 'next/router';
import Meta from '../components/Meta';
import Header from '../components/Header';


function Search({ payload }: {payload: any}) {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  
  return (
    <div>
      <Meta title={`${q} - Google Search`} />
      <Header />
    </div>
  );
}

export default Search;
