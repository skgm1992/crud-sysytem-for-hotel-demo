import React, { useEffect, useState } from 'react'
import { NavLink ,useParams, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik'
import axios from 'axios';

const Add = () => {

    let param = useParams();
    let navigate = useNavigate();

    let [hotel, setHotel] = useState({
        title: '',
        address: "",
        price: ""
    })
    useEffect(()=>{
        if(param.id){
            console.log(param.id)
          axios
         .get("http://localhost:3000/api/v1/hotel/"+param.id)
         .then(response=>{
           setHotel(response.data.result);
         })
        }
    },[param.id])

    let hotelFrm = useFormik({
        initialValues: hotel,
        enableReinitialize: true,
        onSubmit : (formData)=>{
          if(param.id){
            axios
           .put("http://localhost:3000/api/v1/hotel/"+param.id, formData)
           .then(response=>{
             navigate("/")
           })
          }else{
            axios
           .post("http://localhost:3000/api/v1/hotel",formData)
           .then(response=>{
             navigate("/")
           })
          }
        }
    })

    return (
        <>
            <div className='container my-5'>
                <form onSubmit={hotelFrm.handleSubmit}>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <h3 className='text-center'>{param.id ? "Update" : "Add New"} Hotel</h3>
                        <br />
                        <NavLink to="/" className="btn btn-info">Back</NavLink>
                        <div className='my-2'>
                            <label>Hotel title</label>
                            <input type='text' name="title" onChange={hotelFrm.handleChange} value={hotelFrm.values.title}  className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Address</label>
                            <textarea type='text' name="address" onChange={hotelFrm.handleChange} value={hotelFrm.values.address} className='form-control'></textarea>
                        </div>
                        <div className='my-2'>
                            <label>Price</label>
                            <input type='text' name="price" onChange={hotelFrm.handleChange} value={hotelFrm.values.price}  className='form-control' />
                        </div>
                        <div className='my-4 d-grid'>
                            <button type='submit' className="btn btn-primary">{param.id ? "Update" : "Add"}</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default Add