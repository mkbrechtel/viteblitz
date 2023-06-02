const baseHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Viteblitz</title>
  </head>
  <body>
    <script type="module" src="/src/app.js"></script>
    <div id="app"></div>
  </body>
</html>
`

const ViteBlitz = () => ({
  name: 'viteblitz',
  configureServer(server) {
    server.middlewares.use('/__viteblitz',(req, res, next) => {
        res.end(baseHTML);
      });
  },
})

export { ViteBlitz }
