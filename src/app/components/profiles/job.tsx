import { FC, memo } from 'react'

import Text from '../text'
import LinkedinLogo from './linkedinLogo'

import type { JobProps } from './types'

const Job: FC<JobProps> = ({ description, place, link }) => {
    return (
        <Text
            className='flex justify-start text-job gap-4 items-center'
        >
            {description}
            <br />
            {place}
            <LinkedinLogo 
                link={link}
            />
        </Text>
    )
}

export default memo(Job)