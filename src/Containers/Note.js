import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../redux/actions/actionCreator";
import NoteInput from "../components/Note/NoteInput";

const Note = (props) => {
  const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   console.info("[Form data]", data);
  //   dispatch(requestLogin(data));
  // };
  //
  // const response = useSelector((state) => ({
  //   isLoading: state.loginReducer.isLoading,
  //   data: state.loginReducer.data,
  //   status: state.loginReducer.status,
  //   statusCode: state.loginReducer.statusCode,
  // }));
  // console.log("[state] Note", response);
  return (
    <React.Fragment>
      <NoteInput />
    </React.Fragment>
  );
};
export default Note;
