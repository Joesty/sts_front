import React, { Component } from 'react';
import random_rgba from '../../utils/random_colors';

function Bubbles({ data }) {
  const bubbles = [];
  const lines = [];
  const grid = [];
  const credits = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const step = 150;
  const base = [0, 100, 100, 100, 100, 100, 100, 100, 100];

  for (let i = 0; i < data.length; i++) {
    const currX = data[i].semester * step;
    const currY = base[data[i].semester];

    bubbles.push(<Bubble key={data[i].id} x={currX} y={currY} r={10} />);
    bubbles.push(
      <Text x={currX - 45} y={currY - 15} size={12} text={data[i].name} />
    );

    base[data[i].semester] += step;
    credits[data[i].semester] += data[i].credits;
  }

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].parents.includes(data[i].id)) {
        const sourceBubble = bubbles.find(x => x.key == data[i].id);
        const destinationBubble = bubbles.find(x => x.key == data[j].id);
        const sourceX = sourceBubble.props.x;
        const sourceY = sourceBubble.props.y;
        const destX = destinationBubble.props.x;
        const destY = destinationBubble.props.y;
        const linecolor = random_rgba();

        lines.push(
          <Curve
            x1={sourceX}
            x2={destX}
            y1={sourceY}
            y2={destY}
            stroke={linecolor}
          />
        );
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    const currentSemester = 'Semester: ' + (i + 1);
    const currentCredits = 'Credits: ' + credits[i + 1];

    grid.push(
      <Line
        x1={step * i + step / 2}
        y1={0}
        x2={step * i + step / 2}
        y2={10000}
      />
    );
    grid.push(
      <Text
        x={step * i + step / 2 + 30}
        y={20}
        size={14}
        text={currentSemester}
      />
    );
    grid.push(
      <Text
        x={step * i + step / 2 + 30}
        y={40}
        size={14}
        text={currentCredits}
      />
    );
  }

  return (
    <g className="bubbles">
      {grid}
      {bubbles}
      {lines}
    </g>
  );
}

function Bubble({ x, y, r }) {
  return <circle cx={x} cy={y} r={r} fill="black" />;
}

function Text({ x, y, size, text }) {
  return (
    <text x={x} y={y} fontSize={size}>
      {text}
    </text>
  );
}

function Line({ x1, y1, x2, y2 }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="lightgrey" strokeWidth="1" />
  );
}

function Curve({ x1, x2, y1, y2, stroke }) {
  let dx = x1 + (x2 - x1) / 2;
  let dy = 0;

  if (y1 == y2) {
    dy = y1 + y1 / 2;
  } else {
    dy = y1 + (y2 - y1);
  }

  const params = `M${x1} ${y1} C ${x1} ${y1}, ${dx} ${dy}, ${x2} ${y2}`;

  return (
    <path d={params} stroke={stroke} strokeWidth="2" fill="transparent" />
  );
}

class GraphData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <svg className="mt-3" width="1000" height="1000">
        <Bubbles data={this.props.graphs} />
      </svg>
    );
  }
}

export default GraphData;
