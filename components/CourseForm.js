import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import { TodosContext } from "../pages/gpa";




const CourseForm = () => {
  const [inputData, setInputData] = useState({ sub: '', subID: '', grd: 'A', cred:1});
  const { dispatch } = useContext(TodosContext);
  function addCourse(e) {
    e.preventDefault();
    if (inputData !== "") {
      //add new todo to state
      dispatch({
        type: "ADD",
        payload: {
          time: Date.now(),
          sub: inputData.sub ,
          subID: inputData.subID,
          grd: inputData.grd,
          cred: inputData.cred
        },
      });
      //clear input
      setInputData("");
    } else {
      alert("please add something ?");
    }
  };
  return (
    <div class="bg-pink-100 rounded-3xl body-gpa">
    <form onSubmit={addCourse}>
      <td class="w-full">
        <label class="m-5">Subject ID:</label>
        <input class="rounded-3xl" type="text" placeholder="add subject ID" value={inputData.subID} onChange={(e) => setInputData({ ...inputData, subID: e.target.value })} /><br />
        <label class="m-5">Subject:</label>
        <input type="text" placeholder="add subject" value={inputData.sub} onChange={(e) => setInputData({ ...inputData, sub: e.target.value })} /><br />
        <label >Credit:</label>
        <select placeholder="choose credit" value={inputData.cred} onChange={(e) => setInputData({ ...inputData, cred: e.target.value })}>
        <option></option>
          {CREDITS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select><br />
        <label>Grade:</label>
        <select value={inputData.grd} onChange={(e) => setInputData({ ...inputData, grd: e.target.value })}>
        <option></option>
          {
            GRADES.map((i) => (
              <option value={i.name}>{i.name}</option>
            ))
          }
        </select><br />
      </td>
      <td >
        <button type='submit'  >{'\u2714'}</button>
      </td> 
    </form >
  </div>
  );
};

export default CourseForm;
