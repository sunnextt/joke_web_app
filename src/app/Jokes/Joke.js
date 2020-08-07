import React, { Component } from 'react'

export default class Joke extends Component {
    state = {
        jokes:[], 
        loading:true
    }

    componentDidMount () {
        //fetch joke
        this.fetchJokeFromJokeAPI()
    }

    fetchJokeFromJokeAPI = () => {
        this.setState({ loading: true })
        const category = this.props.match.params.category
        const url = ` https://sv443.net/jokeapi/v2/joke/${category}?type=single&amount=10`

        fetch(url).then(response => response.json()).then(result => {
           this.setState({
               jokes: result.jokes,
               loading:false
           })
        }).catch(error => {
            console.log(error)
            this.setState({
                loading:false,
                message: "Ah, something went wrong"
            })
        })
    }

    render () {
        const { jokes, loading } = this.state
        return (
          <div
            style={{
              justifyContent: "center",
              padding: 50,
              backgroundColor: "rgb(159, 200, 216)",
              color: "black",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <h3 className="the-jokes">
              {" "}
              {this.props.match.params.category} Jokes
            </h3>
            {loading && <p>Loading...</p>}
            {jokes.map((joke, idx) => (
              <div className="punchlines" key={idx}>
                <p>
                  {idx + 1}. {joke.joke}
                </p>
              </div>
            ))}

            <button onClick={this.fetchJokeFromJokeAPI} className="get-button">
              Get New Jokes
            </button>
          </div>
        );
    }
}