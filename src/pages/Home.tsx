import SearchComp from "../components/SearchComp";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { fetchFail, fetchStart, getSuccessProduct } from "../features/productsSlice";
import { Products } from "../models/models";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchComp handleChange={handleChange} />
    </div>
  );
};

export default Home;
