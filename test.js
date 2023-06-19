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
} = require('./index');

// Test engagementRate formula
const likes = 500;
const comments = 100;
const followers = 10000;
const engagement = engagementRate(likes, comments, followers);
console.log(`Engagement rate: ${engagement}%`);

// Test reachPerPost formula
const totalPostsCount = 20;
const reach = 5000;
const reachPerPostValue = reachPerPost(followers, totalPostsCount, reach);
console.log(`Reach per post: ${reachPerPostValue}`);

// Test clickThroughRate formula
const clicks = 100;
const impressions = 10000;
const ctr = clickThroughRate(clicks, impressions);
console.log(`Click-through rate: ${ctr}%`);

// Test averageTimeSpentPerPost formula
const totalTime = 120; // in minutes
const totalPosts = 10;
const averageTimeSpent = averageTimeSpentPerPost(totalTime, totalPosts);
console.log(`Average time spent per post: ${averageTimeSpent} minutes`);

// Test followerGrowthRate formula
const initialFollowers = 10000;
const finalFollowers = 15000;
const durationInMonths = 6;
const growthRate = followerGrowthRate(initialFollowers, finalFollowers, durationInMonths);
console.log(`Follower growth rate: ${growthRate}% per month`);

// Test engagementToReachRatio formula
const engagementCount = 800;
const reachCount = 20000;
const engagementRatio = engagementToReachRatio(engagementCount, reachCount);
console.log(`Engagement-to-reach ratio: ${engagementRatio}%`);

// Test averageEngagementPerUser formula
const totalEngagement = 5000;
const totalFollowers = 2000;
const averageEngagement = averageEngagementPerUser(totalEngagement, totalFollowers);
console.log(`Average engagement per user: ${averageEngagement}`);

// Test viralityRatio formula
const sharesCount = 500;
const impressionsCount = 10000;
const virality = viralityRatio(sharesCount, impressionsCount);
console.log(`Virality ratio: ${virality}%`);

// Test followerChurnRate formula
const lostFollowersCount = 500;
const churnDurationInMonths = 12;
const churnRate = followerChurnRate(initialFollowers, lostFollowersCount, churnDurationInMonths);
console.log(`Follower churn rate: ${churnRate}% per month`);

// Test costPerClick formula
const adCost = 500; // in dollars
const adClicks = 100;
const costPerClickValue = costPerClick(adCost, adClicks);
console.log(`Cost per click: $${costPerClickValue}`);

// Test costPerMille formula
const adImpressions = 50000;
const costPerMilleValue = costPerMille(adCost, adImpressions);
console.log(`Cost per mille (CPM): $${costPerMilleValue}`);

// Test returnOnInvestment formula
const revenue = 2000; // in dollars
const cost = 1000; // in dollars
const roi = returnOnInvestment(revenue, cost);
console.log(`Return on Investment (ROI): ${roi}%`);

// Test customerAcquisitionCost formula
const customersAcquired = 50;
const cac = customerAcquisitionCost(cost, customersAcquired);
console.log(`Customer Acquisition Cost (CAC): $${cac}`);

// Test customerLifetimeValue formula
const averagePurchaseFrequency = 1; // per month
const customerLifespan = 24; // in months
const clv = customerLifetimeValue(revenue, averagePurchaseFrequency, customerLifespan);
console.log(`Customer Lifetime Value (CLV): $${clv}`);

// Test postEngagementRate formula
const postEngagement = 1000;
const postImpressions = 50000;
const postEngagementRateValue = postEngagementRate(postEngagement, postImpressions);
console.log(`Post Engagement Rate: ${postEngagementRateValue}%`);

// Test postReachRate formula
const postReach = 20000;
const postReachRateValue = postReachRate(postReach, totalFollowers);
console.log(`Post Reach Rate: ${postReachRateValue}%`);

// Test postConversionRate formula
const postConversions = 10;
const postClicks = 200;
const postConversionRateValue = postConversionRate(postConversions, postClicks);
console.log(`Post Conversion Rate: ${postConversionRateValue}%`);

// Test postShareRate formula
const postShares = 50;
const postShareRateValue = postShareRate(postShares, postReach);
console.log(`Post Share Rate: ${postShareRateValue}%`);

// Test postClickToConversionRate formula
const postClickToConversionRateValue = postClickToConversionRate(postConversions, postClicks);
console.log(`Post Click-to-Conversion Rate: ${postClickToConversionRateValue}%`);

// Test postImpressionsPerUser formula
const postImpressionsPerUserValue = postImpressionsPerUser(postImpressions, totalFollowers);
console.log(`Post Impressions per User: ${postImpressionsPerUserValue}`);

// Test postEngagementPerUser formula
const postEngagementPerUserValue = postEngagementPerUser(postEngagement, totalFollowers);
console.log(`Post Engagement per User: ${postEngagementPerUserValue}`);

// Test postViralityPerUser formula
const postVirality = 20;
const postViralityPerUserValue = postViralityPerUser(postVirality, totalFollowers);
console.log(`Post Virality per User: ${postViralityPerUserValue}`);
