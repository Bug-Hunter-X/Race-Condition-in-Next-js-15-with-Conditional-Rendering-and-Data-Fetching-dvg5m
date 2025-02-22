```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow request to trigger the issue
  const data = fetchData();
  console.log('data', data);
  return (
    <div>
      <h1>About Page</h1>
      {/*Conditional rendering based on data*/}
       {data && <p>Data from server: {data.message}</p>}
    </div>
  );
}

const fetchData = async () => {
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
```
```javascript
//pages/api/hello.js

export default function handler(req, res) {
  //Simulate delay
  setTimeout(() => {
    res.status(200).json({ message: 'Hello from server!' });
  }, 3000);
}
```