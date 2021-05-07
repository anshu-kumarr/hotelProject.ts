
interface action{
  type: String,
  payload:any
}
interface initial {
  hotelList: Array<object>,
  renderList: Array<object>,
  countOfHotel: number,
  displayIndex: number,
  showMap:Boolean
}
const initialState:initial = {
  hotelList: [],
  renderList: [],
  countOfHotel: 0,
  displayIndex: 0,
  showMap:true
}
export default function reducer(state = initialState,action : action) {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        hotelList: [...state.hotelList,...action.payload],
        countOfHotel: 12
      }
    case 'TOGGLE':
      return {
        ...state,
        showMap : !state.showMap
      }
    case 'ADD_TO_DISPLAY':
      return {
        ...state,
        renderList: [...state.renderList, ...action.payload],
        displayIndex: state.displayIndex + 6
      }
    default :
    return state
      
  }
}