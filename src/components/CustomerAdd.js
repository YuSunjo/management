import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            file: null,
            userName:'',
            job: '',
            gender:'',
            fileName:''
        }
    }
    handleForSubmit= (e)=>{
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            gender: '',
            job: '',
            fileName:'',
        })
        
    }
    handleFileChange=(e) => {
        this.setState( {
            file: e.target.files[0],
            fileName: e.target.value,

        })
    }
    handleValueChange=(e)=>{
        let nextState={};
        nextState[e.target.name] =e.target.value;
        this.setState(nextState);
    }
    addCustomer = () => {
        const url ='/api/customers';
        const formData=new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
        
    }
    render(){
        return( 
            <form onSubmit={this.handleForSubmit}>
                <h1>고객추가</h1>
                프로필 이미지 : <input type="file" name="file"
                file ={this.state.file} value ={this.state.fileName} onChange={this.handleFileChange}></input><br />
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}></input><br />
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}></input><br />
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}></input><br />
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;