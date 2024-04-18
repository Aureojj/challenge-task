const fs = require('fs')
const moment = require('moment')
const logMessage = require('../../application/helpers/logger.js')

jest.mock('fs')
jest.mock('moment')

describe('Log message', () => {
  beforeEach(() => {
    fs.appendFile.mockClear()
    moment.mockImplementation(() =>
      ({ format: jest.fn().mockReturnValue('2023-04-24 12:35:00') }))
  })

  it('should attach the message on the file', () => {
    logMessage('application.log', 'Test message', 'INFO')
    expect(fs.appendFile).toHaveBeenCalledWith(
      'application.log', '[2023-04-24 12:35:00] [INFO] Test message\n', expect.any(Function)
    )
  })

  it('should print an error if writing file fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    fs.appendFile.mockImplementation((filename, message, callback) => {
      callback(new Error('Error writing log file'))
    })

    try {
      await logMessage('application.log', 'Test message', 'INFO')
    } catch (err) {
    }

    expect(consoleSpy).toHaveBeenCalledWith('Error creating log file:', new Error('Error writing log file'))
  })
})
