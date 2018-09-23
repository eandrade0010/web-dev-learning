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
