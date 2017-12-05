import React, {Component} from 'react';
import './datatables.css';
import data from "./data.json";


const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    { title: 'id', data: 'id' },
    { title: 'first_name',data: 'first_name',  width: 80 },
    { title: 'last_name', data: 'last_name',  width: 80},
    { title: 'email', data: 'email',  width: 80},
    { title: 'gender', data: 'gender',  width: 80},
    { title: 'ip_address', data: 'ip_address',  width: 80},
    { title: 'work_phone', data: 'work_phone',  width: 80},
    { title: 'personal_phone', data: 'personal_phone',  width: 80},
    { title: 'address',  data: 'address',  width: 80},
    { title: 'isManager', data: 'isManager' ,  width: 80},
    { title: 'car_make', data: 'car_make',  width: 80},
    { title: 'car_model', data: 'car_model',  width: 80},
    { title: 'car_model_year', data: 'car_model_year',  width: 80},
    { title: 'credit_type', data: 'credit_type',  width: 80},
    { title: 'card_number', data: 'card_number',  width: 80},
    { title: 'country', data: 'country',  width: 80},
    { title: 'department', data: 'department',  width: 80},
    { title: 'currency', data: 'currency',  width: 80},
    { title: 'date_of_birth', data: 'date_of_birth',  width: 80},
    { title: 'job_title', data: 'job_title',  width: 80},
    { title: 'card_number', data: 'card_number',  width: 80},
    { title: 'postal_code', data: 'postal_code',  width: 80}
];

const tableData = [
    {"id":1,"first_name":"Jaquelyn","last_name":"Sapir","email":"jsapir0@ucoz.com","gender":"Female","ip_address":"119.80.194.139","work_phone":"788-173-0414","personal_phone":"859-282-9782","address":"478 Waubesa Pass","isManager":true,"car_make":"Ford","car_model":"E250","car_model_year":2012,"credit_type":"jcb","card_number":"3550043152449300","country":"China","department":"Accounting","currency":"CNY","date_of_birth":"10/14/2017","job_title":"Director of Sales","postal_code":null},
    {"id":2,"first_name":"Tomlin","last_name":"Colten","email":"tcolten1@godaddy.com","gender":"Male","ip_address":"207.24.57.122","work_phone":"335-695-4445","personal_phone":"641-425-6300","address":"05970 Algoma Parkway","isManager":true,"car_make":"Dodge","car_model":"Grand Caravan","car_model_year":2005,"credit_type":"jcb","card_number":"3556838179205930","country":"Peru","department":"Marketing","currency":"PEN","date_of_birth":"4/18/2017","job_title":"Nuclear Power Engineer","postal_code":null},
    {"id":3,"first_name":"Peggy","last_name":"Gunningham","email":"pgunningham2@aboutads.info","gender":"Female","ip_address":"109.185.177.146","work_phone":"922-967-1079","personal_phone":"462-687-6376","address":"3 Comanche Circle","isManager":true,"car_make":"Ford","car_model":"Escort","car_model_year":1997,"credit_type":"jcb","card_number":"3567572995970297","country":"Philippines","department":"Sales","currency":"PHP","date_of_birth":"12/16/2016","job_title":"Nuclear Power Engineer","postal_code":"1103"},
    {"id":4,"first_name":"Tristam","last_name":"Fibbens","email":"tfibbens3@cafepress.com","gender":"Male","ip_address":"29.181.48.91","work_phone":"375-674-2005","personal_phone":"317-336-6463","address":"31878 Packers Plaza","isManager":false,"car_make":"Mercedes-Benz","car_model":"CL-Class","car_model_year":2005,"credit_type":"maestro","card_number":"5018816300738800452","country":"Nigeria","department":"Research and Development","currency":"NGN","date_of_birth":"11/22/2016","job_title":"Graphic Designer","postal_code":null},
    {"id":5,"first_name":"Siana","last_name":"Eastabrook","email":"seastabrook4@zdnet.com","gender":"Female","ip_address":"224.73.252.51","work_phone":"613-477-5373","personal_phone":"559-478-5136","address":"9 Comanche Avenue","isManager":false,"car_make":"Buick","car_model":"Electra","car_model_year":1984,"credit_type":"china-unionpay","card_number":"5602228695511780","country":"China","department":"Sales","currency":"CNY","date_of_birth":"7/12/2017","job_title":"Assistant Professor","postal_code":null}
];

const divStyle = {
    margin: '40px',
    border: '5px solid ',
    width:'500px',
    height: '500px'
  };

function reloadTableData(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = names.find((nameData) => {
            return nameData.name === oldNameData.name;
        });
        if (oldNameData.nickname !== newNameData.nickname) {
            dataChanged = true;
            this.data(newNameData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}


class DataTableGridExample extends Component {
    componentDidMount() {
        
    var d = new Date();
    var n = d.getTime();
   
    console.log('.........before loading data...........', n);
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: data,
            columns,
            deferRender:    true ,
            scroller:       true ,
            scrollY:        true,
            scrollCollapse: true,
            paging : false
        });

        d = new Date();
        n = d.getTime();
      
       console.log('.........after loading data...........', n);

    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.names.length !== this.props.names.length) {
            reloadTableData(nextProps.names);
        } else {
            updateTable(nextProps.names);
        }
        return false;
    }



    render() {
        return (
            <div>
                <table style={divStyle} ref="main" />
            </div>);
    }
}
/*
Table.PropTypes = {
    names: React.PropTypes.array
};
*/
export default DataTableGridExample;