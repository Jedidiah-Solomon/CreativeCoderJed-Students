# Day Two Answers 
## List 20 unix-based commands (which can also be said to be git commands) and their uses. 

1. git show [commit]
Displays detailed information about a specific commit, including changes made, the commit message, and the author.
2. git log --oneline
Displays the commit history in a condensed, one-line-per-commit format.
3. git config --global user.name "Your Name"
Configures Git with your username (globally or locally).
4. git config --global user.email "you@example.com"
Configures Git with your email address (globally or locally).
5. git clean -f
Removes untracked files from the working directory.
Initializes and updates all submodules in the repository.
6. git revert --no-commit [commit]
Reverts the changes introduced by a commit without automatically creating a new commit.
7. git commit --amend
Edits the most recent commit message or adds new changes to the previous commit.
8. git diff --staged
Shows the differences between the staged changes and the last commit.
9. git merge --abort
Cancels an ongoing merge and restores the state before the merge started.
10. git commit -m "message"
Records the staged changes to the repository with a descriptive message.
11. git reset --hard [commit]
Resets the working directory and index to a specific commit, discarding all changes after that commit.
12. git fetch --prune
Cleans up remote-tracking references that no longer exist on the remote repository.
13. git remote add [name] [URL]
Adds a new remote to your repository with a given name and URL.
14. git push --force
Forces a push to a remote repository, overwriting changes in the remote branch. Use with caution, as it can overwrite other collaborators' work.
15. git push --tags
Pushes all local tags to the remote repository.
16. git log -p
Shows the commit history along with the changes (diffs) made in each commit.
17. git rebase -i [commit]
Opens an interactive rebase session, allowing you to edit, squash, or reorder commits.
18. git branch
Lists all branches in your repository. With git branch [branch-name], you can create a new branch.
19. git checkout [branch-name]
Switches to the specified branch or restores files to a specific state.
20. git diff
Shows the differences between files in the working directory, staging area, and commits.


# Remarks
1. Nice one
2. Lookout for linux commands more also that are for local development and command line interface.
