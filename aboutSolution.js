```javascript
// pages/about.js
import { Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function About() {
  const data = useLoaderData();
  return (
    <div>
      <h1>About Page</h1>
      {data && <p>Data from server: {data.message}</p>}
    </div>
  );
}

export const loader = async () => {
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; //Re-throw the error
  }
};
```