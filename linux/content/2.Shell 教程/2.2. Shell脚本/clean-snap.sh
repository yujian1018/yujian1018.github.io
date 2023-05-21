#!/bin/bash
# Removes old revisions of snaps
# CLOSE ALL SNAPS BEFORE RUNNING THIS
set -eu
snap list --all | awk '/已禁用/{print $1, $3}' |
    while read snapname revision; do
        echo $snapname $revision
        snap remove "$snapname" --revision="$revision"
    done