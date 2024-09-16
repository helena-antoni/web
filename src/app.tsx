import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'

export function App() {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSummary(data)
      })
  }, [])

  return (
    <Dialog>
      
      <pre>{JSON.stringify(summary, null, 2)}</pre>
      {/* <EmptyGoals/> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
