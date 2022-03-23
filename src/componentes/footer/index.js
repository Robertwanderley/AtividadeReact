import React from "react";
import Relogio from "../relogio";
import "./stylo.css";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
    }
        render(){
            return (
                <section>
                    <br></br>
                <footer className=" container text-center"><p>©AratangiViagens {this.state.ano}</p></footer>
                <Relogio/>
                </section>
            );
        }
}
export default Footer;
