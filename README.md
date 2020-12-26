### Sabancı University To-do App Project / 26.12.2020

### Detail of Project

- I have used Less to work on CSS because Less provides me:
    - variables
    - conditions
    - nested write
    
- Redux is used in that project because I want to learn it too. It provides me:
    - A simple router, -written by me-
    - Easy state managment for all component
    - Responsive design:
        - Dynamic components for desktop and mobile
        - Instant information where User
    - Adapted work with Local Storage.

### Benefits of React

- It brings a great community with it:
    - You can find easily what you need:
        - Less compiler
        - SVG Components from SVGs
        - and so forth..
    - There are a lot of solutions for problems faced during developing with react.

- It provides really great facility to create a SPA ( Single Page Application ).
- It is easy to manage props and transfer from parents to children.
- It can produce dynamic components, and dynamic content for static components:
    - Render from list
    - Dynamic Icon components
    - Conditional Render 

### Nervous feelings for React

I have worked with react for a while 1 - 1,5 years ago. Then I left proggraming to prepare for university entrance exam.
After that I started to work with Vue and I have to admit that, Vue is easier than react for a lot of aspects:

    - Dynamic Components:
        With Vue you can easily build a dynamic component. The only thing you have to do is write that:
            <component :is='tag' />
        then you pass the tag props to component to say what you want it to be. It is all.
        But in React I wrote a list to match props and component which is created by SVG compiler. Then you switch that component and the temporary components in html. It is hard to explain but you can look at src/Components/Icon for that.
    
    - Dynamic Content in Static Components:
        I cannot say it's hard to map an array but in Vue, you can do that with attributes and it offers you more control on component.
    
    - Flexibility of JSX:
        Now, What I mean, if you experienced vue at least one time, you got me already. In React you have limited for spesific control and you cannot exceed. But in vue it is really extensive.
        You can write completely different application in jsx and it can keep working it!

I do not know widely about React so of course I might be wrong but these are my experience with React. I have put the resources below I used when I stuck ↓:  

### Resources to Learn React

<-- Less Compiler -->
https://www.folio3.com/using-less-in-react-without-ejecting How to use Less in React without ejecting.

<--  React Basics  -->
https://www.youtube.com/watch?v=Tn6-PIqc4UM
https://www.youtube.com/watch?v=mACw_G-okPE&t=3190s
https://tr.reactjs.org/docs/hooks-state.html
https://reactjs.org/tutorial/tutorial.html
https://reactjs.org/docs/hooks-effect.html

<-- Dynamic Component -->
https://gist.github.com/mpolinowski/be444c52280598752a408b9e9b3de123

<-- SVG import as a component -->
https://www.youtube.com/watch?v=JUrcWu57itY

npx @svgr/cli 'SVG PATH' --out-dir 'DESTINATION PATH'

<-- Date -->
https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
