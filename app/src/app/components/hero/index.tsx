import { FC, memo } from 'react'

import HeroImage from './heroImage';
import Header from '../header'

import "./styles.css";

const Index: FC = () => {
    return (
        <div className="main-hero">
            <Header />
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-72 flex items-center justify-center">
                    <HeroImage />
                </div>
            </div>
        </div>
    )
};

export default memo(Index);