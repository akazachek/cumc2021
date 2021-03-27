import React, { Component } from "react";
import Translator from "../../components/Translator";
import { LocaleContext } from "../../components/LocaleContext";

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
    var talksArr = [];
    Object.keys(talksJSON).forEach(function (key) {
      if (key != "talksAbout" && key != "talksLink")
        talksArr.push(talksJSON[key]);
    });
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <p>
            <Translator page="talks" text="talksAbout" />
          </p>
          <a href="https://uwo.ca">
            <Translator page="talks" text="talksLink" />
          </a>
          <table>
            <tr>
              <th>Name</th>
              <th>University</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
            {/* will not update on context changes, need to fix */}
            {talksArr.map((talk) => (
                <tr>
                <td>{talk.name}</td>
                <td>{talk.uni}</td>
                <td>{talk.title}</td>
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
