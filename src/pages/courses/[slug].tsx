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

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export function getStaticProps() {
  return {props: {}, revalidate: 60 * 5}
}

export default Course