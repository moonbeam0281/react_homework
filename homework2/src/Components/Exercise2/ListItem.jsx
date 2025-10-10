import { Component } from "react";
import "./ListStyle.css";

export default class ListItem extends Component {
  constructor(props) {
    super();
    this.state = { doneMap: props.tasks.map(() => false) };
  }

  toggleDone = (i) => {
    this.setState((s) => {
      const doneMap = [...s.doneMap];
      doneMap[i] = !doneMap[i];
      return { doneMap };
    });
  };

  render() {
    const { tasks } = this.props;
    const { doneMap } = this.state;

    return (
      <div className="tasks">
        <h3>Task List</h3>
        <ul className="tasks__list">
          {tasks.map((t, i) => (
            <li
              key={i}
              className={`task task--${t.priority.toLowerCase()} ${
                doneMap[i] ? "task--done" : ""
              }`}
            >
              <label className="task__left">
                <input
                  type="checkbox"
                  checked={doneMap[i]}
                  onChange={() => this.toggleDone(i)}
                />
                <span className="task__name">{t.name}</span>
              </label>

              <span
                className={`task__priority pill pill--${t.priority.toLowerCase()}`}
                title={`Priority: ${t.priority}`}
              >
                {doneMap[i] ? "Completed" : t.priority}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
