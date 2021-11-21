import React from 'react'
import './login.css'
import action from '../redux/auth/action'
import {useSelector,useDispatch} from  'react-redux'

const {login,logout}=action;
const Login = () => {
    
    const dispatch = useDispatch();
    const isLogin = useSelector(state =>state.auth);
    console.log(isLogin.isLogin,"deta1",isLogin.accesstoken)
const loginfun=()=>{
    const accesstoken={token:'ddddddddddddddddd'};
    dispatch(login(accesstoken));
    // console.log(isLogin,"deta1")
    // setTimeout(()=>{console.log(isLogin,"deta2")},5000)
}
const logoutfun=()=>{
    dispatch(logout())
    // console.log(isLogin,"deta1")
}

    return (
        <div className="item">
            <button onClick={loginfun}>Login</button>
            <button onClick={logoutfun}>Logout</button>
        </div>
    )
}
export default Login;