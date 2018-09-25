# Notes for Courses

## Learn to Code: HTML & CSS
### Lesson 1: Building your First Webpage

#### What are HTML & CSS
- HTML: hypertext markup language gives content structure and meaning by defining content as either headings, paragraphs, or images
- CSS: cascading style sheets is a presentation language that styles that content
- HTML manages content, CSS presents it

#### Understanding Common HTML Terms
- Three common terms are elements, tags, and attributes

##### Elements
- these are designators that define structure and content
- formatted as `< >`

##### Tags
- This bracketing is known as tags
- Tag opens and closes and element
  - Within tags is the content of the element

##### Attributes
- Additional information about an element
- Common attributes are `id` (identifying an element), `class` (classifies an element), `src` (specifies source of embedded content), and `href` (provides hyperlink reference).
- Defined within an opening tag, with values following a `=` sign

#### Setting up the HTML Document Structure
- Plain txt documents save with an `.html` file extension
- All must have a required structure that includes `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`
- The `<!DOCTYPE html>` declaration informs browsers of HTML version, where the second starts the document
- `<head>` include metadata (not displayed)
- all visible content will fall within `<body>` element
- Some self-closing elements exist

#### In Practice
- Refer to [index.html](./practice/index.html)

#### Understanding Common CSS Terms
- Terms include selectors, properties, and values

##### Selectors
- Designates which element(s) to target and apply styles to
- Can target attribute value, e.g., `id` or `class` or type of element
- Selectors are followed with `{}` where the style is defined

##### Properties
- Properties are seperated by `;` and are given values after the `:`
- Some properties include `background`, `color`, `font-size`, `height`, and `width`

##### Values
- Values of properties

#### Working with Selectors
##### Type Selectors
- Target elements by their element type

##### Class Selectors
- Can select particular set of elements
- Of the form `.class`. The preceding period denotes a class

##### ID Selectors
- ID attributes values are only used once per page
- Selected using `#id`

##### Additional Selectors

#### Referencing CSS
- Best practice to include styles in a single external style sheet
- Created as txt document with a `.css` file extension. SHOULD BE SAVED within directory or subdir of html document
- Linking is performed in the head element as such:
```html
<head>
  <link rel="stylesheet" href="main.css">
</head>
  ```
- HREF could be path
- Browser imposes own preferred CSS styles for elements as default. This can be overwritten using CSS resets

#### Using CSS Resets
- CSS resets provide universal style for all browsers. Involves removing margins, paddings, etc.
- There are popular resets such as this [one](https://meyerweb.com/eric/tools/css/reset/)

### Lesson 2: Getting to Know HTML
#### Semantics Overview
- Semantics here means giving content on page meaning and structure by using appropriate elements. Describes value of content

#### Identifying Divisions and Spans
- the `<div>` and `<span>` HTML elements act as containers for styling purposes only. Thus they have no meaning or semantic value
- Useful because they provide ability to target content for stylization
- The `<div>` block-level element is commonly used to identify large groupings of content
- `<span>` is used as an inline-level element to identify smaller groupings within a block-level elements
- We see both commonly with `class` or `id` attributes. This is for style targeting purposes
- Comments in HTML are of the form `<!-- .. -->`. In CSS `/*...*/`

#### Using Text-based Elements
##### Headings
- Block level elements that come in six different rankings: `<h1>` to `<h6>`
- Help break up content and establish hierarchy
- Help search engines index and determine content on a page

##### Paragraphs
- Follow headings

##### Bold Text with Strong
- Two elements will bold text: `<strong>` and `<b>`
- The former gives strong importance to text and the latter is for style

##### Italicize text with Emphasis
- The `<em>` element is semantically used to place a stressed emphasis on text while the `<i>` is used to convey text in an alternative voice or tone (think quotation marks)

#### Building Structure
- The advent of HTML5 mitigated the dependency on `<div>` with the `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements

##### Header
- Used to identify top of a page, article, section or segment of a page
- It is a structural element that falls within the `<body>` element

##### Navigation
- Identifies section of major navigational links
- Miscellaneous one-off links should be wrapped within an anchor element `<a>`

##### Article
- Used to identify section of independent self-contained content. Should be understood wherever it could be transplanted

##### Section
- Used to identify thematic group of content that sometimes contains a heading
- Commonly used to break up and provide hierarchy to a page

##### Deciding Between `<article>`, `<section>`, `<div>` Elements
- Use `<div>` is content is being grouped solely for styling purposes
- If the content can be redistributed, use `<article>`

##### Aside
- Tangential information
- All structural elements are block-level elements that will occupy full available width of page or of element they are nested within (the parent element)

##### Footer
- Closing or end

#### In practice

##### Encoding Special Characters
- Each special character needs to begin with an ampersand, &, and end with a semicolon
- Find a list of special characters [here](https://www.copypastecharacter.com/)

#### Creating Hyperlinks
- Established using the anchor `<a>` inline-level element
- There must be a `href` attribute (hyperlink reference) which identifies destination

##### Wrapping Block-level Elements with Anchors
- Anchor elements have special permission to wrap other level elements
- Allows entire blocks of content to become links

##### Relative & Absolute Paths

##### Linking to an Email Address
- For such purposes, the `href` attribute needs to start with a `mailto:` followed by the email address.
- A subject line can be added using the `subject=` parameter.
- The First parameter following the email address must begin with a question mark to bind it to the hyperlink path
- Here spaces must be encoded with a `%20` and line breaks with `%0A`
- A body for the email may be specified using `body=`

##### Opening Links in a New Window
- You can trigger opening of a link in a new window using the target attribute. I.e., `target="_blank"`

##### Linking Parts to the Same Page
- If we set an id attribute on a section, we can link to that section using `#id`

#### In Practice

#### Summary
- Semantics are very important for HTML with regards to structure and meaning

### Lesson 3: Getting to Know CSS

#### The Cascade
- All styles cascade from top of a style sheet to the bottom

##### Cascading Properties
- Cascading also works with properties inside individual selectors
- Some specificity of selectors CAN break the Cascade

#### Calculating Specificity
- There are three selectors (type, class, id) and each has its own weight of specificity
  - In order of precedence: id, class, type
  - Specificity weights have values of `X-X-X`, e.g., `id` has `1-0-0`
  - The weight is calculated using points `ID-CLASS-TYPE`
  - Denotes superiority when styling conflict occurs

#### Combining Selectors
- When selectors are combined, they should be read from right to left with the rightmost selector being the key selector
- Remember that selecting a class is done using `.class`, an id using `#id`, and a type using `p` (e.g.)

##### Spaces within Selectors
- Are of huge importance
- Best practice NOT to prefix a class selector with a type selector
- Example: `.hotdog p.mustard` is targeting the `.mustard` class within paragraphs that reside within classes of `hotdog`

##### Specificity within Combined Selectors
- The specificity weight of each selector is added, column to column
- Allows more superior combined selectors to take precedence

#### Layering Styles with Multiple Classes
- Keep specificity weights of selectors low via modularity by layering on different styles by using multiple classes
- We can have more than one class attribute value as long as they are separated by a space
- Better than aggregating large specificity weights that might lead to clashes or confusion?

#### Common CSS Property Values
##### Colors
- Defined on sRGB (standard RGB)
- Four primary ways to represent sRGB colors

###### Keyword Colors
- Can be found [here](https://www.w3.org/TR/css-color-3/)

###### Hexadecimal Colors
- Consist of a `#` followed by 3 or 6 characters (either 0-9 or a-f) with each channel or each two relating to each color channel. If each pair is duplicate it can be shortened to three characters
- Helps to know that `0` is black and `f` is white
- A good resource to refer to is this [color-wheel](https://color.adobe.com/create/color-wheel/)

###### RGB & RGBa Colors
- Remember that 0 is black and 255 is white
- Can also include an alpha or transparency channel using the `rgba()` notation.
  - alpha must be a number between 0 and 1, including decimals with 0 being fully transparent

###### HSL & HSLa Colors
- Stands for hue, saturation, and lightness
- Hue is a number from 0 to 360, related to the degree of a color on the color wheel
- Can also implement transparency
- Hexadecimal colors most commonly Used

##### Lengths
###### Absoluate Lengths
- Most popular is pixel

####### Pixels
- Equal to 1/96th of an inch
###### Relative Lengths
- Based on percentages are the most popular. The percentage typically references a parent's element
- The em unit is calculated per an element's font size, i.e., 1em = font-size
  - Often used for styling text as well as spacing around text including margins and paddings

#### Summary
- Color values include keyword, hexadecimal, RGB, and HSL Values
- Length values include pixels, percentages, and em units

### Lesson 4: Opening the Box Model

#### How are Elements Displayed?
- Block-level elements occupy available width and begin on a new line, while inline-level elements occupy only the width their content requires and can line up on the same line.

##### Display
- Each element has a `display` property that CAN be overwritten
- This display property can be overwritten in CSS as either `block`, `inline` or `inline-block` and even `none`

#### What is the Box Model?
- Every element on a page is a rectangular box with width, height, padding, borders, and margins

#### Working with the Box Model
- Each part of the box model corresponds to a CSS property: `width`, `height`, `padding`,`border`, and `margin`.
- Total height and widths of element are sums of margins borders paddings and widths

##### Width and Height
- Property values for non-inline elements may be specified if key to page

###### Width
- Block level elements default to a width of 100%.
-  Inline-level elements accommodate content so they CANT have a fixed sized

###### height
- Defaulted by content

###### Sizing Inline-level Elements
- Block and inline-block level elements will accept width and height properties

##### Margin and padding
- Browsers will apply default ones for legibility and clarity

###### Margin
- Amount of space SURROUNDING element, will fall outside of border
- Can't specify top and bottom margins for inline-level elements

###### Padding
- Falls INSIDE element's border
- WILL work vertically on inline-level elements

###### Margin and Padding Declarations
- Some properties have shorthand and longhand
  - Longhand denotes listing multiple properties and values one after the other
- Margin and padding come in both longhand and shorthand
  - In shorthand, top and bottom, and then left and right can be listed; OR all four top to left moving clockwise
- In long hand, each property name is followed by a dash and the side to which the value is applied

###### Margin and Padding colors
- Transparent!

##### Borders
- Requires three properties: width, style, and color
- In shorthand they follow the above order, or can be separated using longhand
- Borders can also have different appearances, e.g.: solid, double, dashed, dotted, and none

###### individual Border Sides
- Each border's side can be styled and then a explicit value, e.g., `border-bottom-width: 20px`

###### Border Radius
- Border corners can be rounded using `border-radius`
- Can be specified in longhand or shorthand using same order mentioned before (top to bottom or top to left in clockwise direction)
- Can be very specific: `border-top-left-radius`

##### Box Sizing
- CSS3 introduced a `box-sizing` property allowing us to change how the box model works and how an element's size is calculated.
  - Accepts three values: content-box, padding-box, and border-box

###### Content Box
- Browsers began supporting different values and properties by way of vendor prefixes and can be seen on both properties and values, all depending on the CSS specification
- Common vendor prefixes are `moz`, `ms`, `webkit` for mozilla, IE, and chrome & safari respectively

###### Padding box
- ALters box model by including the padding property within the width and height of an element. If a padding is defined, the content will shrink to fit
- No longer Used

###### Border Box
- Value is `border-box`
- Border AND padding included within the width and height of an element
- Margin values still always have to be added

###### Picking a Box Size
- There IS a lack of support for CSS3 specifications

#### Developer Tools

#### In Practice

##### The Universal Selector
- In CSS, the asterisk * selects every element
- The `:before` and `:after` can be dynamically generated and are pseudo elements

#### Summary
