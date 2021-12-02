const INITIAL_STATE={
    name:"",
}

const reducer = (state = INITIAL_STATE, action) =>{
//     console.log(action);
  
    if (action.type === "DATAFROMAPI") {
      state = action.api;
      return { ...state, ...action };
    }
    return state;
  };
  
export default reducer