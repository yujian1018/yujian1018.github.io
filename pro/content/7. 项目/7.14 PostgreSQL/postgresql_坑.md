# 使用中出现的问题

## NOT IN 使用 LEFT JOIN / IS NULL或NOT EXISTS而不是NOT IN

```text

NOT IN正如我们之前讨论的那样，由于它处理NULL列表中的值的方式，这是一个特例。

不幸的是，PostgreSQL的优化器不能使用t_right.value定义为的事实，NOT NULL因此列表不能返回任何NULL值。

这就是为什么NOT IN查询PostgreSQL使用一种特殊的访问方法hashed Subplan：

首先，它执行列表查询（使用Seq Scanon t_right）并散列其结果。从哈希中消除重复值
然后它从t_left（再次，使用Seq Scan）获取每一行并对每个值应用过滤条件
过滤条件的工作原理如下：

如果t_left.value是NULL，它立即返回NULL。
如果t_left.value不是NULL，则在步骤1中生成的哈希表中搜索：

如果在列表中找到该值，TRUE则返回。
如果未找到该值，则再次搜索哈希表以查找NULL值。取决于是否NULL找到NULL或FALSE返回
这本身就是一种非常有效的方法，但是需要两次查找值会降低查询性能。

查询需要1.34秒。

另一个令人讨厌的副作用是使用a subplan是PostgreSQL的优化器可用于NOT IN构造的唯一方法。

由于PostgreSQL无法将散列子计划刷新到磁盘上，因此它将估计子查询大小，如果它确定它不适合work_mem，它将使用仅为subplan每行执行t_left或实现的仅仅是将在循环中搜索行。

这可能非常糟糕，因为优化器只会改变计划，因为t_right会超出一定的限制，有一天查询会变得很慢而没有任何明显的原因。


PostgreSQL treats LEFT JOIN and NOT EXISTS equally, using same execution plan for both of them (namely a Hash Anti Join for the example above).
PostgreSQL对待它们LEFT JOIN并NOT EXISTS同样地使用相同的执行计划（即Hash Anti Join上面的示例）。

As for NOT IN, which is semantically different since its logic is trivalent and it can return NULL, PostgreSQL tries to take this into account and limits itself to using a filter against a subplan (a hashed subplan for a hashable resultset like in example above).
至于NOT IN它在语义上是不同的，因为它的逻辑是三价的并且它可以返回NULL，PostgreSQL试图将此考虑在内并限制自己使用针对a的a subplan（hashed subplan对于像上面的例子中的可哈希结果集）。

Since it need to search the hash table for each missing value twice (first time to find the value, second time to find a NULL), this method is a little less efficient.
由于需要两次搜索哈希表中的每个缺失值（第一次查找值，第二次查找a NULL），此方法效率稍差。

A plain subplan, which the optimizer can resort to any time it decides the list will not fit into the memory, is very inefficient and the queries that have possibility of using it should be avoided like a plague.
一个普通的subplan，它优化器可以求助于它决定名单将不适合到内存中的任何时间，是非常低效的，应该避免像瘟疫一样有使用它的可能性的查询。

That's why in PostgreSQL 8.4 one should always use LEFT JOIN / IS NULL or NOT EXISTS rather than NOT IN to find the missing values.
这就是为什么在PostgreSQL 8.4中应该总是使用LEFT JOIN / IS NULL或NOT EXISTS不是NOT IN找到缺失的值。

```
