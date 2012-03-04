YUI.add('grid', function (Y) {
    
    Y.GridMarkup = function () {};
    Y.GridMarkup.prototype = {
        toMarkup: function () {
            var open    = '<div class="' + this.baseClassName + ' ' + this.get('className') + '">\n',
                close   = '\n</div>';
            
            return open + this.getInternalMarkup() + close;
        }
        // TODO handle indentation / pretty printing with an indent ATTR
    }
    
    Y.Unit = Y.Base.create('unit', Y.Model, [Y.GridMarkup], {
        baseClassName: 'yui3-u',
        getInternalMarkup: function () {
            var markup  = '<div class="content">\n';            
            Y.Array.each(this.get('content'), function (item) {
                markup += (Y.Lang.isString(item) ? item : item.toMarkup()) + '\n';
            });
            return markup + '</div>';
        }
    }, {
        ATTRS: {
            className: { value: '' },
            
            content: { 
                value: [],
                validator: function (newContent) {
                    if (! Y.Lang.isArray(newContent)) {
                        return false;
                    }
                    return Y.Array.every(newContent, function (item) {
                        return Y.Lang.isString(item) || item instanceof Y.Grid;
                    });
                }
            }
        }
    });
    
    Y.Grid = Y.Base.create('grid', Y.ModelList, [Y.GridMarkup], {
        baseClassName: 'yui3-g',
        model: Y.Unit,
        
        initializer: function () {
            this.add(new Y.Unit());
        },
        getInternalMarkup: function () {
            var markup = '';
            this.each(function (unit) {
                markup += unit.toMarkup();
            });
            return markup;
        }
    }, {
        ATTRS: {
            className: { value: '' }
        }
    });
}, '0.1', { requires: ['model-list', 'array-extras'] });