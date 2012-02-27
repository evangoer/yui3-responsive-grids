YUI.add('unit-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Unit');
    
    suite.add(new Y.Test.Case({
        name: 'Testing toMarkup()',

        'No className should yield an empty yui3-u <div>': function () {
            var unit = new Y.Unit(),
                markup = '<div class="yui3-u ">\n\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup());
        },
        'A className should follow the yui3-u': function () {
            var unit = new Y.Unit({ className: 'left' }),
                markup = '<div class="yui3-u left">\n\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup());
        }
    }));
    
    suite.add(new Y.Test.Case({
        name: 'Testing adding content to a Unit',
        
        'Content should not be something other than an array': function () {
            var unit = new Y.Unit({ content: 'foo' });
            Y.Assert.areNotEqual('foo', unit.get('content'));
        },
        'Content should be an array of strings and Y.Grid objects': function () {
            var unit   = new Y.Unit(),
                arrVal = ['a', new Y.Grid(), 'c'];
            
            unit.set('content', arrVal);
            Y.Assert.areEqual(arrVal, unit.get('content'));
        },
        'Content array should not contain illegal objects': function () {
            var unit   = new Y.Unit(),
                arrVal = ['a', new Date(), 'c'];
            
            unit.set('content', arrVal);
            Y.Assert.areNotEqual('foo', unit.get('content'));
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['grid', 'test-console'] });