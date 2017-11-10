import React from 'react';

var projectData = require('./softprojects.json');
console.log(projectData);
console.log(projectData.projects);
console.log(projectData.projects[0]);

class Project extends React.Component {
  /*
   * PROPS
   * string img (link)
   * string title
   * string description
   * string github (link)
   */


  render() {
    var out = (
      <div className="card" style={{maxWidth: "48%", margin: "1%", padding : 15}}>
        <img className="card-img-top" src={this.props.img} alt="Project Image" style = {{ maxWidth: "100%", height: "auto" }} />
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <center>
          <a href={this.props.github} className="btn btn-primary"> GITHUB </a>
          </center>
        </div>
      </div>
    );

    return out;
  }
}

export class Projects extends React.Component {
  render () {
    var listProjects = projectData.projects
    /*
    for (var proj in listProjects) {
      projects.push(
        <Project img={proj.img} title={proj.title} description={proj.description} github={proj.github} />
      );
    }
    */

    const projects = listProjects.map(
      (proj) => <Project key={proj.id} img={proj.img} title={proj.title} description={proj.description} github={proj.github} />
  );


    return <div className = "container"> <div className = "row"> {projects} </div> </div>;
  }
}
