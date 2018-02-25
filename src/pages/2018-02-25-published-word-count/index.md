---
date: "2018-02-25T12:46:00"
path: '/201802251246'
title: "Tracking Published Word Count"
---

## The Problem

I'd like to track my published word count using [Beeminder](http://beeminder.com/).
I could do it manually, but experience with this sort of thing tells me it just wouldn't work. I'd forget,
lie or make excuses and eventually just delete the graph. This pretty much means that it has to be automatic.

I do alredy track the number of words I write in [draft](https://draftin.com) - the problem is, draft
just isn't part of my daily routine. I keep my notes in plain text in my dropbox folder, and edit them
pretty much daily - and I write far more than I need to keep track of. It's just not in draft.

So I was thinking - the real thing I want to keep track of is _published_ words. The basic solution would be to just scrape my blog, but that would be pretty gross to implement, and...just...scraping

So instead, I'd like to make an endpoint on my blog, say maybe `/wordcount`, which would show the total number of words published. I could then write a quick little service to run on a server which simply woke up occasionally and grabbed this number and shoved it into my beeminder account.

Long story short - that's exactly what I'm planning to do.
