import React, { Component } from 'react';
import Header from './header';

export default class pages extends Component {
	render() {
		return (
			<div>
				<Header/>
<body class="fixed-sn white-skin">



<main>
    <div class="container-fluid">

      <section>

        <div class="card card-cascade narrower z-depth-1">

          <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

            <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2"><i class="fas fa-th-large mt-0"></i></button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2"><i class="fas fa-columns mt-0"></i></button>
            </div>

            <a href="" class="white-text mx-3">Table name</a>

            <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2"><i class="fas fa-pencil-alt mt-0"></i></button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2"><i class="fas fa-eraser mt-0"></i></button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2"><i class="fas fa-info-circle mt-0"></i></button>
            </div>

          </div>

          <div class="px-4">

            <div class="table-responsive">
            
              <table class="table table-hover mb-0">

         
                <thead>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" id="checkbox"/>
                      <label class="form-check-label" for="checkbox" class=" label-table"></label>
                    </th>
                    <th class="th-lg"><a>First Name <i class="fas fa-sort ml-1"></i></a></th>
                    <th class="th-lg"><a href="">Last Name<i class="fas fa-sort ml-1"></i></a></th>
                    <th class="th-lg"><a href="">Username<i class="fas fa-sort ml-1"></i></a></th>
                    <th class="th-lg"><a href="">Email<i class="fas fa-sort ml-1"></i></a></th>
                    <th class="th-lg"><a href="">Country<i class="fas fa-sort ml-1"></i></a></th>
                    <th class="th-lg"><a href="">City<i class="fas fa-sort ml-1"></i></a></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox1"/>
                      <label class="form-check-label" for="checkbox1" class="label-table"></label>
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>markotto@gmail.com</td>
                    <td>USA</td>
                    <td>San Francisco</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox2"/>
                      <label class="form-check-label" for="checkbox2" class="label-table"></label>
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>jacobt@gmail.com</td>
                    <td>France</td>
                    <td>Paris</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox3"/>
                      <label class="form-check-label" for="checkbox3" class="label-table"></label>
                    </th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>larrybird@gmail.com</td>
                    <td>Germany</td>
                    <td>Berlin</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox4"/>
                      <label class="form-check-label" for="checkbox4" class="label-table"></label>
                    </th>
                    <td>Paul</td>
                    <td>Topolski</td>
                    <td>@P_Topolski</td>
                    <td>ptopolski@gmail.com</td>
                    <td>Poland</td>
                    <td>Warsaw</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox5"/>
                      <label class="form-check-label" for="checkbox5" class="label-table"></label>
                    </th>
                    <td>Anna</td>
                    <td>Doe</td>
                    <td>@andy</td>
                    <td>annadoe@gmail.com</td>
                    <td>Spain</td>
                    <td>Madrid</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr class="my-0"/>

            <div class="d-flex justify-content-between">

              <select class="mdb-select colorful-select dropdown-primary mt-2">
                <option value="" disabled>Rows number</option>
                <option value="1" selected>5 rows</option>
                <option value="2">25 rows</option>
                <option value="3">50 rows</option>
                <option value="4">100 rows</option>
              </select>

              <nav class="my-4">
                <ul class="pagination pagination-circle pg-blue mb-0">

                  <li class="page-item disabled clearfix d-none d-md-block"><a class="page-link">First</a></li>

                  <li class="page-item disabled">
                    <a class="page-link" aria-label="Previous">
                      <span aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>

                  <li class="page-item active"><a class="page-link">1</a></li>
                  <li class="page-item"><a class="page-link">2</a></li>
                  <li class="page-item clearfix d-none d-md-inline-block"><a class="page-link">3</a></li>
                  <li class="page-item clearfix d-none d-md-inline-block"><a class="page-link">4</a></li>
                  <li class="page-item clearfix d-none d-md-inline-block"><a class="page-link">5</a></li>

                  <li class="page-item">
                    <a class="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>

                  <li class="page-item clearfix d-none d-md-block"><a class="page-link">Last</a></li>

                </ul>
              </nav>

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
