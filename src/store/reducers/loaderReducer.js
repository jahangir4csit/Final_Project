const initial = {
    loading: false,
};
const loadingReducer = (state=initial, action)=>{
    switch(action.type){
        case 'SHOW_LOADER':
            return {...state, loading: true};
        case 'HIDE_LOADER':
            return {...state, loading: false};  
        default: 
            return state;
    }
}
export default loadingReducer;