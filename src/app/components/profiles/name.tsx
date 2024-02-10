import { FC, memo } from 'react'

import type  { NameProps } from './types'

import Text from '../text'

const Name: FC<NameProps> = ({ name, lastName }) => {
    return (
        <Text
            className="profile-name md:text-2xl text-3xl max-w-1 font-semibold"
        >
            {name} <br className='md:block hidden' /> {lastName}
        </Text>
    )
}

export default memo(Name)