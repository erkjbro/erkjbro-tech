# Erik J Brown Tech Homepage

A portfolio website to describe projects, courses, methods, and more.

# Get started
 - Clone the project.
 - `yarn install`: Install all dependencies
 - `yarn start`: Start the project for development

# Project structure & architecture
> #### Caution: This project is using `yarn` instead of npm.

 **Dependencies:**

  - [x] react
  - [x] react-dom

  **Dev Dependencies:**

  > If applicable

 **Project Structure:**

This project was bootstrapped using `create-react-app`.

# Development Workflow
> Feature Branch Workflow, Git Workflow, or another Workflow Strategy? `master`, `develop`, `feature`, `release`, `hotfix`, or `bug` Branches? Branch naming conventions? Add notes about you & your team's workflow methodology.

> Notes on the project's convention for features, hotfixes, release, etc.

The project is following a **Feature Branch Workflow** pattern since it's a simple demo app.

## Pull Request Guidelines
   * Fetch the latest main: `git pull origin main` or `git fetch origin main` (Don't forget to stay on `main` branch)
   * Create a new branch: `git checkout -b new-branch`.
   * Make your changes and commit often.
   * Were commits pushed to `origin`? If so, you should rebase your branch. Fetch with `git fetch origin main` and run
   `git rebase main`.
   * Resolve conflicts on each commit. Do it with `kdiff3` or anything that suits you. Add these modification and run `git rebase --continue` until you've cleared all conflicts.
   * Test your code.
   * Push your code.
      - If the branch is new, you just use `git push origin myNewBranch`.
      - If you had to rebase, you'll need to force the push with `git push origin myNewBranch -f`.
   * Create the PR and point to the `main` Branch.

# DevOps Info
> Development, Staging, and Production Info?

The app is deployed using **Firebase Hosting**.

# Collaborators
> Include: Person / Role / Contact Info / Timezone

## Business/Technical

  | Name | Role | Contact | Timezone |
  | --- | --- | --- | --- |
  | Erik Brown | Web Developer | erkjbro@gmail.com | USA (GMT-5) |
