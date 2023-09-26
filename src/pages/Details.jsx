import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

const Details = () => {
  const { id } = useParams();
  const [data] = useGetData(parseInt(id));

  return data ? (
    <div className="mt-20">
      <div className="rounded-lg overflow-hidden relative">
        <img
          src={data.picture.split("/").slice(0, -2).join("/") + "/1320/700/"}
          alt={`Picture of ${data.title}`}
        />
        <div
          className="absolute bottom-0 p-5 md:p-9 w-full flex items-center"
          style={{ background: "rgba(11, 11, 11, 0.5)" }}
        >
          <button
            className="text-white text-base md:text-xl font-semibold p-3 md:px-6 md:py-4 rounded"
            style={{
              backgroundColor: data.text_button_bg_color,
            }}
          >
            Donate ${data.donate_ammount}
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-black1 mt-14 mb-6">
        {data.title}
      </h1>
      <p className="text-black117 leading-[30px]">{data.description}</p>
    </div>
  ) : (
    <div></div>
  );
};

export default Details;
