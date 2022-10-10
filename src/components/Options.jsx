import React from 'react'

const Options = ({ name }) => {
    return (
        <div className='options'>
            <div className='option-name'>
                <div className='userChatInfo'>
                    <span>{name}</span>
                </div>
            </div>

        </div>
    )
}

export default Options