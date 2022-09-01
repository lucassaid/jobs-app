import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import useSWR from 'swr'
import JobItem from '../components/JobItem'
import { jobsUrl } from '../lib/constants'
import { fetcher } from '../lib/fetcher'
import useJobScroll from '../lib/useJobScroll'
import { Job } from '../types/Job'

export default function JobsScreen() {
 
  const detailsContainer = useJobScroll()
  const { data: jobs } = useSWR<Job[]>(jobsUrl, fetcher)
  const location = useLocation()
  const isHome = location.pathname === '/'

  if (!jobs) return null

  return (
    <div className="flex">
      <div className={`
        ${isHome ? 'w-screen' : 'w-3/12'}
        duration-700
        flex-1 transition-all overflow-y-auto h-screen py-10
      `}>
        {jobs.map(job => (
          <NavLink
            key={job.id}
            to={job.id.toString()}
            className={({ isActive }) => `
              ${isHome ? 'px-96' : 'px-6'}
              ${isActive ? 'bg-slate-200' : ''}
              hover:bg-slate-100
              block transition-all duration-700 py-6
            `}
          >
            <JobItem {...job} />
          </NavLink>
        ))}
      </div>
      <div
        ref={detailsContainer}
        className={`
          ${isHome ? 'w-0' : 'w-9/12'}
          transition-all duration-700
          h-screen overflow-y-auto
        `}
      >
        <Outlet/>
      </div>
    </div>
  )
}