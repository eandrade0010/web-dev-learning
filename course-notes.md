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
