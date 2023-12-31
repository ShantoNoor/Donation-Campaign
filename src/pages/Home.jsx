import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const data = useGetData();
  const navigate = useNavigate();
  const inputText = useRef();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = () => {
    const searchText = inputText.current.value;
    if (searchText === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.category.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <h3 className="mt-14 lg:mt-28 text-3xl md:text-5xl text-black111 text-center font-bold">
        I Grow By Helping People In Need
      </h3>

      <div className="flex mt-10 justify-center">
        <input
          className="border border-[#DEDEDE] h-12 w-[60%] md:w-[470px] p-4 rounded-tl-lg rounded-bl-lg"
          type="search"
          name="search"
          placeholder="Search here...."
          ref={inputText}
          onChange={() => {
            inputText.current.value === "" && handleSearch();
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch();
          }}
        />
        <button
          className="bg-red1 text-white px-7 rounded-tr-lg rounded-br-lg hover:bg-red-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[200px] md:mt-[300px] gap-6 justify-items-center">
        {filteredData?.map((item) => (
          <div
            className="rounded-tl-lg rounded-tr-lg overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-lg active:-translate-y-1 active:shadow-md"
            key={item.id}
            onClick={() =>
              navigate(`/donation/${item.id}`, { state: { title: item.title } })
            }
          >
            <img src={item.picture} alt={`Picture of ${item.title}`} />
            <div
              style={{
                padding: "16px",
                backgroundColor: item.card_bg_color,
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <span
                style={{
                  padding: "5px 10px",
                  backgroundColor: item.category_bg_color,
                  color: item.text_button_bg_color,
                  borderRadius: "4px",
                }}
              >
                {item.category}
              </span>
              <h4
                style={{ color: item.text_button_bg_color, marginTop: "8px" }}
              >
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
