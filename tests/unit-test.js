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
        },
        'includeContent flag should include the content': function () {
            var unit = new Y.Unit();
                markup = '<div class="yui3-u ">\n    Lorem ipsum dolor sit amet.\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup(true));
        },
        'includeContent flag and className should work together': function () {
            var unit = new Y.Unit({ className: 'left' });
                markup = '<div class="yui3-u left">\n    Lorem ipsum dolor sit amet.\n</div>';
                
            Y.Assert.areEqual(markup, unit.toMarkup(true));
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['unit', 'test-console'] });