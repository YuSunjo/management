import React ,{Component} from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends Component {


    render() {
        return (
            
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.age}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>
                
        )
    }
}


// class CustomerProfile extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt="profile"></img>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.age}
//                 {this.props.job}
//             </div>
//         )
//     }
// }


export default Customer;
