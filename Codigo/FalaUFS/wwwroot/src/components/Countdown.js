import React from 'react';

import moment from 'moment';

import '../styles/Countdown.css'

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h5>A VOTAÇÃO TERMINA EM:</h5>
                <div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">

                            {days}
                            <span>dias</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">

                            {hours}
                            <span>horas</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">

                            {minutes}
                            <span>minutos</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">

                            {seconds}
                            <span>segundos</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Countdown

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}