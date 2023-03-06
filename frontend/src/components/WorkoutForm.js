import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutFrom = () => {
    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState(0)
    const [reps, setReps] = useState(0)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}
        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (res.ok) {
            
            setError(null)
            setEmptyFields([])
            setTitle('')
            setLoad(0)
            setReps(0)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }

    }
    return (
        <form className='create' onSubmit={handleSubmit}>
            <h4>Add a New Workout</h4>
            <label>Exercise Title:</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error': ''}
            />
            <label>Load (kg):</label>
            <input
                type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error': ''}
            />
            <label>Reps:</label>
            <input
                type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error': ''}
            />
            <button type='submit'>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutFrom