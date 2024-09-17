# https://stackoverflow.com/questions/1378274/in-a-bash-script-how-can-i-exit-the-entire-script-if-a-certain-condition-occurs
yell() { echo "$0: $*" >&2; }
die() { yell "$*"; read -p "Press enter to exit"; exit 111; }
try() { "$@" || die "Error: cannot $*"; }

echo ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
echo "Creating an SSH key for authenticating to bitbucket"
echo 
echo "Step 1: Generate a private and public key"
echo "Step 2: Add git@bitbucket.org to known hosts"
echo "Step 3: MANUALLY add the public key into your personal bitbucket settings"
echo 
echo "NOTICE: all users will need to paste their SSH public key into their"
echo "        'Personal Bitbucket Account Settings' under 'SSH Keys'"
echo 
read -p "Press enter to continue"

sshKeyname="bitbucket"
currentUser=$(whoami)
currentUser="${currentUser:(-5):5}"
previouswd=$(pwd)

echo ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
echo "Step 1: creating ssh keys"
echo 
if [ ! -d ~/.ssh/ ]; then
  echo "Creating ~/.ssh/ folder"
  mkdir ~/.ssh/
fi
cd ~/.ssh/
try git -v
try ssh -V
read -p "Enter a label to use for the key. This has no effect but will be noted in the SSH public key ($currentUser): " keyComment
if [[ -z $keyComment ]]; then
  keyComment=$currentUser
fi
read -p "Creating SSH key '$sshKeyname'. It will ask you for a passphrase. This is optional, but please remember it if you provide one. Press enter to continue"
if [[ -e ./$sshKeyname ]]; then
  read -p "A key already exists with name '$sshKeyname'. Would you like to overwrite it? (y/n): " shouldOverwriteKey
  if [[ $shouldOverwriteKey == [yY] || $shouldOverwriteKey == [yY][eE][sS] || -z $shouldOverwriteKey ]]; then
    try rm ./$sshKeyname
  else
    read -p "Press enter to exit"
    exit 1
  fi
fi
ssh-keygen -t ed25519 -b 4096 -C "$keyComment" -f "$sshKeyname"
echo ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
echo "Step 2: adding git@bitbucket.org to known hosts"
echo 
rm ~/.ssh/known_hosts
touch ~/.ssh/known_hosts
if [[ -e "~/.ssh/config" ]]; then
  read -p "The next operation will delete ~/.ssh/config to make sure it it setup properly (oh well). Continue? (y/n): " shouldDeleteConfig
  if [[ $shouldDeleteConfig == [yY] || $shouldDeleteConfig == [yY][eE][sS] || -z $shouldDeleteConfig ]]; then
    rm ~/.ssh/config
  else
    read -p "Press enter to exit"
    exit 1
  fi
fi
echo "Adding key to ssh config"
echo $'Host bitbucket.org
  AddKeysToAgent yes
  IdentityFile ~/.ssh/bitbucket' > ~/.ssh/config
ssh-keyscan -H bitbucket.org >> ~/.ssh/known_hosts
git config --global core.sshCommand "ssh -i ~/.ssh/$sshKeyname"; echo "Globally configured git to use $sshKeyname.pub"
echo ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
echo "Step 3: Your public key is below, and also found at ~/.ssh/$sshKeyname.pub"
echo
cat ~/.ssh/$sshKeyname.pub
echo
echo "Copy the entire public key and go to"
echo
echo "https://support.atlassian.com/bitbucket-cloud/docs/set-up-personal-ssh-keys-on-windows/#Provide-Bitbucket-Cloud-with-your-public-key"
echo
echo "to learn how to connect the public key to your bitbucket account to "
echo "complete this process"
echo ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
cd "$previouswd"
read -p "Press enter to exit"
