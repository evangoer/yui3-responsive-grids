YUI.add('grid', function (Y) {
    Y.Grid = Y.Base.create('grid', Y.ModelList, [], {
        initializer: function () {
            this.add(new Y.Unit());
        },
        toMarkup: function () {
            var open    = '<div class="yui3-g ' + this.get('className') + '">\n',
                close   = '\n</div>';
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