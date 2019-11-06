import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class RemoveBuilding extends React.Component {
    render() {
        const  {id, removeBuilding} = this.props
        console.log ('Removed Building with ID: ', id);

        return (
            <div className = "removeBuilding">
                <button class = "btn btn-danger btn-lg" onClick = {() => removeBuilding(id)}>Remove Building, NO RAGRETS</button>
            </div>
        );


        
    }
}

export default RemoveBuilding;