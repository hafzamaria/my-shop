const Reducer = (state, action) => {
  
    switch (action.type) {
      case "MINUS": {
        return { ...state, myNum: state.myNum+1 }
      }
      case "ADD": {
        return { ...state, myNum: state.myNum+1 }
      }
      case "USER": {
        return { ...state, user: action.payload }
      }
      case "product": {
        return { ...state, user: null } 
      }
      case "CHANGE_THEME": {
        return { ...state, darkTheme: !state.darkTheme }
      }
      default: {
       return state
      }
    }
  }
  export default Reducer;