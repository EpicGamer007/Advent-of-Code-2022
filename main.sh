#!/bin/env bash

read -p "Enter day to run (or a̲l̲l̲): " day
clear

if [ $day == "all" ]; then
	folders=$(find aoc2022/*/*.js)
	declare -i day=1
	for folder in $folders
	do
		echo "Day $day:"
		node $folder
		echo ""
		day=day+1
	done
else
	node ./aoc2022/day$day
fi