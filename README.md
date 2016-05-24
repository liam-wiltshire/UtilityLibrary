# UtilityLibrary
Small JavaScript utility library for quick reference functions without jQuery

## Demo
https://jsfiddle.net/m4mf3qx1/1/

## Examples

### Extend
```javascript
$.fn.foo = function() {
	// Function here
}
```

#### Usage
```javascript
$('.selector').foo();
```

### Select
```javascript
var elementByClass = $('.selector');
var elementById = $('#selector');
```

### Add class
```javascript
$('.selector').addClass('class');
```

### Remove class
```javascript
$('.selector').removeClass('class');
```

### Toggle class
```javascript
$('.selector').toggle('class');
```

### Chaining
```javascript
$('.selector').addClass('class').removeClass('class');
```