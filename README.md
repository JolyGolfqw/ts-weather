# Task: перенести проект погоды на TypeScript

## Постановка задачи

Вы работаете над проектом "Weather Forecast", который показывает текущую температуру для выбранного города. Ваша команда решила перейти на TypeScript для лучшей поддержки типов и структуры проекта. Ваша задача - переписать существующие компоненты на TypeScript.

## Subtask 1

Сделай форк и клон данного репозитория. Запусти его и проверь как работает приложение. После перехода на TypeScript, приложение должно работать так же, как и до этого.

## Subtask 2

Следуя инструкции [www.robinwieruch.de/vite-typescript](https://www.robinwieruch.de/vite-typescript/) добавь поддержку TypeScript в проект.

## Subtask 3

Перепеши компоненты на TypeScript. Не забудь поменять расширение файлов на `.tsx`.

Обрати внимание на то, что:

- Компоненты `WeatherDisplay` и `WeatherSearch` принимают пропсы и нужно правильно описать типы этих пропсов.
- Для всех компонентов нужно указать тип возвращаемого значения (подскажем - тип `JSX.Element`).
- В компоненте `WeatherSearch` есть массив `cities`, который также нужно правильно описать в TypeScript.
- В компоненте `WeatherSearch` есть функция `handleSelect`, которая принимает параметр `e`. Нужно дать тип этому параметру. Найти правильный тип можно следуя [шпаргалке на этой странице](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/).

Пройдись по всему проекту и проставь типы везде, где можно.

В этом проекте не настроен ESLint должным образом. На реальных проектах бывают установены правила, которые обязывают указывать типы практически для всех переменных, параметров, функций и т.д.

## Эксперимент

Запусти приложение и проверь правильность работы.

Если все работает нормально, то скопируй следующий объект и добавь в список городов `cities` в компоненте `WeatherSearch`:

```javascript
{ name: 'Makhachkala', latutide: 42.9836, longitode: 47.5047 }
```

Если ты правильно указал тип для массива `cities`, то IDE тут же даст понять, что в этом объекте есть ключи с неверным названием.

Приложение не забилдится до тех пор, пока эти ошибки не будут исправлены. В этом и есть сила TypeScript :)

## Закрываем задачу

Еще раз проверь правильность работы приложения. Если всё ОК, то сделай коммит и выгрузи работу на проверку.
