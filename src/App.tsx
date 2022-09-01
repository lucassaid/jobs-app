import { Route, Routes } from 'react-router-dom'
import JobDetailScreen from './screens/JobDetail'
import JobsScreen from './screens/Jobs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobsScreen />} >
        <Route path=':jobId' element={<JobDetailScreen />} />
      </Route>
    </Routes>
  )
}

export default App
