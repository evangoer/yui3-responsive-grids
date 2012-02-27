YUI.add('unit', function (Y) {
    Y.Unit = Y.Base.create('unit', Y.Model, [], {
        toMarkup: function () {
            var open    = '<div class="yui3-u {className}">\n',
                close   = '\n</div>';
                markup  = open + close;
            
            return Y.Lang.sub(markup, this.toJSON());
        }
    }, {
        ATTRS: {
            className: { value: '' }
        }
    });
}, '0.1', { requires: ['model'] });