import React from "react";
import { useDispatch } from 'react-redux'
import List from './CatList'

function Cats() {
  
  
  const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(fetchCats());
  }, []);
  return (
    <div>
      <h1>CatBook</h1>
    <LIst/>
    </div>
  );
}

export default Cats;
