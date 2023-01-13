import { useDispatch } from "react-redux";
import { slice } from "../../store/slice/Cart";
import { useQuery } from "react-query";

import AppCard from "../../components/card";
import axios from "axios";

const Women = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery("womenCollection", () =>
  axios.get("http://localhost:9000/women").then((res) => res)
);
console.log(data);
  if (isLoading) return <p>Loading...</p>;
  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };

  return (
    <div className='bg-white'>
      <div className='mx-auto px-4'>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
          {data.data.map((kapray) => (
            <AppCard item={kapray} handleAddToCart={(item) => handleClick(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
