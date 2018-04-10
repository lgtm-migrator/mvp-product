import React from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';
import MomentRu from 'moment/locale/ru';
import T, {t} from '../../components/Translate/Translate';


class Date extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	__change(event) {
		//event.preventDefault();
		let val = '';
		if(event._d) {
			val = event._d;
		} else {
			if(event && event.target && event.target.value) {
				val = event.target.value;
			} else {
				val = event;
			}
		}


		this.setState({value: val});

		if(typeof this.props.callback != "undefined") {
			this.props.callback(val);
		}
	}


	componentWillReceiveProps(nextProps) {
		if(nextProps && nextProps.value) {
			this.setState({value: nextProps.value});
		}
	}

	render() {
		let date = '';
		if(this.state.value) {
			let a = new Date(this.state.value);
			date = Moment(this.state.value).format('DD.MM.YYYY');
		}


		return (
			<div className="m2form_input m2form_text_input">
				{this.props.label && <label>{this.props.ph ? <T ph={this.props.ph} def={this.props.label}/> : this.props.label}</label>}
				<div className="date_wrapper">
					<Datetime
						value={date}
						onChange={this.__change.bind(this)}
						dateFormat="DD.MM.YYYY"
						timeFormat={false}
						locale="ru"
						inputProps={{placeholder: (this.props.placeholder) ? this.props.placeholder : ''}}
					/>
				</div>
			</div>
		);
	}

}

export default Date;