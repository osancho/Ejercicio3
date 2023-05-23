import { useState, useEffect } from 'react'
import { getTeams } from '../services/Teams'

export const useFetchTeams = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTeams = async () => {
    try {
      const teams = await getTeams()
      if (teams.error) setError('No se encontraron equipos')
      else setTeams(teams)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return { teams, loading, error }
}
