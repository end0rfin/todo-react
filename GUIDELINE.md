## Технический стек

- Язык программирования - [TypeScript](https://www.typescriptlang.org/)
- Библиотека создания UI - [React](https://reactjs.org/)
- Управление состоянием - useContext
- Сборка модулей проекта - [Webpack](https://webpack.js.org/)

## Система контроля версий

- Cистема контроля версий - [Git](https://git-scm.com/)
- Модель ветвления - [GitHub Flow](https://guides.github.com/introduction/flow/)
- Модель слияния - [Squash and Rebase](https://blog.carbonfive.com/always-squash-and-rebase-your-git-commits/)

## Пакетный менеджер

В качестве пакетного менеджера мы используем [Yarn](https://yarnpkg.com/). Добавление любых зависимостей в проект, допускается только после согласования с core-командой.

## Версионирование

Для версионирования библиотек и компонентов мы используем принципы [Semantic Versioning](https://semver.org/).

## Качество кода

- prettier
- eslinter
- husky

## Тестирование

- Модульное тестирование - [Jest](https://jestjs.io/)

## Архитектура

### Описание стилей

Стили описываются с использованием CSS-фреймворка [tailwindcss](https://tailwindcss.ru/).

colors.scss - список именованных SCSS переменных со значением HEX цвета (пример: $alert-success: #14A76C;). Позволяет указывать цвет при необходимости дополнительной стилизации компонентов.

theme.scss - список CSS переменных со значением SCSS переменной (пример: --color-secondary: $mood-light-blue;).

## Состояние

...

### Состояние приложения

...

### Состояние UI

...

### Общее состояние

...

## Структура проекта

...

## Соглашение об именовании

### Файлы

Стиль именования файлов и директорий - [kebab-case](https://ru.wikipedia.org/wiki/Snake_case).

### CSS

Стиль именования классовых css-селекторов и атрибутов - [kebab-case](https://ru.wikipedia.org/wiki/Snake_case).

### Классы и компоненты

Стиль именования классов и компонентов - [CamelCase](https://ru.wikipedia.org/wiki/CamelCase).

### Переменные

Стиль именования переменных - [lowerCamelCase](https://ru.wikipedia.org/wiki/CamelCase).

### Константы

Стиль именования констант которые хранят данные известные до этапа выполнения кода приложения (словари, переменные окружения) - [SCREAMING_SNAKE_CASE](https://ru.wikipedia.org/wiki/Snake_case).

Именование текстовых констант не должно производиться путем перевода текста с русского на английский язык. При этом название должно отображать элемент, частью которого данный текст является. Например: `SEND_BUTTON_TEXT`, `AMOUNT_INPUT_LABEL` и тд.

### Коммиты

Стиль именования коммитов - [Commitlint Config Conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

Коммит должно соответствовать следующим требованиям:

- везде английский язык
- в scope все буквы строчные
- в scope все слова в kebab-case
- в description нет точки в конце описания
- в description первая буква всегда строчная
- в description повелительное наклонение в настоящем времени ("change", а не "changed" или "changes")

## Мониторинг

...

## Производительность

...
