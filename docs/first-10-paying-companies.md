# How to Get Your First 10 Paying Companies

This playbook is for turning MapleDevs from a useful MVP into a real business with paying studios. The immediate goal is not to sell generic job listings. The goal is to sell results and visibility to Canadian game studios.

## Core Problem

Right now, companies may hesitate to pay because MapleDevs does not yet have enough traffic, trust, or distribution.

So the offer should not be positioned as:

- A paid job listing

It should be positioned as:

- Visibility to Canadian game talent
- Targeted reach for studios hiring in Canada
- Faster hiring support for niche game industry roles
- Homepage and email promotion

## Step 1: Build Minimum Credibility

Before outreach, the site needs to look active and legitimate.

Add clear trust signals near the top of the homepage:

- `100+ Canadian jobs aggregated`
- `Updated daily`
- `Built for Canadian game studios to reach local talent`

Add an employer call to action:

- `Hiring in Canada? Post your game job for free this week.`

Create a simple `Post a Job` page that explains who MapleDevs is for and lets studios submit roles.

Positioning line:

> MapleDevs is built for Canadian game studios to reach local game industry talent without being buried on generic job boards.

## Step 2: Offer Free Listings First

Do not start by charging studios immediately.

Start with this offer:

> I will post your job for free and promote it.

This helps MapleDevs:

- Build supply
- Build relationships
- Create proof
- Learn what studios care about
- Create inventory for future paid featured placements

## Step 3: Target the Right Studios

Do not start with the biggest AAA companies. They move slowly and usually have formal recruiting systems.

Start with:

- Indie studios
- Mid-size Canadian studios
- Hiring startups
- Remote studios hiring in Canada
- Studios with one to ten open roles

Search sources:

- `game studio Canada careers`
- LinkedIn job posts
- Studio websites
- Game industry directories
- Local game dev associations

Create a tracking spreadsheet with these columns:

- Studio Name
- Website
- Careers Page
- Location
- Hiring? Yes/No
- Open Role
- Contact Name
- Contact Email / LinkedIn
- Status
- Last Contacted
- Notes

Target metrics for the first pass:

- 100 studios found
- 30 actively hiring
- 20 good contacts identified

## Step 4: Outreach Message

Use a short, non-salesy message.

```text
Hey [Name] - I run MapleDevs, a job board focused only on Canadian game industry jobs.

I saw [Studio] is hiring for [Role]. I can post it for free and help get it in front of Canadian game devs.

If you're open to it, I'll also feature it on the homepage this week.

Want me to add it?
```

If no contact name is available:

```text
Hey - I run MapleDevs, a job board focused only on Canadian game industry jobs.

I saw your team is hiring for [Role]. I can post it for free and help get it in front of Canadian game devs.

If you're open to it, I'll also feature it on the homepage this week.

Want me to add it?
```

Track each studio with statuses:

- Not contacted
- Contacted
- Replied
- Approved free listing
- Posted
- Followed up
- Paid
- Not interested

## Step 5: Turn Free Listings Into Paid Placements

After a studio says yes:

1. Add the job.
2. Feature it on the homepage.
3. Send them the live link.
4. Track views or clicks if possible.
5. Follow up with a low-priced paid offer.

Send this after the job has been live:

```text
Hey [Name] - quick update.

Your role has been live on MapleDevs and has received [X views/clicks] so far.

I'm testing featured placements for studios that want more visibility: homepage priority + inclusion in the weekly Canadian game jobs email.

I'm offering the first few for $49 this week while I validate the model.

Want me to keep [Role] featured?
```

If traffic numbers are not available yet:

```text
Hey [Name] - quick update.

Your role is live on MapleDevs and I'm including it in this week's Canadian game jobs roundup.

I'm testing featured placements for studios that want more visibility: homepage priority + email inclusion.

I'm offering the first few for $49 this week while I validate the model.

Want me to keep [Role] featured?
```

## Simple Monetization System

Start with three tiers.

### Free Listing - $0

- Standard job listing
- Included in search results
- Reviewed manually
- Live for 30 days

Purpose: build supply and relationships.

### Featured Job - $49

- Top placement on homepage
- Featured badge
- Included in weekly Canadian game jobs email
- Live for 30 days

Purpose: first paid product.

### Hiring Boost - $149

- Everything in Featured Job
- Pinned near the top for 14 days
- Shared in a dedicated LinkedIn or community post
- Highlighted in one email issue

Purpose: higher-value option for studios that want more visibility.

Later, after traffic and proof improve, raise prices:

- Featured Job: $99-$149
- Hiring Boost: $249-$399
- Monthly Studio Package: $499+

## What MapleDevs Is Actually Selling

Do not sell only a job listing.

Sell:

- Visibility
- Targeted Canadian game talent
- Faster hiring
- Niche distribution
- A focused alternative to generic job boards

Strong positioning:

```text
Reach Canadian game talent without being buried on generic job boards.
```

## High-Impact Features to Build Immediately

### 1. Save Jobs

Purpose: give candidates a reason to return.

Simple implementation:

- Add a `Save` button to each job card
- Store saved job IDs in `localStorage`
- Create a `/saved` page or saved jobs section
- Show saved jobs from localStorage
- Add an empty state: `No saved jobs yet`

No account system needed at first.

### 2. Job Alerts Email Capture

Purpose: create owned distribution.

Simple implementation:

- Add email input
- Add role interest dropdown
- Add province dropdown
- Add remote checkbox
- Submit to a database, Airtable, Google Sheet, or email tool

CTA copy:

```text
Get Canadian game jobs in your inbox
```

Send a manual weekly roundup at first.

### 3. Featured Jobs System

Purpose: create the thing studios can pay for.

Add fields to the job model:

```text
isFeatured: boolean
featuredUntil: date
featuredTier: featured | boost
```

Homepage logic:

- Show active featured jobs first
- Then show regular jobs by date
- Add a `Featured` badge
- Add an employer CTA near the featured section

## Post a Job Page Draft

```text
Post a Game Job in Canada

Reach Canadian game developers, artists, designers, producers, QA testers, writers, and other game industry talent.

MapleDevs is a Canada-only job board built for studios hiring in the Canadian game industry.

For a limited time, standard job posts are free while we grow the network.

What You Get

- Standard listing on MapleDevs
- Reviewed before publishing
- Visible to candidates browsing Canadian game jobs
- Eligible for homepage featuring

Featured Placement

Want more visibility?

Featured jobs appear higher on the homepage and can be included in the MapleDevs weekly job roundup.

Featured placements are currently available from $49 while we validate the platform.

Submit a Job

- Company name
- Contact email
- Job title
- Job link
- Location
- Remote / Hybrid / Onsite
- Discipline
- Short note

Submit Job
```

Confirmation message:

```text
Thanks - your job was submitted.

I'll review it and follow up shortly if it fits MapleDevs.
```

## 7-Day Execution Plan

### Day 1: Make the Site Look Credible

- Add trust signals to homepage
- Add employer CTA
- Add visible job count
- Add `Updated daily`
- Make Canada-only positioning obvious

### Day 2: Build the Post a Job Page

- Add page copy
- Add form
- Send submissions to email or a simple backend
- Link it from homepage and navigation

### Day 3: Build Studio Target List

- Find 100 Canadian or Canada-hiring game studios
- Identify 30 that are actively hiring
- Find at least 20 direct contacts

### Day 4: Send First Outreach Batch

- Send 25 messages
- Track every response
- Do not mention paid listings yet

### Day 5: Add Free Listings and Create Proof

- Add approved roles
- Feature them on homepage
- Send studios the live links
- Start tracking views or clicks

### Day 6: Launch Basic Distribution

- Add email capture
- Create weekly job roundup format
- Start collecting candidate emails

### Day 7: Follow Up With Paid Offer

- Follow up with studios whose roles were posted
- Offer $49 featured placement
- Try to close the first 1-3 paying studios

## 7-Day Metrics

Track:

- Studios found: target 100
- Studios contacted: target 75
- Replies: target 10-20
- Free listings added: target 10-25
- Email subscribers: target 25-100
- Paid conversions: target 1-3

## Immediate Next Actions

Do these first:

1. Add credibility copy to the homepage.
2. Create the `Post a Job` page.
3. Add `Post a Job for Free` CTA.
4. Create the studio outreach spreadsheet.
5. Send 25 outreach messages.

The path is:

```text
free listings -> relationships -> featured placement -> first 10 paying studios
```
