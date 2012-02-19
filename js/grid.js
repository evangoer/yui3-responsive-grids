YUI.add('grid', function (Y) {
    Y.Grid = Y.Base.create('grid', Y.ModelList, [], {
        model: Y.Grid,
        toMarkup: function () {
            var tmpl = '<div class="yui3-g {className}">',
                data = { className: this.get('className') };
            
            return Y.Lang.sub(tmpl, data);
        }
    }, {
        ATTRS: {
            className: { value: '' }
        }
    });
}, '0.1', { requires: ['model-list'] });