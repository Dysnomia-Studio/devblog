---
layout: post
title:  "Real and false issues of javascript"
tags: web quality javascript
categories: web javascript
pubDate: '2018-10-05'
updatedDate: '2023-12-24'
heroImage: '../../../assets/javascript-hero.png'
---

Hello!

In this article, we will talk about a sensitive subject in many developers' communities: "Why use or not use JavaScript ?".  

# Environments & versions

In that article, we will consider that the developer is using strict mode, the latest JavaScript versions - ES8/9/10/11/next depending on the support - few details are available on [Wikipedia](https://en.wikipedia.org/wiki/ECMAScript) or the [official specification](https://www.ecma-international.org/ecma-262/).  

We will also consider that the developer will follow good practices as a Style Guide - like [airbnb](https://github.com/airbnb/javascript), [google](https://google.github.io/styleguide/jsguide.html), etc - or any other standard.  

Now, that the context is defined, we can start to talk about the subject.  

# Type system

## Comparisons

We can find two kinds of issues because of the type system, the first one is the comparison system. In JavaScript, you can write:

```js
[] == 0; // true
"0" == 0; // true
[] == "0"; // false
```

There are many cases of comparisons where some are pretty "logical", but transitivity isn't satisfied. Fortunately, it's easy to avoid that problem:

```js
[] === 0; // false
"0" === 0; // false
[] === "0"; // false
```

The difference between == and === is that the first one checks equality between values (it can cast type to compare), and the second one checks the type and the value.

## typeof and instanceof

Those two keywords can have unexpected behavior, for example with **string** type:
```js
typeof "chaine de caractere"; // "string"
"chaine de caractere" instanceof String; // false
```

This is not really a bug, but a wrongly defined behavior, because you can write:
```js
(new String("chaine de caractere")) instanceof String; // true
```

We can note that the "primitive variable" string isn't considered as its object equivalent.  

Another example of typeof issue often used to mock the language is:
```js
typeof NaN; // "number"
```

Yes, you read right, NaN - Not a Number - is considered as a number when using the typeof operator. And that same category, null is considered of type object. But as for String, null is not instanceof Object, same for NaN and Number.

# False issues

While doing my research to write that article, I noticed some issues were listed that are not - by mistake or bad faith - real issues, I'll talk about some of them. 

## Order of numbers

```js
Math.min() < Math.max() // false
```

When I saw that example for the first time, I doubted the language and its conception. Then, I did some research about those two functions. Math.min() and Math.max() do not give minimum and maximum numbers - as we can think - but minimum and maximum of their *arguments*. The algorithm for Math.max() has as a default value Infinity and compares with each parameter.

```js
Math.min() // Infinity
Math.max() // -Infinity
```

The real issue of those functions, is, that they shouldn't accept when the developer isn't giving any argument.

## Immutability and variable hoisting

A very often reported problem in the past was about the variable hoisting and its immutability. This was fixed in ES6 when the standard added the keywords **let** and **const**. We can also talk about **Object.freeze()** that is going to apply even more immutability restrictions than **const**.

## Offside issues

Few issues can be considered as "offside" because not about the language itself. One of these problems is the floating numbers representation.

```js
0.1+0.2==0.3; // false, because equal to 0.30000000000000004 when using standard float representation
```

# Main solution to those issues

After reading those lists of negative and positive points, we can see that there are plenty of easy-to-make (and to-solve) problems. Fortunately, there are plenty of code checkers that we call "Linter" that can help you with that. There's for example: eslint, jshint, or jslint that you can add (or have already added) to your text editor or your IDE.

I could also talk (and I will probably do in a future article) about code quality tools - working with any language like Sonarqube or Codacy.

# JSFuck

The last subject of that article is about JSFuck ([http://www.jsfuck.com](http://www.jsfuck.com)). It's a fun syntax when you code JavaScript with only 6 different characters and you're able to write any JavaScript code.  

It's about being able to push the language to its limits using some (good or bad) behavior of the engine to be able to run the script.

If you wanna read more about how it works, you can go on their official website: [http://www.jsfuck.com](http://www.jsfuck.com)

# Conclusion

Don't hesitate to share that page if you have a debate about the advantages and drawbacks of JavaScript. I hope that you liked that small article, cya!

---

**Sources:**  
- [https://wiki.theory.org/index.php/YourLanguageSucks#JavaScript_sucks_because](https://wiki.theory.org/index.php/YourLanguageSucks#JavaScript_sucks_because)
- [https://charlieharvey.org.uk/page/javascript_the_weird_parts](https://charlieharvey.org.uk/page/javascript_the_weird_parts)
- [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/instanceof](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/instanceof)

**Article references:**  
- [https://en.wikipedia.org/wiki/ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
- [https://www.ecma-international.org/ecma-262/](https://www.ecma-international.org/ecma-262/)
- [https://github.com/airbnb/javascripthttps://google.github.io/styleguide/jsguide.html](https://github.com/airbnb/javascripthttps://google.github.io/styleguide/jsguide.html)