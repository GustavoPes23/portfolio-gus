import { FC, memo } from "react"

import Profile from "./profile";

import GustavoImage from "../../../../public/images/gus.jpg";
import LuanaImage from "../../../../public/images/nana.jpg";

import Main from "../main";
import Section from "../section";
import Star from "./star";
import Name from "./name";

import Circle from "./circle";
import Job from "./job";
import Presentation from "./presentation";

import "./styles.css";

const Index: FC = () => {
    return (
        <div
            className="profile"
        >
            <Main
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <Section
                    ariaLabelledby="Profile"
                    className="pb-24 pt-6"
                >
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-4 px-6">
                        <Presentation />
                        <div
                            className="col-span-1 flex justify-center items-center sm:block"
                        >
                            <Star />
                        </div>
                        <div
                            className="col-span-1"
                        >
                            <div
                                className="grid justify-center"
                            >
                                <div
                                    className="col-span-12"
                                >
                                    <Profile
                                        src={GustavoImage.src}
                                        alt="Gustavo"
                                        link="https://www.linkedin.com/in/gustavo-pes-659714177/"
                                    />
                                </div>
                                <div
                                    className="col-span-12"
                                >
                                    <Name
                                        name="Gustavo"
                                        lastName="Pes"
                                    />
                                </div>
                                <div
                                    className="col-span-12"
                                >
                                    <Job
                                        description="Software Developer"
                                        place="no Mercado Livre"
                                        link="https://www.linkedin.com/in/gustavo-pes-659714177/"
                                    />
                                </div>
                            </div>

                        </div>
                        <div
                            className="col-span-1 flex justify-center"
                        >
                            <div
                                className="grid justify-center"
                            >
                                <div
                                    className="col-span-12"
                                >
                                    <Profile
                                        src={LuanaImage.src}
                                        alt="Luana"
                                        link="https://www.linkedin.com/in/luanadagustinho/"
                                    />
                                    <Circle />
                                </div>
                                <div
                                    className="col-span-12"
                                >
                                    <Name
                                        name="Luana"
                                        lastName="Dagustinho"
                                    />
                                </div>
                                <div
                                    className="col-span-12"
                                >
                                    <Job
                                        description="Designer Gráfico"
                                        place="na Emais"
                                        link="https://www.linkedin.com/in/luanadagustinho/"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </Main>
        </div>

    )
}

export default memo(Index);
