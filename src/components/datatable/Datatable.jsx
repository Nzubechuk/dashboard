import React, { useState } from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import { Link } from 'react-router-dom';


const Datatable = () => {
  const [data,setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  }
    const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
        return (
            <div className='cellaction'>
                <div className='viewbtn'>
                <Link to="/users/test" style={{textDecoration: "none"}}>
                  View
                </Link>
                </div>
                <div className='deletebtn' onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }}]
  return (
    <div className='datatable'>
      <div className="datatabletitle">
        Add New User 
        <Link to="/users/new" className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
         className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable