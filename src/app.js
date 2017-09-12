import React from 'react';
import './style.css';
import data from './trimmed_profiles.json';
class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            consultants: [],
            product: "",
            experience: "",
            location: ""
        };

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);


    }

    onChangeProduct(event) {
        this.setState({product: event.target.value})
    }
    onChangeExperience(event){
        this.setState({experience: event.target.value})
    }

    onChangeLocation(event) {
        this.setState({location: event.target.value})
    }

    // retrieves all the consultants in the json file and loads them onto
    // "consultants" array
    componentDidMount() {
        this.setState({consultants: data});

    }

    render() {

        let state = this.state;
        let consultants = this.state.consultants;

        if (state.product) {
           consultants = consultants.filter(function (c) {
               console.log(c.skills[0])
              //return c.skills.includes(state.product.toLowerCase())
           })

        }
        if (state.experience) {
            consultants = consultants.filter(function (c) {
                return JSON.stringify(c).includes(state.experience.toLowerCase())
            });
        }
        if (state.location) {
            consultants = consultants.filter(function (c) {
                return c.locality.toLowerCase() === state.location.toLowerCase()
            })
        }

        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label for="productSelect">Select a product</label><br />
                        <select className="form-control" id="productSelect" value={this.state.product}
                                onChange={this.onChangeProduct}>
                            <option></option>
                            <option value="biologic">Biologic</option>
                            <option value="combination product">Combination​ ​Product</option>
                            <option value="device">Device</option>
                            <option value="drug">Drug</option>
                            <option value="food supplement">Food Supplement</option>
                            <option value="medical food">Medical Food</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="from-group">
                        <label for="experience">Experience</label>
                        <input className="form-control" type="text" id="experience" placeholder="e.g. phase 2 studies"
                        value={this.state.experience} onChange={this.onChangeExperience}/>
                    </div>
                    <div className="from-group">
                        <label for="location">Location</label>
                        <input className="form-control" type="text" placeholder="e.g. City, State, Zip code"
                        value={this.state.location} onChange={this.onChangeLocation}/>
                    </div>
                </form>
                <hr />
                <h2 className="title"> List of Consultants </h2>
                <table className="table table-hover">
                    <tbody>
                    {
                        consultants.map(function (consultant) {
                        return (
                            <tr key={consultant._key}>
                                <td>{consultant.full_name}</td>
                                <td>{consultant.title}</td>
                                <td>{consultant.locality}</td>
                                <td>{consultant.summary}</td>
                                {/*{<td>{consultant.skills}</td>}*/}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default App;
