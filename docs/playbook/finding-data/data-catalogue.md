---
title: Using the data catalogue
layout: playbook_js
tags: [playbook]
---

## What is a data catalogue?

A _data catalogue_ is a tool which provides an inventory of all data assets held within the data lake. It enables users to discover:

- what datasets are already in the data lake
- what fields and data types a dataset contains
- where to find the data within the lake
- who owns the data
- who uses the data

However, a data catalogue _isn't_:

- A data store or a data warehouse (e.g. London DataStore). The data is still stored within the lake, not the catalogue, so you won't be able to access or download the data directly from the catalogue.
- A way to search for specific data points. For example, you can search for datasets that contain a 'date of birth' field, but you cannot search a dataset for a specific date of birth. You'll need to get access to the data and query it from the lake or a BI tool for this.
- A way to access data without going through appropriate approval processes under GDPR. The catalogue will enable you to see datasets held by other services and who to request this from, but you will still need to complete a Privacy Impact Assessment and provide a legal basis for accessing and processing this data.

## How to use the data catalogue

We are currently implementing an open source tool, DataHub, as our data catalogue. This article will be updated as the catalogue is developed and tested with users.

### Browsing datasets

### Searching datasets

### Viewing metadata for a dataset

### Tagging

### Adding/amending descriptions

### Adding/amending owners

### Understanding column statistics
