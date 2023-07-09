import {createStore} from "redux";

const inputname = "inputname";
const inputemail = "inputemail";
const inputpassword = "inputpassword";

export const setInputName = (text) =>(
    {
        type: inputname,
        text,
    }
)

export const setInputEmail = (email) =>(
    {
        type: inputemail,
        email,
    }
)

export const setInputPassword = (password) =>(
    {
        type: inputpassword,
        password,
    }
)

const initialState = {
    inputname: "",
    inputemail: "",
    inputpassword: "",
};

const inputReducer = (state = initialState, action) =>{
    if(action.type === inputname){
        return {...state, inputname:action.text};
    }
    if(action.type === inputemail){
        return {...state, inputemail:action.email};
    }
    if(action.type === inputpassword){
        return {...state, inputpassword: action.password};
    }
    return state
}

const Store = createStore(inputReducer);
export default Store;