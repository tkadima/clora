import React from 'react'

const ConsultantTable = ({consultants}) => {
  return (
    <div className="consultant-listing-table">
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
                  </tr>
              )
          })}
          </tbody>
      </table>
    </div>
  )
}

export default ConsultantTable
