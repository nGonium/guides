# Units

## px, in and cm

Units can be divided into absolute and relative units. The most common absolute unit in web development is `px`, although `in` and `cm` are recognised too, intended for print. Note: `px` does not refer to actual displayed pixels, but a reference pixel of fixed size that should be equal on all displays, regardless of resolution.

## em and rem

`em` and `rem` are common relative units. `em` relates to the font-size of the element, which may be enherited from a parent element, whereas `rem` relates to the font-size of the root element (`:root` or `html`), where `1(r)em = 16px`. If the root font-size is changed from 16px, `rem` and `em` will scale proportionately. If the font-size of an enclosing element is changed, properties on children who inherit that font-size will scale with it if they use `em`, but not properties which use `rem`.  
We cannot simply assume the root font-size is 16px, as users may change this to their preferences to increase readability. Using `rem` is therefore generally recommended, as most elements will then scale proportionately and predictably. `em` can be useful if you want to respond to changes in the font-size of enclosing elements, but nesting can make it unclear what that font-size is.  

## vh, vw and %

1 `vh` and `vw` represent, respectively, 1% of the viewport (window) height and width. They may therefore be useful in layouts, or anytime you need to scale something in response to a smaller viewport. `%` works similarly, but expresses itself as a percentage of the containing elements' property values. For example, if a containing element had a width property in pixels and font-size in rems, a child element that uses `%` for these properties would express them as percentages of that amount of `rem` and `px` respectively. If a parents' width was not given explictly, then a child with `width: 50%` would still take up 50% of the calculated width. 

## Which unit to choose?

For font-size, it is generally preferred to use a relative unit like `em` or `rem` as these respect user preferences. For padding and margin, `px` might look nicer, but `rem` may scale better. Cody Loys prefers `px` over `rem`. `px` Also has the benefit of being easy to interpret and unambigious. 
