# signalk-nmea0183-pmvbm-plugin
SignalK plugin to parse MasterVolt NMEA0183 PMVBM sentences

## Description
This adds a custom NMEA0183 sentence parser for the PMVBM sentence. It updates the following paths:

- vessels/self/electrical/batteries/0/voltage
- vessels/self/electrical/batteries/0/capacity/stateOfCharge
- vessels/self/electrical/batteries/0/current
- vessels/self/electrical/batteries/1/voltage

Please note that this plugin takes no configuration options. You may need to click the `Submit` button
below the empty configuration page before you can enable it.
