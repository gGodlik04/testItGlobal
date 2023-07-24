import React from 'react' 
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount () {
    fetch('/api')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.clients
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: true
        });
      }
    )
  }


  render () {
    const{error, isLoaded, items} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {items.map(item => (
              <li key={item.names}>
                {item.name}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
