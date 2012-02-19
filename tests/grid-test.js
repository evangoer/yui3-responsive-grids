YUI.add('grid-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Grid');
    
    suite.add(new Y.Test.Case({
        name: 'Testing toMarkup()',

        'toMarkup should return "HELLOSKI"': function () {
            var grid = new Y.Grid();
            Y.Assert.areEqual('HELLOSKI', grid.toMarkup());
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['grid', 'test-console'] });