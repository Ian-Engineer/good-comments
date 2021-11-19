# good-comments
## How to write good comments

* Programs have two audiences, the compiler/interpreter and human readers
* The program you write should be readable by both
* Although comments are an initial expense, they can save time/money later
* It is important to write comments that are easy to maintain and don't waste time

## Table of contents

> * [Title](#good-comments)
>   * [Synopsis](#how-to-write-good-comments)
>   * [Table of contents](#table-of-contents)
>   * [Comment Basics](#comment-basics)
>     * [Comment Types](#comment-types)
>     * [Comment Hotkeys](#comment-hotkeys-vscode)
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
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)

## Comment Basics

### Comment Types

*Single line comments:
Written above the code they are designated to explain. Indent them at the same level as the code.

    //conditional statement doing a certain thing
    if (true) {

    }

*Inline comments:
used for quick annotation on small, specific snippets of content. Since the comment should only relate to the exact line it's written on.

    const pi = 3.14 //set the constant pi equal to π

*Multiline comments: 
Written above the code they are designated to explain. Indent them at the same level as the code.

    /*
    Normal multiline comment
    Normal multiline comment
    */

    /**
     * Standard multiline comment
     * Standard multiline comment
     */



### Comment Hotkeys (VSCode)

* Toggle line comment (**ctrl + /**) or (**command + /**)
* Toggle block comment (**shift+alt+A**)
* Typing **/\*\*** will autocomplete multiline comment setup



## Comment Usage

### Preface

Perhaps the most typical use for comments: explaining what the code does and why.

### Debugging

When faced with a bug, you can comment out particular lines of code in order to locate where your bug is.

### JSDoc Tags

This is beyond the scope of this presentation. But in summary, using @ and a tag allows JSDoc to scan your code and generate an html documenation website for you. (https://jsdoc.app/)



## General Rules

The following rules are general guidelines to help achieve a code base that is easily readable by a human, easy to maintain, and not a huge expenese.

### Rule 1:
#### Comment often.
Bare minimum is including a comment everytime you make a new block of code. Explain what you are doing and why.

### Rule 2: 
#### Include linkes to external references where they will be helpful.
If you use a link as a reference while coding, include it as a comment. That way, if someone else is reviewing your code later, or you are revisiting it, you know why you wrote this code in a certain way.

### Rule 3: 
#### Comments should dispel confusion, not cause it.
Make your comments as clear and concise as possible. Don't use language that people may not understand.

### Rule 4:
#### Good comments don't excuse bad code.
Just name your variables.

### Rule 5:
#### Comment what portions of code can be customized for client preference.
Make note of what variables or functions can be customized and how. Clients or supervisors will likely want to see other variations, and making these customizations easy to find will help you down the road.

### Rule 6:
#### Comments should not duplicate code.
Don't do this:

    i = i + 1 //add 1 to i

Repeating yourself in comments creates more work for yourself later. If you have to go back a refactor code, you will also have to refactor your comments. Also if it is VERY clear what is happening in your code, there is no need to make a comment, see the example above.

### Rule 7:
#### Add comments when fixing bugs.
If you encounter a bug in your code, leave a comment indicating what it is. Once you fix the bug, add a note stating how you fixed it. That way, in review, someone will know why the code is the way that it is, and whether or not it can be removed.

### Rule 8:
#### Provide links to the original source of copied code.
Everyone copies code from stack overflow and other resources. Make sure to keep a link to where you got your code. It provides a lot more context when you revisit the code, or its being reviewed. Someone can easily find what the problem was initially that you looked up, as well as if there are other solutions available.

### Rule 9:
#### If you can't write a clear comment, there may be a problem with your code.
DO NOT COPY AND PASTE CODE THAT YOU DON'T UNDERSTAND. If you can't explain the code, how do you plan on debugging it when it breaks? 

### Rule 10:
#### Use comments to mark incomplete implemenations.
Make use of your own tags to help keep your code, and yourself organized. You can use a TODO tag to easily list items that need to be implemented. When coming back to work on this code, you can search "TODO" and pick up right where you left off. Make sure everyone on your team is on board with what tags are being used. You can use additional tags such as, AUTHOR, DATECREATED, etc., track any information you want to track.

## Resources (Documentation and other links)

* https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
* https://jsdoc.app/