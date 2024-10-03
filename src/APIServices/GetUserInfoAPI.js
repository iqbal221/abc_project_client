// import axios from 'axios'

// export default function GetUserInfo(){
//     let URL = 'http://localhost:5000/api/v1/GetUserInfo'
//     return axios.get(URL,{
//         headers:{
//             authorization:`bearer ${localStorage.getItem('my-token')}`,
//         }
//     })
//     .then((res)=>{
//         if(res.status===200){
//             return res.data;
//         }
//         else{
//             return false;
//         }
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// }