YUI.add('unit', function (Y) {
    Y.Unit = Y.Base.create('unit', Y.Model, [], {
        toMarkup: function (includeContent) {
            var open    = '<div class="yui3-u {className}">\n',
                content = '    {content}',
                close   = '\n</div>';
                markup  = open + (includeContent ? content : '') + close;
            
            return Y.Lang.sub(markup, this.toJSON());
        }
    }, {
        ATTRS: {
            className: { value: '' },
            content:   { value: 'Lorem ipsum dolor sit amet.' },
        }
    });
}, '0.1', { requires: ['model'] });