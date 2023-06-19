# social-media-math

`social-media-math` is an npm package that provides a collection of mathematical formulas relevant to social media marketing and management. It aims to assist social media marketers and managers in calculating various metrics and making data-driven decisions.

## Installation

To use the `social-media-math` package in your Node.js project, you can install it using npm:

```
npm install social-media-math
```

## Usage

Once you have installed the package, you can import the formulas into your project and utilize them as follows:

```
const {
  engagementRate,
  reachPerPost,
  clickThroughRate,
  averageTimeSpentPerPost,
  followerGrowthRate,
  engagementToReachRatio,
  averageEngagementPerUser,
  viralityRatio,
  followerChurnRate,
  costPerClick,
  costPerMille,
  returnOnInvestment,
  customerAcquisitionCost,
  customerLifetimeValue,
  postEngagementRate,
  postReachRate,
  postConversionRate,
  postShareRate,
  postClickToConversionRate,
  postImpressionsPerUser,
  postEngagementPerUser,
  postViralityPerUser,
} = require('social-media-math');

// Use the formulas to calculate social media metrics
const likes = 500;
const comments = 100;
const followers = 10000;
const engagement = engagementRate(likes, comments, followers);
console.log(`Engagement rate: ${engagement}%`);

// Add more as desired
```

## Formulas

The social-media-math package provides the following formulas for social media marketing and management:

* `engagementRate(likes, comments, followers)`: Calculates the engagement rate as a percentage.
* `reachPerPost(followers, totalPosts, reach)`: Calculates the reach per post.
* `clickThroughRate(clicks, impressions)`: Calculates the click-through rate as a percentage.
* `averageTimeSpentPerPost(totalTime, totalPosts)`: Calculates the average time spent per post.
* `followerGrowthRate(initialFollowers, finalFollowers, durationInMonths)`: Calculates the follower growth rate as a percentage per month.
* `engagementToReachRatio(engagement, reach)`: Calculates the engagement-to-reach ratio as a percentage.
* `averageEngagementPerUser(engagement, followers)`: Calculates the average engagement per user.
* `viralityRatio(shares, impressions)`: Calculates the virality ratio as a percentage.
* `followerChurnRate(initialFollowers, lostFollowers, durationInMonths)`: Calculates the follower churn rate as a percentage per month.
* `costPerClick(cost, clicks)`: Calculates the cost per click.
* `costPerMille(cost, impressions)`: Calculates the cost per mille (CPM).
* `returnOnInvestment(revenue, cost)`: Calculates the return on investment (ROI) as a percentage.
* `customerAcquisitionCost(cost, customersAcquired)`: Calculates the customer acquisition cost (CAC).
* `customerLifetimeValue(revenue, averagePurchaseFrequency, customerLifespan)`: Calculates the customer lifetime value (CLV).
* `postEngagementRate(engagement, impressions)`: Calculates the post engagement rate as a percentage.
* `postReachRate(reach, followers)`: Calculates the post reach rate as a percentage.
* `postConversionRate(conversions, clicks)`: Calculates the post conversion rate as a percentage.
* `postShareRate(shares, reach)`: Calculates the post share rate as a percentage.
* `postClickToConversionRate(conversions, clicks)`: Calculates the post click-to-conversion rate as a percentage.
* `postImpressionsPerUser(impressions, followers)`: Calculates the post impressions per user.
* `postEngagementPerUser(engagement, followers)`: Calculates the post engagement per user.
* `postViralityPerUser(shares, followers)`: Calculates the post virality per user.