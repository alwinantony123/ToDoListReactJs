import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {

      items: [],
      txtContent: "",
      // finish:false
    }
  }
  txtChange = (e) => {
    this.setState({ txtContent: e.target.value })
  }
  addItem = (e) => {
    let currentText = this.state.txtContent
    let currentItems = this.state.items
    currentItems.push({ task: currentText, finish: false })
    this.setState({ items: currentItems })
  }
  remove = (i) => {
    let currentItems = this.state.items
    currentItems.splice(i, 1)
    this.setState({ items: currentItems })
  }
  finished = (k) => {

      let status=true
      let newitems = this.state.items;
      newitems[k].finish=status 
      this.setState({ items:newitems });
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar bg-primary p-3">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-light">To Do List</span>
          </div>
        </nav>
        <div className='p-5'>
          <input type="text" className='mb-2 form-control' onChange={this.txtChange} />
          <button className='btn btn-primary' onClick={this.addItem}>Add</button>
          <ul className="list-group mt-2">
            {/* <li className='list-group-item d-flex justify-content-between align-items-center bg-secondary'><h4>Task</h4><h4>status</h4><h4>button1</h4><h4>button2</h4></li> */}
            {this.state.items.map((itm, k) => {
              return (
                <li className={'list-group-item d-flex justify-content-between align-items-center ' + (this.state.items[k].finish ? 'bg-success' : 'bg-warning')}>
                  <h6>{itm.task}</h6>
                  <h6>{(this.state.items[k].finish ? 'Finished' : 'On-going')}</h6>
                  <button className='btn btn-primary' onClick={() => this.finished(k)}>Finished</button>
                  <button className='btn btn-primary' onClick={() => this.remove(k)}>Delete</button>
                </li>
              );
            })}

          </ul>

        </div>

      </div>
    );

  }

}

export default App;
