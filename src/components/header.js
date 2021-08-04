import React, { Component } from 'react';
import Logo from '../splash_sh.png';
import "../App.css"

export default class header extends Component {
	render() {
		return (
			<div>
				
  <body class="fixed-sn white-skin">


  <header>
    <div id="slide-out" class="side-nav sn-bg-4 fixed">
      <ul class="custom-scrollbar">
    
        <li class="logo-sn waves-effect">
          <div class="text-center">
            <a href="/"  class="pl-0 logo"> <img src={Logo} />  </a>
          </div>
        </li>

        <li>
          <form class="search-form" role="search">
            <div class="form-group md-form mt-0 pt-1 waves-light">
              <input type="text" class="form-control" placeholder="Search"/>
            </div>
          </form>
        </li>
        <li>
          <ul class="collapsible collapsible-accordion">
            <li><a class="collapsible-header waves-effect arrow-r " href="/dashboards" ><i class="fas fa-tachometer-alt"></i> Dashboards</a>
              <div class="collapsible-body">
               
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="/organization"><i class="far fa-image"></i> Organization</a>
              <div class="collapsible-body">
                
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="/profil"><i class="fas fa-user"></i> Users</a>
              <div class="collapsible-body">
               
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="/debug"><i class="fab fa-css3"></i> Debug</a>
              <div class="collapsible-body">
               
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="fe"><i class="fas fa-th"></i> Devices</a>
              <div class="collapsible-body">
                
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="pd"><i class="far fa-check-square"></i> Forms</a>
              <div class="collapsible-body">
               
              </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r" href="ew"><i class="fas fa-table"></i> Tables</a>
              <div class="collapsible-body">
                
              </div>
            </li>
           
          </ul>
        </li>
      </ul>
      <div class="sidenav-bg mask-strong"></div>
    </div>

    <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar double-nav">
     
      <div class="float-left">
        <a href="/dashboards" data-activates="slide-out" class="button-collapse black-text"><i class="fas fa-bars"></i></a>
      </div>
     
      <ul class="nav navbar-nav nav-flex-icons ml-auto">

        <li class="nav-item dropdown notifications-nav">
          <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" href="d" aria-expanded="false">
            <span class="badge red">3</span> <i class="fas fa-bell"></i>
            <span class="d-none d-md-inline-block">Notifications</span>
          </a>
          <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#d">
              <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
              <span>New order received</span>
              <span class="float-right"><i class="far fa-clock-o" aria-hidden="true"></i> 13 min</span>
            </a>
            <a class="dropdown-item" href="#e">
              <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
              <span>New order received</span>
              <span class="float-right"><i class="far fa-clock-o" aria-hidden="true"></i> 33 min</span>
            </a>
            <a class="dropdown-item" href="#e">
              <i class="fas fa-chart-line mr-2" aria-hidden="true"></i>
              <span>Your campaign is about to end</span>
              <span class="float-right"><i class="far fa-clock-o" aria-hidden="true"></i> 53 min</span>
            </a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect" href="de"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">Contact</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link waves-effect" href="f"><i class="far fa-comments"></i> <span class="clearfix d-none d-sm-inline-block">Support</span></a>
        </li>
        <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle waves-effect" href="#wewefdw" id="userDropdown" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i> <span class="clearfix d-none d-sm-inline-block">Profile</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#rfge">Log Out</a>
            <a class="dropdown-item" href="/register">My account</a>
          </div>
        </li>

      </ul>
    </nav>

  </header>

  
			

</body>


			</div>
		)
	}
}
