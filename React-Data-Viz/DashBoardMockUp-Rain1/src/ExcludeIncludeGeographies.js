import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  //Markers,
  //Marker,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const include = [
    "USA", "NDL", "SGP", "CAN", "ZAF", "CHE", "BRA",
]

class ExcludeIncludeGeographies extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 300 }}
          width={innerWidth}
          height={700}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[ 0, 0 ]} >
            <Geographies geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/examples/exclude-include-geographies/static/world-50m.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.id) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: "#CFD8DC",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                        }}
                    />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default ExcludeIncludeGeographies