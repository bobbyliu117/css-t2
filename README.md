# css-t2

## Flexbox

### Parent (flex container)
default direction (main axis) -> row

`justify-content` -> align main axis

`align-item` -> need to have height(or width depending on direction) to align

`align-content` -> align when extra space in cross axis (when wrap more than 2 lines/colomns)

![space-between](https://i.imgur.com/yV7GD2F.png)
`align-content: space-between`

`flex-wrap` -> if more than 12, will not show scroll, but wrap to next line
```js
display: flex;
```

### Child (flex item)

`flex-basis` -> width for row, height for column

`align-self` -> align cross axis

`order` -> smaller comes first