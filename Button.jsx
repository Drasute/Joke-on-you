import { useContext } from "react"
import { Store } from "./Store"

export default function Button() {

    const {doRefresh} = useContext(Store)

    return(
        <div className="button">
            <button onClick={doRefresh}>10 new jokes?!</button>
        </div>
    )
}