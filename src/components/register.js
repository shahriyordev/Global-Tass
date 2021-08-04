import React, { Component } from 'react';
import "../App.css"

export default class register extends Component {
	render() {
		return (
			<div>
				<div className="container mt-5">
					<div className="row mt-5">
						<div className="col-lg-6 m-auto mt-5" >
											  <header>

    
        <form class="needs-validation mt-5" novalidate >
  <div class="form-row">
    <div class="col-md-12 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-12 mb-3">
      <label  for="validationTooltip02" className="">Parol</label>
      <input type="text" class="form-control" id="validationTooltip02"  required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  
<a class="collapsible-header waves-effect arrow-r btn btn-primary" href="/dashboards"> Submit</a>
  	


</form>

    </header>	
						</div>
					</div>
				</div>
			</div>
		)
	}
}
