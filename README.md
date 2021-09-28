# signalk-nmea0183-pmvbm-plugin
SignalK plugin to parse MasterVolt NMEA0183 PMVBM sentences

## Description
This adds a custom NMEA0183 sentence parser for the PMVBM sentence. It updates the following paths:

- vessels/self/electrical/batteries/0/voltage
- vessels/self/electrical/batteries/0/capacity/stateOfCharge
- vessels/self/electrical/batteries/0/current
- vessels/self/electrical/batteries/1/voltage

## Installation
These instructions are based on the [SignalK plugin instructions](https://github.com/SignalK/signalk-server/blob/master/SERVERPLUGINS.md).

Clone this repo to a convenient place.

```
git clone https://github.com/rajlaud/signalk-nmea0183-pmvbm-plugin
```

Prepare plugin for linking.

```
cd signalk-nmea0183-pmvbm-plugin
npm link
```

Link the plugin.

```
cd ~/.signalk
npm link signalk-nmea0183-pmvbm-plugin
```

Restart signalk-server, and the plugin should be available. Please note that it takes no configuration options. You may need to click the `Submit` button
below the empty configuration page before you can enable it.
