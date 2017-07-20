const service = require('../services/chatService').service
const router = require('express').Router()
const pick = require('lodash/pick')

const picker = (attrs) => (o) => pick(o, attrs)

// router.get('/', function(req, res, next) {
//   return service.roles.list().then((list) => {
// //     res.json(list)
//   }).catch(next)
// })
router.get('/roles', function(req, res, next) {
  return service.roles.list().then((list) => {
    res.json(list.map(picker(['friendlyName', 'type', 'sid', 'permissions'])))
  }).catch(next)
})

router.get('/users', function(req, res, next) {
  return service.users.list().then((list) => {
    res.json(list.map(picker(['identity', 'url', 'sid', 'roleSid'])))
  }).catch(next)
})

router.get('/channels', function(req, res, next) {
  return service.channels.list().then((list) => {
    res.json(list.map(picker(['uniqueName', 'friendlyName', 'type', 'membersCount', 'messagesCount', 'sid', 'links'])))
  }).catch(next)
})

router.get('/channels/:channelSid/members', function(req, res, next) {
  return service.channels(req.params.channelSid).members.list().then((list) => {
    res.json(list.map(picker(['identity', 'url', 'sid', 'roleSid', 'channelSid'])))
  }).catch(next)
})

router.get('/channels/:channelSid/invites', function(req, res, next) {
  return service.channels(req.params.channelSid).invites.list().then((list) => {
    res.json(list.map(picker(['identity', 'sid', 'createdBy', 'url'])))
  }).catch(next)
})

// chat.createChannel({
//   friendlyName: 'paul-mange-gras',
// })
//   .then((channel) => channel.invite('qur3'))
//   .then((invite) => console.log('user invited', invite))

module.exports = router
