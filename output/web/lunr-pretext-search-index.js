var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-structure",
  "level": "1",
  "url": "section-structure.html",
  "type": "Section",
  "number": "1.1",
  "title": "Course Structure",
  "body": " Course Structure  How the course is structured.  "
},
{
  "id": "section-organization",
  "level": "1",
  "url": "section-organization.html",
  "type": "Section",
  "number": "1.2",
  "title": "Course Learning Outomes",
  "body": " Course Learning Outomes  This course is organized into learning outcomes, and each section of the notes (and each video) reflection one of the learning outcomes. There are three types of these: core learning outcomes (CLOs), stretch learning outcomes (SLOs) and holistic learning outcomes (HLOs). The main content of the course is organized by the CLOs and the SLOs: you will see each section of the course labelled by one of these. The HLOs are major ideas, themes and skills that run throughout the course but are not isolated to any one area. I'll try to point out the development of the HLOs over the whole course.  Here are the learning outcomes for the course. These are all stated with active verbs: a learning outcome is something that a student will be able to do, which can be demonstrated and assessed. You can preface all of these with A student completing this course should be able to .  Here are the 20 core learning outcomes.   Effectively use the vocabulary of a quantitative study and a data set. In that data set, distinguish between variables and cases. Classify types of variable in a data set.  Analyze and critique the design of a quantitative study, including discussion of variables, hypotheses, sampling, scope of inference, biases and counfounding variables.  Analyze ethical aspects of study design, data collection, data interpretation and publication of statistical results.  Construct and analyze frequency and contingency tables for categorical data, including discussion of potential hypothesis.  Construct and analyze various bar plots and pie charts as visualizations of categorical data.  Construct and analyze histograms for a single numeric variable, using statistical vocaulbary (skew, modality, outliers, etc) to describe the shape of the data.  Calculate and analyze measures of central tendency and spread to describe a single numeric variables and its historgram.  Construct and analyze scatterplots for two numeric variables, focusing on potential relationships and hypotheses about relationships.  Construct a linear regression for the relationship between two numeric variable. Interpret the coefficients of such a linear regression.  Use residuals, correlations, and to analyze the fit of a linear model.  State, construct and critique a null and alternative hypotheses for a research questions, including questions for simple, double or multiples variables and questions for both categorical and numeric variables. Determine what kind of statistical inference is necessary to test these hypotheses.  Describe the idea of randomness and probability as potential source for a distribution of data and the relationship of randomness to an alternative hypothesis for a research question.  Calculate and analyze a sampling distribution for a difference of two proportions. Using this sampling distribution, calculate and analyze -scores and -values.  Describe the properties of the normal distribution and how it is produced by random selection for a difference of proportions.  Calculate and analyze a confidence interval in a sampling distribution for difference of proporties.  Define and identify Type 1 and Type 2 errors in study design, using the language of hypothesis testing for a difference in proportions.  Conduct and interpret hypothesis tests and construct confidence intervals for a single proportion.  Conduct and interpret hypothesis tests for difference within several categorical variables, showing understanding and use of the distribution.  Conduct and interpret hypothesis tests and confidence intervals for a single mean.  Conduct and interpret hypothesis tests and confidence intervals for a difference in means.  Conduct and interpret hypothesis tests and confidence intervals for multiple means using ANOVA.  Conduct and interpret hypothesis tests and confidence intervals for the coefficient of a linear regression model.   Here are the 5 stretch learning outcomes.   Describe the basic principles and first mathematical constructions of the theory of probability.  Use probability formulas to construct random sampling distributions.  Use the language of areas under curves and the symbols of integral calculus to mathematically express percentiles and probabilities.  Use the mathematical formulation of a general normal distribution to calculate -score, percentiles and other aspects of a sampling distribution.  Describe the mathematical properties and use of t-distributions and distributions.   "
},
{
  "id": "section-vocabulary",
  "level": "1",
  "url": "section-vocabulary.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Vocabulary of Statistics",
  "body": " The Vocabulary of Statistics  Statistics is the mathematical study of making meaning out of data. Therefore, it's pretty appropriate that we start with understanding what data is. In this course, and in much of statistics, we will start with a data set. A data set is a specific kind of collection of information with a specific structure. It is the core of statistics: statistics is about understanding data sets.   Stroke Data Set   > patient  group  30 days  365 days    1  treatment  no event  no event    2  treatment  stroke  stoke    3  treatment  no event  no event    4  treatment  no event  no event    5  control  no event  no event     In a certain clinical trial, a study was done to understand whether stents help to prevent strokes. A stent is a small tube placed inside an artery, usually in and around the heart. They are often used to aid recovery after a heart attack, but ensuring blood flow through critial coronal arteries. However, there is some evidence that they may have other benefits as well, including possibly minimizing risk of a stroke.  The researchers designed an experiment. 451 patients whose were identified as at risk for stroke for randomly assigned to one of two groups, as it standard for a controlled trial. Patients in the control group received medical management medication, support, lifestyle changes and the like. Patients in the treatment group also received this same medical managment, but in addition were given a stent place in an important artery. Then, of course, data was collected on the outcomes for both groups, producing a dataset.  What is the data? For each pattient, two points of data were gathered: whether they had a stroke within 30 days of starting the experiment, and the same but withint 365 days. shows the first five patients, which of the two groups they were in, and whether or not they had strokes within the two time periods.  Based on this example, let me make the first important definition.   A variable is something that is measured in a data set. A case is an individual member of a data sets. A case will have one or more variable associated to it: the data gathered about that individual item or situation.   In the example, whether the patient had a stroke after 30 days is a variable. In this case the potential values for the variable are juse yes ans no . There is another variable for whether the partient had a stroke after 365 dats. A case in this example is an individual patient. Patient 2 is a case, as it patient 5.  In there is a spreadsheet-like setup. Cases are rows and variables are columns. This isn't always the setup; rows and columns can be switched, so be careful reading data sets and interpreting them.  A data set is just data, raw information. What does it mean? This is what the whole discipline of statistics is about. We analyze the data set and try to draw conclusions.  There are many, many ways to analyze data. Consider this new table.   Frequency Table for Stroke Data      30 Days    360 Days     > Group  Stroke  No Stroke  Stroke  No Stroke    Contol  13  214  28  199    Treatment  33  191  45  179    Total  46  405  73  378     In , I have counted up the totals for the variables of whether or not a stroke occured and I am grouping them by the group variable: control or treatment. I can try to make some observations and I immediately note that those with treatment actually had more instances. Whether or not this is something causal happening here, or whether this is just random change, is a question we get to later in the course. For now, this is just a good example of one way to try to analyze this data set and maybe draw some conclusions.  Now for some more vocabulary. I want to talk about the kinds of data in a data set. In particular, the kinds of variables, since variable are the raw measurements we are making in the data set. I'm going to work with another example to disucss types of variables.   US County Demographics   > County  State  Pop.  Pop. Change  Univ. Rate  Median Edu.    Autauga  Alabama  55,504  1.48  3.86%  some_college    Baldwin  Alabama  212,628  9.19  3.99%  some_college    Barbour  Alabama  25,270  -6.22  5.90%  hs_diploma    Bibb  Alabama  22,668  0.73  4.39%  hs_diploma      shows the first four cases of a data set set dealing with various demographic information for counties in the United States. The data set has six variables. What kind of variables are these? Let me give you the definitions.     A categorical variable is a variable whose values are any words in some category. In principle, any set of words can be a category, though usually there is some meaning tying the category togerher.  A nominal categorical variable is a categorical variable where the category is just a set of names without any implicit ordering.  An ordinal categorical categorical variable is a categorical variable where the category is a list of names with an instrinsic ordering to them.  A numeric variable is a variable where the values are numers instead of words. (In some places, the term is numerical . Both terms have common usage, so I've chosen to use the shorter term.)  A discrete numeric variable is a numeric variable where the numbers are distinct, with clear steps between them.  A continuous numeric variable is a numeric variable where the numbers can vary with arbitrary precision, allowing intermediate values without reservation.     In the example, then, let me classify the variables.  State name is a categorical variable, since its values are names, not numbers. I would also say that it is a nominal categorical variable. I could apply an order (say, alphabetical, by land area, or by population), but it's not really intrinsically ordered. It is a bunch of names of things.  Median education is a categorical variable as well, since its values are the names of various types of education. Here, I would argue that it is an ordinal categorical variable, since there is (at least in a limited sense) a defined and instrinsic order to tiers of education: some K-12 school; grade 12 graduate; some college or university; university graduate; post-graduate studies. This ordering is intrinsic since, outside of very strange exceptions, one tier of education will be finished before the next is achieved.  Population is a numeric variable, since its value is a number. Population is also a discrete variable: you can't have half a member of a popopulation. Fractions are not allowed and there is a full step between each number.  Unemployment rate is also a numeric variable, since its value is a number. This is a continuous numeric variable. Up to whatever precision you want to report, the unemployment rate can vary with arbitrary steps. You can have a increase, a increase, or even finer if you want to report it.    This is the starting vocabulary of the course. Statistics is about data sets and data sets contain cases and variables. Variables come in a variety of types. The more vocaulbary we build up, the better we will be able to describe the behaviour of data sets and to understand what truths they contain about the situations that they are measuring.  "
},
{
  "id": "table-stroke-data",
  "level": "2",
  "url": "section-vocabulary.html#table-stroke-data",
  "type": "Table",
  "number": "2.1.1",
  "title": "Stroke Data Set",
  "body": " Stroke Data Set   > patient  group  30 days  365 days    1  treatment  no event  no event    2  treatment  stroke  stoke    3  treatment  no event  no event    4  treatment  no event  no event    5  control  no event  no event    "
},
{
  "id": "section-vocabulary-8",
  "level": "2",
  "url": "section-vocabulary.html#section-vocabulary-8",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " A variable is something that is measured in a data set. A case is an individual member of a data sets. A case will have one or more variable associated to it: the data gathered about that individual item or situation.  "
},
{
  "id": "table-stroke-frequency",
  "level": "2",
  "url": "section-vocabulary.html#table-stroke-frequency",
  "type": "Table",
  "number": "2.1.3",
  "title": "Frequency Table for Stroke Data",
  "body": " Frequency Table for Stroke Data      30 Days    360 Days     > Group  Stroke  No Stroke  Stroke  No Stroke    Contol  13  214  28  199    Treatment  33  191  45  179    Total  46  405  73  378    "
},
{
  "id": "table-county-data",
  "level": "2",
  "url": "section-vocabulary.html#table-county-data",
  "type": "Table",
  "number": "2.1.4",
  "title": "US County Demographics",
  "body": " US County Demographics   > County  State  Pop.  Pop. Change  Univ. Rate  Median Edu.    Autauga  Alabama  55,504  1.48  3.86%  some_college    Baldwin  Alabama  212,628  9.19  3.99%  some_college    Barbour  Alabama  25,270  -6.22  5.90%  hs_diploma    Bibb  Alabama  22,668  0.73  4.39%  hs_diploma    "
},
{
  "id": "section-vocabulary-18",
  "level": "2",
  "url": "section-vocabulary.html#section-vocabulary-18",
  "type": "Definition",
  "number": "2.1.5",
  "title": "",
  "body": "   A categorical variable is a variable whose values are any words in some category. In principle, any set of words can be a category, though usually there is some meaning tying the category togerher.  A nominal categorical variable is a categorical variable where the category is just a set of names without any implicit ordering.  An ordinal categorical categorical variable is a categorical variable where the category is a list of names with an instrinsic ordering to them.  A numeric variable is a variable where the values are numers instead of words. (In some places, the term is numerical . Both terms have common usage, so I've chosen to use the shorter term.)  A discrete numeric variable is a numeric variable where the numbers are distinct, with clear steps between them.  A continuous numeric variable is a numeric variable where the numbers can vary with arbitrary precision, allowing intermediate values without reservation.    "
},
{
  "id": "section-study-design",
  "level": "1",
  "url": "section-study-design.html",
  "type": "Section",
  "number": "2.2",
  "title": "Sampling and Study Design",
  "body": " Sampling and Study Design   Populations and Samples  Statistics is about drawing conclusion from data. In , I defined a data set and some vocabulary associated to it. I want to draw conclusion from a data set and have those conclusion carry some meaning. In this course, we're going to do a lot of mathematics to analyze the data. But before the mathematics happens, we have to think about how the data was collected, how the study was designed, and all the various human components of data. This leads into study design and sampling. Let me get back into some vocabulary.    A population is all possible cases for a dataset in the world. It covers the entire scope of the study, whatever that situation is. A sample is the subset of the population for which data is gathered: it is the cases that are in the data set. It is always part of a population, but very often a small part of the population.    Consider an example. Say I am interesting in how much mercury is found in Atlantic swordfish. In a perfect world, I'd have the opportunity, time and resources to examine every last swordfish in the ocean. This would be studying the entire population: every last swordfish. Alas, this is impossible.  Since examing the population writ large is impossible, a study will instead try to examine a portion of the population: the sample. the samplee in this case is the count of how many fish are actually measured by the study.  So I study population by way of samples. I have yet more vocabulary to refer to information about population and samples.   A measurement that covers the entire population is called a parameter . Since studies almost never get to actually measure the population, parameters are almost always unknown. In contrast, a measurement of a sample, of all the cases actually in the study, is called a statistic . The goal, then, it to use the known statistic to make some reasonable conclusion about the unknown parameter.   Again in this example, say I want to know the length of swordfish. If I measured every swordfish in the ocean and took the average of those lengths, I would get a parameter: the average length of atlantic swordfish. Working with a sample, I get a statistic: the average length of the specific swordfish which happen to be in my sample.  The discipline is called statistics : is it the study of these statistics, these measurement of samples Research wants to discover something truth, something real, or at least something that is likely to be truth or real. If we can't study a whole population, and we almost always can't, we study a sample. We measure statistics. What we hope for are representative statistics : the statistics should be close to the parameter. What we observe of a piece of the population should be close to the whole population. This is a good statistic. The whole rest of this course will be about figuring out what a good statistics actually is and how to measure it.    Study Design  A study want to understand a population and one or more of the parameters of that population. It does this by collecting a sample and calculating a statistic. The method by which a sample is collected is called study design . Study design is the important non-mathematical part of statistics (and overlaps with many other aspects of research methods).  Study design can be good quality or poor quality. Not all samples are created equal: there are good samples and there are poor samples, even before any of the mathematics is calculated. In this section, I want to talk about study design: how to collect a good sample and understand sampling risks.  So what is a good sample? A good sample is, as I said before, representative : the sample statistics is likely to match-up reasonably well with the population parameter. There are two main factors that affect the quality of a sample.  The first is simply size. As the mathematics will show later in the course, the more cases in a sample, the more likely it is to be representative. This is hardly surprising: the more data you gather, the more likely you are to capture something real about the world. I'll quantify this effect later in the course, but for now, this is just a simple observation.  This means that studies with small sample sizes carry more uncertainty and risk of being incorrect. Such studies are not useless, they just require more care. This leads into a major theme of statistics: analysis of data is always about judgment. Statistics is going to use mathematics to give some probabilities about how much a statistic corresponds with a population parameter. Those probabilities lead to a judgment on whether the statistic is useful: significant will be the term we will eventually use. But it is never a simple black-and-white situation. Judgment is always involved.  This fact the ubiquity of judgment makes statistics a fascinating mix of the precision of mathematics and the ambiguity of human activity. Once you design a study, collect data and choose a method of statistical analysis, the mathematics will provide the same results every time. Mathematics is rigorous and consistent in this way. But everything else about the process involves human activity and human decisions, with all the fuzziness that implies.  The second factor that affect the quality of a sample needs quite a bit more discussion. This factor is randomness. A good samply is a truly random selection of members of the population. The opposite of randomessness is bias : a sample contains a bias is certain portions of the population are more or less likely to be included in the sample.  This is the single greatest challenge to study design. Removing bias from a sample is very difficult and the sources of bias in a sample are many and varied. Consider, as an example, a sample collected in a political poll. Ideally, the same is a truly random cross-section of the population. But, as examples, the following things can occur.  If the sample is conducted over the phone, it is biases to those who actualy answers call from unknown numbers. This is selecting a personaly, but likely also selecting a demographic.  If the sample is collected online, then it likely has a bias to those people who are online.  If the sample is collected in person, then it has a bias of where the sample is collected. Asking people in the streets will select those people who are likely to be outside on the street.  Assuing that participation is optional (which seems necessary), the sample selects for those who are willing to do a political survey. This might select for those who are more politically involved.    Due to the factors listed above, or other similar factors, it is difficult to ensure that your sample is really a cross-section of the population. Mostly likely, them method of sampling will appeal to a certain demographic more than others: older or younger people, men or women, native speakers or second-language speakers, citizens or non-citizens, certain ethnic or cultural groups, and so on.  Study design attempts to design a collection method that produces a sample with minimal bias. This is always a trade-off between quality and time or money. A really good political poll will use multiple modes of collection over multiples days and times of day. But such a poll is more costly and takes more time.  To critique a study, I want to look at its collection methods and consider what potential biases exist. A good statistical study will be aware of its own potential biases and discuss them in its analysis.  Before finishing this section, I want to give two more important definition about bias and study design.    A bias or other effect that creates a problem with the data in a study is caleld a confounding effect . This word, confounding , is the standard technical term in statistics even though many synonyms could be stated for this in regular language. It's useful to set such a standard term so that, when you read confouding in a statistical context, you know that it carries a technical meaning.  In particular, an unmeasured variable that has an effect on the data but does not form part of the data set is called a confounding variable .    Looking for counfounding variables is a big part of minimizing bias in study design. A researcher should always consider potential unmeasured variable and try to identify what might be confounding their data.  There are many ways to design studies to try to minimize bias, avoid confounding variables, and produce representative data. One of the most important and common methods of study design is covered in the next definition.    A controlled study is a study where the cases in the data are broken into two groups. One group, called the control group , is a default and the researchers take no action for this group. The second group, called the experimental group is the set of cases where the researches change something (administer a medication to be testing, introduce a chemical into the environment, etc). The study then focuses on the statistical differences between the control and the experimental group.  A controlled study is caleld a blind study if the researchers do now know which cases are the control cases and the experimental cases. This is done to reduce bias caused by the researches treating the two groups differently. A controlled study involving human cases is caleld a double blind study if the people undergoing the study, the cases, also don't know if they are in the control group of the experimental group. Again, this is done to reduce bias whereby a participant might act differently if they know which group they are in.      Mathematics and Judgment  I want to elabote on the theme I introduced in the previous section, since it is a major theme of the course and a major part of the identity of statistics. In short, statistics is fascinating combination of mathematics techniques and human judgment. The mathematical techniques (assuming we trust the mathematicians) are proven and reliable to calculate what they calculate. But around them, statistics is full of judgment. Here are the judgments we've covered so far.  When I have a data set, what mathematical tool do I choose to use?  How is my study design and what are its potential biases?  How many cases can I include in my study and how strong is the data based on this number?  What is the tradeoff between designing an excellent study with many cases and representative samples and the reality of what my resourcess will actually allow?  These are far from the only jdugments, and I will return to this theme throughout the course.  This issue of judgment fits into a larger theme: that of human psychology and statistics inference. It turns out that humans intuition is pretty terrible at statistical reasoning. We like narratives and our brains are very good are forming narratives based on very few pieces of information. Anecdotal evidence is very appealing and is widely used in human conversation. And for conversation, that's neither here or there. But as a way of producing reliable conclusions, it's a major risk. A good statistician needs training to resist the allure of one really good story and fall back to larger samples and good methods. It's not nearly as exciting, but much more likely to produce something close to the truth.  In addition to vocabulary and calculation, I hope this course builds habits of thinking. When you hear a remarkable story, I hope there is a little circuit in your brain that thinks: well, maybe this is just an exceptional case. If a certain government changes its tax rate (either up or down) and job losses follow, the political temptation is to generalize: obviously these new taxes (lower taxes or higher taxes, whichever it is) are bad for the economoy. I hope, after this course, there is a little piece of your mind that will always think: well, maybe this is an unusually case, an outlier, something in the sample that is not representative.   "
},
{
  "id": "subsection-samples-3",
  "level": "2",
  "url": "section-study-design.html#subsection-samples-3",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A population is all possible cases for a dataset in the world. It covers the entire scope of the study, whatever that situation is. A sample is the subset of the population for which data is gathered: it is the cases that are in the data set. It is always part of a population, but very often a small part of the population.   "
},
{
  "id": "subsection-samples-7",
  "level": "2",
  "url": "section-study-design.html#subsection-samples-7",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": " A measurement that covers the entire population is called a parameter . Since studies almost never get to actually measure the population, parameters are almost always unknown. In contrast, a measurement of a sample, of all the cases actually in the study, is called a statistic . The goal, then, it to use the known statistic to make some reasonable conclusion about the unknown parameter.  "
},
{
  "id": "subsection-study-design-8",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bias "
},
{
  "id": "subsection-study-design-14",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-14",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  A bias or other effect that creates a problem with the data in a study is caleld a confounding effect . This word, confounding , is the standard technical term in statistics even though many synonyms could be stated for this in regular language. It's useful to set such a standard term so that, when you read confouding in a statistical context, you know that it carries a technical meaning.  In particular, an unmeasured variable that has an effect on the data but does not form part of the data set is called a confounding variable .   "
},
{
  "id": "subsection-study-design-17",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-17",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  A controlled study is a study where the cases in the data are broken into two groups. One group, called the control group , is a default and the researchers take no action for this group. The second group, called the experimental group is the set of cases where the researches change something (administer a medication to be testing, introduce a chemical into the environment, etc). The study then focuses on the statistical differences between the control and the experimental group.  A controlled study is caleld a blind study if the researchers do now know which cases are the control cases and the experimental cases. This is done to reduce bias caused by the researches treating the two groups differently. A controlled study involving human cases is caleld a double blind study if the people undergoing the study, the cases, also don't know if they are in the control group of the experimental group. Again, this is done to reduce bias whereby a participant might act differently if they know which group they are in.   "
},
{
  "id": "section-study-ethics",
  "level": "1",
  "url": "section-study-ethics.html",
  "type": "Section",
  "number": "2.3",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-tables",
  "level": "1",
  "url": "section-tables.html",
  "type": "Section",
  "number": "3.1",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-bar-pie",
  "level": "1",
  "url": "section-bar-pie.html",
  "type": "Section",
  "number": "3.2",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-histograms",
  "level": "1",
  "url": "section-histograms.html",
  "type": "Section",
  "number": "3.3",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-central-tendencies",
  "level": "1",
  "url": "section-central-tendencies.html",
  "type": "Section",
  "number": "3.4",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-scatterplots",
  "level": "1",
  "url": "section-scatterplots.html",
  "type": "Section",
  "number": "3.5",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-linear-regression",
  "level": "1",
  "url": "section-linear-regression.html",
  "type": "Section",
  "number": "4.1",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-linear-analysis",
  "level": "1",
  "url": "section-linear-analysis.html",
  "type": "Section",
  "number": "4.2",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-hypotheses",
  "level": "1",
  "url": "section-hypotheses.html",
  "type": "Section",
  "number": "5.1",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-randomness",
  "level": "1",
  "url": "section-randomness.html",
  "type": "Section",
  "number": "5.2",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-probability-theory",
  "level": "1",
  "url": "section-probability-theory.html",
  "type": "Section",
  "number": "5.3",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-sampling-distributions",
  "level": "1",
  "url": "section-sampling-distributions.html",
  "type": "Section",
  "number": "5.4",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-normal-distributions",
  "level": "1",
  "url": "section-normal-distributions.html",
  "type": "Section",
  "number": "5.5",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-mahtmeatics-sampling-distributions",
  "level": "1",
  "url": "section-mahtmeatics-sampling-distributions.html",
  "type": "Section",
  "number": "5.6",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-slo3-areas-under-curves",
  "level": "1",
  "url": "section-slo3-areas-under-curves.html",
  "type": "Section",
  "number": "5.7",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-mathematics-normal-distributions",
  "level": "1",
  "url": "section-mathematics-normal-distributions.html",
  "type": "Section",
  "number": "5.8",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-confidence-intervals",
  "level": "1",
  "url": "section-confidence-intervals.html",
  "type": "Section",
  "number": "5.9",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-errors",
  "level": "1",
  "url": "section-errors.html",
  "type": "Section",
  "number": "5.10",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-single-proportion",
  "level": "1",
  "url": "section-ht-single-proportion.html",
  "type": "Section",
  "number": "6.1",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-chi-squared",
  "level": "1",
  "url": "section-ht-chi-squared.html",
  "type": "Section",
  "number": "6.2",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-mathematics-t-chi-squared",
  "level": "1",
  "url": "section-mathematics-t-chi-squared.html",
  "type": "Section",
  "number": "6.3",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-single-mean",
  "level": "1",
  "url": "section-ht-single-mean.html",
  "type": "Section",
  "number": "6.4",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-difference-means",
  "level": "1",
  "url": "section-ht-difference-means.html",
  "type": "Section",
  "number": "6.5",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-anova",
  "level": "1",
  "url": "section-ht-anova.html",
  "type": "Section",
  "number": "6.6",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "section-ht-linear",
  "level": "1",
  "url": "section-ht-linear.html",
  "type": "Section",
  "number": "6.7",
  "title": "Section Name",
  "body": " Section Name  Test  "
},
{
  "id": "chapter-glossary",
  "level": "1",
  "url": "chapter-glossary.html",
  "type": "Chapter",
  "number": "7",
  "title": "Glossary",
  "body": " Glossary   This is a glossary of terms in the course.     Inferential Statistics  text    Descriptive Statistics  text    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
