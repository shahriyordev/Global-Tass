import React, { Component } from 'react';
import Header from "./header";
import "../App.css"


export default class signin extends Component {
	render() {
		return (
			<div>
				  <header>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div class="container">
                <a class="navbar-brand" href="#"><strong>MDB</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <div class="md-form my-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <section class="view intro-2">
          <div class="mask rgba-stylish-strong h-100 d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-5">

                        <div class="card wow fadeIn" data-wow-delay="0.3s">
                            <div class="card-body">

                             
                                <div class="form-header purple-gradient">
                                    <h3><i class="fas fa-user mt-2 mb-2"></i> Log in:</h3>
                                </div>

                     
                                <div class="md-form">
                                    <i class="fas fa-user prefix white-text"></i>
                                    <input type="text" id="orangeForm-name" class="form-control"/>
                                    <label for="orangeForm-name">Your name</label>
                                </div>
                                <div class="md-form">
                                    <i class="fas fa-envelope prefix white-text"></i>
                                    <input type="text" id="orangeForm-email" class="form-control"/>
                                    <label for="orangeForm-email">Your email</label>
                                </div>

                                <div class="md-form">
                                    <i class="fas fa-lock prefix white-text"></i>
                                    <input type="password" id="orangeForm-pass" class="form-control"/>
                                    <label for="orangeForm-pass">Your password</label>
                                </div>

                                <div class="text-center">
                                    <button class="btn purple-gradient btn-lg">Sign up</button>
                                    <hr/>
                                    <div class="inline-ul text-center d-flex justify-content-center">
                                        <a class="p-2 m-2 fa-lg tw-ic"><i class="fab fa-twitter white-text"></i></a>
                                        <a class="p-2 m-2 fa-lg li-ic"><i class="fab fa-linkedin-in white-text"> </i></a>
                                        <a class="p-2 m-2 fa-lg ins-ic"><i class="fab fa-instagram white-text"> </i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
          </div>
        </section>

    </header>
			</div>
		)
	}
}
