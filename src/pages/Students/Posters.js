import React, { Component } from "react";
import Translator from "../../components/locale/Translator";
import { LocaleContext } from "../../components/locale/LocaleContext";

class posters extends Component {
  /* json for student posters/posters is not properly formatted for translator to 
    work hence a slightly modified translator is implemented here */
  constructor(props) {
    super(props);
    this.state = {
      posters: ""
    };
  }

  componentDidMount() {
    const fetchPosters = async () => {
      const data = await require("../../content/posters/" +
        this.context +
        ".json");
      this.setState({
        posters: data
      });
    };
    fetchPosters();
  }

  render() {
    /* please dont ask me why accessing state directly doesnt work, i have to do this */
    var postersJSON = this.state.posters;
    var postersArr = [];
    Object.keys(postersJSON).forEach(function (key) {
      if (key !== "postersAbout" && key !== "postersLink")
        postersArr.push(postersJSON[key]);
    });
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <div className="textBlock">
            <p>
              <Translator page="posters" text="postersAbout" />
            </p>
          </div>
          <a className="colouredLink noStyle" href="https://uwo.ca">
            <Translator page="posters" text="postersLink" />
          </a>
          <table>
            <tr>
              <th>Name</th>
              <th>University</th>
              <th>Title</th>
              <th>View Poster</th>
            </tr>
            {/* will not update on context changes, need to fix */}
            {postersArr.map((poster) => (
              <tr>
                <td>{poster.name}</td>
                <td>{poster.uni}</td>
                <td style={{ textAlign: "left" }}>{poster.title}</td>
                <td dangerouslySetInnerHTML={{ __html: poster.link }}></td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

posters.contextType = LocaleContext;
export default posters;
