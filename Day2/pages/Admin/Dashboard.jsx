import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { getProductCount, getFeedbacktCount,getUserCount, getOrderCount } from '../../service/api';
import { getProductCount, getUserCount, getOrderCount } from '../../service/api';
import Feedback from '../Client/Feedback';
import img from "../../assets/bg1.jpg"
import img1 from "../../assets/bookeve.jpg";
const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);
  let fdc = 10
  const getCount = async () => {

    try {
      const [productsData, userData, ordersData] = await Promise.all([
        getProductCount(),
        getUserCount(),
        getOrderCount()
        // getFeedbacktCount(),
      ]);
      setProducts(productsData.data)
      setUsers(userData.data)
      setOrders(ordersData.data)

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCount()
  }, [])

  return (
    <>
      <Layout />
      {/* <div>
        <img className='bg'src={img}/>
      </div> */}
      
      <div className='ma'>
      <div>
        <img className='bg2'src={img1}/>
      </div>
        <div className='card-container'>
          <div className='card shadow'>
            
            <div className='card-header'>
              {users.count}
            </div>
            <div className='card-footer'>
              Users
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-header'>
              {products.count}
            </div>
            <div className='card-footer'>
             Events
            </div>
          </div>
          <div className='card shadow'>
            <div className='card-header'>
              {orders.count}
            </div>
            <div className='card-footer'>
              Orders
            </div>
          </div>
          {/* <div className='card shadow'>
            <div className='card-header'>
              {fdc}
            </div>
            <div className='card-footer'>
              Feedbacks
            </div>
          </div> */}
        </div>
<h1 className='des'>
Event management is a multifaceted field that involves planning, organizing, and executing various types of events, such as conferences, weddings, trade shows, concerts, and corporate meetings. Successful event management requires a range of skills and features to ensure that events run smoothly and meet their objectives. 
</h1>
      </div>

    </>
  )
}
export default Dashboard;