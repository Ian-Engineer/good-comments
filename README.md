# good-comments
## How to write good comments

https://codepen.io/voula12/pen/djrZGw

* Programs have two audiences, the compiler/interpreter and human readers
* The program you write should be readable by both
* Although comments are an initial expense, they can save time/money later
* It is important to write comments that are easy to maintain and don't waste time

## Table of contents

Use for instance <https://github.com/ekalinin/github-markdown-toc>:

> * [Title](#good-comments)
>   * [Synopsis](#how-to-write-good-comments)
>   * [Table of contents](#table-of-contents)
>   * [Commenting Basics](#commenting-basics)
>     * [Comment Types](#comment-types)
>     * [Comment Hotkeys](comment-hotkeys-(vscode))
>   * [Comment Usage](#comment-usage)
>     * [Screenshots](#screenshots)
>     * [Features](#features)
>   * [Code](#code)
>     * [Content](#content)
>     * [Requirements](#requirements)
>     * [Limitations](#limitations)
>     * [Build](#build)
>     * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)
>   * [About Nuxeo](#about-nuxeo)

## Commenting Basics

### Comment Types

*Single line comments:

    //single line comment

*Inline comments:

    var pi = 3.14 //set the variable pi equal to π

*Multiline comments: 

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

### Debugging

### JSDoc Tags

## Code

[![Build Status](https://qa.nuxeo.org/jenkins/buildStatus/icon?job=/nuxeo/addons_nuxeo-sample-project-master)](https://qa.nuxeo.org/jenkins/job/nuxeo/job/addons_nuxeo-sample-project-master/)

### Content

Description, sub-modules organization...

### Requirements

See [CORG/Compiling Nuxeo from sources](http://doc.nuxeo.com/x/xION)

Sample: <https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/README.md>

### Limitations

Sample: <https://github.com/nuxeo-archives/nuxeo-features/tree/master/nuxeo-elasticsearch>

### Build

    mvn clean install

Build options:

* ...

### Deploy (how to install build product)

Direct to MP package if any. Otherwise provide steps to deploy on Nuxeo Platform:

 > Copy the built artifacts into `$NUXEO_HOME/templates/custom/bundles/` and activate the `custom` template.

## Resources (Documentation and other links)

## Contributing / Reporting issues

Link to JIRA component (or project if there is no component for that project). Samples:

* [Link to component](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20component%20%3D%20Elasticsearch%20AND%20Status%20!%3D%20%22Resolved%22%20ORDER%20BY%20updated%20DESC%2C%20priority%20DESC%2C%20created%20ASC)
* [Link to project](https://jira.nuxeo.com/secure/CreateIssue!default.jspa?project=NXP)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## About Nuxeo

Nuxeo Platform is an open source Content Services platform, written in Java. Data can be stored in both SQL & NoSQL databases.

The development of the Nuxeo Platform is mostly done by Nuxeo employees with an open development model.

The source code, documentation, roadmap, issue tracker, testing, benchmarks are all public.

Typically, Nuxeo users build different types of information management solutions for [document management](https://www.nuxeo.com/solutions/document-management/), [case management](https://www.nuxeo.com/solutions/case-management/), and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/), use cases. It uses schema-flexible metadata & content models that allows content to be repurposed to fulfill future use cases.

More information is available at [www.nuxeo.com](https://www.nuxeo.com).