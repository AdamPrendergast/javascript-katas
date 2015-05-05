#!/bin/bash

sudo apt-get update
mkdir /vagrant/src

# Set SSH default directory
echo "cd /vagrant/src" >> /home/vagrant/.bashrc