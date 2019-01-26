---
date: "2019-01-26T17:30"
path: '/converting-qif-files'
title: "Converting the QIF file my bank lets me download to a hledger file"
tags:
    - "#accounting"
    - "#racket"
---

[hledger](http://hledger.org/) has caught my eye as a tool for budgeting. It keeps everything in a nice, simple and easy to manipulate text file. I add entries using vim. It even lets me do [YNAB](https://app.youneedabudget.com/)-style [envelope budgeting](https://memo.barrucadu.co.uk/2018-budget.html) which I’m experimenting with.

When I use YNAB, I have a different process. I download a [QIF](https://en.wikipedia.org/wiki/Quicken_Interchange_Format) file from my bank, plug it into YNAB and fill in any missing information, checking off each transaction in turn. This is a lot less manual. Ideally I’d like something closer to this for hledger, except with my review step happening in vim.

I decided to have a play around and see if I could get something thrown together in racket - and it ended up being much quicker than I anticipated. I used a [parser combinator](http://theorangeduck.com/page/you-could-have-invented-parser-combinators) library based on [parsec](https://hackage.haskell.org/package/parsec) ([parsack](https://docs.racket-lang.org/parsack/index.html#%28def._%28%28lib._parsack%2Fmain..rkt%29._bytestring%29%29)) written in racket to build a quick parser for the QIF subset I could identify, and then some equally quick functions to convert it all down into something that looks a bit like a hledger string. The [library is on my gitlab account](https://gitlab.com/sjmarshy/qif-to-hledger/blob/master/main.rkt).

This is all I need for now. I can run my bank exports through this little script, appending the output to my hledger file. I just need to go in and remove any duplicates, filling out what category the expense lives in as I go and adding any notes.

In the future, it might be nice to add some management of duplicates, I’d rather not be doing that myself - but for now, it does the job!
