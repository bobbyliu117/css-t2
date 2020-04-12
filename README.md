# css-t2

## [DEMO](https://bobbyliu117.github.io/css-t2/)

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

## Note

### import font in css
```css
@import url('https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap');
```

### 页内跳
```html
<body id="home">
<a href="#home">
```

### JQuery
CDN
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```
```js
$('header a, .btn').on('click', function(e){
  if(this.hash !== '') {
    event.preventDefault();
    // hash is the id attribute
    const hash = this.hash;
    // html works w/o body
    $('html, body').animate({
      // scoll至hash.y - 100的位置(100大概是sticky navbar的高)
      scrollTop: $(hash).offset().top -100
    }, 600)
  }
});
```

### DOM Selector
```js
this.document.getElementBy..('class/id/tag/etc')
this.document.querySelector('class/id/tag/etc')
```

### Get current window location
```js
window.scrollY
```

### Modify DOM CSS
```js
const dom = document.querySelector('header');
// style is css
dom.style.opacity = window.scrollY>100?0.8:1;
```