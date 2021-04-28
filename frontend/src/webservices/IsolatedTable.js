import React, { Component } from "react";
import { RestDataSource } from "./RestDataSource";
import { IsolatedListContainer } from "../styles";
export class IsolatedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.dataSource = new RestDataSource("http://localhost:8000/api/movies");
  }
  render() {
    return (
      <IsolatedListContainer>
        <table className="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan="5" className="bg-info text-white text-center h4 p-2">
                REST API DATA
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>

              <th>imdb_rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.title}</td>
                <td>{m.body}</td>
                <td className="text-right">
                  {Number(m.imdb_rating).toFixed(2)}
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </IsolatedListContainer>
    );
  }
  componentDidMount() {
    this.dataSource.GetData((data) => this.setState({ movies: data }));
  }
}
