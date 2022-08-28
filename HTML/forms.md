# Forms, inputs, buttons and more

Forms allow us to send user data to another webpage or a server. Forms contain inputs which allow the user to enter or select data, as well as buttons to modify, reset or submit such data. Inputs, buttons and everything else mentioned here can also be used outside of forms, for example to provide JS functionality, the data does not have to be submitted to a separate webpage.

## Form

Every form starts with a `<form>` element, inside of which all related inputs, buttons and other elements are contained. Firstly, forms accept an `action` attribute, which tells it where to send form data to. Second, forms accept an `method` attribute, which can take the value of `get`, `post` or `dialog`. `get` appends the URL with a `?` followed by name-value pairs from the input data. The resulting url looks something like `example.com/results.html?input-1=value-1`. `post` sends the data to a server, but this requires a server to be running. For testing without a server, we can send data to `http://httpbin.org/post` which returns us the submitted data as a JSON file.

## Labels

Inputs are self-enclosed and therefore don't generally accept text to explain their purpose. Instead, we can add labels that describe or name the associated input. When clicked, labels will select the associated input automatically. To associate labels with inputs, we use the `for` attribute, which must be equal to the `id` of the associated input field. Alternatively, the `for` attribute can be omitted and the input can be enclosed in the label, however this is generally bad practice. 
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
The `<input>` element can be used for many types of input, specified by the `type` attribute, which should ideally always be specified. Most/all inputs should also have an `id` (used by the `for` attribute of a label) and `name`. The `name` property is used as the 'key' of the key-value pair associated with that input. Most inputs will have their own unique name, but radio inputs will share a name with other radio inputs that affect the same selection.  

### Text

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

### Radio and checkbox

Radio and checkpox inputs can be selected, which grants them the `checked` attribute. A default option can be set by giving them this `checked` attribute in the html file. Checkboxes permit multiple selections while radio buttons with the same `name` only permit one value.
| Selectables       | Description |
| ---       | --- |
| radio     | For each `for` attribute, only one radio-button can be `checked`, `for` should be shared |
| checkbox  | Like radio but any number of boxes can be `checked`, should each have their own `for` |

### Special

These inputs have special use-cases and interfaces.
| Special   | Description |
| ---       | --- |
| range     | Slider with range of `min` to `max` and initial `value`, slides by `step` amount |
| color     | RGB color picker |
| image     |  |
| file      | File selector |
| hidden    | A very special input in that it is never shown in any way to the user. Through manipulating its `value` property, e.g. through javascript, we can use such input to submit our own data alongside the user's |

### Date

These date/time selectors provide an easy way to receive date/time info with standardised formats from the user.
| Time      | Description |
| ---       | --- |
| date      | Dropdown DD/MM/YYYY selector |
| datetime-local | Dropdown DD/MM/YYYY hh:mm selector |
| time      | Dropdown hh:mm selector |
| week      | Dropdown weeknumber, year selector |
| month     | Dropdown MM YYYY selector |

## Button and \<input type="button">

There are `<input>` elements of various button types, but you should generally use the (newer) `<button>` element for this instead, which allows any text or HTML inside its opening and closing tag rather than relying on `<label>` like an `<input>` would. They accept the same types as below.
| Button    | Description |
| ---       | --- |
| button    | Generic button with no automatic behaviours, however it is not the default for `<button>`, see `submit` |
| reset     | Resets all form data |
| submit    | Will submit form data of the enclosing form. This is the default type for a `<button>`, other buttons in the form not intended to submit must explicitly be given a type |

## Non-input elements

We can create dropdowns that aren't a type of `<input>` but functions in a similar way. The `<select>` element contains `<option>` elements which can be selected from a dropdown. Any number of these options can optionally be grouped using `<optgroup label="Group Label">`:
```html
<label for="cpu">Smartphone: </label>
<select name="phone">
    <option value="other">Generic brand / other</option>
    <optgroup label="Apple">
        <option value="iphone-8">iPhone 8</option>
        <option value="iphone-9">iPhone 9</option>
        <option value="iphone-10">iPhone 10</option>
    </optgroup>
    <optgroup label="Samsung">
        <option value="galaxy-s7">Galaxy S7</option>
        <option value="galaxy-s8">Galaxy S8</option>
        <option value="galaxy-s9">Galaxy S9</option>
    </optgroup>
</select>
```
<label for="cpu">Smartphone: </label>
<select name="phone">
    <option value="other">Generic brand / other</option>
    <optgroup label="Apple">
        <option value="iphone-8">iPhone 8</option>
        <option value="iphone-9">iPhone 9</option>
        <option value="iphone-10">iPhone 10</option>
    </optgroup>
    <optgroup label="Samsung">
        <option value="galaxy-s7">Galaxy S7</option>
        <option value="galaxy-s8">Galaxy S8</option>
        <option value="galaxy-s9">Galaxy S9</option>
    </optgroup>
</select>

## Organization with \<fieldset> and \<legend>

In larger forms, we can group related inputs together into a `<fieldset>`. We can give this a caption using `<legend>`. Such grouping is often recommended for radio inputs.
```html
<fieldset>
  <legend>Select a difficulty level: </legend>
  <label for="novice">Novice</label>
  <input type="radio" name="difficulty" id="novice">
  <label for="adapt">Adapt</label>
  <input type="radio" name="difficulty" id="adapt">
  <label for="expert">Expert</label>
  <input type="radio" name="difficulty" id="expert">
</fieldset>
```
<fieldset>
  <legend>Select a difficulty level: </legend>
  <label for="novice">Novice</label>
  <input type="radio" name="difficulty" id="novice">
  <label for="adapt">Adapt</label>
  <input type="radio" name="difficulty" id="adapt">
  <label for="expert">Expert</label>
  <input type="radio" name="difficulty" id="expert">
</fieldset>