import React from "react";
import Markdown from 'marked-react';
import ReactDOM from 'react-dom/client';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
    code(snippet, lang) {
      return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
  };

class Previewer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div id="preview" className="container d-flex flex-column ">
            <Markdown value={this.props.text} renderer={renderer} />   
        </div>
        );
    }
}

export default Previewer;