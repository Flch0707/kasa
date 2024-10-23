import { useRouteError } from "react-router-dom"

export function PageError () {

    const error = useRouteError()

    return <div>Une erreur est survenue :
        {error?.error?.toString() ?? error?.toString()}
    </div>
}