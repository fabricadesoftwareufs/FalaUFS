import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class BarChartDemo extends Component {

    render() {
        const data = {
            labels: ['', '', '', '', ''],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 97, 81, 56, 55, 15]
                },

            ]
        };



        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <p> O gráfico abaixo representa a porcentagem de votos dos usuários a partir de suas escolhas.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="bar" data={data} />
                </div>
            </div>
        )
    }
}

export default BarChartDemo