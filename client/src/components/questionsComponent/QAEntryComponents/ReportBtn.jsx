import React from 'react';
import axios from 'axios';

// Takes an options object with type, either questions or answers and the id.
const ReportBtn = ({ options }) => {
  const sendReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/${options.type}/${options.id}/report`, undefined ,{
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .catch(err => console.log('Error reporting: ', err.message))
  }

  return (
    <span className="QA-report" onClick={sendReport}>Report</span>
  )
}

export default ReportBtn;