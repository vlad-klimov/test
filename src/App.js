import React, {Component} from 'react';

import './App.css';
import Chart from './graps/chart';
import Select from '../../testgraphs/src/select/index';
import selectData from './select-data';


class App extends Component {
	selectChange = (e) => {
		let {value} = e.target;
		this.setState({data : value})
	};
	constructor(props){
		super(props);
		this.state = {
			data : 0
		}
	}
	render() {
		return (
			<div className="App">
				<div className='container select-container'>
					<Select id = '3'
									options={selectData}
									textField={'text'}
									valueField={'value'}
									onChange={this.selectChange}
					/>
				</div>
				<div className='container graph-container'>
					<Chart data = {this.state.data}/>
				</div>
			</div>
		);
	}
}

export default App;
