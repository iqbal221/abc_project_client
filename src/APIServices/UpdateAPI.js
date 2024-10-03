import axios from 'axios'


// Update
export default function Update(id,Name,Head,Type,Amount,Date,SL){
    let URL = 'http://localhost:5000/api/v1/UpdateInfo/'+id;
    let PostBody = {
        Name:Name,
        Head:Head,
        Type:Type,
        Amount:Amount,
        Date:Date,
        SL:SL
    }
    return axios.post(URL,PostBody,{
        headers:{
            authorization:`bearer ${localStorage.getItem('my-token')}`,
        }
    })
    .then((res)=>{
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