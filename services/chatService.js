const {Twilio} = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN
const chatSid = process.env.TWILIO_IPM_SERVICE_SID

const client = new Twilio(accountSid, authToken)
const service = client.chat.services(chatSid)

module.exports = {service}
