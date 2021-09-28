/**
 * Parse MasterVolt's PMVBM sentences.
 *
 * Based on the sample at https://github.com/SignalK/nmea0183-signalk/blob/master/custom-sentence-plugin/index.js
 */

module.exports = function (app) {
  const plugin = {}
  plugin.id = 'signalk-nmea0183-pmvbm-plugin'
  plugin.name =  'NMEA0183 PMVBM Plugin'
  plugin.description = 'Parse MasterVolt NMEA0183 PMVBM sentences from BTM-iii battery monitor.'

  plugin.start = function () {
    app.debug('BM parser started')
    app.emitPropertyValue('nmea0183sentenceParser', {
      sentence: 'PMVBM',
      parser: ({ id, sentence, parts, tags }, session) => {
        return {
          updates: [
            {
              values: [
                { path: 'electrical.batteries.0.voltage', value: Number(parts[1]) },
                { path: 'electrical.batteries.0.current', value: Number(parts[3]) },
                { path: 'electrical.batteries.0.capacity.stateOfCharge', value: Number(parts[5]) / 100.0 },
                { path: 'electrical.batteries.1.voltage', value: Number(parts[7]) }
              ]
            }
          ]
        }
      }
    })
  }

  plugin.stop = function () { }
  plugin.schema = {}
  return plugin
}
