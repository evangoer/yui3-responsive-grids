YUI.add('unit-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Unit');
    
    suite.add(new Y.Test.Case({
        name: 'Testing toMarkup()',

        'toMarkup should return "HELLOSKI"': function () {
            var unit = new Y.Unit();
            Y.Assert.areEqual('HELLOSKI', unit.toMarkup());
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['unit', 'test-console'] });