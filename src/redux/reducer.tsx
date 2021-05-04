
interface action{
  type: String,
  payload:any
}
interface initial {
  hotelList: Array<object>,
  renderList: Array<object>,
  countOfHotel: number,
  displayIndex: number
}
const initialState:initial = {
  hotelList: [],
  renderList: [],
  countOfHotel: 0,
  displayIndex : 0
}
export default function reducer(state = initialState,action : action) {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        hotelList : action.payload
      }
    case 'ADD_TO_DISPLAY':
      let maxIndex = state.countOfHotel - 1;
      let newList:Array<object> = []
      for (let i = state.displayIndex; i < Math.min(state.displayIndex + 3, maxIndex); i++){
        newList.push(state.hotelList[i])
      }
      return {
        ...state,
        renderList: [...state.renderList, ...newList],
        displayIndex: state.displayIndex + 1
      }
    default :
    return state
      
  }
}