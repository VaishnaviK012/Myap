import React from 'react'

function Report() {
  return (
    <div className=''>

        <div className='d-flex justify-content-center align-items-center'>
            <h3>Session reports</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
           <p>Session reports organize, by session source and destination IP address pairs, the statistical information captured during the traffic log audit. <br /> Session reports include a list of all session source and destination IP addresses discovered during the capture and historical details for both <br /> source and destination hosts.</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
           <h3>Session content</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <p>The Session List contains a list of all unique source and destination IP address pairs identified in the flux log. <br /> The list contains statistical information about each pair, including the total volume of traffic and packets, <br /> protocol used, and packet length generated by the session. It also contains links to the Query Hosts page.</p>
        </div>
    </div>
  )
}

export default Report