import React, { useState } from "react";
import avatar from "../assets/avatar.png";
const ProfileForm = () => {
  const [ImageSrc, setImageSrc] = useState(null);
  const [Firstname, SetFirstname] = useState("");
  const [surnname, SetSurnName] = useState("");
  const [Mobile, SetMobileNumber] = useState("");
  const [Email, SetEmail] = useState("");
  const [Education, SetEducation] = useState("");
  const [Country, SetCountry] = useState("");
  const [State, SetState] = useState("");
  const [StreetAddress, SetStreetAddress] = useState("");
  const [PostalCode, SetPostalCode] = useState("");
  const fullName = "Muhammad Aqib Javed";
  const handleClick = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };
  const getInitials = (params) => {
    let newArr = [];
    let splittedstr = params.split(" ");
    for (let i = 0; i < splittedstr.length; i++) {
      newArr.push(splittedstr[i].charAt(0));
    }
    let fullName = newArr.join("");
    return fullName;
  };
  return (
    <div className="bg-secondary">
      <div className="container  pt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="row mx-auto">
              <input
                id="file-input"
                accept="images/*"
                hidden
                type="file"
                onChange={handleClick}
              />
              <label htmlFor="file-input">
                {ImageSrc ? (
                  <img
                    src={ImageSrc || avatar}
                    alt="Aqib Javed"
                    class="rounded-circle "
                    style={{ cursor: "pointer", width: "150px" }}
                  />
                ) : (
                  <div
                    className="rounded-circle bg-info border-1"
                    style={{
                      width: "150px",
                      padding: "40px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {getInitials(fullName)}
                  </div>
                )}
              </label>
            </div>

            <ul className="list-group mt-3">
              <li className="list-group-item">
                {Firstname ? Firstname : "Name"}
              </li>
              <li className="list-group-item">
                {surnname ? surnname : "Surn Name"}
              </li>
              <li className="list-group-item">
                {Mobile ? Mobile : "Mobile Number"}
              </li>
              <li className="list-group-item">{Email ? Email : "Email"}</li>
              <li className="list-group-item">
                {Education ? Education : "Education"}
              </li>
              <li className="list-group-item">
                {Country ? Country : "Country"}
              </li>
              <li className="list-group-item">{State ? State : "State"}</li>
              <li className="list-group-item">
                {StreetAddress ? StreetAddress : "Street Address"}
              </li>
              <li className="list-group-item">
                {PostalCode ? PostalCode : "Postal Code"}
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <form className="text-white">
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label htmlFor="Name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="Enter First Name"
                      name="Name"
                      onChange={(event) => SetFirstname(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label for="SurnName" class="form-label">
                      SurnName
                    </label>
                    <input
                      type="SurnName"
                      class="form-control"
                      id="SurnName"
                      placeholder="Enter SurnName"
                      name="SurnName"
                      onChange={(event) => SetSurnName(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3 mt-3">
                <label for="text" class="form-label">
                  Mobile Number:
                </label>
                <input
                  type="type"
                  class="form-control"
                  id="Mobile_Number"
                  placeholder="Enter Mobile Number"
                  name="Mobile_Number"
                  onChange={(event) => SetMobileNumber(event.target.value)}
                />
              </div>

              <div class="mb-3 mt-3">
                <label for="email" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(event) => SetEmail(event.target.value)}
                />
              </div>

              <div class="mb-3 mt-3">
                <label for="Education" class="form-label">
                  Education
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Education"
                  placeholder="Enter Education"
                  name="Education"
                  onChange={(event) => SetEducation(event.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label for="Country" class="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Country"
                      placeholder="Enter Country"
                      name="Country"
                      onChange={(event) => SetCountry(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label for="state" class="form-label">
                      State/Region
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="state"
                      placeholder="Enter state/Region"
                      name="state"
                      onChange={(event) => SetState(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label for="Street_Address" class="form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Street_Address"
                      placeholder="Enter Street Address"
                      name="Street_Address"
                      onChange={(event) => SetStreetAddress(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3 mt-3">
                    <label for="Postal_Code" class="form-label">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Postal_Code"
                      placeholder="Enter Postal Code"
                      name="Postal_Code"
                      onChange={(event) => SetPostalCode(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <button
                  type="reset"
                  className="btn btn-primary mx-auto w-25 mb-4"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
