var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

console.log(App);
console.log(App.mainComponent)

ReactDOM.render(
  <App.mainComponent />, document.getElementById('app')
);
