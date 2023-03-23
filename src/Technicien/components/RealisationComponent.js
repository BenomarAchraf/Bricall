import React from 'react';
import RealisationService from '../../services/RealisationService'
import { FaTools } from 'react-icons/fa';
import section from "../../Assets/Images/section2.png"

class RealisationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            realisations:[]
        }
    }
    componentDidMount() {
        RealisationService.getRealisations().then((response) => {
            this.setState({realisations: response.data})
        })
    }
    render() {
        return (
            <div className="menu">
                <img className="menu-section" src={section} alt="" />
                <h1 className="menuTitle1" ><FaTools/></h1>
                <h1 className="menuTitle2">Découvrez mes réalisations</h1>

                <div className="menuList">
                    {this.state.realisations.map(
                        realisation =>
                            <div className="menuItem" key={realisation.id}>
                                <div style={{ backgroundImage: `url(${realisation.image})` }}> </div>
                                <h1 > {realisation.titre} </h1>
                                <p>{realisation.description}</p>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}
export default RealisationComponent;