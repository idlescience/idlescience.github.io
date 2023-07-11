---
layout: post
date: 2023-07-06 07:00:00
title: Cooperative Game Tool
permalink: /cooperative-game-tool
javascript: cooperative-game-tool.js
---
# Cooperative Game Tool

To solve a cooperative game we must define the game in the CSV definition are. To do so, first, we must enumerate the $n$ players taking part of a Cooperative Game: *player 1*, *player 2*, *player 3*, ..., *player n*.

Afterwards, we must define the characteristic payoff for the posible colaitions in the game. If it is a full game, then we need to define a value for de $2^n - 1$ posible coalitions, knowing that the number of players is $n$. The minus 1 scenario belongs to the empty game $v({\empty})$ that is always $0$.

To do so please define your game in CSV format in the region right after the example. This format should come with a header containing the *colaition* and *payoff* column names. This header stands for *coalition* the players forming the coalition which the *payoff* is defined. The CSV file must be separated by semicolons (*;*) characters. Coalition players in the *colaition* column must be separated by commas (*,*).

#### Example representation of CSV

| coalition | payoff |
|   :---:   |  :---: |
|     1     |   10   |
|     2     |   15   |
|     3     |   12   |
|   1, 2    |   40   |
|   1, 3    |   35   |
|   2, 3    |   42   |
|  1, 2, 3  |   50   |


#### Definition {#solution}

<div id="app-root"></div>