---
title: "What is data science?"
date: "2020-06-05"
blog: false
---

# What is Data Science?

## 1. What do data scientists do?

Our goal as data scientists is to extract some sort of meaning from data. Generally, we are working on one of two tasks: predicting some output based on known inputs, or trying to visualize/understand some data. When we work on competitions ([Kaggle](https://www.kaggle.com/), [DrivenData](https://www.drivendata.org/)), we often do both.

### 1a. Predicting something:

When we work on competitions, the goal is to predict some output variable based on inputs that are given to us. In machine learning, we usually call the output variable the label, and the inputs are called features. There are (generally) two types of prediction tasks: classification, and regression.

Classification refers to making a categorical prediction, meaning our output will fall into some number of discrete categories. For example, maybe we are trying to determine whether something is garbage, recycling, or compost. In this case, we have three disjoint categories.

The other is regression. Regression means we are trying to predict some continuous variable. Maybe the price of a house, or the amount of rainfall (by inches) for a given month. These types of variables don’t just take on a discrete number of values, but rather a continuous value in a given range.

## 2. What does the workflow usually look like?

It’s important to understand what our general goal is, but equally as important to understand the tech stack behind our work. The general data science modeling workflow goes something like this:

- Figure out what we are trying to predict, and whether we are performing a classification or regression task.
- Look through our data.
- Choose a machine learning model.
- Make some predictions.
- Test how well our model is doing.
- Repeat 3-5 until we are satisfied with our results.

Step (2) is often called Exploratory Data Analysis, or EDA for short. This often involves using some visualization libraries like [`matplotlib`](https://matplotlib.org/) to better understand our data, and should not be overlooked.

## 3. How do I do this myself?

For manipulating our datasets, we usually use the Python library [`pandas`](https://pandas.pydata.org/). Essentially, we can usually think of numerical data as a spreadsheet or excel table, where each row is an observation, each column is a feature. Pandas allows us to easily and efficiently work with these tables (called `DataFrames`).

There are several libraries we commonly use to create machine learning models. For classical models, [Scikit-Learn](https://scikit-learn.org/stable/), provides quick model generation and also implements options for model testing and evaluation. [Tensorflow](https://www.tensorflow.org/) and [PyTorch](https://pytorch.org/) are usually used for deep learning models.

Finally, it is important to keep track of your files and where you are in your workflow, especially when working in a team. For this reason, we strongly recommend you learn `git`.
