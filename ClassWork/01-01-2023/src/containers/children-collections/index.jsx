import { AppCard } from "../../components";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";
import { useQuery } from "react-query";
import axios from "axios";
const ChildrenCollections = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("winterCollection", () =>
    axios.get("http://localhost:9000/children").then((res) => res)
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data.data?.map((children) => (
            <AppCard
              item={children}
              handleAddToCart={(item) =>
                dispatch(cartSlice.actions.addToCart(item))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChildrenCollections;
