(I'll skip over cloning the repo b/c github has a tutorial for that)

# Creating a branch

## You should ALWAYS develop in a separate branch.  Never commit directly to the master branch.  If it's *really* small change, you can commit directly to development branch.  Otherwise, try to keep a separate branch for each feature.
 
 `git checkout -b branch_name`
 
 This will move you to a new branch named branch_name that is exactly the same as the branch you were on previously.  No quotes in branch name
 
# Staging Areas

When you write a line of code or create a file, that is a *change*, complete with an author and a timestamp.  That change can be either be committed, staged for commit, or not committed.
* Committed: this change is saved forever.  You can roll back to this moment in time(when that change was the most recent one in the branch), compare this commit to another, and more
: Commit: a bundle of changes.  Think of it like a checkpoint in the timeline of your branch
* Staged for commit: the next time you make a commit, this change will be included.  A separate staging area allows you to only commit certain changes while leaving others for further improvement
* Not staged for commit: this is your working area, all changes go here by default.  Git won't save them unless you *add* to the staging area, then *commit* those changes

# Saving your progress

`git commit -am "commit message"`

: Use quotes around your commit message(little snippet that tells people what you did in that commit).  Try to be clear and concise, and write in present tense

99% of the time, this is what you'll type to save your work.  It's like a video game checkpoint.  So for example, lets say you just made the 'Back' button look nicer.  Just type `git commit -am "back button looks better"`

When you're ready, `git push` saves your progress to the cloud.  If it's your first push in this branch, use `git push --set-upstream origin head`

Switch branches with `git checkout branch_name`

## Sample workflow: adding a /memes route
* `git checkout dev`: switch to development
* `git pull`: update local copy of the project
* `git checkout -b arthur/memes_page`: create a branch called arthur/memes_page and switch to it
* Open /routes/index.js and add the code
* `git commit -am "added route"`: stage and commit your changes
* `git push --set-upstream origin head`: push changes to github
* `git checkout dev`: switch back to dev
 
