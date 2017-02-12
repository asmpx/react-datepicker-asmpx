import React from 'react'
import DatePicker from 'react-datepicker-asmpx'
// import moment from 'moment'

export default React.createClass({
  displayName: 'YearDropdown',

  getInitialState () {
    return {
      startDate: null // moment()
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {'<DatePicker'}<br />
          {'selected={this.state.startDate}'}<br />
          {'onChange={this.handleChange}'} <br />
          {'peekNextMonth={false}'} <br />
          {'showMonthDropdown'} <br />
          {'showYearDropdown'} <br />
          {'dropdownMode="select"'} <br />
          {'hideMonthNavigation'} <br />
          {'autoSelect />'}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            onMonthChange={this.handleChange}
            onYearChange={this.handleChange}
            peekNextMonth={false}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            hideMonthNavigation
            autoSelect
            todayButton="Bugün" />
      </div>
    </div>
  }
})
