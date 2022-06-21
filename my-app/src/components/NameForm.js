import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя:' + ' ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Отправить' />
                <hr/>
                <label onSubmit={this.handleSubmit}>
                    Выберите ваш любимый вкус:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='grapefruit'>Грейпфрут</option>
                        <option value='lime'>Лайм</option>
                        <option value='coconut'>Кокос</option>
                        <option value='mango'>Манго</option>
                    </select>
                </label>
            </form>
        )
    }
}

export default NameForm;