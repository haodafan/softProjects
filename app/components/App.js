import React from 'react';

import { Projects } from './projects.js';
import { JumboNav } from './navjumbo.js';
import { Footer } from './footer.js';

export class mainComponent extends React.Component {
  render() {
    return (
      <div>
        <JumboNav />
        <Projects />
        <Footer />
      </div>
    );
  }
}

/*
module.exports = {
  mainComponent
}
*/
