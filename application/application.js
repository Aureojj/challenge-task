const logMessage = require('./helpers/logger.js')

logMessage('application.log', 'User logged in', 'INFO')
logMessage('application.log', 'Failed login attempt', 'WARNING')
logMessage('/teste2/eapplication.log', 'Server Error', 'ERROR')
