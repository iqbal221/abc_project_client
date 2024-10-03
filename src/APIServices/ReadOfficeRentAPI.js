import axios from 'axios'

export default function Read(){
    let URL = 'http://localhost:5000/api/v1/ReadByOfficeRent'
    return axios.get(URL,{
        headers:{
            authorization:`bearer ${localStorage.getItem('my-token')}`,
        }
    })
    .then((res)=>{
        if(res.status===200){
            return res.data["data"];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}