import "./Container.css"
import Navbar from "./Navbar";
import Card from "./Card"
import data from "../journeyData"
const Container = () => {
    const dataElement = data.map(item => {
        return <Card
            {...item} />
    })

    return (
        <div className="container">
            <Navbar />
            {dataElement}

        </div>
    )
}

export default Container;