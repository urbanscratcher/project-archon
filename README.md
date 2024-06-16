# Archon v2
[Visit](https://archon.placidgull.com)

March 2024 ~ June 2024 (3.5 months)

This is a personal project I undertook to practice Next.js. It is a renewal of the Archon V1 project, which was originally written in vanilla JavaScript.

## Features

- Reimplemented the entire application, including the design, content hierarchy, category-based articles, bookmarks, and article recommendations, with several other improvements.
- **Navigation Improvement**: Improved the behavior of the main menu and topic menu.
- **Top Messages**: Displayed top messages based on user events, such as adding or removing bookmarks, or clicking the link copy button.
- **Newsletter Subscription Confirmation**: Upon entering information in the newsletter form, a confirmation email is sent to the user.
- **Improved Article Recommendation Logic**: The trending article list is shown based on the actual number of clicks by users, which reflects the most clicked articles in the past 3 months.
- **Responsive Design**: Improved the design to be more mobile-friendly.

## Technical Focus

- Utilized SSR (Server-Side Rendering) with Next.js and focused on distinguishing CSR (Client-Side Rendering) components. Set the `revalidate` option to 5 minutes for data fetching to provide the latest data to new users requesting the page within that timeframe.
- Considered how to separate and structure UI components during refactoring. Created feature-based components within the app folder and shared components outside of it. In the shared components folder, components were categorized into atoms, molecules, and organisms.
- While borrowing the design theme from Archon V1, I made slight changes to styling, such as the navigation bar, and focused on responsive design.
- Implemented a toaster feature to display messages on the top. Managed adding and removing multiple messages with `zustand`, allowing one component to manage them. Although it may not be 100% stable, I was able to learn more data structures and React component operations.
- Used Next.js server actions and `react-hook-form` together for the subscription form and implemented email sending with `nodemailer`.
- Handled error and loading in the Next.js way.

## Demo

1. Main Screen
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/b82b667a-41f4-4071-9a46-c546f73006b7" controls></video>

2. Responsive Design (Tablet, Mobile)
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/495df001-0003-4d1f-a04c-82b8bcb2e3ba" controls></video>

3. Newsletter Subscription
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/b55813c8-8f2d-405a-9b8c-07d75f20a411" controls></video>

4. Topic-Based Article List
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/c51f0242-a75a-49a2-bba4-24f0e9ee157f" controls></video>

5. Bookmark
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/ce7f8009-6132-4599-b7f6-167f37c63b60" controls></video>

6. Random Article Recommendation
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/7644b436-7463-47fd-9f6e-1f32bdd594eb" controls></video>

7. Author List Pagination
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/937ce45b-cc3e-4caa-99ab-3e512b97a4ae" controls></video>

8. Link Sharing
<video src="https://github.com/urbanscratcher/project-archon/assets/17016494/a8c16ea3-224d-4f03-92ca-83ba323e7678" controls></video>

## Tech Stack

### Frontend

- **Framework**: Next.js
- **Styling**: TailwindCSS
- **Type Checking**: zod
- **Global State Management**: zustand
- **Remote State Management**: tanstack/react-query
- **Etc**: react-hook-form, nodemailer

### Backend

#### Archon API
- Same as Archon-cms. [GitHub Repository](https://github.com/urbanscratcher/project-archon-api)
- **Library**: Express, Node.js
- **Database**: MariaDB
- **Logging**: Pino, Pino-http
- **Security**: Express-rate-limit, Xss, Helmet, Hpp, Bcrypt, etc.
- **API Testing**: Postman
- **Image Service**: Cloudinary

### Development Environment

- **Source Code**: GitHub
- **Build Tool**: Vite
- **Package Management**: pnpm
- **Etc**: VSCode, Eslint, Prettier

### Cloud Services & Deployment

- **Image Hosting**: Cloudinary
- **Backend Hosting & Deployment**: Oracle Cloud, Docker, Nginx (connected to a personal sub domain)
- **Frontend Hosting & Deployment**: Oracle Cloud, Docker, Docker Hub, Nginx (connected to a personal sub domain)

## Componentization

### Naming Conventions

- Server components are suffixed with `Loader` to indicate that the component loads data asynchronously.
- Created basic components such as List and Box (div) for readability.

### Component Separation Principles

- A component is a UI piece that includes its own data, logic, and appearance. Components are reusable, can be nested, and can exchange data.
- Considered the following four principles for creating components:
  1. Logical separation of content/layout:
     - Does the component include unrelated content or layout?
  2. Reusability:
     - Can any part of the component be reused?
     - Do you want or need to reuse it?
  3. Responsibility/Complexity:
     - Is the component doing too much?
     - Does the component depend on too many props?
     - Does the component have too much state or effects?
     - Is the code, especially JSX, too complex or confusing?
  4. Coding Style:
     - Do you prefer smaller functions/components?

### Atomic Design

- Attempted to define and categorize components according to atomic design. Focused on components at the levels of Atoms, Molecules, and Organisms.
  1. Subatomic particles - Tokens of the design system (defined through TailwindCSS)
  2. Atoms - Smallest indivisible units
  3. Molecules - Components with a single function (SRP) such as rows or items
  4. Organisms - Components with multiple functions such as lists or cards
  5. Templates, Pages - Next.js's page.tsx and layout.tsx (thus omitted in this project)

---

## Reflection

- This project was tough due to the separation between server components and client components in Next.js. Even though I broke down the components, separating them between server and client made the overall structure feel less intuitive because of the deep tree structure. I kept constantly asking "What happens when a server component contains a client component and vice versa?"
- Ultimately, I concluded that Next.js is better suited for projects that requires SEO due to its high complexity. It also made me realize that a solid understanding of React is essential.
- I encountered issues with APIs not working as expected, which required further adjustments. Creating dummy content and debugging the admin site felt like an endless task, so I decided to wrap up the project as it was.
- Without a separate mobile plan in Figma for the Archon project, I think I missed a sense of scale when implementing mobile design. As a result, the hierarchy of text and margin sizes might feel a bit misaligned. After the iterative process of building, checking on mobile, redesigning, and debugging, which was highly inefficient, my belief that design and planning must come first solidified.
- Generated dummy content using ChatGPT 4o and Gemini was extremely useful.

## Next

- I want to explore Next.js's image optimization features further.
- I plan to implement skeleton UI for smoother loading.
- I aim to incorporate more mobile or tablet-specific motions for interactions.
