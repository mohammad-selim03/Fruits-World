// import { useEffect, useState } from "react"

// export default function Search() {
//     const [data setData] =useState([])
//     useEffect(() => {
//         fetch(`https://fruiterer-server2.onrender.com/fruits`)
//         .then(res => setData(res.data))
//         .catch(err => console.log(err))
//     },[])

//   return (
//     <div className="p-5 ">

//         <div className="bg-white shadow border">
//             <input type="text" />
//             <table className="table">
//                 <thead>
//                     <tr>

//                         <th>image_url</th>
//                         <th>title</th>
//                         <th>price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((d,i) => (
//                         <tr key={i}>

//                               <td>{d.image_url}</td>
//                               <td>{d.title}</td>
//                               <td>{d.price}</td>

//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//       {/* <input type="search" onChange={(e) => setQuery(e.target.value)} placeholder="Search" /> */}

//     </div>
//   )
// }
