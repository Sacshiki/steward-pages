import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const About = (props) => {
  const [loaded, setLoaded] = useState(false)
  const { pageTransitionReadyToEnter } = props

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      pageTransitionReadyToEnter()
      setLoaded(true)
    }, 500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [pageTransitionReadyToEnter])

  if (!loaded) return null

  return (
    <div className="container bg-green page">
      <h1>About Steward Garden</h1>
      <p>
        Use this app to keep track of your progress at Gravity Gardens
        starting in Oakland, CA. 
      </p>
      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  )
}

About.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default About
