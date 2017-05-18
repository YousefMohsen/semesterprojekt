/**
 * Created by Yousef Mohsen on 17/05/2017.
 */

import React, {Component} from "react";
import "./MakeBooking.css";
import logo from "../../Images/YJLogo.png"


class MakeBooking extends Component {
    constructor() {
        super();
  //      this.showModal = this.showModal.bind(this)

       // this.props.modal = this.refs.myModal;
    }








    render() {

        return (
            <div>




                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" ref="close" onClick={this.props.hideModalTest}>&times;</span>
                            <h2>Make a booking</h2>
                            <img src={logo} className="App-logo" alt="logo" />

                        </div>
                        <div className="modal-body">
                            <div className="myForm">
                                <form action="http://localhost:8084/Backend/api/flights/booking" method="post">

                                    <label className="formFieldElement">Full name</label>
                                    <input name="name" className="formFieldElement" type="text" placeholder="fullname"/>



                                    <label>Email</label>
                                    <input name="email" type="text" placeholder="email"/>


                                    <label>Phonenumber</label>
                                    <input name="phone" type="text" placeholder="phone"/>
                                    <input  type="submit" value="Submit"/>

                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <h3>Every trip starts with Yojondo</h3>
                        </div>
                    </div>




            </div>
        );
    }
}

export default MakeBooking;