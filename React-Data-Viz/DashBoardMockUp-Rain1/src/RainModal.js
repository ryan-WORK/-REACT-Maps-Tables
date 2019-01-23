import React from 'react';
import Modal from 'react-responsive-modal';
import axios from "axios/index";


class RainModal extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             openFirstModal: false,
             openSecondModal: false,
         };
     };
  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  getData(){
            axios.get(`https://raw.githubusercontent.com/Ry10p/data4Rain/master/y10.json`)
      .then(res => {
        const yeardata = res.data;
        console.log(yeardata);
        this.setState({ yeardata });
      })
  }

  componentDidMount(){
      console.log("modal mount");
  }


   render() {
      const yearItems = this.state.yeardata.map((headlines, i ) => {
          return(
              <li>{headlines.head}</li>
          )
      });

    const { openFirstModal} = this.state;
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenFirstModal}>
          Open
        </button>{' '}
        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
          <p>National Card</p>
            <button onClick={this.getData()}> Text Data</button>

            {yearItems}
        </Modal>
      </div>
    );
  }
}

export default RainModal;