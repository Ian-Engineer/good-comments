# good-comments
## How to write good comments

https://codepen.io/voula12/pen/djrZGw

* Programs have two audiences, the compiler/interpreter and human readers
* The program you write should be readable by both
* Although comments are an initial expense, they can save time/money later
* It is important to write comments that are easy to maintain and don't waste time

## Table of contents

> * [Title](#good-comments)
>   * [Synopsis](#how-to-write-good-comments)
>   * [Table of contents](#table-of-contents)
>   * [Commenting Basics](#commenting-basics)
>     * [Comment Types](#comment-types)
>     * [Comment Hotkeys](comment-hotkeys)
>   * [Comment Usage](#comment-usage)
>     * [Preface](#preface)
>     * [Debugging](#debugging)
>     * [JSDoc Tags](#jsdoc-tags)
>   * [General Rules](#general-rules)
>     * [Rule 1](#rule-1)
>     * [Rule 2](#rule-2)
>     * [Rule 3](#rule-3)
>     * [Rule 4](#rule-4)
>     * [Rule 5](#rule-5)
>     * [Rule 6](#rule-6)
>     * [Rule 7](#rule-7)
>     * [Rule 8](#rule-8)
>     * [Rule 9](#rule-9)
>     * [Rule 10](#rule-10)
>     * [Rule 11](#rule-11)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)
>   * [About Nuxeo](#about-nuxeo)

## Commenting Basics

### Comment Types

*Single line comments:

    //single line comment

*Inline comments:

    const pi = 3.14 //set the constant pi equal to π

*Multiline comments: 

    /*
    Normal multiline comment
    Normal multiline comment
    */

    /**
     * Standard multiline comment
     * Standard multiline comment
     */



### Comment Hotkeys

* Toggle line comment (**ctrl + /**) or (**command + /**)
* Toggle block comment (**shift+alt+A**)
* Typing **/\*\*** will autocomplete multiline comment setup



## Comment Usage

### Preface

Perhaps the most typical use for comments: explaining what the code does and why.

### Debugging

When faced with a bug, you can commenting out particular lines of code in order to locate where your bug is.

### JSDoc Tags

This is beyond the scope of this presentation. But in summary, using @ and a tag allows JSDoc to scan your code and generate a html documenation website for you. (https://jsdoc.app/)



## General Rules

The following rules are general guidelines to help achieve a code base that is easily readable by a human, easy to maintain, and not a huge expenese.

### Rule 1: 
#### Comments should not duplicate code.

### Rule 2: 
#### Good comments don't excuse bad code.

### Rule 3:
#### If you can't write a clear comment, there may be a problem with your code.

### Rule 4:
#### Comments should dispel confustion, not cause it.

### Rule 5:
#### Explain code that some may consider redundant.

### Rule 6:
#### Provide links to the original source of copied code.

### Rule 7:
#### Include other helpful links.

### Rule 8:
#### Add comments when fixing bugs.

### Rule 9:
#### Use comments to mark incomplete implemenations

### Rule 10:
#### Comment what portions of code can be customized for client preference.

### Rule 11:
#### Comment often.


## Resources (Documentation and other links)

* https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
* https://jsdoc.app/