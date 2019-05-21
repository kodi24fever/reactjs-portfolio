# React-Portfolio App

  

Personal portfolio page [www.fdaviz.com](https://www.fdaviz.com/) built in React.

  

## Building Process

1. Installed [New React App](https://reactjs.org/docs/create-a-new-react-app.html) using Node JS.

2. Migrated my [VanillaJS Portfolio Version](https://github.com/kodi24fever/vanillajs-portfolio) and migrated it into a new React Application.

3. The first approach was to use libraries to create animations because creating my own was time consuming. For that reason, I decided to use [Wow.js](https://wowjs.uk/) and [Animate.css](https://daneden.github.io/animate.css/) libraries.

4. Used React Props to manage components references in the application and share components details to create [SmoothScroll](https://css-tricks.com/snippets/jquery/smooth-scrolling/) usign my own code.

5. Most of the page uses Bootstrap, except for the modal gallery that has my own CSS3 flex-box code.

6. Created different modals for the gallery project and using [React Event Handlers](https://reactjs.org/docs/handling-events.html) I could show each project modal.

7. The form uses [formsfree.io](https://formspree.io/) for the backend submission.

8. I used images from [unsplash](https://unsplash.com) which are free to use and icons from [flaticon](https://www.flaticon.com/) which are also free to use.

9. I wanted to create an amazing animated background at the top of the page, so I used some help from [codepen.io](https://codepen.io/saransh/pen/BKJun) and adapted the code to my website.

## Challenges that took me some time to solve

1. Implementing Wow.js + Animate.css was difficult at the beginning, but worth it. It takes time to make it work with your app, yet it takes less time than building your won libraries.

2. 2.Sharing DOM component details such as height, offsetTops, etc, between other components was a bit difficult because [React Refs](https://reactjs.org/docs/refs-and-the-dom.html) had to match parent containers' ids. That took me the long time to figure out.

3. After using Bootstrap for a while I had to re learn some CSS3 tricks like flex-box and how to use @keyframes + animation.

## Conclusion

Thanks for visiting my react-portfolio-website and for taking time to read this!