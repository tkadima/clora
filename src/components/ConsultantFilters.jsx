import React, { Component } from 'react'

class ConsultantFilters extends Component {
  state = {
    experience: '',
    location: '',
    product: ''
  }

  onChangeFilter = (event) => {
    const { onSelectFilter } = this.props
    const filterType = event.target.id
    const value = event.target.value

    onSelectFilter(filterType, value)
    
    this.setState({
      [filterType]: value
    })
  }

  render(){
    const { experience, location, product } = this.state

    return(
      <div className="consultant-listing-filters">
        <div className="form-group">
            <label>Select a product</label><br />
            <select className="form-control" id="product" value={product}
                    onChange={this.onChangeFilter}>
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
            <label>Experience</label>
            <input className="form-control" type="text" id="experience" placeholder="e.g. phase 2 studies"
            value={experience} onChange={this.onChangeFilter}/>
        </div>
        <div className="from-group">
            <label>Location</label>
            <input className="form-control" type="text" placeholder="e.g. City, State, Zip code"
            value={location} id="location" onChange={this.onChangeFilter}/>
        </div>
      </div>
    )
  }
}

export default ConsultantFilters
