import React, {Component} from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { DateRangePicker } from 'rsuite'

class DatePickerTest extends Component {
    render() {
        const CustomDateRangePicker = ({placement}) => (
            <DateRangePicker placement={placement} />
        )
    return(
        <div>
            <CustomDateRangePicker
                placement="auto"
                format="DD-MM-YYYY"
                locale={{
                    sunday: 'Su',
                    monday: 'Mo',
                    tuesday: 'Tu',
                    wednesday: 'We',
                    thursday: 'Th',
                    friday: 'Fr',
                    saturday: 'Sa',
                    ok: 'OK',
                    today: 'Hoje',
                    yesterday: 'Yesterday',
                    last7Days: 'Last 7 days'
                }}
                placeholder="Select Date Range" />
        </div>
    )}
}

export default DatePickerTest;