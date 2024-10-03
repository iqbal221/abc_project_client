import axios from 'axios'

export default function Create(Name,Email,Password){
    let URL = 'http://localhost:5000/api/v1/CreateUser';
    let PostBody = {
        Name:Name,
        Email:Email,
        Password:Password,
    }
    return axios.post(URL,PostBody)
    
    .then((res)=>{
       console.log(res)
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}