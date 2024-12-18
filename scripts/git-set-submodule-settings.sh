# https://git-scm.com/book/en/v2/Git-Tools-Submodules
git config --global diff.submodule log # makes git diff show new submodule commits
git config --global --add status.submodulesummary true # makes git diff show submodule changes summary
git config --global --add submodule.recurse true # makes git pull also update submodules by default
git config --global push.recurseSubmodules check # makes git push fail if submodules have unpushed changes
git config --global push.recurseSubmodules on-demand # makes git push also push submodule(s) changes
git config --global alias.supdate 'submodule update --remote --merge --init --recursive' # adds a new git command for updating all submodules recursively with merge
git config --global alias.scheckout "submodule foreach --recursive 'git checkout'"
git config --global alias.sadd "submodule foreach --recursive 'git add'"
git config --global alias.scommit "submodule foreach --recursive 'git commit || :'"
