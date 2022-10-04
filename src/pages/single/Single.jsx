import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singlecontainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" 
              alt="" 
              className="imgitem" 
              />
              <div className="details">
                <h1 className="itemtitle">Ugwu Campbell</h1>
                <div className="detailitem">
                  <span className="itemkey">Email:</span>
                  <span className="itemvalue">ugwunzube@gmail.com</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemvalue">+234806754321</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Address:</span>
                  <span className="itemvalue">Udenweze street New Haven Enugu</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Country:</span>
                  <span className="itemvalue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single