#!/bin/bash
set -e

stage=$1
tagPrefix="deploy-$stage-"

dirtyState=$(git status --porcelain --untracked-files=no)
commit=$(git rev-parse --short HEAD)
tag=$(git tag -l "$tagPrefix*" | tail -n 1)
echo "Latest tag: $tag"

if [ -z "$dirtyState" ]; then
	dirty='';
else 
	dirty='+dirty';
fi

num=0
if [ ! -z "$tag" ]; then 
	num=$(echo "$tag" | sed "s/deploy-$stage-//");
fi

newTag="$tagPrefix$(($num + 1))"
deployLine="$(echo "$(TZ=Australia/Melbourne date --iso-8601=seconds)" $stage $commit$dirty $newTag)"

echo $deployLine;
echo $deployLine >> ./deploys;

set -x
git tag $newTag;
