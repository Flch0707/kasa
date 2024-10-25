import { HouseCards } from "../components/HouseCards"
import { Baseline } from "../components/Baseline"
import { useLoaderData } from "react-router-dom"

import image from "../assets/landscape.jpg"
const baseline = "Chez vous, partout et ailleurs"

export function Home () {
    const housing = useLoaderData()

    return <>
        <Baseline baseline={baseline} image={image} />
        <HouseCards housing={housing} />
    </>
}