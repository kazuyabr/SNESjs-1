/*********************************************************************
The MIT License (MIT)

Copyright (c) 2015 hatfarm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Super NES and Super Nintendo Entertainment System are trademarks of
  Nintendo Co., Limited and its subsidiary companies.
**********************************************************************/

//This is a helper class that will write to our logging text area.
var TheLogger = function() {
	this.debug = true;
	this.buffer = "";
	this.logCount = 0;
};

TheLogger.prototype.printLog = function() {
	if (this.buffer) {
		console.log(this.buffer.substring(0, this.buffer.length - 1));
		this.buffer = "";
		this.logCount = 0;
	}
};

TheLogger.prototype.log = function(val) {
	if(this.debug) {
		this.buffer += val + '\n';
		this.logCount++;
		if (this.logCount > 500) {
			this.printLog();
		}
	}
};
var instance;
var Logger = (function () {
	if (!instance) {
		instance = new TheLogger();
	}
	return instance;
})();

module.exports = Logger;