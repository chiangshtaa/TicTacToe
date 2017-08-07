class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 1,
    }
  }

  selected(event) {
    if (this.state.playerTurn === 1) {
      event.target.innerHTML = 'X';
      this.setState({
        playerTurn: 2
      })
    }
    if (this.state.playerTurn === 2) {
      event.target.innerHTML = 'O';
      this.setState({
        playerTurn: 1
      })
    }
  }

  render() {
    return (
      <table style={{borderCollapse: 'collapse'}}>
        <tbody>
          <tr>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
          </tr>
          <tr>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
          </tr>
          <tr>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
            <td onClick={(e) => this.selected(e)} style={{height: 40, width: 40, border: 'solid'}}></td>
          </tr>
        </tbody>
      </table>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

