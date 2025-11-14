import { Link } from "react-router-dom"

const Header = ()=>{
    return(
        <div className="header">
            <h2>1</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/comp1">Comp1</Link></li>
                <li><Link to="/comp2">Comp2</Link></li>
                <li><Link to="/comp3">Comp3</Link></li>
            </ul>
        </div>
    )
}