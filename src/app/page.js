

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='sm:mt-24 mt-16 flex flex-col items-center justify-center text-center'>
      <div >
     <h1 className='text-5xl font-extrabold'>
      ToDo LisT
     </h1>
      <h2 className="max-w-4xl sm:text-3xl font-semibold mt-3 sm:mt-6 ">
      Organize your life, one task at a time
        </h2>
    
    <p className="mt-2 sm:mt-3 max-w-xl text-lg">
    A to-do list is a tool for organizing tasks, ensuring completion, and managing time effectively.
    </p>
      </div>
      <Link href='/todolistview' target='_blank' className='mt-6 sm:mt-12  border border-gray-800 rounded-xl'>
        <button className='p-4'>get start </button>
      </Link>
    </div>
  )
}

export default page




















//---------------------------------

// import { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import EditTaskModal from './components/EditTaskModal';


// export default function Todos() {
//   const [tasks, setTasks] = useState([]);
//   const [taskName, setTaskName] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [editTaskId, setEditTaskId] = useState(null);

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//     setTasks(savedTasks);
//   }, []);

//   const saveTasksToLocalStorage = (tasks) => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   };

//   const addTask = () => {
//     if (taskName.trim() !== '') {
//       const newTasks = [...tasks, { id: Date.now(), name: taskName, done: false }];
//       setTasks(newTasks);
//       saveTasksToLocalStorage(newTasks);
//       setTaskName('');
//     }
//   };

//   const openEditModal = (id) => {
//     setEditTaskId(id);
//     setEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalOpen(false);
//     setEditTaskId(null);
//   };

//   const editTask = (newTaskName) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editTaskId ? { ...task, name: newTaskName } : task
//     );
//     setTasks(updatedTasks);
//     saveTasksToLocalStorage(updatedTasks);
//   };

//   const deleteTask = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//     saveTasksToLocalStorage(updatedTasks);
//   };

//   const toggleDone = (id) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === id ? { ...task, done: !task.done } : task
//     );
//     setTasks(updatedTasks);
//     saveTasksToLocalStorage(updatedTasks);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-4">Todo List</h1>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           className="border border-gray-300 px-2 py-1 mr-2"
//           placeholder="Enter task name"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//         />
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>
//           Add Task
//         </button>
//       </div>
//       <ul className="w-full max-w-md">
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className={`flex items-center justify-between p-2 ${
//               task.done ? 'line-through text-gray-500' : ''
//             }`}
//           >
//             <span>{task.name}</span>
//             <div>
//               <button className="text-blue-500 mr-2" onClick={() => openEditModal(task.id)}>
//                 Edit
//               </button>
//               <button className="text-red-500 mr-2" onClick={() => deleteTask(task.id)}>
//                 Delete
//               </button>
//               <button className="text-green-500" onClick={() => toggleDone(task.id)}>
//                 {task.done ? 'Undo' : 'Done'}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <EditTaskModal
//         isOpen={editModalOpen}
//         onClose={closeEditModal}
//         onEdit={editTask}
//         initialTaskName={tasks.find((task) => task.id === editTaskId)?.name || ''}
//       />
//     </div>
//   );
// }

