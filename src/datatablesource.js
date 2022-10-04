export const userColumns = [{ field: "id", headerName: "ID", width: 70 },{
    field:"user", headerName:"User", width:230, renderCell: (params)=>{
        return (
            <div className="cellwithimg">
                <img className="cellimg" src={params.row.img} alt="" />
                {params.row.username}
            </div>
        );
    },
},
{
    field: "email",
    headerName: "Email",
    width: 230,
},
{
    field: "age",
    headerName: "Age",
    width: 100,
},
{
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell:(params)=>{
        return (
            <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
}
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" ,
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Ogbe",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" ,
        status: "passive",
        email: "1snow@gmail.com",
        age: 55,
    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "pending",
        email: "1snow@gmail.com",
        age: 45,
    },
    {
        id: 4,
        username: "Nzube",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 21,
    },
    {
        id: 6,
        username: "Cjack",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 38,
    },
    {
        id: 7,
        username: "Cami",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "passive",
        email: "1snow@gmail.com",
        age: 50,
    },
    {
        id: 8,
        username: "Camp",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "passive",
        email: "1snow@gmail.com",
        age: 30,
    },
    {
        id: 9,
        username: "Campbell",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 34,
    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
]