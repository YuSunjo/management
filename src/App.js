import React , {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

class App extends Component {
  state={
    customers : [{
      id: 1,
      image : 'https://placeimg.com/64/64/1',
      name: '홍길동',
      age : 25,
      gender :'남자',
      job : '대학생',
    },
    {
      id: 2,
      image : 'https://placeimg.com/64/64/2',
      name: 'sunjo',
      age : 25,
      gender :'남자',
      job : '프로그래머',
    },
    {
      id: 3,
      image : 'https://placeimg.com/64/64/3',
      name: 'ga',
      age : 25,
      gender :'여자',
      job : '가수',
    },
  ]
  }
  

  render() {
    return (
      <div>
        {this.state.customers.map(  (customers) => {
          return (
            <Customer key={customers.id} id={customers.id} image={customers.image} name={customers.name} age={customers.age} gender = {customers.gender} 
            job = {customers.job} />
          )
        })}
      </div>
    )
  }
}

export default App;
