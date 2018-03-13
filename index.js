'use strict';

const _ = require('underscore');

// PG&E is all in CA, so always in Pacific timezone
const moment        = require('moment-timezone');
moment.tz('America/Los_Angeles');

exports.rates =
{
    E1 : {
        name: 'E1',
        schedule: [
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer' },
            { type: 'Winter' },
        ],
        prices: {
            Summer: [
                { end: 1,        rate: 18212 },
                { end: 1.3,      rate: 22481 },
                { end: 2,        rate: 28578 },
                {                rate: 36389 },
            ],
            Winter: [
                { end: 1,        rate: 18212 },
                { end: 1.3,      rate: 22481 },
                { end: 2,        rate: 28578 },
                {                rate: 36389 },
            ],
        },
    },
    E6 : {
        name: 'E6',
        schedule: [
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 13, end_time: 19, type: 'Summer Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 10, end_time: 13, type: 'Summer Partial Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 19, end_time: 21, type: 'Summer Partial Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 17, end_time: 20, type: 'Summer Partial Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 17, end_time: 20, type: 'Winter Partial Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 17, end_time: 20, type: 'Winter Partial Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { end: 1,        rate: 34166 },
                { end: 1.3,      rate: 38435 },
                { end: 2,        rate: 44442 },
                {                rate: 52253 },
            ],
            'Summer Partial Peak' : [
                { end: 1,        rate: 22638 },
                { end: 1.3,      rate: 26908 },
                { end: 2,        rate: 32915 },
                {                rate: 40726 },
            ],
            'Summer Off Peak' : [
                { end: 1,        rate: 14961 },
                { end: 1.3,      rate: 19231 },
                { end: 2,        rate: 25237 },
                {                rate: 33048 },
            ],
            'Winter Partial Peak': [
                { end: 1,        rate: 17078 },
                { end: 1.3,      rate: 21347 },
                { end: 2,        rate: 27354 },
                {                rate: 35165 },
            ],
            'Winter Off Peak': [
                { end: 1,        rate: 15395 },
                { end: 1.3,      rate: 19664 },
                { end: 2,        rate: 25671 },
                {                rate: 33482 },
            ],
        },
    },
    E7 : {
        name: 'E7',
        schedule: [
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 12, end_time: 18, type: 'Summer Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 12, end_time: 18, type: 'Winter Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 12, end_time: 18, type: 'Winter Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { end: 1,        rate: 37804 },
                { end: 1.3,      rate: 42136 },
                { end: 2,        rate: 48232 },
                {                rate: 56043 },
            ],
            'Summer Off Peak' : [
                { end: 1,        rate: 12989 },
                { end: 1.3,      rate: 17320 },
                { end: 2,        rate: 23417 },
                {                rate: 31228 },
            ],
            'Winter Peak': [
                { end: 1,        rate: 16354 },
                { end: 1.3,      rate: 20685 },
                { end: 2,        rate: 26782 },
                {                rate: 34593 },
            ],
            'Winter Off Peak': [
                { end: 1,        rate: 13350 },
                { end: 1.3,      rate: 17681 },
                { end: 2,        rate: 23778 },
                {                rate: 31589 },
            ],
        },
    },
    E9: {
        name: 'E9',
        schedule: [
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 14, end_time: 21, type: 'Summer Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 14, type: 'Summer Partial Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 21, end_time: 24, type: 'Summer Partial Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 17, end_time: 21, type: 'Summer Partial Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 24, type: 'Winter Partial Peak' },
            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 17, end_time: 21, type: 'Winter Partial Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 24, type: 'Winter Partial Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 17, end_time: 21, type: 'Winter Partial Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { end: 1,        rate: 36539 },
                { end: 1.3,      rate: 39998 },
                { end: 2,        rate: 49112 },
                {                rate: 56599 },
            ],
            'Summer Partial Peak' : [
                { end: 1,        rate: 15001 },
                { end: 1.3,      rate: 18459 },
                { end: 2,        rate: 27575 },
                {                rate: 35061 },
            ],
            'Summer Off Peak' : [
                { end: 1,        rate:  8495 },
                { end: 1.3,      rate: 11954 },
                { end: 2,        rate: 12523 },
                {                rate: 20009 },
            ],
            'Winter Partial Peak': [
                { end: 1,        rate: 14989 },
                { end: 1.3,      rate: 18446 },
                { end: 2,        rate: 27562 },
                {                rate: 35048 },
            ],
            'Winter Off Peak': [
                { end: 1,        rate:  9489 },
                { end: 1.3,      rate: 12946 },
                { end: 2,        rate: 12522 },
                {                rate: 20009 },
            ],
        },
    },
    EV: {
        name: 'EV',
        schedule: [
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 14, end_time: 21, type: 'Summer Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 15, end_time: 19, type: 'Summer Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 14, type: 'Summer Partial Peak' },
            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 21, end_time: 23, type: 'Summer Partial Peak' },

            { start_cal: { month: 'May', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 14, end_time: 21, type: 'Winter Peak' },
            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 15, end_time: 19, type: 'Winter Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 14, end_time: 21, type: 'Winter Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Saturday', end_day: 'Sunday', start_time: 15, end_time: 19, type: 'Winter Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 14, type: 'Winter Partial Peak' },
            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 21, end_time: 23, type: 'Winter Partial Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 7, end_time: 14, type: 'Winter Partial Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'April', day: 30 }, start_day: 'Monday', end_day: 'Friday', start_time: 21, end_time: 23, type: 'Winter Partial Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { rate: 44402 },
            ],
            'Summer Partial Peak' : [
                { rate: 24156 },
            ],
            'Summer Off Peak' : [
                { rate: 11466 },
            ],
            'Winter Peak': [
                { rate: 31228 },
            ],
            'Winter Partial Peak': [
                { rate: 19043 },
            ],
            'Winter Off Peak': [
                { rate: 11742 },
            ],
        },
    },
    'E-TOU A': {
        name: 'E-TOU A',
        schedule: [
            { start_cal: { month: 'June', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 15, end_time: 20, type: 'Summer Peak' },

            { start_cal: { month: 'June', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 15, end_time: 20, type: 'Winter Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'May', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 15, end_time: 20, type: 'Winter Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { end: 1,        rate: 40227 - 11608 },
                {                rate: 40227 },
            ],
            'Summer Off Peak' : [
                { end: 1,        rate: 32669 - 11608 },
                {                rate: 32669 },
            ],
            'Winter Peak': [
                { end: 1,        rate: 28430 - 11608 },
                {                rate: 28430 },
            ],
            'Winter Off Peak': [
                { end: 1,        rate: 27000 - 11608 },
                {                rate: 27000 },
            ],
        },
    },
    'E-TOU B': {
        name: 'E-TOU B',
        schedule: [
            { start_cal: { month: 'June', day: 1 }, end_cal: { month: 'October', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 16, end_time: 21, type: 'Summer Peak' },

            { start_cal: { month: 'June', day: 1 }, end_cal: { month: 'October', day: 31 }, type: 'Summer Off Peak' },

            { start_cal: { month: 'November', day: 1 }, end_cal: { month: 'December', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 16, end_time: 21, type: 'Winter Peak' },
            { start_cal: { month: 'January', day: 1 }, end_cal: { month: 'May', day: 31 }, start_day: 'Monday', end_day: 'Friday', start_time: 16, end_time: 21, type: 'Winter Peak' },

            { type: 'Winter Off Peak' },
        ],
        prices: {
            'Summer Peak': [
                { rate: 35600 },
            ],
            'Summer Off Peak' : [
                { rate: 21854 },
            ],
            'Winter Peak': [
                { rate: 25294 },
            ],
            'Winter Off Peak': [
                { rate: 19974 },
            ],
        },

    },
};

exports.baselines =
{
    code_b: {
        P: { Summer: 13.8, Winter: 12.3 },
        Q: { Summer:  7.0, Winter: 12.3 },
        R: { Summer: 15.6, Winter: 11.0 },
        S: { Summer: 13.8, Winter: 11.2 },
        T: { Summer:  7.0, Winter:  8.5 },
        V: { Summer:  8.7, Winter: 10.6 },
        W: { Summer: 16.8, Winter: 10.1 },
        X: { Summer: 10.1, Winter: 10.9 },
        Y: { Summer: 10.6, Winter: 12.6 },
        Z: { Summer:  6.2, Winter:  9.0 },
    },
    code_h: {
        P: { Summer: 16.4, Winter: 29.6 },
        Q: { Summer:  8.3, Winter: 29.6 },
        R: { Summer: 18.8, Winter: 29.8 },
        S: { Summer: 16.4, Winter: 27.1 },
        T: { Summer:  8.3, Winter: 14.9 },
        V: { Summer: 13.6, Winter: 26.6 },
        W: { Summer: 20.8, Winter: 20.6 },
        X: { Summer:  9.3, Winter: 16.7 },
        Y: { Summer: 13.0, Winter: 27.1 },
        Z: { Summer:  7.7, Winter: 18.7 },
    },
};

/**************************************
 * Date-time boundary check functions *
 **************************************/

const day_lookup = _.chain(_.range(7))
                    .map(i => [moment().day(i).format('dddd'), i || 7])
                    .object()
                    .value();

const month_lookup = _.chain(_.range(12))
                    .map(i => [moment().month(i).format('MMMM'), i])
                    .object()
                    .value();

const checkCalendarDate = _.memoize((month, date, start_date, end_date) =>
{
    const after_start = (month > month_lookup[start_date.month]) ||
                      (month == month_lookup[start_date.month] && date >= start_date.day);

    const before_end = (month < month_lookup[end_date.month]) ||
                     (month == month_lookup[end_date.month] && date <= end_date.day);

    // console.log(`${month} ${date} ${start_date.month} ${start_date.day} ${end_date.month} ${end_date.day}`);

    return after_start && before_end;
},
(month, date, start_date, end_date) =>
{
    return `${month} ${date} ${start_date.month} ${start_date.day} ${end_date.month} ${end_date.day}`;
});

const checkDayOfWeek = _.memoize((day, start_day, end_day) =>
{
    // console.log(`${day} ${start_day} ${end_day}`);
    return (day >= day_lookup[start_day] &&
            day <= day_lookup[end_day]);
},
(day, start_day, end_day) =>
{
    return `${day} ${start_day} ${end_day}`;
});

const checkTimeOfDay = _.memoize((some_date, start_time, end_time) =>
{
    const checkHour = some_date.hour();

    return (checkHour >= start_time && checkHour < end_time);
},
(some_date, start_time, end_time) =>
{
    return `${some_date.hour()} ${start_time} ${end_time}`;
});

exports.timePeriodForRateAndDate = _.memoize((rate, date) =>
{
    const result = _.find(rate.schedule, condition =>
    {
        // If there's no start period, then we match by default as we've reached the end
        if(!condition.start_cal)
        {
            return true;
        }

        // We are in this calendar period
        if(checkCalendarDate(date.month(), date.date(), condition.start_cal, condition.end_cal))
        {
            // If there's no start day, then we match by default as we've reached the end of this calendar chunk
            if(!condition.start_day)
            {
                return true;
            }

            // Check day of week (use Sunday = 7)
            if(checkDayOfWeek(date.day() || 7, condition.start_day, condition.end_day))
            {
                // Check time of day
                if(checkTimeOfDay(date, condition.start_time, condition.end_time))
                {
                    return true;
                }
            }
        }

        return false;
    });

    return result.type;
}, (rate, date) => date.format('MMDDHH') + rate.name);

/*
  According to PG&E, the way the baseline calculation works is that for a billing period, your baseline is allocated proportionally based on total usage in each time period, eg:

         PEAK     PART    OFFPEAK     TOTAL
  kWh    300      700     1000        2000 (for full month)
 ratio   0.15     0.35    0.5

  Then you take your baseline (from geography, calendar and H or B schedule) and multiply by the ratio to get the daily baseline for each time period

  So if the baseline for geo/cal/schedule is 10 kWh, then you would go into tier 2 for PEAK after 1.5kWh use during peak time each day

  This function will return the cost for a given day's usage tiered for baseline with the provided ratio
*/

exports.priceForRatePeriodAmountBaselineRatio = function(rate, period, amount, baseline, ratio)
{
    if(!rate.prices[period].end)
    {
        // Easy: no tiers here!
        return amount * rate.prices[period].rate;
    }

    // Figure out baseline amount in kWh per day
    const dailyBaseline = baseline[period.split(' ')[0]] * ratio;

    // Now we'll iterate through the tiers until we've consumed all the amount
    return _.reduce(rate.prices[period], (memo, tier) =>
    {
        if(amount <= memo.accumulated)
        {
            // We've run out amount, so ignore this tier
            return memo;
        }

        // (.end = 1.3, .rate = 12345)
        const thisTierkWh = tier.end * dailyBaseline - memo.accumulated;
        const amountLeft = amount - memo.accumulated;

        const amountFallingHere = _.min([thisTierkWh, amountLeft]);

        memo.accumulated += amountFallingHere;
        memo.cost += (tier.rate / 100000) * amountFallingHere;

        return memo;
    },
    { accumulated: 0, cost: 0 }).cost;
};
