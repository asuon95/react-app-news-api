import React, { Component } from "react";
import News from "./News";
import handleContentTypeCheckboxChange from "./News";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: [
        {
          value: "top-headlines",
          checked: true
        },
        {
          value: "everything",
          checked: false
        }
      ],
      countries: [
        {
          value: "us",
          countryName: "USA",
          checked: true
        },
        {
          value: "jp",
          countryName: "Japan",
          checked: false
        },
        {
          value: "kr",
          countryName: "South Korea",
          checked: false
        }
      ],
      catergories: [
        {
          value: "technology",
          checked: false,
          disabled: false
        },
        {
          value: "business",
          checked: false,
          disabled: false
        },
        {
          value: "entertainment",
          checked: false,
          disabled: false
        },
        {
          value: "health",
          checked: false,
          disabled: false
        },
        {
          value: "science",
          checked: false,
          disabled: false
        },
        {
          value: "sports",
          checked: false,
          disabled: false
        }
      ],

      searchQuery: [],
      searchQueryUpdated: []
    };

    this.handleBtnClickFunctions = this.handleBtnClickFunctions.bind(this);
    this.handleBtnreset = this.handleBtnreset.bind(this);
  }

  //radio
  handleContentTypeCheckboxChange = e => {
    const id = e.target.id;

    if (id === "top-headlines") {
      this.setState({
        contentType: [
          {
            value: "top-headlines",
            checked: !this.state.contentType[0].checked
          },
          {
            value: "everything",
            checked: false
          }
        ]
      });
    } else if (id === "everything") {
      this.setState({
        contentType: [
          {
            value: "top-headlines",
            checked: false
          },
          {
            value: "everything",
            checked: !this.state.contentType[1].checked
          }
        ]
      });
    }
  };

  //radio
  handleCountryCheckboxChange = e => {
    const id = e.target.id;

    if (id === "us") {
      this.setState({
        countries: [
          {
            value: "us",
            countryName: "USA",
            checked: !this.state.countries[0].checked
          },
          {
            value: "jp",
            countryName: "Japan",
            checked: false
          },
          {
            value: "kr",
            countryName: "South Korea",
            checked: false
          }
        ]
      });
    } else if (id === "jp") {
      this.setState({
        countries: [
          {
            value: "us",
            countryName: "USA",
            checked: false
          },
          {
            value: "jp",
            countryName: "Japan",
            checked: !this.state.countries[1].checked
          },
          {
            value: "kr",
            countryName: "South Korea",
            checked: false
          }
        ]
      });
    } else if (id === "kr") {
      this.setState({
        countries: [
          {
            value: "us",
            countryName: "USA",
            checked: false
          },
          {
            value: "jp",
            countryName: "Japan",
            checked: false
          },
          {
            value: "kr",
            countryName: "South Korea",
            checked: !this.state.countries[2].checked
          }
        ]
      });
    }
  };

  //checkbox
  handleCatergoryCheckboxChange = e => {
    const [
      technology,
      business,
      entertainment,
      health,
      science,
      sports
    ] = this.state.catergories;
    const id = e.target.id;

    if (id === "technology") {
      this.setState({
        catergories: [
          {
            value: "technology",
            checked: !technology.checked,
            disabled: technology.disabled
          },
          business,
          entertainment,
          health,
          science,
          sports
        ]
      });
    } else if (id === "business") {
      this.setState({
        catergories: [
          technology,
          {
            value: "business",
            checked: !business.checked,
            disabled: business.disabled
          },
          entertainment,
          health,
          science,
          sports
        ]
      });
    } else if (id === "entertainment") {
      this.setState({
        catergories: [
          technology,
          business,
          {
            value: "entertainment",
            checked: !entertainment.checked,
            disabled: entertainment.disabled
          },
          health,
          science,
          sports
        ]
      });
    } else if (id === "health") {
      this.setState({
        catergories: [
          technology,
          business,
          entertainment,
          {
            value: "health",
            checked: !health.checked,
            disabled: health.disabled
          },
          science,
          sports
        ]
      });
    } else if (id === "science") {
      this.setState({
        catergories: [
          technology,
          business,
          entertainment,
          health,
          {
            value: "science",
            checked: !science.checked,
            disabled: science.disabled
          },
          sports
        ]
      });
    } else if (id === "sports") {
      this.setState({
        catergories: [
          technology,
          business,
          entertainment,
          health,
          science,
          {
            value: "sports",
            checked: !sports.checked,
            disabled: sports.disabled
          }
        ]
      });
    }
  };

  //onBtn click
  handleBtnClick = () => {
    const [topHeadlines, everything] = this.state.contentType;
    const [us, jp, kr] = this.state.countries;
    const [
      technology,
      business,
      entertainment,
      health,
      science,
      sports
    ] = this.state.catergories;
    let contentType = "";
    let query = "";
    let country = "";
    let countryName = "";
    let newObject = {};
    let appendedState = this.state.searchQueryUpdated.slice(0);
    let title = "";

    if (topHeadlines.checked) {
      contentType = `${topHeadlines.value}`;
    } else if (everything.checked) {
      contentType = `${everything.value}`;
    }

    if (us.checked) {
      country = `${us.value}`;
      countryName = `${us.countryName}`;
    } else if (jp.checked) {
      country = `${jp.value}`;
      countryName = `${jp.countryName}`;
    } else if (kr.checked) {
      country = `${kr.value}`;
      countryName = `${kr.countryName}`;
    }

    if (technology.checked) {
      query = `country=${country}&category=technology`;
      title = `Technology in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    if (business.checked) {
      query = `country=${country}&category=business`;
      title = `Business in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    if (entertainment.checked) {
      query = `country=${country}&category=entertainment`;
      title = `Entertainment in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    if (health.checked) {
      query = `country=${country}&category=health`;
      title = `Health in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    if (science.checked) {
      query = `country=${country}&category=science`;
      title = `Science in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    if (sports.checked) {
      query = `country=${country}&category=sports`;
      title = `Sports in ${countryName}`;
      newObject = {
        contentType: contentType,
        query: query,
        title: title
      };
      appendedState.push(newObject);
    }

    let appendedStateUpdated = this.state.searchQuery.slice(0);
    appendedState.forEach(element => {
      appendedStateUpdated.push(element);
    });

    this.setState(
      {
        searchQuery: appendedStateUpdated
      },
      (this.render = () => (
        <div>
          <div className="navbar-fixed">
            <nav>
              <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                  <div className="bg-dark p-4">
                    <h4 className="center">Filter Feed</h4>
                    <div className="col s12">
                      <hr />
                      <section>
                        <form className="row containerFlex">
                          <div className="col s4">
                            <h5>Content Type</h5>
                            {//map through content type array and print out a checkbox for each
                            this.state.contentType.map((item, index) => (
                              <div className="radio" key={index}>
                                <label>
                                  <input
                                    id={item.value}
                                    type="radio"
                                    name="contentType"
                                    checked={
                                      this.state.contentType[index].checked
                                    }
                                    onChange={
                                      this.handleContentTypeCheckboxChange
                                    }
                                  />
                                  <span>{Capitalization(item.value)}</span>
                                </label>
                              </div>
                            ))}
                          </div>

                          <div className="col s4">
                            <h5>Country</h5>
                            {//map through the countries array and print out a checkbox for each
                            this.state.countries.map((item, index) => (
                              <div key={index}>
                                <label>
                                  <input
                                    id={item.value}
                                    type="radio"
                                    name="countries"
                                    checked={
                                      this.state.countries[index].checked
                                    }
                                    onChange={this.handleCountryCheckboxChange}
                                  />
                                  <span>{item.countryName}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="col s4">
                            <h5>Catergories</h5>
                            {//map through the catergories array and print out a checkbox for each
                            this.state.catergories.map((item, index) => (
                              <div key={index}>
                                <label>
                                  <input
                                    id={item.value}
                                    type="checkbox"
                                    name="catergories"
                                    disabled={item.disabled}
                                    checked={item.checked}
                                    onChange={
                                      this.handleCatergoryCheckboxChange
                                    }
                                  />
                                  <span>{Capitalization(item.value)}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                          <button
                            type="submit"
                            href="/"
                            onClick={this.handleBtnClickFunctions}
                            // primary
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            onClick={this.handleBtnreset}
                            // primary
                            className="btn btn-secondary"
                          >
                            Reset
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                  <a href="/" className="brand-logo refresh center">
                    News Feed
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </nav>
              </div>
            </nav>
          </div>
          <div className="row rowSize">
            <div className="col s10 contentStyle" id="inject">
              {this.state.searchQuery.map((item, index) => (
                <div key={index}>
                  <div className="divider"></div>
                  <News topic={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    );

    let toggleDivChange = document.getElementById(
      "navbarToggleExternalContent"
    );
    toggleDivChange.className = "collapse";
  };

  handleBtnreset() {
    this.setState({
      catergories: [
        {
          value: "technology",
          checked: false,
          disabled: false
        },
        {
          value: "business",
          checked: false,
          disabled: false
        },
        {
          value: "entertainment",
          checked: false,
          disabled: false
        },
        {
          value: "health",
          checked: false,
          disabled: false
        },
        {
          value: "science",
          checked: false,
          disabled: false
        },
        {
          value: "sports",
          checked: false,
          disabled: false
        }
      ]
    });
  }

  handleBtnClickFunctions(e) {
    e.preventDefault();
    this.handleBtnClick();
  }

  loadHolderImage = () => (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h4 className="center">Filter Feed</h4>
                <div className="col s12">
                  <hr />
                  <section>
                    <form className="row containerFlex">
                      <div className="col s4">
                        <h5>Content Type</h5>
                        {//map through content type array and print out a checkbox for each
                        this.state.contentType.map((item, index) => (
                          <div className="radio" key={index}>
                            <label>
                              <input
                                id={item.value}
                                type="radio"
                                name="contentType"
                                checked={this.state.contentType[index].checked}
                                onChange={this.handleContentTypeCheckboxChange}
                              />
                              <span>{Capitalization(item.value)}</span>
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="col s4">
                        <h5>Country</h5>
                        {//map through the countries array and print out a checkbox for each
                        this.state.countries.map((item, index) => (
                          <div key={index}>
                            <label>
                              <input
                                id={item.value}
                                type="radio"
                                name="countries"
                                checked={this.state.countries[index].checked}
                                onChange={this.handleCountryCheckboxChange}
                              />
                              <span>{item.countryName}</span>
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="col s4">
                        <h5>Catergories</h5>
                        {//map through the catergories array and print out a checkbox for each
                        this.state.catergories.map((item, index) => (
                          <div key={index}>
                            <label>
                              <input
                                id={item.value}
                                type="checkbox"
                                name="catergories"
                                disabled={item.disabled}
                                checked={item.checked}
                                onChange={this.handleCatergoryCheckboxChange}
                              />
                              <span>{Capitalization(item.value)}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                      <button
                        type="submit"
                        href="/"
                        onClick={this.handleBtnClickFunctions}
                        // primary
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={this.handleBtnreset}
                        // primary
                        className="btn btn-secondary"
                      >
                        Reset
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <a href="/" className="brand-logo refresh center">
                News Feed
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </nav>
      </div>
      <img
        className="holderImage"
        src={require("./pug-holder.jpg")}
        alt="A astropuganaut filter sign"
      />
    </div>
  );

  loadJSX = () => {
    if (this.state.searchQuery.length === 0) return this.loadHolderImage();
  };

  render() {
    return this.loadJSX();
  }
}

//Capitalize the first letter in a string
const Capitalization = value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export default Filter;
