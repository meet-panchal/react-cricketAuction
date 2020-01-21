
{/* </div>
<div>
<FontAwesomeIcon
  icon={faChevronRight}
  style={{ marginTop: "85px" }}
/>
</div>

style={{ marginTop: "85px" }} */}

<div>
</div>
<div>
<img
  src={require("../images/449742-PGISQA-388.jpg")}
  alt=""
  className="custImage"
/>
</div>
<div>
<table
  className="table table-striped align-self-stretc"
  style={{ width: "25%" }}
>
    <tbody>
      <tr>
        <th>Name</th>
        <td>{this.state.data[0].name}</td>
      </tr>
      <tr>
        <th>Age</th>
        <td>{this.state.data[0].age}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{this.state.data[0].type}</td>
      </tr>
      <tr>
        <th>Base Price</th>
        <td>{this.state.data[0].basePrice}</td>
      </tr>
    </tbody>
</table>
</div>
<div>
<FontAwesomeIcon
  icon={faChevronRight}
  style={{ marginTop: "85px" }}
/>
</div>

style={{ marginTop: "85px" }}




                <div role="group" class="btn-group">
                  <button type="button" class="btn btn-primary">
                    -
                  </button>
                  <button type="button" class="btn btn-primary">
                    100
                  </button>
                  <button type="button" class="btn btn-primary">
                    +
                  </button>
                </div>



{/*                 <select className="dropdown" onChange={this.handleChange}>
                  <option>Mumbai Mavricks</option>
                  <option>Haryana Hurricanes</option>
                  <option>Deccan Chargers</option>
                  <option>Garvi Gujarat</option>
                </select> */}
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    Dropdown
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>

