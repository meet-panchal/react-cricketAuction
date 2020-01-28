import React, { Component } from "react";
import PlayerData from "../circket-auction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "./PlayerInfo.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";

export default class PlayerInfo extends Component {
  state = {
    data: PlayerData.data.map(item => ({
      ...item,
      isPlayerLocked: false,
      teamSelected: null
    })),
    counter: 0,
    modal: false,
    tempTeam: null
  };
  saveTeam = playerDetail => {
    let updatedSate = this.state.data.slice();
    updatedSate.forEach(player => {
      if (player._id === playerDetail._id) {
        player.teamSelected = this.state.tempTeam;
        player.isPlayerLocked = true;
      }
    });
    this.setState({
      ...this.state,
      data: updatedSate,
      modal: !this.state.modal
    });
  };
  previousPlayer = () => {
    this.setState({
      ...this.state,
      counter:
        this.state.counter === 0 ? this.state.counter : this.state.counter - 1
    });
  };
  nextPlayer = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    });
  };
  toggle = () => {
    this.setState({
      ...this.state,
      modal: !this.state.modal,
      tempTeam: null
    });
  };

  changeBasePrice = (event, playerDetail) => {
    let updatedState = this.state.data.slice();
    let type = event.target.attributes.function.value;
    updatedState.forEach(player => {
      if (player._id === playerDetail._id && !player.isPlayerLocked) {
        if (type === "increase") {
          player.basePrice += 10;
        } else {
          player.basePrice -= 10;
        }
      }
    });
    this.setState({
      ...this.state,
      data: updatedState
    });
  };
  clickHandler = event => {
    console.log(event.target.text);
    this.setState({
      ...this.state,
      tempTeam: event.target.text
    });
  };
  alreadyLock = () => {
    if (this.state.data[this.state.counter].isPlayerLocked) {
      let timerInterval;
      Swal.fire({
        title: "Player is already locked!!",
        html: "Look out for next available player",
        timer: 2500,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          clearInterval(timerInterval);
        }
      }).then(result => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer"); // eslint-disable-line
        }
      });
    }
  };
  render() {
    return (
      <div className="custContainer">
        <div className="row align-items-center">
          <div className="col-md-1">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={this.previousPlayer}
              className="pointer"
            />
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-between flex-column">
              <div className="pb-4">
                <img
                  src={require("../images/profile_pic.jpg")}
                  alt=""
                  className="customImage"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div role="group" className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    function="decrease"
                    onClick={event =>
                      this.changeBasePrice(
                        event,
                        this.state.data[this.state.counter]
                      )
                    }
                    disabled={
                      this.state.data[this.state.counter].isPlayerLocked
                    }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={this.alreadyLock}
                  >
                    {this.state.data[this.state.counter].basePrice}
                  </button>
                  <button
                    type="button"
                    function="increase"
                    className="btn btn-primary"
                    onClick={event =>
                      this.changeBasePrice(
                        event,
                        this.state.data[this.state.counter]
                      )
                    }
                    disabled={
                      this.state.data[this.state.counter].isPlayerLocked
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={this.toggle}
                    disabled={
                      this.state.data[this.state.counter].isPlayerLocked
                    }
                  >
                    {this.state.data[this.state.counter].isPlayerLocked
                      ? "Sold"
                      : "Lock"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <table
              className="table table-striped align-self-stretch"
              style={{ width: "100%" }}
            >
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{this.state.data[this.state.counter].name}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{this.state.data[this.state.counter].age}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{this.state.data[this.state.counter].type}</td>
                </tr>
                <tr>
                  <th>Base Price</th>
                  <td>{this.state.data[this.state.counter].basePrice}</td>
                </tr>
                {this.state.data[this.state.counter].isPlayerLocked ? (
                  <tr>
                    <th>Team</th>
                    <td>{this.state.data[this.state.counter].teamSelected}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <div className="col-md-1 text-right">
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={this.nextPlayer}
              className="pointer"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{ maxWidth: "100%" }}>
              <div>
                <img
                  src={require("../images/profile_pic.jpg")}
                  alt=""
                  className="customImage"
                />
              </div>
              <div className="card-body text-info text-center">
                <h5>{this.state.data[this.state.counter + 1].name}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ maxWidth: "100%" }}>
              <div>
                <img
                  src={require("../images/profile_pic.jpg")}
                  alt=""
                  className="customImage"
                />
              </div>
              <div className="card-body text-info text-center">
                <h5>{this.state.data[this.state.counter + 2].name}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ maxWidth: "100%" }}>
              <div>
                <img
                  src={require("../images/profile_pic.jpg")}
                  alt=""
                  className="customImage"
                />
              </div>
              <div className="card-body text-info text-center">
                <h5>{this.state.data[this.state.counter + 3].name}</h5>
              </div>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>Select Team</MDBModalHeader>
              <MDBModalBody>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {this.state.tempTeam
                      ? this.state.tempTeam
                      : "Available Teams"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu onSelect={this.onSelect}>
                    <Dropdown.Item onClick={this.clickHandler}>
                      Mumbai Mavericks
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.clickHandler}>
                      Haryana Hurricanes
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.clickHandler}>
                      Deccan Chargers
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.clickHandler}>
                      Garvi Gujarat
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn
                  color="primary"
                  onClick={() =>
                    this.saveTeam(this.state.data[this.state.counter])
                  }
                >
                  Save changes
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        ) : null}
      </div>
    );
  }
}
