#!/bin/bash

SESH="social-links_session"

tmux has-session -t $SESH 2>/dev/null

if [ $? != 0 ]; then
  tmux new-session -d -s $SESH -n "editor"

  tmux send-keys -t $SESH:editor "cd ." C-m
  tmux send-keys -t $SESH:editor "hx ." C-m

  tmux new-window -t $SESH -n "dev"
  tmux send-keys -t $SESH:dev "cd . && clear" C-m
  tmux send-keys -t $SESH:dev "pnpm dev" C-m

  tmux new-window -t $SESH -n "term"
  tmux send-keys -t $SESH:term "cd . && clear" C-m

  tmux select-window -t $SESH:editor

fi



tmux attach-session -t $SESH
