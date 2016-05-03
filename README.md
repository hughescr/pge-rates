# Overview

This is the basic residential rate data for PG&E's electric plans.  These are updated from time to time to track the latest PG&E rates, but the updating is not exactly religious, so the data might be slightly outdated.

Rate plans included in the dataset:

* E1
* E6 (new signups not allowed after 2016-05-31)
* E7 (deprecated rate plan that is no longer available)
* E9 (plug-in electric car owners only)
* EV (plug-in electric cat owners only)
* E-TOU-A
* E-TOU-B

# Usage

```
const pge_rates = require('@hughescr/pge-rates').rates;
const pge_baselines = require('@hughescr/pge-rates').baselines;

console.log(`The peak summer rate for plan E6 is ${pge_rates.E6.prices['Summer Peak']/100000}` $/kWh);
console.log(`Baseline amount for winter for non-electric heating households in region X is ${pge_baselines.code_b.X.Winter}` kWh/day);
```
