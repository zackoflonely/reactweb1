import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <footer>
                <div>
                    <h1>COFFEESHOP</h1>
                    {this.props.paragraft()}
                </div>
            </footer>
        )
    }
}

export default Footer;