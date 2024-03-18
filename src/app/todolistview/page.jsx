"use client"

import { useEffect, useState } from "react";
// import EditTaskModal from "../components/EditTaskModal";


export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const [editTaskName, setEditTaskName] = useState('')

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = () => {
    if (taskName.trim() !== '') {
      const newTasks = [...tasks, { id: Date.now(), name: taskName, done: false }];
      setTasks(newTasks);
      saveTasksToLocalStorage(newTasks);
      setTaskName('');
    }
  };

  const openEditModal = (id) => {
    setModal(true)
    let taskDetails = tasks.find((task)=> task.id === id )
    setEditTaskName(taskDetails.name)
    console.log(id)
    console.log("task details",taskDetails.name)
    setEditTaskId(id);
  };

  const closeEditModal = () => {
    setModal(false);
    setEditTaskId(null);
  };

  const editTask = (newTaskName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, name: newTaskName } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setTaskName(inputValue);
  };

  const [modal, setModal] = useState(false);

  return (
    <div className=" sm:px-20 ">
      <div className="bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br font-bold     sm:p-4 shadow-xl shadow-gray-400   sm:shadow-lg text-white sm:text-2xl text-center   sm:rounded-lg sm:mt-2    sm:shadow-red-50 h-24 items-center justify-center flex text-3xl sm:h-16 rounded-b-2xl "> My TODOList</div>

      <div className="flex flex-col mx-8 sm:flex-row items-center justify-center mt-16">
        <textarea
          type="text"
          className="block p-2.5 w-full sm:w-1/2 text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  text-wrap "
          placeholder="Enter task name"
          value={taskName}
          onChange={handleChange}


        />
        <button type="button" className="text-white font-bold bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700  focus:ring-4 focus:outline-none focus:ring-teal-300  shadow-lg shadow-red-50  rounded-lg text-sm px-8 py-3.5 text-center sm:me-2 sm:mb-2 sm:mx-4 mt-4" onClick={addTask} >Add Task</button>
      </div>


      <div className=" flex items-center justify-center">

        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`sm:flex sm:flex-row sm:items-center sm:justify-between sm:p-2 flex flex-col items-center justify-center ${task.done ? 'line-through text-gray-500' : ''
                }`}
            >
              <div className="flex m-2 ">
                <input id="link-checkbox" type="checkbox" className={`  mt-2.5 mr-2 size-5 text-blue-600 bg-gray-100 border-gray-900 rounded-md ${task.done ? 'line-through text-gray-500' : ''
                  }`} onClick={() => toggleDone(task.id)}></input>
                <div className="border border-zinc-700 p-2 rounded-xl w-72 text-lg font-semibold text-wrap">{task.name}</div>
              </div>

              {/* {task.done ? 'Undo' : 'Done'} */}
              <div className="flex ml-7">
                <button className="sm:text-gray-900 sm:hover:text-white border border-gray-800 sm:bg-white sm:hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 sm:font-medium rounded-lg sm:text-sm px-5 py-2.5 sm:text-center me-2 mb-2 bg-zinc-700 text-white" onClick={() => {

                  openEditModal(task.id)
                }}>
                  Edit
                </button>
                <button className="sm:text-gray-900 sm:hover:text-white border border-gray-800 sm:bg-white sm:hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 sm:font-medium rounded-lg sm:text-sm px-5 py-2.5 sm:text-center me-2 mb-2 bg-zinc-700 text-white " onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {modal && (
        <div onClick={() => setModal(!modal)} className="fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-black/50 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white h-44 w-full mx-10 rounded-xl shadow-gray-600 sm:mx-80 p-4  ">
            <textarea
              type="text"
              className="block p-2.5 w-full h-24   text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  text-wrap "
              placeholder="update task " value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)}
            />
            <div className=" py-2 flex items-end justify-end ">

              <button onClick={() => {editTask(editTaskName),setModal(!modal)}} className="sm:text-gray-900 sm:hover:text-white border border-gray-800 sm:bg-white sm:hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 sm:font-medium rounded-lg sm:text-sm px-5 py-2.5 sm:text-center me-2 mb-2 bg-zinc-700 text-white">
                Save
              </button>
              <button className="sm:text-gray-900 sm:hover:text-white border border-gray-800 sm:bg-white sm:hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 sm:font-medium rounded-lg sm:text-sm px-5 py-2.5 sm:text-center me-2 mb-2 bg-zinc-700 text-white" onClick={closeEditModal}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
