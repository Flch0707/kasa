import { HouseCards } from "../components/HouseCards"
import { Baseline } from "../components/Baseline"
import { useLoaderData } from "react-router-dom"

export function Home () {

    const housing = useLoaderData()

    return <>
        <Baseline />
        <HouseCards housing={housing} />
    </>
}