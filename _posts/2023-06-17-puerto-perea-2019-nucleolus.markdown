---
layout: post
title:  "Perea & Puerto implementation of Nucleolus approach"
date:   2023-06-17 08:00:00 +0200
categories: jekyll update
---
MINIMIZE
  OBJ: + 0.9 t1 + 0.9 d31 + 0.9 d41 + 0.9 d61 + 0.18 t2 + 0.09 d32 + 0.09 d42 + 0.09 d62 + 0.027 t3 + 0.009 d33 + 0.009 d43 + 0.009 d63
SUBJECT TO
  CONS1: + d31 + t1 + x3 >= 5
  CONS2: + d41 + t1 + x1 + x2 >= 10
  CONS3: + d61 + t1 + x2 + x3 >= 10
  CONS4: + d32 + t2 + x3 >= 5
  CONS5: + d42 + t2 + x1 + x2 >= 10
  CONS6: + d62 + t2 + x2 + x3 >= 10
  CONS7: + d33 + t3 + x3 >= 5
  CONS8: + d43 + t3 + x1 + x2 >= 10
  CONS9: + d63 + t3 + x2 + x3 >= 10
  CONS10: + x1 + x2 + x3 = 20
BOUNDS
  d31 >= 0
  d41 >= 0
  d61 >= 0
  d32 >= 0
  d42 >= 0
  d62 >= 0
  d33 >= 0
  d43 >= 0
  d63 >= 0
END

<div id="root"><div>
<script src="{{ base.url | prepend: site.url }}/dist/assets/index-c7e05d32.js"></script>