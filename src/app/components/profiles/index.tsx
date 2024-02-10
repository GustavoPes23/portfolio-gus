import { FC, memo } from 'react'

import Profile from './profile';

import GustavoImage from "../../../../public/images/gus.jpg";
import LuanaImage from "../../../../public/images/nana.jpg";

import Star from './star';
import Name from './name';

import Circle from './circle';
import Job from './job';
import Presentation from './presentation';

import "./styles.css";

const Index: FC = () => {
    return (
        <main className="profile mx-auto">
            <section aria-labelledby="Profile" className="pb-24 pt-6">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-4 md:px-80 px-6">
                    <Presentation />
                    <div
                        className='col-span-1 flex justify-center items-center sm:block'
                    >
                        <Star />
                    </div>
                    <div
                        className='col-span-1'
                    >
                        <Profile
                            src={GustavoImage.src}
                            alt='Gustavo'
                            link="https://www.linkedin.com/in/gustavo-pes-659714177/"
                        />
                        <Name
                            name="Gustavo"
                            lastName='Pes'
                        />
                        <Job
                            description='Software Developer'
                            place="no Mercado Livre"
                            link="https://www.linkedin.com/in/gustavo-pes-659714177/"
                        />
                    </div>
                    <div
                        className='col-span-1'
                    >
                        <Profile
                            src={LuanaImage.src}
                            alt='Luana'
                            link="https://www.linkedin.com/in/luanadagustinho/"
                        />
                        <Name
                            name="Luana"
                            lastName='Dagustinho'
                        />
                         <Job
                            description='Designer Gráfico'
                            place="na Emais"
                            link="https://www.linkedin.com/in/luanadagustinho/"
                        />
                        {/* <Circle /> */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default memo(Index);
