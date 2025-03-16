# Portfolio Website

This repository contains my personal portfolio website.

## Sections 

⭐ About Me \
⭐ Skills \
⭐ Education \
⭐ Experience \
⭐ Projects \
⭐ Certifications \
⭐ Social Media 

## Getting Started 

### Installation

➡️ Install compatible versions of `node.js` and `npm`

➡️ Clone the repository to your local system
```bash
git clone https://github.com/arunimabarik75/Portfolio-Website.git
```
  
➡️ Navigate to the directory
```bash
cd Portfolio-Website
```

➡️ Install all required dependencies
```bash
npm install
```

➡️ Start the development server
```bash
npm start
```

➡️ The server will start at `http://localhost:3000` by default


### Tech Stack

💻 React.js \
💻 Chakra UI 

### Icons

Several sections of the website contain icons. These icons have been taken from a variety of sources -

✅ [Iconify](https://icon-sets.iconify.design/)
1. Copy React SVG code from here and paste it in a `.js` file 
2. `./src/components/Icons.js` contains SVG code for different icons

✅ [FontAwesome](https://fontawesome.com/icons)
1. [Set Up FontAwesome with React](https://docs.fontawesome.com/web/use-with/react) 
2. Select icons from a huge variety of free and paid icons available 
3. Choose React (Individual Import) to add the icons to the website

✅ [Icons8](https://icons8.com/icons)
1. Select icons from the available types and styles
2. Download ➡️ SVG Embed ➡️ Inline ➡️ Copy HTML Code

### Illustrations

1. All the illustrations have been taken from [Undraw](https://undraw.co/illustrations)
2. The illustrations can be customised to match the color theme of the website
3. The background of the downloaded images can be removed using [Canva Background Remover](https://www.canva.com/features/background-remover/) or any other online tool

### Fonts

1. [Fontsource](https://fontsource.org/) fonts have been used in this project
2. The following fonts have been used - \
    🔸 [Paytone One](https://fontsource.org/fonts/paytone-one) \
    🔸 [Satisfy](https://fontsource.org/fonts/satisfy) \
    🔸 [Work Sans](
    https://fontsource.org/fonts/work-sans) \
    🔸 [Dancing Script](
    https://fontsource.org/fonts/dancing-script)
3. Install the fonts and include them in `./src/theme.js` file

### Favicon

1. The favicon has been generated using [Favicon Generator](https://www.favicon-generator.org/) and [Favicon IO](https://favicon.io/)
2. Place the icons inside `./public/icons` directory
3. Include the favicons into `./public/index.html` file

### Splash Screen

1. Splash Screen is the loading screen that appears whenever the website is loaded
2. The animation for the same has been generated using [Canva Animated Logo Maker](https://www.canva.com/create/logos/animated/)
3. The website has been wrapped inside the `SplashScreen` component as in `./src/App.js`

### Cartoon Profile Image

I have generated the cartoon version of my image using [PhotoCartoon](https://photocartoon.net/)

### Contact Form

1. The contact form component in `./src/components/Contact.js` sends all form data to your email address
2. The same has been configured using [Email.js](https://www.emailjs.com/)

### Theme

The current theme of the website uses the following colors - 
1. Light Blue ( `blue.50` or `#EBF8FF` )
2. Medium Blue ( `blue.400` or `#4299E1` )
3. Dark Blue ( `blue.900` or `#1A365D` )
4. White ( `white` or `#FFFFFF` )

## Deployment 

1. This website has been deployed on [Vercel](https://vercel.com/docs/deployments/overview)
2. Various other alternatives exist like [GitHub Pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/)
3. Before deployment, create an optimised `build` for your project

```bash
npm run build
```
This creates a `build` directory with all the code. Deploy only this folder.

This website has been deployed [here](https://arunima-barik-portfolio.vercel.app/)

## References 

[Ashutosh Hathidara's Portfolio Website](https://ashutoshhathidara.com/) 


