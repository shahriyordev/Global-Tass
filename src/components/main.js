import React, { Component } from 'react';
import "../App.css"

export default class main extends Component {
	render() {
		return (
			<div>
			<body class="fixed-sn white-skin">

			
				 <main>
     <section>

        <div class="card">
          <div class="card-body">

            <table class="table">

              <thead class="blue-grey lighten-4">
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th></th>
                 
                  
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
		              <div className="blok">
			                <button className="btn btn-warning">edit</button>
                  	  <button className="btn btn-danger">delete</button>   
		                </div>
                  	
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <div className="blok">
			                <button className="btn btn-warning">edit</button>
                  	  <button className="btn btn-danger">delete</button>   
		                </div>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <div className="blok">
			                <button className="btn btn-warning">edit</button>
                  	  <button className="btn btn-danger">delete</button>   
		                </div>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <div class="my-5"></div>

        <div class="card">
          <div class="card-body">

            <table class="table">

              <thead class="mdb-color darken-3">
                <tr class="text-white">
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

     

     

      
     

  </main></body>
 
			</div>
		)
	}
}
