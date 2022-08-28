# Forms, inputs, buttons and more

Forms allow us to send user data to another webpage or a server. Forms contain inputs which allow the user to enter or select data, as well as buttons to modify, reset or submit such data. Inputs, buttons and everything else mentioned here can also be used outside of forms, for example to provide JS functionality, the data does not have to be submitted to a separate webpage.

## Form

Every form starts with a `<form>` element, inside of which all related inputs, buttons and other elements are contained. Forms accept an `method` attribute, which can take the value of `get`, `post` or `dialog`. `get` appends the URL with a `?` followed by name-value pairs from the input data. The resulting url looks something like `example.com/results.html?input1=`

## Labels

Inputs are self-enclosed and therefore don't generally accept text to explain their purpose. Instead, we can add labels that describe or name the associated input. To associate labels with inputs, we use the `for` attribute, which must be equal to the `id` of the associated input field. Alternatively, the `for` attribute can be omitted and the input can be enclosed in the label, however this is generally bad practice. 
```html
<!-- Preferred method -->
<label for="input-name">
</label>
<input id="input-name">
<!-- Alternative -->
<label>
    <input>
</label>
```

## Input 
The `<input>` element can be used for many types of input, specified by the `type` attribute, which should ideally always be specified. Most/all inputs should also have an `id` (used by the `for` attribute of a label) and `name`. The `name` property is used as the 'key' of the key-value pair associated with that input. Most inputs will have their own name, but radio inputs will share a name with other radio inputs that affect the same selection.  

Text fields allow the user to type in values and may be subject to text validation. A text validation `pattern` may be set, which accepts REGEX. A `placeholder` may also be set, which will appear grey and disappear from view when the user types.
| Field | description |
| ---       | --- |
| text      | Text field that accepts any value |
| number    | Number validation |
| password  | Accepts any value, but hides input as dot-markers |
| email     | Basic email validation |
| tel       | Telephone number validation |
| search    | Similar to text but intended for searches |
| url       | URL-format validation |

Radio and checkpox inputs can be selected, which grants them the `checked` attribute. Checkboxes permit multiple selections while radio buttons with the same `name` only permit one value.
| Selectables       | Description |
| ---       | --- |
| radio     | For each `for` attribute, only one radio-button can be `checked`, `for` should be shared |
| checkbox  | Like radio but any number of boxes can be `checked`, should each have their own `for` |

These inputs have special use-cases and interfaces.
| Special   | Description |
| ---       | --- |
| range     | Slider with range of `min` to `max` and initial `value`, slides by `step` amount |
| color     | RGB color picker |
| image     |  |
| file      | File selector |

These date/time selectors provide an easy way to receive date/time info with standardised formats from the user.
| Time      | Description |
| ---       | --- |
| date      | Dropdown DD/MM/YYYY selector |
| datetime-local | Dropdown DD/MM/YYYY hh:mm selector |
| time      | Dropdown hh:mm selector |
| week      | Dropdown weeknumber, year selector |
| month     | Dropdown MM YYYY selector |

There are `<input>` elements of various button types, but you should generally use the (newer) `<button>` element for this instead, which allows any text or HTML inside its opening and closing tag rather than relying on `<label>` like an `<input>` would. They accept the same types as below.
| Button    | Description |
| ---       | --- |
| button    |  |
| reset     |  |
| submit    |  |
| hidden    |  |