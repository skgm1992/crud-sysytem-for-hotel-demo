import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';


const Home = () => {
  let [hotel, setHotel] = useState({});
  let [view, setView] = useState(false);
  let [allHotel, setAllHotel] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/hotel")
      .then(response => {
        setAllHotel(response.data.result)
      })
  }, [])

  let openPopUP = () => {
    setView(true);

  }
  let closePopUp = () => {
    setView(false);
  }
  let askDelete =(obj)=>{
       setHotel(obj);
      //  console.log(obj)
       openPopUP();
  } 
  let confDelete = ()=>{
    console.log(hotel)
    axios
    .delete("http://localhost:3000/api/v1/hotel/"+hotel._id)
    .then(response=>{
      // console.log(response.data)
    })
    setAllHotel(prev=>prev.filter(item=>item._id != hotel._id));
    closePopUp()
  } 

  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-12 bg-secondary py-4'>
            <h3 className='text-center'>List Of All Hotel</h3>
            <br />
            <NavLink to="/add" className="btn btn-secondary">Add NEW Hotel</NavLink>
            <table className="my-3 table table-bordered table-striped table-hover table-light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  allHotel.map((item, index)=><tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.address}</td>
                    <td>{item.price}</td>
                    <td><NavLink to={"/edit/"+item._id} className="btn btn-warning">Edit</NavLink></td>
                    <td><button onClick={()=>askDelete(item)} className="btn btn-danger">Delete</button></td>
                  </tr>)
                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <Modal show={view} onHide={closePopUp}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {allHotel.title} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure Want to delete {allHotel.title} hotel!</Modal.Body>
        <Modal.Footer>
         <button onClick={closePopUp} className="btn btn-primary">Close</button>
         <button onClick={confDelete} className="btn btn-danger">Delete</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home