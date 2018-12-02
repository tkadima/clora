import React, { Component } from 'react'
import data from '../trimmed_profiles.json'
import ConsultantFilters from './ConsultantFilters'
import ConsultantTable from './ConsultantTable'

class ConsultantContainer extends Component {
  state = {
    consultants: data,
    product: '',
    experience: '',
    location: ''
  }

  selectFilters = (filterType, value) => {
    this.setState({
      [filterType]: value
    })
  }

  filterByProperty = (consultants) => {
    const { experience, location, product } =  this.state
    if (product) {
      consultants = consultants.filter(consultant => {
        return consultant.summary && consultant.summary.includes(product)
      })
    }
    if (experience) {
      consultants = consultants.filter(consultant => {
        return consultant.summary && consultant.summary.includes(experience)
      })
    }
    if (location) {
      consultants = consultants.filter(consultant => {
        return consultant.locality && consultant.locality.includes(location)
      })
    }
    return consultants
  }

  render() {
    const consultants = this.filterByProperty(this.state.consultants)

    return (
      <div className="container-fluid">
          <ConsultantFilters onSelectFilter={this.selectFilters} />
          <hr />
          <ConsultantTable consultants={consultants} />
      </div>
    )
  }
}

export default ConsultantContainer
