import React from 'react'
import Options from './Options'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Options name="Profile" />
            <Options name="Health Tracker" />
            <Options name="AI Voice Assitant" />
            <Options name="Exercise and Meditation" />
            <Options name="Nutrition guide" />
            <Options name="Individual therapy" />
            <Options name="Discussion Forum" />
            <Options name="Logout" />
        </div>
    )
}

export default Sidebar