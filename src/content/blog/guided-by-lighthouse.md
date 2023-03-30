---
title: "Guided by The Lighthouse: One-Tenth Faster"
description: "Test Blog"
pubDate: "Mar 31 2023"
heroImage: "/lighthouse.jpg"
---

Google's Lighthouse uses six main metrics to audit the performance of a web page: FCP (First Contentful Paint), SI (Speed Index), LCP (Largest Contentful Paint), TTI (Time to Interactive), TBT (Total Blocking Time) and CLS (Cumulative Layout Shift).

I won't be going through these terminologies as I am not yet acquainted with some of their definitions. Trying to achieve a perfect score by optimizing each separate metric is a naive approach. Another point to note is that all these metrics do not carry equal weightage for calculating the performance score.

## Scoring Calculator

At the time of writing, the Lighthouse v10 has the following distribution for the final score:
| Metric    | Weightage |
| --------- | --------- |
| FCP       | 10%       |
| SI        | 10%       |
| LCP       | 25%       |
| TBT       | 30%       |
| CLS       | 25%       |

In v8 and v9, TTI had 10% weightage but was removed in version 10 and was adjusted to CLS because TTI was affected by external factors too much. Quoting from the Chrome Developers' <a href="https://developer.chrome.com/blog/lighthouse-10-0/" target="_blank">blog</a>, 'The way it's defined makes it overly sensitive to outlier network requests and long tasks'. The change in version did not affect my website scores since my TTI and CLS scores remained at 100%.

I built my web pages using the Astro framework, which ships zero JS by default. This feature contributed to notable progress in the TTI and Contentful Paint scores. Through my experiences, CLS and TBT scores are relatively easier to improve than other metrics. CLS can be tricky for server-side rendered UIs but can be taken care of using placeholder or skeleton components. Initially, the FCP reports were poor and were somewhere around the range of 0.6ms. I followed the suggestions provided by Lighthouse to eliminate the render-blocking resources and fixed the FCP.

## Then There Were Two

![Best Setup](/best-setup.png)

SI and LCP were the only scores that weren't 100 at the time. My final score was mostly in the range of 97-99. Delegating most of the processing to the server would lower the SI but increase the LCP score. With Astro, I can choose components to render client-side and make the trade-off with LCP for better SI. However, this causes a lower overall score because of higher weightage on LCP.

The best setup I could find was an SI value of around 1000ms with a score between 95-97. LCP of 99 with a value hovering around 700ms. The overall score for this configuration was 99. To get 100 overall, it required an LCP value of sub 500ms. It wasn't possible because some dependencies needed to run on the client side.

We can interpret this weightage as follows:
1. If the server response is longer, the page should be ready and minimal contentful action should be done when served.
2. If any contentful action happens client side, the audit expects the initial server response to be significantly faster.

I managed to hack through by preloading the resources of client-side dependency on the server. It balanced the LCP (~550ms) and SI (~950ms) values enough to give me the confetti on the Lighthouse report tab.

![Hundred Overall](/hundred-overall.png)