import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { requestNotes } from "../redux/actions/actionCreator";
import NoteInput from "../components/Note/NoteInput";
import { useEffect } from "react";

const Task = (props) => {
  const dispatch = useDispatch();
  const reduxState = useSelector(
    (state) => ({
      isLoading: state.getNotesReducer.isLoading,
      tasks: state.getNotesReducer.noteList ?? [],
      statusCode: state.getNotesReducer.statusCode,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(requestNotes());
  }, []);

  return (
    <React.Fragment>
      <NoteInput />
      <div
        className="container"
        style={{
          color: "black",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {reduxState.tasks.slice(0, 5).map((card) => (
          <div style={{ margin: "1rem 2rem" }}>
            <div className="card">
              <h5 className="card-header">{card.title}</h5>
              <div className="card-body">
                <h5 className="card-title">
                  {card.completed
                    ? "This is task is completed"
                    : "This is task is not completed"}
                </h5>

                <a href="#" className="btn btn-primary">
                  Build Task Details Page
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Task;
// Object { completed: false, _id: "5f04755ceea8ea2160f5a865", description: "Clean house", … }
