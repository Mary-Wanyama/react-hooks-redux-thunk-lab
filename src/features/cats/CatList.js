// write your CatList component here

import React from 'react'
import {useSelector} from 'react-redux'

export default function List(){
  const listing = Useselector(state=>state.entities)
return(
<ul>
  {listing.map(list)=>{
<li key={list.id}>{{list.image} {list.name}</li>
}
  </ul>
)
}
