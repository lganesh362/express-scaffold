/**
 * Sample responder to `/hello` route :)
 */
const logger = require('../../logger/logger')

/**
 * Returns a sample message
 * @param {*} req - request object
 * @param {*} res - response object
 */
const sayHello = (req, res) => {
    logger.info(`Checker route! Saying hello from ${req.originalUrl}`)
    res.status(200).json({ "message": "Hello gani I am ready for work 21-04-2023!!!@@@" })
}

module.exports = {
    sayHello
}
