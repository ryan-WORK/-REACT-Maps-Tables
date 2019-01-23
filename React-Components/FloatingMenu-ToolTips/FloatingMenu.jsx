import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import '../../../assets/css/FloatingMenuAssets/float.css'
import connect from "react-redux/es/connect/connect";
// import ToolTip from "./ToolTip";
class FloatingMenu extends Component {
    render() {
        return (
            <div>
                 <div className="floating-menu">
        <ul className="floating-menu-list">
          <li className="floating-menu-header">{this.props.fl_title}</li>
          <li className="floating-menu-item" onClick={(e)=>{e.preventDefault(); this.props.history.push(`${this.props.fl_link1}`)}}>Login</li>
          <li className="floating-menu-item" onClick={(e)=>{e.preventDefault(); this.props.history.push(`${this.props.fl_link2}`)}}>Signup</li>
        {/*<ToolTip message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</ToolTip>*/}
         {/*<ToolTip message={'Hello, I am a super cool tooltip'} position={'bottom'}>tooltip</ToolTip>l*/}
        {/*<ToolTip message={'Hello, I am a super cool tooltip'} position={'left'}>tooltip</ToolTip>l*/}
        {/*<ToolTip message={'Hello, I am a super cool tooltip'} position={'right'}>tooltip</ToolTip>l*/}
        </ul>
      </div>
            </div>
        );
    }
}
export default withRouter (connect()(FloatingMenu));
