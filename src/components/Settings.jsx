import React, { Component } from "react";
import Divider from "./Divider";

class Settings extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="list-group mt-4">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Settings</h6>
                <p className="mb-0 opacity-75"></p>
              </div>
            </div>
          </a>
        </div>
        <Divider />
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Language</h6>
                <p className="mb-0 opacity-75">English(United States)</p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Night mode</h6>
                <p className="mb-0 opacity-75">Phone default</p>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">view app in phone settings</h6>
              </div>
            </div>
          </a>
        </div>
        <Divider />
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">save backup from apps</h6>
                <p className="mb-0 opacity-75">
                  the installation file(apk) of app stored in downloads folder.
                </p>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">delete apk's</h6>
                <p className="mb-0 opacity-75">delete the apks from storage</p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">downloading apps together</h6>
                <p className="mb-0 opacity-75">
                  if enabled, based on your phone, apps downloaded with
                  optimized speed
                </p>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </a>
        </div>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">clear search history</h6>
            </div>
          </div>
        </a>
        <Divider />
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">updates notification</h6>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">optimized updates</h6>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </a>
        </div>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Settings;
