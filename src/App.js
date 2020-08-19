import React , {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => ( 
  {
    root: {
      width: '100%',
      marginTop : theme.spacing.unit* 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 1080,
    }
  }
)

class App extends Component {
  state={
    customers : [{
      id: 1,
      image : 'https://placeimg.com/64/64/any',
      name: '홍길동',
      age : 25,
      gender :'남자',
      job : '대학생',
    },
    {
      id: 2,
      image : 'https://placeimg.com/64/64/any',
      name: 'sunjo',
      age : 25,
      gender :'남자',
      job : '가영이남편',
    },
    {
      id: 3,
      image : 'https://placeimg.com/64/64/any',
      name: 'gayoung',
      age : 25,
      gender :'여자',
      job : '교수',
    },
  ]
  }
  

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead> 
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell> 
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {this.state.customers.map(  (customers) => {
              return (
                <Customer key={customers.id} id={customers.id} image={customers.image} name={customers.name} age={customers.age} gender = {customers.gender} 
                job = {customers.job} />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
