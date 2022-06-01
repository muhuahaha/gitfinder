import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {});

  if (loading) {
    return <h3>Loading....</h3>;
  }
  return (
    <div>
      {data.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );

  return <div>CustomHookExample1</div>;
}

export default CustomHookExample1;
