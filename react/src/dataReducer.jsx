export default (state = {rowData: []}, action) => {
    switch (action.type) {
        case 'GET_DATA1':
            return {
                ...state,
                rowData1: action.rowData,
            };
            case 'GET_DATA2':
            return {
                ...state,
                rowData2: action.rowData,
            };
            case 'GET_DATA3':
            return {
                ...state,
                rowData3: action.rowData,
            };
            case 'GET_DATA4':
            return {
                ...state,
                rowData4: action.rowData,
            };
            case 'GET_DATA5':
            return {
                ...state,
                rowData5: action.rowData,
            };
            case 'GET_DATA6':
            return {
                ...state,
                rowData6: action.rowData,
            };
            case 'GET_DATA7':
            return {
                ...state,
                rowData7: action.rowData,
            };
            case 'GET_DATA8':
            return {
                ...state,
                rowData8: action.rowData,
            };
            case 'GET_DATA9':
            return {
                ...state,
                rowData9: action.rowData,
            };
            case 'GET_DATA10':
            return {
                ...state,
                rowData10: action.rowData,
            };
        default:
            return state;
    }
};