import React, {Component} from "react";
import AgGrid from "./AgGrid.jsx";
//import SquareRenderer from "./SquareRenderer.jsx";
//import ChildMessageRenderer from "./ChildMessageRenderer.jsx";
import data from "./data.json";

import {connect} from "react-redux";
// take this line out if you do not want to use ag-Grid-Enterprise
//import "ag-grid-enterprise";

//import {getData1, getData2, getData3, getData4, getData5, getData6, getData7, getData8, getData9 , getData10} from "./dataActions";
import {getData1} from "./dataActions";


class SimpleGridExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                height: 515,
                width: 1500
            },
            class: "ag-fresh",
            values: this.createJasonObj(),
            gridOptions2: this,
            loading: 'loading....'
        }
        this.refreshEvenRowsCurrencyData = this.refreshEvenRowsCurrencyData.bind(this);
        this.methodFromParent = this.methodFromParent.bind(this);
        this.reloadData = this.reloadData.bind(this);
        
    }

    componentDidMount() {
        // provide the initial data to the store (which in turn will populate the grid)
       // alert('hai1');
       // console.log('.........before loading data...........', new Date());
       var d = new Date();
       var n = d.getTime();
      
       console.log('.........before loading data...........', n);

       
        this.props.dispatch(getData1(data));
//        this.props.dispatch(getData2(data));
 //       this.props.dispatch(getData3(data));
       /* this.props.dispatch(getData4(data));
        this.props.dispatch(getData5(data));
        this.props.dispatch(getData6(data));
        this.props.dispatch(getData7(data));
        this.props.dispatch(getData8(data));
        this.props.dispatch(getData9(data));
        this.props.dispatch(getData10(data));
        */
        
    
        
       // alert('hai2');
        
       // console.log('after loading data...', new Date());
    }

    reloadData()
    {

       // console.log('before loading data...', new Date());
       // console.log('after loading data...', new Date());
       var d = new Date();
       var n = d.getTime();
      
       console.log('.........before loading data...........', n);
       
              
            //this.api.setRowData([]);

             /*  this.props.dispatch(getData1(data));
               this.props.dispatch(getData2(data));
               this.props.dispatch(getData3(data));
               this.props.dispatch(getData4(data));
               this.props.dispatch(getData5(data));
               this.props.dispatch(getData6(data));
               this.props.dispatch(getData7(data));
               this.props.dispatch(getData8(data));
               this.props.dispatch(getData9(data));
               */
               
               this.props.dispatch(getData10(data));

              // var params = { force: isForceRefreshSelected() };
              // this.gridApi.refreshCells(params);

            //  this.gridApi.redrawRows();
            // this.api.refreshCells()
              
               
              //  n = d.getTime();
               
                console.log('.........after loading data...........', n);
                let v = Math.random() +  ' ...reloading again ' ;

                this.setState({loading: v});
                      

    }
    

    fillLarge() {
        console.log('abc');
        this.setWidthAndHeight('400px', '400px');
    }


    methodFromParent(cell) {
        alert(`Parent Component Method from ${cell}!`);
    }

    setWidthAndHeight(width, height) {
        this.setState(function(oldState) {
            return Object.assign(oldState, {
                style: {
                    width: width,
                    height: height
                }
            });
        });

      
    }

    createColumnDefs() {
/*
        return [
            {headerName: 'Athlete', field: 'athlete', width: 450, cellRendererFramework: SquareRenderer,  colId:"age1" },
            {headerName: 'Age', field: 'age', width: 90, colId:"age" },
            {headerName: 'Country', field: 'country', width: 500,  cellRendererFramework: ChildMessageRenderer, colId:"age2"},
            {headerName: 'Year', field: 'year', width: 90, colId:"age3"},
            {headerName: 'Date', field: 'date', width: 110, colId:"age4"},
            {headerName: 'Sport', field: 'sport', width: 110, colId:"age5"},
            {headerName: 'Gold', field: 'gold', width: 100, colId:"age6"},
            {headerName: 'Silver', field: 'silver', width: 100, colId:"age7"},
            {headerName: 'Bronze', field: 'bronze', width: 100, colId:"age8"},
            {headerName: 'Total', field: 'total', width: 100, colId:"age9"}
        ];

*/
/*
return [
    {headerName: 'ID', field: 'id' },
    {headerName: 'first_name', field: 'first_name' },
    {headerName: 'last_name', field: 'last_name'},
    {headerName: 'email', field: 'email'},
    {headerName: 'gender', field: 'gender'},
    {headerName: 'ip_address', field: 'ip_address'},
    {headerName: 'work_phone', field: 'work_phone'},
    {headerName: 'personal_phone', field: 'personal_phone'},
    {headerName: 'address', field: 'address', editable:true},
    {headerName: 'isManager', field: 'isManager' },
    {headerName: 'car_make', field: 'car_make'},
    {headerName: 'car_model', field: 'car_model'},
    {headerName: 'car_model_year', field: 'car_model_year'},
    {headerName: 'credit_type', field: 'credit_type'},
    {headerName: 'card_number', field: 'card_number'},
    {headerName: 'country', field: 'country'},
    {headerName: 'department', field: 'department'},
    {headerName: 'currency', field: 'currency'},
    {headerName: 'date_of_birth', field: 'date_of_birth'},
    {headerName: 'job_title', field: 'job_title'},
    {headerName: 'card_number', field: 'card_number'},
    {headerName: 'postal_code', field: 'postal_code'}    
];
*/
return [
    {headerName: 'id', field: 'id' },
    {headerName: 'firstName', field: 'firstName' },
    {headerName: 'lastName', field: 'lastName'},
    {headerName: 'age', field: 'age'},
    {headerName: 'email', field: 'email'}    
];


    }

    createRowData() {

console.log('data' + data);

        return [
            {make: "Toyota", model: "Celica", price: 35000, ratios: {top: 0.25, bottom: 0.75}},
            {make: "Ford", model: "Mondeo", price: 32000, ratios: {top: 0.20, bottom: 0.80}},
            {make: "Porsche", model: "Boxter", price: 72000,ratios: {top: 0.15, bottom: 0.85}},
            {make: "Porsche1", model: "Boxter1", price: 72000, ratios: {top: 0.30, bottom: 0.70}},
            {make: "Porsche2", model: "Boxter2", price: 72000, ratios: {top: 0.25, bottom: 0.75}}
            ];

            //sample data from api 
           // {age:25, athlete: "Gong Jinjie", bronze:0, country:"China", date:"12/08/12", gold:0, silver:0, sport:"Cycling", total:1,year:2012 }

    }

    createStyle()
    {
        let containerStyle = {
            height: 115,
            width: 1500
        };
        return containerStyle;
    }


    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate,,,,,,,');
        return true;
    }

    createJasonObj()
    {
        let obj =  {};
        obj.columnDefs=this.createColumnDefs();
        //obj.rowData=this.createRowData();
        obj.style=this.createStyle();
        obj.class="ag-fresh";
        obj.header = "Simple ag-Grid React Example ";
        obj.enableSorting=true;
        obj.enableFilter=true;

        let gridOptions =  {};
        let componentParent = this;
        gridOptions.context = componentParent;
        obj.gridOptions=gridOptions;
        

        return obj;
    }

    onGridReady1(params)
    {
      //  alert('hai3');
        
       this.gridApi = params.api;
       this.columnApi = params.columnApi;  
       this.gridApi.sizeColumnsToFit();

       var d = new Date();
       var n = d.getTime();
      
       console.log('.........after loading data...........', n);

      // alert('hai4');
       
      
      /*     
                var httpRequest = new XMLHttpRequest();
                httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
                httpRequest.send();
                httpRequest.onreadystatechange = function() {
                    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                        var httpResult = JSON.parse(httpRequest.responseText);
                        console.log('httpResult', httpResult);
                        var values = this.state.values;
                        //values.rowData = httpResult;
                       // values.rowData=data;

                        console.log('values', values);
                        this.setState(function(previous) {
                            return Object.assign(previous, {values: values});
                        });
                    }
                }.bind(this); 
        this.gridApi.sizeColumnsToFit();
        this.setState({loading: "loadedddddd"}); */
    }

    refreshEvenRowsCurrencyData() {
        this.setState({loading: "Reloading ...."});
        
        console.log('hhhh', this.gridApi.gridOptionsWrapper);    
        console.log(this);
        var columnDefs = this.gridOptions.columnDefs;
        columnDefs.push({ field:'SOME RANDOM', headerName: 'SOME RANDOM'});
        this.gridOptions.api.setColumnDefs(columnDefs);

        this.gridApi.forEachNode(rowNode => {
            console.log('rowNode', rowNode.data);
          //  if (rowNode.data.value % 2 === 0) 
            {
                rowNode.setDataValue('age', rowNode.data.age * 2)
            }
        });

        console.log('beginning of changes');
      /* this.gridApi.refreshCells({
            columns: ['age']
        })  */
        console.log('end of changes');
        this.setState({loading: "loadeddddddddddddd again after refresh"});
        
    }

    render() {
        var d;
        var n;
        
        return (
            
            
            <div > 
                <h1>  Simple ag-Grid React Example </h1>
                {                 console.log('>>>>> hello again <<<<<<') }

                <div >
                    <button onClick={this.fillLarge.bind(this)}>Fill 100%</button>
                    <button onClick={this.fillLarge.bind(this)}>Fill 60%</button>
                    <button onClick={this.fillLarge.bind(this)}>Exactly 400 x 400 pixels</button>
                    <button onClick={this.reloadData.bind(this)}>Reload Data</button>
                </div>
                <div  >
                <button onClick={this.refreshEvenRowsCurrencyData} style={{marginBottom: 10}} className="btn btn-primary">Refresh Even Row Currency Data</button>

                <h1> Grid 1 </h1>

                <div> {this.state.loading} </div>
                <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData1}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 2 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData1}
                onGridReady1={this.onGridReady1.bind(this)}
                 />


                 <br />
                 <h1> Grid 3 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData1}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                <div>
               
                 </div>
                </div>
             </div>
        )
    }
}

// pull off row data changes
export default connect(
    (state) => {
        return {
            rowData1: state.rowData1,
            rowData2: state.rowData2,
            rowData3: state.rowData3,
           /* rowData4: state.rowData4,
            rowData5: state.rowData5,
            rowData6: state.rowData6,
            rowData7: state.rowData7,      
            rowData8: state.rowData8,            
            rowData9: state.rowData9,            
            rowData10: state.rowData10,  */           
            
            
        }
    }
)(SimpleGridExample);


/*
                 <br />
                 <h1> Grid 4 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData4}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 5 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData5}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 6 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData6}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 7 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData7}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 8 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData8}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 9 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData9}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

                 <br />
                 <h1> Grid 10 </h1>

                 <AgGrid  
                style={this.state.style} class={this.state.class}  
                values={this.state.values} 
                rowData={this.props.rowData10}
                onGridReady1={this.onGridReady1.bind(this)}
                 />

            */   
