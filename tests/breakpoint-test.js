YUI.add('breakpoint-test', function (Y) {
    var suite = new Y.Test.Suite('Test Suite for Y.Breakpoint');
    
    suite.add(new Y.Test.Case({
        name: 'Testing Y.Rule toCSS()',

        'An ordinary Y.Rule should generate a single line CSS rule': function () {
            var rule = new Y.Rule({ 
                    selector: '.yui3-u', 
                    properties: 'display: block;' 
                });
                css = '.yui3-u { display: block; }\n';
                
            Y.Assert.areEqual(css, rule.toCSS());
        }
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['breakpoint', 'test-console'] });