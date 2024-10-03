import React from 'react'
import Update from '../components/Update'
import NavBar from '../Common/NavBar'
import {useParams} from 'react-router-dom'

function UpdatePage() {

  const params = useParams();

  return (
    <div className='container'>
        <NavBar/>
        <Update UserID={params['UserID']}/>
    </div>
  )
}

export default UpdatePage