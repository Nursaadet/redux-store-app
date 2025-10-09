import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Card from '../components/Card'
import { Product, VoidFunc } from '../models/models'
import { removeFavorites } from '../features/productsSlice'
import { toastSuccessNotify } from '../helper/ToastNotify'

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();
  console.log(favorites)

  const handleRemove:VoidFunc = (product) => {
    const newData:Product[] = favorites.filter(item=> item.id !== product.id)
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Products removed...")
  };


  return (
    <div>
      <h1 className="font-bold text-3xl text-pink-800 text-center m-3 mt-8 font-oswald">
        My Favorites Products
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
        {favorites.length === 0 && (
          <h3 className="font-bold text-2xl text-red-700 text-center mt-52">
           No favorites..
          </h3>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage
