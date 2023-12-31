// import sass from 'sass';
const sass = require('sass')
const fs = require('fs')

const compressed = sass.compile('./src/autodark.scss', {
  style: 'compressed',
  quietDeps: true,
})

// Recursively create directory './dist/css' if it doesn't exist
fs.mkdirSync('./dist/css', { recursive: true })

// save to file
fs.writeFile('./dist/css/autodark.css', compressed.css, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('The file was saved!')
})
