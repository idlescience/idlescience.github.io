---
layout: post
date: 2023-07-06 07:00:00
title: Cooperative Game Tool
comments: true
image: posts/2023-07-06-cooperative-game-tool/cooperation-1.png
---

Cooperative game theory offers a rich framework for analyzing strategic interactions among rational players. However, **solving cooperative games can be computationally intensive and complex**, especially when dealing with a large number of players and possible coalitions. This post marks a significant step forward in addressing this challenge by **introducing a web tool** that is not only fast but also user-friendly. We invite you to leverage this tool to simplify the process of defining and solving cooperative games.

## Table of Contents

-   [Preparation](#preparation)
-   [Computation](#computation)
-   [Results](#results)
-   [Sources](#sources)

<figure>
	<img src="/assets/img/posts/2023-07-06-cooperative-game-tool/cooperation-1.png" alt=""> 
	<!-- <figcaption>Fig1. - Cooperation Schema</figcaption> -->
</figure>

## Preparation {#preparation}

The first step is defining the game in a way that captures all the relevant details. Specifically, you need to enumerate the players and define the characteristic payoffs for all possible coalitions. In a full game with $$n$$ players, this involves defining values for $$2^n - 1$$ possible coalitions. The '-1' accounts for the empty coalition $$v(\varnothing)$$, which always has a payoff of zero in the type of games handled by this tool.

## Computation {#computation}

To streamline this process, our web tool allows you to define your cooperative game in a CSV format. The CSV should be structured with a header containing two column names: `coalition` and `payoff`. The `coalition` column lists the players forming each coalition, separated by commas, while the `payoff` column defines the corresponding payoff for that coalition. The CSV file must be separated by semicolons (`;`).

<div id="cooperative-game-tool-react-app"></div>

Simply input this CSV data into the textbox region to define your game, press the "Solve button", and review the results "Shapley value" and "Nucleolus" solutions computed by the tool.

## Results {#results}

Our web tool offers a **fast and easy-to-use solution** for defining and solving cooperative games. By using a simple CSV format, you can quickly enumerate players and coalitions, thereby reducing the dedicated to prepare the information as an inpute to the solving process. Also, this tool is built using close to the hardware technologies as C++ and WASM, which reduces drastically its computational time needed to find a solution. We encourage you to take advantage of this tool to explore the fascinating world of cooperative game theory.

## Sources {#sources}

The source code for the web tool discussed in this article is openly available for review and contribution. It is hosted on GitHub under the repository [idlescience/cgt-wasm](https://github.com/idlescience/cgt-wasm). The code is primarily written in C++ and compiled to WebAssembly (WASM) to ensure high performance. We encourage developers and researchers interested in cooperative game theory to explore the codebase, contribute to its development, or fork it for their own projects.
