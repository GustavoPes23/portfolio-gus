import { FC, memo } from 'react'

import ButtonContact from './buttonContact';
import Logo from './logo';

import "./styles.css";

const Index: FC = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-16" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <Logo />
                    </a>
                </div>
                <div className="flex flex-1 justify-end">
                    <ButtonContact />
                </div>
            </nav>
        </header>
    )
}

export default memo(Index)