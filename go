#!/bin/bash

set -eu
normal_fg=$(tput sgr0)
debug_fg=$(tput setaf 9)

red_fg=$(tput setaf 1)

start_fg=$(tput setaf 5)
react_fg=$(tput setaf 93)
misc_fg=$(tput setaf 220)
checks_fg=$(tput setaf 189)

function timestamp() {
  date+"%Y%m%d_%H%M%S"
}

function check_for_tool() {
  local toolName="${1}"
  local installInstructions="${2}"

  if ! which ${toolName} &>/dev/null ; then
    echo "${red_fg}${toolName}${debug_fg} not found${normal_fg}"
    echo "${debug_fg}Install with: ${red_fg}${installInstructions}${normal_fg}"
    exit 1
  fi
}

function color(){
    for c; do
        printf '\e[48;5;%dm%03d' $c $c
    done
    printf '\e[0m \n'
}

function task_color {
  # https://unix.stackexchange.com/a/269085
  IFS=$' \t\n'
  color {0..15}
  for ((i=0;i<6;i++)); do
      color $(seq $((i*36+16)) $((i*36+51)))
  done
  color {232..255}
}

function task_start {
  check_for_tool "node" "nvm install node"

  echo "${start_fg}Starting app${normal_fg}"
  npm run startLocal
}

function task_build {
  check_for_tool "node" "nvm install node"

  echo "${start_fg}Cleaning first${normal_fg}"
  task_clean

  echo "${start_fg}Building app for static release${normal_fg}"
  npm run build
}

function task_clean {
  echo "${start_fg}Cleaning app${normal_fg}"
  echo -e "${start_fg}\tDeleting node modules${normal_fg}"
  rm -rf node_modules
  echo -e "${start_fg}\tReinstalling node modules${normal_fg}"
  npm install
  echo -e "${start_fg}\tDeleting build${normal_fg}"
  rm -rf build
  echo -e "${start_fg}\tDeleting dist${normal_fg}"
  rm -rf dist
}

function task_clear_port {
  local port=$(lsof -ti :3030)
  echo "${misc_fg}Finding and killing process running in port 3030 [${port}]${normal_fg}"

  kill -9 ${port}
}

function task_check_dep {
  check_for_tool "ncu" "npm install -g npm-check-updates"
  echo "${checks_fg}checking dependencies (do npm install to upgrade them)${normal_fg}"
  ncu -a
}

function task_check_sec {
  echo "${checks_fg}checking dependencies [nsp]${normal_fg}"
  npm run check
}

function task_heroku_logs {
  echo "${start_fg}Retrieving heroku logs${normal_fg}"
  heroku logs --app project-of-doom --tail
}

function task_help {
  help_message="usage: ./go"
  help_message+=" ${misc_fg}colors${normal_fg}"
  help_message+=" | ${misc_fg}clear_port${normal_fg}"

  help_message+=" | ${checks_fg}check_dep${normal_fg}"
  help_message+=" | ${checks_fg}check_sec${normal_fg}"

  help_message+=" | ${start_fg}clean${normal_fg}"
  help_message+=" | ${start_fg}start${normal_fg}"
  help_message+=" | ${start_fg}build${normal_fg}"
  help_message+=" | ${start_fg}heroku-logs${normal_fg}"
  echo "${help_message}"
}

function execute_task {
  local task="${1:-}"
  shift || true
  case ${task} in
    colors) task_color ;;
    clear_port) task_clear_port ;;

    check_dep) task_check_dep ;;
    check_sec) task_check_sec ;;

    clean) task_clean ;;
    start) task_start ;;
    build) task_build ;;
    heroku-logs) task_heroku_logs ;;
    *) task_help ;;
  esac
}

execute_task "$@"
