import React from 'react'
import Detail from '../components/Detail'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='navbar'>Talkspace</div>
            <div className='container'>
                <Sidebar />
                <Detail />
            </div>
        </div>
    )
}

export default Dashboard