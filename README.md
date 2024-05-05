# Magazine Website Project

- This is a personal project on a magazine website to practice Next.js

## Naming convention

- Components rendering children
  - \_Wrapper: have 1-2 unique styles
  - \_Box: have simple styles related to position. no whitespacing
  - \_Container: have complex/complete styles like whitespace, border, position, etc
  - \_Head: head of something
  - \_Grid: grid layout
  - Section\_: section el.
  - List\_: ul el.
  - Item\_: li el.
- Components composing elements
  - \_Section: section el. complex/complete composition happens
  - \_Content: async component including **data**. complex/complete composition. reduce the level of abstraction. avoid deepening component layers
  - \_List: ul el.
  - \_Item: li el.
- Solo components
  - \_Text: styled text component. required 'text' prop
  - \_Label: styled label component. required 'label' prop
- Note
  - I divided components following atomic design as small as possible as practice, even not reusable one

## Structure of Components

- Piece of UI that has its own data, logic, appearance (how it works and looks)
- Components can be reused, nested inside each other, and pass data between them
- 4 Principles of making a component: checklist
  1. Logical Separation of Content/layout
  - Does the component contain pieces of content or layout that don’t belong together?
  2. Reusability
  - Is it possible to reuse part of the component?
  - Do you want or need to reuse it?
  3. Responsibilities/Complexity
  - Is the component doing too many different things?
  - Does the component rely on too many props?
  - Does the component have too many pieces of state and/or effects?
  - Is the code, including JSX, too complex/confusing?
  4. Coding Style
  - Do you prefer smaller functions/components?
- Atomic Design
  1. Subatomic particles - design system
  2. Atoms - unit
  3. Molecules - row, item, 1 function(SRP)
  4. Organisms - list, card, more feature-oriented, multiple functions
  5. Templates - standardized layouts for organizing
  6. Pages

/\*
:root {
Font Sizes
--h0-xs: 2.8rem;
--h1-xs: 2.1rem;
--h2-xs: 1.6rem;
--h3-xs: 1.4rem;
--body-m-xs: 1.3rem;
--body-s-xs: 1.2rem;
--body-xs-xs: 1.1rem;

--h1-xl: 6.6rem;
--h1-m: 4.4rem;
--h1-s: 3rem;
--h1-spacing-xl: -0.05rem;
--h2-xl: 5.3rem;
--h2-m: 3.533rem;
--h2-s: 2.35rem;
--h2-spacing-xl: 0px;
--h3-xl: 3.8rem;
--h3-m: 2.8rem;
--h3-s: 1.8666rem;
--h3-spacing-xl: 0.025rem;
--h4-xl: 2.6rem;
--h4-m: 2.1rem;
--h4-s: 1.5rem;
--h4-spacing-xl: 0px;

--body1-xl: 1.7rem;
--body1-m: 1.5rem;
--body1-s: 1.3rem;
--body1-spacing-xl: 0.05rem;
--body2-xl: 1.5rem;
--body2-m: 1.3rem;
--body2-s: 1.2rem;
--body2-spacing-xl: 0.025rem;
--body2-spacing-m: 0.01rem;

--button-xl: 1.5rem;
--button-m: 1.3rem;
--button-s: 1.1rem;
--button-spacing-xl: 0.125rem;
--button-spacing-s: 0.08rem;

--caption-xl: 1.3rem;
--caption-m: 1.2rem;
--caption-s: 1.1rem;
--caption-spacing-xl: 0.04rem;

Sizes
--size-xs: 0.4rem;
--size-s: 0.8rem;
--size-m: 1.6rem;
--size-l: 3.2rem;
--size-xl: 4.8rem;
--size-2xl: 6.4rem;

Radius
--rad-img: 1.6rem;
}
\*/
