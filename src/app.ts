import axios, { AxiosResponse } from 'axios'
import express from 'express'

// url must be the same with docker-compose.yml
// http://<service-name>
const NGINX_PROXY = 'http://nginx_proxy'
const PORT: number = 3000

const app = express()

app.get(
  '/',
  async (_, res): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.get(NGINX_PROXY)
      res.send(result.data)
    } catch (error) {
      console.error(error)
      res.json({ message: 'Whoops!' })
    }
  },
)

app.listen(PORT, () => console.log('listening on port', PORT))
