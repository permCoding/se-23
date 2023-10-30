# search in tree  

### Задачи для самостоятельного исполнения:  

1) написать функцию построения дерева поиска
2) подсчитать среднее количество шагов для поиска элементов в дереве    
-- тут нужно принять во внимание, что дерево не будет идеально сбалансированным    
-- вместо балансировки используется метод случайного наполнения дерева  
-- оценить разницу в среднем кол-ве шагов между сбалансированным деревом
  и деревом, построенным случайным образом  
3) написать функцию для вычисления максимальной глубины дерева  
4) подумать как можно вывести построенное дерево - для проверки  

---  

- пример дерева как иерархия вложений:  

> вершина=4 (слева=3 (слева=None; справа=None); справа=5 (слева=None; справа=7 (слева=6 (слева=None; справа=None); справа=None)))

- пример дерева как иерархия в консоли:  

```txt
key=4
>> left  key=3
	>> left  --|
	>> right --|
>> right key=5
	>> left  --|
	>> right key=7
		>> left  key=6
			>> left  --|
			>> right --|
		>> right --|
```