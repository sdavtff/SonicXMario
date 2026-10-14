#!/bin/bash
# usage: trace.sh level char z0 z1 [maxlines]
TRACE=$3,$4 timeout 300 node playthrough.mjs http://127.0.0.1:8123/index.html $1 $2 2>&1 | python3 -c "
import json,sys
for line in sys.stdin:
    if line.startswith('{'):
        d=json.loads(line)
        print('RESULT', d['ok'], d.get('reason'), d.get('at'))
        for e in d['events'][:${5:-40}]: print(e)
"
