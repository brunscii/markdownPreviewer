// import React from "react";
// import ReactDOM from 'react-dom/client';
//  "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
// import { parse } from "https://cdn.jsdelivr.net/npm/marked/marked.min.js";

class MarkdownBox extends React.Component {
    static defualtProps = {
        input:'shizzz'
    }
    constructor(props){
        super(props)
        this.state = {
            input: props.input
        }
        this.handleChange = this.handleChange.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
    };
    
    handleChange(e){
        this.setState({input: e.target.value});
        console.log('yo')
    }
    
    getInputValue(){
        return this.state.input;
    }
    
    render(){
        // rend(this.state.input);
        console.log(this.props.input)
        return (
            <div id='md-box'>
            <span>Markdown</span>
            <button id='md-enlarger' onClick={()=>{
                document.getElementById('markdown-text').classList.toggle('enlarged')
            }}>|-|</button>
            <textarea className='dBox' id='markdown-text' value={this.state.input} onChange={this.handleChange}></textarea>
            
            </div>
        )
    }
}

class PreviewBox extends React.Component{
    static defualtProps = {
        input: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            input: props.input
        }
        this.tester = "<div><p>Hello</p></div>";
        this.conv = this.conv.bind(this);
    }
    conv(inp){
        //add code to fetch conversion from api
        return 0;
    }

    render(){
        console.log(convertMdHtml(this.tester));
        return(
            <div className='htBox'>
                <button id='ht-enlarger' onClick={()=>{
                document.getElementsByClassName('htmlBox')[0].classList.toggle('enlarged')
            }}>|-|</button>
                <div className='htmlBox dBox' >
                    <p>{this.props.input}</p>
                    
                   {/* <p>{parse(this.state.input)}</p> */}
                    
                </div>

            </div>
            )
    }
}

function convertMdHtml(text){
    // for(let line in text) {
    //     console.log(text[line]);
    // }
    
    let tags = text.match(/\<\w+\>w*\</g)
    for(let tag in tags){
        console.log(tags[tag])
        let a = [];
        
    }
    console.log(tags)
    return text;
}

async function fetchConversion(md){
    const API = 'https://helloacm.com/api/markdown/';
    let res = await fetch(API, {
        headers:{}
    });
    console.log(res)
}

async function rend(markdown) {
    let res = await fetch('https://api.github.com/markdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'mode': 'markdown', 'text': markdown})
    }).then(response=>{console.log(response)});
    
}

class Converter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            input: '### Markdown Parser | Markdown to HTML Converter/nBlogging:\n- [My Computing & Technology Blog](https://helloacm.com)\n- [Coding For Speed](https://codingforspeed.com)\nSelect the output text, right click, select inspection to view the HTML string converted from Markdown.'
        }
    }
    render(){
        return (
            <div>
                <MarkdownBox input={this.state.input}/>
                <PreviewBox input={this.state.input}/>
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Converter />
        <PreviewBox  />
    </React.StrictMode>
)