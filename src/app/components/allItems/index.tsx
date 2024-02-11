import { FC, useState, useEffect } from "react";

import Item from "./item";
import Modal from "../modal";

import type { ItemsProps } from "./types";
import { ItemData } from "@/app/constants/types";

import axios from "axios";

import "./styles.css";
import ApiConfig from "@/services/ApiConfig";
import Service from "@/services/Service";

const Index: FC<ItemsProps> = ({
    items,
    filter
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const filtered: ItemData[] = filter ? items.filter((item) => item.name === filter) : items;

    useEffect(() => {
        // const apiConfig = new ApiConfig();
        // console.log(apiConfig.getBaseUrl())

        // axios({
        //     method: "get",
        //     url: "http://localhost:4000/api/item",
        // }).then(function (response) {
        //     console.log(response.data)
        // });

        const service = new Service();
        service.doGet("item").then((response) => {
            console.log(response)
        })
    })

    return (
        <>
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8">
                    {filtered.map(({ id, name, imageSrc, imageAlt }) => (
                        <Item
                            key={id}
                            open={open}
                            setOpen={setOpen}
                            id={id}
                            name={name}
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                            href={""}
                            tag={""}
                        />
                    ))}
                </div>
            </div>
            <Modal
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default Index;