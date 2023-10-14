---
title: Making a night card scene with HTML & CSS
published: true
---

Read this post or just fork this **[codepen](https://codepen.io/jpokan/pen/LYZqWpq)** and figure it out yourself 😂?

## Ok Lets Go!

First, we'll set some initial values using CSS variables in the root of the document. We need to set `--height` and `--width` of the card and also define the colors we are using for the `--moon`, `--ocean`, and `--sky`.

```css
:root {
	--width: 250px;
	--height: 400px;
	--ocean: #0a1a29;
	--sky: #01213a;
	--moon: #e2d5c5;
}
```

Now, lets break up all the parts of this scene:

### The Background

Create a **div** element with a class of **.container** and center the elements inside it, this time I am using **display: grid** and **place-items: center**. Don’t forget to set the minimum height, we all love **100vh** to stretch out the container and fill the viewport height to 100% of the current dimension. Here we can set the background color to match the `--moon` variable color.

```html
<div class="container">
	<!-- Card inside here -->
</div>
```

```css
.container {
	background-color: var(--moon);
	min-height: 100vh;
	display: grid;
	place-items: center;
}
```

You will now have something like this…

![Img](https://a.storyblok.com/f/98358/1440x835/1ee79e6e0e/screenshot-2020-11-29-223819.png)

### The Card

Now we add another div inside the container with a class of **.card** to create the card.

<a name="anchorTo-card-section"></a>

```html
<div class="container">
	<div class="card">
		<!-- The moon, the sky and ocean will be here -->
	</div>
</div>
```

We set its position to **relative** because we will use this element as a reference to style other elements inside this div. After that we will set the **height** and **width** to the corresponding variables `--height` and `--width` we created at the start. Also, a **border radius** to 10 pixels.

To see the card better we will add a box shadow. I recommend using this **[https://shadows.brumm.af/](https://brumm.af/shadows)** to customize or generate a box-shadow if you wish.

```css
.card {
	position: relative;
	box-shadow: 0 2.8px 3.8px rgba(0, 0, 0, 0.056), 0 6.7px 8.1px rgba(0, 0, 0, 0.081),
		0 12.5px 13.3px rgba(0, 0, 0, 0.1), 0 22.3px 20.8px rgba(0, 0, 0, 0.119),
		0 41.8px 35px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
	width: var(--width);
	height: var(--height);
	border-radius: 10px;
	overflow: hidden;
}
```

And finally set the **overflow** to **hidden** because we want to keep the remaining elements (moon, sky and ocean) inside this card boundaries and not to overflow this div.

![Img](https://a.storyblok.com/f/98358/1440x834/03fb916202/screenshot-2020-12-01-231903.png)

At this point, you will see the card itself but without any background color, just the shape of it formed by its shadow.

### The Sky

Next, we are going to fill the card with the color of the sky. We can create a div with a **.sky** class to paint this one or paint the card div itself, but I wanted to make this a bit more explicit from a HTML perspective.

```html
<div class="container">
	<div class="card">
		<div class="sky"></div>
		<!-- Moon and Ocean -->
	</div>
</div>
```

We want the sky to be the same height and width of the card, so set both height and width to the `--height` and `--width` variables we have defined at the beginning.
Set the background color to `--sky` variable.
And finally, we don't want the night to be a flat color, we want it a bit darker on the top. So we can add a linear gradient to the background in order to achieve this. Check this tool for gradient generation [https://cssgradient.io/](https://cssgradient.io/)

```css
.sky {
	height: var(--height);
	width: var(--width);
	background-color: var(--sky);
	background: linear-gradient(
		0deg,
		rgba(10, 26, 41, 0) 75%,
		rgba(10, 26, 41, 1) 100%
	);
}
```

![Img](https://a.storyblok.com/f/98358/1440x900/76ba371ba1/screenshot-2021-05-05-171612.png)
Look at that cool night sky card!

### The Moon

As before, create a div with a class of **.moon**.

```html
<div class="container">
	<div class="card">
		<div class="sky"></div>
		<div class="moon"></div>
		<!-- ocean -->
	</div>
</div>
```

We first set the position to absolute, and use the top and left to position the moon on the desired location of our card. Make sure to set the background-color to the `--moon` variable. And set a height and width of the moon.
Because the moon its a circle, we will add a border-radius of 100% to round the corners. Add the box-shadow to create the effect of the moonlight aura.

```css
.moon {
	position: absolute;
	left: 115px;
	top: 120px;
	background-color: var(--moon);
	width: 20px;
	height: 20px;
	border-radius: 100%;
	box-shadow: 0 2.8px 3.9px #a89587, 0 6.7px 9.3px #e2d5c5,
		0 12.5px 17.5px #e2d5c5, 0 22.3px 31.3px #e2d5c5, 0 41.8px 58.5px #e2d5c5, 0
			100px 140px #e2d5c5;
}
```

![Img](https://a.storyblok.com/f/98358/1440x900/afbef977a4/screenshot-2021-05-05-163836.png)
It is looking good, but we need to continue.

### The Ocean

For the html part, we add a div with a **.ocean** class and inside it we add another div with **.moon-reflect** class that we will use to simulate the reflection of the moonlight.

```html
<div class="container">
	<div class="card">
		<div class="sky"></div>
		<div class="moon"></div>
		<div class="ocean">
			<div class="moon-reflect"></div>
		</div>
	</div>
</div>
```

**.ocean**

The important thing here is that in order to be able to set a desired height of 150px from bottom to top, we must set this position to absolute and start from the bottom, that is why we set **bottom: 0**. Similarly to the sky, we add the background color, a linear gradient and we set the width to the card size. Also note that we set a perspective value of 100px so that we can make transformations in perspective of the **.moon-reflect** child element we will add next.

```css
.ocean {
	position: absolute;
	bottom: 0;
	width: var(--width);
	height: 150px;
	background: linear-gradient(
		0deg,
		rgba(1, 33, 58, 0) 0%,
		rgba(1, 33, 58, 0.1881127450980392) 40%,
		rgba(1, 33, 58, 0.7595413165266106) 85%,
		rgba(1, 33, 58, 0) 100%
	);
	background-color: var(--ocean);
	perspective: 100px;
}
```

![Img](https://a.storyblok.com/f/98358/1440x900/cefd19ae20/screenshot-2021-05-05-163958.png)

**.moon-reflect**

We are almost there. We need the moon and the moonlight to be reflected on the water. In our **.moon-reflect** element, we will position the moon accordingly and with a box-shadow we can create that moonlight diffusion. Note that we are making a transform rotate to make use of that perspective we set up earlier, this will generate that sense of depth of the ocean.

```css
.moon-reflect {
	position: absolute;
	background-color: rgb(226, 214, 198, 0.15);
	top: 20px;
	left: 115px;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	transform: rotateX(45deg);
	box-shadow: 0 8.3px 52.7px #e2d5c5, 0 20px 89.4px #e2d5c5,
		0 37.6px 116.2px #e2d5c5, 0 67px 140.6px #e2d5c5, 0 125.3px 177.2px #e2d5c5,
		0 300px 300px #e2d5c5;
}
```

![Img](https://a.storyblok.com/f/98358/1440x900/359a14985c/screenshot-2021-05-05-164041.png)
And that's all! You made a cool night card with only HTML and CSS!
