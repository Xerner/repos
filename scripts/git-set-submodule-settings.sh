# https://git-scm.com/book/en/v2/Git-Tools-Submodules
git config --global diff.submodule log # makes git diff show new submodule commits
git config --global --add status.submodulesummary true # makes git diff show submodule changes summary
git config --global --add submodule.recurse true # makes git pull also update submodules by default
git config --global push.recurseSubmodules check # makes git push fail if submodules have unpushed changes
git config --global push.recurseSubmodules on-demand # makes git push also push submodule(s) changes
git config alias.supdate 'submodule update --remote --merge --init --recursive' # adds a new git command for updating all submodules recursively with merge
