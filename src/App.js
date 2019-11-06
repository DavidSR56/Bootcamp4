import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedBuilding  (id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
    console.log("Clicked ID: ", id);
  }

  removeBuilding (id) {
    // change data to return / filter out elements without matching ID
    this.setState({
      data: this.state.data.filter( directory => 
        {return directory.id !== id})
    });
    console.log("Removed Building with ID: ", id);
  }

  // removeBuilding (id) {
  //   // change data to return / filter out elements without matching ID
  //   this.setState({
  //     data: this.state.data.splice(id-1, 1)
  //   })
  //   console.log("Removed Building with ID: ", id);
  // }


  addBuilding (code, name, address, latitude, longitude) {
    // access current data  
    const list = this.state.data
    // push new building with parameters
    list.push({id: list.length + 1, code: code, name: name, address: address, coordinates: {latitude : latitude, longitude : longitude}})
    
    this.setState({data: list
    });   
    console.log("Added Building with name: ", name);
  }

  render() {
    console.log(this.state.filterText);
    return (
      <div className="bg" class = "container-fluid">
        <div className="row" class = "jumbotron" id = "jumbo">
          <h1>UF Directory App</h1>
        </div>

        <Search filterText={this.state.filterText}
                filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row" >
            <div className="column1" class = "col-8">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code</b>
                    </td>
                    <td>
                      <b>Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data = {this.state.data}
                    filterText = {this.state.filterText}
                    selectedBuilding = {this.selectedBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2" class = "col-4" >
              <ViewBuilding
                data = {this.props.data}
                id = {this.state.selectedBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
                
              />
              <span >
                <AddBuilding addBuilding = {this.addBuilding.bind(this)}/>
              </span>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
