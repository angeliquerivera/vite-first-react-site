# Makeup Site Project Notes

## About Projects

[About Github Projects - DOCS](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

## Using Issues

Connecting issues to commits is one of the easiest, streamlined ways to manage the progress of your project automatically. Every single issue is assigned its own unique issue number at creation time.

### Branching To Address Issue/Ticket

Once you have been assigned/focused a particular issue, best practice dictates creating an appropriately labeled branch that will allow you to work towards the completion of the issue in an environment that is safe to test and break things in.

The same way that you prefix commit messages with a topic type is the way that you want to label branches as well.

For reference, here are the types allowed by the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/):

- feat: Features, A new feature
- fix: Bug Fixes, A bug fix
- docs: Documentation, Documentation only changes
- style: Styles, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: Code Refactoring, A code change that neither fixes a bug nor adds a feature
- chore: Chores, Other changes that don't modify src or test files

There are others that you might feel you need to use within this project:

- perf: Performance Improvements, A code change that improves performance
- test: Tests, Adding missing tests or correcting existing tests
- build: Builds, Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Continuous Integrations, Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- revert: Reverts, Reverts a previous commit

#### Creating a branch

Create **AND** checkout the newly created branch all in one command:

```shell
git checkout -b <BRANCH_TYPE/BRANCH_NAME>
```

As an example, you want to create a branch for issue `#21: Add new router API logic for /edit/users`. You could label your branch:

```shell
git checkout -b feat/21-new-edit-users-api
```

which would create your new branch, `feat/21-new-edit-users-api`. Then it's just a matter of working in the branch with properly labeled commits until you're good to go.

### Referencing Within Commit Message

Chances are you're not going to finish fixing your issue in one commit. This means that you will likely have multiple commits within this issue branch that will address incremental progress as you continue working. For the purposes of best tracking your progress, you can reference the issue within your message using its number. Let's say you've completed writing half of the `PUT` logic for issue `#21: Add new router API logic for /edit/users`; your message could look like this:

```shell
git commit -m "feat(API): add first half of /edit/users PUT route logic" -m "Refs: #21"
```

That last `-m` message will contain a refs section that points to one or as many issue references as the commit addresses.

### Closing An Issue Within Commit Message

### Merging Finished Issue/Ticket Branch

### Deleting Issue/Ticket Branch
