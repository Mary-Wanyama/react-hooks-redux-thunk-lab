export function fetchCats() {
return{
  dispatch({type: "action/catLoading"})
  fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
  .then(res=> res.json())
  .then(data =>{
    dispatch({
    type: "action/catLoaded", payload: data.images
    })
  })
}
const initialState = {
  entities: [],
  status: "idle"
}
export default function catsReducer(state = initialState, action) {
switch(action.type){
  case "action/catLoading":
    return{
      ...state,
      status: 'loading...'
    }
   case 'action/catLoaded'
    return{
     ...state,
        entities: action.payload,
        status: "idle",
}
  default: 
  return state
}
