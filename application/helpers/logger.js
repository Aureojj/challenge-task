const fs = require('fs')
const moment = require('moment')

function logMessage (filename, message, level) {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss')
  const createMessage = `[${timestamp}] [${level}] ${message}\n`

  fs.appendFile(filename, createMessage, (err) => {
    if (err) {
      console.error('Error creating log file:', err)
    }
  })

  console.log(createMessage)
}

module.exports = logMessage
