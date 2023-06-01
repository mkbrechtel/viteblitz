// read base.html from module directory
import { readFileSync } from 'fs'
import { resolve } from 'path'

const baseHTML = readFileSync(resolve(__dirname, 'base.html'), 'utf-8')

const ViteBlitz = () => ({
    name: 'viteblitz',
    configureServer(server) {
      server.middlewares.use('/__viteblitz',(req, res, next) => {
          res.end(baseHTML);
        });
    },
  })

export { ViteBlitz }
