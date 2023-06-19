// Function to calculate engagement rate
function engagementRate(likes, comments, followers) {
  return ((likes + comments) / followers) * 100;
}

// Function to calculate reach per post
function reachPerPost(followers, totalPosts, reach) {
  return reach / (followers * totalPosts);
}

// Function to calculate click-through rate
function clickThroughRate(clicks, impressions) {
  return (clicks / impressions) * 100;
}

// Function to calculate average time spent per post
function averageTimeSpentPerPost(totalTime, totalPosts) {
  return totalTime / totalPosts;
}

// Function to calculate follower growth rate
function followerGrowthRate(initialFollowers, finalFollowers, durationInMonths) {
  const growthRate = (finalFollowers - initialFollowers) / initialFollowers;
  return (growthRate / durationInMonths) * 100;
}

// Function to calculate engagement-to-reach ratio
function engagementToReachRatio(engagement, reach) {
  return (engagement / reach) * 100;
}

// Function to calculate average engagement per user
function averageEngagementPerUser(engagement, followers) {
  return engagement / followers;
}

// Function to calculate virality ratio
function viralityRatio(shares, impressions) {
  return (shares / impressions) * 100;
}

// Function to calculate follower churn rate
function followerChurnRate(initialFollowers, lostFollowers, durationInMonths) {
  const churnRate = lostFollowers / initialFollowers;
  return (churnRate / durationInMonths) * 100;
}

// Function to calculate cost per click (CPC)
function costPerClick(cost, clicks) {
  return cost / clicks;
}

// Function to calculate cost per mille (CPM)
function costPerMille(cost, impressions) {
  return (cost / impressions) * 1000;
}

// Function to calculate return on investment (ROI)
function returnOnInvestment(revenue, cost) {
  return ((revenue - cost) / cost) * 100;
}

// Function to calculate customer acquisition cost (CAC)
function customerAcquisitionCost(cost, customersAcquired) {
  return cost / customersAcquired;
}

// Function to calculate customer lifetime value (CLV)
function customerLifetimeValue(revenue, averagePurchaseFrequency, customerLifespan) {
  return revenue * averagePurchaseFrequency * customerLifespan;
}

// Function to calculate post engagement rate
function postEngagementRate(engagement, impressions) {
  return (engagement / impressions) * 100;
}

// Function to calculate post reach rate
function postReachRate(reach, followers) {
  return (reach / followers) * 100;
}

// Function to calculate post conversion rate
function postConversionRate(conversions, clicks) {
  return (conversions / clicks) * 100;
}

// Function to calculate post share rate
function postShareRate(shares, reach) {
  return (shares / reach) * 100;
}

// Function to calculate post click-to-conversion rate
function postClickToConversionRate(conversions, clicks) {
  return (conversions / clicks) * 100;
}

// Function to calculate post impressions per user
function postImpressionsPerUser(impressions, followers) {
  return impressions / followers;
}

// Function to calculate post engagement per user
function postEngagementPerUser(engagement, followers) {
  return engagement / followers;
}

// Function to calculate post virality per user
function postViralityPerUser(shares, followers) {
  return shares / followers;
}

// Export the functions as part of the npm package
module.exports = {
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
};
