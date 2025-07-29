---
title: "My first custom mechanical keyboard"
description: "The journey of designing and building a custom mechanical keyboard from scratch, including component selection and assembly process."
date: 2020-11-20
tags: ["mechanical-keyboards", "keyboards", "keebs", "hardware", "diy"]
lang: "en"
slug: "custom-mechanical-keyboard-en"
previewImg: "/media/blog/art002-keeb-preview.jpg"
imageCredit: "https://www.pexels.com/@hideaki-nagari-563011/"
---

A few years ago, I discovered a completely new and very exciting world: *mechanical keyboards*. I've always liked creating things with my hands, which is why I became very fond of this **expensive and uncommon** hobby.

Today, it's more common to hear about mechanical keyboards. In the gaming world, they became completely viral when various streamers and professional gamers started mentioning that they use this type of keyboard for the reliability they offer when pressing keys.

Previously, it was a little-known hobby, comprised of elite groups of people who understood both electronics and programming to turn the most incredible ideas into computer keyboards.

While there's a lot of information on the Internet about this topic, this post is more of an appreciation of something I did some time ago: **building a keyboard completely from scratch**.

When I say from scratch, I mean from scratch, with nothing in my hands and an idea in my head.

## 1. The idea

My idea was to make something that would fulfill some desires I had after spending a couple of years mainly using two keyboards: the [CODE Keyboard](https://codekeyboards.com) and an [Ergodox](https://www.ergodox.io).

In my mind, the keyboard had to meet the following points:

1. Ergonomic and ortholinear, like the Ergodox.
2. Separated into two specific sections for each hand but built as one piece.
3. Just the right distance between both sectors for each hand.
4. Directional arrow keys in inverted T format.
5. Specific keys for page jumps and going to the beginning and end of each line.
6. Use the keycap format of a standard keyboard.

Those were the foundations of the concept I had been planning. In the end, the final design result was as follows:

![Keyboard design](/media/blog/art002-keeb-00.png)

With this in my head, the next step was to get the pieces to start assembling the keyboard.

*If you want to make your own version, here's the link to the [Keyboard Layout Editor](http://www.keyboard-layout-editor.com/##@_name=yoryerkeeb%20v2&author=Jorge%20Noguera&switchMount=cherry&switchBrand=kailh&switchType=PG151101D49%2F%2FD09&plate:true%3B&@_y:0.125%3B&=Esc&_x:3.25%3B&=%23%0A3&_x:5.25%3B&=*%0A8%3B&@_y:-0.875&x:3.25%3B&=%2F@%0A2&_x:1%3B&=$%0A4&_x:3.25%3B&=%2F&%0A7&_x:1%3B&=(%0A9%3B&@_y:-0.875&x:6.25%3B&=%25%0A5&_x:1.25%3B&=%5E%0A6%3B&@_y:-0.875&x:1.25%3B&=~%0A%60&=!%0A1&_x:9.25%3B&=)%0A0&=%2F_%0A-&=+%0A%2F=&_w:2%3B&=Backspace&_x:0.25%3B&=Home&=PgUp%3B&@_y:-0.375&x:4.25%3B&=E&_x:5.25%3B&=I%3B&@_y:-0.875&x:3.25%3B&=W&_x:1%3B&=R&_x:3.25%3B&=U&_x:1%3B&=O%3B&@_y:-0.875&x:6.25%3B&=T&_x:1.25%3B&=Y%3B&@_y:-0.875&x:0.75&w:1.5%3B&=Tab&=Q&_x:9.25%3B&=P&=%7B%0A%5B&=%7D%0A%5D&_w:1.5%3B&=%7C%0A%5C&_x:0.75%3B&=End&=PgDn%3B&@_y:-0.375&x:4.25%3B&=D&_x:5.25%3B&=K%3B&@_y:-0.875&x:3.25%3B&=S&_x:1%3B&=F&_x:3.25%3B&=J&_x:1%3B&=L%3B&@_y:-0.875&x:6.25%3B&=G&_x:1.25%3B&=H%3B&@_y:-0.875&x:0.5&w:1.75%3B&=Caps%20Lock&=A&_x:9.25%3B&=%2F:%0A%2F%3B&=%22%0A'&_w:2.25%3B&=Enter%3B&@_y:-0.375&x:4.25%3B&=C&_x:5.25%3B&=%3C%0A,%3B&@_y:-0.875&x:3.25%3B&=X&_x:1%3B&=V&_x:3.25%3B&=M&_x:1%3B&=%3E%0A.%3B&@_y:-0.875&x:6.25%3B&=B&_x:1.25%3B&=N%3B&@_y:-0.875&w:2.25%3B&=Shift&=Z&_x:9.25%3B&=%3F%0A%2F%2F&_w:2.75%3B&=Shift&_x:1.5%3B&=Up%3B&@_x:1&w:1.25%3B&=Ctrl&_w:1.25%3B&=Alt&_w:1.25%3B&=Cmd&_x:0.25&w:2.25%3B&=Space&_x:1.25&w:2.25%3B&=Space&_x:0.25&w:1.25%3B&=Cmd&_w:1.25%3B&=Alt&_w:1.25%3B&=Ctrl&_x:0.5%3B&=Fn&_x:0.5%3B&=Left&=Down&=Right) site where I configured this design.*

## 2. The parts

Ultimately, there was no keyboard plate with anything similar to what I wanted, so there was no possibility of using a PCB since I didn't know how to design one. The solution was **hand wiring**.

What I needed to assemble the keyboard, besides the common things like cables and a soldering iron, was the following:

1. **Microcontroller:** Arduino Pro Micro.
2. **Switches:** Gateron Yellow.
3. **Diodes:** 1N4148.
4. **Lubricant:** Chrysto Lube MC 129.
5. **Stabilizers:** Cherry type for plates.
6. **Cables:** 22 AWG thickness.
7. **MDF cuts:** Plates made with laser cutting for sandwich-type assembly.
8. **Keyset:** Chocolate Keycaps with SA profile.
9. **Silicone:** to seal the switches through the plate.
10. **Soldering iron, solder, and a multimeter.**

![Keyboard components](/media/blog/art002-keeb-01.jpg)

## 3. Assembly

As a first step, I started by lubricating the switches. I disassembled each one, lubricated them, and reassembled the more than 70 switches needed for this keyboard.

The next task was to mount the switches on the MDF plate and then secure them using silicone. This way, the switches are secured to the plate, which reduces flex when typing and makes it easier to swap keycaps.

Once the silicone dried and the switches were sufficiently secured, I proceeded to solder the diodes to each switch.

![Diode soldering](/media/blog/art002-keeb-03.jpg)

Once the diodes were in place, the hand wiring step began, which basically consists of the following:

1. A cable must be soldered for each diode to form the rows (red cable).
2. A cable must be soldered for each switch forming the columns (blue cable).
3. Each complete row must be soldered to the microcontroller (yellow cable).
4. Each column must be soldered to the microcontroller (green cable).

With patience, you can successfully perform each solder joint without any cables touching each other.

![Hand wiring](/media/blog/art002-keeb-04.jpg)

The next step was to go to the [Keyboard Firmware Builder](https://kbfirmware.com) site, copy and paste the design (RAW Data) from the Keyboard Layout Editor website, and start modifying the pin layout so it would work with the number of pins that the Arduino Pro Micro has.

Once the pin layout was established and the keyboard layers were configured, I exported the configuration to a *.hex* file and then flashed the Arduino. **DONE!**

## 4. Final result

![Finished keyboard](/media/blog/art002-keeb-05.jpg)

It's a keyboard that undoubtedly brings together several of the characteristics I was looking for. I will definitely make a next version, perhaps with better detail in the construction process.

As I remember specific details about the keyboard construction, I will update this post.

## 5. Typing test

The best part of building something for yourself is when you can start using what you built.

I'm always open to giving recommendations about mechanical keyboards if anyone is interested. Contact links are below.

Here's a video of how the keyboard looks and sounds when typing :)

<div class="flex justify-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SxFczmAr2y8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>