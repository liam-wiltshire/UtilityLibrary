'use strict';

(function(window, undefined){

	// Return an instance of the UtilityLibrary object
	var absoluteUtility = window.$ = function(selector) {
		if(!(this instanceof UtilityLibrary)) {
			return new UtilityLibrary(selector);
		}
	}

	var UtilityLibrary = function(selector) {
		// Selector implementation
		var nodes = document.querySelectorAll(selector);

		// Store each element to the UtilityLibrary object
		for (var i = 0; i < nodes.length; i++) {
			this[i] = nodes[i];
		}

		// Store reference of the length to the object
		this.length = nodes.length;

		// Return this to allow chaining
		return this;
	};

	// Expose the prototype object via AbsoluteUtility.fn so methods can easily be added
	absoluteUtility.fn = UtilityLibrary.prototype = {
		// API methods
		// Return this from each method to allow chaining
		
		// Method to add a class to a selected element
		addClass: function(classToAdd) {
			for (var i = 0; i < this.length; i++) {
				this[i].classList.add(classToAdd);
			}

			return this;
		},

		// Method to remove a class from a selected element
		removeClass: function(classToRemove) {
			for (var i = 0; i < this.length; i++) {
				this[i].classList.remove(classToRemove);
			}

			return this;
		},

		// Method to toggle a class on a selected element
		toggle: function(classToToggle) {
			for (var i = 0; i < this.length; i++) {
				this[i].classList.toggle(classToToggle);
			}

			return this;
		},

		// Events
		on: function(eventType, eventFunction) {
			for (var i = 0; i < this.length; i++) {
				this[i].addEventListener(eventType, eventFunction);
			}
		},

		off: function(eventType, eventListener) {
			for (var i = 0; i < this.length; i++) {
				this[i].removeEventListener(eventType, eventListener);
			}
		},
		insertTemplate: function(templateName){
          		this[0].innerHTML = $.sjaxGet('templates/'+templateName+'.html?1');
		},
		sjaxGet: function(url){
		        sjax = new XMLHttpRequest();
		        if (sjax){
		            sjax.open("GET",url,false);
		            sjax.send(null);
			    sjax.onload = function(){
				$i("updateResponses").innerHTML = dataTool.ticker.responses;
			    };
		            return sjax.responseText;
		        }else{
		            return false;
		        }
		    }		
		


	}; 

})(window);
