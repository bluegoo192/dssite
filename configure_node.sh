#!/bin/bash
# Set up this machine to run an instance of the server
# Assumes Ubuntu 18.x
# Assumes that you have NOT cloned the full repo (machine is stock except for this script)

cd ~
echo 'Cloning repo'
git clone https://github.com/bluegoo192/dssite.git

echo 'Installing Node'
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh # Grab node setup scrip
sudo bash nodesource_setup.sh # run it
sudo apt install -y nodejs
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash # grab nvm
# switch versions
source ~/.bashrc
nvm install 10.15.0
nvm use 10.15.0

echo 'Installing Nginx'
sudo apt update
sudo apt install nginx
sudo ufw allow 'Nginx HTTP'
sudo ufw enable
sudo ufw allow ssh

echo 'Setting up pm2'
sudo npm install pm2@latest -g
pm2 start dssite/bin/www # add our site to pm2
echo '  Make sure to run pm2 startup systemd and follow its instructions'
# pm2 startup systemd # start pm2 on startup
pm2 save
echo '  You also may need to run "sudo systemctl start pm2-ubuntu".  If it fails, restart the server and try again'

