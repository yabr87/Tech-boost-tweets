
## Tech-boost-tweets
### Тестове завдання від GoIT https://yabr87.github.io/tweets-tech-boost/
- посилання на технічне завдання посилання [Google Drive](https://drive.google.com/file/d/1XQnUiuhy6zndS8wN9ZonHZV6Iu0esiA1/view)  
- посилання на макет посилання [Figma](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)

##  
При виконанні завдання були використані такі бібліотеки
- React.js
- styled-components
- styled-components-theme  
- axios 
- react-router-dom 
- react-icons
- react-loader-spinner 
- mocapi.io

##
В додатку виконана адаптивна верстка. На планшетах ширина картки зменшена для відмалювання 2 карток врядок. На телефонах починаючи від 320px до 480px картка підлаштовується до екрану користувача. На телефонах та комп’ютерах компанії Apple додаток не тестувався :(.


##
В додатку було реалізовано 3 сторінки
- HomePage
- Tweets
- ErrorPage



##
### ServiceApi.js
- `getUsers` приймає об'єкт params з властивостями page(число у форматі строки) та follow(строка) в якій може бути all, true, false. All ігнорується true, false додаються до запиту.
Для імітації бекенду використовувався mocapi.io. Безкоштовна його версія не дозволяє налаштувати відповідь тому в `getUsers` робиться 2 запити за допомогою Promise.all перший запит використовуються для отримання даних, другий запить робиться на +1 сторінку в перед для перевірки існування наступної сторінки. Якщо при другому запиті приходить порожній массив то кнопка Load More не відображається на сторінці.
- `updateUser` приймає об'єкт з властивосятми id, followers, follow та перезаписує їх на сервері.

##
### Shared компонент Button
Приймає такі пропси color, text, onClick, loading. Та містить в собі лоадер ThreeDots.
- onClick  функція яку виконується при кліці
- loading приймає булеве значення true або false(за замовчуванням). Якщо передати значення true то на кнопці відображається лоадер та функція onClick не спрацьовує.

##
### Основний компонент додатка UsersList
Містить в собі три компоненти FilterBar, UlList з картками, та кнопку load More. Виконує передачу параметрів до serviceApi.js
Передача параметрів запиту виконується через строку пошуку да за допомогою useSearchParams з бібліотеки 'react-router-dom';

Керування рендером та функціоналом виконується через useEffect та функцію fetchData.
```js
  const [data, setData] = useState([]);
  // дані для рендеру карток
  const [showButton, setShowButton] = useState(null);
  //дані для розуміння рендерити чи ні кнопку load more(костиль через бекенд )
  
  const [isLoading, setIsLoading] = useState(false);
  //параметр для вмикання лоадера на кнопці передається в кнопку
  
  const [searchParams, setSearchParams] = useSearchParams();
  //хук для роботи з пошуковою строкою  
```

```js
 useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    //отримує параметри запиту з пошукової строки.
    
    if (!params.follow) {
      setSearchParams({ page: 1, follow: 'all' });
    }
    //робить перевірку якщо строка відсутня встановлює дефолтні значення для запобігання помилок під час запиту.
    
    fetchData(params);
    // приймає параметри з пошукової строки 
        
  }, [searchParams]);
    //якщо searchParams змінюються то робить запит.
```

```js
  const fetchData = async params => {
    try {
      setIsLoading(true);
      //вмикає лоадер на кнопці.
      
      const result = await getUsers(params);
      //робить запит з параметрами отриманими з пошукової строки, та отримує об'єкт з двома масивами.
      
      if (params.page === '1') {
        setData([]);     
      }
      // якщо при запиті в параметрах сторінка дорівнює '1' то стейт з даними для карток очищається для запобігання дублювання при перемиканні фільтра.
      
      setData(prevData => [...prevData, ...result[0]]);
      setShowButton(result[1]?.length);
      //перший масив  p result записується стейт data з даними/
      //другий масив використовується для відображення або ховання кнопки load more. Якщо довжина масиву 0 то кнопка не буде відмальовуватися бо далі даних немає.
      
    } catch (error) {
      alert(`Something went wrong. Try again!`);
    } finally {
      setIsLoading(false);
      //вимикає лоадер на кнопці.
    }
  };
```

```js
 //функція відповідає за перемикання сторінок на кнопці Load More
  const handleClick = () => {
  
    const { page, follow } = Object.fromEntries(searchParams.entries());
    //отримує дані з пошукової строки
    
    setSearchParams({ page: +page + 1, follow });
    // додає до сторінки +1 записує оновлені дані в пошукову строку. 
  }; 
  
```

##
### Компонент Card який відмальовується в UsersList
Містить в собі компонент Button та логіку підписки та відписки.  
Приймає через пропси дані для картки.  
`updateUerFollow` керує лоадером на кнопці та змінює параметр follow на true або false та додає або віднімає кількість followers в залежності від того які дані були отримані.
```js
<Text>{tweets?.toLocaleString('en')} Tweets</Text>
<Text>{followers?.toLocaleString('en')} Followers</Text>
```
toLocaleString('en') перетворює число без ком на 100,500, 1,020, 30,500 ітд.

##
### Компонент FilterBar
Містить в собі компоненти: 
- FilterParams - відмальовує в FilterBar параметри фільтра в залежності від обраного фільтра 
- FilterBtn - відповідає за відкриття та закриття фільтру.
- Filter - Це форма з радіо кнопками яка в звлежності від обраного параметра записує в пошукову строку дані для фільтрацій які буде використовувати компонент UsersList.       
