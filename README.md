# Q&A

A small question-and-answer community app built with React and TypeScript. Browse unanswered questions, search the question collection, open a discussion, and contribute a question or answer. The interface is responsive and includes client-side form validation.

## Features

- Browse questions that do not have answers.
- Search question titles and content.
- Open a question to read its full content and existing answers.
- Submit questions and answers with required-field and minimum-length validation.
- Use the interface on desktop and mobile screen sizes.

The app is a front-end demo. Its sample questions and submitted content live in memory in the browser and reset when the page reloads. There is no API, database, account system, or real sign-in flow. The Sign In link currently opens a placeholder page. The sample author is set to `Fred` for submissions.

## Getting Started

### Requirements

- Node.js `20.19.1` (the version specified in `package.json`)
- npm

### Install and run

```sh
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000). It reloads when source files change.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server. |
| `npm test` | Run the Jest and React Testing Library tests. |
| `npm run build` | Create an optimized production build in `build/`. |

## Routes

| Path | Screen |
| --- | --- |
| `/` | Unanswered questions and the ask-question action. |
| `/search?criteria=...` | Questions matching the search phrase. |
| `/questions/:questionId` | Question details, answers, and the answer form. |
| `/ask` | Form for submitting a question. |
| `/signin` | Sign-in placeholder. |
| Any other path | Not-found placeholder. |

## Question and Answer Rules

- A question title is required and must contain at least 10 characters.
- Question content is required and must contain at least 50 characters.
- Answer content is required and must contain at least 50 characters.
- Search matches question titles and content, without case sensitivity.
- New questions and answers are added to the in-memory sample collection.

## Project Structure

```text
public/                 Static HTML and web app metadata
src/
	Answers/              Answer and answer-list components
	Header/               Branding, search, and sign-in navigation
	HomePage/             Unanswered question feed
	Icons/                Shared icons
	PageTitle/            Shared page wrapper and title
	Pages/                Ask, search, sign-in, question, and not-found screens
	Questions/            Question item and question-list components
	App.tsx               Routes and Redux provider
	QuestionsData.ts      Sample data and in-memory async operations
	Store.ts              Redux state and actions
	Styles.ts             Shared Emotion form controls and button
	index.css             Global theme, layout, and responsive styles
```

## Implementation Notes

- React 19 and TypeScript provide the component and type system.
- React Router handles client-side navigation.
- Redux stores the current unanswered list, viewed question, and search results.
- `QuestionsData.ts` supplies sample records and asynchronous operations with a short simulated delay; it is not a persistence layer.
- React Hook Form handles form state and validation.
- Emotion provides shared styled controls, while `index.css` defines the global visual system and responsive component styles.
- Create React App (`react-scripts`) provides the development server, test runner, and production build.

## Testing and Production Build

Run the test suite with `npm test`. Create the static production bundle with `npm run build`, then host the contents of `build/` on a static web server configured to serve `index.html` for client-side routes.
