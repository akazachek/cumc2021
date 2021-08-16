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
      if (key.charAt(0) === "S") postersArr.push(postersJSON[key]);
    });
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <div className="textBlock">
            <p>
              <Translator page="posters" text="postersAbout" />
            </p>
          </div>
          {/*<a
            className="colouredLink noStyle"
            href="https://uwo.eu.qualtrics.com/jfe/form/SV_cHog2HfADu43zCu"
            target="_blank"
          >
            <Translator page="posters" text="postersLink" />
          </a>*/}
          <table>
            <tr>
              <th>
                {" "}
                <Translator page="posters" text="tableName" />
              </th>
              <th>
                <Translator page="posters" text="tableUni" />
              </th>
              <th>
                <Translator page="posters" text="tableTitle" />
              </th>
              <th>
                <Translator page="posters" text="tableLink" />
              </th>
            </tr>
            {/* will not update on context changes, need to fix */}
            {postersArr.map((poster) => (
              <tr>
                <td
                  style={{
                    textAlign: "right"
                  }}
                >
                  {poster.name}
                </td>
                <td
                  style={{
                    textAlign: "left"
                  }}
                >
                  {poster.uni}
                </td>
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
