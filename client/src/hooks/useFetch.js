import React from "react";

class useFetch extends React.Component {
    state = {
        playerData: []
    };
    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ playerData: data });
            });
    }
    render() {
        return this.state.playerData;
    }
}

export default useFetch;