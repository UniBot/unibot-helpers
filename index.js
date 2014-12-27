/**
 * Module dependencies.
 *
 * @type {exports}
 */
var http = require('http');

module.exports = {
    /**
     * Helper function to download specified url contents.
     *
     * @param   {string}    url         URL to download
     * @param   {Function}  callback    Callback function
     */
    download: function download(url, callback) {
        http.get(url, function get(res) {
            var data = '';

            res.on('data', function data(chunk) {
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
