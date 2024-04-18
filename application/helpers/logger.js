const fs = require('fs')
const moment = require('moment')

function logMessage (filename, message, type) {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss')
  const createMessage = `[${timestamp}] [${type}] ${message}\n`

  if (typeof filename !== 'string' || typeof message !== 'string' || typeof type !== 'string') {
    throw new Error('All arguments must be strings')
  }

  return new Promise((resolve, reject) => {
    fs.appendFile(filename, createMessage, (err) => {
      if (err) {
        console.error('Error creating log file:', err)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = logMessage
