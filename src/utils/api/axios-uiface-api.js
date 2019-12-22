// Packages
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://uifaces.co/api',
  headers: {
    'X-API-KEY': '2a6d897e4003ee59be9f5307a2a08d',
    'Accept': 'application/json',
	  'Cache-Control': 'no-cache'
  }
})

export default instance
