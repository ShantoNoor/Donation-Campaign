import useGetData from "../hooks/useGetData";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";

const Donation = () => {
  const localData = getValueFromLocalStorage("donate_list");
  const data = useGetData();
  const donated_list = data.filter((item) => localData.includes(item.id));

  return (
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-start">
      {donated_list.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-3 md:gap-6 rounded-lg overflow-hidden w-full"
            style={{ backgroundColor: item.card_bg_color }}
          >
            <img
              src={item.picture.split("/").slice(0, -2).join("/") + "/220/200/"}
              alt={`Picture of ${item.title}`}
            />
            <div className="flex flex-col justify-between py-6 ml-8 md:ml-0">
              <div>
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

                <h1 className="text-2xl font-semibold text-black2 my-1">
                  {item.title}
                </h1>
                <h2
                  style={{
                    color: item.text_button_bg_color,
                    fontWeight: "600",
                  }}
                >
                  ${item.donate_ammount}.00
                </h2>
              </div>
              <div>
                <button
                  className="text-white text-md md:text-xl font-semibold px-4 py-3 rounded hover:-translate-y-2 duration-300 cursor-pointer active:-translate-y-1 hover:shadow-lg active:shadow-md"
                  style={{
                    backgroundColor: item.text_button_bg_color,
                  }}
                  // onClick={() => handleClick(data.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Donation;
