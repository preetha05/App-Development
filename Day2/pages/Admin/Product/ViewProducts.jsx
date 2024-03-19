// import React from 'react'
// import { useState, useEffect } from 'react';
// import { getProduct, deleteProduct } from '../../../service/api';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import{AiTwotoneEdit} from "react-icons/ai";
// import { Trash, FileEdit, PlusCircle } from 'lucide-react';
// import Layout from '../Layout/Layout';
// const ViewProducts = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await getProduct()
//       setProducts(response.data);
//     }

//     catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     fetchProducts();
//   }, [])

//   const handleEdit = (id) => {
//     navigate(`/admin/product/edit/${id}`);
//   }
//   const handleDelete = async (id,product) => {
//     try {
//       const res = await deleteProduct(id);
//       console.log(res.status)
//       if (res.status == 200) {
//         toast.success(`${product} Deleted Successfully !`, {
//           position: "bottom-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//       fetchProducts();
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }

//   const routeAdd = () => {
//     navigate('/admin/product/add')
//   }
//   // const routeLogout = () => {
//   //   navigate('/')
//   // }
//   return (
//     <>
//       <Layout />
//       <div className='mainx1'>
//         <div className='shadow  data-table-container'>
//           <table className='data-table'>
//             <thead className='data-table-thead shadow'>
//               <tr>
//                 <th>
//                  Event
//                 </th>
//                 <th>
//                   Event Name
//                 </th>
//                 <th>
//                   Amount
//                 </th>
//                 <th>
//                  Guest Count(Appx)
//                 </th>
//                 <th>
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(products) ? (
//                 products.map((product) => (
//                   <tr key={product.pid}>
//                     <td> <img src={product.productImage} className='mini-product-img' /></td>
//                     <td>{product.productName}</td>
//                     <td>{product.productPrice}</td>
//                     <td>{product.productQuantity}</td>
//                     <td>
//                       <button className='data-btn-mini bg-white shadow' onClick={() => handleEdit(product.pid)}><AiTwotoneEdit color="green" /></button>
//                       <button className='data-btn-mini bg-white shadow' onClick={() => handleDelete(product.pid,product.productName)}><Trash color="#ff0000" /></button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5">No Events Available !</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <ToastContainer
//           position="bottom-right"
//           autoClose={4000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         {/* <button onClick={routeLogout} className='route-btn-2 bg-white'><Power color="#ff0000" /></button> */}
//         <button onClick={routeAdd} className='route-btn-1 bg-white'><PlusCircle color="#25db00" /></button>
//       </div>

//     </>
//   )
// }
// export default ViewProducts;

import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}