import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount () {
        //fetch joke categories
        this.fetchCategoriesFromJokesAPI()
    }

    fetchCategoriesFromJokesAPI = () => {
        const url = 'https://sv443.net/jokeapi/v2/categories'

        fetch(url).then(response => response.json()).then(result => {
           this.setState({ 
               categories: result.categories
           })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {categories} = this.state
        return (
          <div className="joke-app">
            <h3 className="joke-header">Joke Categories</h3>
            <div className="joke-component">
              {categories.map((category, idx) => (
                <Link to={"/jokes/" + category} key={idx}>
                  <p>
                    {" "} {category}{" "}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        );
       
    }
}