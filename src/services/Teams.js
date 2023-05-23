import axios from 'axios'

const API_URL = 'https://apiv3.apifootball.com'
const API_KEY = 'f629221d7bdcd7bf3b38b242774361b00c83822babcbc4f5eb105f0e136c5826'

export const getTeams = () => {
  return axios.get(`${API_URL}/?action=get_teams&league_id=302&APIkey=${API_KEY}`).then(response => {
    return response.data
  })
}
