import axios from 'axios'

export default function Create(Email,Password){
    let URL = 'http://localhost:5000/api/v1/LoginUser';
    let PostBody = {
        Email:Email,
        Password:Password
    }
    console.log(URL,PostBody)
    return axios.post(URL,PostBody)
    
    .then((res)=>{
        console.log(res)
       
        localStorage.setItem('my-token', res.data.token)
        if(res.status===200 ){
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