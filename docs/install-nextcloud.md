---
id: install-nextcloud
title: How to install Nextcloud?
sidebar_label: Install Nextcloud
---

In order to set up Nextcloud, you should use the scripts from the Nextcloud-VM, since it is the most user-friendly way to setup Nextcloud as far as we know and has many features built-in.

1. Connect from a PC in the same network to your server over SSH
1. Copy and paste the following command over CLI:
    ```shell
    sudo lvcreate --size 5G --snapshot --name "NcVM-installation" /dev/ubuntu-vg/ubuntu-lv \
    && sudo lvcreate --size 30G --name "NcVM-reserved" ubuntu-vg \
    && wget https://raw.githubusercontent.com/nextcloud/vm/master/nextcloud_install_production.sh \
    && sudo bash nextcloud_install_production.sh --not-latest
    ```
1. Enter your **password** again
1. **We have prepared a slideshow for you that you can use. Please click [here](https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-installation) to start the slideshow. Otherwise, just continue with the steps below**
1.  Choose that you **don't** want to use `http://archive.ubuntu.com` as **repository** for your server since the best one was already set during the Ubuntu installation
1. Select that you **want** to make all **free space** available to your **root partition**
1. Choose **1 Disk (Only use one disk /mnt/ncdata - NO ZFS!** since 2 Disks is currently not supported by the backup scripts since it complicates things by a lot and doesn't support disk encryption. Additionally you would need one dedicated disk only for that directory.
1. Wait until everything is installed
1. Choose **Local (DNS on gateway)**, because then you can choose the DNS server in your router in one place for all your devices
1. Wait until everything is installed
1. Deselect any apps that you don't want to install. (It is recommended to **deselect IssueTemplate, Mail & Group-Folders**. If you wonder: you will be able to install all those apps manually directly over the Nextcloud GUI if you should ever need them in the future.)
1. Click `OK` to **reboot** your server

Now the initial Nextcloud setup should be done.