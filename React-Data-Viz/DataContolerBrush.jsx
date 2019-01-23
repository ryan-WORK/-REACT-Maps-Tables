import React, { Component } from 'react'
import './App.css'
import { select, event } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { DataControlerBrushX } from 'd3-DataControlerBrush'
import { axisBottom } from 'd3-axis'

class DataControlerBrush extends Component {
  constructor(props){
    super(props)
    this.createDataControlerBrush = this.createDataControlerBrush.bind(this)
  }

  componentDidMount() {
    this.createDataControlerBrush()
  }

  componentDidUpdate() {
    this.createDataControlerBrush()
  }

  createDataControlerBrush() {
    const node = this.node
    const scale = scaleLinear().domain([0,36])
      .range([0,this.props.size[0]])

    const dayDataControlerBrush = DataControlerBrushX()
      .extent([[0, 0], this.props.size])
      .on("DataControlerBrush", DataControlerBrushed)

    const dayAxis = axisBottom()
      .scale(scale)

    select(node)
      .selectAll("g.DataControlerBrushaxis")
      .data([0])
      .enter()
      .append("g")
        .attr("class", "DataControlerBrushaxis")
        .attr("transform", "translate(0,25)")

    select(node)
      .select("g.DataControlerBrushaxis")
        .call(dayAxis)

    select(node)
      .selectAll("g.DataControlerBrush")
      .data([0])
      .enter()
      .append("g")
        .attr("class", "DataControlerBrush")
        .attr("transform", "translate(0,0)")

    select(node)
      .select("g.DataControlerBrush")
      .call(dayDataControlerBrush)

    select(node)
      .select("g.DataControlerBrush")
      .selectAll("g.resize")
      .selectAll("circle")
      .data([0])
      .enter()
      .append("circle")
        .attr("r", 25)
        .attr("cy",25)
        .style("fill", "white")
        .style("stroke", "black")
        .style("stroke-width", "4px")
        .style("opacity", .75);

    const DataControlerBrushFn = this.props.changeDataControlerBrush
    function DataControlerBrushed() {
      const selectedExtent = event.selection.map(d => scale.invert(d))
      DataControlerBrushFn(selectedExtent)
    }

  }

  render() {
    return <svg ref={node => this.node = node} width={this.props.size[0]} height={50}></svg>
  }
}

export default DataControlerBrush
