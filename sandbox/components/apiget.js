import useSWR from 'swr'
import { useState } from 'react'

let fetcher = async (...args) => {
   let res = await fetch(...args);
   return res.json();
}

export default function ApiGet() {
  let [shouldFetch,setShouldFetch] = useState(false);
  let { data, error } = useSWR(shouldFetch ? '/api/apitest' : null, fetcher);

  let getData = () => setShouldFetch(true);

  let button = <button onClick={getData}>get data</button>

  if (error) return (
    <div>
      <div>failed to load</div>
      {button}
    </div>
  )
  if (!data) return (
    <div>
      <div>{shouldFetch ? 'Loading...' : 'click for data'}</div>
      {button}
    </div>
  )
  return (
    <div>
      <div>{data.message}</div>
      {button}
    </div>
  )
} 