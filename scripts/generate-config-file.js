
'use strict';

function getAddresForInterface(iname) {
    var os = require('os');
    var ifaces = os.networkInterfaces();
    var result = '';

    Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                if (ifname == iname) { result = iface.address; return; }
            }
            ++alias;
        });
    });
    return result;
}

function buildDefaultConfigurationFile(address) {
    const fs = require('fs')

    fs.readFile('./templates/default.conf', 'utf8', (err, content) => {
        if (err) {
          console.error(err)
          return
        }

        content = content.replace(/http:\/\/(.*?)\.(.*?)\.(.*?)\.(.*?):/gim, 'http://' + address + ":");

        fs.writeFile('../config/default.conf', content, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
        });
    });
}

var address = getAddresForInterface('en2');
console.log(address);
buildDefaultConfigurationFile(address);