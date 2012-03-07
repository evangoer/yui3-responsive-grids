YUI.add('breakpoint', function (Y) {

    // TODO: UI convenience -- if the className on a Grid or Unit changes, update the Rule (and vice versa).

    Y.Rule = Y.Base.create('rule', Y.Model, [], {        
        initializer: function () {
            // TODO: on classNameChange, inspect ev.newVal, look for selectors that match, update
            //       Since both are listening for each other, be sure to prevent endless loop :)
        },
        toCSS: function () {
            return this.get('selector') + ' { ' + this.get('properties') + ' }\n';
        }
    }, {
        ATTRS: {
            selector: { 
                broadcast: 1,
                value: null,
                validator: function (value) {
                    return (value === null || Y.Lang.isString(value));
                }
            }, 
            properties: { validator: Y.Lang.isString }  // possibly an array of name/value objects... ? 
        }
    });
    
    Y.Breakpoint = Y.Base.create('breakpoint', Y.ModelList, [], {
        model: Y.Rule,
        
        toCSS: function () {
            
        },
        validateWidth: function (value) {
            return (value === null || Y.Lang.isNumber(value));
        }
    }, {
        ATTRS: {
            minWidth: { 
                value: null,
                validator: this.validateWidth
            },
            maxWidth: { 
                value: null,
                validator: this.validateWidth
            },
            orientation: {
                value: null,
                validator: function (value) {
                    return (value === null || value === 'portrait' || value === 'landscape');
                }
            }
        }
    });
}, '0.1', { requires: ['model-list'] });