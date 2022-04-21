
# curl

## ping

```bash

curl 'http://localhost:8123/ping'

```

## select

```bash

echo 'SELECT 1' | curl 'http://192.168.1.185:8123/?user=default&password=1Aa_abbccd' -d @-
echo 'SELECT number FROM numbers LIMIT 10' | curl 'http://192.168.1.185:8123/?user=default&password=1Aa_abbccd&database=system' --data-binary @-

```

## insert

```base

echo 'INSERT INTO t VALUES (1),(2),(3)' | POST 'http://localhost:8123/?database=test_db'

```
