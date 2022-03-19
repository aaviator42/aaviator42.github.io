### &lt;yes-script&gt;


I like to write my webapps in such a manner that users don't *need* JavaScript to use them. Occasionally, however, there's a feature I want to add (such as a 'copy to clipboard' button) that only works with JavaScript.

To make the webapp neater, I only want such elements to be visible if JS is enabled. That's where `yes-script` comes in.

There's two ways to implement this:
 * Use a custom HTML tag (`<yes-script>`). This is allowed as per the [custom elements](https://www.w3.org/TR/custom-elements/) spec, and is supported on [basically every](https://caniuse.com/custom-elementsv1) modern browser.
 * If you don't want to use a custom tag, then you can use a class (`class="yes-script"`) to enable the same functionality.

The code:

```html
<head>
	<!-- include this in all your files where you want to use yes-script! -->
	<noscript>
	  <style>
		yes-script {
			display: none !important;
		}
	  </style>
	</noscript>
</head>

<body>
	<!-- the following will only show if JS is enabled -->
	<yes-script>
	JavaScript is enabled!
	</yes-script>

	<!-- the following will only show if JS is disabled -->
	<noscript>
	JavaScript is disabled!
	</noscript>
</body>
```
This essentially hides everything within `<yes-script>` tags if JS is disabled.

Here's the version that uses classes:

```html
<head>
	<!-- include this in all your files where you want to use yes-script! -->
	<noscript>
	  <style>
		.yes-script {
			display: none !important;
		}
	  </style>
	</noscript>
</head>

<body>
	<!-- the following will only show if JS is enabled -->
	<span class="yes-script">
	JavaScript is enabled!
	</span>

	<!-- the following will only show if JS is disabled -->
	<noscript>
	JavaScript is disabled!
	</noscript>
</body>
```

You can download the code from the Github repo [here](https://github.com/aaviator42/yes-script).

<br>

-------
`2022-03-18`
