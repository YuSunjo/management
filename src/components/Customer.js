import React ,{Component} from 'react';


class Customer extends Component {


    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo age={this.props.age}  job={this.props.job} />
            </div>
        )
    }
}


class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                {this.props.age}
                {this.props.job}
            </div>
        )
    }
}


export default Customer;
