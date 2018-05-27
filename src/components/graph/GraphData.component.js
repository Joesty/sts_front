import React, { Component } from 'react';

class GraphData extends Component {
  constructor(props){
    super(props);
    this.state = { 
      data: []
    }
  }
  render() {
    return (
      <svg width='1500' height='10000'>
            <Bubbles data={this.props.graphs} />
      </svg>
    );
  }
}

function Bubbles({data}) {
  var bubbles = []
  var lines = []
  var grid = []
  var credits = [0,0,0,0,0,0,0,0,0]
  const step = 150
  var base = [0,100,100,100,100,100,100,100,100];

  for (let i = 0; i < data.length; i++){
    var currX = data[i].semester*step
    var currY = base[data[i].semester]
    bubbles.push(<Bubble key={data[i].id} x={currX} y={currY} r={10} />);
    bubbles.push(<Text x={currX-45} y={currY-15} size={12} text={data[i].name} />)
    base[data[i].semester] += step;
    credits[data[i].semester] += data[i].credits;
  }
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data.length; j++){
      if (data[j].parents.includes(data[i].id)){
        var sourceBubble = bubbles.find(bubble => bubble.key  == data[i].id)
        var destinationBubble = bubbles.find(bubble => bubble.key  == data[j].id)
        var sourceX = sourceBubble.props.x;
        var sourceY = sourceBubble.props.y; 
        var destX = destinationBubble.props.x;
        var destY = destinationBubble.props.y;
        var linecolor = random_rgba();
        lines.push(<Curve x1={sourceX} x2={destX} y1={sourceY} y2={destY} stroke={linecolor} />)
      }
    }
  }
  for (let i = 0; i < 8; i++){
    var currentSemester = 'Semester: ' + (i + 1)
    var currentCredits = "Credits: " + credits[i+1];
    grid.push(<Line x1={step*i + step/2} y1={0} x2={step*i + step/2} y2={10000}/>);
    grid.push(<Text x={step*i + step/2 + 30} y={20} size={15} text={currentSemester} />);
    grid.push(<Text x={step*i + step/2 + 30} y={40} size={15} text={currentCredits} />);
  }
  
  return (
      <g className="bubbles">
            {grid}
            {bubbles}
            {lines}
      </g>
  )
}


function Bubble({x,y,r}) {
  return (
    <circle cx={x} cy={y} r={r} fill="black" />
  )
}
function Text({x, y, size, text}){
  return(
    <text  x={x} y={y} font-size={size}>{text}</text>
  )
}
function Line({x1,y1,x2,y2}) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" stroke-width="1" />
  )
}

function Curve({x1, x2, y1, y2, stroke}){
  var dx = x1 + (x2-x1)/2;
  if (y1==y2){
    var dy = y1 + y1/2;
  }
  else{
    var dy = y1 + (y2-y1);
  }
  var param = 'M'+ x1 + ' ' + y1 + ' C ' + x1 + ' ' + y1 + ', ' + dx + ' ' + dy + ', ' + x2 + ' ' + y2
  return(
    <path d={param} stroke={stroke} stroke-width="3" fill="transparent"/>
  )
}

function random_rgba() {
  var colors = {}
  colors.names = {
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    khaki: "#f0e68c",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    orange: "#ffa500",
    pink: "#ffc0cb",
    purple: "#800080",
    violet: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    yellow: "#ffff00"
  };
  colors.random = function() {
    var result;
    var count = 0;
    for (var prop in this.names)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
  };
  return colors.random()
}


export default GraphData;