import React from "react";
class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.atualizar = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.atualizar);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div  className="container text-center">
        <p> Horario Local:{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Relogio;