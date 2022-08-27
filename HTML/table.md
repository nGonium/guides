*Quick access, emmet table: `table>(colgroup>col*COLS)(tr>th{}*COLS)(tr>td{}*COLS)*ROWS`*

Tables provide a way to display tabular data, such as scientific measurements, a list of user accounts with permissions, or a calender. They should not be used for layouts, although some older sites still do this.  

Tables consist of an enclosing `<table>` element, inside of which are rows, `<tr>` elements. Each row contains a number of cells, table data `<td>`. The first row often uses `<th>` instead of `<td>` to denote headers, which can then be styled differently. At the start of the table, before the first `<tr>` we can include a `<colgroup>` with `<col>` elements for each column. Each column can then be styled by styling the `<col>`, although it only allows us to set the `background`, `border`, `width` and `visibility` properties. A table might then look like this:
```html
<table>
        <colgroup>
            <col>
            <col>
        </colgroup>
        <tr>
            <th>First column</th>
            <th>Second column</th>
        </tr>
        <tr>
            <td>Row 1, val 1</td>
            <td>Row 1, val 2</td>
        </tr>
        <tr>
            <td>Row 2, val 1</td>
            <td>Row 2, val 2</td>
        </tr>
</table>
```
We can create tables quickly using the emmet snippet at the top of this page, replacing `ROWS` and `COLS` as desired. We can fill default text content into `{}`, for example `{Header $}` would number each header as `Header 1`, `Header 2` etc. 