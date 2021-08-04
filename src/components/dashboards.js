import React, { Component } from 'react';
import Header from "./header";


export default class dashboards extends Component {
	render() {
		return (
			<div>
				
<body class="fixed-sn white-skin">

<Header/>

   <main>
    <div class="container-fluid">

      
      <section class="mt-lg-5">

        <div class="row">

      
          <div class="col-xl-3 col-md-6 mb-4">

         
            <div class="card card-cascade cascading-admin-card wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">

              <div class="admin-up">
                <i class="far fa-money-bill-alt primary-color"></i>
                <div class="data">
                  <p>SALES</p>
                  <h4 class="font-weight-bold dark-grey-text">2000$</h4>
                </div>
              </div>
             
              <div class="card-body card-body-cascade">
                <div class="progress mb-3">
                  <div class="progress-bar bg-primary" role="progressbar"  aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
               
                <p class="card-text">Better than last week (25%)</p>
              </div>
              

            </div>
           

          </div>
         
	        <div class="col-xl-3 col-md-6 mb-4">

        
            <div class="card card-cascade cascading-admin-card">

           
              <div class="admin-up">
                <i class="fas fa-chart-line warning-color"></i>
                <div class="data">
                  <p>SUBSCRIPTIONS</p>
                  <h4 class="font-weight-bold dark-grey-text">200</h4>
                </div>
              </div>
              

              
              <div class="card-body card-body-cascade">
                <div class="progress mb-3">
                  <div class="progress-bar red accent-2" role="progressbar"  aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              
                <p class="card-text">Worse than last week (25%)</p>
              </div>
            

            </div>
           

          </div>
         
          <div class="col-xl-3 col-md-6 mb-4">

            <div class="card card-cascade cascading-admin-card">

           
              <div class="admin-up">
                <i class="fas fa-chart-pie light-blue lighten-1"></i>
                <div class="data">
                  <p>TRAFFIC</p>
                  <h4 class="font-weight-bold dark-grey-text">20000</h4>
                </div>
              </div>
          

              <div class="card-body card-body-cascade">
                <div class="progress mb-3">
                  <div class="progress-bar red accent-2" role="progressbar"  aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             
                <p class="card-text">Worse than last week (75%)</p>
              </div>
              

            </div>
           

          </div>
         

          
          <div class="col-xl-3 col-md-6 mb-4">

           
            <div class="card card-cascade cascading-admin-card">

              
              <div class="admin-up">
                <i class="fas fa-chart-bar red accent-2"></i>
                <div class="data">
                  <p>ORGANIC TRAFFIC</p>
                  <h4 class="font-weight-bold dark-grey-text">2000</h4>
                </div>
              </div>
            
              <div class="card-body card-body-cascade">
                <div class="progress mb-3">
                  <div class="progress-bar bg-primary" role="progressbar"  aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
         
                <p class="card-text">Better than last week (25%)</p>
              </div>
   

            </div>
  

          </div>
         
         

        </div>
      

      </section>
      
      
	

	
    </div>
  </main>
			

</body>

			</div>
		)
	}
}
