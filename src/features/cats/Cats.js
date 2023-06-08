import React from "react";
import {useSelector, useDispatch} from 'react-redux'

function Cats() {
  
  const catsPics = useSelector(state => state.entities)
  const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(fetchCats());
  }, []);
  return (
    <div>
      <h1>CatBook</h1>
    <ul>
    {catsPics.map(cats)=>{
  <li key={cats.id}>{cats.image}{cats.name}</li>
  }
    </ul>
      
    </div>
  );
}

export default Cats;
