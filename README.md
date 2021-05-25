# The Tipsy Quiz

## By Ruairidh MacArthur

## Code Institute - Milestone Project 2

### Presentation of interactive data using a font-end site

![Example of the application on multiple devices.](/assets/images/readme-images/amiresponsive.png)

[Click here to view Site.](https://roomacarthur.github.io/the-tipsy-quiz/)

[Click here to view Repository.](https://github.com/roomacarthur/the-tipsy-quiz)

# Table of Contents:

<details>

  <summary>Click to expand table of contents</summary>

1. [The Why](#the-why)
2. [User Experience(UX)](#user-experience-UX)
   1. [User Stories](#user-stories)
   2. [Strategy](#strategy)
   3. [Scope](#scope)
   4. [Structure](#structure)
   5. [Wireframes](#wireframes)
3. [Design](#design)
   1. [Colours](#colours)
   2. [Typography](#typography)
   3. [Images & Icons](#images-&-icons)
4. [Features](#features)
   1. [Current Features](#current-features)
   2. [Future Features](#future-features)
5. [Technologies](#technologies)
6. [Testing](#testing)
   1. [Tests](#tests)
   2. [Bugs & Fixes](#bugs-&-fixes)
7. [Deployment](#deployment)
   1. [GitHub Pages](#github-pages)
   2. [Forking Repository](#forking-the-github-repository)
   3. [Cloning the project](#cloning-the-project)
8. [Credits](#credits)

</details>

# The Why

The Tipsy Quiz, is a fun interactive website where the user partakes in a General Knowledge quiz. The quiz itself is themed around a pub quiz. Answer multiple choice questions to gain as high a score possible before the Quiz ends, Don't forget to enter a username and submit your score to rank on the high scores.

# User Experience (UX)

## User Stories

- First time user:

  1. As a user I would like to partake in a fun quiz.
  2. As a user I would like to be able to see how I rank on the High Scores.
  3. As a user I want the application to be easy to navigate.

- Returning User:

  1. I would want to be able to navigate the site with ease.
  2. I would want to be able to quickly check the High Scores.
  3. I would want to be able to remember how to use the application with ease.

- As a site creator:

  1. I want to make the site interactive and fun.
  2. I want to ensure there are questions covering a wide variety of difficulties and subjects.
  3. I want to make sure the user enjoys their time using the application.
  4. I want to provide easy access to the creator to submit questions.

## Strategy

Provide an application that the user can use in a fun and interactive way with clear and effective navigation.

## Project Goals

- To provide a fun and interactive application.
- For the question bank to be regularly updated.
- Allow for users to log scores.
- Provide quiz audio for questions to be read out.

## Scope:

- Interactive application f
- Mobile first, fully responsive design.
- simplified contact form.

## Structure

The structure for the application has been thought out and designed to allow for the user to have a seamless and easy experience. A consistent minimalistic design will be implemented on all pages. The flow of the pages will should feel natural and allow for the user to feel right at home after only viewing one page.

- Header

  - The logo will act as a link back to the homepage.
  - The small navigation will be the same on all pages allowing for quick movement and ease of navigation.

- Quiz

  - A counter to show what question you are on.
  - A button to allow for speech synthesis to read out the question.
  - Your current score.
  - The Question itself.
  - 4 answers buttons of which only 1 is correct.

- Game Over

  - Text field to enter a name.
  - Your score from that round.
  - A submit button
  - Play again button.
  - HighScores button.

- High Scores

  - Rankings for peoples scores.
  - Play button.

- Help

  - Quick and brief description on how to play the quiz.
  - Contact Form.

- Footer
  - Small help button to link to the help page.
  - Dev link / socials.

## Wireframes

Desktop:

- [Home](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/home-desktop.png)
- [Quiz](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/quiz-desktop.png)
- [Game Over](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/gameover-desktop.png)
- [High Scores](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/highscores-desktop.png)
- [Help](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/help-desktop.png)

Tablet:

- [Home](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/home-tablet.png)
- [Quiz](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/quiz-tablet.png)
- [Game Over](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/gameover-tablet.png)
- [High Scores](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/highscores-tablet.png)
- [Help](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/help-tablet.png)

Mobile:

- [Home](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/home-mobile.png)
- [Quiz](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/quiz-mobile.png)
- [Game Over](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/gameover-mobile.png)
- [High Scores](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/highscores-mobile.png)
- [Help](https://github.com/roomacarthur/the-tipsy-quiz/blob/main/assets/wireframes/home-mobile.png)

## Design

## Colours

The colours that will be used throughout the site for it's main styling are shown below, these colours have been picked to keep within the design brief of maintaining a simplified viewing pleasure.

![Colours used for The Tipsy Quiz](/assets/images/readme-images/tipsy-quiz-colours.png)

The colours will be used in specific ways that compliment one another, maintaining good contrast levels.

---

## Typography

With the design of 'The Tipsy Quiz' aiming to be fun and interactive, I have picked two fonts that will have a continual use case throughout the design of the site.

The initial plan was to use [Pangolin](https://fonts.google.com/specimen/Pangolin?preview.text=The%20Tipsy%20Quiz&preview.text_type=custom#standard-styles) and [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab?preview.text=The%20Tipsy%20Quiz&preview.text_type=custom&query=roboto+s). After initial coding and live site viewing with early deployment via GitPages, I soon realized that the font's chosen would not work, so new fonts where needed. I have settled on the following fonts:

1. [Schoolbell](https://fonts.google.com/specimen/Schoolbell?query=school) - A fun and stylish font that is easy to read and will be used for headings.
2. [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins) - A very stylish and easy to read font. Will be used for the bulk of text.
3. [Oswald](https://fonts.google.com/specimen/Oswald?query=oswal) - This bold and block style font will be used for navigation items.

---

## Images & Icons

There will be multiple icons used throughout the application. [Font Awesome]() will be the main source for icons.

During the design phase there was no real need for images to be used but the sparsity on the homepage after initial HTML and CSS was completed pushed me to include an image in the open space. The image I used was taken from a [Cocktail Party App](https://cocktailpartyapp.com/better-lychee-cocktails-alternatives-to-the-lychee-martini/) Blog post.

---

# Features

## Current Features

- Ability to have Question read out.
- Correct and incorrect audio
- Save score to a local High Scores table.

## Future Features

- Dark mode.
- Random subject wheel.
- Difficulty Mode.

# Technologies

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Other Technologies, Frameworks & Libraries

- [Google Fonts](https://fonts.google.com/)
  - Used for importing fonts, allowing for the fonts to be available for all users.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome provides all the icons used for the site.
- [Visual Studio Code](https://code.visualstudio.com/)
  - My personal preference for IDE(Integrated Development Environment) used for this project.
- [Git & GitBash](https://gitforwindows.org/)
  - Git for windows provides a BASH emulation which allows for git to be used straight from the command line.
- [GitHub](https://github.com/)
  - Provided a Remote repository for the application. Allowing for my coding to be backed up online as I go.
- [Balsamic](https://balsamiq.com/)
  - Balsamic was used to design wireframes for the application.
- [Coolors](https://coolors.co/)
  - For colour inspiration and pallet.
- [iCons8](https://icons8.com/icons/set/beer)
  - icons8 was used for sourcing a Favicon.
- [Stack Overflow](https://stackoverflow.com/)
  - For general Queries and reassurance.

# Testing

## Tests

## Bugs & Fixes

1. README.md links to open in new tab.
   - Some specific links to this README.md file would work better if they opened in a new tab when clicked but after some testing and then research I found out that this in fact is not possible. [Evidence.](https://stackoverflow.com/questions/50834937/open-readme-md-link-in-new-tab-github)
2. :is CSS pseudo-class
   - This was used after watching [Kevin Powells](https://www.youtube.com/watch?v=McC4QkCvbaY&t=399s) video on simplifying CSS, unfortunately when passed through the [CSS Validator](https://jigsaw.w3.org/css-validator/) this showed errors, where I had used the :is class, Therefor I have removed and replaced with code that passes, this code is longer but passes the validation.
3. When using application on mobile the hover effect is still present on next question, also hover only works when clicked. [See here for evidence]().
   - For this I have removed the pseudo class :hover and added JS event listeners for mouseover/mouse/leave and then for touch on mobile.

# Deployment

## GitHub pages

For a live preview of the site, the code has been deployed via GitHub pages, this has been done at the start of the project to implement device testing as the build progresses.

The steps to deploy via GitHub pages are as follows:

1. Log into Github account.
2. Navigate to the [Repository](https://github.com/roomacarthur/the-tipsy-quiz).
3. Click the 'Settings' option at the top of the repository.
4. Click the 'Pages' option on the left-hand menu, located near the bottom.
5. Within the 'Source' tab Select the drop down titled 'None'.
6. Select the branch named 'main' (in some cases it can be named 'Master').
7. Click 'Save'.
8. You will be prompted with a URL to your deployed site.
9. Site deployed.

When the above steps have been completed, it can sometimes take a little while for the deployed URL to update, So just keep checking back and refreshing the page until your site is visible.

---

## Forking The GitHub Repository

To use this code and make changes without effecting the original code you can do what is called 'Forking the repository'. By forking this repository you are given a copy of the code at that moment in time that you can use freely. To fork this repository you need to follow the following few steps:

1. Log into your GitHub account.
2. Navigate to the [Repository](https://github.com/roomacarthur/the-tipsy-quiz), you are wanting to fork.
3. In the upper-right of the repository, click the 'Fork' button.
4. A copy of the Repository will now be available within your own personal repositories.

You will now have a copy of the code available to clone and work on without effecting the original code.

---

## Cloning the Project.

To make a local clone of the project follow these steps:

1. Log into your GitHub Account.
2. Navigate to the [Repository](https://github.com/roomacarthur/the-tipsy-quiz).
3. In the upper section of the repository click the dropdown named 'Code'.
4. Copy the SHH address.
5. Open GitBash
6. Navigate to the correct directory.
7. Create a new directory named 'the-tipsy-quiz'.
8. CD into 'the-tipsy-quiz'.
9. Enter 'git clone SSH_ADDRESS'
10. GitBash will clone the repository into this directory.
11. enter 'code .' and this will open VSCODE and happy coding.

---

# Credits

1. [Brian Design](https://youtu.be/f4fB9Xg2JEY)
   - Brian Design's YouTube tutorial for a vanilla JS quiz was followed, his code was used in a boilerplate fashion, the code has been edited significantly to reach the aimed objectives for the site.
2. [Shake Hover Effect](https://www.w3schools.com/howto/howto_css_shake_image.asp)
   - W3Schools code for "shake effect" was used.
3. [SpeechSynthesis](https://codingislove.com/speech-with-javascript/)
   - Assistance with implementing speech synthesis.

---

[RETURN TO THE TOP](#The-Tipsy-Quiz)
