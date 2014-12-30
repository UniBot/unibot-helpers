/**
 * Module dependencies.
 *
 * @type {exports}
 */
var http = require('http');
var https = require('https');

module.exports = {
    /**
     * Helper function to download specified url contents.
     *
     * @param   {string}    url         URL to download
     * @param   {Function}  callback    Callback function
     */
    download: function download(url, callback) {
        var pattern = new RegExp('^https:\/\/', 'i');
        var lib = http;

        if (pattern.test(url)) {
            lib = https;
        }

        // Fetch URL contents
        lib.get(url, function get(res) {
            var data = '';

            res.on('data', function chunk(chunk) {
                data += chunk;
            });

            res.on('end', function end() {
                callback(data);
            });
        }).on('error', function error() {
            callback(null);
        });
    }
};
