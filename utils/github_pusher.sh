#!/bin/bash

# Get the current branch name
current_branch=$(git branch --show-current)

# Stage all changes
git add .

# Prompt for commit message
read -p "Enter commit message: " commit_message

# Commit the changes
git commit -m "$commit_message"

# Push the changes to the current branch
git push origin "$current_branch"

# Display a success message
echo "Changes have been successfully pushed to branch $current_branch"


# ./utils/github_pusher.sh 
# make it an exec file
