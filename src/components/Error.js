import React from 'react'

const Error = ({message}) => {
    return (
        <div className="alert alert-warning float-right text-center">
            <p>{message}</p>
        </div>
    )
}

export default Error
