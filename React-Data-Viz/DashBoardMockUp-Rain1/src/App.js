import React, { Component } from 'react'
import './App.css'
import WorldMap from './WorldMap'
//import BarChart from './BarChart'
//import StreamGraph from './StreamGraph'
import DataControlerBrush from './DataControlerBrush'
import StatLine from './StatLine'
import worlddata from './world'
import { range } from 'd3-array'
import { scaleThreshold } from 'd3-scale'
import { geoCentroid } from 'd3-geo'
import InvestorMaps from "./InvestorMaps";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import RainModal from "./RainModal";
// This is the manager for the world map
// We can restrict the map with this feature.
const appdata = worlddata.features
  .filter(d => geoCentroid(d)[0]);
console.log("App JS: Possible Features ", worlddata.features);
console.log("App JS: used data ", appdata);


appdata
  .forEach((d,i) => {
    const offset = Math.random();
    d.launchday = i;
    d.data = range(d).map((p,q) => q < i ? 0 : Math.random() * 2 + offset);
    console.log(d);
      console.log("App JS:d.launchday ", d.launchday);
    console.log("App JS:d.data ", d.data);
    console.log("App JS:offet: ", offset);
  });

const colorScale = scaleThreshold().domain([1,30,60,90]).range(["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4"]);
const colorScale2 = scaleThreshold().domain([5,10,20,30]).range(["#fbc598", "#ff9300", "#a5ffe4", "#7800ff"]);
//#ffffcc,#c7e9b4,#7fcdbb,#41b6c4,#2c7fb8,#253494
//https://raw.githubusercontent.com/Ry10p/data4Rain/master/y10.json
class App extends Component {
  constructor(props){
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onBrush = this.onBrush.bind(this);
    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,179], yeardata: [], isOpen: false }

  }

  onResize() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 120 })
  }

 a1  = () => {

    toast.success("Minor Acquisitions in Other Services", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.info("SGP --> NLD", {
      position: toast.POSITION.BOTTOM_CENTER
    });

  };
  a2  = () => {

    toast.success("Minor Acquisitions in Chemicals, rubber, plastics, non-metallic products", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.info("USA --> CAN", {
      position: toast.POSITION.BOTTOM_CENTER
    });

  };

  a3  = () => {

    toast.success("Minor Acquisitions in Chemicals, rubber, plastics, non-metallic products", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.info("USA --> ZAF", {
      position: toast.POSITION.BOTTOM_CENTER
    });

  };

  a4  = () => {

    toast.success("Minor Acquisitions in Banking", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.info("CHE --> BRA", {
      position: toast.POSITION.BOTTOM_CENTER
    });

  };


  onHover(d) {
    this.setState({ hover: d.id })
  }

  onBrush(d) {
    this.setState({ brushExtent: d })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false);
    this.onResize()

      // get the data
axios.get(`https://raw.githubusercontent.com/Ry10p/data4Rain/master/y10.json`)
      .then(res => {
        const yeardata = res.data;
        console.log(yeardata);
        this.setState({ yeardata });
      })
  }

  render() {
      const yearItems = this.state.yeardata.map((headlines, i ) => {
          return(
              <li>{headlines.head}</li>
          )
      });
    const filteredAppdata = appdata
      .filter((d,i) => d.launchday >= this.state.brushExtent[0] && d.launchday <= this.state.brushExtent[1]);
    console.log("App JS: Filtered Data ", filteredAppdata);

    return (
      <div className="App">
        <div className="App-header">
          <h2>RAIN DashBoard year 2010</h2>
        </div>
        <div>
        <StatLine allData={appdata} filteredData={filteredAppdata} />
        {/*<StreamGraph hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth, this.state.screenHeight / 2]} /> */}
        <DataControlerBrush changeBrush={this.onBrush} size={[this.state.screenWidth, 50]} />
        <WorldMap hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]} />
        {/*<BarChart hoverElement={this.state.hover} onHover={this.onHover} colorScale={colorScale} data={filteredAppdata} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]} /> */}
        <div>
            <button onClick={this.a1}> naics": 5511</button>
            <button onClick={this.a2}> naics": 3254</button>
             <button onClick={this.a3}> naics": 3252</button>
            <button onClick={this.a4}> naics": 5221</button>
          <ToastContainer />
            <div>{yearItems}</div>
        <h1>Active Nations For Year 2010</h1>
            <InvestorMaps/>
        </div>
        </div>
      </div>
    )
  }
}

export default App
