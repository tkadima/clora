import React from 'react';
class ConsultantsList extends React.Component {

    

    render() {
        {this.props.consultants.map(function (consultant) {
            return (
                <tr key={consultant._key}>
                    <td>{consultant.full_name}</td>
                    {/*<td>{consultant.skills}</td>*/}
                    <td>{consultant.locality}</td>
                </tr>
            )
        })}
    }
}