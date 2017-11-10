import React from 'react';

export class Footer extends React.Component {
  render() {
    var mainString = "This webpage was created in November 2017, using React!"
    var underString = "Each project card is dynamically loaded as a mapped set of components, with its data contained in a JSON file."

    return (
      <div className = "footer text-right whiteText" >
        <p> {mainString} </p>
        <p> {underString} </p>
        <p>
          <a href = "https://github.com/haodafan/softProjects" className = "btn btn-primary"> VISIT THIS WEBPAGE'S GITHUB </a>
        </p>
      </div>
    );
  }
}
