import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      output: {__html: ''},
      err: ''
    };
    this.update = this.update.bind(this);
  }
  update(e){
    let md = e.target.value;
    this.setState({output: {__html: marked(md)}});
  }
  render() {
    return (
    <div>
      <h1 className="text-center">Markdown Preview ft. React.js {this.state.err}</h1>
        <textarea
          onChange={this.update}
          placeholder = '[ markdown goes here ]'
          className="marked">
        </textarea>
        <div dangerouslySetInnerHTML={this.state.output} className="html">
        </div>
    </div>
    );
  }
}

export default App;
