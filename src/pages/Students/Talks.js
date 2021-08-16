import React, { Component } from "react";
import Translator from "../../components/locale/Translator";
import { LocaleContext } from "../../components/locale/LocaleContext";

class Talks extends Component {
  /* json for student talks/posters is not properly formatted for translator to 
    work hence a slightly modified translator is implemented here */
  constructor(props) {
    super(props);
    this.state = {
      talks: ""
    };
  }

  componentDidMount() {
    const fetchTalks = async () => {
      const data = await require("../../content/talks/" +
        this.context +
        ".json");
      this.setState({
        talks: data
      });
    };
    fetchTalks();
  }

  render() {
    /* please dont ask me why accessing state directly doesnt work, i have to do this */
    var talksJSON = this.state.talks;
    /* transform to array to iterate over */
    var talksArr = [];
    Object.keys(talksJSON).forEach(function (key) {
      // three-way and operator because i cannot plan ahead
      if (key.charAt(0) === "S") talksArr.push(talksJSON[key]);
    });
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <div className="textBlock">
            <p>
              <Translator page="talks" text="talksAbout" />
            </p>
          </div>
          {/*<a
            className="colouredLink noStyle"
            href="https://uwo.eu.qualtrics.com/jfe/form/SV_9XiLCFf1OFb3TE2"
            target="_blank"
          >
            <Translator page="talks" text="talksLink" />
          </a> */}
          <table>
            <tr>
              <th>
                {" "}
                <Translator page="talks" text="tableName" />
              </th>
              <th>
                <Translator page="talks" text="tableUni" />
              </th>
              <th>
                <Translator page="talks" text="tableTitle" />
              </th>
              <th>
                <Translator page="talks" text="tableLink" />
              </th>
            </tr>
            {/* will not update on context changes, need to fix */}
            {talksArr.map((talk) => (
              <tr>
                <td
                  style={{
                    textAlign: "right"
                  }}
                >
                  {talk.name}
                </td>
                <td
                  style={{
                    textAlign: "left"
                  }}
                >
                  {talk.uni}
                </td>
                <td
                  style={{
                    textAlign: "left"
                  }}
                >
                  {talk.title}
                </td>
                <td dangerouslySetInnerHTML={{ __html: talk.link }}></td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

Talks.contextType = LocaleContext;
export default Talks;
