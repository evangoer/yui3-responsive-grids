YUI.add('grid', function (Y) {
    Y.Grid = Y.Base.create('grid', Y.ModelList, [], {
        initializer: function () {
            this.add(new Y.Unit());
        },
        toMarkup: function (includeContent) {
            var open    = '<div class="yui3-g ' + this.get('className') + '">\n',
                close   = '\n</div>',
                markup  = open + this.getUnitMarkup(includeContent) + close;
            
            return markup;
        },
        getUnitMarkup: function (includeContent) {
            var unitMarkup = '';
            this.each(function (unit) {
                unitMarkup += unit.toMarkup(includeContent);
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