import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};


const consigneeHistory = [
  {
    container: 'MRSU0096591',
    category: 'TRSHP',
    commodity: '1760/00 COFFEE',
    commodity_category: 'FOOD STUFF',
    consignee: 'ARROW FOOD DISTRIBUTION',
    company: 'ARROW FOOD',
    weight: 15050,
  },
  {
    container: 'MSKU5649702',
    category: 'TRSHP',
    commodity: '1350/00 EGGS',
    commodity_category: 'FOOD STUFF',
    consignee: 'ARROW FOOD DISTRIBUTION CO.',
    company: 'ARROW FOOD',
    weight: 15050,
  },
  {
    container: 'TEMU2920071',
    category: 'IMPRT',
    commodity: '1540/00 APPLES',
    commodity_category: 'FOOD STUFF',
    consignee: 'ARROW FOOD DISTRIBUTION CIE',
    company: 'ARROW FOOD',
    weight: 15050,
  },
  {
    container: 'TEMU2133918',
    category: 'IMPRT',
    commodity: '0393/00 PHARMACEUTICALS ',
    commodity_category: 'PETRO CHEMICAL PRODUCTS & OTHER CHEMICAL PRODUCTS',
    consignee: 'SAUDI MODERN FACTORY',
    company: 'SAUDI MODERN',
    weight: 15050,
  },
  {
    container: 'MSKU5880136',
    category: 'IMPRT',
    commodity: '2350/03 SPORTS REQUISITIES',
    commodity_category: 'TOYS & SPORTS REQUISITES & MISCELLANEOUS',
    consignee: 'JABBAR NASER ALBESHI TRADING EST',
    company: 'JABBER NASER ALBESHI',
  },
];


const TableRowsEl = () => {
  const listItems = consigneeHistory.map((h) => {
    <TableRow>
      <TableRowColumn>{h.container}</TableRowColumn>
      <TableRowColumn>{h.category}</TableRowColumn>
      <TableRowColumn>{h.commodity}</TableRowColumn>
      <TableRowColumn>{h.commodity_category}</TableRowColumn>
      <TableRowColumn>{h.consignee}</TableRowColumn>
      <TableRowColumn>{h.company}</TableRowColumn>
    </TableRow>
  });
  return (
    <TableBody>
      {listItems}
    </TableBody>
  );
};

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

const ManifestTable = () => (
  <div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Company</TableHeaderColumn>
        <TableHeaderColumn>Consignee</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Commodity Category</TableHeaderColumn>
        <TableHeaderColumn>Weight</TableHeaderColumn>
        <TableHeaderColumn>Commodity</TableHeaderColumn>
        <TableHeaderColumn>Containers</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody

    >
      {consigneeHistory.map( (row, index) => (
        <TableRow key={index} selected={row.container}>
          <TableRowColumn>{row.company}</TableRowColumn>
          <TableRowColumn>{row.consignee}</TableRowColumn>
          <TableRowColumn>{row.category}</TableRowColumn>
          <TableRowColumn>{row.commodity_category}</TableRowColumn>
          <TableRowColumn>{row.weight}</TableRowColumn>
          <TableRowColumn>{row.commodity}</TableRowColumn>
          <TableRowColumn>{row.container}</TableRowColumn>
        </TableRow>
        ))}
    </TableBody>

  </Table>
  </div>
);

// displayRowCheckbox={this.state.showCheckboxes}
// deselectOnClickaway={this.state.deselectOnClickaway}
// showRowHover={this.state.showRowHover}
// stripedRows={this.state.stripedRows}

export default ManifestTable;
