import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css' 
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
function ProfileScreen() {
  const navigate = useNavigate() ;
  const user = useSelector(selectUser)
  return (
    <div className = 'profileScreen'>
      <Nav />
      <div className = 'profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
        <img 
            
           src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
           <div className='profileScreen__details'>
               <h2>{user?.email}</h2>
               <div className='profileScreen__plans' >

                <button onClick = {()=> {auth.signOut() ; navigate('/')} }className='profileScreen__signOut'>Sign Out</button>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen