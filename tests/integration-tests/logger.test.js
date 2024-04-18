const fs = require('fs')
const logMessage = require('../../application/helpers/logger.js')

describe('Log message with success', () => {
  afterEach(() => {
    if (fs.existsSync('tests/integration-tests/applicationTest.log')) {
      fs.unlink('tests/integration-tests/applicationTest.log', err => {
        if (err) {
          console.error('An error ocurred while deleting file log test')
        }
      })
    }
  })

  it('should write the message on the log file', async () => {
    logMessage('tests/integration-tests/applicationTest.log', 'Test message', 'INFO')

    const logContent = await fs.promises.readFile('tests/integration-tests/applicationTest.log', 'utf-8')
    expect(logContent).toContain('[INFO] Test message')
  })

  it('should throw an error if the log file does not exist', async () => {
    await expect(logMessage('path/to/nonexistent/applicationTest.log', 'Test message', 'INFO')).rejects.toThrow()
  })

  it('should throw an error if the log type is not string', async () => {
    try {
      await logMessage('application.log', 'Test message', 1275)
    } catch (err) {
      expect(err).toEqual(new Error('All arguments must be strings'))
    }
  })

  it('should throw an error if the log file is not string', async () => {
    try {
      await logMessage(8594, 'Test message', 'INFO')
    } catch (err) {
      expect(err).toEqual(new Error('All arguments must be strings'))
    }
  })

  it('should throw an error if the message type is not string', async () => {
    try {
      await logMessage('application.log', true, 'INFO')
    } catch (err) {
      expect(err).toEqual(new Error('All arguments must be strings'))
    }
  })
})
