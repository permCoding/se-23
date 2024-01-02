function a() {
    var obj = { }
    Object.defineProperties(obj, {
        'x': { value: 666, writable: true },
    })
}

function b() {
    var obj = { }
    var _x = 666
    obj.x = {
        get: function () { return _x },
        set: function (v) { _x = v }
    }
    for (var i=0; i<1_000_000; i++) {
        obj.x.set( -obj.x.get() )
    }
}

function c() {
    class MyClass {
        constructor() { 
            this._x = 666
        }
        get x() { return this._x }
        set x(v) { this._x = v }
    }
    var obj = new MyClass()
    for (var i=0; i<1_000_000; i++) {
        obj.x = -obj.x
    }
}

c()
