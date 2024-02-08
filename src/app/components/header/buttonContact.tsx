import { FC, memo, useCallback } from 'react'

import Button from '../button'

import EmailIcon from './emailIcon'
import Text from '../text'

const ButtonContact: FC = () => {
    const handleClick = useCallback((elementId: string): void => {
        setTimeout(() => {
            document
              .getElementById(elementId)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              elementId = '';
          }, 100);
    }, [])

    return (
        <Button
            className="button-contact text-white
            focus:ring-4 focus:outline-none 
            font-medium rounded-lg text-sm md:px-5
            px-2 py-1
            md:py-2.5 text-center inline-flex items-center me-2 mb-2"
            onClick={() => handleClick("contact")}
        >
            <EmailIcon />
            <Text
                className='ms-2 hidden md:block'
            >
                Entre em contato
            </Text>
        </Button>
    )
}

export default memo(ButtonContact)