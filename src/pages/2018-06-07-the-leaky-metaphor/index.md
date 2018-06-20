---
date: "2018-06-07T17:45"
path: "/201806071745"
title: "The Leaky Metaphor"
tags:
    - "#communication"
    - "#learning"
    - "#development"
---

**Or, "Of Course It's Leakin', It's Full Of Holes"**

<img style="width: 100%;" src="/the-leaky-metaphor/a-sieve.png" alt="a collander, with the text 'a collander is like a sieve is like a metaphor' - a simile. I spelt simile wrong, however" />

It's really hard to get ideas from one person to another. Just ask [Alice and Bob](https://en.wikipedia.org/wiki/Alice_and_Bob). One of the ways used to make this easier is by wrapping the ideas in something else, that the other person already knows. We use [metaphors](https://en.wikipedia.org/wiki/Metaphor) like this as teaching aids all the time - often without even realising it (see the word 'wrapping' in my last sentence. Can you spot all the metaphors in this post?).

When used like this, metaphors show people not only what but also how we think about things. I'm gonna frame a lot of this as a software development thing. It applies to basically everything else too, but software development is what I know.

<img style="width: 80%" src="/the-leaky-metaphor/the-metaphorical-developer.png" alt="a crt monitor and a bad drawing of myself, it says 'this CRT monitor is a metaphor for a whole, modern computer. It's just more fun to draw'. there's an arrow pointing to me with the text 'me, a software dev (not to scale)'" />

As discussed, metaphors can be a mighty teaching aid (incidentally, similes are too - though in different ways. Maybe I'll do a post about those too?). _However_ there's an "it depends" (of course there's an "it depends", I'm a software developer remember? It's also why I'm so comfortable with [parens](https://www.braveclojure.com/)), it's important to acknowledge that with all this amazing power comes a huge pitfall.

<img style="width: 300px" src="/the-leaky-metaphor/spiders-man.png" alt="a spider, which appears to be saying 'wait a minute, that's not the quote?'" />

All metaphors are, at **best**, aproximate. They're fuzzy, and imprecise, and this can make them dangerous. If you're not careful, a metaphor can be insidious. It can become [the only way you talk about a concept](<http://memory-alpha.wikia.com/wiki/Darmok_(episode)>). If you're not careful, you can wrap some ideas up to share them, and the wrapping never comes off, leaving all the details obscured. In software development, this can be a huge risk and can lead to gigantic misunderstandings.

<img style="width: 100%" src="/the-leaky-metaphor/darmok.png" alt="a poorly drawn character from the episode of Star Trek: The Next Generation entitled Darmok. The character is saying 'when you understand that it's metaphors all the way down' - which is a few too many references all mixed together" />

To provide a concrete example (ba dum tssss), I want to point out the construction metaphor. We like to pretend that _building_ software is like _building_ a bridge. It influences our whole language in development (see: _building_). An Architect goes and talks to the peope who want a bridge. They design it, and specify the materials to use, and produce blueprints. Your engineers, blueprints fresh in hand, get to work and with some time, you've got your bridge. Sorted.

<img style="width: 60%;" src="/the-leaky-metaphor/lambda-expressions-truck.png" alt="a truck delivering lambda expressions, an abstract concept" />

This is seductive, it sounds nice. It almost sounds right, it seems to cover the major parts of a software project. You've got requirements gathering, planning, and implementation. You'll note that even the job titles we give ourselves in software development are taken from this metaphor. Now, we can use language from the construction industry when we talk to non-developers. That will make things easier, because we don't have to explain weird esoteric jargon. We can even talk about software developent with each other using construction language.

Our next project, we talk with a non-developer stakeholder about a project they want completing, and we use construction language to make it easier. A few weeks later, and we get "What do you mean it isn't built yet? I told you what I wanted and you agreed that it'd take...what further questions? I didn't get an email...". Giving the impression that it was a case of 'give us requirements and we'll give you a project' might have been a mistake, but the construction language used was so...easy.

This is a contrived example, but hopefully you can see the little slice of reality in all this talk of metaphor. If you've ever been anywhere near software development, you'll know that the construction metaphor isn't a snug fit. You might even doubt that real construction is as simple as this metaphor makes it seem (another risk of metaphors: trying to explain something we do understand by using something that we probably don't understand, but think we do).

Software development, once you look past the initial similarity, isn't anything like construction. In most cases, you won't have strict requirements (most cases. I'm looking at you, nuclear power plant control software). You'd be hard pressed to describe any software as done, though sometimes it gets forgotten, or abandoned, or becomes 👻 _legacy_ 👻. There are very different constraints: a bridge is unlikely to run out of memory but it might fall foul of gravity. They're complex in very different ways.

In that case, how do we even, then? Unfortunately, [there's no silver bullet](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf) (which is an [idiom](https://en.wikipedia.org/wiki/Idiom), I like to think of idioms as a subset of metaphor), but we can try. When talking, remind yourself when you use metaphors, and point it out to others. Learn to notice when others use them too. Mostly, talk about the metaphors you choose and talk about how they don't match the reality, both with the technical and non-technical people on your team. Understand that no metaphor is perfect. Finally, whenever possibly try to avoid the metaphor in favour of the real thing. This works best when you're all on the same page with "the thing", whatever that might be. Oh, and good luck.

<img style="width: 100%" src="/the-leaky-metaphor/the-thing.png" alt="one last one: a poorly drawn representation of the cover for The Thing, a classic horror film. There is text which says 'I mean if you think about it even 'the thing' is a metaphor'. I'm really pushing it now." />
