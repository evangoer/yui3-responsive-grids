YUI.add('grid', function (Y) {
    Y.Unit = Y.Base.create('unit', Y.Model, [], {
        toMarkup: function () {
            var open    = '<div class="yui3-u {className}">\n',
                close   = '\n</div>';
                markup  = open + close;
            
            return Y.Lang.sub(markup, this.toJSON());
        }
    }, {
        ATTRS: {
            className: { value: '' },
            content: { 
                value: [],
                validator: Y.Lang.isArray
            }
        }
    });
    
    Y.Grid = Y.Base.create('grid', Y.ModelList, [], {
        initializer: function () {
            this.add(new Y.Unit());
        },
        toMarkup: function () {
            var open    = '<div class="yui3-g ' + this.get('className') + '">\n',
                close   = '\n</div>',
                markup  = open + this.getUnitMarkup() + close;
            
            return markup;
        },
        getUnitMarkup: function () {
            var unitMarkup = '';
            this.each(function (unit) {
                unitMarkup += unit.toMarkup();
            });
            return unitMarkup;
        },
        model: Y.Unit
    }, {
        ATTRS: {
            className: { value: '' }
        }
    });
}, '0.1', { requires: ['model-list', 'unit'] });