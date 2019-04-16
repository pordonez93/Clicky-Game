import React, {Component} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Nav from "../Nav";
import ClickImage from "../ClickImage";
import data from "../../data.json";
import ("./Game.css");


class Game extends Component {
    state ={
        data,
        score: 0,
        topScore: 0
};

componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
        data: this.shuffleData(newData),
        score: newScore,
        topScore: newTopScore
    });
};

handleIncorrectGuess = data => {
    this.setState({
        data: this.resetData(data),
        score: 0
    });
};

handleItemClick = id => {
    let correctGuess= false;
    const newData = this.state.data.map (item =>{
        const newItem = {...item};
        if (newItem.id === id){
            if (!newItem.clicked){
                newItem.clicked = true;
                correctGuess= true;
            }
        }
        return newItem;
    });
    correctGuess ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
};

resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
};

shuffleData = data =>   {
    let i = data.length -1;
    for(; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    return data;
}

render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
            <div className="container">
                <div className="img-container">
                    {this.state.data.map(item => (
                        <ClickImage
                            key = {item.id}
                            id = {item.id}
                            score={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        <Footer />
      </div>
    );
  }
};

export default Game;
