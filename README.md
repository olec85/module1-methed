# git-config

git config --list
git config --global user.name “имя”
git config --global user.email “почта”


git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main # Ветка по умолчанию

инициализация git репозитория
git init.
текущее состояние репозитория
git status

git diff смотреть изменения сделанные

git checkout (и название того что надо восстановаитьь)-восстанавливает что либо удаленное

git diff --color-words -покажет цветом где именно было изменение
добавить в трек () файл или папку
git add index.html
добавить все файлы из  в трек
git add .
выполнить коммит (сделать слепок) текущего состояния проекта
git commit -m "сообщение"
git log --oneline  посмотреть историю коммитов

### показывает изменения
```shell
git diff
git diff --color-words // показывает по строкам изменения