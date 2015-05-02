#!/bin/bash

sudo apt-get update
mkdir /vagrant/src
mkdir /vagrant/src/test

# Set SSH default directory
echo "cd /vagrant/src/test" >> /home/vagrant/.bashrc