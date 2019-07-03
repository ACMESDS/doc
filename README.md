<h1 >test1</h1><a href='/junk.txt' >my link</a>

<h1 >test2</h1><iframe src='/plot.view?name=test2&src=regress&x=Save_ols$.cls[0].weights&y=Save_ols$.cls[0].weights&w=600&h=400' width='600' height='400' ></iframe>

<h1 >fetch test</h1>As of Wed Jul 03 2019 14:49:56 GMT-0400 (EDT) 

<h1 >test urls</h1>urls: {"loopback":"https://localhost:8443/regress.js?endservice=https://localhost:8443/regress.users","license":"https://localhost:8443/regress.js?endservice=","product":"https://localhost:8443/regress","status":"https://localhost:8443/regress.status","md":"https://localhost:8443/regress.md","suitors":"https://localhost:8443/regress.suitors","Totem":"https://localhost:8443","totem":"http://localhost:8080","run":"https://localhost:8443/regress.run","tou":"https://localhost:8443/regress.tou","pub":"https://localhost:8443/regress.pub","repo":"undefinedregress","repofiles":"undefinedregress/raw/master","relinfo":"http://localhost:8080/releases.html?product=regress.js"}

a link: <a href='test test test' >TEST</a>

a  code block test:<pre ><code >	test1
	test2
</code></pre>followed by another:<pre ><code >	wow
	way cool !!
	[should be ignored](/nogo.com)
</code></pre>now: Wed Jul 03 2019 14:49:56 GMT-0400 (EDT)

by: undefined

<h1 >spoofed input</h1>
<script>
	String.prototype.tag = function tag(el,at) {
	/**
	@member String
	@method tag

	Tag url (el = ? || &) or html (el = html tag) with specified attributes.

	@param {String} el tag element = ? || & || html tag
	@param {String} at tag attributes = {key: val, ...}
	@return {String} tagged results
	*/

		if (!at) { at = {href: el}; el = "a"; }
		
		if ( el == "?" || el == "&" ) {  // tag a url
			var rtn = this;

			Each(at, (key,val) => {
				rtn += el + key + "=" + ( (typeof val == "string") ? val : JSON.stringify(val) ); 
				el = "&";
			});

			return rtn;	
		}

		else {  // tag html
			var rtn = "<"+el+" ";

			Each( at, (key,val) => rtn += key + "='" + val + "' " );

			switch (el) {
				case "embed":
				case "img":
				case "link":
				case "input":
					return rtn+">" + this;
				default:
					return rtn+">" + this + "</"+el+">";
			}
		}
	}
	function submitForm() {
		var parms = {};
		["endservice"].forEach( (key) => parms[key] = document.getElementById("parms."+key).value );

		window.open( "/regress".tag("?", parms) );
	}
</script>
<form onsubmit="submitForm()">
	endservice: <input id="parms.endservice" type="text" value="https://myserivce/regress.js" autofocus >
	<button id="parms.submit" type="submit" value="submit">submit</button>
</form> 
<script>
	String.prototype.tag = function tag(el,at) {
	/**
	@member String
	@method tag

	Tag url (el = ? || &) or html (el = html tag) with specified attributes.

	@param {String} el tag element = ? || & || html tag
	@param {String} at tag attributes = {key: val, ...}
	@return {String} tagged results
	*/

		if (!at) { at = {href: el}; el = "a"; }
		
		if ( el == "?" || el == "&" ) {  // tag a url
			var rtn = this;

			Each(at, (key,val) => {
				rtn += el + key + "=" + ( (typeof val == "string") ? val : JSON.stringify(val) ); 
				el = "&";
			});

			return rtn;	
		}

		else {  // tag html
			var rtn = "<"+el+" ";

			Each( at, (key,val) => rtn += key + "='" + val + "' " );

			switch (el) {
				case "embed":
				case "img":
				case "link":
				case "input":
					return rtn+">" + this;
				default:
					return rtn+">" + this + "</"+el+">";
			}
		}
	}
	function submitForm() {
		var parms = {};
		["a","b"].forEach( (key) => parms[key] = document.getElementById("parms."+key).value );

		window.open( "/regress".tag("?", parms) );
	}
</script>
<form onsubmit="submitForm()">
	a: <input id="parms.a" type="text" value="test" autofocus >b: <input id="parms.b" type="text" value="yay" autofocus >
	<button id="parms.submit" type="submit" value="submit">submit</button>
</form>

email test: <a href='mailto:brian.d.james@comcast.net?subject=regress request&body=some test' >click here</a>

query a,b,c: $ {a}, $ {b}, $ {c}