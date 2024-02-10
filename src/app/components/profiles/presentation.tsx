import { FC, memo } from 'react'

import Text from '../text';

const Presentation: FC = () => {
    return (
        <div className="col-span-1 sm:max-w-60 text-center sm:text-start">
            <Text
                className='text-5xl'
            >
                Prazer,<br />
                Gustavo<br />
            </Text>
            <Text
                className='text-5xl text-and'
            >
                &
            </Text>
            <Text
                className='text-5xl ms-1'
            >
                Luana
            </Text>
            <br />
            <br />
            <Text
                className="mt-10 font-semibold"
            >
                Somos apaixonados por resolver problemas
                com soluções inteligentes e criativas.
            </Text>
        </div>
    )
}

export default memo(Presentation)