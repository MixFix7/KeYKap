import React from 'react'
import { Link } from 'react-router-dom'

export const HaveAccount = ({title, titlePage, link, className}) => {
  return (
    <div>
        <h3>
            {title} 

            <Link
                className={`${className} ml-1`}
                to={link}
                style={{width: '70px', height: '35px', 
                        marginBottom: '0px', lineHeight: '33px',
                        fontSize: '13px'}}
            >
                {titlePage}
            </Link>
        </h3>
    </div>
  )
}
