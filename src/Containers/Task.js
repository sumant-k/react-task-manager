import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { requestNotes } from "../redux/actions/actionCreator";
import NoteInput from "../components/Note/NoteInput";
import { useEffect } from "react";

const Task = (props) => {
  const dispatch = useDispatch();
  const response = useSelector(
    (state) => ({
      isLoading: state.getNotesReducer.isLoading,
      tasks: state.getNotesReducer.list,
      statusCode: state.getNotesReducer.statusCode,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(requestNotes());
  }, []);

  console.log("[state] task", response);
  return (
    <React.Fragment>
      <NoteInput />
    </React.Fragment>
  );
};
export default Task;
// Object { completed: false, _id: "5f04755ceea8ea2160f5a865", description: "Clean house", … }
