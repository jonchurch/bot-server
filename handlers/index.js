const MusicHandler = require('./music')
const CasualHandler = require('./casual')
const LookHandler = require('./look')
const ExitHandler = require('./exit')

module.exports = {
  casual: new CasualHandler(),
  music: new MusicHandler(),
  look: new LookHandler(),
  exit: new ExitHandler()
}
