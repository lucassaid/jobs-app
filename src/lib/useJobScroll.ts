import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

export default function useJobScroll() {
  const detailContainer = useRef<HTMLDivElement>(null)
  const { jobId } = useParams()

  useEffect(() => {
    detailContainer.current?.scrollTo({top: 0, behavior: 'smooth'})
  }, [jobId])

  return detailContainer
}