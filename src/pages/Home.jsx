import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <div>Home</div>
      <div className="grid grid-cols-4">
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.picture} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
