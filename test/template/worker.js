// Clock test

onmessage = function(event) {
    self.TEST_DATA = event.data;
    self.TEST_ERROR_MESSAGE = "";

    if (!self.console) {
        self.console = function() {};
        self.console.log = function() {};
        self.console.warn = function() {};
        self.console.error = function() {};
    }

    __MODULES__
    __WMTOOLS__
    __SOURCES__
    __OUTPUT__
    __TEST_CASE__

    self.postMessage({ TEST_ERROR_MESSAGE: self.TEST_ERROR_MESSAGE || "" });
};

