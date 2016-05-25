# UtilityLibrary
Small JavaScript utility library for quick reference functions without jQuery

## Demo
https://jsfiddle.net/m4mf3qx1/1/

## Examples

### Extend
```javascript
// Add a function
$.fn.foo = function() {
	// Functionality here
}

// Use the function
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

### Events
```javascript

function bar() {
	alert('Event has happened');
}

// Add 
$('.block').on('eventType', bar);

// Remove
$('#foo').off('eventType', bar);
```