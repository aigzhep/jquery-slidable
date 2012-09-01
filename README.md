jQuery Slidable Plugin
======================

Slidable is an easy-to-use plugin that makes much too tall blocks pretty and handy.

Getting started
---------------

To use the plugin, include the [jQuery](http://jquery.com) library, the slidable source file and the stylesheet file inside the `<head>` tag of your HTML document:

```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="/path/to/slidable.js"></script>
<link rel="stylesheet" type="text/css" href="/path/to/slidable.css" />
```

Slidable expects a very basic HTML markup structure inside your HTML document:

```html
<div class="slidable">
	<div class="tall"></div>
</div>
```

To setup Slidable, add the following code inside the `<head>` tag of your HTML document:

```html
<script type="text/javascript">
	$(function() {
		$('.slidable').slidable({
			// Configuration goes here
		});
	});
</script>
```

Configuration
-------------

Slidable accepts a tiny list of options:

<table>
	<tr>
		<th>Property</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>minimized</td>
		<td>integer</td>
		<td>200</td>
		<td>Minimal height in pixels for tall blocks</td>
	</tr>
	<tr>
		<td>controls</td>
		<td>array</td>
		<td>["Show", "Hide"]</td>
		<td>Controller text in minimized and maximized state, respectively</td>
	</tr>
</table>