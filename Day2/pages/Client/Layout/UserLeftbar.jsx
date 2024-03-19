import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../../redux/cartSlice';
function UserLeftbar() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderHandler = () => {
        navigate('/user/orders')
    }
    const settingsHandler = () => {
        navigate('/user/settings')
    }
    const ratingsHandler = () => {
        navigate('/pages/Ratings')
    }
    const logoutHandler = () => {
            localStorage.clear();
            dispatch(removeAllFromCart());
            navigate('/login');
    }
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={orderHandler}>
                        Orders
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                       UserProfile
                    </button>
                    <button className='left-bar-button nav-btn' onClick={ratingsHandler}>
                      Reviews
                    </button>

                    <button className='left-bar-button-logout-x nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default UserLeftbar