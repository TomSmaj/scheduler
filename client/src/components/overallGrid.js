import React, { Component } from 'react';
import './overallGrid.css';

var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

class OverallGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.genRow = this.genRow.bind(this);
        this.genBankRow = this.genBlankRow.bind(this);
    }

    getData = () => {

    }

    genRow = (i) => {
        return (
            <tr>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
                <td className="top-row"> {i}:00</td>
            </tr>
        )
    }

    genBlankRow = (i) => {
        return (
            <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
            </tr>
        )
    }

    render() {
        return (
            <div className="calendar">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="1">Mon</th>
                            <th colSpan="1">Tue</th>
                            <th colSpan="1">Wed</th>
                            <th colSpan="1">Thu</th>
                            <th colSpan="1">Fri</th>
                            <th colSpan="1">Sat</th>
                            <th colSpan="1">Sun</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {this.genRow(0)}
                        {this.genBlankRow(0)}
                        {this.genBlankRow(0)}
                        {this.genBlankRow(0)}
                        {this.genRow(1)}
                        {this.genBlankRow(1)}
                        {this.genBlankRow(1)}
                        {this.genBlankRow(1)}
                        {this.genRow(2)}
                        {this.genBlankRow(2)}
                        {this.genBlankRow(2)}
                        {this.genBlankRow(2)}
                        {this.genRow(3)}
                        {this.genBlankRow(3)}
                        {this.genBlankRow(3)}
                        {this.genBlankRow(3)}
                        {this.genRow(4)}
                        {this.genBlankRow(4)}
                        {this.genBlankRow(4)}
                        {this.genBlankRow(4)}
                        {this.genRow(5)}
                        {this.genBlankRow(5)}
                        {this.genBlankRow(5)}
                        {this.genBlankRow(5)}
                        {this.genRow(6)}
                        {this.genBlankRow(6)}
                        {this.genBlankRow(6)}
                        {this.genBlankRow(6)}
                        {this.genRow(7)}
                        {this.genBlankRow(7)}
                        {this.genBlankRow(7)}
                        {this.genBlankRow(7)}
                        {this.genRow(8)}
                        {this.genBlankRow(8)}
                        {this.genBlankRow(8)}
                        {this.genBlankRow(8)}
                        {this.genRow(9)}
                        {this.genBlankRow(9)}
                        {this.genBlankRow(9)}
                        {this.genBlankRow(9)}
                        {this.genRow(10)}
                        {this.genBlankRow(10)}
                        {this.genBlankRow(10)}
                        {this.genBlankRow(10)}
                        {this.genRow(11)}
                        {this.genBlankRow(11)}
                        {this.genBlankRow(11)}
                        {this.genBlankRow(11)}
                        {this.genRow(12)}
                        {this.genBlankRow(12)}
                        {this.genBlankRow(12)}
                        {this.genBlankRow(12)}
                        {this.genRow(13)}
                        {this.genBlankRow(13)}
                        {this.genBlankRow(13)}
                        {this.genBlankRow(13)}
                        {this.genRow(14)}
                        {this.genBlankRow(14)}
                        {this.genBlankRow(14)}
                        {this.genBlankRow(14)}
                        {this.genRow(15)}
                        {this.genBlankRow(15)}
                        {this.genBlankRow(15)}
                        {this.genBlankRow(15)}
                        {this.genRow(16)}
                        {this.genBlankRow(16)}
                        {this.genBlankRow(16)}
                        {this.genBlankRow(16)}
                        {this.genRow(17)}
                        {this.genBlankRow(17)}
                        {this.genBlankRow(17)}
                        {this.genBlankRow(17)}
                        {this.genRow(18)}
                        {this.genBlankRow(18)}
                        {this.genBlankRow(18)}
                        {this.genBlankRow(18)}
                        {this.genRow(19)}
                        {this.genBlankRow(19)}
                        {this.genBlankRow(19)}
                        {this.genBlankRow(19)}
                        {this.genRow(20)}
                        {this.genBlankRow(20)}
                        {this.genBlankRow(20)}
                        {this.genBlankRow(20)}
                        {this.genRow(21)}
                        {this.genBlankRow(21)}
                        {this.genBlankRow(21)}
                        {this.genBlankRow(21)}
                        {this.genRow(22)}
                        {this.genBlankRow(22)}
                        {this.genBlankRow(22)}
                        {this.genBlankRow(22)}
                        {this.genRow(23)}
                        {this.genBlankRow(23)}
                        {this.genBlankRow(23)}
                        {this.genBlankRow(23)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OverallGrid;