import React from "react";
import "./download.css"
const printDiv = () => {
    window.print();
}
class DownloadButton extends React.Component {
    handleClick = () => {
        const link = document.createElement('a');
        link.href = 'http://localhost:3000/';
        link.download = 'http://localhost:3000/';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
  
    render() {
        return (
            <><div className="btn">
                <button onClick={this.handleClick} className="download-button">
                    Download
                </button>
            </div>
            <button className="butn" onClick={printDiv}>Print </button></>
            
        );
  
    }
    
  }
  export default DownloadButton;