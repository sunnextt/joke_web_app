import React,  { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ToDo extends Component {
    state = {
        currentNumber:0
    }

    addNumber = () => {
        let {currentNumber} = this.state
        currentNumber++
        this.setState({ currentNumber })
    }

    removeNumber = () => {
        let {currentNumber} = this.state
        if (currentNumber > 0) {
            currentNumber--
            this.setState({ currentNumber })
        }   
    }

    updateCurrentNumber = (currentNumber) => {
       if (currentNumber>=0){
        this.setState({ currentNumber})
       }
        
    }

    render () {
        return (
        <div>
           <Link to="/about">Go To About</Link>
           <Link to="/contact">Go To Contact</Link>
           <Link to="/home">Go To Home</Link>
           <a target="_blank" href="/">Root</a>
        </div>
        )
    }
}


class SubtractionButton extends Component {
    render() {
        let {currentNumber} = this.props
        currentNumber--
        return (
            <button onClick={() => this.props.updateNumber(currentNumber)} className="button">-</button>
        )
    }
}


class AddButton extends Component {
    render() {
        let {currentNumber} = this.props
        currentNumber++
        return (
            <button onClick={()=> this.props.updateNumber(currentNumber)} className="button">+</button>
        )
    }
}


class Form extends Component {
    constructor () {
       super()
       //initialize state
       this.state = {
            todo:'',
            time:'',
            todoList:[]
       }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { todoList, todo, time } = this.state //destructuring

        const todoObject = {
            todo, 
            time,
        }
        todoList.push(todoObject)

        this.setState({ todoList, todo:'', time:'' })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="todo" onChange={this.handleChange} placeholder="To do" value={this.state.todo} />
                    <input name="time" onChange={this.handleChange} placeholder="Time" value={this.state.time} />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.todoList.map((item, index) => 
                    <li className="myList" style={{backgroundColor: index%2===0 ? 'orange' : 'blue'}} key={index}>
                        <p className="todoItem">{item.todo}</p> 
                        <p>
                        {item.time}
                        </p>
                    </li>
                    )}
                </ul>
            </div>
            
        )
    }
}
