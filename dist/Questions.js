"use strict";
//for quiz data: https://www.includehelp.com/mcq/web-technologies-mcqs.asp
const htmlQ = [
    {
        question: "HTML stands for_______.",
        options: {
            A: "Hyperactive Text Markup Language",
            B: "Hyper Text Markup Language",
            C: "Hyper Text Machine Language",
            D: "None of these",
        },
        answer: "B",
        explanation: "HTML stands for 'Hyper Text Markup Language'.",
    },
    {
        question: "Which is the correct syntax to include comment in an HTML document?",
        options: {
            A: "//",
            B: "/* Comment */",
            C: "// Comment //",
            D: "<   !-- Comment -- >",
        },
        answer: "D",
        explanation: "You can add comments to your HTML source by using the syntax: <  !-- Write your comments here -->",
    },
    {
        question: "Can we hide content using the comment?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "Yes, comments can be used to hide content. Syntax example: < !-- < p>Hello, world! < /p> -->",
    },
    {
        question: "Can we hide inline content using the comment?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "Yes, comments can be used to hide inline content. Syntax example: < p>Hello, world! < !-- This is some text --> How are you?< /p>",
    },
    {
        question: "Which element/tag defines a paragraph?",
        options: {
            A: "< p>",
            B: "< pre>",
            C: "< panel>",
            D: "None of the above",
        },
        answer: "A",
        explanation: "The < p> tag defines a paragraph.",
    },
    {
        question: "Which tag/element defines the HTML document's body?",
        options: {
            A: "< HTML>",
            B: "< HTMLbody>",
            C: "< bdy>",
            D: "< body>",
        },
        answer: "D",
        explanation: "The < body> element defines the HTML document's body.",
    },
    {
        question: "Which tag contains the meta information about the HTML page?",
        options: {
            A: "< html>",
            B: "< title>",
            C: "< head>",
            D: "< body>",
        },
        answer: "C",
        explanation: "The < head> tag contains the meta information about the HTML page.",
    },
    {
        question: "Which tag is the root element of an HTML page?",
        options: {
            A: "< html>",
            B: "< title>",
            C: "< head>",
            D: "< body>",
        },
        answer: "A",
        explanation: "The < html> tag is the root element of an HTML page.",
    },
    {
        question: "Who invented HTML?",
        options: {
            A: "Dave Raggett",
            B: "Tim Berners-Lee",
            C: "Denis Ritchie",
            D: "All of the above",
        },
        answer: "B",
        explanation: "Tim Berners-Lee invented HTML in 1991.",
    },
    {
        question: "HTML tags with no content are called _____.",
        options: {
            A: "Special tags",
            B: "Advanced tags",
            C: "Empty tags",
            D: "Other tags",
        },
        answer: "C",
        explanation: "HTML tags with no content are called empty tags. For example, the < br> tag, < hr> tag.",
    },
    {
        question: "Nested HTML Elements are allowed in HTML?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "Yes, Nested HTML Elements (< p>< b>< u>Some text< /u>< /b>< /p>) are allowed in HTML.",
    },
    {
        question: "Is HTML a case sensitive?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "B",
        explanation: "No, HTML is Not Case Sensitive.",
    },
    {
        question: "HTML headings are defined with the _____ tags.",
        options: {
            A: "< head1> to < head6>",
            B: "< p1> to < p6>",
            C: "< h1> to < h6>",
            D: "< h1> to < h3>",
        },
        answer: "C",
        explanation: "HTML headings are defined with the < h1> to < h6> tags.",
    },
    {
        question: "Which tag is used to display a horizontal rule (horizontal line)?",
        options: {
            A: "< br>",
            B: "< hr>",
            C: "< hr>...< /hr>",
            D: "< line>",
        },
        answer: "B",
        explanation: "The < hr> tag is used to display a horizontal rule.",
    },
    {
        question: "What is the correct syntax of < hr> tag?",
        options: {
            A: "< hr>",
            B: "< hr />",
            C: "< hr>< /hr>",
            D: "All of the above",
        },
        answer: "A",
        explanation: "Both < hr> and < hr /> can be used to display a horizontal line.",
    },
    {
        question: "Which tag is used to define a line break?",
        options: {
            A: "< \\n>",
            B: "< lr>",
            C: "< br>",
            D: "< br>...< /br>",
        },
        answer: "C",
        explanation: "The < br> tag is used to define a line break.",
    },
    {
        question: "What is the correct syntax of < br> tag?",
        options: {
            A: "< br>",
            B: "< br />",
            C: "< br>< /br>",
            D: "All of the above",
        },
        answer: "A",
        explanation: "Both < br> and < br /> can be used to display a line break.",
    },
    {
        question: "Which tag is used to define preformatted text?",
        options: {
            A: "< pf>",
            B: "< p>",
            C: "< pre>",
            D: "< code>",
        },
        answer: "C",
        explanation: "The < pre> tag is used to define preformatted text.",
    },
    {
        question: "Which HTML attribute is used to define styles of an element?",
        options: {
            A: "< style>",
            B: "< css>",
            C: "style",
            D: "css",
        },
        answer: "C",
        explanation: "The style attribute is used to define the styles of an element.",
    },
    {
        question: "Which is the correct HTML statement to define the red color of the paragraph text?",
        options: {
            A: '< p style="color: #ff0000;">',
            B: '< p style="color: red;">',
            C: "Both A. and B.",
            D: "None of the above",
        },
        answer: "C",
        explanation: 'The correct HTML statement to define red paragraph color is: < p style="color: #ff0000;"> or < p style="color: red;">.',
    },
    {
        question: "Which HTML tag is used to define bold text, without any extra importance?",
        options: {
            A: "< strong>",
            B: "< bold>",
            C: "< bolder>",
            D: "< b>",
        },
        answer: "D",
        explanation: "The HTML < b> tag is used to define bold text, without any extra importance.",
    },
    {
        question: "Which HTML tag is used to define text with strong importance?",
        options: {
            A: "< strong>",
            B: "< bold>",
            C: "< bolder>",
            D: "< b>",
        },
        answer: "A",
        explanation: "The HTML tag < strong> is used to define text with strong importance.",
    },
    {
        question: "Which HTML tag is used to define italic text?",
        options: {
            A: "< italic>",
            B: "< em>",
            C: "< i>",
            D: "< it>",
        },
        answer: "C",
        explanation: "The HTML tag < i> is used to define italic text.",
    },
    {
        question: "Which HTML tag is used to define emphasized text?",
        options: {
            A: "< italic>",
            B: "< em>",
            C: "< i>",
            D: "< it>",
        },
        answer: "B",
        explanation: "The HTML tag < em> is used to define emphasized text.",
    },
    {
        question: "Which HTML tag is used to define smaller text?",
        options: {
            A: "< normal>",
            B: "< span>",
            C: "< smaller>",
            D: "< small>",
        },
        answer: "D",
        explanation: "The HTML tag < small> is used to define smaller text.",
    },
    {
        question: "Which HTML tag is used to define marked or highlighted text?",
        options: {
            A: "< mark>",
            B: "< highlight>",
            C: "< m>",
            D: "< highlighted>",
        },
        answer: "A",
        explanation: "The HTML tag < mark> is used to define marked or highlighted text.",
    },
    {
        question: "Which HTML tag is used to define strike a line through deleted text?",
        options: {
            A: "< delete>",
            B: "< del>",
            C: "< deleted>",
            D: "< through>",
        },
        answer: "B",
        explanation: "The HTML tag < del> is used to define strike a line through deleted text.",
    },
    {
        question: "Which HTML tag is used to define underline inserted text?",
        options: {
            A: "< underline>",
            B: "< text-decoration>",
            C: "< u>",
            D: "Both C and D",
        },
        answer: "D",
        explanation: "The HTML tags < ins> and < u> are used to define underline inserted text.",
    },
    {
        question: "Which HTML tag is used to define subscript text?",
        options: {
            A: "< sub>",
            B: "< subscript>",
            C: "< s>",
            D: "< subscripted>",
        },
        answer: "A",
        explanation: "The HTML < sub> tag is used to define subscript text.",
    },
    {
        question: "Which HTML tag is used to define superscript text?",
        options: {
            A: "< sup>",
            B: "< superscript >",
            C: "< s>",
            D: "< superscripted>",
        },
        answer: "A",
        explanation: "The HTML < sup> tag is used to define superscript text.",
    },
    {
        question: "Which is the correct HTML statement to display H<sub>2</sub>O in a paragraph?",
        options: {
            A: "< p>H< sup>2< /sup>O< /p>",
            B: "< p>H< ins>2< /ins>O< /p>",
            C: "< p>H< below>2< /below>O< /p>",
            D: "< p>H< sub>2< /sub>O< /p>",
        },
        answer: "D",
        explanation: "The correct HTML statement to display H2O in a paragraph is: < p>H< sub>2< /sub>O< /p>",
    },
    {
        question: "Which is the correct HTML statement to display HelloWorld in a paragraph?",
        options: {
            A: "< p>Hello< sup>World< /sup>< /p>",
            B: "< p>Hello< top>World< /top>< /p>",
            C: "< p>Hello< sub>World< /sub>< /p>",
            D: "< p>Hello< above>World< /above>< /p>",
        },
        answer: "A",
        explanation: "The correct HTML statement to display HelloWorld in a paragraph is: < p>Hello< sup>World< /sup>< /p>",
    },
    {
        question: "Which is the correct HTML statement to display HelloHi! in a paragraph?",
        options: {
            A: "< p>< del>Hello< /del>< ins>Hi!< /ins>< /p>",
            B: "< p>< strike>Hello< /strike>< ins>Hi!< /ins>< /p>",
            C: "< p>< cut>Hello< /cut>< ins>Hi!< /ins>< /p>",
            D: "All of the above",
        },
        answer: "A",
        explanation: "The correct HTML statement to display HelloHi! in a paragraph is/are: < p>< del>Hello< /del>< ins>Hi!< /ins>< /p> < p>< strike>Hello< /strike>< ins>Hi!< /ins>< /p>",
    },
    {
        question: "Which is the correct HTML statement to display Hello IncludeHelp in a paragraph?",
        options: {
            A: "< p>Hello < mark>IncludeHelp< /mark>< /p>",
            B: "< p>Hello< mark>IncludeHelp< /mark>< /p>",
            C: "< p>Hello < span>IncludeHelp< /span>< /p>",
            D: "< p>Hello< span>IncludeHelp< /span>< /p>",
        },
        answer: "B",
        explanation: "The correct HTML statement to display Hello IncludeHelp in a paragraph is: < p>Hello< mark>IncludeHelp< /mark>< /p>",
    },
    {
        question: "Which HTML tag is used to define a short quotation?",
        options: {
            A: "< quotation>",
            B: "< quote>",
            C: "< qut>",
            D: "< q>",
        },
        answer: "D",
        explanation: "The HTML tag < q> is used to define a short quotation.",
    },
    {
        question: "Which HTML tag is used to define an abbreviation or an acronym?",
        options: {
            A: "< abbreviation>",
            B: "< abbr>",
            C: "< acronym>",
            D: "< acr>",
        },
        answer: "B",
        explanation: "The HTML tag < abbr> is used to define an abbreviation or an acronym.",
    },
    {
        question: "What is the correct HTML syntax of < abbr> tag?",
        options: {
            A: '< abbr title="abbreviation or acronym">Text< /abbr>',
            B: '< abbr description="abbreviation or acronym">Text< /abbr>',
            C: '< abbr abbreviation="abbreviation or acronym">Text< /abbr>',
            D: '< abbr acronym="abbreviation or acronym">Text< /abbr>',
        },
        answer: "A",
        explanation: 'The correct HTML syntax of < abbr> tag is: < abbr title="abbreviation or acronym">Text< /abbr>',
    },
    {
        question: "What HTML tag is used to define the contact information for the author/owner of a document or an article?",
        options: {
            A: "< contact>",
            B: "< authorinfo>",
            C: "< address>",
            D: "< addr>",
        },
        answer: "C",
        explanation: "The HTML tag < address> is used to define the contact information for the author/owner of a document or an article.",
    },
    {
        question: "Which tag is used to override the current text direction?",
        options: {
            A: "< bdi>",
            B: "< bdo>",
            C: "< bdr>",
            D: "None of the above",
        },
        answer: "B",
        explanation: "The HTML tag < bdo> is used to override the current text direction.",
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        options: {
            A: "< a>",
            B: "< h>",
            C: "< hyperlink>",
            D: "Both A. and B.",
        },
        answer: "A",
        explanation: "The HTML < a> tag defines a hyperlink.",
    },
    {
        question: "Which is the correct syntax of < a> tag?",
        options: {
            A: '< a src="url">link text< /a>',
            B: '< a link="url">link text< /a>',
            C: '< a href="url">link text< /a>',
            D: '< a srclink="url">link text< /a>',
        },
        answer: "C",
        explanation: 'The correct syntax to create a hyperlink is: < a href="url">link text< /a>',
    },
    {
        question: "Why 'href' attribute is used with < a> tag?",
        options: {
            A: "To define title text",
            B: "To define reference of a document",
            C: "To define destination URL",
            D: "All of the above",
        },
        answer: "C",
        explanation: "The href attribute of the < a> tag is most important, which indicates the link's destination.",
    },
    {
        question: "Which attribute specifies where to open the linked document?",
        options: {
            A: "href",
            B: "link",
            C: "src",
            D: "target",
        },
        answer: "D",
        explanation: "The “target” attribute specifies where to open the linked document.",
    },
    {
        question: "Which tag is used to embed an image in an HTML document?",
        options: {
            A: "< img>",
            B: "< pic>",
            C: "< image>",
            D: "< picture>",
        },
        answer: "A",
        explanation: "The HTML tag < img> is used to embed an image in an HTML document.",
    },
    {
        question: "What is the correct syntax of < img> tag?",
        options: {
            A: '< img src="url">',
            B: '< img src="url" alt="alternatetext">',
            C: '< img src="url" alt="alternatetext" />',
            D: "All of the above",
        },
        answer: "D",
        explanation: 'The correct syntax of < img> tag is/are: < img src="url" alt="alternatetext" /> We can also use: < img src="url"> or < img src="url" alt="alternatetext">',
    },
    {
        question: "Which attribute specifies the path to the image?",
        options: {
            A: "href",
            B: "link",
            C: "src",
            D: "All of the above",
        },
        answer: "C",
        explanation: "The src attribute specifies the path to the image.",
    },
    {
        question: "Which attribute specifies an alternate text for the image?",
        options: {
            A: "alt",
            B: "alternate",
            C: "alttext",
            D: "All of the above",
        },
        answer: "A",
        explanation: "The alternate attribute specifies an alternate text for the image.",
    },
    {
        question: "Which HTML tag is used to define a table?",
        options: {
            A: "< table>",
            B: "< tables>",
            C: "< tr>",
            D: "< th>",
        },
        answer: "A",
        explanation: "The HTML tag < table> is used to define a table.",
    },
    {
        question: "Each table cell is defined by a ____ tag.",
        options: {
            A: "< cell> ... < /cell>",
            B: "< tr> ... < /tr>",
            C: "< th> ... < /th>",
            D: "< td> ... < /td>",
        },
        answer: "D",
        explanation: "Each table cell is defined by a < td> and a < /td> tag.",
    },
    {
        question: "Each table row is defined by a ____ tag.",
        options: {
            A: "< cell> ... < /cell>",
            B: "< tr> ... < /tr>",
            C: "< th> ... < /th>",
            D: "< td> ... < /td>",
        },
        answer: "B",
        explanation: "Each table row is defined by a < tr> and a < /tr> tag.",
    },
    {
        question: "Each table header is defined by a ____ tag.",
        options: {
            A: "< cell> ... < /cell>",
            B: "< tr> ... < /tr>",
            C: "< th> ... < /th>",
            D: "< td> ... < /td>",
        },
        answer: "C",
        explanation: "Each table header is defined by a < th> and a < /th> tag.",
    },
    {
        question: "Which tag is used to define list items?",
        options: {
            A: "< ol> ... < /ol>",
            B: "< ul> ... < /ul>",
            C: "< list> ... < /list>",
            D: "< li> ... < /li>",
        },
        answer: "D",
        explanation: "The HTML tag < li> ... < /li> is used to define list items.",
    },
    {
        question: "Which tag is used to define description lists?",
        options: {
            A: "< dl> ... < /dl>",
            B: "< dd> ... < /dd>",
            C: "< dlist> ... < /dlist>",
            D: "< check> ... < /check>",
        },
        answer: "A",
        explanation: "The HTML tag < dl> ... < /dl> is used to define description lists.",
    },
    {
        question: "Which tag is a block-level element?",
        options: {
            A: "< block> ... < /block>",
            B: "< b> ... < /b>",
            C: "< div> ... < /div>",
            D: "< divx> ... < /divx>",
        },
        answer: "C",
        explanation: "The HTML tag < div> ... < /div> is a block-level element.",
    },
    {
        question: "Which attribute is often used to point to a class name in a style sheet?",
        options: {
            A: "style",
            B: "css",
            C: "src",
            D: "class",
        },
        answer: "D",
        explanation: "The class attribute is often used to point to a class name in a style sheet.",
    },
    {
        question: "Which attribute is used to specify a unique id for an HTML element?",
        options: {
            A: "style",
            B: "css",
            C: "id",
            D: "class",
        },
        answer: "C",
        explanation: "The HTML id attribute is used to specify a unique id for an HTML element.",
    },
    {
        question: "Can we use class name with multiple HTML elements?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "Yes, we can use class name with multiple HTML elements.",
    },
    {
        question: "Can we use id attribute with multiple HTML elements?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "B",
        explanation: "No, we cannot use id attribute with multiple HTML elements.",
    },
    {
        question: "Which tag specifies an inline frame?",
        options: {
            A: "< frame>",
            B: "< iframe>",
            C: "< inlineframe>",
            D: "< frames>",
        },
        answer: "B",
        explanation: "The HTML tag < iframe> specifies an inline frame.",
    },
    {
        question: "What is the correct syntax for < iframe> tag?",
        options: {
            A: '< iframe href="url" title="description">< /iframe>',
            B: '< iframe link="url" title="description">< /iframe>',
            C: '< iframe src="url" title="description">< /iframe>',
            D: "All of the above",
        },
        answer: "C",
        explanation: 'The correct syntax for < iframe> tag is: < iframe src="url" title="description">< /iframe>',
    },
    {
        question: "Which tag is used to create an HTML form for user input?",
        options: {
            A: "< form>",
            B: "< input>",
            C: "< form_put>",
            D: "< form_get>",
        },
        answer: "A",
        explanation: "The HTML tag < form> is used to create an HTML form for user input.",
    },
    {
        question: "Which tag is used to display a single-line text input field?",
        options: {
            A: '< input type="textbox">',
            B: '< input type="checkbox">',
            C: '< input type="text">',
            D: '< input type="submit">',
        },
        answer: "C",
        explanation: 'The HTML tag < input type="text"> is used to display a single-line input field.',
    },
    {
        question: "Which tag is used to display a radio button?",
        options: {
            A: '< input type="textbox">',
            B: '< input type="checkbox">',
            C: '< input type="text">',
            D: '< input type="radio">',
        },
        answer: "D",
        explanation: 'The HTML tag < input type="radio"> is used to display a radio button.',
    },
    {
        question: "Which tag is used to display a checkbox?",
        options: {
            A: '< input type="textbox">',
            B: '< input type="checkbox">',
            C: '< input type="text">',
            D: '< input type="radio">',
        },
        answer: "B",
        explanation: 'The HTML tag < input type="checkbox"> is used to display a checkbox.',
    },
    {
        question: "Which tag is used to display a submit button?",
        options: {
            A: '< input type="submit">',
            B: '< input type="checkbox">',
            C: '< input type="text">',
            D: '< input type="radio">',
        },
        answer: "A",
        explanation: 'The HTML tag < input type="submit"> is used to display a submit button.',
    },
    {
        question: "Which tag is used to display a clickable button?",
        options: {
            A: '< input type="submit">',
            B: '< input type="checkbox">',
            C: '< input type="text">',
            D: '< input type="button">',
        },
        answer: "D",
        explanation: 'The HTML tag < input type="button"> is used to display a clickable button.',
    },
    {
        question: "Which input type reset defines a reset button that will reset all form values to their default values?",
        options: {
            A: "clear",
            B: "clear:both",
            C: "reset",
            D: "refresh",
        },
        answer: "C",
        explanation: 'The reset input type reset defines a reset button that will reset all form values to their default values. Here is the syntax, < input type="reset">',
    },
];
console.log(htmlQ);
const cssQ = [
    {
        question: "What is CSS stands for?",
        options: {
            A: "Cascading Style Sheets",
            B: "Cascade Style Sheet",
            C: "Color Style Sheets",
            D: "Color Style Sheet",
        },
        answer: "A",
        explanation: "The full form of the CSS is Cascading Style Sheets. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
    {
        question: "What CSS describes?",
        options: {
            A: "CSS describes how calculation perform on button click.",
            B: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
            C: "Both A. and B.",
            D: "None of the above",
        },
        answer: "B",
        explanation: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media.",
    },
    {
        question: "What is the correct syntax for referring an external CSS?",
        options: {
            A: '< link rel="stylesheet" type="text/css" href="mystyle.css">',
            B: '< stylesheet rel="stylesheet" type="text/css" href="mystyle.css">',
            C: '< style rel="stylesheet" type="text/css" href="mystyle.css">',
            D: "All of the above",
        },
        answer: "A",
        explanation: 'The correct syntax to include (refer) an external CSS in an HTML document is, < link rel="stylesheet" type="text/css" href="mystyle.css">',
    },
    {
        question: "What is a CSS selector?",
        options: {
            A: "A CSS selector is the CSS class name",
            B: "A CSS selector is the set of properties that are going to be applied on HTML elements",
            C: "A CSS selector is name of CSS file.",
            D: "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements.",
        },
        answer: "D",
        explanation: "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them.",
    },
    {
        question: "In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
        options: {
            A: "Selector",
            B: "Attribute",
            C: "Property",
            D: "Tag",
        },
        answer: "A",
        explanation: 'In a CSS rule, the HTML element(s) for them we are writing the CSS is known as "CSS Selector".',
    },
    {
        question: "Internal styles are written within the _____ element.",
        options: {
            A: "< style>…< /style>",
            B: "< css>…< /css>",
            C: "< stylesheet>…< /stylesheet>",
            D: "Both A. and B.",
        },
        answer: "A",
        explanation: "Internal styles are defined within the < style> element, inside the < head> section of an HTML page.",
    },
    {
        question: "Inline styles are written within the _____ attribute.",
        options: {
            A: "style",
            B: "css",
            C: "stylesheet",
            D: "Both A. and B.",
        },
        answer: "A",
        explanation: "Inline styles are defined within the style attribute of the relevant element.",
    },
    {
        question: "CSS comments are placed within the ______.",
        options: {
            A: "//",
            B: "/* and */",
            C: "< * and *>",
            D: "< ! And !>",
        },
        answer: "B",
        explanation: "A CSS comment is placed inside the < style> element, and starts with /* and ends with */.",
    },
    {
        question: "Can comments also span multiple lines?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "Yes, comments can also span multiple lines.",
    },
    {
        question: "Which property is used to define the text color?",
        options: {
            A: "text-color",
            B: "color",
            C: "font-color",
            D: "Both A. and B.",
        },
        answer: "B",
        explanation: "The color property is used to define the text color in CSS.",
    },
    {
        question: "Which property is used to define the background color?",
        options: {
            A: "bgcolor",
            B: "bg-color",
            C: "background",
            D: "background-color",
        },
        answer: "D",
        explanation: "The background-color property is used to define the background color in CSS.",
    },
    {
        question: "From the given options which is/are the valid way to represent a color?",
        options: {
            A: 'A valid color name like "blue"',
            B: 'HEX code like "#0000ff"',
            C: 'RGB Value like "rgb(0,0,255)',
            D: "All of the above",
        },
        answer: "D",
        explanation: "All of the given options are valid to define/represent the color name.",
    },
    {
        question: "Which property is used to define the font of the element's text?",
        options: {
            A: "font",
            B: "font-family",
            C: "font-style",
            D: "All of the above",
        },
        answer: "B",
        explanation: "The font-family property is used to define the font of the element's text.",
    },
    {
        question: "To make a text italic, which CSS property is used?",
        options: {
            A: "font",
            B: "font-family",
            C: "font-style",
            D: "All of the above",
        },
        answer: "C",
        explanation: "The font-style property is used to define the font style i.e., to make the text bold. To make the text italic, italic value is used.",
    },
    {
        question: "What are the valid values of font-style property?",
        options: {
            A: "italic, bold, bolder",
            B: "normal, bold, italic",
            C: "underline, bold, italic",
            D: "inherit, italic, normal, oblique",
        },
        answer: "D",
        explanation: "The following are the valid values of the font-style property, inherit, italic, normal, oblique",
    },
    {
        question: "Why font-weight property is used?",
        options: {
            A: "Sets how thick or thin characters in text should be displayed.",
            B: "Sets the size of the font",
            C: "Both A. and B.",
            D: "None of the above",
        },
        answer: "A",
        explanation: "The font-weight property sets how thick or thin characters in text should be displayed.",
    },
    {
        question: "What is/are the correct value(s) of font-weight property?",
        options: {
            A: "bold, italic, underline",
            B: "normal, bold, italic",
            C: "normal, bold, bolder, lighter, initial, and inherit",
            D: "None of the above",
        },
        answer: "C",
        explanation: "The valid values of the font-wight property: normal, bold, bolder, lighter, initial, inherit",
    },
    {
        question: "Which is the correct inline CSS for p tag to define paragraph's text and background colors?",
        options: {
            A: '< p css="color: red; background-color: yellow;">',
            B: '< p cssstyle="color: red; background-color: yellow;">',
            C: '< p inline="color: red; background-color: yellow;">',
            D: '< p style="color: red; background-color: yellow;">',
        },
        answer: "D",
        explanation: 'The correct inline CSS style is, < p style="color: red; background-color: yellow;">Paragraph Text.< /p>',
    },
    {
        question: "What is the correct syntax of border property in CSS?",
        options: {
            A: "border: border-width border-style border-color",
            B: "border: border-color border-width border-style",
            C: "border: border-style border-width border-color",
            D: "All of the above",
        },
        answer: "A",
        explanation: "The correct syntax to define element's border using the border property border: border-width border-style border-color",
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        options: {
            A: "a {text-decoration : underline;}",
            B: "a {text-decoration : none;}",
            C: "a {text-decoration : block;}",
            D: "None of the above",
        },
        answer: "B",
        explanation: "The correct syntax to display the hyperlinks without any underline is, a {text-decoration : none;}",
    },
    {
        question: "Which of the following is the correct syntax to remove the underline on hyperlinks and visited hyperlinks?",
        options: {
            A: "a {text-decoration : underline;}, a:visited {text-decoration : underline;}",
            B: "a {text-decoration : block;}, a:visited {text-decoration : block;}",
            C: "a {text-decoration : none;}, a:visited {text-decoration : none;}",
            D: "None of the above",
        },
        answer: "C",
        explanation: "The correct syntax to display the hyperlinks without any underline is, a {text-decoration : none;}, a:visited {text-decoration : none;}",
    },
    {
        question: "Which CSS property is used to style the hyperlinks on hover (Mouse over)?",
        options: {
            A: "a:mouseover",
            B: "a:move",
            C: "a:mover",
            D: "a:hover",
        },
        answer: "D",
        explanation: "The a:hover property is used to define the style on mouse over event, a:hover{ // styles }",
    },
    {
        question: "If you want to use a green dotted border around an image, which CSS property is used for that?",
        options: {
            A: "border-style",
            B: "border-color",
            C: "border-decoration",
            D: "Both A. and B.",
        },
        answer: "D",
        explanation: "Two properties border-style and border-color are used to define a green dotted border around an image.",
    },
    {
        question: "Which CSS property and value is used to center an element?",
        options: {
            A: "text-align:center",
            B: "align:center",
            C: "text-align:middle",
            D: "align:middle",
        },
        answer: "A",
        explanation: "text-align property with value center is used to center an elements.",
    },
    {
        question: "What are the valid values of text-align property?",
        options: {
            A: "left, middle, right",
            B: "left, center, right",
            C: "left, center, right, justify",
            D: "left, middle, right, justify",
        },
        answer: "C",
        explanation: "The valid values of text-align property are, left, center, right, justify",
    },
    {
        question: 'What is the use of "text-align:justify" in CSS?',
        options: {
            A: "Stretches the lines so that each line has equal width",
            B: "Stretches the lines so that each line can be arranged in left alignment",
            C: "Stretches the lines so that each line can be arranged in right alignment",
            D: "None of the above",
        },
        answer: "A",
        explanation: "The text-align:justify property stretches the lines so that each line has equal width.",
    },
    {
        question: "Which CSS property is used to specify the indentation of the first line of a text?",
        options: {
            A: "text-align",
            B: "padding-left",
            C: "margin-left",
            D: "text-indent",
        },
        answer: "D",
        explanation: "The text-indent property is used to specify the indentation of the first line of a text.",
    },
    {
        question: "Which CSS property is used to specify the space between the characters in a text?",
        options: {
            A: "text-space",
            B: "letter-space",
            C: "letter-spacing",
            D: "letter-distance",
        },
        answer: "C",
        explanation: "The letter-spacing property is used to specify the space between the characters in a text.",
    },
    {
        question: "Which CSS property is used to specify the space between lines?",
        options: {
            A: "line-space",
            B: "line-spacing",
            C: "line-padding",
            D: "line-height",
        },
        answer: "D",
        explanation: "The line-height property is used to specify the space between lines.",
    },
    {
        question: "Which CSS property is used to specify the space between the words in a text?",
        options: {
            A: "word-spacing",
            B: "word-padding",
            C: "word-height",
            D: "characters-spacing",
        },
        answer: "A",
        explanation: "The word-spacing property is used to specify the space between the words in a text.",
    },
    {
        question: "Which CSS property adds shadow to text?",
        options: {
            A: "content-shadow",
            B: "text-shadow",
            C: "word-shadow",
            D: "text-outline",
        },
        answer: "B",
        explanation: "The text-shadow property adds shadow to text.",
    },
    {
        question: "Which CSS property is used to specify uppercase and lowercase letters in a text?",
        options: {
            A: "text-transform",
            B: "text-case",
            C: "case",
            D: "text-casing",
        },
        answer: "A",
        explanation: "The text-transform property is used to specify uppercase and lowercase letters in a text.",
    },
    {
        question: "Which is the correct CSS statement to capitalize the first letter of each word?",
        options: {
            A: "text-transform: uppercase",
            B: "text-transform: capitalize",
            C: "text-transform: sentence",
            D: "Both A. and B.",
        },
        answer: "B",
        explanation: "The correct CSS statement is to capitalize the first letter of each word, text-transform: capitalize;",
    },
    {
        question: "What are the valid values of text-transform property?",
        options: {
            A: "uppercase, lowercase, and capitalize",
            B: "uppercase, lowercase, capitalize, and sentence",
            C: "upper, lower, and capital",
            D: "upper, lower, capital, and sentence",
        },
        answer: "A",
        explanation: "The valid values of text-transform property are, uppercase, lowercase, and capitalize",
    },
    {
        question: 'What are the valid values of "text-decoration" property?',
        options: {
            A: "overline, line-through, underline, and none",
            B: "overline, strike, line-through, underline, and none",
            C: "double-line, overline, line-through, underline, and none",
            D: "None of these",
        },
        answer: "A",
        explanation: "The valid values of text-decoration property are, overline, line-through, underline, and none",
    },
    {
        question: "Which CSS property specifies how to align the last line of a text?",
        options: {
            A: "text-align",
            B: "last-text-align",
            C: "text-align-last-line",
            D: "text-align-last",
        },
        answer: "D",
        explanation: "The text-align-last property specifies how to align the last line of a text.",
    },
    {
        question: "Which CSS property sets the vertical alignment of an element?",
        options: {
            A: "vertical-align",
            B: "vertical-text-align",
            C: "text-valign",
            D: "vertical-align-text",
        },
        answer: "A",
        explanation: "The vertical-align property sets the vertical alignment of an element.",
    },
    {
        question: "What are the valid values of vertical-align property?",
        options: {
            A: "baseline, text-top, text-bottom, sub, and super",
            B: "baseline, top, bottom, sub, and super",
            C: "baseline, text-top, text-bottom, sub, and super",
            D: "base, text-top, text-bottom, sub, and super",
        },
        answer: "C",
        explanation: "The valid values of vertical-align property are, baseline, text-top, text-bottom, sub, and super",
    },
    {
        question: "Which is the correct CSS statement to define multiple font families?",
        options: {
            A: 'font: "Times New Roman", Times, serif;',
            B: 'font-name: "Times New Roman", Times, serif;',
            C: 'font-family: "Times New Roman, Times, serif";',
            D: 'font-family: "Times New Roman", Times, serif;',
        },
        answer: "D",
        explanation: 'The correct CSS statement to define multiple font families is, font-family: "Times New Roman", Times, serif;',
    },
    {
        question: "Which CSS property specifies the type of list item marker?",
        options: {
            A: "list-style",
            B: "list-style-type",
            C: "list-style-circle",
            D: "list-style-square",
        },
        answer: "B",
        explanation: "The list-style-type property specifies the type of list item marker.",
    },
    {
        question: "Which is the correct CSS statement is used to remove the markers/bullets?",
        options: {
            A: "list-style: none;",
            B: "list-style-type: 0;",
            C: "list-style-type: blank;",
            D: "list-style-type: none;",
        },
        answer: "D",
        explanation: "The correct CSS statement is used to remove the markers/bullets: ul { list-style-type: none; }",
    },
    {
        question: "Which CSS property specifies an image as the list item marker?",
        options: {
            A: "list-style-image",
            B: "list-style-picture",
            C: "list-style-background",
            D: "list-style-bgimage",
        },
        answer: "A",
        explanation: "The list-style-image property specifies an image as the list item marker.",
    },
    {
        question: "Which CSS property specifies if/how an element is displayed?",
        options: {
            A: "block",
            B: "display",
            C: "element-display",
            D: "element-block",
        },
        answer: "B",
        explanation: "The display property specifies if/how an element is displayed.",
    },
    {
        question: "Which CSS property specifies the type of positioning method used for an element?",
        options: {
            A: "positions",
            B: "text-position",
            C: "positioning",
            D: "position",
        },
        answer: "D",
        explanation: "The position property specifies the type of positioning method used for an element.",
    },
    {
        question: "HTML elements are positioned ___ by default.",
        options: {
            A: "static",
            B: "fixed",
            C: "relative",
            D: "none",
        },
        answer: "A",
        explanation: "HTML elements are positioned static by default.",
    },
    {
        question: 'What are the valid values for "position" property?',
        options: {
            A: "block, none, fixed, absolute, and static",
            B: "block, static, fixed, absolute, and sticky",
            C: "static, relative, fixed, absolute, and none",
            D: "static, relative, fixed, absolute, and sticky",
        },
        answer: "D",
        explanation: "The valid values for position property are, static, relative, fixed, absolute, and sticky.",
    },
    {
        question: "Which CSS property specifies the opacity/transparency of an element?",
        options: {
            A: "transparency",
            B: "opacity",
            C: "transform-opacity",
            D: "opacity-all",
        },
        answer: "B",
        explanation: "The opacity property specifies the opacity/transparency of an element.",
    },
    {
        question: "Which CSS function performs a calculation to be used as the property value?",
        options: {
            A: "sum()",
            B: "add()",
            C: "calc()",
            D: "addition()",
        },
        answer: "C",
        explanation: "The calc() function performs a calculation to be used as the property value.",
    },
    {
        question: "Which CSS function uses the largest value?",
        options: {
            A: "large()",
            B: "maximum()",
            C: "max_value()",
            D: "max()",
        },
        answer: "D",
        explanation: "The max() function uses the largest value.",
    },
    {
        question: "Which CSS function uses the smallest value?",
        options: {
            A: "small()",
            B: "minimum()",
            C: "min_value()",
            D: "min()",
        },
        answer: "D",
        explanation: "The min() function uses the smallest value.",
    },
    {
        question: "In how many ways can CSS be added to HTML?",
        options: {
            A: "One",
            B: "Two",
            C: "Three",
            D: "Infinite",
        },
        answer: "C",
        explanation: "CSS can be added to HTML in three different ways: 1. By using style attribute inside < body> tag. 2. By using < style> tag inside the < head> section of HTML. 3. By creating an external CSS file and linking this file using < link> tag in HTML.",
    },
    {
        question: "The < style> in Internal CSS refers to ___.",
        options: {
            A: "Attributes",
            B: "HTML tags",
            C: "Selector",
            D: "All of the above",
        },
        answer: "B",
        explanation: "In Internal CSS, we add CSS using < style>, which is an HTML tag.",
    },
    {
        question: "Can we link multiple stylesheets to a single page?",
        options: {
            A: "Yes",
            B: "No",
            C: "Can't say, it depends on CSS properties",
            D: "None of the above",
        },
        answer: "A",
        explanation: "Yes, we can link multiple stylesheets to a single page. You just have to add the < link> element for each stylesheet.",
    },
    {
        question: "The CSS property used to change text sizes?",
        options: {
            A: "font-family",
            B: "font-size",
            C: "font",
            D: "Both A and C",
        },
        answer: "D",
        explanation: "The font and font-size CSS properties are used to change the font size. Font size is one of the longhand properties of the font.",
    },
    {
        question: "In this line of code, identify the selector ___.",
        options: {
            A: "p",
            B: "border",
            C: "2px",
            D: "None of these",
        },
        answer: "A",
        explanation: "In the given line of code, p is the selector. Selectors target HTML elements that we want to style. Here, the border is a CSS property and 2px solid blue is the property value.",
    },
    {
        question: "How many color names does CSS supports?",
        options: {
            A: "140",
            B: "100",
            C: "75",
            D: "90",
        },
        answer: "A",
        explanation: "CSS3 has 140 color names available which are supported by all the browsers.",
    },
    {
        question: "The ___ property is used in the positioning of the background image.",
        options: {
            A: "background-image",
            B: "background-position",
            C: "padding",
            D: "All of the above",
        },
        answer: "B",
        explanation: "As the name suggests, the background-position property specifies the position of the background image.",
    },
    {
        question: "___ means 4 times the size of the current font.",
        options: {
            A: "4px",
            B: "4 pt.",
            C: "4em",
            D: "4vw",
        },
        answer: "C",
        explanation: "All four units refer to the unit of length. 4em means 4 times the size of the current font which is relative to the font size of the element.",
    },
    {
        question: "Amongst the following browsers, which browser supports almost all the CSS properties?",
        options: {
            A: "Firefox",
            B: "Safari",
            C: "Google Chrome",
            D: "Opera",
        },
        answer: "C",
        explanation: "Both Google Chrome and Microsoft Edge support almost all the CSS properties.",
    },
    {
        question: "What is the CSS Entity for the character '#'?",
        options: {
            A: "0023",
            B: "0026",
            C: "0027",
            D: "None of the these",
        },
        answer: "A",
        explanation: "We use CSS Entities to display all the characters. There are different entities for different characters. For this character '#', CSS Entity is 0023.",
    },
    {
        question: "This selector selects all the < h> elements where the parent is a < div> element.",
        options: {
            A: "h + p",
            B: "h > p",
            C: "p.h",
            D: "p > h",
        },
        answer: "B",
        explanation: "This is an element>element selector in which operand on the left side of child combinator (>) is the parent and operand on the right side is the child element.",
    },
    {
        question: "Which selector selects the markers of list items?",
        options: {
            A: "::marker",
            B: ".marker",
            C: "::selector",
            D: "None of these",
        },
        answer: "A",
        explanation: "The ::marker selector targets the list markers of list items.",
    },
    {
        question: "Which is the most widely used font in customizing web pages?",
        options: {
            A: "Times New Roman",
            B: "Georgia",
            C: "Arial",
            D: "Garamond",
        },
        answer: "C",
        explanation: "Arial (sans-serif) is the most widely used font on web pages.",
    },
    {
        question: "Which of the following CSS properties are animatable?",
        options: {
            A: "color",
            B: "border-left",
            C: "flex",
            D: "All of the above",
        },
        answer: "D",
        explanation: "We can add animation and transitions to all these three properties. To add animations, we apply animation property.",
    },
    {
        question: "We can give space between unit and value when assigning length values to CSS properties.",
        options: {
            A: "True",
            B: "False",
        },
        answer: "B",
        explanation: "False - If you give a space between unit and value, the property won't be injected in div.",
    },
    {
        question: "Which of these units of length is supported by Chrome Version 1.0?",
        options: {
            A: "rem",
            B: "px",
            C: "vw",
            D: "vh",
        },
        answer: "B",
        explanation: "Pixels (px) is supported by Chrome Version 1.0.",
    },
    {
        question: "Which line of code is a must to write to apply CSS Flexbox properties?",
        options: {
            A: "display: flex;",
            B: "display: flexbox;",
            C: "display: block;",
            D: "flex-direction: row;",
        },
        answer: "A",
        explanation: "If you want to apply CSS Flexbox properties, you need to set the display to flex first.",
    },
    {
        question: "The default value of justify-content property is ___.",
        options: {
            A: "flex-start",
            B: "flex-end",
            C: "space-between",
            D: "None",
        },
        answer: "A",
        explanation: "The justify-content property is one of the CSS Flexbox properties. Its default value is flex-start.",
    },
    {
        question: "Which is the correct syntax for adding animation?",
        options: {
            A: "animation: name timing-function duration",
            B: "animation: name duration timing-function",
            C: "animation: name delay duration",
            D: "None of these",
        },
        answer: "B",
        explanation: "The correct syntax for adding animation is: animation: name duration timing-function",
    },
    {
        question: "Which line of code specifies playing an animation with the same speed from beginning to the end?",
        options: {
            A: "div {animation- timing function: linear;}",
            B: "div {animation- timing function: ease in;}",
            C: "div {animation- play- state: paused;}",
            D: "div {animation- fill-mode: both;}",
        },
        answer: "A",
        explanation: "We use the animation- timing- function property to define the time an animation uses to change from one set of CSS styles to another. When we set its value to linear, the animation will have the same speed from start to end.",
    },
    {
        question: "Which line of code represents a universal selector?",
        options: {
            A: "*{border: 2px solid red;}",
            B: "body {border: 2px solid red;}",
            C: "both A&B",
            D: "None of these",
        },
        answer: "A",
        explanation: "Syntax for Universal selector is: *{CSS property}. This selector selects all the HTML elements on the page.",
    },
    {
        question: "Which of the following properties specify the width of the borders?",
        options: {
            A: "border-width",
            B: "border-style",
            C: "border",
            D: "Both A and C",
        },
        answer: "D",
        explanation: "Both border and border-width properties specify the width of the borders. The border property is a shorthand property for border-width, border-style, and border-color.",
    },
    {
        question: "Is border-image property animatable?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "B",
        explanation: "The border-image property is not animatable. We cannot use this property in defining animations and transitions.",
    },
    {
        question: "What value is set to border: collapse property to define borders around each cell? (Refer to the image)",
        options: {
            A: "collapse",
            B: "separate",
            C: "initial",
            D: "inherit",
        },
        answer: "B",
        explanation: "When we set the value of border:collapse property to separate, each cell will display its borders.",
    },
    {
        question: "Which cursor property value indicates that the program is busy?",
        options: {
            A: "help",
            B: "default",
            C: "auto",
            D: "wait",
        },
        answer: "D",
        explanation: "When we set the cursor property value to wait, the cursor indicates that the program is busy.",
    },
    {
        question: "What does this line of code explain?",
        options: {
            A: "All the < p> elements are displayed as a block-level flex container",
            B: "All the < p> elements are not displayed by the browser",
            C: "All the < p> elements are displayed as a grid container",
            D: "All the < p> elements are displayed as an inline flex container",
        },
        answer: "A",
        explanation: "All the < p> elements are displayed as a block-level flex container.",
    },
    {
        question: "The text-align property defines the ___ alignment of text in an element.",
        options: {
            A: "horizontal",
            B: "vertical",
            C: "both horizontal & vertical",
            D: "None of these",
        },
        answer: "A",
        explanation: "The text-align property specifies the horizontal alignment of the text.",
    },
    {
        question: "Does the z-index property accept negative values?",
        options: {
            A: "Yes",
            B: "No",
        },
        answer: "A",
        explanation: "The z-index property accepts both negative and positive values.",
    },
    {
        question: "Which CSS property is not supported by the Firefox browser?",
        options: {
            A: "text-indent",
            B: "scroll- behavior",
            C: "overflow",
            D: "viewport",
        },
        answer: "D",
        explanation: "The viewport property is not supported by Firefox. Chrome and Microsoft Edge support this.",
    },
    {
        question: "Where do we store external stylesheets?",
        options: {
            A: "HTML files",
            B: "CSS files",
            C: "Folder",
            D: "None of these",
        },
        answer: "B",
        explanation: "External stylesheets are stored in CSS files and we can link those files in HTML using the < link> tag.",
    },
    {
        question: "In the given line of code, identify the type of selector used.",
        options: {
            A: "CSS element selector",
            B: "CSS id selector",
            C: "Combinator selector",
            D: "All of the above",
        },
        answer: "B",
        explanation: "The id selector uses the id attribute of an HTML element to select a specified element.",
    },
    {
        question: "The Hex Code for the red color is ___.",
        options: {
            A: "#FF0000",
            B: "#F0F000",
            C: "#F0000F",
            D: "None of these",
        },
        answer: "A",
        explanation: "Hex codes are three-byte hexadecimal numbers that are used to identify color in HTML/CSS.",
    },
    {
        question: "In CSS, what does HSL stands for?",
        options: {
            A: "hue, standard, light",
            B: "height, standard, line-width",
            C: "hue, saturation, lightness",
            D: "hue, standard, line-width",
        },
        answer: "C",
        explanation: "HSL stands for hue, saturation, lightness. In CSS, we can specify color using the HSL value.",
    },
    {
        question: "Among the following CSS properties, which property is not a shorthand property?",
        options: {
            A: "background",
            B: "padding",
            C: "display",
            D: "border",
        },
        answer: "C",
        explanation: "The display property is not a shorthand property. It has only one property value.",
    },
    {
        question: "In this line of code, what is the use of the alt attribute?",
        options: {
            A: "Adds a text description to an image",
            B: "Provides alternative information for an image",
            C: "To hide an image",
            D: "Both A & B",
        },
        answer: "D",
        explanation: "The alt attribute is used to provide alternative information for an image if a user fails to view an image on the webpage and also it tells us something related to the image.",
    },
    {
        question: "The CSS border property specifies the style, color, and ___ of an element's border.",
        options: {
            A: "length",
            B: "size",
            C: "width",
            D: "area",
        },
        answer: "C",
        explanation: "The CSS border properties specify the style, color, and width of an element's border. The border property is a shorthand property for border-width, border-style, and border-color.",
    },
    {
        question: "What does 'padding: 50px 20px;' specifies?",
        options: {
            A: "top padding is 50px",
            B: "bottom padding is 20px",
            C: "right padding is 20px",
            D: "Both A & C",
        },
        answer: "D",
        explanation: "This line of code specifies top and bottom paddings are '50px' & 'right' and left paddings are '20px'.",
    },
    {
        question: "What is the default size for normal text, like paragraphs?",
        options: {
            A: "11px",
            B: "12px",
            C: "16px",
            D: "18px",
        },
        answer: "C",
        explanation: "If we don't specify a font size, the default size for normal texts is '16px' or '1em'.",
    },
];
//   const jsQ:Question[] = [
//     {
//       question: "JavaScript is the programming language of the _____.",
//       options: {
//         A: "Desktop",
//         B: "Mobile",
//         C: "Web",
//         D: "Server",
//       },
//       answer: "C",
//       explanation: "JavaScript is the programming language of the Web.",
//     },
//     {
//       question: "Which type of JavaScript language is _____?",
//       options: {
//         A: "Object-oriented",
//         B: "Object-based",
//         C: "Functional programming",
//         D: "All of the above",
//       },
//       answer: "B",
//       explanation: "JavaScript is an object-based programming language.",
//     },
//     {
//       question:
//         "Which of the following statement(s) is true about the JavaScript?",
//       options: {
//         A: "It is a scripting language used to make the website interactive",
//         B: "It is an advanced version of Java for Desktop and Mobile application development",
//         C: "It is a markup language of Java to develop the webpages",
//         D: "All of the above",
//       },
//       answer: "A",
//       explanation:
//         'The correct statement about the JavaScript programming language is "It is a scripting language used to make the website interactive".',
//     },
//     {
//       question: "In which HTML element, we put the JavaScript code?",
//       options: {
//         A: "< javascript>...< /javascript>",
//         B: "< js>...< /js>",
//         C: "< script>...< /script>",
//         D: "< css>...< /css>",
//       },
//       answer: "C",
//       explanation:
//         "The JavaScript code is written inside the < script>...< /script> tag/element.",
//     },
//     {
//       question: "JavaScript code can be written in ____.",
//       options: {
//         A: "JavaScript file (.js file)",
//         B: "HTML document directly",
//         C: "JavaScript file and in HTML document directly",
//         D: "In style sheets (.css file)",
//       },
//       answer: "C",
//       explanation:
//         "JavaScript code can be written in the JavaScript file and in HTML document directly.",
//     },
//     {
//       question: "Which symbol is used separate JavaScript statements?",
//       options: {
//         A: "Comma (,)",
//         B: "Colon (:)",
//         C: "Hyphen (_)",
//         D: "Semicolon (;)",
//       },
//       answer: "D",
//       explanation:
//         "The semicolon (;) is used to separate the JavaScript statements.",
//     },
//     {
//       question: "JavaScript ignores?",
//       options: {
//         A: "newlines",
//         B: "tabs",
//         C: "spaces",
//         D: "All of the above",
//       },
//       answer: "D",
//       explanation:
//         "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code.",
//     },
//     {
//       question:
//         "Which is the correct syntax to call an external JavaScript file in the current HTML document?",
//       options: {
//         A: '< script src="jsfile.js">< /script>',
//         B: '< script href=" jsfile.js">< /script>',
//         C: '< import src=" jsfile.js">< /import>',
//         D: '< script link=" jsfile.js">< /script>',
//       },
//       answer: "A",
//       explanation:
//         'The correct syntax to call an external JavaScript file in the current HTML document is: < script src="jsfile.js">< /script>',
//     },
//     {
//       question:
//         "Which JavaScript method is used to access an HTML element by id?",
//       options: {
//         A: "getElementById()",
//         B: "getElement(id)",
//         C: "getElementById(id)",
//         D: "elementById(id)",
//       },
//       answer: "C",
//       explanation:
//         "The JavaScript method document.getElementById(id) is used to access an HTML document by id.",
//     },
//     {
//       question:
//         "Which property is used to define the HTML content to an HTML element with a specific id?",
//       options: {
//         A: "innerText",
//         B: "innerContent",
//         C: "elementText",
//         D: "innerHTML",
//       },
//       answer: "D",
//       explanation: "The innerHTML is the property that defined HTML content.",
//     },
//     {
//       question: "Which JavaScript method is used to write HTML output?",
//       options: {
//         A: "document.write()",
//         B: "document.output()",
//         C: "console.log()",
//         D: "document.writeHTML()",
//       },
//       answer: "A",
//       explanation:
//         "The JavaScript method document.write() defines the HTML output.",
//     },
//     {
//       question: "Which JavaScript method is used to write on browser's console?",
//       options: {
//         A: "console.write()",
//         B: "console.output()",
//         C: "console.log()",
//         D: "console.writeHTML()",
//       },
//       answer: "C",
//       explanation:
//         "The JavaScript method console.log() is used to write on browser's console.",
//     },
//     {
//       question: "Which JavaScript method is used to write into an alert box?",
//       options: {
//         A: "window.alertHTML()",
//         B: "window.alert()",
//         C: "window.alertBox()",
//         D: "window.alertContent()",
//       },
//       answer: "B",
//       explanation:
//         "The JavaScript method window.alert() is used to write into an alert box.",
//     },
//     {
//       question:
//         'Which is the correct JavaScript statement to display "Hello Boss!" into an alert box?',
//       options: {
//         A: 'alert("Hello Boss!");',
//         B: "alert('Hello Boss!');",
//         C: "alert(Text:'Hello Boss!');",
//         D: "Both A. and B.",
//       },
//       answer: "D",
//       explanation:
//         'Both of these statements are correct to display "Hello Boss!" into an alert box: window.alert("Hello Boss!"); window.alert(\'Hello Boss!\');',
//     },
//     {
//       question:
//         "Which is the correct JavaScript statement to print the addition of two numbers 10 and 20 in a paragraph whose id is 'result'?",
//       options: {
//         A: 'getElementById("result").innerHTML = 10+20;',
//         B: 'getElementById("result").innerHTML = "10+20";',
//         C: 'getElementById("#result").innerHTML = 10+20;',
//         D: "All of the above",
//       },
//       answer: "A",
//       explanation:
//         'The correct JavaScript statement to print the addition of two numbers 10 and 2o in a paragraph whose id is "result" is: document.getElementById("result").innerHTML = 10+20;',
//     },
//     {
//       question:
//         'What is the use of this JavaScript statement?\n\n< button onclick="window.print()">Submit< /button>',
//       options: {
//         A: 'It will write "Submit" on the current Window',
//         B: "It will print the content of the current page",
//         C: "It will write the content of the current page in the browser’s console",
//         D: "None of the above",
//       },
//       answer: "B",
//       explanation:
//         "The window.print() method prints the content of the current page.",
//     },
//     {
//       question: "In JavaScript, single line comment begins with ___.",
//       options: {
//         A: "#",
//         B: "/*",
//         C: "$",
//         D: "//",
//       },
//       answer: "D",
//       explanation: "In JavaScript, single line comment begins with //.",
//     },
//     {
//       question:
//         "In JavaScript, multi-line comments start with __ and end with ___.",
//       options: {
//         A: "/* and */",
//         B: "< !-- and -->",
//         C: "## and ##",
//         D: "// and //",
//       },
//       answer: "A",
//       explanation:
//         "In JavaScript, multi-line comments start with /* and end with */.",
//     },
//     {
//       question: "Which JavaScript keyword is used to declare a variable?",
//       options: {
//         A: "Var",
//         B: "var",
//         C: "Let",
//         D: "All of the above",
//       },
//       answer: "B",
//       explanation: "The var keyword defines a variable in JavaScript.",
//     },
//     {
//       question:
//         "How many keywords are there in JavaScript to declare variables or constants?",
//       options: {
//         A: "1",
//         B: "2",
//         C: "3",
//         D: "4",
//       },
//       answer: "C",
//       explanation:
//         "There are 3 ways / keywords to declare variables or constants, those are: var, let, const",
//     },
//     {
//       question:
//         "What is the main difference between var and let keywords in JavaScript?",
//       options: {
//         A: "var defines a variable while let defines a constant",
//         B: "var defined function scoped variable while let define block scoped variable",
//         C: "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
//         D: "All of the above",
//       },
//       answer: "B",
//       explanation:
//         "The var and let keywords are both used for variable declaration in JavaScript. But, the main difference between them is that var defines function scoped variable while let defines block-scoped variable.",
//     },
//     {
//       question: "The const keyword is used to define a ______.",
//       options: {
//         A: "Function scoped variable",
//         B: "Block scoped variable",
//         C: "Constant",
//         D: "Constant with no initial value",
//       },
//       answer: "C",
//       explanation: "The const keyword is used to define a constant.",
//     },
//     {
//       question:
//         "Which is the correct syntax to declare a constant in JavaScript?",
//       options: {
//         A: "const constant_name;",
//         B: "constant_name const;",
//         C: "constant_name const = value;",
//         D: "const constant_name = value;",
//       },
//       answer: "D",
//       explanation:
//         "The correct syntax to declare a constant is: const constant_name = value;",
//     },
//     {
//       question: "What is the default value of an uninitialized variable?",
//       options: {
//         A: "0",
//         B: "undefined",
//         C: "null",
//         D: "NaN",
//       },
//       answer: "B",
//       explanation: "The default value of an uninitialized variable is undefined.",
//     },
//     {
//       question: "Can be redeclare a variable that is declared with var keyword?",
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "A",
//       explanation:
//         "Yes, we can redeclare variable that is declared with var keyword.",
//     },
//     {
//       question: "Can be redeclare a variable that is declared with let keyword?",
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "B",
//       explanation:
//         "No, we cannot redeclare variable that is declared with let keyword.",
//     },
//     {
//       question: "Which is the exponentiation operator in JavaScript?",
//       options: {
//         A: "exp()",
//         B: "^",
//         C: "**",
//         D: "pow",
//       },
//       answer: "C",
//       explanation:
//         "The exponentiation operator in JavaScript is ** which is used to calculate the result of first operand's to the power of the second operators i.e., x**y = x to the power of y (xy).",
//     },
//     {
//       question:
//         "Does JavaScript support increment (++) and decrements (--) Operators?",
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "A",
//       explanation:
//         "Yes, JavaScript supports increment (++) and decrements (--) operators.",
//     },
//     {
//       question: "JavaScript types are _____.",
//       options: {
//         A: "Static",
//         B: "Dynamic",
//       },
//       answer: "B",
//       explanation:
//         "JavaScript types are dynamic, which means the same variable can be used to store the different types of values.",
//     },
//     {
//       question: "JavaScript arrays are written with _____.",
//       options: {
//         A: "round brackets ()",
//         B: "curly brackets {}",
//         C: 'double quotes ""',
//         D: "square brackets []",
//       },
//       answer: "D",
//       explanation: "JavaScript arrays are written with square brackets [].",
//     },
//     {
//       question: "JavaScript objects are written with _____.",
//       options: {
//         A: "round brackets ()",
//         B: "curly brackets {}",
//         C: 'double quotes ""',
//         D: "square brackets []",
//       },
//       answer: "B",
//       explanation: "JavaScript objects are written with curly brackets {}.",
//     },
//     {
//       question:
//         "Which JavaScript operator is used to determine the type of a variable?",
//       options: {
//         A: "typeof",
//         B: "TypeOf",
//         C: "typeOf",
//         D: "sizeof",
//       },
//       answer: "A",
//       explanation:
//         "The typeof operator is used to determine the type of a variable.",
//     },
//     {
//       question: "Which is the correct syntax of JavaScript typeof operator?",
//       options: {
//         A: "typeof variable/value",
//         B: "typeof(variable/value)",
//       },
//       answer: "C",
//       explanation:
//         "Both of the syntaxes can be used for JavaScript typeof operator.",
//     },
//     {
//       question: "Which keyword is used to define a JavaScript function?",
//       options: {
//         A: "module",
//         B: "fun",
//         C: "func",
//         D: "function",
//       },
//       answer: "D",
//       explanation:
//         "The function keyword is used to define the JavaScript function.",
//     },
//     {
//       question: "Which is the correct syntax for the function definition?",
//       options: {
//         A: "return_type function function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
//         B: "function function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
//         C: "return_type function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
//         D: "function function_name(parameter1, parameter2, ...) as return_type { /*Function's body*/ }",
//       },
//       answer: "B",
//       explanation:
//         "The function definition syntax is:\n\nfunction function_name(parameter1, parameter2, ...)\n{ \n\t/*Function's body*/ \n}",
//     },
//     {
//       question: "Can we use a function as a variable value?",
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "A",
//       explanation: "Yes, a function can be used as a variable value.",
//     },
//     {
//       question:
//         "In JavaScript a variable contains one value while an object may contain ___.",
//       options: {
//         A: "One value",
//         B: "Two values",
//         C: "Three values",
//         D: "Many values",
//       },
//       answer: "D",
//       explanation:
//         "In JavaScript a variable contains one value while an object may contain many values.",
//     },
//     {
//       question:
//         "Which is the correct syntax to access an object property in JavaScript?",
//       options: {
//         A: "objectName:propertyName",
//         B: "propertyName",
//         C: 'objectName["propertyName"]',
//         D: "Both B. and C.",
//       },
//       answer: "D",
//       explanation:
//         'The properties of an object can we accessed using either objectName.propertyName or objectName["propertyName"].',
//     },
//     {
//       question:
//         "Which property is used to get the length of a string in JavaScript?",
//       options: {
//         A: "strlen",
//         B: "len",
//         C: "length",
//         D: "Length",
//       },
//       answer: "C",
//       explanation:
//         "The length property is used to get the length of a string in JavaScript.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?',
//       code: `\n\n< script>\n\tlet str = "IncludeHelp";\n\tdocument.getElementById("test").innerHTML = str.length;\n< /script>`,
//       answer: "A",
//       explanation:
//         "The output of the above statement will be the length of the string. That is 11.",
//     },
//     {
//       question:
//         "Which character is used to break up a code line within a text string in JavaScript?",
//       options: {
//         A: "Single quote (')",
//         B: "Single backslash (\\)",
//         C: 'Double quote (")',
//         D: "Tipple single quote (''')",
//       },
//       answer: "B",
//       explanation:
//         "The Single backslash (\\) is used to break up a code line within a text string in JavaScript.",
//     },
//     {
//       question:
//         'Will the following JavaScript code work?\n\n< script>\n\tdocument.getElementById("test").innerHTML = \\\n\t"Hello, IncludeHelp!";\n< /script>',
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "B",
//       explanation:
//         "No, the above code will not work. Because, we cannot breakup a JavaScript code line with single backslash (\\).",
//     },
//     {
//       question:
//         "Which is the correct JavaScript statement to define string as object?",
//       options: {
//         A: 'var s = new String("IncludeHelp!")',
//         B: 'var s = String("IncludeHelp!")',
//         C: 'var s = "IncludeHelp!"',
//       },
//       answer: "A",
//       explanation:
//         'The strings can also be defined as an object using the new keyword. The correct JavaScript statement to define a string as an object is: var s = new String("IncludeHelp!")',
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?',
//       code: `\n\n< script>\n\tlet str1 = new String("IncludeHelp!");\n\tlet str2 = new String("IncludeHelp!");\n\tdocument.getElementById("test").innerHTML = (str1==str2);\n< /script>`,
//       answer: "B",
//       explanation:
//         "In the above code, str1 and str2 are the objects. And. In the JavaScript, comparison of two objects returns false.",
//     },
//     {
//       question:
//         "Which is/are the valid JavaScript method(s) to extract string parts?",
//       options: {
//         A: "slice(start, end)",
//         B: "substring(start, end)",
//         C: "substr(start, length)",
//       },
//       answer: "D",
//       explanation:
//         "The all of the above JavaScript methods can be used to extract string parts.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?',
//       code: `\n\n< script>\n    let x = "Hello, IncludeHelp!";\n    document.getElementById("test").innerHTML = x.slice(-13,-1);\n< /script>`,
//       answer: "B",
//       explanation:
//         'The negative value counts from the end of the string. Thus, the output will be "IncludeHelp".',
//     },
//     {
//       question:
//         'In JavaScript, the string template literals use ____ rather than the quotes ("") to define a string?',
//       options: {
//         A: "Single quotes (')",
//         B: "Backslash with single quote (\\’'\\')",
//         C: "Backslashes (\\\\)",
//         D: "Back-ticks (``)",
//       },
//       answer: "D",
//       explanation:
//         'In JavaScript, the string template literals use back-ticks (``) rather than the quotes ("") to define a string.',
//     },
//     {
//       question:
//         'Does the following JavaScript variable definition is correct?\n\nlet x = `I\'m "David!"`;',
//       options: {
//         A: "Yes",
//         B: "No",
//       },
//       answer: "A",
//       explanation:
//         "The JavaScript variable definition statement is true. Because, with the JavaScript template literals, we can use both single and double quotes inside a string.",
//     },
//     {
//       question: "Which JavaScript method is used to get a number as a string?",
//       options: {
//         A: "toString()",
//         B: "intToString()",
//         C: "parseInteger()",
//       },
//       answer: "A",
//       explanation:
//         "The JavaScript method toString() is used to get a number as a string.",
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\n    const myArray = ['h', 'e', 'l', 'l', 'o'];\n    document.write(myArray[0]);\n    document.write(myArray[1]);\n< /script>",
//       code: true,
//       answer: "A",
//       explanation:
//         'In JavaScript, the array indexing starts with 0. Thus, the above statement with print "h" and "e".',
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\n    let cars = ['Honda', 'Hyundai'];\n    cars.push('Mahindra');\n    document.write(typeof cars + \" \" + cars);\n< /script>",
//       code: true,
//       answer: "C",
//       explanation:
//         "The push() method pushes an element at the end of the array. And, typeof returns the type of the object. Here, cars is an array.",
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\n    let cars1 = ['Honda', 'Hyundai'];\n    let cars2 = cars1;\n    \n    cars1.push('Mahinda');\n    \n    document.write(cars1 + \"---\" + cars2);\n< /script>",
//       code: true,
//       answer: "B",
//       explanation:
//         "In the JavaScript, the arrays are objects, and the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. Thus, the values of cars1 and cars2 are the same.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>  \n\tvar msgs=new Array("Hello","Hey","Morning!");  \n\n\tfor (i=0;i< msgs.length;i++){  \n\t\tdocument.write(msgs[i] + " | ");  \n\t}\n< /script>',
//       code: true,
//       answer: "A",
//       explanation:
//         'In the above JavaScript code, the array is declared using the new operator and all elements are printing using the loop. Thus, the output would be "Hello | Hey | Morning! |".',
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n\tvar values = [10, 20, 30, 40];\n\t\n\tvar result = values.reduceRight(function(x,y){\n\t\treturn (x + y);\n\t});\n\t\n\tdocument.write("Result: " + result);\n< /script>',
//       code: true,
//       answer: "D",
//       explanation:
//         'In the above JavaScript code, we used the reduceRight() method which is used to reduce the given array elements into a single value by executing a reducer function. The reducer() function is applied against the accumulator and reduces all the elements from right to left. Thus, the output would be "Result: 100".',
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n\tvar cars = ["Honda","Hyundai","Mahindra"];\n\t\n\tvar result = cars.shift();\n\t\n\tdocument.writeln("Result: ", cars);\n< /script>',
//       code: true,
//       answer: "C",
//       explanation:
//         'In the above JavaScript code, we used the shift() method which is used to remove the first element of the given array and return that element. This method changes the length of the original array. Thus, the output would be "Result: Hyundai,Mahindra".',
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n\tvar cars = ["Honda","Hyundai","Mahindra"];\n\n\tvar result = cars.unshift("Toyota", "Tata");\n\n\tdocument.writeln("[", result, "] ", cars);\n< /script>',
//       code: true,
//       answer: "A",
//       explanation:
//         'In the above JavaScript code, we used unshift() method which is used to add one or more elements in the beginning of the given array and returns the updated array. This method changes the length of the original array. Thus, the output would be "[5] Toyota,Tata,Honda,Hyundai,Mahindra".',
//     },
//     {
//       question:
//         "Which JavaScript method is used to call a function (a callback function) once for each array element?",
//       answer: "C",
//       explanation:
//         "The JavaScript method forEach() is used to call a function (a callback function) once for each array element.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n\tconst arr = [10, 20, 30];\n\tlet result = 0;\n\t\n\tarr.forEach(myFunction);\n\t\n\tdocument.write("Result: " , result)\n\tfunction myFunction(value, index, array) {\n\t  result += value; \n\t}\n< /script>',
//       code: true,
//       answer: "A",
//       explanation:
//         'In the above JavaScript code, we used the forEach() method which is used to call a function (a callback function) once for each array element, and in the callback function, we are adding the elements of the array. Thus, the output would be "Result: 60".',
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n\tconst values = [10, 20, 30];\n\tconst result = values.map(myFunction);\n\n\tdocument.write("Result: ", result);\n\n\tfunction myFunction(value, index, array) {\n\t  return value * value;\n\t}\n< /script>',
//       code: true,
//       answer: "C",
//       explanation:
//         'In the above JavaScript code, we used the map() method which is used to create a new array by performing a function on each array element, and in the myFunction() we are multiplying the elements with the same value. Thus, the output would be "Result: 100,400,900".',
//     },
//     {
//       question:
//         "Which JavaScript method is used to create a new array with array elements that passes a test?",
//       answer: "D",
//       explanation:
//         "The JavaScript method filter() is used to create a new array with array elements that pass a test.",
//     },
//     {
//       question: "Which JavaScript object works with the dates?",
//       answer: "A",
//       explanation: "The JavaScript Date object works with the dates.",
//     },
//     {
//       question:
//         "Which JavaScript statement(s) is correct to create Date object(s) with new Date() constructor?",
//       answer: "E",
//       explanation:
//         "All of the above statements are correct to create Date objects with new Date() constructor.",
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\n\tconst curr = new Date();\n\tdocument.write(curr);\n< /script>",
//       code: true,
//       answer: "D",
//       explanation:
//         "The above JavaScript code will print the current date & time in the format of Tue Dec 21 2021 13:04:36 GMT+0530 (India Standard Time).",
//     },
//     {
//       question:
//         "Which JavaScript method is used to convert a date to a UTC string (a date display standard)?",
//       answer: "A",
//       explanation:
//         "The JavaScript method toUTCString() is used to convert a date to a UTC string (a date display standard).",
//     },
//     {
//       question: "The internal clock in JavaScript counts from midnight _____.",
//       answer: "D",
//       explanation:
//         "The internal clock in JavaScript counts from midnight January 1, 1970.",
//     },
//     {
//       question: "What does the Date object's method getTime() return?",
//       answer: "D",
//       explanation:
//         "The Date object's method getTime() returns the number of milliseconds since January 1, 1970.",
//     },
//     {
//       question:
//         "Which method is used to get the year of a date as a four-digit number?",
//       answer: "C",
//       explanation:
//         "The getFullYear() method is used to get the year of a date as a four-digit number.",
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\n\tdocument.write(Math.round(107.5))\n< /script>",
//       code: true,
//       answer: "C",
//       explanation:
//         "The Math.round(x) returns the value of x rounded to its nearest integer. Thus, the output would be 108.",
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\ntry{\n\tconst cars = {  \n\t\tcompany: 'Honda'\n\t};  \n\n\tdelete cars.company;\n\tdocument.write(cars.company);  \n}\ncatch (err){\n\tdocument.write(err.message);\n}\n< /script>",
//       code: true,
//       answer: "A",
//       explanation:
//         'In the above JavaScript code, the statement delete cars.company; will delete the property. Thus, the output would be "undefined".',
//     },
//     {
//       question:
//         "What will be the output of the following JavaScript code?\n\n< script>\ntry{\n    const cars = {  \n        company: 'Honda'\n    };  \n    \n    Object.seal(cars);\n    delete cars.company;\n    document.write(cars.company);  \n}\ncatch (err){\n    document.write(err.message);\n}\n< /script>",
//       code: true,
//       answer: "B",
//       explanation:
//         "In the above JavaScript code, we have sealed the object and the seal property does not allow the object to be deleted. Hence, the property company will not be deleted.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n    let x = "10";\n    let y = + x;\n    \n    document.write(typeof y);\n< /script>',
//       code: true,
//       answer: "D",
//       explanation:
//         "In JavaScript, the unary + operator can be used to convert a variable to a number. Hence, the statement let y = + x; will convert variable to number.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n    let x = 10;\n    \n    document.write(typeof x, " , ", typeof String(x));\n< /script>',
//       code: true,
//       answer: "A",
//       explanation:
//         "In the above JavaScript code, we are using the String() method which is a global method to convert numbers to string. Thus, the statement typeof String(x) will return string.",
//     },
//     {
//       question:
//         'What will be the output of the following JavaScript code?\n\n< script>\n    let x = 10;\n    \n    document.write(x, " , ", toString(x));\n< /script>',
//       code: true,
//       answer: "C",
//       explanation:
//         "In the above JavaScript code, the statement toString(x) will not convert number to string because toString() is not a global method, it is a Number method and the correct way is to call this function is x.toString().",
//     },
//   ];
