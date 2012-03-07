YUI.add('grid-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Grid');
    
    suite.add(new Y.Test.Case({
        name: 'Testing toMarkup()',

        'No className should yield an empty yui3-g <div>': function () {
            var grid   = new Y.Grid(),
                markup = '<div class="yui3-g ">\n' + grid.item(0).toMarkup() + '</div>\n';
                
            Y.Assert.areEqual(markup, grid.toMarkup());
        },
        'A className should follow the yui3-g': function () {
            var grid   = new Y.Grid({ className: 'footer' }),
                markup = '<div class="yui3-g footer">\n' + grid.item(0).toMarkup() + '</div>\n';
                
            Y.Assert.areEqual(markup, grid.toMarkup());
        }
    }));
    
    suite.add(new Y.Test.Case({
        name: 'Testing getUnitMarkup()',
        
        'Output should be the concatenation of markup for child units': function () {
            var grid   = new Y.Grid(),
                markup = '';
            
            grid.add(new Y.Unit({ className: 'right' }));
            markup = '<div class="yui3-g ">\n' + grid.item(0).toMarkup()
                + grid.item(1).toMarkup() + '</div>\n';
            
            Y.Assert.areEqual(markup, grid.toMarkup());
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['grid', 'test-console'] });