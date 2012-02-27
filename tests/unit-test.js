YUI.add('unit-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Unit');
    
    suite.add(new Y.Test.Case({
        name: 'Testing toMarkup()',

        'No className should yield an empty yui3-u <div>': function () {
            var unit = new Y.Unit()
                markup = '<div class="yui3-u ">\n\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup());
        },
        'A className should follow the yui3-u': function () {
            var unit = new Y.Unit({ className: 'left' });
                markup = '<div class="yui3-u left">\n\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup());
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['unit', 'test-console'] });