
import { useState, useEffect } from 'react'
import './App.css'

// Backend API connected to MongoDB Atlas
const API_URL = 'https://swynex-task-manager.onrender.com/api/tasks'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskTitle, setTaskTitle] = useState('')
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load saved tasks when the page opens
  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Could not load tasks')
        }

        const data = await response.json()
        setTasks(data)
      } catch (err) {
        setError('Unable to load tasks. Please check your backend.')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  // Add a new task to MongoDB
  async function addTask(e) {
    e.preventDefault()

    const title = taskTitle.trim()
    if (!title) return

    try {
      setError('')

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })

      if (!response.ok) {
        throw new Error('Could not create task')
      }

      const newTask = await response.json()
      setTasks(previousTasks => [newTask, ...previousTasks])
      setTaskTitle('')
    } catch (err) {
      setError('Unable to add task. Please try again.')
    }
  }

  // Update completion status in MongoDB
  async function toggleTask(id, completed) {
    try {
      setError('')

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed }),
      })

      if (!response.ok) {
        throw new Error('Could not update task')
      }

      const updatedTask = await response.json()

      setTasks(previousTasks =>
        previousTasks.map(task =>
          task._id === id ? updatedTask : task
        )
      )
    } catch (err) {
      setError('Unable to update task. Please try again.')
    }
  }

  // Delete a task from MongoDB
  async function deleteTask(id) {
    try {
      setError('')

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Could not delete task')
      }

      setTasks(previousTasks =>
        previousTasks.filter(task => task._id !== id)
      )
    } catch (err) {
      setError('Unable to delete task. Please try again.')
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <main className="app">
      <header className="topbar">
        <h1>SWYNEX <span>Tasks</span></h1>
        <span className="status">Task Manager</span>
      </header>

      <section className="welcome">
        <p className="eyebrow">YOUR WORKSPACE</p>
        <h2>Make today productive.</h2>
        <p>Organize your work, track progress, and get things done.</p>
      </section>

      <section className="stats">
        <article className="stat-card">
          <span>Total tasks</span>
          <strong>{tasks.length}</strong>
        </article>
        <article className="stat-card">
          <span>In progress</span>
          <strong>{tasks.filter(task => !task.completed).length}</strong>
        </article>
        <article className="stat-card">
          <span>Completed</span>
          <strong>{tasks.filter(task => task.completed).length}</strong>
        </article>
      </section>

      <section className="task-panel">
        <h3>Create a task</h3>

        <form className="task-form" onSubmit={addTask}>
          <input
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
            placeholder="What needs to be done?"
            aria-label="Task title"
          />
          <button type="submit" disabled={loading}>
            + Add task
          </button>
        </form>

        {error && <p role="alert">{error}</p>}

        <div className="task-heading">
          <h3>Your tasks</h3>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            aria-label="Filter tasks"
          >
            <option>All</option>
            <option>Active</option>
            <option>Completed</option>
          </select>
        </div>

        {loading ? (
          <p className="empty">Loading your saved tasks...</p>
        ) : filteredTasks.length === 0 ? (
          <p className="empty">
            No tasks here yet. Add your first task above!
          </p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map(task => (
              <li key={task._id} className="task-item">
                <label className="task-label">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      toggleTask(task._id, task.completed)
                    }
                  />
                  <span className={task.completed ? 'done' : ''}>
                    {task.title}
                  </span>
                </label>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                  aria-label={`Delete ${task.title}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer>SWYNEX Task Manager · Built for productivity</footer>
    </main>
  )
}

export default App
