---
title: "The Ultimate Cobblemon Animation Guide"
publishDate: "Nov 14 2025"
description: "A complete guide to keyframes, pivot points, and Molang for creating your own Cobblemon animations."
img: "/realcarrotdev-banner.jpg"
img_alt: "RealCarrotDev working at a desk"
tags:
  - Guide
---

## Animation Explained
*Work In Progress*

### What is an animation?
Animation in simple terms is the act of bringing a still image or model to life through various means in which we will be discussing throughout this guide.

### Basics
You'll be starting off with clicking on the **Animate** tab.

Once you reach this screen you might see some animations already like this:
`ground_idle` `animation.lunaris.ground_i` or it might just be blank.

If it's blank, you'll want to click the `[+]` icon `ANIMATIONS` which will give you this screen:
*(You can add an image here later)*

This screen you will name the animation, usually along the lines of: `animation.(pokemonname).ground_idle` or some other form of animation, but that's the format you need and click **Confirm**.

> **- Please note: `animation names need to be lowercase!`**

You will want to make sure that you do the basic animations which are: `ground_idle` | `air_idle` | `water_idle` | `ground_walk` | `water_swim` | `air_fly` | `blink`

When you are done with your animations, you will click the `[Save]` icon which will save the animations as a **json** file, please make sure it's named appropriately such as `(geodude.animation)`

To begin animating please look at: **Key Frames** & **Molang** for the different styles of animation and examples!

---

### What are Pivot Points?
Pivot points are in simplest terms an anchor for rotation and movement.

Pivot points are a BIG part of how animations will turn out, because while yes you can keyframe, using Molang with incorrect pivot points will result in a disastrous abomination.

I'll give some examples of how pivot points **should** be set up.

**`NOT ALL` pivot points will be the same.**

Examples:
* Snake/Serpent pivots will be like tails.
* Humanoid pivots you just have to think of yourself in front of a mirror... How do **`YOU`** move.
* Obscure/Custom Shaped pokemon just play with the pivots and rotate the arms in multiple directions until it looks smooth.

> **`Note: If you need assistance with pivots, please DM me (Carrot) or DragonKid.`**

Examples of correct and incorrect pivot placements in tails.
*(You can add an image here later)*

In order to change the pivot points, you can either press **`P`** or you can click the **target** icon.
*(You- can add an image here later)*

Pivot points are **supposed** to be done by the modelers, but 99% of the time, the pivot will be incorrectly placed, Cobblemon themselves have this issue as well.

> **`Note: Please report ALL incorrect pivot points to me (Carrot)`**

---

## Key Frames
*Work In Progress*

### Key Frames
Generally speaking, you'll be using key frames in `walking`, `faint`, `blink`, and any other `custom` animation you're looking to add.

> **`Note: There ARE exceptions to this! Please see: Molang`**

When animating with key frames, if you're trying to loop an animation, please make sure to copy the first frame and paste it to the end of the timeline.

**`There are times when this won't work, don't fret, just DM Carrot for assistance!`**

Example of beginning and end below:
*(You can add an image here later)*

> **`Note: You CAN mix and match interpolations! ⬆`**

³ Exceptions:
* **`You cannot have Molang side by side with Smooth key frames.`**
* **`Your Molang cannot be Smooth interpolation.`**

To get started with key frames you will click a group/bone on the model, and then you will click the `[+]` icon on the timeline. This will create a linear keyframe which you can tell by the diamond shape.

In order to **switch** between interpolations, you will right click on the key frames that you want changed, and then you will click interpolations, and select which one you'd like:
*(You can add an image here later)*

> **`Note: You can select multiple keyframes by holding left click and selecting multiple key frames.`**

### Linear Key Frames
**`Linear key frames`** are noted by the distinct **`diamond`** shape.

Below is an example of a linear key framed **`physical attack`** animation! -
*(You can add an image here later)*

As you can see it's not exactly **`smooth`**, most linear key framed animations will seem a bit chunky! You can manipulate the key frames in the right positions to seem smooth, but it will never be truly **`seamless`**.

> **`Note: Sometimes it's preferred to use Linear over other interpolations!`**

This is what the animation above looks like on the timeline, it's relatively neat looking, but it can get quite messy!
*(You can add an image here later)*

### Smooth Key Frames
**`Smooth key frames`** are noted by the distinct **`circular`** shape.

### Step Key Frames
**`Step key frames`** are noted by the distinct **`play button`** shape.
