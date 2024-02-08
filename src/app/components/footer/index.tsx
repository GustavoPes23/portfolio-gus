import { FC, memo } from 'react'

import Text from '../text';

import Logo from '../header/logo';

import "./styles.css";
import EmailIcon from '../header/emailIcon';

const year: number = new Date().getFullYear();

const index: FC = () => {
    return (
        <footer className="footer" id="contact">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:px-16">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Logo />
                        </a>
                    </div>
                    <div className="grid grid-cols-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex justify-start items-center">Contato</h2>
                            <ul className="text-white dark:text-gray-200 font-medium flex gap-2 justify-center items-center">
                               <Text>gunastudio@gmail.com</Text>
                               <EmailIcon />
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Text
                        className="text-sm text-white sm:text-center dark:text-gray-400"
                    >
                        © {year} Guna Studio. Todos os direitos reservados.
                    </Text>
                </div>
            </div>
        </footer>
    )
}

export default memo(index)