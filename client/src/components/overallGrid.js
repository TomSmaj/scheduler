import React, { Component } from 'react';
import './overallGrid.css';
import $ from 'jquery';

class OverallGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.genRow = this.genRow.bind(this);
        this.getData = this.getData.bind(this);
        this.genBlankRow = this.genBlankRow.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        $.get("/getdata", function(result) {
            console.log(result);
            // this.setState({
            //     data: result
            // })
        })
    }

    genRow = (i) => {
        return (
            <tr>
                <td className={"start-hour mon-col " + i + ":00 time-block"}> {i}:00</td>
                <td className={"start-hour tue-col " + i + ":00"}> {i}:00</td>
                <td className={"start-hour wed-col " + i + ":00"}> {i}:00</td>
                <td className={"start-hour thu-col " + i + ":00"}> {i}:00</td>
                <td className={"start-hour fri-col " + i + ":00"}> {i}:00</td>
                <td className={"start-hour sat-col " + i + ":00"}> {i}:00</td>
                <td className={"start-hour sun-col " + i + ":00"}> {i}:00</td>
            </tr>
        )
    }

    genBlankRow = (i, j) => {
        return (
            <tr>
                <td className={"mon-col " + i + ":" + j}> - </td>
                <td className={"tue-col " + i + ":" + j}> - </td>
                <td className={"wed-col " + i + ":" + j}> - </td>
                <td className={"thu-col " + i + ":" + j}> - </td>
                <td className={"fri-col " + i + ":" + j}> - </td>
                <td className={"sat-col " + i + ":" + j}> - </td>
                <td className={"sun-col " + i + ":" + j}> - </td>
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
                        {this.genBlankRow(0, 15)}
                        {this.genBlankRow(0, 30)}
                        {this.genBlankRow(0, 45)}
                        {this.genRow(1)}
                        {this.genBlankRow(1, 15)}
                        {this.genBlankRow(1, 30)}
                        {this.genBlankRow(1, 45)}
                        {this.genRow(2)}
                        {this.genBlankRow(2, 15)}
                        {this.genBlankRow(2, 30)}
                        {this.genBlankRow(2, 45)}
                        {this.genRow(3)}
                        {this.genBlankRow(3, 15)}
                        {this.genBlankRow(3, 30)}
                        {this.genBlankRow(3, 45)}
                        {this.genRow(4)}
                        {this.genBlankRow(4, 15)}
                        {this.genBlankRow(4, 30)}
                        {this.genBlankRow(4, 45)}
                        {this.genRow(5)}
                        {this.genBlankRow(5, 15)}
                        {this.genBlankRow(5, 30)}
                        {this.genBlankRow(5, 45)}
                        {this.genRow(6)}
                        {this.genBlankRow(6, 15)}
                        {this.genBlankRow(6, 30)}
                        {this.genBlankRow(6, 45)}
                        {this.genRow(7)}
                        {this.genBlankRow(7, 15)}
                        {this.genBlankRow(7, 30)}
                        {this.genBlankRow(7, 45)}
                        {this.genRow(8)}
                        {this.genBlankRow(8, 15)}
                        {this.genBlankRow(8, 30)}
                        {this.genBlankRow(8, 45)}
                        {this.genRow(9)}
                        {this.genBlankRow(9, 15)}
                        {this.genBlankRow(9, 30)}
                        {this.genBlankRow(9, 45)}
                        {this.genRow(10)}
                        {this.genBlankRow(10, 15)}
                        {this.genBlankRow(10, 30)}
                        {this.genBlankRow(10, 45)}
                        {this.genRow(11)}
                        {this.genBlankRow(11, 15)}
                        {this.genBlankRow(11, 30)}
                        {this.genBlankRow(11, 45)}
                        {this.genRow(12)}
                        {this.genBlankRow(12, 15)}
                        {this.genBlankRow(12, 30)}
                        {this.genBlankRow(12, 45)}
                        {this.genRow(13)}
                        {this.genBlankRow(13, 15)}
                        {this.genBlankRow(13, 30)}
                        {this.genBlankRow(13, 45)}
                        {this.genRow(14)}
                        {this.genBlankRow(14, 30)}
                        {this.genBlankRow(14, 15)}
                        {this.genBlankRow(14, 45)}
                        {this.genRow(15)}
                        {this.genBlankRow(15, 15)}
                        {this.genBlankRow(15, 30)}
                        {this.genBlankRow(15, 45)}
                        {this.genRow(16)}
                        {this.genBlankRow(16, 15)}
                        {this.genBlankRow(16, 30)}
                        {this.genBlankRow(16, 45)}
                        {this.genRow(17)}
                        {this.genBlankRow(17, 15)}
                        {this.genBlankRow(17, 30)}
                        {this.genBlankRow(17, 45)}
                        {this.genRow(18)}
                        {this.genBlankRow(18, 15)}
                        {this.genBlankRow(18, 30)}
                        {this.genBlankRow(18, 45)}
                        {this.genRow(19)}
                        {this.genBlankRow(19, 15)}
                        {this.genBlankRow(19, 30)}
                        {this.genBlankRow(19, 45)}
                        {this.genRow(20)}
                        {this.genBlankRow(20, 15)}
                        {this.genBlankRow(20, 30)}
                        {this.genBlankRow(20, 45)}
                        {this.genRow(21)}
                        {this.genBlankRow(21, 15)}
                        {this.genBlankRow(21, 30)}
                        {this.genBlankRow(21, 45)}
                        {this.genRow(22)}
                        {this.genBlankRow(22, 15)}
                        {this.genBlankRow(22, 30)}
                        {this.genBlankRow(22, 45)}
                        {this.genRow(23)}
                        {this.genBlankRow(23, 15)}
                        {this.genBlankRow(23, 30)}
                        {this.genBlankRow(23, 45)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OverallGrid;