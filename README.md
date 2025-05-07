# Plans for ReactJs

## Introduction to React.js

1. React Overview

   - React е JavaScript библиотека за създаване на потребителски интерфейси (UI).
     
   - Позволява ти да създаваш компоненти — малки, многократно използваеми парчета код, които описват как дадена част от интерфейса трябва да изглежда и да се държи.
     
   - React е бърз, ефективен и много популярен за уеб приложения (SPA).
     
   - Използва виртуален DOM за оптимизиране на обновяванията на екрана.


2. JSX Syntax

   - JSX (JavaScript XML) е специален синтаксис, който се използва в React – прилича на HTML, но се пише в JavaScript.
     
   - Той ти позволява да описваш как трябва да изглежда интерфейсът директно в кода, много лесно и четимо.

// с JSX
   ```jsx
      const app = (
        <div>
          <h1>Заглавие</h1>
          <p>Текст</p>
        </div>
      );
   ```

// без JSX
   ```js
      const app = React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Заглавие'),
        React.createElement('p', null, 'Текст')
      );
   ```

   - Babel: превежда JSX → в React.createElement(...)

3. React Installation

   - npx create-react-app my-app
  
   - cd my-app
  
   - npm start
  

# br

---------------------------------------------------------------------------------------------------------------------------------------------

# br

## Components: Basic Idea

1. Components Overview

   - Компонентите са основния градивен елемент на React приложението.
     
   - Те позволяват да разделим UI-то (потребителския интерфейс) на малки, независими части, които могат да се използват многократно.
  
   - В React компонентите са функции или класове (по-стария начин), които връщат JSX (подобен на HTML синтаксис) за да изградят интерфейса.
  
2. Functional Components

   ```jsx
   import React from 'react';

   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }

   export default Welcome;
   ```

   - В React компонентите винаги трябва да връщат JSX (или null).

3. Props

   - Props са входните данни, които подаваш на компонентите, за да им кажеш какво да показват или как да се държат.

   - Например, в примера по-горе, ние подаваме name като prop на компонента Welcome.
  
   - Тези данни могат да бъдат всякакви – текст, числа, масиви, обекти или дори други компоненти.
  
4. State

   - State е данни, които могат да се променят и обновяват в компонента.

   - Във функционалните компоненти, които използват React hooks (като useState), можем да съхраняваме и променяме състоянието.
  
     ```jsx
     import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
      
      export default Counter;
     ```

5. Children

   - children е специално props свойство в React, което позволява на компонента да получава съдържание (текст, HTML или други компоненти) между отварящия и затварящия таг на родителския компонент.

   ```jsx
   const BookList = () => {
     return (
       <ul>
         <Book title="IT" author="Stephen King" price="20">
           <span>Some value here</span>
         </Book>
       </ul>
     );
   };

   ```

   - Тук имаме компонент BookList, който рендерира Book компонента. Между отварящия и затварящия таг на компонента Book има span с текст "Some value here".
  
   - В Book компонента, React автоматично ще постави всичко между <Book></Book> в свойството props.children.

   ```jsx
   const Book = (props) => {
     return (
       <li className="book">
         <div>{props.children}</div>
       </li>
     );
   };
   ```

















