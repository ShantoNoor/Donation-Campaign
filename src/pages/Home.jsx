import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <h3 className="mt-14 lg:mt-28 text-5xl text-black111 text-center font-bold">
        I Grow By Helping People In Need
      </h3>

      <div className="flex mt-10 justify-center">
        <input
          className="border border-[#DEDEDE] h-12 w-[470px] p-4 rounded-tl-lg rounded-bl-lg"
          type="search"
          name="search"
          placeholder="Search here...."
        />
        <button className="bg-red1 text-white px-7 rounded-tr-lg rounded-br-lg hover:bg-red-600">
          Search
        </button>
      </div>

      <div className="grid grid-cols-4">
        {data?.map((item) => (
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
