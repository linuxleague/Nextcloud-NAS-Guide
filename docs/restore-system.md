---
id: restore-system
title: How to restore the system from backup?
sidebar_label: Restore system
---

It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow [How to restore files from backup?](./restore-files)

1. Run `sudo bash /var/scripts/not-supported.sh` over CLI
1. Choose `System Restore`
1. **Confirm** that you want to restore your system to a previous state
1. If both backup drives are connected, **select the backup drive** that you want to view backups from (most likely the daily backup drive)
1. Select a **backup archive** that you want to restore to (you will see the date and time when it was made)
1. Read through and **confirm** the next two popups
1. **Wait** until you see the next Menu! (**This is crutial!**)
1. Now you should see a Menu that states that the dry-run was successful. You can now show all files/folders that will get changed/deleted. After you are done, just select `Continue` and press `[ENTER]` to continue.
1. Now you will see a popup with stats from the dry-run. This is an overview about the operation.
1. You will be asked next if you really want to restore your system to this state. Now select `Yes` and press `[ENTER]` if you are sure. (This is the last chance to cancel the operation!)
1. Wait until it has restored the system and you see a popup that the restore process was successful.
1. Finally, press `[ENTER]` to **reboot** your server.