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

### Lesson 5: Positioning Content

#### Positioning with Floats
- Float allows us to remove an element from the normal flow of a page and position it to the left or right of its parent element. All other elements will then flow around the element
- The float property accepts either `left` or `right`

##### Floats in Practice
- Floats will float all the way to the edge of either the parent element or the Page
- We can fix the `width` of the element and include margins so that no columns overlap

###### Floats may change and Element's Display Value
- If an inline-level element is floated it's display will be changed to block

- If we would like to construct multiple columns you must float all columns to the left, ensure appropriate margins and widths.

##### Clearing and Containing Floats
- Was never intended for layout and positioning purposes so there are a few drawbacks:
  - Proper styles might not be rendered on element next to or is a parent of a floated element
- Need to clear or contain floats to prevent content from wrapping around floated elements

###### Clearing Floats
- The `clear` property accepts: `left`, `right`, or `both`
- Clear should be applied after floated elements to return page to normal flow

###### Containing Floats
- To contain, a floated element must reside within a parent element whom will act as a container
- Method for containing elements is known as a clearfix

#### Positioning with Inline-Block
- Recall that the inline-block will allow to display elements within a line with box properties

##### Inline-block in Practice
- The spaces will be too great!

###### Removing Spaces between Inline-Block Elements
- By keeping the opening tag of the next section on the same line as the previous closing tag, ensures space between elements won't exist
  - Similarly, can also use commented spaces between the two

#### Creating Reusable Layouts

#### In Practice

#### Uniquely Positioning Elements
- The `position` property identifies how an element is positioned on a page and whether or not it will appear within the normal flow.
- Default position value of static which can be overwritten

##### Rleative Positioning
- Allows to appear within normal flow of a page while leaving space for an element and NOT allowing wrapping
- Positioning relative to original position

##### Absolute Positioning
- Will be moved in relation to its closeset relatively positioned parent element

### Lesson 6: Working with Typography
- Fonts can now be embedded

##### Typeface vs Font
- Typeface of what we see. Font is a file that CONTAINS the typeface. Think song and mp3

#### Adding Color to Text
- Use the `color` property

#### Changing Font Properties

##### Font Family
- Font-family property declares fonts as well as fallbacks, separated by commas
- Font names consisting of two or more words must be wrapped in quotations

##### Font Style
- Font-style property accepts either `normal`, `italic`, `oblique` or `inherit`

##### Font Variant
- Font-variant accepts three values: `normal`, `small-caps`, and `inherit`

##### Font Weight
- `font-weight` property accepts keyword or numeric values
  - Keyword include `normal`, `bold`, `bolder`, `lighter`, and `inherit`
  - Numerical range from 100-900. Thin to thickest

##### Typeface Weights
- Some typefaces don't come in all weights so they will default to the closest related weight

##### Line Height
- Distance between two line of text
- Can use height and line-height to vertically center a single line of text within an element

##### Shorthand Font Properties
- Shorthand values should be given as:
`font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, `font-family` WITHOUT commas, except for font-family property values
- A forward slash is needed between font-size and line-height
- May choose to use only font-size and font-family in shorthand

##### Font Properties All Together
- Pseudo-class styles such as `:hover` is added to a selector to style an element when it is in a unique state

#### Applying Text Properties

##### Text Align
- Use the `text-align` property with values of `left`, `right`, `center`, `justify`, and `inherit`

##### Text Decoration
- The `text-decoration` property accepts values of `none`, `underline`, `overline`, `line-through`, and `inherit`

##### Text Indent
- Will intent first line of text within an element
- E.g., `text-indent: 20px;`

##### Text Shadow
- The `text-shadow` property allows us to add a shadow or multiple shadows and takes four values from left to right, with the first three being lengths and the last being color
  - Length values: (1) horizontal offset, (2) vertical offset, and (3) shadow's blur radius
- Multiple text shadows can be chained together

##### Box Shadow
- The `box-shadow` property works similarly to the text shadow property
- Accepts optional fourth length value for spread of a shadow
  - Can expand shadow or shrink`
- Also accepts optional `inset` value to place shadow inside an element

##### Text Transform
- Accepts five values: `none`, `capitalize`, `uppercase`, `lowercase`, `inherit`

##### Letter Spacing
- Can use `em` for sizing to ensure relative spacing with varying font sizes

##### Word Spacing

##### Text Properties All Together

#### Using Web-Safe Fonts
- There a few fonts that are pre-installed on most devices
  - Arial, Garamond, Lucida, Tahoma, Trebuchet, Courier, Courier New, Georgia, Palatino Linotype, Times, Times New Roman, Verdana

#### Embedding Webfonts
- Can upload fonts to a server and include them using the CSS @font-face at-rule
- Useful link: (https://fonts.google.com/)

#### Including Citations and Quotes
- When to use which
  - `<cite>`: reference to a creative work, author or resource
  - `<q>`: for short inline quotations
  - '<blockquote>': for long external quotations

##### Citing a Creative Work
- Sometimes cite attribute is included on the `<q>` element

##### External Quotation
- Can also include a cite attribute as well as a `<cite>` element wrapped within it

##### Summary

### Lesson 7: Setting Backgrounds and Gradients

#### Adding a Background Color
- `background`accepts colors and images in shorthand form while the `background-color` property accepts colors strictly
  - Again, colors can be keyword, hexadecimal, rgb(), rgba(), hsl(), or hsla()
- Transparent Backgrounds
  - Some browsers do not support RGBa or HSLa so it would be best to provide a fallback color
  - Fallback can be done by defining the property twice

#### Adding a Background Image
- Can use the `background` property or `background-image` property with the source as a string parameter to the `url()` function
- Default will tile image to fill the background

##### Background Repeat
- This property accepts `repeat`, `repeat-x[y]` or `no-repeat`

##### Background Position
- Top-left corner by default
- `background-position` will move the background with respect to the top-left default
- Requires two values in this order: horizontal offset, vertical offset
- Lengths or keywords can be used (top, right, bottom, left; e.g., left top)

##### Shorthand Background Image Values
- The background property will accept all in this order: background-color, background-image, background-position, and background-repeat

#### Designing Gradient Backgrounds`
- Can be created using the `background` or `background-image` Properties

##### Gradient Background Vendor Prefixes

##### Linear Gradient Background
- Defined within the `background` or `background-image` property using the `linear-gradient()` function which accepts two values, the beginning and ending color
  - Use fallbacks

##### Changing the Direction of a Gradient Background
- Default is top to bottom
- Can be designated using keyword values or degree value, BEFORE color values
  - E.g., `to right bottom`
- NOTE: If using degrees, the end will be the origin of the frame

##### Radial Gradient Background
- Use the `radial-gradient()` function
- First color starts at absolute center
- More complex; refer to [radial gradients](https://dev.opera.com/articles/css3-radial-gradients/)

##### Gradient Color Stops
- Additional colors can be added and should be separated using commas
- The length of a color can be defined using any length value (percentage for instance)
  - Default: 0% to 100%, first to last color

#### Using Multiple Background Images
- Multiple images can be using by comma-separating multiple background values within a `background` or `background-image` property

#### Exploring New Background Properties
- Some new properties introduced with CSS3 include: `background-size`, `background-clip`, and `background-origin`

##### CSS3 Background Size
- Includes length and keyword values  
  - With length values we can specify a width and height with space-separated values
  - Use `auto` to preserve aspect ratio of image

##### Cover and Contain Keyword Values
- The `cover` keyword will cover element while preserving the aspect ratio. This leads to cropping if necessary
- `Contain` will preserve the aspect ratio while trying to preserve entire image within element. Will not always occupy full space of element

##### CSS3 Background Clip & Background Origin
- The `-clip` property specifies surface area background image will cover while `-origin` will specify where the background-position should originate
- New keyword values: `border-box`, `padding-box`, and `content-box`

### Lesson 8: Creating Lists

#### Unordered Lists
- Accomplished using the unordered list block-level element `<ul>`. Each item is wrapped up in an inline `<li>` element

#### Ordered Lists
- Use the order list block-level element `<ol>`.
- Order depends on order in which items are presented
- Have unique attributes such as `start` and `reversed`

##### Start Attribute
- The `start=` attribute defines the number to start the list at

##### Reversed Attribute
- Is a boolean; and because the default is false, including the attribute reverses the list. E.g., `<ol reversed>`

##### Value Attribute
- Each `<li>` item can include a value attribute. Each list item following will count upwards from that number

#### Description Lists
- Used in cases such as a glossary
- Is commenced with a description block-level element `<dl>`. Each then includes the description term element, `<dt>` and then the description element, `<dd>`

#### Nesting Lists
- Lists must be nested within the `<li>` elements of another list

#### List Item Styling

##### List Style Type Property
- The `list-style-type` property. Here you can change markers for example

##### List Style Type Values
- You can format list elements with an image instead of the marker

##### List Style Position Property
- With the `list-style-position` property we can change the positioning of the marker using the values `outside` (default), `inside`, or `inherit`.
- With `inside` the text will wrap below the marker

##### Shorthand List Style Property
- The `list-style` property takes first, the `list-style-type` then the `list-style-position`

#### Horizontally Displaying List

##### Displaying List
- Making list elements inline-blocks will with the `display` property will place them on a single line with a single space between each list item
- Markers will be removed

##### Floating List
- Floating is better option if item marker is needed
- Must include a margin on the list items with float to ensure they do not sit on top of each other
- Remember to use a clearfix to return page to normal flow

##### Navigational List Example

### Lesson 9: Adding Media

#### Adding Images
- Use the inline `<img>` element. Is a self-containing, empty element
- Embed as `<img src="xxx.jpg" alt="Description">`
  - If image can't be rendered, the alt text will be displayed
- Supported image formats: gif, jpg, and png
  - JPG quality images with high color counts
  - PNG great for transparencies or low color counts (best used for icons or background patterns)

#### Sizing Images
- If you identify the size of an image, the browser will reserve the appropriate space and render the page faster
- width and height can be modified directly in the `<img>` tag or with CSS properties
  - CSS properties will take precedence
  - If you define one, the other will resize to preserve aspect ratio
- Common to use CSS to resize images to do so for numerous ones at a time

#### Positioning Images
- Default positioned as inline-level elements.
- May changes using float, display, and box model properties indcluding padding, border, and margin

##### Inline Positioning Images

##### Block Positioning Images
- Can force an image element to block-level element

##### Positioning Images Flush Left or Right
- Better to float to left or right to allow text to wrap around. Make sure to inclue margins!

##### Image Element vs Background Image
- Images can be embedded using both but the image element connotes more semantic meaning to the image

#### Adding Audio
- Can be done using an `<audio>` element. Accepts a src attribute but needs a closing tag

##### Audio Attributes
- the `autoplay` `controls` and `loop` attributes are boolean attributes and don't require a state value
- `controls` will display the audio element
- The `preload` attribute will load any information per the values `metadata` or `none`. As a default the `auto` attribute will be defaulted to and will load ALL information

##### Audio Fallbacks & Multiple Sources
- Three most popular formats are ogg, mp3 and wav.
- Fallbacks can be provided by using explicit source elements within an audio element
  - The source element accepts the `src` attribute as well as `type`
    - Type should be designated as `audio/mpeg` for example

#### Adding Video
- All of the same attributes of audio are used for the `<video>` element
- If the controls attribute isn't defined it will still be displayed
- Width and height properties should be prescribed to help page load faster as with Images

##### Poster Attribute
- The thumbnail for the video!

##### Video Fallbacks
- Define `<source>` elements within a `<video>` element for fallbacks

#### Adding Inline Frames
- Embed another HTML page within the current page
- Uses the `<iframe>` element which accepts a url for its src attributes
- Each has default styles for inset border and width and height
  - Can be modified using HTML attributes: frameborder, width, and height or by using border, width, and height CSS properties

#### Semantically Identifying Figures and Captions
- The `<figure>` and `<figcaption>` element are used to semantically mark up self-contained content or media with a Captions

##### Figure
- Element should be able to be moved around without disrupting content or legibility of the page
- Wrap images in this

##### Figure Caption
- Should appear within the figure element and can only appear once! Can replace the need for `alt` attribute on images

### Lesson 10: Building Forms

#### Initializing a Form
- The `<form>` element defines position of the page control elements and will wrap all elements within form
- Most common attributes are action and method. Action contains URL to which information included within the form will be sent for processing by server
- Method attribute is the HTTP method browsers use to submit form data

#### Text Fields and Textareas

##### Text Fields
- The `<input>` element uses the type attribute, of which the most common is `text` that denotes a single line of text input. Attach a `name` attribute
  - This element is self-contained
- Default type is `text` but HTML5 includes the following: color, email, range, time, date, month, search, url, datetime, number, tel, week
- Different controls will appear based on type

##### Text Area
- The `<textarea>` element also captures text-based data but it can capture significantly long passages. Also has start and end tags that can wrap plain text.
- Only accepts text so name attribute is only one needed
- Accepts two sizing attributes: cols and rows. More commonly modified using CSS however

#### Multiple Choice Inputs and Menus

##### Radio Buttons
- Input element with a radio type. Each should share the same `name` attribute to ensure they correspond to one another
- Value is the choice given. The `checked` boolean will preselect a value

##### Check Boxes
- Similar to radio buttons EXCEPT that the type is `checkbox` and more than one value can be selected!

##### Drop-down Lists
- Use the `<select>` element with the `<option>` elements Within
- Select attribute is name and the option element takes values and a `selected` boolean

##### Multiple Selections
- Use same procedure as drop-down lists but add the `multiple` boolean to the outer `<select>` element

#### Form Buttons

##### Submit Input
- Created using the `<input>` element with a type of `"submit"`
- The value attribute is the text that will appear on the button

##### Submit Button
- As an input element the submit button is self-contained. If more control is desired the `<button>` element may be used.
- Automatically defaults to submit type and needs only a name attribute text. The text appearing between the opening and closing tags will appear on button

#### Other Inputs

##### Hidden Input
- The `hidden` type does not display to the users but is helpful when processing the form

##### File Input
- Use the file value for the type
- Hard to format styling with CSS because of default input styles for file with each browser

#### Organizing Form Elements

##### Label
- Provide captions or headings for form controls. They have opening and closing tags for a description of the control and are tied to the form control using the `for=` attribute. This should be linked to the name of the form control
  - By clicking the caption, user can directly start inputting text to the corresponding field
- Labels can wrap form controls directly from the start

##### Fieldset
- Block-level element that wraps related elements for better organization. Will include a border outline that can be modified using CSS

##### Legend
- Provide a caption or heading for the `<fieldset>` element. Wraps text describing the form controls. Should be included right after the opening `<fieldset> tag`

#### Form & Input Attributes

##### Disabled
- Turns off an element or control so it is not available. Will not send any value to the serve for form processing
- Applying to fieldset element will disable all controls within it

##### Placeholder
- Provides hint or tip within the form or control and disappears once the control is clicked in or gains focus
- Difference between this and value is value stays in place and needs to be deleted

##### Required
- Ensures that element or form control must contain a value upon being submitted to the server
- Invalid elements and form controls can be styled using the `:optional` and `:required` CSS pseudo classes
- Will also make sure the value corresponds to the right type

##### Additional Attributes
- accepts, formaction, formovalidate, maxlength, readonly, autocomplete, formenctype, formtarget, min, selectionDirection, autofocus, formmethod, max, pattern, step

### Lesson 11: Organizing Data with Tables

#### Creating a Table
- At a minimum each table should have the `<table>`, `<tr>` (table row), and `<td>` (table data elements)

##### Table
- Use the `<table>` element to initialize a table on a page

##### Table Row
- Each row uses the `<tr>` elements

##### Table data
- Listing multiple `<td>` elements within a table row element creates columns

##### Table Header
- Can be used to provide a heading for a column or row of cells
- Works just like `<td>` element but is preferred due to provided semantic value
- May be used within both columns and rows
- `scope` attributes helps to identify the content. Uses values of `col`, `row`, `colgroup`, and `rowgroup`.
  - Will indicate that any data within that column relates to that header
- Can use the `header` attribute on a `<td>` element to tie it to a `<th>` element with the corresponding id attribute

#### Table Structure

##### Table Caption
- `<caption>` element for tables. Must come immediately after opening table tag to position it at the top

##### Table Head, Body, & Foot
- Can break up content into groups to structurally organize Tables
- `<thead>` element will wrap the heading row or rows of a table and should come after the caption element
- The `<tbody>` element contains primary data and `<tfoot>` contains data outlining the content of a table

##### Combining Multiple Cells
- Can combine multiple cells using the `colspan` or `rowspan` attributes on table data or header elements
- The integer value denotes amount of cells to span

#### Table Borders

##### Border Collapse Property
- The default value for `border-collapse` is `separate`. Each border will be stacked upon the last or `collapse` will merge adjacent borders

##### Border Spacing Property
- If the border collapse property is set to separate, `border-spacing` will space the borders of adjacent cells
- Can accept two values: horizontal spacing, then vertical spacing

##### Adding Borders to Rows

#### Table Striping
- Can use the `:nth-child` pseudo-class selector with an even or odd argument
- Example: `tbody tr:nth-child(even) {..}`

#### Aligning Text
- Names, descriptions, etc. usually flush left and numbers, figures, etc flush right

### Lesson 12: Writing Your Best Code

#### HTML Coding Practices

##### Write Standards-Compliant Markup
- Poor code is unpredictable!

##### Make Use of Sematic Elements
- Use red teaming!

##### Use the Proper Document Structure
- Remember the `<!DOCTYPE html>` and `<html>`, `<head>`, and `<body>` elements

##### Keep Syntax Organized
- Follow these rules:
  - Use lowercase letters within element names, attributes, and values
  - Indent nested Elements
  - Strictly use double quotes!
  - Remove forward slash at end of self-closing elements
  - Omit values on Boolean attributes!

##### Use Practical ID & Class Values
- Need to relate to content!

##### Use the Alternative Text Attribute on Images
- Accessibility software relies on this!
- If an image doesn't have a meaningful value, it might be better included as a CSS background image

##### Separate Content from Style
- Inline styles make pages take longer to load, more difficult to maintain

##### Avoid a case of "Divitis"
- Make lean and reduce markup, tie multiple styles to single element where possible
- Try to use HTML5 structural elements where possible

##### Continually Refactor Code
- Look for ways to condense code and make it more manageable

#### CSS Coding Practices

##### Organizing Code with Comments
- Keep styles organized in groups and provide comments
- Useful to build table of contents at top of file

##### Write CSS Using Multiple Lines & Spaces
- Place each selector and declaration on a new line

##### Use Proper Class Names
- Class names and values should be modular and pertain to content, not appearance.
- Names should be all lowercase and should use hyphen delimiters

##### Build Proficient Selectors
- Cons of using id selectors far outweigh the pros
- Try to use shorter and primarily direct selectors
  - Nest them two to three levels deep

##### Use Specific Classes When Necessary
- More flexible, e.g. moving an element outside of another will lose its style

##### Use Shorthand Properties & Values
- If only setting one value, use long hand!

##### Use Shorthand Hexadecimal Colors
- always use lowercase characters

##### Drop Units from Zero Values

##### Group and Align Vendor Prefixes
- Indent so that the suffixes stack!
- Always put the prefix-less property last, it is the fallback!

##### Modularize Styles for Reuse

More [resources](https://learn.shayhowe.com/html-css/writing-your-best-code/)
