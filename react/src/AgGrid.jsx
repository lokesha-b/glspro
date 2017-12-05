import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

export default class AgGrid extends Component {
    constructor(props) {
        super(props);
    /*
        this.state = {
            columnDefs: this.props.values.hdrValues,
            rowData: this.props.values.rowValues
        }
    */
    }

    onGridReady(params) {
      /*  this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit(); */
        this.props.onGridReady1(params);
     //   console.log('grid is read again .....');    
    }

    render() {    
        return (
            <div style={this.props.style} className={this.props.class}>
                <AgGridReact
                    // properties
                 {...this.props.values}
                    // events
            rowData = { this.props.rowData }
                onGridReady={this.onGridReady.bind(this)}>
                </AgGridReact>
            </div>
        )
    }
};
