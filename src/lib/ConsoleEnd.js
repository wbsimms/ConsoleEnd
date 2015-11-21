var readline = require("readline");

function ConsoleEnd() {
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

ConsoleEnd.prototype.ListenToEnd = function () {
    console.log("Press enter to exit");
    var self = this;
    this.rl.on("line", function (data) {
        self.rl.close();
        process.exit(0);
    });
};

module.exports = ConsoleEnd;