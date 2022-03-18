### JavaScript code to switch stylesheets if the user prefers dark mode

Imagine a scenario where you have two stylesheets. One for light mode, and one for dark mode. This snippet automatically switches to the second one if the user's browser is configured for dark mode:

```js
<link rel="stylesheet" id="stylesheet" href="/style.css">
<script>
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("stylesheet").setAttribute("href", "/style2.css");  
    }
</script>
```

This is what I use to enable dark mode on my blog.

<br> 

-----

<small>`2022-03-17`</small>


