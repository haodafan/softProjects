import React from 'react';

export class JumboNav extends React.Component {
  render() {

    //The following variable is UNUSED.
    /*
    var strongBadGotsTheStyles = {
      .affix {
        top: 0;
        width: 100%;
      }

      .affix-top {
         width: 100%;
      }

      .affix + .container-fluid {
        padding-top: 75px;
      }

      .jumbotron {
        margin-bottom: 0px;
      }

    }
    */
    return (
      <div id = "thisComponentIsInUnacceptableCondition-UNACCEPTABLEEEEEE">
      <div className = 'container'>
        <div className = "jumbotron" style = {{marginBottom: 0}}>
          <div className = "row">
            <div className = "col-sm-4" id = "pic">
              <img src = "http://haodafan.com/me_in_sanmarino.jpg" className ="img-rounded" alt = "San Marino" width = "300" />
            </div>
            <div className = "col-sm-8" id = "titletron">
                <h1>Haoda Fan (SUPER UNFINISHED WEBSITE) </h1>
                <p> (also this webpage is using Bootstrap 4, not 3, in case you noticed)</p>
            </div>
          </div>
        </div>
      </div>
      <center>
      <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light navbar-default">
              <div className="navbar-header">
                  <a className="navbar-brand" href="http://haodafan.com">HaodaFan.com</a>
              </div>
              <ul className="navbar-nav">
                  <li id="home" className="nav-item"> <a className="nav-link" href="http://haodafan.com/index.html" style = {{color: "white"}} >Home</a> </li>
                  <li id="about" className="nav-item"> <a className="nav-link" href="http://haodafan.com/about.html" style = {{color: "white"}} >About Me!</a></li>
                  <li id="software" className="nav-item"> <a className="nav-link" href="# " style = {{color: "white"}} >Software Projects!</a></li>
                  <li id="webprojects" className="nav-item"> <a className="nav-link" href="http://haodafan.com/webprojects/index.html" style = {{color: "white"}} >Web Projects!</a></li>
                  <li id="other" className="nav-item"> <a className="nav-link" href="# " style = {{color: "white"}} >Other Projects!</a></li>
                  <li id="oldsite" className="nav-item"> <a className="nav-link" href="http://haodafan.com/old" style = {{color: "white"}} >My Old Website</a></li>
                  <li id="contact" className="nav-item"> <a className="nav-link" href="http://haodafan.com/contactme.html" style = {{color: "white"}} >Contact Me!</a></li>
              </ul>
          </nav>
      </div>
      </center>
      <script src = "http://haodafan.com/navbarScript.js" />
      </div>);;
  }
}
