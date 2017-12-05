import React, {Component} from "react";

export default class ChildMessageRenderer extends Component {
    constructor(props) {
        super(props);
        this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }


    refresh(params) {
      console.log('parameters', params);
    }

    invokeParentMethod() {
        console.log('  this.props.data',   this);   
       // this.props.context.componentParent.methodFromParent(`Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`)
      // this.props.context.state.gridOptions2.methodFromParent(`Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`)
    // this.props.context.methodFromParent('heloooooo');
     this.props.context.methodFromParent(`Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`)
    }

    render() {
        return (
            <span><button style={{height: 20, lineHeight: 0.5}} onClick={this.invokeParentMethod} className="btn btn-info">Invoke Parent {this.props.value } </button></span>
        );
    }
};
