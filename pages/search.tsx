import { useRouter } from 'next/router';
import Meta from '../components/Meta';


function Search({ payload }: {payload: any}) {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  
  return (
    <div>
      <Meta title={`${q} - Google Search`} />
    </div>
  );
}

export default Search;
