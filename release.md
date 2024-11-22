# Steps to Create a Release in GitHub

Here’s a step-by-step guide on how to create a release in GitHub:

1. Tag a Commit
   Purpose: Associate your release with a specific point in the code (commit).
   How: Go to the "Code" tab of your repository.
   Find the commit you want to release, or ensure you're on the correct branch where the changes are.
   Use Git to tag the commit. You can do this using Git in your terminal with the following command:

   `git tag -a v1.0.0 -m "First release"`

   This tags the current commit with a version number (e.g., v1.0.0)
   -a v1.0.0: This creates an annotated tag with the name v1.0.0.
   -m "First release with new greetings.yml update": The message explains the tag, such as "First release with new greetings.yml update".
   HEAD: Git will automatically tag the most recent commit (HEAD) if you don't specify the commit hash.

or use ``git log` to see the commit history, then select the with a particular commit hash say "facf20a8b7cbf382f1205e3895581cfce8f64eed"

`git tag -a v1.0.0 facf20a8b7cbf382f1205e3895581cfce8f64eed -m "First release with new greetings.yml update"`

Push the tag to GitHub:

`git push origin v1.0.0`

Note: v1.0.0 is the version number you want to assign, and it follows semantic versioning.

2. Create the Release
   Purpose: This is where you officially define the release in the GitHub interface.
   How: Go to your GitHub repository page.
   Click on the "Releases" section, which can be found just below the repository name (next to "Issues" and "Pull Requests").
   Click on the "Draft a new release" button.
   In the "Tag version" field, select the tag you just pushed (e.g., v1.0.0). If the tag doesn’t appear, make sure it has been pushed to the repository.
3. Include Assets
   Purpose: Optionally, provide users with downloadable files (e.g., compiled binaries, source code, or other resources).
   How: After choosing your tag version, scroll down to the "Attach binaries by dragging & dropping them here" section.
   Drag and drop any compiled files (e.g., .zip, .exe, .tar.gz) or other resources you want to include in the release.
   These assets will be available for download by users once the release is published.
4. Write Release Notes
   Purpose: Provide details about what’s new in this release.
   How: In the "Release notes" section, write a summary of what’s included in this release. Typically, this includes:New features added.
   Bug fixes.
   Changes made to the software.
   Important notes for users (e.g., installation instructions, breaking changes).
   Example release notes:

```
- Added login functionality
- Fixed bug where app crashed on startup
- Improved UI responsiveness
```

5. Publish the Release
   Purpose: Make the release available to the public or specific users.
   How:
   After you’ve added your version tag, attached assets, and written the release notes, scroll to the bottom of the page.
   You’ll have the option to either:
   Save draft: If you’re not ready to publish, you can save it as a draft.
   Publish release: To make the release official, click the "Publish release" button.
   Once published, the release is visible to all users and can be downloaded from the GitHub releases page.

6. `.zip or .tar.gz` are the file extensions used.
