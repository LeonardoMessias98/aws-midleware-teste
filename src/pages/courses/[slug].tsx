import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Course = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query.slug)
  },[])

  return (
    <div>Course - {router.query.slug}</div>
  )
}

export default Course