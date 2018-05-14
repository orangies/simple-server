var Baz = function () { };
Baz.prototype.log = function () {
    console.log('baz!');
};

Baz.prototype.log2 = function (msg) {
    console.log('baz! ' + msg);
};


exports.Baz = new Baz();
