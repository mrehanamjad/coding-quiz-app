interface Question {
  question: string;
  options: { [key: string]: string };
  answer: string;
  explanation: string;
}

const htmlQ: Question[] = [
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
    question:
      "Which is the correct syntax to include comment in an HTML document?",
    options: {
      A: "//",
      B: "/* Comment */",
      C: "// Comment //",
      D: "<   !-- Comment -- >",
    },
    answer: "D",
    explanation:
      "You can add comments to your HTML source by using the syntax: <  !-- Write your comments here -->",
  },
  {
    question: "Can we hide content using the comment?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, comments can be used to hide content. Syntax example: < !-- < p>Hello, world! < /p> -->",
  },
  {
    question: "Can we hide inline content using the comment?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, comments can be used to hide inline content. Syntax example: < p>Hello, world! < !-- This is some text --> How are you?< /p>",
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
    explanation:
      "The < head> tag contains the meta information about the HTML page.",
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
    explanation:
      "HTML tags with no content are called empty tags. For example, the < br> tag, < hr> tag.",
  },
  {
    question: "Nested HTML Elements are allowed in HTML?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, Nested HTML Elements (< p>< b>< u>Some text< /u>< /b>< /p>) are allowed in HTML.",
  },
  {
    question: "Is HTML a case sensitive?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
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
    question:
      "Which tag is used to display a horizontal rule (horizontal line)?",
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
    explanation:
      "Both < hr> and < hr /> can be used to display a horizontal line.",
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
    explanation:
      "The style attribute is used to define the styles of an element.",
  },
  {
    question:
      "Which is the correct HTML statement to define the red color of the paragraph text?",
    options: {
      A: '< p style="color: #ff0000;">',
      B: '< p style="color: red;">',
      C: "Both A. and B.",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      'The correct HTML statement to define red paragraph color is: < p style="color: #ff0000;"> or < p style="color: red;">.',
  },
  {
    question:
      "Which HTML tag is used to define bold text, without any extra importance?",
    options: {
      A: "< strong>",
      B: "< bold>",
      C: "< bolder>",
      D: "< b>",
    },
    answer: "D",
    explanation:
      "The HTML < b> tag is used to define bold text, without any extra importance.",
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
    explanation:
      "The HTML tag < strong> is used to define text with strong importance.",
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
    explanation:
      "The HTML tag < mark> is used to define marked or highlighted text.",
  },
  {
    question:
      "Which HTML tag is used to define strike a line through deleted text?",
    options: {
      A: "< delete>",
      B: "< del>",
      C: "< deleted>",
      D: "< through>",
    },
    answer: "B",
    explanation:
      "The HTML tag < del> is used to define strike a line through deleted text.",
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
    explanation:
      "The HTML tags < ins> and < u> are used to define underline inserted text.",
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
    question:
      "Which is the correct HTML statement to display H<sub>2</sub>O in a paragraph?",
    options: {
      A: "< p>H< sup>2< /sup>O< /p>",
      B: "< p>H< ins>2< /ins>O< /p>",
      C: "< p>H< below>2< /below>O< /p>",
      D: "< p>H< sub>2< /sub>O< /p>",
    },
    answer: "D",
    explanation:
      "The correct HTML statement to display H2O in a paragraph is: < p>H< sub>2< /sub>O< /p>",
  },
  {
    question:
      "Which is the correct HTML statement to display HelloWorld in a paragraph?",
    options: {
      A: "< p>Hello< sup>World< /sup>< /p>",
      B: "< p>Hello< top>World< /top>< /p>",
      C: "< p>Hello< sub>World< /sub>< /p>",
      D: "< p>Hello< above>World< /above>< /p>",
    },
    answer: "A",
    explanation:
      "The correct HTML statement to display HelloWorld in a paragraph is: < p>Hello< sup>World< /sup>< /p>",
  },
  {
    question:
      "Which is the correct HTML statement to display HelloHi! in a paragraph?",
    options: {
      A: "< p>< del>Hello< /del>< ins>Hi!< /ins>< /p>",
      B: "< p>< strike>Hello< /strike>< ins>Hi!< /ins>< /p>",
      C: "< p>< cut>Hello< /cut>< ins>Hi!< /ins>< /p>",
      D: "All of the above",
    },
    answer: "A",
    explanation:
      "The correct HTML statement to display HelloHi! in a paragraph is/are: < p>< del>Hello< /del>< ins>Hi!< /ins>< /p> < p>< strike>Hello< /strike>< ins>Hi!< /ins>< /p>",
  },
  {
    question:
      "Which is the correct HTML statement to display Hello codingquizz in a paragraph?",
    options: {
      A: "< p>Hello < mark>codingquizz< /mark>< /p>",
      B: "< p>Hello< mark>codingquizz< /mark>< /p>",
      C: "< p>Hello < span>codingquizz< /span>< /p>",
      D: "< p>Hello< span>codingquizz< /span>< /p>",
    },
    answer: "B",
    explanation:
      "The correct HTML statement to display Hello codingquizz in a paragraph is: < p>Hello< mark>codingquizz< /mark>< /p>",
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
    explanation:
      "The HTML tag < abbr> is used to define an abbreviation or an acronym.",
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
    explanation:
      'The correct HTML syntax of < abbr> tag is: < abbr title="abbreviation or acronym">Text< /abbr>',
  },
  {
    question:
      "What HTML tag is used to define the contact information for the author/owner of a document or an article?",
    options: {
      A: "< contact>",
      B: "< authorinfo>",
      C: "< address>",
      D: "< addr>",
    },
    answer: "C",
    explanation:
      "The HTML tag < address> is used to define the contact information for the author/owner of a document or an article.",
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
    explanation:
      "The HTML tag < bdo> is used to override the current text direction.",
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
    explanation:
      'The correct syntax to create a hyperlink is: < a href="url">link text< /a>',
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
    explanation:
      "The href attribute of the < a> tag is most important, which indicates the link's destination.",
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
    explanation:
      "The “target” attribute specifies where to open the linked document.",
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
    explanation:
      "The HTML tag < img> is used to embed an image in an HTML document.",
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
    explanation:
      'The correct syntax of < img> tag is/are: < img src="url" alt="alternatetext" /> We can also use: < img src="url"> or < img src="url" alt="alternatetext">',
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
    explanation:
      "The alternate attribute specifies an alternate text for the image.",
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
    explanation:
      "The HTML tag < dl> ... < /dl> is used to define description lists.",
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
    question:
      "Which attribute is often used to point to a class name in a style sheet?",
    options: {
      A: "style",
      B: "css",
      C: "src",
      D: "class",
    },
    answer: "D",
    explanation:
      "The class attribute is often used to point to a class name in a style sheet.",
  },
  {
    question:
      "Which attribute is used to specify a unique id for an HTML element?",
    options: {
      A: "style",
      B: "css",
      C: "id",
      D: "class",
    },
    answer: "C",
    explanation:
      "The HTML id attribute is used to specify a unique id for an HTML element.",
  },
  {
    question: "Can we use class name with multiple HTML elements?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "Yes, we can use class name with multiple HTML elements.",
  },
  {
    question: "Can we use id attribute with multiple HTML elements?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
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
    explanation:
      'The correct syntax for < iframe> tag is: < iframe src="url" title="description">< /iframe>',
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
    explanation:
      "The HTML tag < form> is used to create an HTML form for user input.",
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
    explanation:
      'The HTML tag < input type="text"> is used to display a single-line input field.',
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
    explanation:
      'The HTML tag < input type="radio"> is used to display a radio button.',
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
    explanation:
      'The HTML tag < input type="checkbox"> is used to display a checkbox.',
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
    explanation:
      'The HTML tag < input type="submit"> is used to display a submit button.',
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
    explanation:
      'The HTML tag < input type="button"> is used to display a clickable button.',
  },
  {
    question:
      "Which input type reset defines a reset button that will reset all form values to their default values?",
    options: {
      A: "clear",
      B: "clear:both",
      C: "reset",
      D: "refresh",
    },
    answer: "C",
    explanation:
      'The reset input type reset defines a reset button that will reset all form values to their default values. Here is the syntax, < input type="reset">',
  },
];

const cssQ: Question[] = [
  {
    question: "What is CSS stands for?",
    options: {
      A: "Cascading Style Sheets",
      B: "Cascade Style Sheet",
      C: "Color Style Sheets",
      D: "Color Style Sheet",
    },
    answer: "A",
    explanation:
      "The full form of the CSS is Cascading Style Sheets. Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
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
    explanation:
      "CSS describes how HTML elements are to be displayed on screen, paper, or in other media.",
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
    explanation:
      'The correct syntax to include (refer) an external CSS in an HTML document is, < link rel="stylesheet" type="text/css" href="mystyle.css">',
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
    explanation:
      "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them.",
  },
  {
    question:
      "In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
    options: {
      A: "Selector",
      B: "Attribute",
      C: "Property",
      D: "Tag",
    },
    answer: "A",
    explanation:
      'In a CSS rule, the HTML element(s) for them we are writing the CSS is known as "CSS Selector".',
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
    explanation:
      "Internal styles are defined within the < style> element, inside the < head> section of an HTML page.",
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
    explanation:
      "Inline styles are defined within the style attribute of the relevant element.",
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
    explanation:
      "A CSS comment is placed inside the < style> element, and starts with /* and ends with */.",
  },
  {
    question: "Can comments also span multiple lines?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
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
    explanation:
      "The background-color property is used to define the background color in CSS.",
  },
  {
    question:
      "From the given options which is/are the valid way to represent a color?",
    options: {
      A: 'A valid color name like "blue"',
      B: 'HEX code like "#0000ff"',
      C: 'RGB Value like "rgb(0,0,255)',
      D: "All of the above",
    },
    answer: "D",
    explanation:
      "All of the given options are valid to define/represent the color name.",
  },
  {
    question:
      "Which property is used to define the font of the element's text?",
    options: {
      A: "font",
      B: "font-family",
      C: "font-style",
      D: "All of the above",
    },
    answer: "B",
    explanation:
      "The font-family property is used to define the font of the element's text.",
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
    explanation:
      "The font-style property is used to define the font style i.e., to make the text bold. To make the text italic, italic value is used.",
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
    explanation:
      "The following are the valid values of the font-style property, inherit, italic, normal, oblique",
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
    explanation:
      "The font-weight property sets how thick or thin characters in text should be displayed.",
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
    explanation:
      "The valid values of the font-wight property: normal, bold, bolder, lighter, initial, inherit",
  },
  {
    question:
      "Which is the correct inline CSS for p tag to define paragraph's text and background colors?",
    options: {
      A: '< p css="color: red; background-color: yellow;">',
      B: '< p cssstyle="color: red; background-color: yellow;">',
      C: '< p inline="color: red; background-color: yellow;">',
      D: '< p style="color: red; background-color: yellow;">',
    },
    answer: "D",
    explanation:
      'The correct inline CSS style is, < p style="color: red; background-color: yellow;">Paragraph Text.< /p>',
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
    explanation:
      "The correct syntax to define element's border using the border property border: border-width border-style border-color",
  },
  {
    question:
      "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    options: {
      A: "a {text-decoration : underline;}",
      B: "a {text-decoration : none;}",
      C: "a {text-decoration : block;}",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "The correct syntax to display the hyperlinks without any underline is, a {text-decoration : none;}",
  },
  {
    question:
      "Which of the following is the correct syntax to remove the underline on hyperlinks and visited hyperlinks?",
    options: {
      A: "a {text-decoration : underline;}, a:visited {text-decoration : underline;}",
      B: "a {text-decoration : block;}, a:visited {text-decoration : block;}",
      C: "a {text-decoration : none;}, a:visited {text-decoration : none;}",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      "The correct syntax to display the hyperlinks without any underline is, a {text-decoration : none;}, a:visited {text-decoration : none;}",
  },
  {
    question:
      "Which CSS property is used to style the hyperlinks on hover (Mouse over)?",
    options: {
      A: "a:mouseover",
      B: "a:move",
      C: "a:mover",
      D: "a:hover",
    },
    answer: "D",
    explanation:
      "The a:hover property is used to define the style on mouse over event, a:hover{ // styles }",
  },
  {
    question:
      "If you want to use a green dotted border around an image, which CSS property is used for that?",
    options: {
      A: "border-style",
      B: "border-color",
      C: "border-decoration",
      D: "Both A. and B.",
    },
    answer: "D",
    explanation:
      "Two properties border-style and border-color are used to define a green dotted border around an image.",
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
    explanation:
      "text-align property with value center is used to center an elements.",
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
    explanation:
      "The valid values of text-align property are, left, center, right, justify",
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
    explanation:
      "The text-align:justify property stretches the lines so that each line has equal width.",
  },
  {
    question:
      "Which CSS property is used to specify the indentation of the first line of a text?",
    options: {
      A: "text-align",
      B: "padding-left",
      C: "margin-left",
      D: "text-indent",
    },
    answer: "D",
    explanation:
      "The text-indent property is used to specify the indentation of the first line of a text.",
  },
  {
    question:
      "Which CSS property is used to specify the space between the characters in a text?",
    options: {
      A: "text-space",
      B: "letter-space",
      C: "letter-spacing",
      D: "letter-distance",
    },
    answer: "C",
    explanation:
      "The letter-spacing property is used to specify the space between the characters in a text.",
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
    explanation:
      "The line-height property is used to specify the space between lines.",
  },
  {
    question:
      "Which CSS property is used to specify the space between the words in a text?",
    options: {
      A: "word-spacing",
      B: "word-padding",
      C: "word-height",
      D: "characters-spacing",
    },
    answer: "A",
    explanation:
      "The word-spacing property is used to specify the space between the words in a text.",
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
    question:
      "Which CSS property is used to specify uppercase and lowercase letters in a text?",
    options: {
      A: "text-transform",
      B: "text-case",
      C: "case",
      D: "text-casing",
    },
    answer: "A",
    explanation:
      "The text-transform property is used to specify uppercase and lowercase letters in a text.",
  },
  {
    question:
      "Which is the correct CSS statement to capitalize the first letter of each word?",
    options: {
      A: "text-transform: uppercase",
      B: "text-transform: capitalize",
      C: "text-transform: sentence",
      D: "Both A. and B.",
    },
    answer: "B",
    explanation:
      "The correct CSS statement is to capitalize the first letter of each word, text-transform: capitalize;",
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
    explanation:
      "The valid values of text-transform property are, uppercase, lowercase, and capitalize",
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
    explanation:
      "The valid values of text-decoration property are, overline, line-through, underline, and none",
  },
  {
    question:
      "Which CSS property specifies how to align the last line of a text?",
    options: {
      A: "text-align",
      B: "last-text-align",
      C: "text-align-last-line",
      D: "text-align-last",
    },
    answer: "D",
    explanation:
      "The text-align-last property specifies how to align the last line of a text.",
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
    explanation:
      "The vertical-align property sets the vertical alignment of an element.",
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
    explanation:
      "The valid values of vertical-align property are, baseline, text-top, text-bottom, sub, and super",
  },
  {
    question:
      "Which is the correct CSS statement to define multiple font families?",
    options: {
      A: 'font: "Times New Roman", Times, serif;',
      B: 'font-name: "Times New Roman", Times, serif;',
      C: 'font-family: "Times New Roman, Times, serif";',
      D: 'font-family: "Times New Roman", Times, serif;',
    },
    answer: "D",
    explanation:
      'The correct CSS statement to define multiple font families is, font-family: "Times New Roman", Times, serif;',
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
    explanation:
      "The list-style-type property specifies the type of list item marker.",
  },
  {
    question:
      "Which is the correct CSS statement is used to remove the markers/bullets?",
    options: {
      A: "list-style: none;",
      B: "list-style-type: 0;",
      C: "list-style-type: blank;",
      D: "list-style-type: none;",
    },
    answer: "D",
    explanation:
      "The correct CSS statement is used to remove the markers/bullets: ul { list-style-type: none; }",
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
    explanation:
      "The list-style-image property specifies an image as the list item marker.",
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
    explanation:
      "The display property specifies if/how an element is displayed.",
  },
  {
    question:
      "Which CSS property specifies the type of positioning method used for an element?",
    options: {
      A: "positions",
      B: "text-position",
      C: "positioning",
      D: "position",
    },
    answer: "D",
    explanation:
      "The position property specifies the type of positioning method used for an element.",
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
    explanation:
      "The valid values for position property are, static, relative, fixed, absolute, and sticky.",
  },
  {
    question:
      "Which CSS property specifies the opacity/transparency of an element?",
    options: {
      A: "transparency",
      B: "opacity",
      C: "transform-opacity",
      D: "opacity-all",
    },
    answer: "B",
    explanation:
      "The opacity property specifies the opacity/transparency of an element.",
  },
  {
    question:
      "Which CSS function performs a calculation to be used as the property value?",
    options: {
      A: "sum()",
      B: "add()",
      C: "calc()",
      D: "addition()",
    },
    answer: "C",
    explanation:
      "The calc() function performs a calculation to be used as the property value.",
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
    explanation:
      "CSS can be added to HTML in three different ways: 1. By using style attribute inside < body> tag. 2. By using < style> tag inside the < head> section of HTML. 3. By creating an external CSS file and linking this file using < link> tag in HTML.",
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
    explanation:
      "In Internal CSS, we add CSS using < style>, which is an HTML tag.",
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
    explanation:
      "Yes, we can link multiple stylesheets to a single page. You just have to add the < link> element for each stylesheet.",
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
    explanation:
      "The font and font-size CSS properties are used to change the font size. Font size is one of the longhand properties of the font.",
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
    explanation:
      "In the given line of code, p is the selector. Selectors target HTML elements that we want to style. Here, the border is a CSS property and 2px solid blue is the property value.",
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
    explanation:
      "CSS3 has 140 color names available which are supported by all the browsers.",
  },
  {
    question:
      "The ___ property is used in the positioning of the background image.",
    options: {
      A: "background-image",
      B: "background-position",
      C: "padding",
      D: "All of the above",
    },
    answer: "B",
    explanation:
      "As the name suggests, the background-position property specifies the position of the background image.",
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
    explanation:
      "All four units refer to the unit of length. 4em means 4 times the size of the current font which is relative to the font size of the element.",
  },
  {
    question:
      "Amongst the following browsers, which browser supports almost all the CSS properties?",
    options: {
      A: "Firefox",
      B: "Safari",
      C: "Google Chrome",
      D: "Opera",
    },
    answer: "C",
    explanation:
      "Both Google Chrome and Microsoft Edge support almost all the CSS properties.",
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
    explanation:
      "We use CSS Entities to display all the characters. There are different entities for different characters. For this character '#', CSS Entity is 0023.",
  },
  {
    question:
      "This selector selects all the < h> elements where the parent is a < div> element.",
    options: {
      A: "h + p",
      B: "h > p",
      C: "p.h",
      D: "p > h",
    },
    answer: "B",
    explanation:
      "This is an element>element selector in which operand on the left side of child combinator (>) is the parent and operand on the right side is the child element.",
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
    explanation:
      "The ::marker selector targets the list markers of list items.",
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
    explanation:
      "Arial (sans-serif) is the most widely used font on web pages.",
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
    explanation:
      "We can add animation and transitions to all these three properties. To add animations, we apply animation property.",
  },
  {
    question:
      "We can give space between unit and value when assigning length values to CSS properties.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "False - If you give a space between unit and value, the property won't be injected in div.",
  },
  {
    question:
      "Which of these units of length is supported by Chrome Version 1.0?",
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
    question:
      "Which line of code is a must to write to apply CSS Flexbox properties?",
    options: {
      A: "display: flex;",
      B: "display: flexbox;",
      C: "display: block;",
      D: "flex-direction: row;",
    },
    answer: "A",
    explanation:
      "If you want to apply CSS Flexbox properties, you need to set the display to flex first.",
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
    explanation:
      "The justify-content property is one of the CSS Flexbox properties. Its default value is flex-start.",
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
    explanation:
      "The correct syntax for adding animation is: animation: name duration timing-function",
  },
  {
    question:
      "Which line of code specifies playing an animation with the same speed from beginning to the end?",
    options: {
      A: "div {animation- timing function: linear;}",
      B: "div {animation- timing function: ease in;}",
      C: "div {animation- play- state: paused;}",
      D: "div {animation- fill-mode: both;}",
    },
    answer: "A",
    explanation:
      "We use the animation- timing- function property to define the time an animation uses to change from one set of CSS styles to another. When we set its value to linear, the animation will have the same speed from start to end.",
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
    explanation:
      "Syntax for Universal selector is: *{CSS property}. This selector selects all the HTML elements on the page.",
  },
  {
    question:
      "Which of the following properties specify the width of the borders?",
    options: {
      A: "border-width",
      B: "border-style",
      C: "border",
      D: "Both A and C",
    },
    answer: "D",
    explanation:
      "Both border and border-width properties specify the width of the borders. The border property is a shorthand property for border-width, border-style, and border-color.",
  },
  {
    question: "Is border-image property animatable?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "The border-image property is not animatable. We cannot use this property in defining animations and transitions.",
  },
  {
    question:
      "What value is set to border: collapse property to define borders around each cell? (Refer to the image)",
    options: {
      A: "collapse",
      B: "separate",
      C: "initial",
      D: "inherit",
    },
    answer: "B",
    explanation:
      "When we set the value of border:collapse property to separate, each cell will display its borders.",
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
    explanation:
      "When we set the cursor property value to wait, the cursor indicates that the program is busy.",
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
    explanation:
      "All the < p> elements are displayed as a block-level flex container.",
  },
  {
    question:
      "The text-align property defines the ___ alignment of text in an element.",
    options: {
      A: "horizontal",
      B: "vertical",
      C: "both horizontal & vertical",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "The text-align property specifies the horizontal alignment of the text.",
  },
  {
    question: "Does the z-index property accept negative values?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The z-index property accepts both negative and positive values.",
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
    explanation:
      "The viewport property is not supported by Firefox. Chrome and Microsoft Edge support this.",
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
    explanation:
      "External stylesheets are stored in CSS files and we can link those files in HTML using the < link> tag.",
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
    explanation:
      "The id selector uses the id attribute of an HTML element to select a specified element.",
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
    explanation:
      "Hex codes are three-byte hexadecimal numbers that are used to identify color in HTML/CSS.",
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
    explanation:
      "HSL stands for hue, saturation, lightness. In CSS, we can specify color using the HSL value.",
  },
  {
    question:
      "Among the following CSS properties, which property is not a shorthand property?",
    options: {
      A: "background",
      B: "padding",
      C: "display",
      D: "border",
    },
    answer: "C",
    explanation:
      "The display property is not a shorthand property. It has only one property value.",
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
    explanation:
      "The alt attribute is used to provide alternative information for an image if a user fails to view an image on the webpage and also it tells us something related to the image.",
  },
  {
    question:
      "The CSS border property specifies the style, color, and ___ of an element's border.",
    options: {
      A: "length",
      B: "size",
      C: "width",
      D: "area",
    },
    answer: "C",
    explanation:
      "The CSS border properties specify the style, color, and width of an element's border. The border property is a shorthand property for border-width, border-style, and border-color.",
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
    explanation:
      "This line of code specifies top and bottom paddings are '50px' & 'right' and left paddings are '20px'.",
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
    explanation:
      "If we don't specify a font size, the default size for normal texts is '16px' or '1em'.",
  },
];

const jsQ: Question[] = [
  {
    question: `What will be the output of the following JavaScript code?\n <script>\n\tlet str = \"codingquizz\";\n\tdocument.getElementById(\"test\").innerHTML = str.length;\n<\/script>`,
    options: {
      A: "11",
      B: "12",
      C: "ValueError",
      D: "SyntaxError",
    },
    answer: "A",
    explanation:
      "The output of the above statement will be the length of the string. That is 11.",
  },
  {
    question: "JavaScript is the programming language of the _____.",
    options: {
      A: "Desktop",
      B: "Mobile",
      C: "Web",
      D: "Server",
    },
    answer: "C",
    explanation: "JavaScript is the programming language of the Web.",
  },
  {
    question: "Which type of JavaScript language is _____?",
    options: {
      A: "Object-oriented",
      B: "Object-based",
      C: "Functional programming",
      D: "All of the above",
    },
    answer: "B",
    explanation: "JavaScript is an object-based programming language.",
  },
  {
    question:
      "Which of the following statement(s) is true about the JavaScript?",
    options: {
      A: "It is a scripting language used to make the website interactive",
      B: "It is an advanced version of Java for Desktop and Mobile application development",
      C: "It is a markup language of Java to develop the webpages",
      D: "All of the above",
    },
    answer: "A",
    explanation:
      'The correct statement about the JavaScript programming language is "It is a scripting language used to make the website interactive".',
  },
  {
    question: "In which HTML element, we put the JavaScript code?",
    options: {
      A: "< javascript>...< /javascript>",
      B: "< js>...< /js>",
      C: "< script>...< /script>",
      D: "< css>...< /css>",
    },
    answer: "C",
    explanation:
      "The JavaScript code is written inside the < script>...< /script> tag/element.",
  },
  {
    question: "JavaScript code can be written in ____.",
    options: {
      A: "JavaScript file (.js file)",
      B: "HTML document directly",
      C: "JavaScript file and in HTML document directly",
      D: "In style sheets (.css file)",
    },
    answer: "C",
    explanation:
      "JavaScript code can be written in the JavaScript file and in HTML document directly.",
  },
  {
    question: "Which symbol is used separate JavaScript statements?",
    options: {
      A: "Comma (,)",
      B: "Colon (:)",
      C: "Hyphen (_)",
      D: "Semicolon (;)",
    },
    answer: "D",
    explanation:
      "The semicolon (;) is used to separate the JavaScript statements.",
  },
  {
    question: "JavaScript ignores?",
    options: {
      A: "newlines",
      B: "tabs",
      C: "spaces",
      D: "All of the above",
    },
    answer: "D",
    explanation:
      "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code.",
  },
  {
    question:
      "Which is the correct syntax to call an external JavaScript file in the current HTML document?",
    options: {
      A: '< script src="jsfile.js">< /script>',
      B: '< script href=" jsfile.js">< /script>',
      C: '< import src=" jsfile.js">< /import>',
      D: '< script link=" jsfile.js">< /script>',
    },
    answer: "A",
    explanation:
      'The correct syntax to call an external JavaScript file in the current HTML document is: < script src="jsfile.js">< /script>',
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by id?",
    options: {
      A: "getElementById()",
      B: "getElement(id)",
      C: "getElementById(id)",
      D: "elementById(id)",
    },
    answer: "C",
    explanation:
      "The JavaScript method document.getElementById(id) is used to access an HTML document by id.",
  },
  {
    question:
      "Which property is used to define the HTML content to an HTML element with a specific id?",
    options: {
      A: "innerText",
      B: "innerContent",
      C: "elementText",
      D: "innerHTML",
    },
    answer: "D",
    explanation: "The innerHTML is the property that defined HTML content.",
  },
  {
    question: "Which JavaScript method is used to write HTML output?",
    options: {
      A: "document.write()",
      B: "document.output()",
      C: "console.log()",
      D: "document.writeHTML()",
    },
    answer: "A",
    explanation:
      "The JavaScript method document.write() defines the HTML output.",
  },
  {
    question: "Which JavaScript method is used to write on browser's console?",
    options: {
      A: "console.write()",
      B: "console.output()",
      C: "console.log()",
      D: "console.writeHTML()",
    },
    answer: "C",
    explanation:
      "The JavaScript method console.log() is used to write on browser's console.",
  },
  {
    question: "Which JavaScript method is used to write into an alert box?",
    options: {
      A: "window.alertHTML()",
      B: "window.alert()",
      C: "window.alertBox()",
      D: "window.alertContent()",
    },
    answer: "B",
    explanation:
      "The JavaScript method window.alert() is used to write into an alert box.",
  },
  {
    question:
      'Which is the correct JavaScript statement to display "Hello Boss!" into an alert box?',
    options: {
      A: 'alert("Hello Boss!");',
      B: "alert('Hello Boss!');",
      C: "alert(Text:'Hello Boss!');",
      D: "Both A. and B.",
    },
    answer: "D",
    explanation:
      'Both of these statements are correct to display "Hello Boss!" into an alert box: window.alert("Hello Boss!"); window.alert(\'Hello Boss!\');',
  },
  {
    question:
      "Which is the correct JavaScript statement to print the addition of two numbers 10 and 20 in a paragraph whose id is 'result'?",
    options: {
      A: 'getElementById("result").innerHTML = 10+20;',
      B: 'getElementById("result").innerHTML = "10+20";',
      C: 'getElementById("#result").innerHTML = 10+20;',
      D: "All of the above",
    },
    answer: "A",
    explanation:
      'The correct JavaScript statement to print the addition of two numbers 10 and 2o in a paragraph whose id is "result" is: document.getElementById("result").innerHTML = 10+20;',
  },
  {
    question:
      'What is the use of this JavaScript statement?\n\n< button onclick="window.print()">Submit< /button>',
    options: {
      A: 'It will write "Submit" on the current Window',
      B: "It will print the content of the current page",
      C: "It will write the content of the current page in the browser’s console",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "The window.print() method prints the content of the current page.",
  },
  {
    question: "In JavaScript, single line comment begins with ___.",
    options: {
      A: "#",
      B: "/*",
      C: "$",
      D: "//",
    },
    answer: "D",
    explanation: "In JavaScript, single line comment begins with //.",
  },
  {
    question:
      "In JavaScript, multi-line comments start with __ and end with ___.",
    options: {
      A: "/* and */",
      B: "< !-- and -->",
      C: "## and ##",
      D: "// and //",
    },
    answer: "A",
    explanation:
      "In JavaScript, multi-line comments start with /* and end with */.",
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: {
      A: "Var",
      B: "var",
      C: "Let",
      D: "All of the above",
    },
    answer: "B",
    explanation: "The var keyword defines a variable in JavaScript.",
  },
  {
    question:
      "How many keywords are there in JavaScript to declare variables or constants?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    answer: "C",
    explanation:
      "There are 3 ways / keywords to declare variables or constants, those are: var, let, const",
  },
  {
    question:
      "What is the main difference between var and let keywords in JavaScript?",
    options: {
      A: "var defines a variable while let defines a constant",
      B: "var defined function scoped variable while let define block scoped variable",
      C: "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
      D: "All of the above",
    },
    answer: "B",
    explanation:
      "The var and let keywords are both used for variable declaration in JavaScript. But, the main difference between them is that var defines function scoped variable while let defines block-scoped variable.",
  },
  {
    question: "The const keyword is used to define a ______.",
    options: {
      A: "Function scoped variable",
      B: "Block scoped variable",
      C: "Constant",
      D: "Constant with no initial value",
    },
    answer: "C",
    explanation: "The const keyword is used to define a constant.",
  },
  {
    question:
      "Which is the correct syntax to declare a constant in JavaScript?",
    options: {
      A: "const constant_name;",
      B: "constant_name const;",
      C: "constant_name const = value;",
      D: "const constant_name = value;",
    },
    answer: "D",
    explanation:
      "The correct syntax to declare a constant is: const constant_name = value;",
  },

  {
    question: "What is the default value of an uninitialized variable?",
    options: {
      A: "0",
      B: "undefined",
      C: "null",
      D: "NaN",
    },
    answer: "B",
    explanation: "The default value of an uninitialized variable is undefined.",
  },
  {
    question: "Can be redeclare a variable that is declared with var keyword?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can redeclare variable that is declared with var keyword.",
  },
  {
    question: "Can be redeclare a variable that is declared with let keyword?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "No, we cannot redeclare variable that is declared with let keyword.",
  },
  {
    question: "Which is the exponentiation operator in JavaScript?",
    options: {
      A: "exp()",
      B: "^",
      C: "**",
      D: "pow",
    },
    answer: "C",
    explanation:
      "The exponentiation operator in JavaScript is ** which is used to calculate the result of first operand's to the power of the second operators i.e., x**y = x to the power of y (xy).",
  },
  {
    question:
      "Does JavaScript support increment (++) and decrements (--) Operators?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, JavaScript supports increment (++) and decrements (--) operators.",
  },
  {
    question: "JavaScript types are _____.",
    options: {
      A: "Static",
      B: "Dynamic",
    },
    answer: "B",
    explanation:
      "JavaScript types are dynamic, which means the same variable can be used to store the different types of values.",
  },
  {
    question: "JavaScript arrays are written with _____.",
    options: {
      A: "round brackets ()",
      B: "curly brackets {}",
      C: 'double quotes ""',
      D: "square brackets []",
    },
    answer: "D",
    explanation: "JavaScript arrays are written with square brackets [].",
  },
  {
    question: "JavaScript objects are written with _____.",
    options: {
      A: "round brackets ()",
      B: "curly brackets {}",
      C: 'double quotes ""',
      D: "square brackets []",
    },
    answer: "B",
    explanation: "JavaScript objects are written with curly brackets {}.",
  },
  {
    question:
      "Which JavaScript operator is used to determine the type of a variable?",
    options: {
      A: "typeof",
      B: "TypeOf",
      C: "typeOf",
      D: "sizeof",
    },
    answer: "A",
    explanation:
      "The typeof operator is used to determine the type of a variable.",
  },
  {
    question: "Which is the correct syntax of JavaScript typeof operator?",
    options: {
      A: "typeof variable/value",
      B: "typeof(variable/value)",
      C: "Both A. and B.",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      "Both of the syntaxes can be used for JavaScript typeof operator.",
  },

  {
    question: "Which keyword is used to define a JavaScript function?",
    options: {
      A: "module",
      B: "fun",
      C: "func",
      D: "function",
    },
    answer: "D",
    explanation:
      "The function keyword is used to define the JavaScript function.",
  },
  {
    question: "Which is the correct syntax for the function definition?",
    options: {
      A: "return_type function function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
      B: "function function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
      C: "return_type function_name(parameter1, parameter2, ...) { /*Function's body*/ }",
      D: "function function_name(parameter1, parameter2, ...) as return_type { /*Function's body*/ }",
    },
    answer: "B",
    explanation:
      "The function definition syntax is:\n\nfunction function_name(parameter1, parameter2, ...)\n{ \n\t/*Function's body*/ \n}",
  },
  {
    question: "Can we use a function as a variable value?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "Yes, a function can be used as a variable value.",
  },
  {
    question:
      "In JavaScript a variable contains one value while an object may contain ___.",
    options: {
      A: "One value",
      B: "Two values",
      C: "Three values",
      D: "Many values",
    },
    answer: "D",
    explanation:
      "In JavaScript a variable contains one value while an object may contain many values.",
  },
  {
    question:
      "Which is the correct syntax to access an object property in JavaScript?",
    options: {
      A: "objectName:propertyName",
      B: "objectName.propertyName",
      C: 'objectName["propertyName"]',
      D: "Both B. and C.",
    },
    answer: "D",
    explanation:
      'The properties of an object can we accessed using either objectName.propertyName or objectName["propertyName"].',
  },
  {
    question:
      "Which property is used to get the length of a string in JavaScript?",
    options: {
      A: "strlen",
      B: "len",
      C: "length",
      D: "Length",
    },
    answer: "C",
    explanation:
      "The length property is used to get the length of a string in JavaScript.",
  },
  {
    question: `What will be the output of the following JavaScript code?\n <script>\n\tlet str = \"codingquizz\";\n\tdocument.getElementById(\"test\").innerHTML = str.length;\n<\/script>`,
    options: {
      A: "11",
      B: "12",
      C: "ValueError",
      D: "SyntaxError",
    },
    answer: "A",
    explanation:
      "The output of the above statement will be the length of the string. That is 11.",
  },
  {
    question:
      "Which character is used to break up a code line within a text string in JavaScript?",
    options: {
      A: "Single quote (')",
      B: "Single backslash (\\)",
      C: 'Double quote (")',
      D: "Tipple single quote (''')",
    },
    answer: "B",
    explanation:
      "The Single backslash (\\) is used to break up a code line within a text string in JavaScript.",
  },
  {
    question:
      'Will the following JavaScript code work?\n\n< script>\n\tdocument.getElementById("test").innerHTML = \\\n\t"Hello, codingquizz!";\n< /script>',
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "No, the above code will not work. Because, we cannot breakup a JavaScript code line with single backslash (\\).",
  },
  {
    question:
      "Which is the correct JavaScript statement to define string as object?",
    options: {
      A: 'var s = new String("codingquizz!")',
      B: 'var s = String("codingquizz!")',
      C: 'var s = "codingquizz!"',
    },
    answer: "A",
    explanation:
      'The strings can also be defined as an object using the new keyword. The correct JavaScript statement to define a string as an object is: var s = new String("codingquizz!")',
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n <script>\n\tlet str1 = new String("codingquizz!");\n\tlet str2 = new String("codingquizz!");\n\tdocument.getElementById("test").innerHTML = (str1==str2);\n</script>',
    options: {
      A: "true",
      B: "false",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "In the above code, str1 and str2 are objects. In JavaScript, comparison of two objects returns false.",
  },
  {
    question:
      "Which is/are the valid JavaScript method(s) to extract string parts?",
    options: {
      A: "slice(start, end)",
      B: "substring(start, end)",
      C: "substr(start, length)",
    },
    answer: "D",
    explanation:
      "The all of the above JavaScript methods can be used to extract string parts.",
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n  <script>\n    let x = "Hello, codingquizz!";\n    document.getElementById("test").innerHTML = x.slice(-13,-1);\n</script>',
    options: {
      A: "codingquizz!",
      B: "codingquizz",
      C: "ValueError",
      D: "Hello,",
    },
    answer: "B",
    explanation:
      'The negative value counts from the end of the string. Thus, the output will be "codingquizz".',
  },
  {
    question:
      'In JavaScript, the string template literals use ____ rather than the quotes ("") to define a string?',
    options: {
      A: "Single quotes (')",
      B: "Backslash with single quote (\\’'\\')",
      C: "Backslashes (\\\\)",
      D: "Back-ticks (``)",
    },
    answer: "D",
    explanation:
      'In JavaScript, the string template literals use back-ticks (``) rather than the quotes ("") to define a string.',
  },
  {
    question:
      'Does the following JavaScript variable definition is correct?\n\nlet x = `I\'m "David!"`;',
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The JavaScript variable definition statement is true. Because, with the JavaScript template literals, we can use both single and double quotes inside a string.",
  },
  {
    question: "Which JavaScript method is used to get a number as a string?",
    options: {
      A: "toString()",
      B: "intToString()",
      C: "parseInteger()",
    },
    answer: "A",
    explanation:
      "The JavaScript method toString() is used to get a number as a string.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n <script>\n    const myArray = ['h', 'e', 'l', 'l', 'o'];\n    document.write(myArray[0]);\n    document.write(myArray[1]);\n</script>",
    options: {
      A: "he",
      B: "undefinedh",
      C: "ValueError",
      D: "TypeError",
    },
    answer: "A",
    explanation:
      "In JavaScript, the array indexing starts with 0. Thus, the above statement will print 'h' and 'e'.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n <script>\n    let cars = ['Honda', 'Hyundai'];\n    cars.push('Mahindra');\n    document.write(typeof cars + ' ' + cars);\n</script>",
    options: {
      A: "array Honda,Hyundai,Mahindra",
      B: "string Honda,Hyundai,Mahindra",
      C: "object Honda,Hyundai,Mahindra",
      D: 'object "Honda", "Hyundai", "Mahindra"',
    },
    answer: "C",
    explanation:
      "The push() method pushes an element at the end of the array. And, typeof returns the type of the object. Here, cars is an array.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n <script>\n    let cars1 = ['Honda', 'Hyundai'];\n    let cars2 = cars1;\n    cars1.push('Mahinda');\n    document.write(cars1 + '---' + cars2);\n</script>",
    options: {
      A: "Honda,Hyundai,Mahinda---Honda,Hyundai",
      B: "Honda,Hyundai,Mahinda---Honda,Hyundai,Mahinda",
      C: "Honda,Hyundai ---Honda,Hyundai",
      D: "[Honda,Hyundai,Mahinda]---[Honda,Hyundai,Mahinda]",
    },
    answer: "B",
    explanation:
      "In JavaScript, the arrays are objects, and the array elements are stored by reference. Hence, changes in the copied array reflect in the original array. Thus, the values of cars1 and cars2 are the same.",
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n <script>  \n\tvar msgs=new Array("Hello","Hey","Morning!");  \n\n\tfor (i=0;i<msgs.length;i++){  \n\t\tdocument.write(msgs[i] + \' | \');  \n\t}\n</script>',
    options: {
      A: "Hello | Hey | Morning! |",
      B: "Hello | Hey |",
      C: "ValueError",
      D: "TypeError",
    },
    answer: "A",
    explanation:
      "In the above JavaScript code, the array is declared using the new operator and all elements are printing using the loop. Thus, the output would be 'Hello | Hey | Morning! |'.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n <script>\n\tvar values = [10, 20, 30, 40];\n\t\n\tvar result = values.reduceRight(function(x,y){\n\t\treturn (x + y);\n\t});\n\t\n\tdocument.write('Result: ' + result);\n</script>",
    options: {
      A: "Result: 40",
      B: "Result: 70",
      C: "Result: 90",
      D: "Result: 100",
    },
    answer: "D",
    explanation:
      "In the above JavaScript code, we used the reduceRight() method which is used to reduce the given array elements into a single value by executing a reducer function. The reducer() function is applied against the accumulator and reduces all the elements from right to left. Thus, the output would be Result: 100 ",
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n\n<script>\n\tvar cars = ["Honda","Hyundai","Mahindra"];\n\n\tvar result = cars.unshift("Toyota", "Tata");\n\n\tdocument.writeln("[", result, "] ", cars);\n</script>',
    options: {
      A: "[5] Toyota,Tata,Honda,Hyundai,Mahindra",
      B: "[5]Honda,Hyundai,Mahindra,Toyota,Tata",
      C: "[2] Toyota,Tata",
      D: "[5] Honda,Hyundai,Toyota,Tata,Mahindra",
    },
    answer: "A",
    explanation:
      'In the above JavaScript code, we used unshift() method which is used to add one or more elements in the beginning of the given array and returns the updated array. This method changes the length of the original array. Thus, the output would be "[5] Toyota,Tata,Honda,Hyundai,Mahindra".',
  },
  {
    question:
      "Which JavaScript method is used to call a function (a callback function) once for each array element?",
    options: {
      A: "for()",
      B: "traverse()",
      C: "forEach()",
      D: "foreach()",
    },
    answer: "C",
    explanation:
      "The JavaScript method forEach() is used to call a function (a callback function) once for each array element.",
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n\n<script>\n\tconst arr = [10, 20, 30];\n\tlet result = 0;\n\t\n\tarr.forEach(myFunction);\n\t\n\tdocument.write("Result: " , result)\n\tfunction myFunction(value, index, array) {\n\t  result += value; \n\t}\n</script>',
    options: {
      A: "Result: 60",
      B: "Result: 102030",
      C: "Result: 10,20,30",
      D: "ValueError",
    },
    answer: "A",
    explanation:
      'In the above JavaScript code, we used the forEach() method which is used to call a function (a callback function) once for each array element, and in the callback function, we are adding the elements of the array. Thus, the output would be "Result: 60".',
  },
  {
    question:
      'What will be the output of the following JavaScript code?\n\n<script>\n\tconst values = [10, 20, 30];\n\tconst result = values.map(myFunction);\n\n\tdocument.write("Result: ", result);\n\n\tfunction myFunction(value, index, array) {\n\t  return value * value;\n\t}\n</script>',
    options: {
      A: "Result: 10,20,30",
      B: "Result: 10*10,20*20,30*30",
      C: "Result: 100,400,900",
      D: "ValueError",
    },
    answer: "C",
    explanation:
      'In the above JavaScript code, we used the map() method which is used to create a new array by performing a function on each array element, and in the myFunction() we are multiplying the elements with the same value. Thus, the output would be "Result: 100,400,900".',
  },
  {
    question:
      "Which JavaScript method is used to create a new array with array elements that passes a test?",
    options: {
      A: "forEach()",
      B: "map()",
      C: "forMap()",
      D: "filter()",
    },
    answer: "D",
    explanation:
      "The JavaScript method filter() is used to create a new array with array elements that pass a test.",
  },

  {
    question: "Which JavaScript object works with the dates?",
    options: {
      A: "Date",
      B: "DateTime",
      C: "date",
      D: "dateTime",
    },
    answer: "A",
    explanation: "The JavaScript Date object works with the dates.",
  },
  {
    question:
      "Which JavaScript statement(s) is correct to create Date object(s) with new Date() constructor?",
    options: {
      A: "new Date()",
      B: "new Date(milliseconds)",
      C: "new Date(date string)",
      D: "All of the above",
    },
    answer: "D",
    explanation:
      "All of the above statements are correct to create Date objects with new Date() constructor.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\n\tconst curr = new Date();\n\tdocument.write(curr);\n</script>",
    options: {
      A: "Tue Dec 21 2021 13:04:36 GMT+0530",
      B: "Tue Dec 21 2021 13:04:36 (India Standard Time)",
      C: "Tue Dec 21 2021 13:04:36::00::01 GMT+0530 (India Standard Time)",
      D: "Tue Dec 21 2021 13:04:36 GMT+0530 (India Standard Time)",
    },
    answer: "D",
    explanation:
      "The above JavaScript code will print the current date & time in the format of Tue Dec 21 2021 13:04:36 GMT+0530 (India Standard Time).",
  },
  {
    question:
      "Which JavaScript method is used to convert a date to a UTC string (a date display standard)?",
    options: {
      A: "toUTCString()",
      B: "toUtcString()",
      C: "utcString()",
      D: "toutcstring()",
    },
    answer: "A",
    explanation:
      "The JavaScript method toUTCString() is used to convert a date to a UTC string (a date display standard).",
  },
  {
    question: "The internal clock in JavaScript counts from midnight _____.",
    options: {
      A: "January 1, 1972",
      B: "January 1, 1947",
      C: "January 1, 1980",
      D: "January 1, 1970",
    },
    answer: "D",
    explanation:
      "The internal clock in JavaScript counts from midnight January 1, 1970.",
  },

  {
    question: "What does the Date object's method getTime() return?",
    options: {
      A: "Date in DD-MM-YYYY format",
      B: "Date in DD MON YYYY format",
      C: "Date in MON, DD YYYY format",
      D: "Number of milliseconds since January 1, 1970",
    },
    answer: "D",
    explanation:
      "The Date object's method getTime() returns the number of milliseconds since January 1, 1970.",
  },
  {
    question:
      "Which method is used to get the year of a date as a four-digit number?",
    options: {
      A: "getYear()",
      B: "fullYear()",
      C: "getFullYear()",
      D: "getfullyear()",
    },
    answer: "C",
    explanation:
      "The getFullYear() method is used to get the year of a date as a four-digit number.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\n    document.write(Math.round(107.5))\n</script>",
    options: {
      A: "107.5",
      B: "107",
      C: "108",
      D: "107.00",
    },
    answer: "C",
    explanation:
      "The Math.round(x) returns the value of x rounded to its nearest integer. Thus, the output would be 108.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\ntry{\n    const cars = {  \n        company: 'Honda'\n    };  \n    \n    delete cars.company;\n    document.write(cars.company);  \n}\ncatch (err){\n    document.write(err.message);\n}\n</script>",
    options: {
      A: "undefined",
      B: "Honda",
      C: "ValueError",
      D: "TypeError",
    },
    answer: "A",
    explanation:
      "In the above JavaScript code, the statement delete cars.company; will delete the property. Thus, the output would be 'undefined'.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\ntry{\n    const cars = {  \n        company: 'Honda'\n    };  \n    \n    Object.seal(cars);\n    delete cars.company;\n    document.write(cars.company);  \n}\ncatch (err){\n    document.write(err.message);\n}\n</script>",
    options: {
      A: "undefined",
      B: "Honda",
      C: "ValueError",
      D: "TypeError",
    },
    answer: "B",
    explanation:
      "In the above JavaScript code, we have sealed the object and the seal property does not allow the object to be deleted. Hence, the property company will not be deleted.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\n    let x = '10';\n    let y = + x;\n    document.write(typeof y);\n</script>",
    options: {
      A: "string",
      B: "object",
      C: "undefined",
      D: "number",
    },
    answer: "D",
    explanation:
      "In JavaScript, the unary + operator can be used to convert a variable to a number. Hence, the statement let y = + x; will convert variable to number.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\n    let x = 10;\n    document.write(typeof x, ' , ', typeof String(x));\n</script>",
    options: {
      A: "number , string",
      B: "number , number",
      C: "object , string",
      D: "object , object",
    },
    answer: "A",
    explanation:
      "In the above JavaScript code, we are using the String() method which is a global method to convert numbers to string. Thus, the statement typeof String(x) will return string.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n\n<script>\n    let x = 10;\n    document.write(x, ' , ', toString(x));\n</script>",
    options: {
      A: "10 , 10",
      B: "10 , undefined",
      C: "10 , [object Undefined]",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      "In the above JavaScript code, the statement toString(x) will not convert number to string because toString() is not a global method, it is a Number method and the correct way is to call this function is x.toString().",
  },
];

const javaQ: Question[] = [
  {
    question: "JDK stands for ____.",
    options: {
      A: "Java development kit",
      B: "Java deployment kit",
      C: "JavaScript deployment kit",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "JDK stands for Java Development Kit. It is a platform to develop and run Java applications.",
  },
  {
    question: "JRE stands for ___.",
    options: {
      A: "Java run ecosystem",
      B: "JDK runtime Environment",
      C: "Java Runtime Environment",
      D: "None of these",
    },
    answer: "C",
    explanation:
      "JRE stands for Java Runtime Environment which provides an environment to run a java program.",
  },
  {
    question: "What makes the Java platform independent?",
    options: {
      A: "Advanced programming language",
      B: "It uses bytecode for execution",
      C: "Class compilation",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "In Java, programs are compiled into byte code and that byte code is platform-independent.",
  },
  {
    question:
      "Can we keep a different name for the java class name and java file name?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can keep different names for java filename and java class name if and only if the class is not public.",
  },
  {
    question: "What are the types of memory allocated in memory in java?",
    options: {
      A: "Heap memory",
      B: "Stack memory",
      C: "Both A and B",
      D: "None of these",
    },
    answer: "C",
    explanation:
      "Memory allocation in java occurs in two ways, mainly, stack and heap space.",
  },
  {
    question: "Multiline comment is created using ___.",
    options: {
      A: "//",
      B: "/* */",
      C: "<!--  -- >",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "Multi-line comments start with /* and ends with */. Any text between /* and */ will be ignored by Java.",
  },
  {
    question: "What is the entry point of a program in Java?",
    options: {
      A: "main() method",
      B: "The first line of code",
      C: "Last line of code",
      D: "main class",
    },
    answer: "A",
    explanation:
      "Generally, the main() method is treated as the point where the flow of code starts.",
  },
  {
    question: "Can we write a program without a main method in Java?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can write a java program without the main() method but there is a condition if and only if java JDK version till JDK 5.",
  },
  {
    question: "Can the main() method be overloaded in Java?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, We can overload the main method in java but JVM only calls the original main method, it will never call our overloaded main method.",
  },
  {
    question: "Which keyword in java is used for exception handling?",
    options: {
      A: "exep",
      B: "excepHand",
      C: "throw",
      D: "All of these",
    },
    answer: "C",
    explanation:
      "the throw is a keyword introduced in java for exception handling.",
  },
  {
    question: "Which class in Java is used to take input from the user?",
    options: {
      A: "Scanner",
      B: "Input",
      C: "Applier",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "The Scanner class is used to get user input, and it is found in the java.util package.",
  },
  {
    question: "Method used to take a string as input in Java?",
    options: {
      A: "next()",
      B: "nextLine()",
      C: "Both A. and B.",
      D: "None of these",
    },
    answer: "B",
    explanation:
      "The next() method can read the input only till the space. It can't read two words separated by space, while the nextLine() reads input including space between the words (that is, it reads till the end of line \\n).",
  },
  {
    question:
      "Which of the following is the correct syntax to create a variable in Java?",
    options: {
      A: "var name;",
      B: "int name;",
      C: "var name int;",
      D: "All of these",
    },
    answer: "B",
    explanation: "Read here: Java variable declarations",
  },
  {
    question: "Is string mutable in Java?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "String in Java is immutable i.e., once defined the value cannot be changed.",
  },
  {
    question: "Which of these is a type of variable in Java?",
    options: {
      A: "Instance Variable",
      B: "Local Variable",
      C: "Static Variable",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "There are three types of variables in Java: Instance variable, Local variable, Class/Static variable",
  },
  {
    question: "What will be the output of following Java code?",
    options: {
      A: "Hello",
      B: "Bye",
      C: "Error",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "The output will be 'Bye' because the value of the string variable 'str' is reassigned to 'Bye' before printing.",
  },
  {
    question: "What is type casting in Java?",
    options: {
      A: "It is converting type of a variable from one type to another",
      B: "Casting variable to the class",
      C: "Creating a new variable",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Type casting is when you assign a value of one primitive data type to another type.",
  },
  {
    question: "Which type of casting is lossy in Java?",
    options: {
      A: "Widening typecasting",
      B: "Narrowing typecasting",
      C: "Manual typecasting",
      D: "All of these",
    },
    answer: "B",
    explanation: "In Narrowing typecasting data loss is there.",
  },
  {
    question: "Which of the following can be declared as final in java?",
    options: {
      A: "Class",
      B: "Method",
      C: "Variable",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "Class, method, and variables all can be declared as final in Java.",
  },
  {
    question: "Finally block is attached to?",
    options: {
      A: "Try-catch block",
      B: "Class block",
      C: "Method block",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Finally, block of code runs at the end of the try-catch block.",
  },
  {
    question: "The break statement in Java is used to ___.",
    options: {
      A: "Terminates from the loop immediately",
      B: "Terminates from the program immediately",
      C: "Skips the current iteration",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "The break statement in Java is used to terminate from the loop immediately.",
  },
  {
    question:
      "What will be the output of following Java code?\n\npublic class Main {\n  public static void main(String arg[]) {\n    int i;\n    for (i = 1; i <= 12; i += 2) {\n      if (i == 8) {\n        System.out.println(i);\n        break;\n      }\n    }\n  }\n}",
    options: {
      A: "1",
      B: "No output",
      C: "8",
      D: "1357911",
    },
    answer: "B",
    explanation:
      "The condition (i == 8) could not be satisfied hence nothing cannot be printed.",
  },
  {
    question: "Can the Java program accept input from the command line?",
    options: {
      A: "Yes, using command-line arguments",
      B: "Yes, by access command prompt",
      C: "No",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "In Java, we can also provide values (arguments) while calling the program through the command line. These arguments are known as Command Line Arguments.",
  },
  {
    question: "Array in java is ___.",
    options: {
      A: "Collection of similar elements",
      B: "Collection of elements of different types",
      C: "The data type of consisting of characters",
      D: "None of these",
    },
    answer: "A",
    explanation: "Array is a collection of similar elements.",
  },
  {
    question:
      "Which of these is the correct method to create an array in java?",
    options: {
      A: "int[] arr = {1, 3, 5};",
      B: "int[] arr;\narr = new int[] {3, 1, 8};",
      C: "int arr[] = {1, 4, 6};",
      D: "All of these",
    },
    answer: "E",
    explanation: "All of these methods are correct to create an array in Java.",
  },
  {
    question: "Object in java are ___.",
    options: {
      A: "Classes",
      B: "References",
      C: "Iterators",
      D: "None of these",
    },
    answer: "B",
    explanation: "Objects in Java are Reference Variables.",
  },
  {
    question: "What is garbage collection in java?",
    options: {
      A: "Method to manage memory in java",
      B: "Create new garbage values",
      C: "Delete all values",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Garbage collection in Java is the process by which Java programs perform automatic memory management.",
  },
  {
    question: "Static variables in java are declared as ___.",
    options: {
      A: "final variables",
      B: "new variables",
      C: "Constants",
      D: "All of these",
    },
    answer: "C",
    explanation:
      "The static variables declarations just like constants, they required static keyword and an initial value.",
  },
  {
    question: "BigInteger Class is used to ___.",
    options: {
      A: "Store very long range of number",
      B: "Store integer values",
      C: "A class that stores large range of integer",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "All of the above points are correct with respect to a BigInteger class.",
  },
  {
    question: "'this' keyword in java is ___.",
    options: {
      A: "Used to hold the reference of the current object",
      B: "Holds object value",
      C: "Used to create a new instance",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Java 'this' keyword is used to hold the reference of the current object.",
  },
  {
    question:
      "What will be the output of following Java code? \n import java.util.Scanner;\n\nclass ThisKeyword {\n  private int a = 4;\n  private int b = 1;\n\n  void getSum(int a, int b) {\n    this.a = a;\n    this.b = b;\n    System.out.println(this.a + this.b);\n  }\n}\n\npublic class Main {\n  public static void main(String args[]) {\n    ThisKeyword T = new ThisKeyword();\n    T.getSum(3, 5);\n  }\n}",
    options: {
      A: "5",
      B: "9",
      C: "8",
      D: "4",
    },
    answer: "C",
    explanation:
      "The above Java program is an example to demonstrate the use of this keyword.",
  },
  {
    question: "The 'super' keyword is used to ___.",
    options: {
      A: "Access instance of the parent class",
      B: "Access instance of the same class",
      C: "Access instance of child class",
      D: "Access instance of friend class",
    },
    answer: "A",
    explanation:
      "The super keyword refers to superclass (parent) objects. It is used to call superclass methods, and to access the superclass constructor.",
  },
  {
    question: "The super() method is used to ___.",
    options: {
      A: "Call constructor of friend class",
      B: "Is a declared method",
      C: "Call constructor of the parent class",
      D: "Call constructor",
    },
    answer: "C",
    explanation:
      "In Java programming language, the super() is a reference variable that is used to refer parent class constructors. The super can be used to call parent class's variables and methods. The super() can be used to call parent class' constructors only.",
  },
  {
    question: "Wrapper class in java is ___.",
    options: {
      A: "Used to encapsulate primitive data types",
      B: "Declare new classes called wrapper",
      C: "Create a new instance of the class",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "A Wrapper class is a class whose object wraps or contains primitive data types.",
  },
  {
    question: "Boxing is ___.",
    options: {
      A: "Creating new box",
      B: "Creating object",
      C: "Converting primitive type of object instance",
      D: "All of these",
    },
    answer: "C",
    explanation:
      "In Java programming language, the wrapper classes are those whose objects wraps a primitive data type within them. The wrapper class is used for converting primitive datatype to object is called boxing.",
  },
  {
    question: "Abstract class is ___.",
    options: {
      A: "Created using abstract keyword",
      B: "Contains only abstract method",
      C: "Needs to be inherited to be used",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "An abstract class is a class that contains an abstract method. It is defined using abstract keyword only has method declarations and to use these methods, the abstract class needs to be inherited.",
  },
  {
    question: "What is file handling in java?",
    options: {
      A: "It is creating, deleting, and modifying files using a java program.",
      B: "Creating new method",
      C: "Filing method to different file to extract them better",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "File handling is used for creating, deleting, and modifying files using a java program.",
  },
  {
    question: "How can we access methods for file handling in java?",
    options: {
      A: "Java.files",
      B: "Java.io",
      C: "Java.io.File",
      D: "Java.FileHandling",
    },
    answer: "C",
    explanation:
      "To access the file handling methods, we need to use Java.io.File.",
  },
  {
    question: "Which is the correct absolute path of a file in Java?",
    options: {
      A: "C:\\Program Files\\Java\\jdk1.8.0_131\\bin\\file_name.txt",
      B: "C:\\Program Files\\Java\\file_name.txt",
      C: "C:\\Program Files\\Java\\jdk1.8.0_131\\file_name.txt",
      D: "C:\\Program Files\\Java\\jdk1.8.0_131\\bin\\File Handling\\file_name.txt",
    },
    answer: "A",
    explanation:
      "The correct absolute path of a file in Java is:\n\nC:\\Program Files\\Java\\jdk1.8.0_131\\bin\\file_name.txt",
  },
  {
    question: "Which method is used to add a new line to file in Java?",
    options: {
      A: "file.addLine()",
      B: "file.nextLine()",
      C: "file.write()",
      D: "file.line()",
    },
    answer: "C",
    explanation:
      "The file.write() method is used to add a new line to file in Java.",
  },
  {
    question: "Which method deletes a file in Java?",
    options: {
      A: "file.delete()",
      B: "file.remove()",
      C: "file.garbage()",
      D: "file.dump()",
    },
    answer: "A",
    explanation: "The file.delete() method is used to delete a file in Java.",
  },
  {
    question: "Which method in java is used to read lines from file?",
    options: {
      A: "file.read()",
      B: "file.nextLine()",
      C: "file.getLine()",
      D: "All of these",
    },
    answer: "C",
    explanation: "The file.getLine() method is used to read lines from a file.",
  },
  {
    question: "The correct syntax to import the math library in java is ___.",
    options: {
      A: "import java.lang.math",
      B: "import math",
      C: "import java.math",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "The correct syntax to import the math library in java is:\n\nimport java.lang.math",
  },
  {
    question: "Which is/are valid method(s) of math library in java?",
    options: {
      A: "max()",
      B: "cbrt()",
      C: "log10()",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "Some common methods of the math library are max(), min(), cbrt(), pow(), log(), log10(), etc.",
  },
  {
    question:
      "Which method in java is used to generate random numbers in Java?",
    options: {
      A: "random.nextInt()",
      B: "random()",
      C: "rand()",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "The Java method random.nextInt() is used to generate random numbers.",
  },
  {
    question: "In java, recursion is ___.",
    options: {
      A: "Method",
      B: "A process allowing methods to call itself",
      C: "The process to call methods",
      D: "None of these",
    },
    answer: "B",
    explanation:
      "The recursion is a process by which a process allow methods to call itself.",
  },
  {
    question: "What is stringBuffer in java?",
    options: {
      A: "Class to create a string array",
      B: "Class to create a mutable string in java",
      C: "Class to create a string from i/o buffer",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "StringBuffer class is used to create modifiable strings in java.",
  },
  {
    question: "Which of the following is a valid data structure in java?",
    options: {
      A: "Array",
      B: "List",
      C: "Vector",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "All of the above (Array, List, and Vector) are valid data structures in Java.",
  },
  {
    question: "Which syntax is valid to create a vector in java?",
    options: {
      A: "Vector < string > names = new Vector < String > ();",
      B: "Vector name = new string;",
      C: "int name = new vector ()",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "The syntax to create a vector in Java is:\n\nVector < string > names = new Vector < String > ();",
  },
  {
    question: "What will be the output of following Java code?",
    options: {
      A: "Error",
      B: "8",
      C: "5",
      D: "None of these",
    },
    answer: "B",
    explanation: "The output of the above program is:\n\n8",
  },
  {
    question: "Which of these is true for interfaces in java?",
    options: {
      A: "The keyword interface is used to create a method",
      B: "All the methods of an interface are abstract",
      C: "It does not contain constructors",
      D: "All of these",
    },
    answer: "D",
    explanation: "All of the above points are true for interfaces in Java.",
  },
  {
    question: "Encapsulation is ___.",
    options: {
      A: "Wrapping up of data and related functions into a single entity",
      B: "Creating special methods",
      C: "Creating special data structure",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "In Java programming language, the encapsulation is a mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. It is a object-oriented programming concept.",
  },
  {
    question: "Which Java method is used to convert an object to string?",
    options: {
      A: "createString()",
      B: "toString()",
      C: "object.string()",
      D: "newString()",
    },
    answer: "B",
    explanation:
      "Java method toString() is used to convert an object to string.",
  },
  {
    question: "What is a comparator in Java?",
    options: {
      A: "Interface to compare integer",
      B: "Comparison method for lists",
      C: "Interface to compare two objects in java",
      D: "All of these",
    },
    answer: "C",
    explanation:
      "Java Comparator interface is used to order the objects of a user-defined class.",
  },
  {
    question:
      "Which of the following methods are present in comparator interface?",
    options: {
      A: "compare()",
      B: "equate()",
      C: "isEqual()",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "The comparator interface contains the following two methods,\n\ncompare()\nequals()",
  },
  {
    question:
      "Which of the following statements is not correct for vectors in Java?",
    options: {
      A: "It was created using vector keyword",
      B: "It can store an object of different classes",
      C: "It is asynchronous",
      D: "None of these",
    },
    answer: "C",
    explanation: "Read more: Vector Class in Java",
  },
  {
    question: "What will be the output of following Java code?",
    options: {
      A: "Error",
      B: "include",
      C: "help",
      D: "codingquizz",
    },
    answer: "D",
    explanation:
      "The string here is a StringBuffer hence the contents can be edited which makes the append method work on it by adding 'help' to the end of the string.",
  },
  {
    question: "What is a deadlock in Java?",
    options: {
      A: "State when all processes have complete working and are dead",
      B: "State when threads are in hold state forever",
      C: "State when threads are not ready",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "Deadlock in Java is a condition when two or more threads try to access the same resources at the same time.",
  },
  {
    question: "Which graph is used to check for deadlock in Java?",
    options: {
      A: "Deadlock graph",
      B: "Time graph",
      C: "Wait-for-graph",
      D: "None of these",
    },
    answer: "C",
    explanation: "The wait-for-graph is used to check for deadlock in Java.",
  },
  {
    question: "Batch processing in java is ___.",
    options: {
      A: "Used to execute a group of queries or a batch as executing a single query, again and again, is time taking and reduce the performance",
      B: "Used to processing multiple queries can be executed at once",
      C: "Used to increase program's performance",
      D: "All of these",
    },
    answer: "D",
    explanation: "Read more: Batch Processing in Java.",
  },
  {
    question: "Null in Java is ___.",
    options: {
      A: "Reserved keyword",
      B: "Literal value",
      C: "Used in exception handling",
      D: "All of these",
    },
    answer: "D",
    explanation: "All of the mentioned points are true about the Null in Java.",
  },
  {
    question: "Enumeration in Java is ___.",
    options: {
      A: "Data type which contains fixed set of constants",
      B: "Method",
      C: "Class",
      D: "None of these",
    },
    answer: "A",
    explanation:
      "In Java, the Enumeration is a data type which contains a fixed set of constants, they are used to create our own data type like classes.",
  },
  {
    question: "Can we pass objects to method arguments in Java?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "We use call-by-reference to pass objects as arguments to methods in java. Read more: Object as an Argument in Java",
  },
  {
    question:
      "Which of the following ways is the correct way to create an object in Java?",
    options: {
      A: "Using the new keyword",
      B: "Using newInstance() method",
      C: "clone() method",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "All of the above-mentioned ways are the correct way to create an object Java. There are five different ways to create an object and we will see the ways to create an object given below:\n\nUsing the new keyword\nUsing newInstance() method of Class\nUsing clone() method\nUsing newInstance() method of Constructor class\nUsing deserialization",
  },
  {
    question: "Which statement is correct for private member in Java?",
    options: {
      A: "Access outside the class is allowed",
      B: "Any class can access",
      C: "Declared using private keyword",
      D: "All of these",
    },
    answer: "C",
    explanation: "The private members are declared using the private keyword.",
  },
  {
    question: "Which keyword is used to inherit classes in Java?",
    options: {
      A: "extends",
      B: "inheritance",
      C: "isChild",
      D: "None of these",
    },
    answer: "A",
    explanation: "The extends keyword is used to inherit classes in Java.",
  },
  {
    question: "Which of the following inheritance of class is invalid in Java?",
    options: {
      A: "Single",
      B: "Multiple",
      C: "Multi-level",
      D: "Hierarchical",
    },
    answer: "B",
    explanation: "Java doesn't allow multiple inheritance.",
  },
  {
    question: "The 'implements' keyword is used to ___.",
    options: {
      A: "Implement the function of a class",
      B: "Inherit an interface in Java",
      C: "Inherit a class in java",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "The implements keyword is used to inherit an interface in Java.",
  },
  {
    question: "What is polymorphism in Java?",
    options: {
      A: "Performing a single task in multiple ways",
      B: "Performing multiple tasks using multiple methods",
      C: "Creating a new class for each task",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Polymorphism in Java is the ability of an object to take many forms.",
  },
  {
    question: "What are packages in Java?",
    options: {
      A: "Methods of a friend class",
      B: "Methods of the main class",
      C: "Way to encapsulate a group of classes, sub-packages, and interface",
      D: "All of these",
    },
    answer: "C",
    explanation:
      "Java packages are the ways to encapsulate a group of classes, sub-packages, and interface.",
  },
  {
    question: "Empty interface in Java is called?",
    options: {
      A: "Marker interface",
      B: "Abstract class",
      C: "Derived class",
      D: "None of these",
    },
    answer: "A",
    explanation: "Empty interface is called Marker interface in Java.",
  },
  {
    question: "Which of these is a non-access modifier?",
    options: {
      A: "public",
      B: "private",
      C: "native",
      D: "All of these",
    },
    answer: "C",
    explanation: "The native is a non-access modifier in Java.",
  },
  {
    question: "When a finally block executed in Java?",
    options: {
      A: "Try block is executed without any exception",
      B: "Exception has occurred",
      C: "Executed at last",
      D: "None of these",
    },
    answer: "C",
    explanation: "Finally block is executed at the last.",
  },
  {
    question: "What is boolean in Java?",
    options: {
      A: "A value consisting of only true and false value",
      B: "A value consisting of 8 values",
      C: "Truthy value in java",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "In Java, the boolean keyword is a primitive data type. It is used to store only two possible values, either true or false.",
  },
  {
    question: "Which of these is not a valid Boolean method in Java?",
    options: {
      A: "equals() method",
      B: "hashCode() method",
      C: "toString() method",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "All are valid Boolean class methods. Some common methods are equals(), hashCode(), toString(), valueOf(), etc.",
  },
  {
    question: "Which method is used to convert radians to degree in Java?",
    options: {
      A: "convertRadtoDeg()",
      B: "toDegrees()",
      C: "degree()",
      D: "All of these",
    },
    answer: "B",
    explanation:
      "The Java method toDegrees() is used to convert radians to degree.",
  },
  {
    question:
      "Which of the following methods is used to extract the length of a string in Java?",
    options: {
      A: "length()",
      B: "len()",
      C: "sizeof()",
      D: "size()",
    },
    answer: "A",
    explanation:
      "The Java method length() is used to extract the length of a string in Java.",
  },
  {
    question: "The trim() method in Java used to ___.",
    options: {
      A: "Remove the given character",
      B: "Remove the values after the given index",
      C: "Remove leading and trailing spaces",
      D: "None of these",
    },
    answer: "C",
    explanation:
      "The Java method trim() is a built-in function that eliminates leading and trailing spaces.",
  },
  {
    question: "What are regexes in Java?",
    options: {
      A: "API to define a pattern for searching strings",
      B: "String",
      C: "Array to create a new integer",
      D: "Wrapper class",
    },
    answer: "A",
    explanation:
      "Java Regular Expressions or Regex is an API for defining String patterns that can be used for searching, manipulating, and editing a string.",
  },
  {
    question: "What is a map in Java?",
    options: {
      A: "Data structure",
      B: "Defined in java.util package",
      C: "Represented using key-value pairs",
      D: "All of these",
    },
    answer: "D",
    explanation:
      "A map in Java is a data structure defined in the java.util package and is represented using key-value pairs.",
  },
  {
    question: "What is a set in Java?",
    options: {
      A: "Represented in the form of values",
      B: "Used to store key-value pairs",
      C: "Primary structures",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "A set in Java is represented in the form of values and is used to store unique elements.",
  },

  {
    question: "Which method in Java is used to check for NaN values?",
    options: {
      A: "isNan()",
      B: "checkNan()",
      C: "isNotNan()",
      D: "All of these",
    },
    answer: "A",
    explanation: "The isNaN() method is used to check for NaN values.",
  },
  {
    question: "Which of these is a property of threads in Java?",
    options: {
      A: "Multiple threads can be executed concurrently",
      B: "Has its own priority",
      C: "Both A. and B.",
      D: "None of these",
    },
    answer: "C",
    explanation:
      "The multiple threads can be executed concurrently and it has its own priority.",
  },
  {
    question: "Which thread is executed in the background?",
    options: {
      A: "New thread",
      B: "User-created thread",
      C: "Daemon thread",
      D: "All of these",
    },
    answer: "C",
    explanation: "The daemon thread is executed in the background.",
  },
  {
    question: "Multithreading in java is ___.",
    options: {
      A: "Executing multiple processes simultaneously",
      B: "Creating more threads at a time",
      C: "Blocking threads",
      D: "All of these",
    },
    answer: "A",
    explanation:
      "Multithreaded programming is a process in which two or more parts of the same process run simultaneously.",
  },
  {
    question: "What will be the output of following Java code?",
    options: {
      A: "100.6",
      B: "-100.6",
      C: "-200.6",
      D: "200.6",
    },
    answer: "B",
    explanation:
      "The Math.copySign() method returns the first floating-point argument with the sign of the second floating-point argument.",
  },
];

const cppQ: Question[] = [
  {
    question: "C++ language was developed by ___.",
    options: {
      A: "Dennis Rechard",
      B: "Dennis M. Ritchie",
      C: "Bjarne Stroustrup",
      D: "Anders Hejlsberg",
    },
    answer: "C",
    explanation:
      "C++ programming language was developed by Bjarne Stroustrup at Bell Laboratories (formerly AT&T Bell Laboratories).",
  },
  {
    question:
      'In which year, the name of the language was changed from "C with Classes" to C++?',
    options: {
      A: "1979",
      B: "1972",
      C: "1983",
      D: "1986",
    },
    answer: "C",
    explanation:
      'In 1983, the name of the language was changed from "C with Classes" to C++.',
  },
  {
    question: "C++ language is a successor to which language?",
    options: {
      A: "B",
      B: "C",
      C: "Java",
      D: "VB",
    },
    answer: "B",
    explanation: "C++ is a successor of C language.",
  },
  {
    question: "C++ language is a ___.",
    options: {
      A: "Object Oriented Language",
      B: "Procedural Oriented Language",
      C: "Structural Oriented Language",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "C++ is an object-oriented language. It supports the concept of OOPs.",
  },
  {
    question: "C++ follows ___.",
    options: {
      A: "Top-Down Design approach",
      B: "Bottom-Up Design approach",
      C: "Both of the above",
      D: "None of the above.",
    },
    answer: "B",
    explanation: "C++ follows a bottom-up design approach for development.",
  },
  {
    question: "C++ is a ___.",
    options: {
      A: "High-level language",
      B: "Medium level language",
      C: "Low-level language",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "C++ is a medium-level language because it contains the features of low-level language as well as high-level language (Low-level Vs High-level).",
  },
  {
    question: "How many keywords are in C++?",
    options: {
      A: "32",
      B: "48",
      C: "99",
      D: "95",
    },
    answer: "D",
    explanation:
      "Keywords are also known as reserved words, there are 95 keywords are available in C++. Some of the C++ keywords are not available in the C language.",
  },
  {
    question: "Which of the following is not a valid keyword in C++ language?",
    options: {
      A: "while",
      B: "for",
      C: "switch",
      D: "do-while",
    },
    answer: "D",
    explanation:
      'Do-while is a control statement, here "do" and "while" are different keywords.',
  },
  {
    question:
      "Which of the following statement is correct about identifiers in C++?",
    options: {
      A: "Identifiers are the combination of alphanumeric characters that can be used for function and variable names.",
      B: "Identifiers are a combination of alphanumeric characters that can be used for looping statements.",
      C: "Both of the above",
      D: "None of the above",
    },
    answer: "A",
    explanation: "The 2nd statement is correct about identifiers in C++.",
  },
  {
    question: "Which of the following is used for single-line comment in C++?",
    options: {
      A: "//",
      B: "\\\\",
      C: "/* */",
      D: "##",
    },
    answer: "A",
    explanation: 'We use "//" for single-line comments in C++.',
  },
  {
    question: "Which of the following is used for multi-line comments in C++?",
    options: {
      A: "//",
      B: "\\\\",
      C: "/* */",
      D: "##",
    },
    answer: "C",
    explanation: 'We use "/* */" for multi-line comment in C++.',
  },
  {
    question: "In C++, can we put comments between the statement?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can put comments between the statement in C++ language.\n\nC = A /*2+3*/ + B;",
  },
  {
    question: "In which year C++14 was introduced?",
    options: {
      A: "2014",
      B: "2015",
      C: "2017",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "C++14 was introduced in 2014. It contains the following features:\n\n- polymorphic lambdas\n- digit separators\n- generalized lambda capture\n- variable templates\n- binary integer literals\n- quoted strings",
  },
  {
    question: "Which of the following language translator is used in C++?",
    options: {
      A: "Assembler",
      B: "Interpreter",
      C: "Compiler",
      D: "Both Interpreter and Compiler",
    },
    answer: "C",
    explanation:
      "In C++, a Compiler is used to process C++ source files and generate object files.",
  },
  {
    question:
      "Which of the following whitespace characters can be used in C++?",
    options: {
      A: "Horizontal tab",
      B: "Vertical tab",
      C: "Form feed",
      D: "New line",
    },
    answer: "D",
    explanation:
      "In C++, we can use the following whitespace characters:\n\n- Space\n- Horizontal tab\n- Vertical tab\n- Form feed\n- New-line",
  },
  {
    question:
      "Which of the following is the correct extension of the C++ source code file?",
    options: {
      A: ".cpp",
      B: ".c++",
      C: "Both",
      D: "None",
    },
    answer: "C",
    explanation:
      'We can use both ".cpp" and ".c++" for a C++ source code file.',
  },
  {
    question:
      "Which of the following command is used for the C++ compiler in Linux OS?",
    options: {
      A: "GCC",
      B: "c++",
      C: "g++",
      D: "None",
    },
    answer: "C",
    explanation: "The g++ command is used to compile C++ source files.",
  },
  {
    question: "C++ is a pure object-oriented language.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "C++ is not a pure object-oriented language because it supports the oops concept as well as procedural-oriented features.",
  },
  {
    question: "C++ supports automatic garbage collection?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "C++ does not support automatic garbage collection. Here we need to free dynamically allocated memory using free() or delete. Otherwise, it may cause memory leaks.",
  },
  {
    question: "C++ is case sensitive language?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, C++ is a case-sensitive language. Here Var1 and var1 will treat differently.",
  },
  {
    question: "Which of the following OOPs concepts are supported in C++?",
    options: {
      A: "Inheritance",
      B: "Encapsulation",
      C: "Abstraction",
      D: "Polymorphism",
    },
    answer: "D",
    explanation:
      "C++ supports the following OOPS concept:\n\n- Inheritance\n- Encapsulation\n- Abstraction\n- Polymorphism",
  },
  {
    question: "OOPs stands for?",
    options: {
      A: "Object Oriented Process System",
      B: "Object Oriented Programming System",
      C: "Object Oriented Programming Service",
      D: "Object Orientation Programming System",
    },
    answer: "B",
    explanation: "OOPs stands for Object Oriented Programming System.",
  },
  {
    question: "Is it true, C++ is a superset of C language?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, C++ is known as a superset of C. Because C++ supports almost all the features of C language.",
  },
  {
    question:
      "C++ is a more secure programming language compared to C language?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, C++ is a more secure programming language compared to C language because C language does not support encapsulation and information hiding.",
  },
  {
    question: "Stream is ___.",
    options: {
      A: "Group of non-printable character",
      B: "Sequence of bytes",
      C: "Set of errors",
      D: "The flow of invalid characters",
    },
    answer: "B",
    explanation:
      "In C++, we use the stream concept for Input/Output operations. It is a sequence of bytes or flow of data that improves performance.",
  },
  {
    question:
      "If the set of bytes flows from main memory to other devices like printers, the monitor is known as ___.",
    options: {
      A: "Input Operation",
      B: "Output Operation",
      C: "Both of above",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "If the set of bytes flows from the main memory to other devices like the printer, the monitor is known as output operation.",
  },
  {
    question: "Which of the following header file is used to define cin, cout?",
    options: {
      A: "<iomanip.h>",
      B: "<iostream.h>",
      C: "<fstream.h>",
      D: "None of the above",
    },
    answer: "B",
    explanation: "The <iostream.h> header file is used to define cin and cout.",
  },
  {
    question: "The cin, cout are ___.",
    options: {
      A: "Library functions",
      B: "Structures",
      C: "Pointers",
      D: "Objects",
    },
    answer: "D",
    explanation:
      "The cin and cout are the objects of the istream and ostream classes respectively that are used to perform input/output operations.",
  },
  {
    question: "Which of the following is not a valid predefined object in C++?",
    options: {
      A: "cin",
      B: "cout",
      C: "cput",
      D: "cerr",
    },
    answer: "C",
    explanation: 'The "cput" is not a valid predefined object in C++.',
  },
  {
    question: "The stdout stands for ___.",
    options: {
      A: "State Output",
      B: "Standard Output",
      C: "Stand Output",
      D: "Stream Output",
    },
    answer: "B",
    explanation:
      'The "stdout" stands for standard output. It is used to represent standard output devices like the monitor.',
  },
  {
    question: "Is it true, the cerr is an object of the ostream class?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, it is true, the cerr is an object of the ostream class, which is used to output the errors.",
  },
  {
    question: "Which of the following is an insertion operator in C++?",
    options: {
      A: "<<",
      B: ">>",
      C: "->",
      D: "<<<",
    },
    answer: "A",
    explanation:
      'In C++, "<<" is known as the insertion operator which is used with the "cout" object to print data on the console screen.',
  },
  {
    question: "Which of the following is an extraction operator in C++?",
    options: {
      A: ">>>",
      B: ">>",
      C: "->",
      D: "<<<",
    },
    answer: "B",
    explanation:
      'In C++, ">>" is known as an extraction operator which is used with the "cin" object to read user input.',
  },
  {
    question: "The endl is a ___.",
    options: {
      A: "Macro",
      B: "object",
      C: "Pointers",
      D: "function",
    },
    answer: "A",
    explanation:
      "The endl is a macro, which is an object of ostream classes, used to print a newline on the console screen.",
  },
  {
    question: "Which of the following object is also used to flush the stream?",
    options: {
      A: "cin",
      B: "cout",
      C: "cerr",
      D: "endl",
    },
    answer: "D",
    explanation:
      'The "endl" object is used to print the newline as well as flush the stream.',
  },
  {
    question: "Which of the following namespace contains cin, cout objects?",
    options: {
      A: "ost",
      B: "std",
      C: "endl",
      D: "none of the above",
    },
    answer: "B",
    explanation: 'The "std" namespace contains cin, and cout objects.',
  },
  {
    question: "Which of the following are types of datatypes in C++?",
    options: {
      A: "Basic Datatype",
      B: "Derived Datatype",
      C: "Enumeration data type",
      D: "User Defined datatype",
    },
    answer: "D",
    explanation:
      "There are 4 types of datatypes in C++:\n\n- Basic Datatype\n- Derived Datatype\n- Enumeration data type\n- User Defined datatype",
  },
  {
    question:
      "The size of basic datatypes can be changed according to 32 or 64-bit operating systems?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, it is true, the size of basic datatypes can be changed according to 32 or 64-bit operating systems.",
  },
  {
    question:
      'If we use value "3.14" then what will be the data type of the given value?',
    options: {
      A: "float",
      B: "double",
      C: "long double",
      D: "none of the above",
    },
    answer: "B",
    explanation:
      'If we use any floating-point value with the suffix "F" in C++ that will be double type.',
  },
  {
    question:
      "Which of the following is the correct format specifier for long double-type values in C++?",
    options: {
      A: "%f",
      B: "%ld",
      C: "%lf",
      D: "%ldf",
    },
    answer: "C",
    explanation: 'The "%lf" format specifier is used for long double in C++.',
  },
  {
    question: "What is the size of a long double in C++?",
    options: {
      A: "8 bytes",
      B: "10 bytes",
      C: "12 bytes",
      D: "16 bytes",
    },
    answer: "B",
    explanation: "The size of a long double in C++ is 10 bytes.",
  },
  {
    question: "Is C++ language supports both signed and unsigned literals?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "Yes, C++ supports both signed and unsigned literals.",
  },
  {
    question: "Which of the following is not the basic type in C++?",
    options: {
      A: "int",
      B: "float",
      C: "array",
      D: "char",
    },
    answer: "C",
    explanation:
      'The "array" is a derived datatype in C++. It is not a fundamental datatype in C++.',
  },
  {
    question:
      "Can we create a character variable that will occupy more than 1 byte in memory?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, in C++, using wchar_t we can declare a variable that will occupy more than 1 byte of memory space.",
  },
  {
    question: 'For which type, the format specifier "%i" is used?',
    options: {
      A: "int",
      B: "float",
      C: "array",
      D: "char",
    },
    answer: "A",
    explanation:
      'We can use a "%d" or "%i" format specifier for integer variables in C++.',
  },
  {
    question: "Which of the following is not a correct qualifier in C++?",
    options: {
      A: "Size qualifier",
      B: "Type qualifier",
      C: "Sign qualifier",
      D: "None of the above",
    },
    answer: "D",
    explanation:
      "There are 3 types of qualifiers used in C++: Size qualifier, Sign qualifier, Type qualifier",
  },
  {
    question: 'By default, "int" is?',
    options: {
      A: "Signed integer",
      B: "Unsigned integer",
    },
    answer: "A",
    explanation: 'In C++, "int" is a signed integer.',
  },
  {
    question: 'The data type "short" and "short int" are similar in C++?',
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: '"short" and "short int" are similar types in C++.',
  },
  {
    question: "How many byte(s) does a short type take in C++?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    answer: "B",
    explanation:
      "In C++, the short or short int takes 2 bytes (16 bits) in memory.",
  },
  {
    question: "The operator '+' is?",
    options: {
      A: "Unary Operator",
      B: "Binary Operator",
      C: "Both Unary and Binary",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      "In C++, the operator '+' can be used as a binary and unary operator.",
  },
  {
    question: "The operator '%' is known as?",
    options: {
      A: "Division Operator",
      B: "Modulus Operator",
      C: "Percentage Operator",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "In C++, the operator '%' is known as the modulus operator, which is used to find the remainder.",
  },
  {
    question: "Which of the following operator is a ternary operator?",
    options: {
      A: "+=",
      B: "!=",
      C: "::",
      D: "?:",
    },
    answer: "D",
    explanation:
      "In C++, the operator '?:' is a ternary operator, it operates on 3 operands, it is also known as a conditional operator.",
  },
  {
    question:
      "Which of the following operator is known as Scope Resolution Operator?",
    options: {
      A: "::",
      B: "?:",
      C: "->",
      D: ".",
    },
    answer: "A",
    explanation:
      "In C++, the operator '::' is known as the Scope Resolution operator.",
  },
  {
    question:
      "Which of the following operator is known as Referential Operator?",
    options: {
      A: "!=",
      B: "?:",
      C: "->",
      D: "sizeof",
    },
    answer: "C",
    explanation:
      "In C++, the operator '->' is known as the Referential operator.",
  },
  {
    question: "The sizeof() is a?",
    options: {
      A: "Unary Operator",
      B: "Binary Operator",
      C: "Ternary Operator",
      D: "None of the above",
    },
    answer: "A",
    explanation: "In C++, the sizeof() is a unary operator.",
  },
  {
    question: "The associativity of unary operators is?",
    options: {
      A: "Left to Right",
      B: "Right to Left",
    },
    answer: "B",
    explanation:
      "In C++, the associativity of unary operators is Right to Left.",
  },
  {
    question: 'The associativity of the "[]" operator is?',
    options: {
      A: "Left to Right",
      B: "Right to Left",
    },
    answer: "A",
    explanation:
      'In C++, the associativity of the "[]" operator is Left to Right.',
  },
  {
    question: "The associativity of the conditional operator is?",
    options: {
      A: "Left to Right",
      B: "Right to Left",
    },
    answer: "B",
    explanation:
      'In C++, the associativity of the conditional operator "?:" is Right to Left.',
  },
  {
    question:
      "Which of the following operator is used to return the address of a variable?",
    options: {
      A: "*",
      B: "->",
      C: "&",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      'In C++, the "&" operator is used to return the address of a variable.',
  },
  {
    question: 'Which of the following is known as the "value of" operator?',
    options: {
      A: "*",
      B: "->",
      C: "&",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      'In C++, the "*" operator is known as the "value of" operator.',
  },
  {
    question: 'Which of the following is known as the "NOT" operator?',
    options: {
      A: "~",
      B: "!",
      C: "NOT",
      D: "None of the above",
    },
    answer: "B",
    explanation: 'In C++, the "!" operator is known as the "NOT" operator.',
  },
  {
    question: "Which of the following is not an arithmetic operator?",
    options: {
      A: "%",
      B: "/",
      C: "!",
      D: "*",
    },
    answer: "C",
    explanation:
      'In C++, the "!" operator is not an arithmetic operator, it is a logical operator.',
  },
  {
    question:
      "Which of the following statement is correct about the global variable?",
    options: {
      A: "A variable defined inside the function or block is known as a global variable.",
      B: "A variable defined outside the function or block is known as a global variable.",
      C: "Global variables can only declare inside the “.h” file.",
    },
    answer: "B",
    explanation: "The 2nd statement is correct about the global variable.",
  },
  {
    question: "The system automatically initializes a local variable?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "The system automatically initializes a global variable whereas we need to initialize local variables explicitly.",
  },
  {
    question:
      "The default value of a variable that is declared using register storage class?",
    options: {
      A: "0",
      B: "Garbage",
    },
    answer: "B",
    explanation:
      "The default value of the variable, which is declared using the register storage class is garbage.",
  },
  {
    question: "Which of the following is the default storage class in C++?",
    options: {
      A: "auto",
      B: "extern",
      C: "register",
      D: "static",
    },
    answer: "A",
    explanation: 'The "auto" is the default storage class in C++.',
  },
  {
    question: 'The "mutable" is a storage class in C++?',
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: 'Yes, "mutable" is a storage class in C++.',
  },
  {
    question:
      "Which of the following escape sequence is used to print double quotes on the console screen?",
    options: {
      A: '%"',
      B: '/"',
      C: '*"',
      D: "None of the above",
    },
    answer: "B",
    explanation:
      'The escape sequence /" prints double quotes on the console screen.',
  },
  {
    question:
      "Which of the following escape sequence is used to print the percentage symbol on the console screen?",
    options: {
      A: "%%",
      B: "/%",
      C: "*%",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "The escape sequence %% is used to print the percentage symbol on the console screen.",
  },
  {
    question:
      "Which of the following statement is correct about default arguments?",
    options: {
      A: "Arguments that cannot be passed to the function",
      B: "Arguments with a default value that is not mandatory to be passed into the function",
      C: "Arguments that always take the same data value",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      "In C++, we can create functions with default arguments. The default arguments are used with a default value that is not mandatory to be passed into the function.",
  },
  {
    question:
      "Which of the following condition is correct for the default arguments?",
    options: {
      A: "Default arguments must be the last arguments in the function declaration.",
      B: "Default arguments must be the first argument in the function declaration.",
      C: "Default arguments can be declared anywhere in the function declaration.",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "In C++, we can create functions with default arguments. The default arguments must be the last argument in the function declaration.",
  },
  {
    question:
      "Which of the following function can be called without any arguments?",
    options: {
      A: "int print(int count, char ch='*')",
      B: "int print(char ch='*')",
      C: "int print(char ch='*',int count)",
      D: "int print(char ch)",
    },
    answer: "B",
    explanation: "In the above options, option B is correct.",
  },
  {
    question: "Which of the following is the correct function prototype?",
    options: {
      A: "void printchar(int cnt=0, char ch, int val=0)",
      B: "void printchar(int cnt=0, char='*')",
      C: "void printchar(int cnt, char ch='*')",
      D: "void printchar(char ch='c', int cnt)",
    },
    answer: "C",
    explanation: "In the above options, option C is correct.",
  },
  {
    question:
      'Which of the following function will be called with the independent syntax "sample(10,20,30);"?',
    options: {
      A: "void sample(int x, int y)",
      B: "void sample(int x=0, int y, int z)",
      C: "float sample(int x=0, y=0, z=0)",
      D: "void sample(int x, int y, int z=0)",
    },
    answer: "D",
    explanation:
      'In the above options, option D is correct. Option C is incorrect because the return type is "float" and the syntax given is independent which means it doesn\'t return any value.',
  },
  {
    question:
      "Which of the following is an incorrect call to the function void sample(int a, int b=0, int c=0)?",
    options: {
      A: "sample(10,20,30);",
      B: "sample();",
      C: "sample(50);",
      D: "sample(30,40);",
    },
    answer: "B",
    explanation: "Here we need to pass at least one argument to the function.",
  },
  {
    question:
      "Which of the following statement is correct about Default arguments?",
    options: {
      A: "Default arguments are allowed in the argument list of the function declaration.",
      B: "Default arguments are allowed in the return type of the function declaration.",
      C: "Default arguments are allowed with the class name definition.",
      D: "Default arguments are allowed with floating-point type values.",
    },
    answer: "A",
    explanation:
      "Default arguments are allowed in the argument list of the function declaration.",
  },
  {
    question:
      "Which of the following statement is not correct about Default arguments?",
    options: {
      A: "Default arguments are allowed with pointer and reference to function declaration.",
      B: "Default arguments are not allowed with a declaration of a pointer to functions.",
      C: "Default arguments are not allowed with the reference to functions.",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "Default arguments are not allowed with pointer and reference to function declaration.",
  },
  {
    question:
      "The default argument gets bound during declaration but is executed during the function call?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, the default argument gets bound during declaration but is executed during the function call.",
  },
  {
    question: "Can we implement a constructor with a default argument?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "Yes, we can implement a constructor with a default argument.",
  },
  {
    question: "How many sequences of statements are available in C++?",
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "3",
    },
    answer: "B",
    explanation:
      "There are following sequence of statements is available in C++: Pre-processor directives, Comments, Declarations, Function Declarations, Executable statements.",
  },
  {
    question: "Which of the following is/are a decision making statement?",
    options: {
      A: "IF statements",
      B: "Switch statement",
      C: "Conditional operators",
      D: "None of the above",
    },
    answer: "D",
    explanation:
      "In C++, Decision-making statements are: IF statements, Switch Statements, Conditional operators.",
  },
  {
    question:
      "Which of the following statement can replace the if-else statement?",
    options: {
      A: "while loop",
      B: "do-while loop",
      C: "for loop",
      D: "conditional operator",
    },
    answer: "D",
    explanation:
      "In C++, we can replace if-else statements using conditional operators.",
  },
  {
    question:
      "Which of the following is the best option to make decisions for multiple choices?",
    options: {
      A: "if",
      B: "if-else",
      C: "if-else-if",
      D: "All the above",
    },
    answer: "C",
    explanation:
      'In C++, "if-else-if" is the best option for multiple choices.',
  },
  {
    question:
      "Can we use the string in the Switch statement for case selection?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "In C++, we cannot use the string in Switch statement for case selection.",
  },
  {
    question: "Which of the following is an entry control loop?",
    options: {
      A: "While Loop",
      B: "Do While loop",
    },
    answer: "A",
    explanation:
      'While loop is an entry control loop, in a "while" loop we need to check the condition before executing the loop body.',
  },
  {
    question: "Which of the following is an exit control loop?",
    options: {
      A: "While Loop",
      B: "Do While loop",
      C: "For loop",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      'The do-while loop is an entry control loop, in the "while" loop we need to check the condition before executing the loop body.',
  },
  {
    question:
      "Which of the following loop is normally used for a menu-driven program?",
    options: {
      A: "Do While loop",
      B: "For loop",
      C: "While loop",
      D: "None of the above",
    },
    answer: "A",
    explanation: "The do-while loop is used for a menu-driven program in C++.",
  },
  {
    question:
      "Which of the following loop, in which we have to execute the body of the loop before checking the condition?",
    options: {
      A: "Do While loop",
      B: "For loop",
      C: "While loop",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "In the Do-while loop, we have to execute the body of the loop before checking the condition.",
  },
  {
    question:
      "Which of the following types of variables can be used in the Switch statement for case selection?",
    options: {
      A: "int, float, char",
      B: "int, char",
      C: "int, double",
      D: "Any fundamental type",
    },
    answer: "A",
    explanation:
      "We can use only int, char type variables in the switch statement for case selection.",
  },
  {
    question:
      'In switch statements, Expression in parenthesis "()" after the switch statement is mandatory?',
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      'Yes, the Expression in parenthesis "()" after the switch statement is mandatory.',
  },
  {
    question:
      'Which of the following statement is correct about the "break" statement?',
    options: {
      A: "The break statement cancels the remaining iterations",
      B: "Break statement skips a particular iteration",
      C: "The break statement terminates the program",
      D: "None of the above",
    },
    answer: "A",
    explanation: "The Break statement cancels the remaining iterations.",
  },
  {
    question: "Which of the following loop is faster in C++?",
    options: {
      A: "Do While loop",
      B: "For loop",
      C: "While loop",
      D: "All loops work at the same speed",
    },
    answer: "D",
    explanation: "All loops work at the same speed.",
  },
  {
    question:
      "Which of the following statement is used to quit the loop immediately?",
    options: {
      A: "break",
      B: "continue",
      C: "while",
      D: "None of the above",
    },
    answer: "A",
    explanation: "The break statement is used to quit the loop immediately.",
  },
  {
    question:
      'Which of the following statement is also known as a "switch" statement?',
    options: {
      A: "selective statement",
      B: "choose statement",
      C: "bitwise statement",
      D: "certain statement",
    },
    answer: "A",
    explanation:
      "The switch statement is also known as the selective statement.",
  },
  {
    question:
      'Which of the following statement is also known as a "continue" statement?',
    options: {
      A: "goto statement",
      B: "bitwise statement",
      C: "skipping statement",
      D: "certain statement",
    },
    answer: "C",
    explanation:
      'The "continue" statement is also known as the skipping statement.',
  },
  {
    question: 'Which of the following is the correct syntax of the "for" loop?',
    options: {
      A: "for(condition; increment; declaration){ //body of the loop };",
      B: "for(declaration; increment/decrement; condition){ //body of the loop };",
      C: "for(initalization; condition; increment/decrement){ //body of the loop };",
      D: "None of the above",
    },
    answer: "C",
    explanation: "The 3rd option is correct.",
  },
  {
    question:
      'Which of the following is the correct syntax of the "do-while" loop?',
    options: {
      A: "do{ //Body of the loop }while(condition);",
      B: "dowhile(condition){ //Body of the loop };",
      C: "do while(condition){ //Body of the loop };",
      D: "do{ //Body of the loop }while(condition)",
    },
    answer: "A",
    explanation: "The 1st option is correct.",
  },
  {
    question:
      'Which of the symbol is used with the label in the "goto" statement?',
    options: {
      A: "@",
      B: ":",
      C: "#",
      D: "!",
    },
    answer: "B",
    explanation:
      'The colon ":" symbol is used with the label in the "goto" statement.',
  },
  {
    question:
      "Which of the following loop is the best option when the number of iterations is known?",
    options: {
      A: "While loop",
      B: "For loop",
      C: "Do while loop",
      D: "All loops require that the iterations be known",
    },
    answer: "B",
    explanation:
      'The "for" loop is the best option when the number of iterations is known.',
  },
  {
    question:
      "Which of the following given option is used to complete the function declaration?",
    options: {
      A: "Semicolon",
      B: "Colon",
      C: "Comma",
      D: "None of the above",
    },
    answer: "C",
    explanation: "The semicolon is used to complete the function declaration.",
  },
  {
    question: "How many arguments can be passed to a function?",
    options: {
      A: "128",
      B: "256",
      C: "512",
      D: "Vary from compiler to compiler",
    },
    answer: "D",
    explanation:
      "It varies from compiler to compiler and also different C99 and C++ standards.",
  },
  {
    question:
      "Which of the following are the mandatory part of the function prototype?",
    options: {
      A: "Function name and argument list",
      B: "Function name and return type",
      C: "Function name, argument list, and return type",
      D: "Return type and argument list",
    },
    answer: "B",
    explanation:
      "The function name and return type are the mandatory part of the function prototype.",
  },
  {
    question:
      'What will be the output of the following program?\n\n#include <iostream>\nusing namespace std;\n\nvoid sayHello();\n{\n    cout << "Hello World";\n}\n\nint main()\n{\n    sayHello();\n    return 0;\n}\n\nOptions:\n\nHello World\nHello\nError\nNone of the above',
    options: {
      A: "Hello World",
      B: "Hello",
      C: "Error",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      'The above program will generate a syntax error because we use a semicolon in the definition of the sayHello() function. The correct program is given below:\n\n#include <iostream>\nusing namespace std;\n\nvoid sayHello()\n{\n    cout << "Hello World";\n}\n\nint main()\n{\n    sayHello();\n    return 0;\n}',
  },
  {
    question:
      "Can we use the return type void in the main() function in a C++ program?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      'No, we cannot use the return type void in the main () function, we have to use the return type "int" with the main() function.',
  },
  {
    question:
      "Which of the following is a more effective way to call a function with arguments?",
    options: {
      A: "Call by value",
      B: "Call by reference",
      C: "Call by address",
      D: "None of the above",
    },
    answer: "B",
    explanation:
      'The "call by reference" is a more effective way to call a function with arguments because it reduces the overall time and memory use.',
  },
  {
    question:
      "How many minimum numbers of functions are required to execute a C++ program?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    answer: "A",
    explanation:
      "To execute a C++ program, we required only 1 function which is the main() function. Because the main() function is the entry point for the program.",
  },
  {
    question:
      "What is the lifetime of a static variable declared in a user-defined function?",
    options: {
      A: "Within the function only",
      B: "Within the main function only",
      C: "Whole program",
      D: "None of the above",
    },
    answer: "C",
    explanation:
      "The lifetime of a static variable is in the whole program. But its scope is within the function only.",
  },
  {
    question:
      "Which of the following statement is correct about inline function?",
    options: {
      A: "A function that is substituted at the place of call.",
      B: "A function that is called at compile time",
      C: "A function that contains only looping statements",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "A function that is substituted at the place of call is called an inline function.",
  },
  {
    question:
      "A function that is defined inside a class without any complex statement will be inline.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, A function that is defined inside a class without any complex statement will be inline.",
  },
  {
    question:
      "An inline function is substituted at the place of function call during?",
    options: {
      A: "Compile Time",
      B: "Runtime",
    },
    answer: "A",
    explanation:
      "An inline function is substituted at the place of the function call during compile time.",
  },
  {
    question: "A recursive function can be inline?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation: "A recursive function can never be inline in C++.",
  },
  {
    question: "An inline function can contain static variables?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation: "An inline function cannot contain static variables.",
  },
  {
    question: "An inline function is faster than a normal function?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, an inline function is faster than a normal function because it does not require a context switch from function call to function definition.",
  },
  {
    question: "Default values for a function are defined.",
    options: {
      A: "In function declaration",
      B: "In function definition",
      C: "During function call",
      D: "None of the above",
    },
    answer: "A",
    explanation:
      "We can define default values for a function in the function declaration.",
  },
  {
    question:
      "Can we define the inline function outside the class in C++ program?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can define an inline function inside or outside the class.",
  },
  {
    question: "Can we access the elements of an array outside the bound?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "B",
    explanation:
      "No, we cannot access the elements of an array outside the bound in C++. It can generate logical and runtime errors.",
  },
  {
    question: "Index of an array starts from?",
    options: {
      A: "1",
      B: "2",
      C: "0",
      D: "-1",
    },
    answer: "C",
    explanation: "The index of an array starts from 0 in C++.",
  },
  {
    question: "In C++, the Array name denotes?",
    options: {
      A: "The base address of the array",
      B: "The first value of the array",
      C: "Last value of the array",
      D: "None of the above",
    },
    answer: "A",
    explanation: "Array name denotes the base address of the array.",
  },
  {
    question:
      'If we create an array "Arr", which is the correct way to access the first element of the array?',
    options: {
      A: "Arr[0]",
      B: "0[Arr]",
      C: "*(Arr+0)",
      D: "All the above",
    },
    answer: "D",
    explanation:
      "All the given options are the correct way to access the first element of the array.",
  },
  {
    question: "Can we create an array of objects in C++?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "Yes, we can create an array of objects in C++.",
  },
  {
    question: "Can we create the 4-dimensional array in C++?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Yes, we can create a 4-dimensional array using the below statement. int arr[2][2][2][2];",
  },
  {
    question: "An array occupies memory space in?",
    options: {
      A: "Contiguous manner",
      B: "Fragmented manner",
      C: "Linked List",
      D: "None",
    },
    answer: "A",
    explanation:
      "In C++, an array occupies memory space in a contiguous manner.",
  },
  {
    question: "How many dimensions are an array in C++?",
    options: {
      A: "1D array",
      B: "2D Array",
      C: "3D array",
      D: "No Limit",
    },
    answer: "D",
    explanation: "There is no limit of dimensions for arrays in C++.",
  },
  {
    question:
      "When we pass an array to the function, then the function call will be?",
    options: {
      A: "Call by value",
      B: "Call by reference",
      C: "Both A and B",
      D: "None of these",
    },
    answer: "B",
    explanation:
      'When we pass an array to the function then the function call will be "call by reference".',
  },
];

const pyQ: Question[] = [
  {
    question: "Python is a ___object-oriented programming language.",
    options: {
      A: "Special purpose",
      B: "General purpose",
      C: "Medium level programming language",
      D: "All of the mentioned above",
    },
    answer: "B",
    explanation:
      "As a General Purpose Object-Oriented Programming Language, Python can model real-world entities, which makes it a useful tool for data scientists. Because it performs type checking at runtime, it is also known as dynamically typed code. Python is a general-purpose programming language, which means that it is widely used in every domain. This is due to the fact that it is very simple to understand and scalable, which allows for rapid development.",
  },
  {
    question:
      "Amongst the following, who is the developer of Python programming?",
    options: {
      A: "Guido van Rossum",
      B: "Denis Ritchie",
      C: "Y.C. Khenderakar",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "Python programming was created by Guido van Rossum. It is also called general-purpose programming language.",
  },
  {
    question:
      "Amongst which of the following is / are the application areas of Python programming?",
    options: {
      A: "Web Development",
      B: "Game Development",
      C: "Artificial Intelligence and Machine Learning",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "Python programming is used in a variety of fields, including web development, game development, artificial intelligence, and machine learning, among others. Web Development - Python provides a number of web development frameworks, including Django, Pyramid, and Flask, among others. Security, flexibility, and scalability are all attributes of this framework. Development of Video Games - PySoy and PyGame are two Python libraries that are used in the development of video games. Artificial Intelligence and Machine Learning - There are a large number of open-source libraries that can be used when developing AI/ML applications, and many of these libraries are free.",
  },
  {
    question:
      "Amongst which of the following is / are the Numeric Types of Data Types?",
    options: {
      A: "int",
      B: "float",
      C: "complex",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "Numeric data types include int, float, and complex, among others. In information technology, data types are the classification or categorization of knowledge items. It represents the type of information that is useful in determining what operations are frequently performed on specific data. In the Python programming language, each value is represented by a different python data type. Known as Data Types, this is the classification of knowledge items or the placement of the information value into a specific data category. It is beneficial to be aware of the quiet operations that are frequently performed on a worth.",
  },
  {
    question: "list, tuple, and range are the ___ of Data Types.",
    options: {
      A: "Sequence Types",
      B: "Binary Types",
      C: "Boolean Types",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The sequence Types of Data Types are the list, the tuple, and the range. In order to store multiple values in an organized and efficient manner, we use the concept of sequences. There are several types of sequences, including strings, Unicode strings, lists, tuples, bytearrays, and range objects. Strings and Unicode strings are the most common. Dictionary and set data structures are used to store non-sequential information.",
  },
  {
    question: "Float type of data type is represented by the float class.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The float data type is represented by the float class of data types. A true number with a floating-point representation is represented by the symbol. It is denoted by the use of a decimal point. Optionally, the character e or E followed by a positive or negative integer could be appended to the end of the string to indicate scientific notation.",
  },
  {
    question: "bytes, bytearray, memoryview are type of the ___ data type.",
    options: {
      A: "Mapping Type",
      B: "Boolean Type",
      C: "Binary Types",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "The Binary type's data type is represented by the bytes, byte array, and memory view types. Binary data manipulation is accomplished through the use of bytes and byte array. The memory view makes use of the buffer protocol in order to access the memory of other binary objects without the need to make a copy of the data. Bytes objects are immutable sequences of single bytes that can only be changed. When working with ASCII compatible data, we should only use them when necessary.",
  },
  {
    question:
      "The type() function can be used to get the data type of any object.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The type() function can be used to find out what type of data an object contains. Typing an object passed as an argument to Python's type() function returns the data type of the object passed as an argument to Python's type() function. This function is extremely useful during the debugging phase of the process.",
  },
  {
    question: "Binary data type is a fixed-width string of length bytes?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "It is a fixed-width string of length bytes, where the length bytes is declared as an optional specifier to the type, and its width is declared as an integer. If the length is not specified, the default value is 1. When necessary, values are right-extended to fill the entire width of the column by using the zero byte as the first byte.",
  },
  {
    question:
      "Varbinary data type returns variable-width string up to a length of max-length bytes?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Varbinary - a variable-width string with a length of max-length bytes, where the maximum number of bytes is declared as an optional specifier to the type, and where the maximum number of bytes is declared as an optional specifier to the type. The default attribute size is 80 bytes, and the maximum length is 65000 bytes. The default attribute size is 80 bytes. The range of binary values is not extended to fill the entire width of the column.",
  },
  {
    question:
      "Amongst which of the following is / are the logical operators in Python?",
    options: {
      A: "and",
      B: "or",
      C: "not",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "Python's logical operators are represented by the terms and, or, and not. In Python, logical operators are used to perform logical operations on the values of variables that have been declared. Either true or false is represented by the value. The truth values provide us with the information we need to figure out the conditions. In Python, there are three types of logical operators: the logical AND, the logical OR, and the logical NOT operators. Keywords or special characters are used to represent operators in a program.",
  },
  {
    question: "Is Python supports exception handling?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Unexpected events that can occur during a program's execution are referred to as exceptions, and they can cause the program's normal flow to be interrupted. Python provides exception handling, which allows us to write less error-prone code while also testing various scenarios that may result in an exception later on in the process.",
  },
  {
    question: "What is the name of the operator ** in Python?",
    options: {
      A: "Exponentiation",
      B: "Modulus",
      C: "Floor division",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The ** is an exponentiation operator in the Python programming language. In Python, the ** operator is used to raise the number on the left to the power of the exponent on the right, which is represented by the symbol **. In other words, in the expression 2 ** 3, 2 is raised to the third power, which is a positive number. In mathematics, we frequently see this expression written as 23, but what is really happening is that the numbers 2 and 3 are being multiplied by themselves three times. In Python, we would get the same result of 8 by running either 2 ** 3 or 2 * 2 * 2.",
  },
  {
    question: "The % operator returns the ___.",
    options: {
      A: "Quotient",
      B: "Divisor",
      C: "Remainder",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "The % operator (it is an arithmetic operator) returns the amount that was left over. This is useful for determining the number of times a given number is multiplied by itself.",
  },
  {
    question: "Amongst which of the following is / are the method of list?",
    options: {
      A: "append()",
      B: "extend()",
      C: "insert()",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "list.append(x), list.extend(iterable), list.insert(i, x) are the methods of list. list.append(x) - add an item to the end of the list. list.extend(iterable) - extend the list by appending all the items from the iterable. list.insert(i, x) Insert an item at a given position.",
  },
  {
    question:
      "The list.pop ([i]) removes the item at the given position in the list?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation: "The external is not a valid variable scope in PHP.",
  },
  {
    question: "The list.index(x[, start[, end]]) is used to ___.",
    options: {
      A: "Return zero-based index in the list",
      B: "Raises a ValueError if there is no such item",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "The index(x[, start[, end]]) is used to return the zero-based index in the list of the first item whose value is equal to x. index() is used to return the zero-based index in the list of the first item whose value is equal to x. If there is no such item, the method raises a ValueError. The optional arguments start and end are interpreted in the same way as in the slice notation and are used to restrict the search to a specific subsequence of the list of elements. Instead of using the start argument to calculate the index, the returned index is computed relative to the beginning of the full sequence.",
  },
  {
    question: "Python Dictionary is used to store the data in a ___ format.",
    options: {
      A: "Key value pair",
      B: "Group value pair",
      C: "Select value pair",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "Python Dictionary is used to store the data in a key-value pair format, which is similar to that of a database. The dictionary data type in Python is capable of simulating the real-world data arrangement in which a specific value exists for a specific key when the key is specified. It is the data-structure that can be changed. Each element of the dictionary is defined as follows: keys and values.",
  },
  {
    question: "The following is used to define a ___.",
    options: {
      A: "Group",
      B: "List",
      C: "Dictionary",
      D: "All of the mentioned above",
    },
    answer: "C",
    explanation:
      "With the help of curly braces (), we can define a dictionary that contains a list of key-value pairs that are separated by commas. Each key and its associated value are separated by a colon (:). For example:\n\n```\nd = {\n\t<key>: <value>,\n\t<key>: <value>,\n\t.\n\t.\n\t.\n\t<key>: <value>\n}\n```",
  },
  {
    question:
      "Python Literals is used to define the data that is given in a variable or constant?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "It is possible to define literals in Python as data that is provided in a variable or constant. Literal collections are supported in Python as well as String and Numeric literals, Boolean and Boolean expressions, Special literals, and Special expressions.",
  },
  {
    question: "Conditional statements are also known as ___ statements.",
    options: {
      A: "Decision-making",
      B: "Array",
      C: "List",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "Conditional statements, also known as decision-making statements, are used to make decisions. In programming, we want to be able to control the flow of execution of our program, and we want to be able to execute a specific set of statements only if a specific condition is met, and a different set of statements only if the condition is not met. As a result, we use conditional statements to determine whether or not a specific block of code should be executed based on a given condition.",
  },
  {
    question:
      "The if statement is the most fundamental decision-making statement?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The if statement is the most fundamental decision-making statement, and it determines whether or not the code should be executed based on whether or not the condition is met. If the condition in the if statement is met, a code body is executed, and the code body is not otherwise executed. The statement can be as simple as a single line of code or as complex as a block of code.",
  },
  {
    question: "Amongst which of the following if syntax is true?",
    options: {
      A: "if condition:",
      B: "if condition",
      C: "{",
      D: "if(condition)",
    },
    answer: "A",
    explanation:
      "If is a keyword which works with specified condition. If statement in Python has the subsequent syntax:\n\nif condition:\n    #Will executes this block if the condition is true",
  },
  {
    question:
      "Amongst which of the following is / are the conditional statement in Python code?",
    options: {
      A: "if a<=100:",
      B: "if (a >= 10)",
      C: "if (a => 200)",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The if statement in Python is used to make decisions in various situations. It contains a body of code that is only executed when the condition specified in the if statement is true; if the condition is not met, the optional else statement is executed, which contains code that is executed when the else condition is met.",
  },
  {
    question:
      "Which of the following is not used as conditional statement in Python?",
    options: {
      A: "switch",
      B: "if...else",
      C: "elif",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "Python does not have a switch or case statement like other programming languages. Because Python lacks switch statement functionality in comparison to other programming languages, it is not recommended for beginners. As a result, we use other alternatives that can replace the functionality of the switch case statement and make programming easier and faster. We employ dictionary mapping to get around this limitation.",
  },
  {
    question:
      "Which of the following is false regarding conditional statement in Python?",
    options: {
      A: "If-elif is the shortcut for the if-else chain",
      B: "We use the dictionary to replace the Switch case statement",
      C: "We cannot use python classes to implement the switch case statement",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "It is possible to shorten the if-else chain by using the if-elif construct. Use the if-elif statement and include an else statement at the end, which will be executed if none of the if-elif statements in the previous section are true. As a replacement for the Switch case statement, we use the dictionary data type, whose key values function similarly to those of the cases in a switch statement. When implementing the switch case statement in Python, we can make use of Python classes. A class is a type of object function Object() { [native code] } that can be extended with properties and methods. So, let's look at an example of how to perform a switch case using a class by creating a switch method within the Python switch class and then calling it.",
  },
  {
    question:
      "In Python, an else statement comes right after the block after 'if'?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "After the 'if' condition, an else statement is placed immediately after the block. if-else statements are used in programming in the same way that they are used in the English language. The following is the syntax for the if-else statement:\n\nif(condition):\n    Indented statement block for when condition is TRUE\nelse:\t\n    Indented statement block for when condition is FALSE",
  },
  {
    question: "In a Python program, Nested if Statements denotes?",
    options: {
      A: "if statement inside another if statement",
      B: "if statement outside the another if statement",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "Nesting an if statement within another if statement is referred to as nesting in the programming community. It is not always necessary to use a simple if statement; instead, you can combine the concepts of if, if-else, and even if-elif-else statements to create a more complex structure.",
  },
  {
    question:
      'What will be the output of the following Python code?\n\na=7\nif a>4: print("Greater")',
    options: {
      A: "Greater",
      B: "7",
      C: "4",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "When only one statement needs to be executed within an if block, the short hand if statement is used to accomplish this. This statement can be included in the same line as the if statement, if necessary. When using Python's Short Hand if statement, the following syntax is used:\n\nif condition: statement",
  },
  {
    question:
      'What will be the output of the following Python code?\n\nx,y = 12,14\n\nif(x+y==26):\n    print("true")\nelse:\n    print("false")',
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "In this code the value of x = 12 and y = 14, when we add x and y the value will be 26 so x+y= =26. Hence, the given condition will be true.",
  },
  {
    question:
      'What will be the output of the following Python code?\n\nx=13\n\nif x>12 or x<15 and x==16:\n    print("Given condition matched")\nelse:\n    print("Given condition did not match")',
    options: {
      A: "Given condition matched",
      B: "Given condition did not match",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "In this code the value of x = 13, and the condition 13>12 or 13<15 is true but 13==16 becomes falls. So, the if part will not execute and program control will switch to the else part of the program and output will be 'Given condition did not match'.",
  },
  {
    question:
      'Consider the following code segment and identify what will be the output of given Python code?\n\na = int(input("Enter an integer: "))\nb = int(input("Enter an integer: "))\n\nif a <= 0:\n    b = b +1\nelse:\n    a = a + 1\nif inputted number is a negative integer then b = b +1\nif inputted number is a positive integer then a = a +1',
    options: {
      A: "if inputted number is a negative integer then b = b +1",
      B: "if inputted number is a positive integer then a = a +1",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "In above code, if inputted number is a negative integer, then b = b +1 and if inputted number is a positive integer, then a = a +1. Hence, the output will be depending on inputted number.",
  },
  {
    question: "In Python, ___ defines a block of statements.",
    options: {
      A: "Block",
      B: "Loop",
      C: "Indentation",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "Python's concept of indentation is extremely important because, if the Python code is not properly indented, we will encounter an Indentation Error and the code will not be able to be successfully compiled. In Python, to indicate a block of code, we must indent each line of the block by the same amount on each line of the block. As a result, indentation denotes the beginning of a block of statements.",
  },
  {
    question:
      "An ___ statement has less number of conditional checks than two successive ifs.",
    options: {
      A: "if else if",
      B: "if elif",
      C: "if-else",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "A single if-else statement requires fewer conditional checks than two consecutives if statements. If the condition is true, the if-else statement is used to execute both the true and false parts of the condition in question. The condition is met, and therefore the if block code is executed, and if the condition is not met, the otherwise block code is executed.",
  },
  {
    question:
      "In Python, the break and continue statements, together are called ___ statement.",
    options: {
      A: "Jump",
      B: "goto",
      C: "compound",
      D: "None of the mentioned above",
    },
    answer: "B",
    explanation:
      "With the goto statement in Python, we are basically telling the interpreter to skip over the current line of code and directly execute another one instead of the current line of code. You must place a check mark next to the line of code that you want the interpreter to execute at this time in the section labelled 'target.'",
  },
  {
    question:
      'What will be the output of the following Python code?\n\nnum = 10\n\nif num > 0:\n    print("Positive number")\nelif num == 0:\n    print("Zero")\nelse:\n    print("Negative number")',
    options: {
      A: "Positive number",
      B: "Negative number",
      C: "Real number",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "In this case, the If condition is evaluated first and then the else condition. If it is true, the elif statement will be executed. If it is false, nothing will happen. elif is an abbreviation for else if. It enables us to check for multiple expressions at the same time. Similarly, if the condition for if is False, the condition for the next elif block is checked, and so on. If all of the conditions are met, the body of the else statement is run.",
  },
  {
    question: "The elif statement allows us to check multiple expressions.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "It is possible to check multiple expressions for TRUE and to execute a block of code as soon as one of the conditions evaluates to TRUE using the elif statement. The elif statement is optional in the same way that the else statement is. The difference between elif and else is that, unlike else, where there can only be one statement, elif statements can be followed by an arbitrary number of statements.",
  },
  {
    question:
      'What will be the output of the following Python code?\n\ni=5\nif  i>11 : print ("i is greater than 11")',
    options: {
      A: "No output",
      B: "Abnormal termination of program",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      'In the above code, the assign value of i = 5 and as mentioned in the condition if 5 > 11: print ("i is greater than 11"), here 5 is not greater than 11 so condition becomes false and there will not be any output and program will be abnormally terminated.',
  },
  {
    question:
      'What will be the output of the following Python code?\n\na = 13\nb = 15\nprint("A is greater") if a > b else print("=") if a == b else print("B is greater")',
    options: {
      A: "A is greater",
      B: "B is greater",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "B",
    explanation:
      'In the above code, the assign value for a = 13 and b = 15. There are three conditions mentioned in the code, print("A is greater") if a > b , here 13 is not greater than 15 so condition becomes false print("=") if a == b , here 13 is not equal to 15 so condition becomes false else print("B is greater"), condition 1 and 2 will not be true so program control will switch to else part and output will be "B is greater".',
  },
  {
    question:
      "If a condition is true the not operator is used to reverse the logical state?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "In order to make an if statement test whether or not something occurred, we must place the word not in front of our condition. When the not operator is used before something that is false, it returns true as a result. And when something that is true comes before something that is false, we get False. That is how we determine whether or not something did not occur as claimed. In other words, the truth value of not is the inverse of the truth value of yes. So, while it may not appear to be abstract, this operator simply returns the inverse of the Boolean value.",
  },
  {
    question: "Loops are known as ___ in programming.",
    options: {
      A: "Control flow statements",
      B: "Conditional statements",
      C: "Data structure statements",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The control flow of a program refers to the sequence in which the program's code is executed. Conditional statements, loops, and function calls all play a role in controlling the flow of a Python program's execution.",
  },
  {
    question:
      "The for loop in Python is used to ___ over a sequence or other iterable objects.",
    options: {
      A: "Jump",
      B: "Iterate",
      C: "Switch",
      D: "All of the mentioned above",
    },
    answer: "B",
    explanation:
      "It is possible to iterate over a sequence or other iterable objects using the for loop in Python. The process of iterating over a sequence is referred to as traversal. Following syntax can be follow to use for loop in Python Program –\n\nfor val in sequence:\n    ...\n    loop body\n    ...\nFor loop does not require an indexing variable to set beforehand.",
  },
  {
    question:
      "With the break statement we can stop the loop before it has looped through all the items?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "In Python, the word break refers to a loop control statement. It serves to control the sequence of events within the loop. If you want to end a loop and move on to the next code after the loop; the break command can be used to do so. When an external condition causes the loop to terminate, it represents the common scenario in which the break function is used in Python.",
  },
  {
    question:
      "The continue keyword is used to ___ the current iteration in a loop.",
    options: {
      A: "Initiate",
      B: "Start",
      C: "End",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "The continue keyword is used to terminate the current iteration of a for loop (or a while loop) and proceed to the next iteration of the for loop (or while loop). With the continue statement, you have the option of skipping over the portion of a loop where an external condition is triggered, but continuing on to complete the remainder of the loop. As a result, the current iteration of the loop will be interrupted, but the program will continue to the beginning of the loop. The continue statement will be found within the block of code that is contained within the loop statement, and is typically found after a conditional if statement.",
  },
  {
    question:
      "Amongst which of the following is / are true about the while loop?",
    options: {
      A: "It continually executes the statements as long as the given condition is true",
      B: "It first checks the condition and then jumps into the instructions",
      C: "The loop stops running when the condition becomes fail, and control will move to the next line of code.",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "While loops are used to execute statements repeatedly as long as the condition is met, they are also used to execute statements once. It begins by determining the condition and then proceeds to execute the instructions. Within the while loop, we can include any number of statements that we want. The condition can be anything we want it to be depending on our needs. When the condition fails, the loop comes to an end, and the execution moves on to the next line of code in the program.",
  },
  {
    question:
      "The ___ is a built-in function that returns a range object that consists series of integer numbers, which we can iterate using a for loop.",
    options: {
      A: "range()",
      B: "set()",
      C: "dictionary{}",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "This type represents an immutable sequence of numbers and is commonly used in for loops to repeat a specific number of times a given sequence of numbers. The range() function in Python generates an immutable sequence of numbers beginning with the given start integer and ending with the given stop integer. For loops, we can use the range() built-in function to return an object that contains a series of integer numbers, which we can then iterate through using a for loop.",
  },
  {
    question:
      "What will be the output of the following Python code?\n\nfor i in range(6):\n    print(i)",
    options: {
      A: "0\n1\n2\n3\n4\n5",
      B: "0\n1\n2\n3\n4\n5\n0\n1\n2\n3",
      C: "1\n2\n3\n4\n5",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The range(6) is define as function. Loop will print the number from 0.",
  },
  {
    question:
      "The looping reduces the complexity of the problems to the ease of the problems?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The looping simplifies the complex problems into the easy ones. It enables us to alter the flow of the program so that instead of writing the same code again and again, we can repeat the same code for a finite number of times.",
  },
  {
    question:
      "The while loop is intended to be used in situations where we do not know how many iterations will be required in advance?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The while loop is intended to be used in situations where we do not know how many iterations will be required in advance. When a while loop is used, the block of statements within it is executed until the condition specified within the while loop is satisfied. It is referred to as a pre-tested loop in some circles.",
  },
  {
    question:
      "Amongst which of the following is / are true with reference to loops in Python?",
    options: {
      A: "It allows for code reusability to be achieved.",
      B: "By utilizing loops, we avoid having to write the same code over and over again.",
      C: "We can traverse through the elements of data structures by utilizing looping.",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "Following point's shows the importance of loops in Python.\n\nIt allows for code reusability to be achieved.\nBy utilizing loops, we avoid having to write the same code over and over again.\nWe can traverse through the elements of data structures by utilizing looping.",
  },

  {
    question:
      "Amongst which of the following is a proper syntax to create a function in Python?",
    options: {
      A: "def function_name(parameters):\n    ...\n    Statements\n    ...",
      B: "def function function_name:\n    ...\n    Statements\n    ...",
      C: "def function function_name(parameters):\n    ...\n    Statements\n    ...",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "To define a function we follow the syntax mentioned in the answer section. def keyword marks the start of the function header. We start from the def keyword and write the name of the function along with function parameters. Function naming follows the naming rules to write identifiers in Python. Arguments or parameters are passed as function arguments. Function arguments are optional. A colon (:) denotes the end of the function header.\n\n```\ndef function_name(parameters):\n    ...\n    Statements\n    ...```",
  },

  {
    question:
      "Amongst which of the following is a function which does not have any name?",
    options: {
      A: "Del function",
      B: "Show function",
      C: "Lambda function",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "Lambda function is an anonymous function, which means that it does not have a name, as opposed to other functions. Unlike other programming languages, Python allows us to declare functions without using the def keyword, which is what we would normally do to declare a function. As an alternative, the lambda keyword is used to declare the anonymous functions that will be used throughout the program. When compared to other functions, lambda functions can accept any number of arguments, but they can only return a single value, which is represented by an expression.\n\nSyntax:\n\nlambda arguments: expression",
  },
  {
    question: "Once we have defined a function, we can call it?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      'Once a function has been defined, it can be called from another function, a program, or even from the Python prompt itself. To call a function, we simply type the name of the function followed by the appropriate parameters into the command line.\n\nFor example-\n\n```python\n# Define a function\ndef user_name(name):\n    # This function greets the user\n    print("Hello, " + name + ".")\n\n# Call the function\nuser_name("Amit")    # \'Amit\' passed as function argument\n\n# Output: Hello, Amit.\n```',
  },
  {
    question:
      "Amongst which of the following shows the types of function calls in Python?",
    options: {
      A: "Call by value",
      B: "Call by reference",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "Call by value and Call by reference are the types of function calls in Python.\n\n- Call by value: When we call a function with values, i.e., to pass the variables (not their references), the values of the passing arguments cannot be changed inside the function.\n\n- Call by reference: When we call a function with the reference/object, the values of the passing arguments can be changed inside the function.",
  },
  {
    question: 'What will be the output of the following Python code?\n def show(id,name):\n    print("Your id is :",id,"and your name is :",name)\n\nshow(12,"deepak")',
    options: {
      A: "Your id is: 12 and your name is: deepak",
      B: "Your id is: 11 and your name is: Deepak",
      C: "Your id is: 13 and your name is: Deepak",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "If we define a function in Python with parameters, and at the time of calling function it requires parameters. In the above code, passing arguments are 12 and 'deepak'. So, the output will be 'Your id is: 12 and your name is: deepak'.",
  },
  {
    question:
      "Amongst which of the following is a function which does not have any name?",
    options: {
      A: "Del function",
      B: "Show function",
      C: "Lambda function",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "Lambda function is an anonymous function, which means that it does not have a name, as opposed to other functions. Unlike other programming languages, Python allows us to declare functions without using the def keyword, which is what we would normally do to declare a function. As an alternative, the lambda keyword is used to declare the anonymous functions that will be used throughout the program. When compared to other functions, lambda functions can accept any number of arguments, but they can only return a single value, which is represented by an expression.\n\nSyntax:\n\n```python\nlambda arguments: expression\n```",
  },
  {
    question: "Can we pass List as an argument in Python function?",
    options: {
      A: "Yes",
      B: "No",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      'In a function, we can pass any data type as an argument, such as a string or a number or a list or a dictionary, and it will be treated as if it were of that data type inside the function. The following code exemplifies this –\n\n```python\n# Define a function\n\ndef St_list(student):\n  # Iterate through the list\n  for x in student:\n    print(x)\n\n# Create a list\nstudents = ["Anil", "Rex", "Jerry"]\n\n# Call the function and pass the list as an argument\nSt_list(students) \n\n# Output:\n# Anil\n# Rex\n# Jerry\n```',
  },
  {
    question: "A method refers to a function which is part of a class?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "A method is a function that is a part of a class that has been defined. It is accessed through the use of an instance or object of the class. A function, on the other hand, is not restricted in this way: it simply refers to a standalone function. This implies that all methods are functions, but that not all functions are methods in the same sense.",
  },
  {
    question: "The return statement is used to exit a function?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "The return statement is used to exit a function and go back to the place from where it was called.\n\nSyntax of return:\n\n```python\nreturn [expression_list]\n```\n\nIn this statement, you can include an expression that will be evaluated and the resulting value will be returned. A function will return the None object if there is no expression in the statement or if the return statement itself is not present within a function's body.",
  },
  {
    question:
      "Scope and lifetime of a variable declared in a function exist till the function exists?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "It is the portion of a program where a variable is recognized that is referred to as its scope. It is not possible to see the parameters and variables defined within a function from outside of the function. As a result, they are limited in their application. The lifetime of a variable is the period of time during which the variable is stored in the memory of the computer. The lifetime of variables contained within a function is equal to the length of time the function is in operation. When we return from the function, they are completely destroyed. As a result, a function does not retain the value of a variable from previous calls to the function.",
  },
  {
    question:
      "File handling in Python refers the feature for reading data from the file and writing data into a file?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "File handling is the capability of reading data from and writing it into a file in Python. Python includes functions for creating and manipulating files, whether they are flat files or text documents. We will not need to import any external libraries in order to perform general IO operations because the IO module is the default module for accessing files.",
  },
  {
    question:
      "Amongst which of the following is / are the key functions used for file handling in Python?",
    options: {
      A: "open() and close()",
      B: "read() and write()",
      C: "append()",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "The key functions used for file handling in Python are: open(), close(), read(), write(), and append(). the open() function is used to open an existing file, close() function is used to close a file which opened, read() function is used when we want to read the contents from an existing file, write() function is used to write the contents in a file and append() function is used when we want to append the text or contents to a specific position in an existing file.",
  },
  {
    question:
      "Amongst which of the following is / are needed to open an existing file?",
    options: {
      A: "filename",
      B: "mode",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "In most cases, only the filename and mode parameters are required, with the rest of the parameters implicitly set to their default values.",
  },
  {
    question: "Binary files are stored in the form of 0s and 1s?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Binary files are also stored in terms of bytes (0s and 1s), but, unlike text files, these bytes do not represent the ASCII values of the characters that are contained within them. A binary file is a sequence of bytes that is stored in a computer's memory. Even a single bit change can corrupt a file, rendering it unreadable by the application that is attempting to read it. In addition, because the binary file's contents are not human readable, it is difficult to correct any errors that may occur in the binary file.",
  },
  {
    question: "The function file_object.close() is used to ___.",
    options: {
      A: "To open the existing file",
      B: "To append in an opened file",
      C: "To close an opened file",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "To close a file that has been opened, use the file object.close() function. To accomplish this, the Python language provides the close() method. When a file is closed, the system releases the memory that was allocated to it.",
  },
  {
    question:
      "Python always makes sure that any unwritten or unsaved data is written to the file before it is closed?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "Whenever a file is closed, Python ensures that any unwritten or unsaved data is flushed out or written to the file's header before the file is closed. As a result, it is always recommended that we close the file once our work is completed. Additionally, if the file object is reassigned to a different file, the previous file is automatically closed as well.",
  },
  {
    question: "The write() method takes a string as an argument and ___.",
    options: {
      A: "writes it to the text file",
      B: "read from the text file",
      C: "append in a text file",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The write() method accepts a string as an argument and writes it to the text file specified by the filename parameter. The write() method returns the number of characters that were written during a single execution of the write() function. A newline character (n) must also be added at the end of every sentence to indicate the end of a line.",
  },
  {
    question: "The seek() method is used to ___.",
    options: {
      A: "Saves the file in secondary storage",
      B: "Position the file object at a particular position in a file",
      C: "Deletes the file form secondary storage",
      D: "None of the mentioned above",
    },
    answer: "B",
    explanation:
      "The seek() method is used to position a file object at a specific location within a file's hierarchy.",
  },
  {
    question:
      "Amongst which of the following function is / are used to create a file and writing data?",
    options: {
      A: "append()",
      B: "open()",
      C: "close()",
      D: "None of the mentioned above",
    },
    answer: "B",
    explanation:
      "To create a text file, we call the open() method and pass it the filename and the mode parameters to the function. If a file with the same name already exists, the open() function will behave differently depending on whether the write or append mode is used to open the file. Write mode (w) will cause all of the existing contents of the file to be lost, and a new file with the same name will be created with the same contents as the existing file",
  },
  {
    question:
      "The readline() is used to read the data line by line from the text file.",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "It is necessary to use readline() in order to read the data from a text file line by line. The lines are displayed by employing the print() command. When the readline() function reaches the end of the file, it will return an empty string.",
  },
  {
    question: "The module Pickle is used to ___.",
    options: {
      A: "Serializing Python object structure",
      B: "De-serializing Python object structure",
      C: "Both A and B",
      D: "None of the mentioned above",
    },
    answer: "C",
    explanation:
      "Pickle is a Python module that allows you to save any object structure along with its associated data. Pickle is a Python module that can be used to serialize and de-serialize any type of Python object structure. Serialization is the process of converting data or an object stored in memory to a stream of bytes known as byte streams, which is a type of data stream. These byte streams, which are contained within a binary file, can then be stored on a disc, in a database, or transmitted over a network. Pickling is another term for the serialization process. De-serialization, also known as unpickling, is the inverse of the pickling process, in which a byte stream is converted back to a Python object through the pickling process.",
  },
  {
    question:
      "Amongst which of the following is / are the method of convert Python objects for writing data in a binary file?",
    options: {
      A: "set() method",
      B: "dump() method",
      C: "load() method",
      D: "None of the mentioned above",
    },
    answer: "B",
    explanation:
      "The dump() method is used to convert Python objects into binary data that can be written to a binary file. The file into which the data is to be written must be opened in binary write mode before the data can be written. To make use of the dump() method, we can call this function with the parameters data object and file object. There are two objects in this case: data object and file object. The data object object is the object that needs to be dumped to the file with the file handle named file_ object.",
  },
  {
    question:
      "Amongst which of the following is / are the method used to unpickling data from a binary file?",
    options: {
      A: "load()",
      B: "set() method",
      C: "dump() method",
      D: "None of the mentioned above",
    },
    answer: "A",
    explanation:
      "The load() method is used to unpickle data from a binary file that has been compressed. The binary read (rb) mode is used to load the file that is to be loaded. If we want to use the load() method, we can write Store object = load(file object) in our program. The pickled Python object is loaded from a file with a file handle named file object and stored in a new file handle named store object. The pickled Python object is loaded from a file with a file handle named file object and stored in a new file handle named store object.",
  },
  {
    question:
      "A text file contains only textual information consisting of ___.",
    options: {
      A: "Alphabets",
      B: "Numbers",
      C: "Special symbols",
      D: "All of the mentioned above",
    },
    answer: "D",
    explanation:
      "Unlike other types of files, text files contain only textual information, which can be represented by alphabets, numbers, and other special symbols. These types of files are saved with extensions such as.txt,.py,.c,.csv,.html, and so on. Each byte in a text file corresponds to one character in the text.",
  },
  {
    question:
      "The writelines() method is used to write multiple strings to a file?",
    options: {
      A: "True",
      B: "False",
      C: "-",
      D: "-",
    },
    answer: "A",
    explanation:
      "In order to write multiple strings to a file, the writelines() method is used. The writelines() method requires an iterable object, such as a list, tuple, or other collection of strings, to be passed to it.",
  },
];
