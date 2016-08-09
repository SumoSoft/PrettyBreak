# PrettyBreak
A jQuery plugin for smart line breaking in HTML titles

## The problem

```
<h1>
    This is your title. You want this text to break nicely in the middle.
</h1>
```

In Responsive Design, it's not unusual to deal with the problem of how titles break when the screen size shrinks. For instance, the above title might look, on smaller screens, like this:

<h4>
This is your title. You want this text to break nicely in the 
<br>
middle.
</h4>

By using PrettyBreak, you ensure that whenever a title is longer than its container, the text will breake nicely in the middle, resulting in:

<h4>
This is your title. You want this 
<br>
text to break nicely in the middle.
</h4>

## Usage
```
$("h1").prettyBreak();
```

