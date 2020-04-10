
import React, { useContext } from "react"
import {TaskContext } from "./TaskProvider";

export default ({ task, history }) => {
    const { releaseTask } = useContext(TaskContext)
    return(
    <section className="task">
        <h3 className="task__name">
           <div className="task_name">{task.taskName}</div>
           <div className="task_name">{new Date(task.taskETA).toLocaleDateString('en-US')}</div>
           <div className="task_name">{task.userId}</div>
           <input type="checkbox"></input>
           <button className="btn--edit" onClick={() => {
        history.push(`/tasks/editTasks/${task.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releaseTask(task).then(() => {
          history.push("/tasks");
        });
      }}>delete</button>
         
           
           
        </h3>
       
    </section>)}

/////

<html>
    <form name="orderForm">
      <input type="checkbox" name="door4" onClick="alert('door4')">4 doors<br>
      <input type="checkbox" name="door2" onClick="displayNote()">2 doors<hr>
      Step 2:
      <input type="button" value="Submit Order" name="orderButton" onClick="alert('submitted')">
    </form>
    <script language="JavaScript">
    <!--
    function displayNote(){
      alert("Have you considered the 4-door version?");
      document.orderForm.door4.click();
    }
    -->
    </script>
    </html>
