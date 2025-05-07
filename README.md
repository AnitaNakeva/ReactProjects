#Plans for ReactJs

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
