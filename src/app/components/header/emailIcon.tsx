import { FC, memo } from 'react';

const EmailIcon: FC = () => {
    return (
        <svg 
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px" 
            y="0px"
            viewBox="0 0 24 24"
            className='email-icon h-6 md-8'
        >
            <path 
                className="st0" 
                d="M12.7,12.1c-0.4,0.3-1,0.3-1.3,0L2.9,4.3C3.2,4.1,3.6,4,4,4h16c0.4,0,0.8,0.1,1.1,0.3L12.7,12.1z" 
            />
            <path 
                className="st0" 
                d="M22,6.3V17c0,1.7-1.3,3-3,3H5c-1.7,0-3-1.3-3-3V6.3l8.7,7.9c0.4,0.3,0.8,0.5,1.3,0.5c0.5,0,1-0.2,1.3-0.5
	            L22,6.3z"
            />
        </svg>
    )
};

export default memo(EmailIcon);
