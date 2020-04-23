import React, {Component} from 'react'
import './Table.css'

class Table extends Component {
    constructor() {
        super();
        
        this.state = {
            data : {
              countryName: "India",
              confirmed: "121",
              active: "30",
              recovered: "90",
              deceased: "1",
              stateWise:
              [              
                {id : 1, stateName : "Tamil Nadu", confirmed : "121", active : "30", recovered : "90", deceased: "1", 
                districtWise: [
                  {id: "1", districtName: "Kanchipuram", confirmed : "121", active : "30", recovered : "90", deceased: "1"},
                  {id: "1", districtName: "Chennai", confirmed : "121", active : "30", recovered : "90", deceased: "1"}
                ]},
                {id : 2, stateName : "Maharashtra", confirmed : "121", active : "30", recovered : "90", deceased: "1", districtWise: [
                  {id: "1", districtName: "District 1", confirmed : "121", active : "30", recovered : "90", deceased: "1"},
                  {id: "1", districtName: "District 2", confirmed : "121", active : "30", recovered : "90", deceased: "1"}
                ]},
                {id : 3, stateName : "Andhra Pradesh", confirmed : "121", active : "30", recovered : "90", deceased: "1"},
                {id : 4, stateName : "Telengana", confirmed : "121", active : "30", recovered : "90", deceased: "1"}
            ] 
            },
            expandedRows : []
        };
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
    }
    
    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
			<tr onClick={clickCallback} key={"row-data-" + item.id}>
			    <td>{item.stateName}</td>
			    <td>{item.confirmed}</td>
          <td>{item.active}</td>
			    <td>{item.recovered}</td>
          <td>{item.deceased}</td>			
			</tr>
        ];
        
        if(this.state.expandedRows.includes(item.id)) {
          itemRows.push(
              item.districtWise.map((district) => 
              <tr key={"row-data-" + district.id} class="districts">
                <td>{district.districtName}</td>
                <td>{district.confirmed}</td>
                <td>{district.active}</td>
                <td>{district.recovered}</td>
                <td>{district.deceased} </td>
              </tr>
            )
          )
          
            // itemRows.push(
            //     <tr key={"row-expanded-" + item.id}>
            //         <td>{item.stateName}</td>
            //         <td>{item.confirmed}</td>
            //         <td>{item.percent}</td>
            //     </tr>
            // );
        }
        
        return itemRows;    
    }
    
    render() {
        let allItemRows = [];
        let districtWise = [];
        this.state.data.stateWise.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        })
        return (
          <div>
          <div >
            <div class="country">{this.state.data.countryName}</div>
            <div class="country">Confirmed {this.state.data.confirmed}</div>
            <div class="country">Active {this.state.data.active}</div>
            <div class="country">Recovered {this.state.data.recovered}</div>
            <div class="country">Deceased {this.state.data.deceased}</div>
          </div>
			     <table>
           <tr>
            <th>States / Districts</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deceased</th>
           </tr>
           {allItemRows}</table>
           </div>
        );
    }
}

export default Table
