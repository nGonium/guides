# Position
Any element can use one of five position property values: `static`, `relative`, `absolute`, `fixed` or `sticky`.  

## Static

Static is the default for all elements, it creates the normal document flow where each element is displayed after its siblings.  

## Relative

Relative works like static, but it supports directional properties (`top`, `right`, `bottom` and `left`). If these are set, they push the element from its initial position to that direction by the specified amount. However, the rest of the document will flow the same as if its position is set to `static`. 

## Absolute

Element will be taken out of the document flow, other elements will behave as though the element does not exist. By default its position will be the same as if it were `static` or `relative`, however if any directional property is set, it will move to the origin of the first parent container with a non-static position, and offset itself by the specified amount. If all parents to the element have a static position, the origin of html document itself will instead be used. For this reason, `position: relative` is often used on parent elements to position `position: absolute` children.

## Fixed

Similar to absolute, but the element is taken entirely out of the document flow. Its initial position will always be set at the origin point of the document, and setting the directional properties will offset it from there by the specified amount. It is completely independent from parent containers. 

## Sticky

Initially functions the same as `relative` positioning, but if the viewport moves such that the element would fall outside of it, the element becomes fixed in the last position where it's still entirely visible. It will remain there until it can move away from the edge of the viewport. The rest of the document flow is not affected, it will behave as though the element is still in its initial position. 