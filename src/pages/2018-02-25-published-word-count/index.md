---
date: "2018-02-25T12:46:00"
path: '/201802251246'
title: "Tracking Published Word Count"
---

_note_: I really need to work on the CSS for this site - it's coming

## The Problem

I want to track the number of words I've published on this blog using [beeminder](http://beeminder.com/).
Usually I'm a big fan of keep it simple, which would point to doing this manually - but my experience with this sort of thing tells me it wouldn't work at all. I'd forget, lie, or make excuses and it'd all
fall apart pretty quickly. This sort of thing has to be automatic to be useful or motivating for me.

## The Solution

There are a few places I could track this:

### 1. At the Source

As I'm writing, I could have a little script count my words, and fling them _as I write them_ at beeminder. However - this isn't really published words, it's intent to publish words - so I would be tracking the wrong metric. There'd also be complications and edge cases, what if I deleted words then added more? Or do I just count when I save files? when do I run this script, or does it run as a daemon?

I don't think this is the right solution

### 2. On The Blog (Scrape)

I could write a small script to periodically open up the main page of my blog, follow all the links that
are on the same domain and count the words in them. This would work just fine, it'd just be hastle to write a script to do this - especially as this is a statically generated site, so I can easily just write
code to go at build-time. Which leaves me with:

### 3. On The Blog (Count)

I make an extra endpoint on my blog, `/wordcount` say, and at build-time stick a text file with the total
number of words in there. This way, my little script could be exactly the same as the above solution, but just...grab a single number. Much easier. the script would otherwise be the same

## In Conclusion

I'm going to implement option number 3. I'll try to keep posting about it too, as it'll make my goal easier to hit...🤓
