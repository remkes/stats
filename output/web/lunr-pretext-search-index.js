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
  "body": " Course Structure  This course has an unconvenional structure. Please read carefully to understand what you need to do and how you are assessed.  The day-to-day pattern of this course consists of videos and in-class activities. For most lecture periods, there is a short viedo to watch before class. Then, there is an activity during class which will develop the ideas in the video. This is an active course: most of class will be spent doing the activities and I will be spending my time talking with students to help them through said activity.  The in-class activity will mostly be done using the statistical computing tool R . This is a powerful and widely-used piece of software that will be able to do all of the statistical tasks we need for the course. One early class will be about setting up R and making sure everyone is comfortable with using it. By making heavy use of R in the course, we can let the computer do all the number-crunching for us. There will be almost no by-hand calculations in this course.  That's the content of the course: videos and activities. Now let me talk about the assessment. This course is structured around 25 learning outcomes. You will be assessed directly on those outcomes and your final grade is determined entirely by how many of them you meet. They are all described in .  There will be several quizzes during the term, where you will have the ability to demonstrate several of the learning outcomes. If you miss something on a quiz, you will have two further opportunities. First, you will be able to schedule a mini-interview with me to explain a learning outcome. You have a certain number of these opportunities during the term. Second, you can re-try any missing outcomes on the final exam.  Lastly, there are assignments. They are graded on completion only: as long as you follow the instructions and submit a complete assignment, you will get credit. With this setup, the assignments are mostly used to give you feedback on your progress through the course. You must get at least 8 of the 11 assignments completed to pass the course.  "
},
{
  "id": "section-outcomes",
  "level": "1",
  "url": "section-outcomes.html",
  "type": "Section",
  "number": "1.2",
  "title": "Course Learning Outomes",
  "body": " Course Learning Outomes  This course is organized into learning outcomes, and each section of the notes (and each video) presents one of the learning outcomes. There are two types of these: core learning outcomes (CLOs) and stretch learning outcomes (SLOs). The stretch outcomes indicate something that is a bit more challenging that the rest of the course, usually due to digging a bit deeper into the mathematical structures behind statistics.  Here are the learning outcomes for the course. These are all stated with active verbs: a learning outcome is something that a student will be able to do, which can be demonstrated and assessed. You can preface all of these with A student completing this course should be able to .  Here are the 20 core learning outcomes.   Effectively use the vocabulary of a quantitative study and a data set. In that data set, distinguish between variables and cases. Classify types of variable in a data set.  Analyze and critique the design of a quantitative study, including discussion of variables, hypotheses, sampling, scope of inference, biases and counfounding variables.  Analyze ethical aspects of study design, data collection, data interpretation and publication of statistical results.  Construct and analyze frequency and contingency tables for categorical data, including discussion of potential hypotheses.  Construct and analyze various bar plots and pie charts as visualizations of categorical data.  Construct and analyze histograms for a single numeric variable, using statistical vocabulary (skew, modality, outliers, etc) to describe the shape of the data.  Calculate and analyze measures of central tendency and spread to describe a single numeric variable and its historgram.  Construct and analyze scatterplots for two numeric variables, focusing on potential relationships and hypotheses about relationships.  Construct a linear regression for the relationship between two numeric variables. Interpret the coefficients of such a linear regression.  Use residuals, correlations, and to analyze the fit of a linear regression model.  State, construct and critique null and alternative hypotheses for a research question, including questions for simple, double or multiples variables and questions for both categorical and numeric variables. Determine what kind of statistical inference is necessary to test these hypotheses.  Describe the idea of randomness and probability as potential source for a distribution of data and the relationship of randomness to an alternative hypothesis for a research question.  Calculate and analyze a sampling distribution for a difference of two proportions. Using this sampling distribution, calculate and analyze -scores and -values.  Describe the properties of the normal distribution and how it is produced by random selection for a difference of proportions.  Calculate and analyze a confidence interval in a sampling distribution for a difference of proporties.  Define and identify Type 1 and Type 2 errors in study design, using the language of hypothesis testing for a difference in proportions.  Conduct and interpret hypothesis tests and construct confidence intervals for a single proportion.  Conduct and interpret hypothesis tests for difference within several categorical variables, showing understanding and use of the distribution.  Conduct and interpret hypothesis tests and confidence intervals for a single mean.  Conduct and interpret hypothesis tests and confidence intervals for a difference in means.  Conduct and interpret hypothesis tests and confidence intervals for multiple means using ANOVA.  Conduct and interpret hypothesis tests and confidence intervals for the coefficients of a linear regression model.   Here are the 4 stretch learning outcomes.   Describe the basic principles and first mathematical constructions of the theory of probability.  Use the language of areas under curves and the symbols of integral calculus to mathematically express percentiles and probabilities.  Use the mathematical formulation of a normal distribution to calculate -score, percentiles and other aspects of a sampling distribution.  Describe the mathematical properties and uses of t-distributions and distributions.   "
},
{
  "id": "section-vocabulary",
  "level": "1",
  "url": "section-vocabulary.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Vocabulary of Statistics",
  "body": " The Vocabulary of Statistics  Statistics is the mathematical study of making meaning out of data. Therefore, it's pretty appropriate that we start with understanding what data is. In this course, and in much of statistics, we will start with a data set. A data set is a specific collection of information with a specific structure. It is the core of statistics: statistics is about understanding data sets.   Stroke Data Set   > patient  group  30 days  365 days    1  treatment  no event  no event    2  treatment  stroke  stoke    3  treatment  no event  no event    4  treatment  no event  no event    5  control  no event  no event     In a certain clinical trial, a study was done to understand whether stents help to prevent strokes. A stent is a small tube placed inside an artery, usually in and around the heart. They are often used to aid recovery after a heart attack, buy ensuring blood flow through critial coronal arteries. However, there is some evidence that they may have other benefits as well, including possibly minimizing risk of a stroke.  The researchers designed an experiment. 451 patients were identified who displayed high risk of a stroke. These parients were randomly assigned to one of two groups, as it standard for a controlled trial. Patients in the control group received medical management medication, support, lifestyle changes and the like. Patients in the treatment group also received this same medical managment, but in addition were given a stent placed in an important artery. Then, of course, data was collected on the outcomes for both groups, producing a dataset.  What is the data? For each pattient, two points of data were gathered: whether they had a stroke within 30 days of starting the experiment, and the same but withint 365 days. shows the first five patients, which of the two groups they were in, and whether or not they had strokes within the two time periods.  Based on this example, let me make the first important definition.   A variable is something that is measured in a data set. A case is an individual member of a data sets. A case will have one or more variables associated to it: the data gathered about that individual item or situation.   In the example, whether the patient had a stroke after 30 days is a variable. In this data set, the potential values for this variable are just yes ans no . There is another variable for whether the partient had a stroke after 365 dats. A case in this example is an individual patient. Patient 2 is a case, as is patient 5.  In there is a spreadsheet-like setup. Cases are rows and variables are columns. This isn't always the setup; rows and columns can be switched, so be careful reading data sets and interpreting them.  A data set is just data, raw information. What does it mean? This is what the whole discipline of statistics is about. We analyze the data set and try to draw conclusions.  There are many, many ways to analyze data. Consider this new table.   Frequency Table for Stroke Data      30 Days    360 Days     > Group  Stroke  No Stroke  Stroke  No Stroke    Contol  13  214  28  199    Treatment  33  191  45  179    Total  46  405  73  378     In , I have counted up the totals for the variables of whether or not a stroke occured and I am grouping them by the group variable: control or treatment. I can try to make some observations and I immediately note that those with treatment actually had more instances. Whether or not this is something causal happening here, or whether this is just random change, is a question we get to later in the course. For now, this is just a good example of one way to try to analyze this data set and maybe draw some conclusions.  Now for some more vocabulary. I want to talk about the kinds of data in a data set. In particular, the kinds of variables, since variables are the raw measurements we are making in the data set. I'm going to work with another example to disucss types of variables.   US County Demographics   > County  State  Pop.  Pop. Change  Univ. Rate  Median Edu.    Autauga  Alabama  55,504  1.48  3.86%  some_college    Baldwin  Alabama  212,628  9.19  3.99%  some_college    Barbour  Alabama  25,270  -6.22  5.90%  hs_diploma    Bibb  Alabama  22,668  0.73  4.39%  hs_diploma      shows the first four cases of a data set set dealing with various demographic information for counties in the United States. The data set has six variables. What kind of variables are these? Let me give you the definitions.     A categorical variable is a variable whose values are any words in some category. In principle, any set of words can be a category, though usually there is some meaning tying the category togerher.  A nominal categorical variable is a categorical variable where the category is just a set of names without any implicit ordering.  An ordinal categorical categorical variable is a categorical variable where the category is a list of names with an instrinsic ordering to them.  A numeric variable is a variable where the values are numbers instead of words. (In some places, the term is numerical . Both terms have common usage, so I've chosen to use the shorter term.)  A discrete numeric variable is a numeric variable where the numbers are distinct, with clear steps between them.  A continuous numeric variable is a numeric variable where the numbers can vary with arbitrary precision, allowing intermediate values without reservation.     In the example, then, let me classify the variables.  State name is a categorical variable, since its values are names, not numbers. I would also say that it is a nominal categorical variable. I could apply an order (say, alphabetical, by land area, or by population), but it's not really intrinsically ordered. It is a bunch of names of things.  Median education is a categorical variable as well, since its values are the names of various types of education. Here, I would argue that it is an ordinal categorical variable, since there is (at least in a limited sense) a defined and instrinsic order to tiers of education: some K-12 school; grade 12 graduate; some college or university; university graduate; post-graduate studies. This ordering is intrinsic since, outside of very strange exceptions, one tier of education will be finished before the next is achieved.  Population is a numeric variable, since its value is a number. Population is also a discrete variable: you can't have half a member of a popopulation. Fractions are not allowed and there is a full step between each number.  Unemployment rate is also a numeric variable, since its value is a number. This is a continuous numeric variable. Up to whatever precision you want to report, the unemployment rate can vary with arbitrary steps. You can have a increase, a increase, or even finer if you want to report it.    This is the starting vocabulary of the course. Statistics is about data sets and data sets contain cases and variables. Variables come in a variety of types. The more vocaulbary we build up, the better we will be able to describe the behaviour of data sets and to understand what truths they contain about the situations that they are measuring.  "
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
  "body": " A variable is something that is measured in a data set. A case is an individual member of a data sets. A case will have one or more variables associated to it: the data gathered about that individual item or situation.  "
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
  "body": "   A categorical variable is a variable whose values are any words in some category. In principle, any set of words can be a category, though usually there is some meaning tying the category togerher.  A nominal categorical variable is a categorical variable where the category is just a set of names without any implicit ordering.  An ordinal categorical categorical variable is a categorical variable where the category is a list of names with an instrinsic ordering to them.  A numeric variable is a variable where the values are numbers instead of words. (In some places, the term is numerical . Both terms have common usage, so I've chosen to use the shorter term.)  A discrete numeric variable is a numeric variable where the numbers are distinct, with clear steps between them.  A continuous numeric variable is a numeric variable where the numbers can vary with arbitrary precision, allowing intermediate values without reservation.    "
},
{
  "id": "section-study-design",
  "level": "1",
  "url": "section-study-design.html",
  "type": "Section",
  "number": "2.2",
  "title": "Sampling and Study Design",
  "body": " Sampling and Study Design   Populations and Samples  Statistics is about drawing conclusion from data. In this course, we're going to do a lot of mathematics to analyze the data. But before the mathematics happens, we have to think about how the data was collected, how the study was designed, and all the various human components of data. This leads into study design and sampling. Let me get back into some vocabulary.    A population is all possible cases for a dataset in the world. It covers the entire scope of the study, whatever that situation is. A sample is the subset of the population for which data is gathered: it is the cases that are in the data set. It is always part of a population, but very often a small part of the population.    Consider an example. Say I am interesting in how much mercury is found in Atlantic swordfish. In a perfect world, I'd have the opportunity, time and resources to examine every last swordfish in the ocean. This would be studying the entire population: every last swordfish. Alas, this is impossible.  Since examing the population as a whole is impossible, a study will instead try to examine a portion of the population: the sample. the sample in this case is the specific group of fish are actually measured by the study.  So I study populations by way of samples. I have yet more vocabulary to refer to information about population and samples.   A measurement that covers the entire population is called a parameter . Since studies almost never get to actually measure the population, parameters are almost always unknown. In contrast, a measurement of a sample, of all the cases actually in the study, is called a statistic . The goal, then, it to use the known statistic to make some reasonable conclusion about the unknown parameter.   Again in this example, say I want to know the length of swordfish. If I measured every swordfish in the ocean and took the average of those lengths, I would get a parameter: the average length of atlantic swordfish. Working with a sample, I get a statistic: the average length of the specific swordfish which happens to be in my sample.  The discipline is called statistics : is it the study of these statistics, these measurement of samples. Research wants to discover something true, something real, or at least something that is likely to be truth or real. If we can't study a whole population, and we almost always can't, we study a sample. We measure statistics. What we hope for are good statistics. We have a term for this.   A statistic is called a representative statistics if it is a reasonably close fit to the population parameter. Similarly, a statistic with a high probability of matching a paremeter is caleld significant .   We want the statistics to be close to the parameter parameter: we want representative statistics and significant statistics. The whole rest of this course will be about figuring out what a representative statistics actually is and how to measure it.    Study Design  A study wants to understand a population and one or more of the parameters of that population. It does this by collecting a sample and calculating a statistic. The method by which a sample is collected is called study design . Study design is the important non-mathematical part of statistics (and overlaps with many other aspects of research methods).  Study design can be good quality or poor quality. Not all samples are created equal: there are good samples and there are poor samples, even before any of the mathematics is calculated. In this section, I want to talk about study design: how to collect a good samples and understand sampling risks.  So what is a good sample? A good sample is, as I said before, representative : the sample statistics is likely to match-up reasonably well with the population parameter. There are two main factors that affect the quality of a sample.  The first is simply size. As the mathematics will show later in the course, the more cases in a sample, the more likely it is to be representative. This is hardly surprising: the more data you gather, the more likely you are to capture something real about the world. I'll quantify this effect later in the course, but for now, this is just an important observation backed up by intuition.  This fact implies that studies with small sample sizes carry more uncertainty and risk of being incorrect. Such studies are not useless, they just require more care. This leads into a major theme of statistics: analysis of data is always about judgment. Statistics is going to use mathematics to give some probabilities about how much a statistic corresponds with a population parameter. Those probabilities lead to a judgment on whether the statistic is useful: as mentioned above, significant will be the term we will use. But it is never a simple black-and-white situation. Judgment is always involved.  This fact the ubiquity of judgment makes statistics a fascinating mix of the precision of mathematics and the ambiguity of human activity. Once you design a study, collect data and choose a method of statistical analysis, the mathematics will provide the same results every time. Mathematics is rigorous and consistent in this way. But everything else about the process involves human activity and human decisions, with all the fuzziness that implies.  The second factor that effects the quality of a sample needs quite a bit more discussion. This factor is randomness. A good samply is a truly random selection of members of the population. There is a useful term here.   A sample which is not a purely random selection from the popluation is called a sample with bias or a biased sample . A sample contains a bias if certain portions of the population are more or less likely to be included in the sample.   This is the single greatest challenge to study design: removing bias from a sample is very difficult and the sources of bias in a sample are many and varied. Consider, as an example, a sample collected in a political poll. Ideally, the sample is a truly random cross-section of the population. But the following problems might possibly occur.  If the sample is conducted over the phone, it is biased to those who actualy answers call from unknown numbers. This is selecting a personality, but likely also selecting a demographic and possibly a political learning.  If the sample is collected online, then it likely has a bias to those people who are online and willing to spend time to answer online polls. Again, this is probably a special demographic and possibly a political leaning.  If the sample is collected in person, then it has a bias of where the sample is collected. Asking people in the streets will select those people who are likely to be outside on the street, for example.  Assuing that participation is optional (which seems necessary), the sample selects for those who are willing to do a political survey. This might select for those who are more politically involved, among other issues.    Due to the factors listed above, or other similar factors, it is difficult to ensure that your sample is really a cross-section of the population. Mostly likely, the method of sampling will appeal to a certain demographic more than others: older or younger people, men or women, native speakers or second-language speakers, citizens or non-citizens, certain ethnic or cultural groups, and so on.  Study design attempts to design a collection method that produces a sample with minimal bias. This is always a trade-off between quality and time or money. A really good political poll will use multiple modes of collection over multiples days and times of day. But such a poll is more costly and take more time.  To critique a study, I want to look at its collection methods and consider what potential biases exist. A good statistical study will be aware of its own potential biases and discuss them in its analysis.  Before finishing this section, I want to give two more important definition about bias and study design, introducing terms that are very common in the statistic literature.    A bias or other effect that creates a problem with the data in a study is caleld a confounding effect . This word, confounding , is the standard technical term in statistics even though many synonyms could be stated for this in regular language. It's useful to set such a standard term so that, when you read confouding in a statistical context, you know that it carries a technical meaning.  In particular, an unmeasured variable that has an effect on the data but does not form part of the data set is called a confounding variable .    Looking for counfounding variables is a big part of minimizing bias in study design. A demographic, as in the examples above, can be such a compounding variable. A researcher should always consider potential unmeasured variable and try to identify what might be confounding their data.  There are many ways to design studies to try to minimize bias, avoid confounding variables, and produce representative data. One of the most important and common methods of study design is covered in the next definition.    A controlled study is a study where the cases in the data are broken into two groups. One group, called the control group , is a default and the researchers take no action for this group. The second group, called the experimental group is the set of cases where the researchers change something (administer a medication that they want to test, introduce a chemical into the environment, etc). The study then focuses on the statistical differences between the control and the experimental group.  A controlled study is caleld a blind study if the researchers do now know which cases are the control cases and the experimental cases. This is done to reduce bias caused by the researches treating the two groups differently. A controlled study involving human cases is caleld a double blind study if the people undergoing the study, the cases, also don't know if they are in the control group of the experimental group. Again, this is done to reduce bias whereby a participant might act differently if they know which group they are in.      Mathematics and Judgment  I want to elabote on the theme I introduced in the previous section, since it is a major theme of the course and a major part of the identity of statistics. In short, statistics is fascinating combination of mathematics techniques and human judgment. The mathematical techniques (assuming we trust the mathematicians) are proven and reliable to calculate what they calculate. But around them, statistics is full of judgment. Here are the judgments we've covered so far.  When I have a data set, what mathematical tools do I choose to use?  How is my study designed and what are its potential biases and confounding variables?  How many cases can I include in my study and how strong is the data based on this number?  What is the cost tradeoff between designing an excellent study with many cases and representative samples and the reality of what my resourcess will actually allow?  These are far from the only judgments, of course.I will return to this theme throughout the course, developing more understanding of how judgment runs through the discipline.  This issue of judgment fits into a larger theme: that of human psychology and statistics inference. It turns out that humans intuition is pretty terrible at statistical reasoning. We like narratives and our brains are very good are forming narratives based on very few pieces of information. Anecdotal evidence is very appealing and is widely used in human conversation. And for conversation, that's often not a problem. But as a way of producing reliable conclusions, it's a major risk. A good statistician needs training to resist the allure of one really good story and fall back to larger samples and good methods. It's not nearly as exciting, but much more likely to produce something close to the truth.  In addition to vocabulary and calculation, I hope this course builds habits of thinking. When you hear a remarkable story, I hope there is a little circuit in your brain that thinks: well, maybe this is just an exceptional case. If a certain government changes its tax rate (either up or down) and job losses follow, the political temptation is to generalize: obviously these new taxes (lower taxes or higher taxes, whichever it is) are bad for the economoy. I hope, after this course, there is a little piece of your mind that will always think: well, maybe this is an unusually case, an outlier, something in the sample that is not representative. Good statistics breeds a healthy skepticism about quantitative conclusions whethever you may find them.   "
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
  "id": "subsection-samples-10",
  "level": "2",
  "url": "section-study-design.html#subsection-samples-10",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": " A statistic is called a representative statistics if it is a reasonably close fit to the population parameter. Similarly, a statistic with a high probability of matching a paremeter is caleld significant .  "
},
{
  "id": "subsection-study-design-9",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-9",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": " A sample which is not a purely random selection from the popluation is called a sample with bias or a biased sample . A sample contains a bias if certain portions of the population are more or less likely to be included in the sample.  "
},
{
  "id": "subsection-study-design-15",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-15",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  A bias or other effect that creates a problem with the data in a study is caleld a confounding effect . This word, confounding , is the standard technical term in statistics even though many synonyms could be stated for this in regular language. It's useful to set such a standard term so that, when you read confouding in a statistical context, you know that it carries a technical meaning.  In particular, an unmeasured variable that has an effect on the data but does not form part of the data set is called a confounding variable .   "
},
{
  "id": "subsection-study-design-18",
  "level": "2",
  "url": "section-study-design.html#subsection-study-design-18",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": "  A controlled study is a study where the cases in the data are broken into two groups. One group, called the control group , is a default and the researchers take no action for this group. The second group, called the experimental group is the set of cases where the researchers change something (administer a medication that they want to test, introduce a chemical into the environment, etc). The study then focuses on the statistical differences between the control and the experimental group.  A controlled study is caleld a blind study if the researchers do now know which cases are the control cases and the experimental cases. This is done to reduce bias caused by the researches treating the two groups differently. A controlled study involving human cases is caleld a double blind study if the people undergoing the study, the cases, also don't know if they are in the control group of the experimental group. Again, this is done to reduce bias whereby a participant might act differently if they know which group they are in.   "
},
{
  "id": "subsection-math-and-judgment-3",
  "level": "2",
  "url": "section-study-design.html#subsection-math-and-judgment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Anecdotal evidence "
},
{
  "id": "section-study-ethics",
  "level": "1",
  "url": "section-study-ethics.html",
  "type": "Section",
  "number": "2.3",
  "title": "Ethics in Statistics",
  "body": " Ethics in Statistics   Public and Professional Ethics in Statistics  In the previous section, I talked about how statistics is a combination of mathematical technique and human judgment. Both mathematical skill and careful judgment can be exercised well or exercised poorly. In particularly, both can be used ethically or non-ethically. In this section, before getting into the technical discipline, I want to talk about the ethical considerations of statistics.  Statistics is a discipline of information: data sets and what inferences can be drawn from them. As such, its ethics are the ethics of information: how is the information gathered, how it is processed, how it is communicated and what is it used for.  Moreover, statistics is a pretty big business: many researchers, governments, pundits, pollsters, advertisers, and companies all need good statistical information and are willing to pay statisticians to produce that information. As a big business, its ethics are the subject of considerable deliberation and debate. The ethics of statistics are culturally important and have a substantial impact on popular knowledge, politics, consumer behaviour, and so on. Knowing this, where do we start?  Like all ethics, we have to start with a perspective, a worldview. We need some vision of the purpose of human culture and the role of information to that culture. We need some basic principles to start from. Your own ethical conclusions will, of course, be based on your own worldview and beliefs about how human culture and society should be structured. But statistics is a public activity, so the ethics of statistics are the subject of public discourse. Public discourse is always tricky because it relies on the fragile and ever-changing public consensus of the goals and purposes of human society.  I want to analyze two instances of this public understanding statistical ethics. The point of this analysis is to see what public consensus exists about the use and methods of statistics and what principles and worldviews inform that consensus.  First, I'll look to the Statistical Society of Canada (SSC). Professional societies are a good place to look for the common understanding, stated in public and secular terms, of the purposes of a professional. The SSC publishes a Code of Ethical Statistical Practice. This is intended to be a guide for its members who are, for the most part, professional statisticians.  This Code of Ethical Statistical Practice starts with four principles.  Responsibility to society.  Responsibility to employers and clients.  Responsibility to other statistical practitioners.  Professionalism.  The Code obviously goes on to provide much more detail based on these principles. Even knowing that, though, I am struck by how vague these principles are: responsibility and professionalism are very general terms. There is some sense of the common good here in the principle of responsibility to society , but that common good is nebulous. What are statisticians responsible to society for? Producing truth? Acting transparently? Something else? Moreover, what vision of society do these principles envision?  However, I am also struck on how useful the term responsibility is. I like the idea that statisticians are bound by various responsibilities and that ethics can be framed in terms of those responsibilities. It does however lead to one major question (which I'll return to later): which of these responsibilities takes priority over the others if they are in conflict?  First, though, an interesting contrast to these are the principles published by the National Science and Engineering Research Council (NSERC), Canada's major federal government research funder for the natural sciences. Here are the principles that underpin their discussion of ethics in statistics (what they call data ethics ).  Benefits for Canadians.  Fairness and Do No Harm.  Quality  Transparency and Accountability  Trust and Sustainability  Privacy and Security.  Where there is some of the same general language here ( benefit and quality are very generic terms), there is a lot more detail here.  NSERC's principles are coming from a governmental authority instead of a professional organization. That does make a difference for their description of ethical principles. It makes sense that, for exampoe, transparency and accountability show up, since the government need to be transparent and accountable for how it spends the taxes it gathers from its citizenry.  Where there is more detail here, I still wouldn't say that these principles are clearly rooted in a vision of what flourishing society looks like: the word benefit is doing some heavy lifting here. The same question of priority can also be asked here.  One of the main ideas that runs through the King's common curriculum is how our basic beliefs (worldviews, faith commitments, assumptions) inform how we act and behave in the world. I think the analysis of these ethical principles are a really good example. The generality of these priciples reflects, I believe, a hesitance to be more specific about the secular consensus of a good society . For our own investigation of ethical use of statistics, I would encourage you to connect any ethical discussion to your own worldview, based on your own vision of what constiutues a flourishing society.  To end this section, consider a few questions that might arise in the practice statistics.  If a statistician is responsible to various parties, which takes precedence?  How do you report a result that the opposite of what your research group is hoping for?  If you uncover something that is statistically proven to be dangerous in some what, what responsibility do you have to make that information public? How does this differ if you are working with public or private resources?  Who decides exactly what research question will inform your study design? Who sets the scope and limits of the study?  How do you report data that really doesn't show any clear conclusions, particularly when a lot of resources have been contributed to the study?  Who will make use of your data and for what purposes? How much does this depend on who funds the research?  Who decides what mathematical techniques will be used to analyze the statistics and what goals are reflected by that choice?  All of these questions can be answered, but the answers will always depend on the ethical principles you start with and the worldview those principles arise from. I would argue that both NSERC and SSC's principles need a fair bit of development and possibly extra assumptions before you get to clear answers to any of these questions.    Data Collection and Management  The previous section was quite general. I want to move into more specific issue on how to conduct a research study. I'm leaving aside questions of setup and motivation (why ask or fund a specific research study, whether and how to make results public, etc.) Instead, let's talk about how to manage data and data collection.  Unlike the more nebulous statements about benefit or responsibility to society, there are very specific and detailed guidelines for data. I'm just going to give a summary of the main points here; any of you who do a research methods course in your specific discipline will dig deeply into the details.  Data collection from human subjects must receive informed consent. When you ask a person to participate in a study and provide some data about themselves, you need to let them know what your study is for and how their data will be used. The subjects have to explicitly consent to participate, having been so informed.  Data about human subject must be kept confidential. Any public dissemination of a dataset must be very careful to remove markers from the data that could be used to identify a subject. This includes obvious steps like not publishing names or addresses, but there are also subtleties here. If the data set is very specific (a medical trial of people with a rare disease), then even age and gender might be enough to identify a particular subject, so care must be taken.  Data collection that uses animal subjects has a whole collection of its own policies. Some amount of harm to animals is permitted in a study, but it needs to be justified in terms of human benefit (for example, surgery on medical test animals to develop a new benefitial surgery method that could be used on human in the future). Animals need to be kept in humane conditions and treated well in all circumstances other than the specific actions relevant to the study.  The storage of data must be secure, whether physically or digitally. The access to data must be manage so that only responsible researchers can see any confidential information.    Any one who conducts a research study, particularly involving humans or animals, needs to live up to these expectations. Studies that do not do so are ethically compromised.  It might seem that this is pretty straightforward, but there are tensions here. These tensions are manifold, but let me mention two here. First, informed consent can be in tension with the goals and designs of the research. Many psychology studies want to study something about human behaviour without the subject being aware of what specific piece of their behaviour is under scrutiny. This makes sense, since humans behave differently when they know they are being evaluated on some metric. To get natural behaviour, it may be necessary to limit the description of the study in the process of informed consent. But if you don't tell the subject what the study is actualy about, how is that actually informed ? The discpline of psychology wrestles with this and its research methods and practices include detail discussion of how manage this tension.  A more general and pragmatic tension coems from the fact that good data management and storage takes resources of time and money. Most research studies struggle with resources and funding, so the temptation always exists to spend the resources on the actual research, leaving too few resources for good management of data. It's easy to just say that all studies must have good data management, but much tricker to actually assign the resources to ensure that good data managements.    Statistics and Truth  I've talked about the general responsibility of statistics to human society and the details of data management. I want to end this section with a discussion of how statistics deals with truth, as an ethical consideration.  The ethical principle here is pretty simple: statistics should be used to produce truth, not falsehood. There's not much arguing here the whole point of the discpline is to try to extract something true out of the complexity of a data set. But even as simple as this principle is, there is a lot to talk about there.  A lot of research has goals other than just the discovery of truth. A publication conducting a political poll may have an ideological leaning and want the poll to reflect that leaning. A corporation running a study may want evidence that supports the further use of a product that they have spend time and money developing. A scientific researcher leading a study mostly likely has biases and intuitions about what ought to be true and may want the results of their study to fit those biases and intuitions. Many other motivations could be listed, but they all present temptations to undermine the goal of truth.  In , I spoke about biases and confounding variables. A well designed study avoides biased data and tries to be aware of any counfounding variables. This is an ethical responsibility: a statistician cannot be professional or responsibly without doing this work. Much like good data management, there is always a tension here with time, effort and resources. Moreover, paying attention to biases and being aware of confounding variable makes you less certain of your outcome. Most research work hopes for fairly certain outcomes. Having the dilligence to provide caveats and cautions about your outcome, saying that there are possibilities that might make it less certain than it seems, is precisely opposite the natural impulse when presenting work. It takes dilligence, honesty and effort.  Finally, there is the ever present issue of choosing what mathematics to do. Here is an important truth in mathematics, not just related to statistics: mathematics gives you a bunch of reliable problem-solving tools, but it never tells you which ones you should use. It's up to you to know which tools are appropriate. Even more so, mathematics doesn't tell you if you are actually asking the right questions. It's up to you to choose your questions carefully.  This problem is felt heavily in statistics, where many different statistical methods are available to analyze a dataset. I'll try to demonstrate this throughout the course. The terms in the following list probably don't make sense yet, but these are all questions that need to be asked, questions about what mathematics you actually need to do with your data set.  How do you decide which visualization of data to use?  How to you determine a null hypothesis?  What threshold of statistical significance do you use?  What threshold of confidence do you use for a confidence interval?  What level of correlation or R^2 value justifies a linear regression?  Which variables do you assume to be explanatory?    How does a statistician make these choices? The ethical principles of this section states that the point of statistics is the pursuit of truth. A statistician should choose whatever methods lead to truthful outcomes. This is one of the most common pitfall in statistics: it is far to easy to make choice of mathematical methods that seem to support some desired outcome instead of the actual truth of the matter. It can be quite easy, unfortunately, to lie with statistics.  And, at the end, this brings us back to judgment and the goals of the course. I want you to understand several important statistical methods. But even more, I want you to understand what they are used for, when they should be use and when they should be avoided. I want you to understand how the details of the use of statistics involve various judgments, and that those judgments can be used to elucidate or to mislead. Finally, I want you to understand, at the end of the course, that this is an ethical consideration and that statistics only functions as a discipline of truth if pursued carefully and dilligently, focused on the truth over whatever other, more preferred, outcomes might exist.    The Myth of a Neutral Tool  Finally, I want to mention one more idea about the use of mathematics. There is a public conception that mathematics is a neutral tooll. (This conception holds in many situation where tools, paritcularly pieces of technology, are considered neutral in and of themselves and ethics is limited to the human decisions regarding their use). I want to challenge this idea. I claim that there is no such thing as a neutral tool.  Every tool imposes some reality on the situation in which the tool is used. The idea that you have a blank slate from which to choose tools is naive. Mathematics is no different. Let me give you two arguments here.   First, it is false that people chose their tools from a pure empty blank slate. People are drawn to their own expertise: they want to use what they know. Ask an economist for a solution and they will propose an economic solution. As a sociologist, and they will propose a sociological solution. Ask a mathematician, and they will propose a mathematical solution. We see the world through the lenses of our skills and education, and we want to use the tools we understand. Expertise itself is a bias when viewing the world.  Similarly, solution methods end up defining problems. If you start to think mathematically, you will end up stating problems that can be approached mathematically. You will think quantitatively, logically, analytically. However, this might not actually be the right approach. Maybe the problems are really psychological or political problems, and a mathematical approach is misguided from the start. Because mathematical methods only solve mathematical problems, the use of those methods necessarily limits the very idea of what the problem might be. Even more than just choosing a tool: simple understanding what a problem is asking is already dependent and affect by the tools you have at your disposal.   I could say a lot more on this theme, but I want to leave it here as just an introduction of an idea. Statistics, like any technique, necessarily imposes assumptions and conventions on the scope and nature of any problem. This is far from neutral. Our judgement and worldview are always involved in the use of statistics, at a very fundamental level.   "
},
{
  "id": "section-tables",
  "level": "1",
  "url": "section-tables.html",
  "type": "Section",
  "number": "3.1",
  "title": "Visualizing Data: Tables",
  "body": " Visualizing Data: Tables   Two Types of Statistics  Statistics can be roughly separated into two subdisciplines. Let me give you the definition.     Descriptive statistics is the art of displaying or summarizing a data set. It tries to show the data in a concise and readable way. It involves various ways to package the data and those methods may be quite complicated. But, even so, it is pretty direct: it tries to display the data as it is.   Inferential statistics is a set of techniques that try to draw new information out of a data set. Instead of just displaying or summarizing, these techniques try to understand a deeper, less direct meaing present in the data. This starts with a hypothesis : often a mathematical statement about some relationship between the variables. Then the hypothesis is tested . Must of interenfial statistics is developing reliable hypothesis tests.  There is some subtlety in the distinction between descriptive and inferential statistics. Displaying and summarizing do always involve some choice about what meaning to display, and hypotheses can be implicit in a descriptive presentation. But the distinction is nonetheless very useful.    In this course, we will devote seveal outcomes to descriptive statistics, including the current outcomes. Then we will move to inferential statistics for the second half of the course.    Counting Catgeorical Variables  I want to start this section on descriptive statistics by looking at categorical variables. In a categorical variable, there are, obviously, categories. It's natural to want to know how many cases are in each category. To demonstrate this, I'll use the same data set from . From that data, I can look at the 30-Day Event variable. This is a categorical variable with two category: stroke or no event , indicating for each case whether or not a stroke occured within 30 days of the start of the trial. I can count up the totals for this variable: how many cases are in each category. The result is this table.   Frequency Table for 30-Day Event Variable    Category  Count    No Event  405    Stroke  45    Total  451       A table which displays the counts of the categories of a categorical variable is called a frequency table .    A frequency table is the first of several kind of descriptive statstics that I will define over the next few sections. It does something pretty obvious: count up the totals in the categories of a categorical variable. But it is still great to have such a construction and a name for it. It is displaying something very useful about the data.  Often frequency tables are presented as percentages instead of raw counts. In many cases, we care more about what percentage of cases fall into each category than the raw number, so this also makes sense as way to see the data. Here is the same example table but now presented in percentages.   Frequency Table for 30-Day Event Variable with Percentages    Category  Count    No Event  89.8%    Stroke  10.2%    Total  100%     The percentages are just the count divided by the total number of cases. The total at the end, of course, should be all the cases: 100%. Thoughout this course, and throughout statistics, the word proportions is roughly synonymous with perdcentages , so this can also be called a frequency table of proportions.  A table can also be used to look at the interaction of several categorical variables. Instead of just a count of one variable and its categories, I can ask for a count of which cases fall into two specific categories in two different variables. Consider, again, the test data from this and previous sections. This data is from a controlled study, so there is a control group and a treatment group. What the study wants to actually know is the difference between those groups regarding strokes. I can make the following table.   Contingency Table for Stroke Data     Stroke  No Stroke  Total    Contol  13  214  227    Treatment  33  191  224    Total  46  405  451       A contingency table is a table which shows the counts of cases that call into categories from two different categorical variables. One set of categories is listed veritcally and the other is listed horizontally, with the entries counting all cases that match both the vertical and horizontal categories.    The example shows a contingency table. There are two variables: the group and the 30-day event or non-event. Each cell is an interaction of these two variables. There were 13 cases in the control group which had a stroke within 30 days. This is a great visauzliations of the data, since it points to the very point of the study: the researchers want to know the difference in the rate of strokes between the control group and the treatment groups. A contingency table can show this difference. It is more subtle than a frequency table, since it shows interaction between variables instead of just a count for a single variable.  As with a frequency table, I can convert a contingency talbe to percentages in this table. Such a table is still called a contingency table.   Contingency Table for Stroke Data - Percentages     Stroke  No Stroke  Total    Contol  5.7%  94.3%  100%    Treatment  14.7%  85.3%  100%    Total  10.2%  89.8%  100%     This percentage display is pretty valuable for interpretation, since the control and treament groups might be of difference size. Raw numbers might not be the best comparison, but percentages may be more honest. How are these percentages calculated? They are a percentage of the total for each category, to 5.7 percent is 13 divided by 227 and 14.7 percent is 33 divided by 224. That's the correct ratio: what percentage of this group category fall under this 30-day stroke\/no storke category.  This is descriptive statistics. We are summarizing the data. 5.7% of the control group had a stroke within 30 day, and 14.7% of the treatment group. This study is looking poor for the efficay of stents in helping prevent strokes. That's a reasonable conclusion from this display of data.  This is, however, where descriptive statistics ends. This table, in the previous paragraph, leads to a hypotheses: that the data shows that stents are actually counter-productive and increase the risk of strokes. Hypotheses are the domain is inferential statistics. Whether or not the data actually supports this data remains to be seen. You might argue that the descriptive table here is enough: it's clear that the stents were worse for stroke preventions. That's true about the sample, sure. But a hypothesis for inferential statistics is about the population, not the sample. And what the data says about the popluation is not so easy to conclude.   "
},
{
  "id": "subsection-two-types-3",
  "level": "2",
  "url": "section-tables.html#subsection-two-types-3",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "   Descriptive statistics is the art of displaying or summarizing a data set. It tries to show the data in a concise and readable way. It involves various ways to package the data and those methods may be quite complicated. But, even so, it is pretty direct: it tries to display the data as it is.   Inferential statistics is a set of techniques that try to draw new information out of a data set. Instead of just displaying or summarizing, these techniques try to understand a deeper, less direct meaing present in the data. This starts with a hypothesis : often a mathematical statement about some relationship between the variables. Then the hypothesis is tested . Must of interenfial statistics is developing reliable hypothesis tests.  There is some subtlety in the distinction between descriptive and inferential statistics. Displaying and summarizing do always involve some choice about what meaning to display, and hypotheses can be implicit in a descriptive presentation. But the distinction is nonetheless very useful.   "
},
{
  "id": "table-stroke-frequency3",
  "level": "2",
  "url": "section-tables.html#table-stroke-frequency3",
  "type": "Table",
  "number": "3.1.2",
  "title": "Frequency Table for 30-Day Event Variable",
  "body": " Frequency Table for 30-Day Event Variable    Category  Count    No Event  405    Stroke  45    Total  451    "
},
{
  "id": "subsection-table-4",
  "level": "2",
  "url": "section-tables.html#subsection-table-4",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  A table which displays the counts of the categories of a categorical variable is called a frequency table .   "
},
{
  "id": "table-stroke-frequency4",
  "level": "2",
  "url": "section-tables.html#table-stroke-frequency4",
  "type": "Table",
  "number": "3.1.4",
  "title": "Frequency Table for 30-Day Event Variable with Percentages",
  "body": " Frequency Table for 30-Day Event Variable with Percentages    Category  Count    No Event  89.8%    Stroke  10.2%    Total  100%    "
},
{
  "id": "table-stroke-contingency1",
  "level": "2",
  "url": "section-tables.html#table-stroke-contingency1",
  "type": "Table",
  "number": "3.1.5",
  "title": "Contingency Table for Stroke Data",
  "body": " Contingency Table for Stroke Data     Stroke  No Stroke  Total    Contol  13  214  227    Treatment  33  191  224    Total  46  405  451    "
},
{
  "id": "subsection-table-11",
  "level": "2",
  "url": "section-tables.html#subsection-table-11",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": "  A contingency table is a table which shows the counts of cases that call into categories from two different categorical variables. One set of categories is listed veritcally and the other is listed horizontally, with the entries counting all cases that match both the vertical and horizontal categories.   "
},
{
  "id": "table-stroke-contingency2",
  "level": "2",
  "url": "section-tables.html#table-stroke-contingency2",
  "type": "Table",
  "number": "3.1.7",
  "title": "Contingency Table for Stroke Data - Percentages",
  "body": " Contingency Table for Stroke Data - Percentages     Stroke  No Stroke  Total    Contol  5.7%  94.3%  100%    Treatment  14.7%  85.3%  100%    Total  10.2%  89.8%  100%    "
},
{
  "id": "section-bar-pie",
  "level": "1",
  "url": "section-bar-pie.html",
  "type": "Section",
  "number": "3.2",
  "title": "Bar Plots and Pie Charts",
  "body": " Bar Plots and Pie Charts  The previous section focused on tables as summaries of data. Tables are good, but data communication can do much better. I want to turn data into visualizations: pictures that express the data.  I want to strongly state one important theme as the start of this section. Visualizaitons are powerful, since they can display data in much more readable way. But they always also come with some amount of risk. The choice of a visualization, much like everything in this course, always comes down to a judgment call. Every choice of visualization emphasizes something about the data and hides something else. There is no such thing as a neutral visualization they are always informed by a goal.  Now let me get started with the definition. In this section, I'll demonstrate by example. I'll use a data set gathered by a bank about home loan applications. There are ten thousand cases in this data and three variables. One variable is the current home ownership status of the application: whether they already own a home outright, have a mortgage, or rent. Another variable is the application type: individual or joint. The final variable is the rating the bank gave to the application, which is a letter from A to G with A being the safest loan to aware and G being the most risky.  I'll start with a frequency table for the ownership variable, showing the count of all three categories for this variable.  Frequency Table for the Ownership variable    Ownership  Count    Mortgage  4789    Own  1353    Rent  3858    Total  100000     is not a bad way to get a sense of the data from the table, but I want to visualize the data to make the breakdown more readiable. To do this, I'm going to make a bar plot.    A bar plot is a visualization of the count of the categories in a single numeric variable. It uses a bar for each category and the height or length of the bar is representative of the count of that category.    Here is the bar plot for the Ownership variable from before.   Onwership variable bar plot      This is the same data, but now the bar plot gives a qualitative sense of the relationship between the categories a sense that might have been missing from the raw numbers. It's easy to see, at a glance, the relative sizes of the categories.   was a measure of the total count. A bar plot can also be expressed in proportions: the bars can measure percentages instead of total counts.   Bar plots for Onwership variable - proportions      In , the proportions are represented as decimals. This is probably the more common notation in statistics, but I certainly could have written these also as percentages: instead of . Ultimately, both notations are used and switched between frequently, so you should be comfortable with both.  So far I've demonstrated a simple bar plot, either for counts or percentages. There are variants on a bar plot that display more information about the data set. Let me introduce them now.    There are three variants of a bar plot that display information about two different categorical variables in a data set. A stacked bar plot is a usual bar plot but the bars are coloured in different colours corresponding to the counts of a second categorical variable. A dodged bar plot is a bar plot where each original bar is split into several smaller bars by the second categorical variable. Finally a standardized bar plot is a bar plot where the heights of all the bars are fixed and the bars are coloured by the proportions of the second variable.    The definitions themselves are hard to understand directly, so let me show some examples. Here is a contingency table that combines the Ownership variable and the Appliction Type variable.   Frequency Table for Stroke Data      Individual  Joint  Total    Mortgage  3977  812  4789    Own  1242  111  1353    Rent  3494  364  3858    Total  8713  1287  10000     Previously, I turned a frequency table into a bar graph. Now I want to turn this contingency table into one of these three new bar graphs. I want to show the interaction: not just that there are 4789 applicants who previously had a mortgage, but that 3977 of them were solo applicants and 812 were joint applicants. Again, the data is here in the table but seeing what is all means in just the numbers is getting more difficult.   A Stacked Bar Plot       is a stacked bar plot. These are the same bars as , but now I have used the second variable, the application type, to colour the bars in two colours. In the mortgage bar, the blue is individuals and the pink is joint applications. Likewise for the other two bars. This still shows the ownership variable in the height of the bar, but also gives a good visualization of the breakdown of each bar by application type. It's easy to get a rough sense of how many of each bar are individual or joint applicants.   A Dodged bar plot       is a dodged bar plot. It shows the same information, but shows the breakdown side-by-side instead in one bar. The total of the mortgage category is now the sum of these two bars, and each subset is its own side-by-side bar. This makes the total of each category, mortgage, own and rent, a little bit less visable, but it makes the comparison in each part between individual and joint more clear. As I said before, visualization is always about trade-offs: what you want to show, what you are content with making less visible. If the comparison between individuals and joint applicatants is the most important, this is a good choice.   A Standardized bar plot       is a standardized bar plot. Here, the count of the mortgage, own and rent categories is completely gone. All that this plot tries to show is the relative percentages of individual and joint applications inside each ownership category. What is shown is that more mortgage carries have joint applications, and fewer homeowners do. Again, the choice of plot is determined by what the author of the visualization wishes to display or allows to be hidden. Here, the relative values are entirely hidden.  In addition to bar plots, let me define another familiar visualization.    A pie chart is a diagram that shows the proportions of a categorical variable as radial slices of a circle. The size of each slice measures the proportion of cases in each category.    Pie charts are exclusively for proportions: the pie of always considereed as a whole and each section of the pie is a portion of the whole. Pie charts are also only about a single variable, so I am going back to visualizing the data in the frequency table, for one variable, instead of the contingency table, for two variables.   A pie chart       is a pie chart of the ownership variable. This pie chart shows in a nice, clear way, how many applicants have a mortgage, own a proprety, or rent a property.  Pie charts are often great for proportions they are seen as intuitive and easy to read representations of parts of a whole. However, they too can have their weaknesses. I haven't talked about the third variable yet: the loan grades. To remind you, A is the safest loan to grant and G is the most risky. Consider a pie chart for this variable.   A pie chart for loan grades       is pretty clear for the early letters, but readinng this for E, F and G is not pleasant, even if I were to take away the overlaping percentage text. Pie charts work well for large percentages, but showing very small slices can be a problem. Again, in addition to knowing terms for these visualization tools, the main theme of this section is that visualizations are also about choice: choosing the right visualization for clarity and purpose, and realizing that all visualizations necessarily involve tradeoffs.  "
},
{
  "id": "table-loans-ownership",
  "level": "2",
  "url": "section-bar-pie.html#table-loans-ownership",
  "type": "Table",
  "number": "3.2.1",
  "title": "Frequency Table for the Ownership variable",
  "body": " Frequency Table for the Ownership variable    Ownership  Count    Mortgage  4789    Own  1353    Rent  3858    Total  100000    "
},
{
  "id": "section-bar-pie-6",
  "level": "2",
  "url": "section-bar-pie.html#section-bar-pie-6",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  A bar plot is a visualization of the count of the categories in a single numeric variable. It uses a bar for each category and the height or length of the bar is representative of the count of that category.   "
},
{
  "id": "figure-ownership-bar",
  "level": "2",
  "url": "section-bar-pie.html#figure-ownership-bar",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Onwership variable bar plot     "
},
{
  "id": "figure-ownership-bar-proportions",
  "level": "2",
  "url": "section-bar-pie.html#figure-ownership-bar-proportions",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " Bar plots for Onwership variable - proportions     "
},
{
  "id": "section-bar-pie-14",
  "level": "2",
  "url": "section-bar-pie.html#section-bar-pie-14",
  "type": "Definition",
  "number": "3.2.5",
  "title": "",
  "body": "  There are three variants of a bar plot that display information about two different categorical variables in a data set. A stacked bar plot is a usual bar plot but the bars are coloured in different colours corresponding to the counts of a second categorical variable. A dodged bar plot is a bar plot where each original bar is split into several smaller bars by the second categorical variable. Finally a standardized bar plot is a bar plot where the heights of all the bars are fixed and the bars are coloured by the proportions of the second variable.   "
},
{
  "id": "table-contingency-ownership-application",
  "level": "2",
  "url": "section-bar-pie.html#table-contingency-ownership-application",
  "type": "Table",
  "number": "3.2.6",
  "title": "Frequency Table for Stroke Data",
  "body": " Frequency Table for Stroke Data      Individual  Joint  Total    Mortgage  3977  812  4789    Own  1242  111  1353    Rent  3494  364  3858    Total  8713  1287  10000    "
},
{
  "id": "figure-stacked-bar",
  "level": "2",
  "url": "section-bar-pie.html#figure-stacked-bar",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " A Stacked Bar Plot     "
},
{
  "id": "figure-dodged-bar",
  "level": "2",
  "url": "section-bar-pie.html#figure-dodged-bar",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " A Dodged bar plot     "
},
{
  "id": "figure-standardized-bar",
  "level": "2",
  "url": "section-bar-pie.html#figure-standardized-bar",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " A Standardized bar plot     "
},
{
  "id": "section-bar-pie-25",
  "level": "2",
  "url": "section-bar-pie.html#section-bar-pie-25",
  "type": "Definition",
  "number": "3.2.10",
  "title": "",
  "body": "  A pie chart is a diagram that shows the proportions of a categorical variable as radial slices of a circle. The size of each slice measures the proportion of cases in each category.   "
},
{
  "id": "figure-pie1",
  "level": "2",
  "url": "section-bar-pie.html#figure-pie1",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": " A pie chart     "
},
{
  "id": "figure-pie2",
  "level": "2",
  "url": "section-bar-pie.html#figure-pie2",
  "type": "Figure",
  "number": "3.2.12",
  "title": "",
  "body": " A pie chart for loan grades     "
},
{
  "id": "section-histograms",
  "level": "1",
  "url": "section-histograms.html",
  "type": "Section",
  "number": "3.3",
  "title": "Histograms",
  "body": " Histograms  Bar plots and pie charts were ways to vizualise one or two categorical variables. Now I want to move on to ways to display a numeric variable. With a numeric variable, the distirbution of the data is usually the subject of interest. The data is a bunch of numbers, so I want to know where the numbers are concentrated, how they spread out, how they are distributed.    A histogram is a bar plot made from a numeric variable by dividing the range of numbers into equal intervals and then plotting, with a vertical bar, how many cases have a value that sits in each interval.    As always, its best to see by definition. I'll use a data set about loans and interest rates. This data set has 50 cases and one of the variables is interest rate in percentage. This is a numeric variable. The possible values range from 5 to 25 percent. To make a hisogram, I need to divide this into smalle ranges. I'll use an interval of 2.5, so that the groups are as follows: 5 to 7.5, 7.5 to 10, 10 to 12.5 and so on. Then I count how many cases fall into each range and made a bar graph of that count. The result is a the historgram shown in .   Histogram      In this historgram, it's clear that there are more cases in the lower range than the higher range. That's already interesting information about the data and how it behaves.  As I said, the distribution of data is the main point of a histogram. We have some useful terms to describe this distribution.     A distribution which extends out to the left while decreasing is said to have a left tail .  A distribution which extends out to the right while decreasing is said to have a right tail .  A distribution which has one prominent peak is caleld unimodal .  A distribution which has two prominent peaks is called bimodal .  A distribution which has more than two prominent peaks is called multimodal .     The following histograms are examples off these definitions.   A left tail distribution.       A right tail distribution       A unimodal distribution       A bimodal distribution       A multimodal distribution      Before moving on, I should say a few works about unimodal distributions. The most common kind of uni-modal distribution is a bell curve: the distribution of the data has the shape roughly of a bell, with a single peak descending quickly at first and more slowly farther away. Such a curve is called a normal distribution (a technical definition of these terms will follow later in the notes). Data which fits this pattern is often called normally distributed .  You may be familiar with a bell curve from high school, or just from general knowledge. It is an extremely common model for data. Many kinds of data are, indeed, normally distributed. But there is also a tendency, in some places, to assume a normal distribution where it really doesn't fit. This is dangerous. It is good to understand that the normal distribution is very common, but also good to understand that not all data is normally distributed  A nice example of this is grades in courses. Often, it is assumed that grades will be normally distributed. In very large situation, this can be justified. Provincial exams for high-school students, for examples, are assumed to be normally distributed. With tens of thousands of students writing the exams, this is not a terrible assumption. However, for smaller classes, this is usually not the case. In many of my classes, bimodal distributions are more common than normal distributions.  Now I have another definition.    For a numerical variable, a single case (or small group of cases) which differs greatly from the rest of the data is called an outlier .    Here is a histogram with one outlier: most of the data falls between 0 and 8, but there is one separated case in the 12-14 range.   An outlier in a histogram      Dealing with outliers is an important part of statistics. Sometimes they represent errors, and many situations in statistics will exclude outliers. However, they can also represent special cases that have some valuable explantion something that can add to the understanding of the data. Outliers are something to be careful with and aware of.  The last thing I want to cover in this section is transformations of histogram. Again, I'll give a formal definition later in the course, but I want to demonstrate the rough idea at this point. The following histogram shows the population of cities.   A Histogram for the Population of Cities      Almost all of the cities in this data set are in the 0 - 2 million population range. There are two outliers with higher population. Such a situation might be reasonable: I can easily imagine a set of cases that represent cities where most at in the 0 - 2 million range and only a couple exceed this. These outliers are probably a reasonable part of the data set. But having the outliers present another problem: since the histogram needs to be wider to display the outliers, the rest of the data gets more tightly grouped together in only part of the histogram.  In a situation like this, where all the data is clustered in a small part of a histogram, a logarithm transformation can help see more detail. This means applying the logarithm to all of the data. The logarithm decreases all values, but it has a much greater effect on larger values.  The next diagram is the same poluation after applying the logarithm (the base ten logarithm, to be specific). The two outliers are still here, but the rest of the population is now spread out over seven piece of the histogram, not just three. I get a better sense of the data and its distribution after applying the logarithm. This is one of the things that a transformations can do: lead to more readable data.   Histogram with a lograithm transformation      "
},
{
  "id": "section-histograms-3",
  "level": "2",
  "url": "section-histograms.html#section-histograms-3",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A histogram is a bar plot made from a numeric variable by dividing the range of numbers into equal intervals and then plotting, with a vertical bar, how many cases have a value that sits in each interval.   "
},
{
  "id": "figure-histogram1",
  "level": "2",
  "url": "section-histograms.html#figure-histogram1",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Histogram     "
},
{
  "id": "section-histograms-8",
  "level": "2",
  "url": "section-histograms.html#section-histograms-8",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": "   A distribution which extends out to the left while decreasing is said to have a left tail .  A distribution which extends out to the right while decreasing is said to have a right tail .  A distribution which has one prominent peak is caleld unimodal .  A distribution which has two prominent peaks is called bimodal .  A distribution which has more than two prominent peaks is called multimodal .    "
},
{
  "id": "figure-left-tail",
  "level": "2",
  "url": "section-histograms.html#figure-left-tail",
  "type": "Figure",
  "number": "3.3.4",
  "title": "",
  "body": " A left tail distribution.     "
},
{
  "id": "figure-right-tail",
  "level": "2",
  "url": "section-histograms.html#figure-right-tail",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": " A right tail distribution     "
},
{
  "id": "figure-unimodal",
  "level": "2",
  "url": "section-histograms.html#figure-unimodal",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": " A unimodal distribution     "
},
{
  "id": "figure-bimodal",
  "level": "2",
  "url": "section-histograms.html#figure-bimodal",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " A bimodal distribution     "
},
{
  "id": "figure-multimodal",
  "level": "2",
  "url": "section-histograms.html#figure-multimodal",
  "type": "Figure",
  "number": "3.3.8",
  "title": "",
  "body": " A multimodal distribution     "
},
{
  "id": "section-histograms-15",
  "level": "2",
  "url": "section-histograms.html#section-histograms-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal distribution normally distributed "
},
{
  "id": "section-histograms-19",
  "level": "2",
  "url": "section-histograms.html#section-histograms-19",
  "type": "Definition",
  "number": "3.3.9",
  "title": "",
  "body": "  For a numerical variable, a single case (or small group of cases) which differs greatly from the rest of the data is called an outlier .   "
},
{
  "id": "figure-outlier",
  "level": "2",
  "url": "section-histograms.html#figure-outlier",
  "type": "Figure",
  "number": "3.3.10",
  "title": "",
  "body": " An outlier in a histogram     "
},
{
  "id": "figure-histogram-population",
  "level": "2",
  "url": "section-histograms.html#figure-histogram-population",
  "type": "Figure",
  "number": "3.3.11",
  "title": "",
  "body": " A Histogram for the Population of Cities     "
},
{
  "id": "figure-histogram-logarithm",
  "level": "2",
  "url": "section-histograms.html#figure-histogram-logarithm",
  "type": "Figure",
  "number": "3.3.12",
  "title": "",
  "body": " Histogram with a lograithm transformation     "
},
{
  "id": "section-central-tendencies",
  "level": "1",
  "url": "section-central-tendencies.html",
  "type": "Section",
  "number": "3.4",
  "title": "Central Tendencies",
  "body": " Central Tendencies  In my presentation of histograms in the previous section, I talked about the distribution of data: left and right tails, modality, outliers. I want to continue that analysis in this section by talking about central tendencies. I am asking an important question here: what is a typical or usual value for this data and how is the data spread around that typical or usual value.  What becomes complicated is translating typical into mathematics. It turns out there are many ways to mathematically measure this. All of these measurements are called central tendencies . In this section, I will define the two most common and most useful mathematical definitions. The first half of this section will handle the first of the two definitions.    The mean or average of a numeric variable in a data set is the central tendency calcluated by adding up all of the cases and dividing by the number of cases. I can number the cases , where is the number of cases. The mean is usually written with a bar notation.     Let's go back to the same loans data set and interest rate variable as before. Recall , the histogram of this data. For the loans data, there are 50 cases. Adding up the interest rate in percentage for all 50 and dividing by 50 gives a mean interest rate of 11.57 percent. You can see, in the histogram, that 11.57 percent falls fairly nicely in the middle of the data.  Once I have a central tendency set, I have another important question: how much does the data spread out from the central tendency? There are two important words to define here: deviation and variance. Both capture the idea of an individual case being different from the mean. Visually, both relate to how the values, shown in a histogram, spread out. Let me get to the first definition.    Let be the value of a single care of a numeric variable in a dataset. The variance of this value is the difference between the particular case and the mean: .    The mean for interest rate variable in the loans data was 11.57 percent. For each case, there is a percentage, and I can subtract the mean. If a particular case has a loan with a 12 percent interest, then the deviance of that case is . Likewise, it a particular case has an interest rate of 8 percent, then the deviance of this case is .  Deviation is good for an individual case, but how do I summarize that for the whole data set? The definition that statistics has come up with for this is sample variation.    Let be a numeric variable in a dataset. The sample variation of the numeric variable is found by adding up the squares of the variance of all the cases then dividing by the number of case minus one. If is the notation for variance, then here is the calculate. The symbol is pretty conventional for sample variation.    In the average, the definition divides by the number of cases. In the sample variable, the definition divides by the number cases minus one. This seems a bit strange. This subtraction of one is called Bessel's correction. There are good mathematical reasons to justify this correction, but I won't cover them here.  The sample variance is a measure of the spread of data, but not the most intuitive one. However, I can take the square root of the sample variation to get something possibly more familiar.    For a numeric variable in a data set, the square root of the sample variables is called the standard deviation . It is a measure of the spread of the data.  is a common symbol for standard deviation. The greek letter sigma, , is also used in many context for standard deviation.    If I look at again, the mean was the value 11.75, roughly in the middle. The stndard devition for this dataset is about 5. Looking 5 units of percentage out from the mean, it looks like the majority of the data does fall within this spread. This is typical.  As a rule of thumb, about two thirds of a dataset typically falls within one standard devition from the mean. (There are certainly exceptions to this rule of thumb, but they typically come from strange and unusually distributed data). In this sense, most of the time, the standard deviation indicates how far from the mean you have to go to capture most (two-thirds) of the data. Even more, almost all of the data will fall within two standard deviations. Again in the histogram for the loan datq, almost all of this data is within 10 unit, 2 standard deviations, from the mean.  That was a discussion of mean or average, and the associated ideas of devitions, sample variance, and standard deviation. But mean is not the only central tendency: in fact, many exist. Mean is one of the two most common, the other of that pair is the median.    Let be a numeric variable in a dataset. The median of the variable is simply the middle value. If there are an odd number of cases, then the median is the middle cases when the cases are put in numeric order. If there are even number of cases, the median is the sum of the two middle ordered cases divided by two.    In the loans data, there are 50 cases. Here are the values for the interest rate variable for all 50 cases, put into increasing order.   Interest Rates Variable - All Cases    5.31  5.31  5.32  6.08  6.08  6.08  6.71  6.71    7.34  7.34  7.35  7.96  7.96  7.96  7.97  9.43    9.43  9.44  9.44  9.44  9.92  9.92  9.92  9.92    9.93  9.93  10.42  10.42  10.90  10.90  10.91  10.91    10.91  11.98  12.62  12.62  12.62  14.08  15.04  16.02    17.09  17.09  17.09  18.06  18.45  19.42  20.00  21.45    24.85  26.30     If I count halfway through thtis table, I count 25 of the 50 cases. The 25th and 26th cases both have interest rates of 9.93, so 9.93 will be the median. (Adding these together and dividing by two, which is done for an even number of cases, just recovers 9.93 since they are the same value )  The median is also a central tendency. One of the strange things about statistics is that multiple different mathematics constructions align with the normal language sense of usual or normal . Both the mean and the median are some measure of what it typical in the data set. I'll talk more later about the different between these central tendencies and how statisticians decide which one to use. For now, I can use the median and its setup to make some more definitions.    Let be a numeric variable in a dataset. The median was found by taking a value exactly halfway through the cases, when the data is ordered. For the following, I'll insist that the data is ordered in increasing value.  The value of the case that is one quarter of the way through the count is the first quartile .  The value of the case that is three quarters of the way through the count is the third quartile .  For any percentage , the value of the case that is of the way through the dataset is the th percentile. (So the first quartile is the 25th percentile, the median is the 50th percentile, and the third quartile is the 75% percentile).    For quartiles and percentiles, when the fractions would fall between two data points, the upper bound is chosen.    The quartiles and percentile are a way to meausure how much of the data is above or below a certain value. Exactly a quarter of the data should have values below the value of the first quartile. similarly, exactly three quarters of the data should have values below the third quartile. Exactly 93% of the data should have values below the value of the 93rd percentile.  Now I can look back at the table. There are 50 cases, so one quarter is 12.5. Looking at the upper bounds, I look at the 13th case. Countintg through the table, the 13th case in increasing order has value 7.96, so the first quartile is 7.96. Likewise, three quarters of 50 is 37.5, so I look at the 38th case. Again counting through the cases, the 38th case is 14.08, so the third quartile value is 14.08. I could similarly calculate percentiles if I wished. 92% of 50 is 46. The value of the 46th case is 19.42, so the 92nd percentile is 19.42.  From quartiles, I still have yet another definition.    Let be a numeric variable in a data set. The inter-quartile range or IQR is the value of the third quartile minus the first quartile. It measures the spread of the middle half of the data.    In the loans data, the first quartile was 7.96 and the third quartile was 14.08. The difference is This is the IQR for this data. It says that middle half of the data lies in a range of width 6.12.  In general, when working with the median, IQR does something similar to standard devition for means. A low IQR means data that is tightly bunched around the median. A high IQR means data that is quite spread out around the median. The precise measure of this differs: roughly two-thirds of the data typically is within one standrad deviation of the mean, and exactly half of the data is within the IQR. But the idea is similar. These are both meausre of the spread of the data.  I've talked about outliers already a little bit. Outliers are values that are a long way away from most of the rest of the data. Using quartiles and IQR, there is a useful rule of thumb for outliers.    Let be a numeric variable in a data set. A case in this variable, , can be consider an outlier if it falls in one of two situations.  If is more than 1.5 times the IQR above the third quartile.  If is less than 1.5 times the IQR below the first quartile.      This definition is not strict: determining exactly what is and what isn't an outlier is always a judgment. However, it is still a common method and one to be familiar with.  Let me look at the loans data one last time. The IQR was 6.12. If I multiply this by 1.5, I get 9.18. The first quartile was 7.96, so 1.5(IQR) below the first quartile is This is below all of the data: there are no negative interest rates here. By this rule of thumb, there are no outliers on the lower end of this data. However, the third quartile was 14.08, so I can again calcualte 1.5(IQR) above the third quartile. Looking at the table of values again, there are two interest rates above this value: 24.85 and 26.30. It's reasonable, using this rule of thumb, to consider these two as outlier.  Finally, I'd like a visualization for this information about medians, quartiles and IQR.    Let be a numeric variable in a dataset. A box plot is a visualition which includes the following.  A vertical line at the median.  A box starting at the first quartile and ending at the third quartile  A line line at the lowest and highest cases, excluding outliers defined by the 1.5(IQR) rule of thumb. (These two are called the whiskers ).  Isolated dots for the outliers.       shows the box plot for the interest rate variable in the loans data. As note above, there are two outliers, represented as dots, on the higher side of the data.   Interest Rates Box Plot      Finally, as with all visualizations, something is shown and something is hidden. This box plot gives me a sense of the data: where the median is, how the data is spread. The box is the middle half of the data, so inside the box is some measure of usual data. Out to the wiskers is the rest of the data, so I can see a bit of how it is distrubted. I can show specific outliers. For a simple diagram, a lot of information is shown. But it is still a summary. Exactly how the data fits between the whiskers and the quartiles is not shown. Unlike the histogram, the shape of the data, how it is bunchs and how quickly or slowly it decays, is harder to see.  This section talked about two systems to analyze the central tendency and spread of a numeric variable. The first was the system with means, deviations, sample variance and standard deviation. I drew these over a histogram to show the shape of the data. The second system was the system with medians, quartiles, inter-quartile ranges, box plots, whisker and outliers. It gives another picture.  Which one do I use? Well, this is the real heart of the matter. As you have already seen and will continue to see, statistics has no shortage of methods. There are many things you can do to display and analyze data. Being a good statistician is knowing the various systems well and choosing a system for the goals as hand.  That's pretty vague, so let me leave you with one criteria for choosing between mean and median.    A statistic or visualiztion is called robust if changes to just a small number of data points have a minimal effect on the statistic or visualization.    Robust statistics or visualizations are often desirable. If I change only one data point out of 200, probably the analysis should be almost the same. The mean and associated sample variance and standard deviation are useful measures and necessary for some tests and calculations, but they are not necessarily robust. Outliers can have a great effect on the mean, and moving an outlier further out will show up, even if it is only one data point among many. In contrast, medians and the rest of the information in a box plot is robust. If I move the two outliers in the loans data even further out, nothing else in the box plot will change. Box plots are less sensitive to outliers, and often that is a desirable trait. We'll talk more about these judgement calls in the future indeed, as you should be aware of by now, such judgement calls are one of the main themes of the course.  "
},
{
  "id": "section-central-tendencies-3",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "central tendencies "
},
{
  "id": "section-central-tendencies-4",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-4",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  The mean or average of a numeric variable in a data set is the central tendency calcluated by adding up all of the cases and dividing by the number of cases. I can number the cases , where is the number of cases. The mean is usually written with a bar notation.    "
},
{
  "id": "section-central-tendencies-7",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-7",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": "  Let be the value of a single care of a numeric variable in a dataset. The variance of this value is the difference between the particular case and the mean: .   "
},
{
  "id": "section-central-tendencies-10",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-10",
  "type": "Definition",
  "number": "3.4.3",
  "title": "",
  "body": "  Let be a numeric variable in a dataset. The sample variation of the numeric variable is found by adding up the squares of the variance of all the cases then dividing by the number of case minus one. If is the notation for variance, then here is the calculate. The symbol is pretty conventional for sample variation.   "
},
{
  "id": "section-central-tendencies-13",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-13",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  For a numeric variable in a data set, the square root of the sample variables is called the standard deviation . It is a measure of the spread of the data.  is a common symbol for standard deviation. The greek letter sigma, , is also used in many context for standard deviation.   "
},
{
  "id": "section-central-tendencies-17",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-17",
  "type": "Definition",
  "number": "3.4.5",
  "title": "",
  "body": "  Let be a numeric variable in a dataset. The median of the variable is simply the middle value. If there are an odd number of cases, then the median is the middle cases when the cases are put in numeric order. If there are even number of cases, the median is the sum of the two middle ordered cases divided by two.   "
},
{
  "id": "table-interest-rates",
  "level": "2",
  "url": "section-central-tendencies.html#table-interest-rates",
  "type": "Table",
  "number": "3.4.6",
  "title": "Interest Rates Variable - All Cases",
  "body": " Interest Rates Variable - All Cases    5.31  5.31  5.32  6.08  6.08  6.08  6.71  6.71    7.34  7.34  7.35  7.96  7.96  7.96  7.97  9.43    9.43  9.44  9.44  9.44  9.92  9.92  9.92  9.92    9.93  9.93  10.42  10.42  10.90  10.90  10.91  10.91    10.91  11.98  12.62  12.62  12.62  14.08  15.04  16.02    17.09  17.09  17.09  18.06  18.45  19.42  20.00  21.45    24.85  26.30    "
},
{
  "id": "section-central-tendencies-22",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-22",
  "type": "Definition",
  "number": "3.4.7",
  "title": "",
  "body": "  Let be a numeric variable in a dataset. The median was found by taking a value exactly halfway through the cases, when the data is ordered. For the following, I'll insist that the data is ordered in increasing value.  The value of the case that is one quarter of the way through the count is the first quartile .  The value of the case that is three quarters of the way through the count is the third quartile .  For any percentage , the value of the case that is of the way through the dataset is the th percentile. (So the first quartile is the 25th percentile, the median is the 50th percentile, and the third quartile is the 75% percentile).    For quartiles and percentiles, when the fractions would fall between two data points, the upper bound is chosen.   "
},
{
  "id": "section-central-tendencies-26",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-26",
  "type": "Definition",
  "number": "3.4.8",
  "title": "",
  "body": "  Let be a numeric variable in a data set. The inter-quartile range or IQR is the value of the third quartile minus the first quartile. It measures the spread of the middle half of the data.   "
},
{
  "id": "section-central-tendencies-30",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-30",
  "type": "Definition",
  "number": "3.4.9",
  "title": "",
  "body": "  Let be a numeric variable in a data set. A case in this variable, , can be consider an outlier if it falls in one of two situations.  If is more than 1.5 times the IQR above the third quartile.  If is less than 1.5 times the IQR below the first quartile.     "
},
{
  "id": "section-central-tendencies-34",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-34",
  "type": "Definition",
  "number": "3.4.10",
  "title": "",
  "body": "  Let be a numeric variable in a dataset. A box plot is a visualition which includes the following.  A vertical line at the median.  A box starting at the first quartile and ending at the third quartile  A line line at the lowest and highest cases, excluding outliers defined by the 1.5(IQR) rule of thumb. (These two are called the whiskers ).  Isolated dots for the outliers.     "
},
{
  "id": "figure-boxplot1",
  "level": "2",
  "url": "section-central-tendencies.html#figure-boxplot1",
  "type": "Figure",
  "number": "3.4.11",
  "title": "",
  "body": " Interest Rates Box Plot     "
},
{
  "id": "section-central-tendencies-41",
  "level": "2",
  "url": "section-central-tendencies.html#section-central-tendencies-41",
  "type": "Definition",
  "number": "3.4.12",
  "title": "",
  "body": "  A statistic or visualiztion is called robust if changes to just a small number of data points have a minimal effect on the statistic or visualization.   "
},
{
  "id": "section-scatterplots",
  "level": "1",
  "url": "section-scatterplots.html",
  "type": "Section",
  "number": "3.5",
  "title": "Scatterplots",
  "body": " Scatterplots  Histograms and boxplots were visualizations of a single numeric variable. Now I want to move on to visualizations of the interactions of two numeric variables. The main tool here is a scatterplot.    Let and be two numeric variables in a dataset. A scatterplot is a graph where the values of each variable in a case, and , are indicated as a dot with coordinates .    As always, I will demonstrate this by examples. A study collected data on a group of students, including how many hours they spend studying per week over a term and their resulting GPA in that term. These are both discrete numeric variables, assuming we round to the nearest hour. So, for each case, there are two numbers. If I draw a two-dimensional graph with two axes, I can think of each case a coordinates on those axes. The scatterplot for this data is shown in .   Study Hours and GPA      In the scatterplot, each case is a dot and the cases together give all these dots. A scatterplot is perhaps the most direct way to show two potentially interacting numeric variables: all the data is here, nothing about those two variables is hidden.  Visualization is meant to show something about the data. What does this scatterplot show? When we have two numeric variables, we can wonder about the relationship between them. Is there a relationship here? Maybe, but it's hard to tell. The data seems to fall into a triangle, which might be evidence that more studying leads to higher GPA. If it is evidence, though, is seems pretty marginal.  However, just asking the question about a relationship means that we are almost at the end of descriptive statistics. Visualizations show the data: they are a description. Most of the remainder of this course will be about inferential statistics, where we try to guess about a relationship between the data, something that isn't obvious but can be tested. Scatterplots already invite this kind of guessing.   is another scatterplot, this one about house prices and square footage of sold houses in a certain city. Again, every dot is a case, a house that was sold along with its area and its price.   Price and Square Footage      Here there seems to be better evidence for a relationship. Larger houses certainly seem to correlate with higher prices. This example leads to a useful definition.    Consider two numeric variable in a data set. If an increase in one of the numeric variables generally aligns with an increase in the second, then we say there is a positive correlation between the two variables. If an increasing in one of the numeric variables generally aligns with a decrease in the second, then we say there is a negative correlation between the two variables.    The house prices and squares footage variables seem to show a a positive correlation: higher values in one variable mostly lead to higher values in the other. Again, whether there actually is a relationship here is something for inferential statistics later in the course.  The house sales scatterplot also demonstrates something else: an outlier. Scatterplots show how the data is grouped. This data has a unique case which is very far away from the others. This case is an outlier. As mentioned before, dealing with outliers is an important part of data analysis.   is another scatter plot, this one from a British study about smoking. The two numeric variables are cigarettes smoked per day on a weekend day and the age of the smoker.   Smoking and Age      This scatter plot is really all over the place. Other than certain values for amount smoked (15, 20) being more common, this looks like a pretty random spray of data, and it is very unlikely there is any relationship here to be drawn between these two variables.  Finally, is the final scatterplot that I want to deal with today. It is from a study of US counties. It includes variables of median household income and poverty rate in percentage. Again, each dot is a particular county and its value in these two variables. There looks like there might be a relationship here, a negative correlation since higher income leads to lower povery rates, but perhaps not a straight line relationship.   Mediah Household Income and Povery Rate      The county povery data lets me introduce a new idea for numeric data. Instead of just visualizing data, I can also transform the data before visualizing or otherwise working with it. In a previous section, we transformed a histogram; now I want to transform a scatterplot. By transform, I mean applying some mathematical function to one or more numeric variables.  In principle, I can use any mathematical function on the data. I could square root the data, or calculate 2 to the power of the data. I could apply a logarithm to the data. If I do this to all the cases, I get a new, related variable, a transformed variable. This table shows the effect of applying a transformation to the first few cases of a dataset.   Example Transformations                     2.0  1.41  4  0.301  0.693    3.7  1.92  13.00  0.57  1.31    5.1  2.26  34.30  0.71  1.63    9.3  3.02  630.35  0.97  2.23     The table shows four transformationss. The third is the logairthm base 10, which I hope is familiar. The fourth might be something new. It is also a logarithm, but a new logarithm. There is a special number in mathematics, often called Euler's number. This is an irrational number, like , with a never-ending decimal expansion. It's a strange number, but for reasons developed in calculus, it turns out to be the best number to use for exponents and logarithms. It's logarithm has a special notation. This is called the natural logarith and is one of the most common used functions in mathematics, statistics included.  In historgrams, I used a logarithm transformation to spread out data, to make the distribution easier to see. For scatterplots, the logarithm has another use. Some data seems to show a relationship, but not a straight line relationship. As I will talk about in the very next section, straight line relationships are very valuable. For some kinds of data, applying the logarithm to all the data points can change the scatterplot into a something that looks like a straight-line relationship. This income and povery data is one such example. is the same scatterplot but I have applied the natural logarithm to both variables and all cases.   Caption      The new scatterplot looks like it might be a straight line relationship with a negative correlation, which is precisely the point.  "
},
{
  "id": "section-scatterplots-3",
  "level": "2",
  "url": "section-scatterplots.html#section-scatterplots-3",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  Let and be two numeric variables in a dataset. A scatterplot is a graph where the values of each variable in a case, and , are indicated as a dot with coordinates .   "
},
{
  "id": "figure-scatterplot1",
  "level": "2",
  "url": "section-scatterplots.html#figure-scatterplot1",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Study Hours and GPA     "
},
{
  "id": "figure-scatterplot2",
  "level": "2",
  "url": "section-scatterplots.html#figure-scatterplot2",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " Price and Square Footage     "
},
{
  "id": "section-scatterplots-12",
  "level": "2",
  "url": "section-scatterplots.html#section-scatterplots-12",
  "type": "Definition",
  "number": "3.5.4",
  "title": "",
  "body": "  Consider two numeric variable in a data set. If an increase in one of the numeric variables generally aligns with an increase in the second, then we say there is a positive correlation between the two variables. If an increasing in one of the numeric variables generally aligns with a decrease in the second, then we say there is a negative correlation between the two variables.   "
},
{
  "id": "figure-scatterplot3",
  "level": "2",
  "url": "section-scatterplots.html#figure-scatterplot3",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " Smoking and Age     "
},
{
  "id": "figure-scatterplot4",
  "level": "2",
  "url": "section-scatterplots.html#figure-scatterplot4",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " Mediah Household Income and Povery Rate     "
},
{
  "id": "table-transformation",
  "level": "2",
  "url": "section-scatterplots.html#table-transformation",
  "type": "Table",
  "number": "3.5.7",
  "title": "Example Transformations",
  "body": " Example Transformations                     2.0  1.41  4  0.301  0.693    3.7  1.92  13.00  0.57  1.31    5.1  2.26  34.30  0.71  1.63    9.3  3.02  630.35  0.97  2.23    "
},
{
  "id": "section-scatterplots-23",
  "level": "2",
  "url": "section-scatterplots.html#section-scatterplots-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarith "
},
{
  "id": "figure-scatterplot5-logarithm",
  "level": "2",
  "url": "section-scatterplots.html#figure-scatterplot5-logarithm",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": " Caption     "
},
{
  "id": "section-linear-regression",
  "level": "1",
  "url": "section-linear-regression.html",
  "type": "Section",
  "number": "4.1",
  "title": "Linear Models",
  "body": " Linear Models  The methods of the previous few sections were descriptive statistics: ways to summarize and display information from a data set. Now I want to slowly move into inferential statistics. Instead of just summarizing or displaying, I want to try to use the information in a data set to try to uncover some underlying truth about that data. I want to try to infer something.  There are many ways to do this, and we will devote the remainder of the course to just a few of the techniques of inferential statistics. We are starting with one important large category: regression. This is a category that applies to two numeric variables. A regression puts forward the idea that the two numeric variables are related by a mathematical function, where one is the independent variable and the other is the dependent variable. In principle, any mathematical function can be chosen in a regression, and regression is commonly performed for many such functions: polynomials, trigonometric functions, exponentials functions, and so on. But by far the most common regression is linear regression.  Before stating the definition that I want to work with in this course, let me remind you about the mathematical structure of a line. The most common equation of a line, where and are the variables, is called the slope-intercept form of the line. In this setup, is the independent variable, the input, and is the dependent variable, the output. is the slope of the line, showing how steep the line is, with positive slopes for ascending lines, and negative slopes for descending moving lines. is the -intercept of the line: it shows where the line crosses the axis.  This slope-intercept form is the setup for lines that we will use. Now let me give the main definition of the section.    A linear regression or linear model is a line chosen to match two numeric variables in a data set. The linear model is written in slope-intercept form. The variable is called the explanatory variable . The variable is called the dependent variable . The notation indicates that the model is an approximation of the data: individual data points are hopefully near the line, but the values of the data points don't exactly match the values of the line. The coefficient is the intercept and the coefficient is the slope .  To elaborate on a previous definition, if the slope is positive, we say that the linear model demonstrates positive linear correlation . Likewise, if the slope is negative, there is negative linear correlation or inverse linear correlation . Positive correlations means an increase in the explanatory variable causes an increase in the dependent variable; inverse correlation is the opposite, where increasing the explanatory variable decreases the dependent variable.    For the linear models we will analyze, the slope is by far the most important of the two coefficients. The slope indicates the strength of the effect of the explanatory variable. A high slope means that a small change in produces a large change in . Likewise, a small slope means that change in have a pretty small effect.  Visually, we fit linear models to scatterplots. is a scatterplot of two numeric variables in a data set about possums. The variable is the length of the whole animal (including the long tail) in centimeters, and the variable is the length of just the head, in milimeters. As usual, the dots are the cases, representing the measurements of one specific possum.   Possum Scatterplot      Regression looks at a scatte plot and asks: what relationship is demonstrated by this data? In this scatterplot, it looks like their might be linear relationship with a positive correlation. This also intuitively makes some sense: the larger animals can be reasonably expected to also have larger heads.  I want to fit a linear model to this data. Visually, I want to draw a line through this scatterplot that best fits all these data points. shows the scatterplot with this line. The axis is the explanatory variable, in this case, the total length in centimeters.   Linear Model      The specific line that is drawn through the scatter plot has this equation. Remember that the hat notation over the dependent variable is there to remind us that this line is an approximation of the data, not a perfect fit to the data.  Now I can interpret the coefficients of this line. 41 is the intercept. On a raw interpretation, this would mean that if the explanatory variable were zero, the output would be 41. In our units, a total body length of 0cm predicts a head length of 41mm. This obviously doesn't make much sense: a body length of 0 is not actually a possum at all. However, the data here doesn't really care about (relatively) very small body lengths. The data is studying grown possums, not developmental data. You can see this in the range of the variable: all the data is between 75 and 100 centimeres. So there is an interpretation of the intercept here, but it's not much of a problem that the interpretation isn't very sensical. The dataset isn't really concerned with very small values. (Of course, other data sets may care about the interceptc coefficient, if the data does include values of the explanatory variable which are near zero.)  The slope coefficient is more useful here. The number says that for each cm increase in body length, the expectation is that the corresponding length of the head of the possum is 0.59mm larger. In many ways, this coefficient is the relationship between the two variables, showing how changes in one variable are reflected in the other variable.  A linear regression, once found, can be used to make predictions. If I put a body length into the equation of the line, say 90 cm, then the linear regression predicts a 94.1 millimeter long head. These predictions can then be compared against future data. In this way, a linear model is like a hypothesis: something that comes from the data but can be tested in future experiments to determine how well it holds up.  As I have already noted, a linear model is an approximation. The data points are hopefully near the line, but not exactly on the line. That leads to the next definition.    Let be a linear model of a data set. For each data point, the difference is called the residual of the data point.    Using the previous example, consider the datapoint . If I put into the line, it predicts 85.25 mm. The actual value is 84.7. The different, minus , is the residual for this data point. In this case, the data is -.55 below the line: the residual is -0.55.  Much can be done with residuals, and we will return to them in . For now, though, I can use residuals to answer an important questions. I've talked about linear models, but I haven't yet said anything about how they are actually determined. How is the line and its coefficients discovered?  There are several methods, but the most common is called the method of least squares . Let me sketch the idea. First, I can number all of the data points from 1 to where is the number of cases in the data set. Then, given any line I can calculate the residuals of each data point. I'll use the letter for these residuals (short for the error of the approximation). This gives me a list of residuals, each measuring how far the data point is away from the line. Since the residuals measure the error, I want the error to be as small as possible. There are different ways to measure this, but the most common method looks at the sum of the squares of the residuals. For any line, I can calculate this sum of the squares of the residuals. To find the best line, I want the specific line for which this number is as small as possible. Such a line will be considered the best linear model. Since I have a bunch of squares and I want to minimize them, this is called the method of least squares .  Why do we use squares? There are a number of reasons, some which require more mathematics to discuss. One important effect, though, is that it makes all the errors positive. Residuals can be positive or negative: above or below the line. By squaring them, I get a positive numbers for each error. A second important effect comes from the fact that squaring has a larger effect on larger numbers. Therefore, this method exagerates large errors: points which are very far away from the line. This method is quite sensitive to major outliers, which is desirable in this context.  Finally, let me talk about minimizing this sum. You might be wondering: how is this actually done? Sure, I can make this sum and say that I want a minimum value, but how is the minimum actually calculated? Unfortunately for us, calculating such a minimum is well beyond the mathematics expected in this course. This is a calculus problem, and a fairly difficult calculus problem at that. In general, mostly problems in mathematics that are searching for a minimum or a maximum end up being calculus problems. Since this is not a calculus course, I am not going to go into the minimization methods.  I've now covered the basic ideas of linear regression, but I want to introduce one more important idea in this section. The linear model so far had one explanatory variable. It is possible that we want to consider more than one explanatory variable. This leads to the idea of multiple linear regression. I'll state the definition specifically for three explanatory variables.    Let , , and be numeric variables ina data set. A multiple linear regression is a linear model where is the dependent variable and depends on all three of the other variables. It has this equation. All three of the variables on the rigth side of the equation are called explanatory variable in the mulitple regression.    Though I have stated it for three variables, a multiple linear regression could have any number of variables. Notice that there is still only one intercept coefficient, but that each explanatory variable has its own slope coefficient. Each of those slope coefficients measures the way in which depends on each of the explanatory variables.  I can no longer graphs a multiple regression, since there are too many variables (hence too many axes) to draw. But the principles are exactly the same: there are still residuals, I still can find a model by least squares, and the coefficients still explains the relationship. I am just allowing multiple variables to have an effect on my dependent variable.  Let me go back to the example of this section. The data set also include variable for the age of the possum as well as the sex. I'd like to put these all in the linear model. Again, the head length is the dependent variable, which I will still call . A multiple regression might look like this. Then I can interpret these coefficients. As discussed above, the intercept is not terribly importnat here, but the other three are important. 0.56 means that each centimeter increase in total body length corresponds with a 0.56mm increase in head length. The 0.30 says that each year older corresponds to 0.3mm increase in head length. Finally, there is also the sex variable. This requires some more discussion.  In this data set, unsurprisingly, sex is a nominal categorical varaible, with two categories: male and female. As such, I can't put it into an equation. However, there is way to solve this problem.    If I have a categorical variable in a dataset and I assign numbers to each category, the resulting numeric variable is called an indicator variable .    The assignment of numbers usually arbitrary (though for ordinal categorical variable, we would usually try to preserve the natural order). In this case, the researches made the following assignment of number to categories: This changes the categorical variable into numbers. Now I can interpret the last term in the multiple regression. The coefficient only takes effect for female possums. If the case is male, the indicator variable is 0, so this term is multiplied by 0 and has no effect. If the case is female, the indicator variable is 1, so the term subtract 1.66 from the head length. The result is the observation that the female possums of the same age and body length typically have a head length that is 1.66mm shorter than the males.  I said I couldn't draw multiple regressions, since there are too many variables. However, I can often draw the effects of an indicator variable. Let me show you how. If I ignore the age category and just do regression with the body length and sex variables, I can treat each instance of the indicator variable as a new line. The coefficient moves the line for female possums below the line for the male possums. show the result. In the figure, the cases are colour coded: red for male and blue for female. I get two lines with the same slope (the other slope coefficient is unchanged) but the lines are shifted up or down from each other. If I have more categories, I could likewise have a whole set of shifted lines.   Indicator Variable and Lines      To finish this section, let me summarize with three points. First, there is mathematical way to create a linear regression by the least squares method: finding the best line by minimizing the residuals. Second, the numbers in that line carry statistical meaning: they encode the relationship between the data, at least approximately. Finally, those relationships can be extended to more variables. Extending to other numeric variables is just adding new terms to the equation, but to use categorical variables we have to assignment numbers to them, making them indicator variables. In all this, the coefficients carry the meaning of the relationship.  "
},
{
  "id": "section-linear-regression-4",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope-intercept "
},
{
  "id": "section-linear-regression-6",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-6",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  A linear regression or linear model is a line chosen to match two numeric variables in a data set. The linear model is written in slope-intercept form. The variable is called the explanatory variable . The variable is called the dependent variable . The notation indicates that the model is an approximation of the data: individual data points are hopefully near the line, but the values of the data points don't exactly match the values of the line. The coefficient is the intercept and the coefficient is the slope .  To elaborate on a previous definition, if the slope is positive, we say that the linear model demonstrates positive linear correlation . Likewise, if the slope is negative, there is negative linear correlation or inverse linear correlation . Positive correlations means an increase in the explanatory variable causes an increase in the dependent variable; inverse correlation is the opposite, where increasing the explanatory variable decreases the dependent variable.   "
},
{
  "id": "figure-scatterplot6",
  "level": "2",
  "url": "section-linear-regression.html#figure-scatterplot6",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Possum Scatterplot     "
},
{
  "id": "figure-linear-model",
  "level": "2",
  "url": "section-linear-regression.html#figure-linear-model",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " Linear Model     "
},
{
  "id": "section-linear-regression-18",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-18",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "  Let be a linear model of a data set. For each data point, the difference is called the residual of the data point.   "
},
{
  "id": "section-linear-regression-21",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of least squares "
},
{
  "id": "section-linear-regression-25",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-25",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  Let , , and be numeric variables ina data set. A multiple linear regression is a linear model where is the dependent variable and depends on all three of the other variables. It has this equation. All three of the variables on the rigth side of the equation are called explanatory variable in the mulitple regression.   "
},
{
  "id": "section-linear-regression-30",
  "level": "2",
  "url": "section-linear-regression.html#section-linear-regression-30",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": "  If I have a categorical variable in a dataset and I assign numbers to each category, the resulting numeric variable is called an indicator variable .   "
},
{
  "id": "figure-indicator-variable",
  "level": "2",
  "url": "section-linear-regression.html#figure-indicator-variable",
  "type": "Figure",
  "number": "4.1.7",
  "title": "",
  "body": " Indicator Variable and Lines     "
},
{
  "id": "section-linear-analysis",
  "level": "1",
  "url": "section-linear-analysis.html",
  "type": "Section",
  "number": "4.2",
  "title": "Evaluation of Linear Models",
  "body": " Evaluation of Linear Models  This section is a continuation of the previous on linear regression. Having defined what a linear regression is, I want to do some analysis of the quality of a regression. What is a good fit and how do we know? In this section, I will define three measures of the strength of a linear regression.    The correlation of a linear model is a number , with values between -1 and 1. A value of indicates a perfect match with a line with positive slope. A value of indicates a perfect match with a line of negative slope. As the value of gets closer to zero, it indicates a weaker and weaker match with the line. (In some contexts, this number is more specifically called the Pearson correlation coefficient .)    The term here is a bit annoying. We used correlation already to indicate a relationship, with positive correlation indicating that both variable grow goether and negative correlation indicating an inverse relationship. Now correlation is also a technical measure with the same name. This is frustrating, but it is standard terminology.  Let me use some diagrams to visualize correlation. What follows is a sequence of figures. The caption of each gives the correlation value, and you can see how the data becomes more scattered and less aligned to the linear model as the correlation gets close to zero.                                            As a final note about correlation, this tool only measures how something fits. is one last correlation figure.        This scatter plot has low positive correlation, r=0.14. There is a very slight positive correlation. However, the correlation coefficiententirely misses the fact that there is another kind of relationship here. A better model for this data would be a function that rises and then falls. Such a function is not a linear model, so the correlation number doesn't see it at all.  In statistics, linear regression is almost always the first thing to try. But some data has relationships which are not linear. It's very valuable to remember that linear models are only one of many kind of models of relationship between data.  Now let me define the second measure of a linear model, which is very closely connected to correlation.    The square of the correlation is simply called the measure. In some contexts, this is called the coefficient of determination . However, simply referring to it as is so common that I'll stick with that convention. The fact that we've changed from a lower case r to an upper case R is annoying, but again this is the conventional notation.    By squaring the correlation, a couple things happen. First, the value of is always positive, so it ignores the difference between positive and negative slopes. Close to 0 means that the data probably doesn't fit a linear model well, and close to 1 means a good fit. In this way, is a slightly more elegant measure of linearity, and it gets used more often because of this. Second, by squaring, the numbers get slightly smaller. (If you square a number less than 1, it gets closer to zero). Therefore, is a bit of a finer measure: is a stronger indication of a good linear fit than a correlation of the same value.  In the previous section, I also talked about multiple regression: making linear models with multiple explanatory variables. There are extension of to multiple regression as well. The one which we will use in the classroom activities is called adjusted . You can assume that adjusted means that we must be dealing with several explanatory variables.  Now let me get back to residuals, since these can also be used to evaluate the quality of a linear regression. Residuals were defined in the last section: they are the difference, for each data point, bewteen the actual data, , and the prediction of the linear regression, . There is a residual for each data point: n in total, where n is the number of cases.  From the previous section, recall . It has a linear model with equation . The residuals are the difference between the y coordinate of the data point and the line. However, residuals are a bit tricky to see in the original scatterplot.  Instead, I can just plot the residuals themselves. shows the same data set, but the axis is now the residual compared to the linear regression. The value of each data point is simpliy how far it was, in the original diagram, away from the line.    A scatterplot where the axis is the residual of a linear regression, instead of the original value of the data point, is called a residual plot .     A Residual Plot      As a visualization tool, the residual plot is extremely useful to seeing how good the regression is, since all it shows is the error for each data point. The shape and patterns of the residual plot can give information.  In general, if there is no pattern to the residual plot (and the residuals are not too large), that is good evidence that the original regression was pretty good. For the data shown in , from the previous section, there isn't much of a pattern to the residual plot, so the linear regression is probably a decent model of the relationship between the variables.   is another scatter plot with a linear regression. This looks like a pretty good regression.   Another Linear Model      Then, is the matching residual plot.   The associated residual plot      This residual plot looks pretty good. The residuals are balanced above and below the line, they are relatively small residuals, and there is no obvious pattern. This is evidence of a good linear regression: a line that fits the data well.   is another scatter plot with as it residual plot.   Another linear model       A matching residual plot      This residual plot is a bit different. There seems to be a pattern to the residuals: starting below, then moving above, then moving below. In the original scatterplot, the variance of the data from the line was difficult to read, visually. Here, the residual plot makes that much easier to read. This is the strength of a residual plot: it zooms in on the relationship between the data and the line, and can clearly show things that were present in the original scatterplot but were much harder to see. In this case, the relationship is still close to linear, but this pattern means that there is probably something else going on here as well, something non-linear between the two variables.  "
},
{
  "id": "section-linear-analysis-3",
  "level": "2",
  "url": "section-linear-analysis.html#section-linear-analysis-3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  The correlation of a linear model is a number , with values between -1 and 1. A value of indicates a perfect match with a line with positive slope. A value of indicates a perfect match with a line of negative slope. As the value of gets closer to zero, it indicates a weaker and weaker match with the line. (In some contexts, this number is more specifically called the Pearson correlation coefficient .)   "
},
{
  "id": "figure-correlation1",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation1",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation2",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation2",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation3",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation3",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation4",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation4",
  "type": "Figure",
  "number": "4.2.5",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation5",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation5",
  "type": "Figure",
  "number": "4.2.6",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation6",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation6",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation7",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation7",
  "type": "Figure",
  "number": "4.2.8",
  "title": "",
  "body": "     "
},
{
  "id": "figure-correlation8",
  "level": "2",
  "url": "section-linear-analysis.html#figure-correlation8",
  "type": "Figure",
  "number": "4.2.9",
  "title": "",
  "body": "     "
},
{
  "id": "section-linear-analysis-18",
  "level": "2",
  "url": "section-linear-analysis.html#section-linear-analysis-18",
  "type": "Definition",
  "number": "4.2.10",
  "title": "",
  "body": "  The square of the correlation is simply called the measure. In some contexts, this is called the coefficient of determination . However, simply referring to it as is so common that I'll stick with that convention. The fact that we've changed from a lower case r to an upper case R is annoying, but again this is the conventional notation.   "
},
{
  "id": "section-linear-analysis-20",
  "level": "2",
  "url": "section-linear-analysis.html#section-linear-analysis-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjusted "
},
{
  "id": "section-linear-analysis-24",
  "level": "2",
  "url": "section-linear-analysis.html#section-linear-analysis-24",
  "type": "Definition",
  "number": "4.2.11",
  "title": "",
  "body": "  A scatterplot where the axis is the residual of a linear regression, instead of the original value of the data point, is called a residual plot .   "
},
{
  "id": "figure-residuals",
  "level": "2",
  "url": "section-linear-analysis.html#figure-residuals",
  "type": "Figure",
  "number": "4.2.12",
  "title": "",
  "body": " A Residual Plot     "
},
{
  "id": "figure-linear-model-2",
  "level": "2",
  "url": "section-linear-analysis.html#figure-linear-model-2",
  "type": "Figure",
  "number": "4.2.13",
  "title": "",
  "body": " Another Linear Model     "
},
{
  "id": "figure-residual-plot-2",
  "level": "2",
  "url": "section-linear-analysis.html#figure-residual-plot-2",
  "type": "Figure",
  "number": "4.2.14",
  "title": "",
  "body": " The associated residual plot     "
},
{
  "id": "figure-linear-model3",
  "level": "2",
  "url": "section-linear-analysis.html#figure-linear-model3",
  "type": "Figure",
  "number": "4.2.15",
  "title": "",
  "body": " Another linear model     "
},
{
  "id": "figure-residual-plot3",
  "level": "2",
  "url": "section-linear-analysis.html#figure-residual-plot3",
  "type": "Figure",
  "number": "4.2.16",
  "title": "",
  "body": " A matching residual plot     "
},
{
  "id": "section-hypotheses",
  "level": "1",
  "url": "section-hypotheses.html",
  "type": "Section",
  "number": "5.1",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing  Almost all of inferential statistics is presented as hypothesis testing. This section introduces the main ideas. Let me start with an outline. We have a data set, which is a sample of the population. We can calculate information about the sample: this is information we have. We don’t know information about the parameters, since they are attributes of the whole population. The goal of statistics is to use the sample to infer something about the parameter in the whole population.  The setup to do this is to use the sample to make a hypothesis. Let me give you a definition.    In inferential statistics, a hypothesis is a mathematical statement about one or more population parameters. In hypothesis testing, there are two hypotheses.  A null hypothesis is a hypotheses that, in some way, mathematically captures a default state. Most often, this is a situation where two or more variables are not at all related, or a situation where a particular calculation for a single variable is not above or below an important threshold value.  An alternative hypothesis is a hypotheses that, in some may, mathematically captures some interesting observation. Most often, it will say that there is a relationship between two or more variables, or that a particular calculation for a single variable is above or below an important threshold.      The hypothesis is unknown: it is a property of the whole population. Instead, what we know is the sample. Again, let me give you the important definition.    A sample statistics is a calculation based on the values of variables from a sample. In the context of hypothesis testing, the sample statistics should be the same calculation as the hypothesis, but applied to the sample instead of the whole population.    Now I can describe the setup of hypothesis testing.  Based on the goal of a research study, I make two hypothesis: a null hypothesis and an alternative hypothesis. The null hypothesis says that nothing is going on with these variables, while the alternative hypothesis is usually a positive answer to the research question, indicating that something interesting is actually true in the population.  Then I use the sample to calculate a sample statistic that matches the hypotheses.  Finally, I use the mathematics of probability to determine whether the sample statistics supports the alternative hypothesis over the null hypothesis. This is usually phrased, sometome strangely, as a double negative: does the sample statistic allow me to reject the null hypothesis?  This is the setup. For most of the rest of this course, we will be going through these three steps for a wide variety of situations. For now, as usual, I’ll work through an example to demonstrate.  A certain study had this research question: do male bank managers discriminate against female employees in promotion decisions? What is the population? Recall the population for a research question is all of the possible cases. Here, the question is about promotion decisions made by male managers. Therefore, the population is precisely that: all promotion decisions made by all male bank managers. (You could argue that the population be limited, maybe to only banks in Canada. That would also be reasonable.)  That’s the population. What is the sample? Recall that the sample is the actual data: the portion of the population that we know something about. In this study, the sample was specific promotion decisions that the researchers were aware of.  The dataset, then, has cases. Each case was two variables: gender and decision. Both are nominal categorical with two categories: gender split between men and women, and decision split between promoted and not promoted. The gender refers to the gender of the applicant: remember, that study is only about male managers, so that part is fixed.   Bank Promotion Decisions and Gender   > gender  promoted  not promoted  total    men  21  3  24    women  12  12  24    total  35  13  48      is the contingency table for these two variables. Of the cases, exactly half were men and half were women under consideration for promotion. You can see from the table how many were actually promoted. I can read this as proportions: percent of the men were promoted and percent of the women were promoted. The different between these two proportion is or .  Let’s make sense of this proportional difference. Again, the population is all instances of promotion decisions made by a male bank manager. I can use for the value, in the entire population, of how many men were promoted, as a proportion. (Proportion is important here for comparison, since the number of promotion applicants in the entire population is not guaranteed to be perfectly split between men and women.)  Again, I can use for the proportion of the women who were promoted in this situation. Then the difference, in the whole population, is . This is a measure of how much men were promoted more often than women. This is a parameter. Now I have two calcluations:   The first is a parameter, which is unknown. The second is the sample statistic, which is know. The question is how much the sample statistic actually can tell us about the parameter.  Now let me setup the hypotheses.   I’ve labeled the null hypothesis . It says that, in the whole population, there is no difference in promotion rates. It’s a default statement, saying that the variables of promotion and gender are not at all related. Then I’ve labelled the alternative hypothesis It says that there is a difference in promotion rates, that the variables are related. In this particular case, the alternative hypothesis says that men are promoted more often than women when evaluated by a male manager.  There is often some variety in the statement of the alternative hypothesis. All three of these could be possible versions.   All three of these are negations of the null hypothesis: they all say that there is some relation between the variables. But they each are slightly different versions. The first says that the promotion rates are different, but has no assumption about whether men or women are more likely to be promoted. The second is explicitly looking for the possibility that men are promoted more and the third, likewise, for the possibility that women are promoted more.  Which of these alternative hypotheses should be used? It’s up to the researchers based on the situation and assumptions about the potential outcomes. We’ll have to keep track of this kind of subtlety throughout hypothesis testing, since it can affect the mathematics of the test.  To finish this section, let me give you a list of the four most common types of hypotheses. Certainly not all hypothesis testing is one of these types, but many are.  A difference in proportions, like the example in the section. the null hypothesis would state that the two proportions are the same, that there is no difference.  A difference in means. Like the previous, but for numeric data where averages from two different categories are compared. Again, the null hypothesis would state that the two means are the same. This would suit a research question such as: is the average height of cedars growing at either low or high elevation in the Coast Mountains the same?  A single proportion. This is a research question that is not about comparing categories, but about meeting a threshold. The null hypothesis would say that the proportion does not meet some important threshold, and the alternative hypothesis would say that it does. This would suit a research question such as: do of Canadian statistics student retain important definitions a year after they finish a statistics course?  Finally, a single means. Like proportions, but for numeric data. Again, the null hypothesis would state that the mean does not meet a certain threshold. This would suit a research question like: is the average Canadian consumption of refined sugar higher than it was in 1990?    "
},
{
  "id": "section-hypotheses-4",
  "level": "2",
  "url": "section-hypotheses.html#section-hypotheses-4",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  In inferential statistics, a hypothesis is a mathematical statement about one or more population parameters. In hypothesis testing, there are two hypotheses.  A null hypothesis is a hypotheses that, in some way, mathematically captures a default state. Most often, this is a situation where two or more variables are not at all related, or a situation where a particular calculation for a single variable is not above or below an important threshold value.  An alternative hypothesis is a hypotheses that, in some may, mathematically captures some interesting observation. Most often, it will say that there is a relationship between two or more variables, or that a particular calculation for a single variable is above or below an important threshold.     "
},
{
  "id": "section-hypotheses-6",
  "level": "2",
  "url": "section-hypotheses.html#section-hypotheses-6",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  A sample statistics is a calculation based on the values of variables from a sample. In the context of hypothesis testing, the sample statistics should be the same calculation as the hypothesis, but applied to the sample instead of the whole population.   "
},
{
  "id": "table-promotion-decisions",
  "level": "2",
  "url": "section-hypotheses.html#table-promotion-decisions",
  "type": "Table",
  "number": "5.1.3",
  "title": "Bank Promotion Decisions and Gender",
  "body": " Bank Promotion Decisions and Gender   > gender  promoted  not promoted  total    men  21  3  24    women  12  12  24    total  35  13  48    "
},
{
  "id": "section-probability-theory",
  "level": "1",
  "url": "section-probability-theory.html",
  "type": "Section",
  "number": "5.2",
  "title": "Probability Theory",
  "body": " Probability Theory   Hypothesis testing asks whether the sample statistic allows for the rejection of the null hypothesis. This is never a simple yes\/no question. Instead, it is always a probabilistic question. Therefore, answering it comes down to the mathematics of probability. For the most part, in this course, we leave the mathematics in the background. But, in this stretch learning oucomes and in a few other to come, I want to present some of the mathematics lying behind the statistical conclusions that we will reach.  Therefore, this is a very short introduction to the mathematics of probability. This is a whole discipline of mathematics, but it is still possible to make the first definitions in this short section of our course.    Discrete Probability  Like numeric variables, probability is split into two categoreis: discrete and continuous. This time, ‘discrete’ and ‘continuous’ refer to the possibilities for the probability. If there are only a few possibilities, the situation is discrete. If the possibilities are a whole range of number with arbitrary precision, the situation is continuous.  We’re going to start with discrete probability and then move on to contniuous. Statistics is strange since it can be phrased as discrete probability, but the methods of continuous probability turn out to be extremely useful. We’ll need a little bit of understanding of both.  Here, then, are the basic definitions of discrete probability.    Discrete probability is a situation where there are a finite number of possibilities, expressed usually as numbers . Each possibility has a probability, giving a list of probabilities: . Each probability is a number between and . All of the probailities together have to add up to 1.     Everything that I can know about the probability situation can be eventually calcluated from the possibilities and their probabilities. Let me give some basic examples.    A coin flip is a probability situation. There are two possibilities: heads or tails. I could assignment them numbers if I wished, say: heads and tails . Then, for a fair coin, each has a chance, so the probabilities are and . These probabilities do add up to .      A dice roll is a probability situation. For a six-sided dice, the possibilities are the numbers from to . For a fair die, each probbaility should be equal, and they should all add up to 1. Therefore, all the probabilities have to be one sixth.       For a slightly more interesting example, consider rolling two six-sided dice. Now the the possibilities are the numbers from to : the lowest roll is a on each die, which sums to and the highest roll is a on each die, which sums to . But the probabilities of the possibilities are now not all equal. There is only one way to get a roll of : rolling a on both dice. However, there are three ways to get a roll of  on the first die and on the second; on both dice; and on the first die and on the second. That leads to the following probabilities, determined by counting how many ways there are to produce each outcome. (There are total possible rolls, six for each die.) . Feel free to check that these numbers do, in fact, add up to .    I can draw the probability situation for rolling two six-sided dice as a graph, something like a histogram. shows that probability graph.   Probability for Rolling Two Six-sided Dice      I want to continue with the example of rolling two six-sided dice. Say I didn’t figure out the probabilities by looking at combinations of dice role. Instead, I can just try to figure out the probabilities by rolling a bunch of dice and seeing what happens. is a histogram (an actualy histogram now, from a data set I made) that I get by rolling two six-sided dice ten times.   Two Six-Sided Dice Histogram       is a histogram that I get by rolling two six-sided dice twenty times.   Two Six-Sided Dice Histogram       is a histogram that I get by rolling two six-sided dice fifty times.   Two Six-Sided Dice Histogram       is a histogram that I get by rolling two six-sided dice five hundred times.   Two Six-Sided Dice Histogram      What I have done here is called a simulation. In general, there are two main ways to determine the outcomes of a (discrete) probability situation.  I can use mathematical theory to predict and prove what the probabilities will be for various possibilities in a probability situation.  I can run a simulation, basically repeating the probability situation over and over again, and use a histogram to record the probability of all the various outcomes.    In the case of rolling two six-sided dice, after two hundred rolls, the histogram of outcomes was starting to look quite similar to the histogram-like graph of probabilities predicted by the theorey. The more times I roll two dice, the closer this similarity will grow. In general, we expect this to happen.     The Law of Large Numbers is a colloquial term for the fact that, as the number of iterations grows, simulations of probability get closer and closer to matching a correct theory of the probability situation.    Basically, if you repeat a probability situation enough times, you can get extremely precise and accurate versions of the probability. The simtulations and the theory converge. This is very useful. Probability theory is a well-developed part of mathematics, but it’s a pretty difficult discipline. With enough capacity (usually computing power) we can avoid a lot of the theory by just running simulations. This is actually done: simulations are a huge part of the development of the theory of probability. Thanks to the Law of Large Numbers, simulations can be used to predict or test the theory of probability.  For our purposes, in statistics we can use simulations to have efficient way to get accurate assessments of the probabilities in a probability situation. We will use this to determine probabilities for hypothesis testing.    Continuous Probability  Discrete probability is about discrete possibilities, like the outcomes of a die roll. Continuous probability is, in contrast, about continuous possibilities, like temperature, weight, lifespan, or other quantities which could, in theory, have aribtray precious. However, continouus probability has a whole set of very useful techinque. These are useful enough that it is often helpful to use continuous probability to model a discrete situation. Let me go back to the dice roll example. is the same probability graph from the simulation of 500 dice throws, but now I have added a continuous function that matches the probability.   Continuous Model      Obviously, a dice roll cannot fall between whole numbers. But the continuous model is still useful. I want to understand how to measure probability in the continuous model. To do so, think about the bars in this probability graph. The histograms approximation this graph, but I want to look back as , the original probability graph. The height of each bar is the probability, but I can draw this such that the width of each bar is exactly 1. This means that the area of each bar is the probability, height, times the width, which is . To the area is also a precise measure of the probability. For continuous probability, this is the important insight. Now let me give you the definitions we will use.    Consider a continuous probability situation where the possibilities are a range of (real) numbers . Then a probability distribution is a mathematical function with the following properties.  The domain of the function is the range of possibilities .  All outcomes of the function at all positive: .  The total area under the function, for the whole domain, is exactly .      For discrete probability, the possibilities and their probabilities determine everything. For continuous probability, the function, the probability distribution, determines everything. How does it do so? By area.    Let be a probability distribution on domain . Let be a subset of the possibilites (so that it is an interval inside ). Then the probability of having any possibility between and is precisely the area under the probability distribution between and .    For a continuous probability situation, area is probability. and show how this looks: the probability under the whole distribution, shown in blue, is . The probability of a sub-range of possibilities is the area of the smaller section, shown in the red, which will be smaller than the blue area. In the figure, the area of the red region is the probability of a possibility between and , as a fraction of the whole probability between and . Note that all the possibilities are values on the -axis: in a probability distribution, the -axis is always the possible outcomes of the probability situation.   A Probability Distribution      Probablity of an outcome between and      Finally, it would be nice to have a good notation for this area. To that end, I’m going to give you a definition from calculus. For those who are not familiar with calculus, please just treat this as a piece of new notation. I will not ask you to calculate this — I just want you to understand this notation. (For those who do have some calculus, I hope you enjoy the connections here.)    The integral of a function over an interval is a measure of the area under the graph of between the points and . It has this notation.     Continuous probability is, indeed, a subdiscipline of calculus. Calculus is not required for this statistics course, so I will be very minimal with uses of calculus. Hopefully the notation is not to strange.   "
},
{
  "id": "subsection-discrete-probability-5",
  "level": "2",
  "url": "section-probability-theory.html#subsection-discrete-probability-5",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  Discrete probability is a situation where there are a finite number of possibilities, expressed usually as numbers . Each possibility has a probability, giving a list of probabilities: . Each probability is a number between and . All of the probailities together have to add up to 1.    "
},
{
  "id": "subsection-discrete-probability-7",
  "level": "2",
  "url": "section-probability-theory.html#subsection-discrete-probability-7",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  A coin flip is a probability situation. There are two possibilities: heads or tails. I could assignment them numbers if I wished, say: heads and tails . Then, for a fair coin, each has a chance, so the probabilities are and . These probabilities do add up to .   "
},
{
  "id": "subsection-discrete-probability-8",
  "level": "2",
  "url": "section-probability-theory.html#subsection-discrete-probability-8",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  A dice roll is a probability situation. For a six-sided dice, the possibilities are the numbers from to . For a fair die, each probbaility should be equal, and they should all add up to 1. Therefore, all the probabilities have to be one sixth.    "
},
{
  "id": "subsection-discrete-probability-9",
  "level": "2",
  "url": "section-probability-theory.html#subsection-discrete-probability-9",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  For a slightly more interesting example, consider rolling two six-sided dice. Now the the possibilities are the numbers from to : the lowest roll is a on each die, which sums to and the highest roll is a on each die, which sums to . But the probabilities of the possibilities are now not all equal. There is only one way to get a roll of : rolling a on both dice. However, there are three ways to get a roll of  on the first die and on the second; on both dice; and on the first die and on the second. That leads to the following probabilities, determined by counting how many ways there are to produce each outcome. (There are total possible rolls, six for each die.) . Feel free to check that these numbers do, in fact, add up to .   "
},
{
  "id": "figure-2d6-1",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-1",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": " Probability for Rolling Two Six-sided Dice     "
},
{
  "id": "figure-2d6-2",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-2",
  "type": "Figure",
  "number": "5.2.6",
  "title": "",
  "body": " Two Six-Sided Dice Histogram     "
},
{
  "id": "figure-2d6-3",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-3",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " Two Six-Sided Dice Histogram     "
},
{
  "id": "figure-2d6-4",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-4",
  "type": "Figure",
  "number": "5.2.8",
  "title": "",
  "body": " Two Six-Sided Dice Histogram     "
},
{
  "id": "figure-2d6-5",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-5",
  "type": "Figure",
  "number": "5.2.9",
  "title": "",
  "body": " Two Six-Sided Dice Histogram     "
},
{
  "id": "subsection-discrete-probability-22",
  "level": "2",
  "url": "section-probability-theory.html#subsection-discrete-probability-22",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "",
  "body": "   The Law of Large Numbers is a colloquial term for the fact that, as the number of iterations grows, simulations of probability get closer and closer to matching a correct theory of the probability situation.   "
},
{
  "id": "figure-2d6-6",
  "level": "2",
  "url": "section-probability-theory.html#figure-2d6-6",
  "type": "Figure",
  "number": "5.2.11",
  "title": "",
  "body": " Continuous Model     "
},
{
  "id": "subsection-continuous-probability-5",
  "level": "2",
  "url": "section-probability-theory.html#subsection-continuous-probability-5",
  "type": "Definition",
  "number": "5.2.12",
  "title": "",
  "body": "  Consider a continuous probability situation where the possibilities are a range of (real) numbers . Then a probability distribution is a mathematical function with the following properties.  The domain of the function is the range of possibilities .  All outcomes of the function at all positive: .  The total area under the function, for the whole domain, is exactly .     "
},
{
  "id": "subsection-continuous-probability-7",
  "level": "2",
  "url": "section-probability-theory.html#subsection-continuous-probability-7",
  "type": "Proposition",
  "number": "5.2.13",
  "title": "",
  "body": "  Let be a probability distribution on domain . Let be a subset of the possibilites (so that it is an interval inside ). Then the probability of having any possibility between and is precisely the area under the probability distribution between and .   "
},
{
  "id": "figure-continuous-probability1",
  "level": "2",
  "url": "section-probability-theory.html#figure-continuous-probability1",
  "type": "Figure",
  "number": "5.2.14",
  "title": "",
  "body": " A Probability Distribution    "
},
{
  "id": "figure-continuous-probability2",
  "level": "2",
  "url": "section-probability-theory.html#figure-continuous-probability2",
  "type": "Figure",
  "number": "5.2.15",
  "title": "",
  "body": " Probablity of an outcome between and     "
},
{
  "id": "subsection-continuous-probability-12",
  "level": "2",
  "url": "section-probability-theory.html#subsection-continuous-probability-12",
  "type": "Definition",
  "number": "5.2.16",
  "title": "",
  "body": "  The integral of a function over an interval is a measure of the area under the graph of between the points and . It has this notation.    "
},
{
  "id": "section-randomness",
  "level": "1",
  "url": "section-randomness.html",
  "type": "Section",
  "number": "5.3",
  "title": "Probability and Hypothesis Testing",
  "body": " Probability and Hypothesis Testing  Now I have defined a null hypothesis and an alternative hypothesis are. A research study wants to determine if the alternative hypothesis holds—if the alternative hypothesis can be rejected. The way to do this is using probability. This section explains that setup.  I’ll use the same example as in about promotion decisions and gender. This was the research question: under a male manager, is there a prejudice against women in promotion decisions? From the data, there was a a sample statistic: men were promoted at at rate of and women at a rate of . The difference was , or as a proportion.  So here is the main question: what is the probability that the sample statistics was just due to randomness? The sample statistics shows a difference, but maybe this difference is just random variance. If I flip a fair coin ten times, I might very well get heads and tails. That would be a difference in the sample, but it would just be the product of random variation. The coin is still fair, and flipping the coin more times would eventually demonstrate that (due to the Law of Large Numbers). Likewise, maybe these particular promotion decisions, which do show a difference, are just some random variation since the sample is not the whole population.  This gets back to the hypotheses. The null hypothesis says there is no relationship in the parameter, in the whole population. A sample can still be different, since a sample is a small piece of the population. If the null hypothesis is true, then what is the probability of producing a sample statistics like the one that we have?  This is what we do. We assume the null hypothesis is true. Then, under that assumption, we determine the probability of producing the sample statistics. Then we evaluate this probability: if this probability is very small, then it is very unlikely that the sample statistics was randomly produces, which means that it is very unlikely that the null hypothesis is true. Let me give you some definitions for this setup.    A research study has to set a threshold of significance. ( is the sympbol often used for this quantity.) This is a probability which is small enough to consider it unlikely to have been produced randomly. The conventional value here is , but that is only a convention — the threshold of singnificance can be set as the researchers wish). Then, a sample statistics is called significant is the probability of producing the sample statistic, under the assumption of the null hypothesis, is less than the threshold of significance. This probability, that the sample statistics can be produced under the null hypothesis is called the -value of the sample statistic.    If a sample statistics is significant, then we are justified in rejecting the null hypothesis and, therefore, supporting the alternative hypothesis. This is how we test a hypotheiss: we set a threshold of significance, use mathematics to determine the probability of producing the sample statistics under the null hypothesis, and compare to the threshold to determine significance. If significant, we reject the null hypothesis and conclude that the sample supports the alternative hypothesis.  In I said that there were two ways to establish a probability: theory or simulation. Eventually, in this course, we will rely heavily on the mathematical theory of probability. But I do also want to do some simulations, to show you how that works.  So let me return to the example. Temporarily ignoring the gender, of the cases in the study, were promoted and not promoted. Of the promotion applicants, were men and were women. In the sample statistic, men were promoted and 14 women (adding together to make the total ).  I can make a simulation by randomly assigning these promotions to the applicants. I asked a random number generator to flip a coin times. For every , I recorded a promotion for one of the women. For every , I recoreded a promotion for one of the men. (If I happend to get to promotions for either of the categories, then I assigned the remainder to the other category). That gives me a random assignment of the promotions. I did this ten times. The follwing table shows the results, including the calculation of the difference: proportion of men promotion minus proportion of women promoted.   Ten Random Promotion Simulations   >   Men  Women  Difference    Randomization 1  20  15  0.208    Randomization 2  22  13  0.357    Randomization 3  15  20  -0.208    Randomization 4  20  15  0.208    Randomization 5  11  24  -0.542    Randomization 6  19  16  0.125    Randomization 7  20  15  0.208    Randomization 8  14  21  -0.292    Randomization 9  18  17  0.042    Randomization 10  12  23  -0.458     Then I compare this to the sample statistic: In nine of these ten randomizations, the difference in proportions was less that . In one randomization, the second one, the difference in proportions was larger. Therefore, from this particular set of randomizations, I would conclude that there is a chance of producing the sample statistic or a greater difference. If the null hypothesis is true, then my sample statistic has probability in this simulation. That is the -value. . (Like most percentages, -values are almost always expressed as proportions of one.) Then I would consider the threshold of significance and decide if this counted as significant.  Now, doing ten randomizations is not very many. This is probably not a great simulation and this probability is probably incorrect. However, if I did this randomanization many thousands of times, then the Law of Large Numbers tells me that I should actually get a very accurate idea of the probability.  So, I run many, many random trials. Then I look at my sample statistic: a difference in the proportion of men and women promoted. Then I ask, how often does this happen? How often do at least more men get promoted than women if the promotions were split up randomly? I haven’t shown the work of this many randomzation, but the answer, after all the random trials, is about . The -value is . If I use the conventional threshold of then so this is a significant result. I conclude that I can reject the null hypothesis and support the alternative hypothesis. This sample does support the idea that there is, in fact, a gender bias in bank promotions under male managers.  Statistics considers what is likely, not what is strictly true. We approach truth by probability and approximation. Statistics doesn’t conclude that a claim is true or false; it concludes that a claim is likely or unlike. As such, it always involves a judgement call, yet again.  But this is how hypothesis testing works. A sample statistic is generated from a sample. Some math or random trials are done to figure out if the probability of the sample statistic being just random, just noise. If that probability is low enough, if it is very unlikely that the sample statistic is just random change, then it is called statistcally significant, the null hypothesis is rejected, and the study gives real evidence for the alternative hypothesis.  Finally, this whole setup of hypothesis testing only works if the data is good data. All of the constructions here, about probability and randomness and significance, assume that the data is realiable. If the data is compromised, due to bad data collection, human error, bias, or any other cause, then no amount of good mathematics and probability theory will solve that problem. We can only do mathematics to produce significance on good data; bad data remains unrealiable regardless of how excellent our understanding of probability theory is.  "
},
{
  "id": "section-randomness-7",
  "level": "2",
  "url": "section-randomness.html#section-randomness-7",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  A research study has to set a threshold of significance. ( is the sympbol often used for this quantity.) This is a probability which is small enough to consider it unlikely to have been produced randomly. The conventional value here is , but that is only a convention — the threshold of singnificance can be set as the researchers wish). Then, a sample statistics is called significant is the probability of producing the sample statistic, under the assumption of the null hypothesis, is less than the threshold of significance. This probability, that the sample statistics can be produced under the null hypothesis is called the -value of the sample statistic.   "
},
{
  "id": "table-promotion-random",
  "level": "2",
  "url": "section-randomness.html#table-promotion-random",
  "type": "Table",
  "number": "5.3.2",
  "title": "Ten Random Promotion Simulations",
  "body": " Ten Random Promotion Simulations   >   Men  Women  Difference    Randomization 1  20  15  0.208    Randomization 2  22  13  0.357    Randomization 3  15  20  -0.208    Randomization 4  20  15  0.208    Randomization 5  11  24  -0.542    Randomization 6  19  16  0.125    Randomization 7  20  15  0.208    Randomization 8  14  21  -0.292    Randomization 9  18  17  0.042    Randomization 10  12  23  -0.458    "
},
{
  "id": "section-sampling-distributions",
  "level": "1",
  "url": "section-sampling-distributions.html",
  "type": "Section",
  "number": "5.4",
  "title": "Sampling Distributions",
  "body": " Sampling Distributions  We now have the setup of hypothesis testing. We make the hypotheses: null and alternative. We assume the null hypothesis. Then, so far by simulation, we generate random samples to compare with our own sample statistics. This lets us assign a -value, which is a measure of how unlikely it would be generate the sample statistic under the null hypothesis. Finally, we compare the -value against a threshold of significant to determine whether or not we rejec the null hypothesis.  In this section, I want to focus in on one important part of this process: the random sample generated to compare to the sample statistic. In the previous section, we used simulation, but eventually we do want to rely on the theory of probability. In order to do that, we need some development of this important step, so that we no longer have to run simulations. This leads to the key definition of this section.    As always, we are in a situation where we are researching a particular population parameter (difference of means or proportions, single mean or proportion, some other similar calculation). We have a sample statistic, which is the same calculation as the population paramere but drawn just from the sample. We have hypotheses: null and alternative.  We assume the null hypothesis to be true. Under that assumption, we can generate random samples: fake data sets created by random choices under the assumption of the null hypothesis. From each of these samples, we can calculate the sample statistic, so we get a bunch of fake, randomly generated sample statistics.  The result is a new dataset with only one numeric variable: the list of values of all these randomly generated sample statistics. This new dataset is called the sampling distribution.    I believe the sampling distribution is possibly the trickiest single concept in this course. It’s layered deep below other concepts, all of which have to be clear to understand the sampling distribution. It also suffers from a difficult name: the word ‘sample’ is pretty heavily overused word in introductory statistics, so its quite unclear what ‘sampling’ really refers to in this definition. I want to spend this section trying to really clarify this important definition.  To that end, let me go over the process once more in general, and the apply this to an example.  We have a research question. Mathematically, the research question is some equation or inequality concerning the population parameter.  We write down the null hypothesis and the alternative hypothesis.  We gather data for the variable involved in the parameter. That data is the sample.  From that data, we do the calculation from the research question. This produces the sample statistic.  We assume the null hypothesis.  Under that assumption, we randomly generate samples. These do not replace our sample: they are random samples to be used in comparison.  From the randomly generate samples, we calclate the sample statistic for each. These do not replace our sample statistic: again, they are random sample statistics to be used in comparsion.  We gather all these sample statistics into a new data set with one numeric variable. This data set is called the sampling distribution.  We use the sampling distribution to determine the probability of producing our sample under the assumption of the null hypothesis. This probability is called the -value.  We compare that probability with a threshold of signifigance.  If our sample statistics is sufficiently unlikely, we reject the null hypothesis and say that our sample statistic is significant and can be use to support the alternative hypothesis.    In , I have already calculated a sample distribution. In the main example in that section, we were looking at promotion decisions. The population parameters was the difference in promotion rates between men and women under a male manager. The null hypothesis said that there was no difference. I ran ten simulations, each generating a difference in promotion proportions. This set of ten numbers was the sampling distribution for my simulation. I used it to compare with the sample statistics. Only one of the ten values exceeded the sample statistics, so this sampling distribution told me that there was a probability of having the difference in promotions of men over women equal to or more.  Then I said, without showing the work, that I generate many more random samples. With many more such samples, I found that only of them shows a difference in proportions of or more. Therefore, I concluded with this most robust simluation that the -value was .  In this way, simulation can always generate a sampling distribution. There are various randomization methods depending on the situation, but they all assume the truth of the null hypothesis and then use that truth to design the randomization. Simulation is always an option, but can be laborious to setup. I'd like another approach.  In I said that continuous probability is normally used to model discrete probability in statistics. The same is true for the sampling distribution. Instead of doing simulations, I want to rely on the mathematical theory of probability, specifically continuous probability. I want to model the sampling distribution as a mathematical function and use properties of that function to calculate the -value of the sample statistic.  "
},
{
  "id": "section-sampling-distributions-4",
  "level": "2",
  "url": "section-sampling-distributions.html#section-sampling-distributions-4",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  As always, we are in a situation where we are researching a particular population parameter (difference of means or proportions, single mean or proportion, some other similar calculation). We have a sample statistic, which is the same calculation as the population paramere but drawn just from the sample. We have hypotheses: null and alternative.  We assume the null hypothesis to be true. Under that assumption, we can generate random samples: fake data sets created by random choices under the assumption of the null hypothesis. From each of these samples, we can calculate the sample statistic, so we get a bunch of fake, randomly generated sample statistics.  The result is a new dataset with only one numeric variable: the list of values of all these randomly generated sample statistics. This new dataset is called the sampling distribution.   "
},
{
  "id": "section-normal-distributions",
  "level": "1",
  "url": "section-normal-distributions.html",
  "type": "Section",
  "number": "5.5",
  "title": "Normal Distributions",
  "body": " Normal Distributions  I defined a probability distribution in . There is one type of probability distribution that is, by far, the most prevalant and most commonly used: the normal distribution. In this section, I want to define the normal distribution, talk about its properties, and relate it to sampling distributions for hypothesis testing.    The normal distribution is a bell-shaped probability distribution. It is also called the bell curve or Gaussian distribution .  A normal distribution is determined by two pieces of information: a mean and a standard deviation. There is exactly one normal distribution, one bell curve, for any fixed choice of a mean and standard deviation.  In formal mathematics, if is the mean and is the standard deviation, the normal distribution is the following function.      A normal distribution with mean and standard deviation       shows a normal distribution: the familiar bell-shaped graph. The distribution in the figure has a mean of and a standard deviation of .   Three normal distributions       shows three more normal distributions with different means and standard deviations. The mean is always the centre of the graph, and the standard deviation controls how wide or narrow the distribution is. Normal distributions can be either tall and narrow or short and wide.  Let me go through some of the most important properties of the normal distribution.  The normal distribution is a unimodal distribution with equally sized left and right tails.  The mean of the normal distribution is, indeed, the input .  The standard deviation of the normal distribution is, indeed, the input .  The rules of thumb for standard deviation can be formallized: of the distribution falls within one standard deviation of the mean and of the distribution falls within two standard deviations of the mean.  The median of the distribution is also . The normal distribution is a distribution where basically any central tendency you can define will be , which is a very nice property to have.    As I have discussed before, data that fits a normal distribution is called normally distributed . To repeat a bit of earlier discussion, it's valuable to be aware of both the ubiquity and the limitations of the normal distribution. Many kinds of data, over large sample sizes at least, term to be normally distributed as they are or normally distributed after a logarithm transformation.  Physical features in biology like height or length tend to be normally distributed over a population (though this does often require a logarithm transformation).  Abilities and talents, at least as well as we can measure them, tend to be normally distributed over a population.  Grade scores on exams tend to be normally distributed over a population. (This tends to be only visibule in very large sample sizes).  Rolling several dice and adding the sum produces something close to a normal distribution. This becomes closer and closer to normal the more dice that are rolled. (All the dice need to be dice with the same number of sides for this to work.)  All of these normality assertions are only for usual data. For almost any category, you can find exceptions. Moreover, some measures are normal by definition, such as IQ. Normal by definition means that it is assumed, before any data, that IQ must be normal and scores are assigned to the population of test-takers to ensure that a normal distribution results.  Like the IQ situation, data can often be normalized : scaled and ajusted to make sure its fits a normal distribution. This is often done in testing, particularly for very large tests like national standardized tests and provincial graudation exams. Such grading of tests is called grading on a curve , the curve being the bell curve. Historically, this was quite common in many contexts, including university classes. Over recent decades, this has become a lot less common, since there are good reasons to expect classes not to be normally distributed. I'm sure you can still find university classes out there somewhere which are graded on a curve, but you might have to look a while.  In general, the assumption of normality is a dangerous one. The normal distribution is lovely to work with: it is the most well understood and commonly used probability distribution. It has very nice properties. It's really lovely if your data is normally distributed. But the assumption of normality is a major assumption, and making the assumption falsely will lead to poor data analysis and poor statistics.  All this discussion so far is about the use of the normal distribution as a model relates to matching a normal distribution to a set of real word data. This is certainly useful in general, but it's not actually the purpose of introducting the normal distribution at this point in the course. For use, the normal distribution is useful because of how it relates to the sampling distribution defined in the previous section. There is a major result here, one of the most important pieces of mathematical theory that we need to do statistics.    The Central Limit Theorem says the following: under some technical continuous, the sampling distribution in hypothesis testing will become closer and closer to a normal distribution as the number of randomly generated samples gets larger.    This is a lovely result for us. We need to understand the sampling distribution to do hypothesis testing. The central limit theorem says that we can always assume that the sampling distribution will be normal. This lets us use the well-developed theorey of the normal distribution to proceed with hypothesis testing.  I need to make a very important clarification here. The central limit doesn't say anything about the distribution of our original data or the population our sample is trying to understand. Our original data might even be about a categorical variable, which doesn't have a distribution at all. Even if it is numeric, our original sample data, or the numeric variable in the whole population, might have absolutely nothing to do with a normal distribution. The central limit theorem (as we are using it) is entirely about the sampling distribution . This is a very key distinction. The sample statistics we get from randomly generate samples, under the assumption of the null hypothesis, are a numeric data set with one numeric variable. The distribution of this data will look more and more like a normal distribution the more random samples we generate.  The statement mentions conditions. What are these? Mathematically, this can get quite technical, but being a little bit informal, these are the main idea of the condintuous.  The randomization process that produces the samples need to be actually random.  Each randomly generated sample needs to be independent of the others. That is, when I generate a random sample, I don't know anything about the other samples.  The sample size (of both the original sample and the randomly generated samples, since the randomly generated samples are all made the same size as the original sample) needs to be reasonably large.  In the context of our hypothesis testing, we can basically always satisfy the first two conditions. If we are making random samples, we do want a real random process and we want each sample to be drawn independently. For the third condition is a bit trickier. In our randomization for the sampling distribution, the size the random samples is the same as the size of our original data set. If our original sample was small, then we already have challenges. The fact that the central limit theorem also might not work is just another of problem to add to the problems of small sample sizes.  Now let's press on with actually using the central limit theorem.to add to the problems of small sample sizes. In , we build a sampling distribution by doing a simulation and then comparing the simulation with our sample statistics. Now that we know the central limit theorem, we can assume that the sampling distribution is normal. But how do we calculate it?  Well, a normal distribution is entirely determined by two pieces of information: the mean and the standard deviation. Therefore, to determine the sampling distribution, I need these two pieces of information.  The mean will determined by the null hypothesis.  The standard deviation is tricker to determine. The calculation for standard deviation of the sampling distribution will be unique to each situation. If the sample statistics is a difference of means, there will be one calculation, but if the sample statistics is a single proportion, an entirely different calculation will be used. I'll talk about these as we go through the various kinds of hypothesis testing throughout the rest of the course.    After this discussion of standard deviation, I need one more definition.    The standard deviation of the sampling distribution is often referred to as the standard error .    It's frustrating to have another term for something we already understand, but this is very common vocabulary for working with sampling distributions, so I will adopt it.  Finally, once we have a normal distribution model of the sampling distribution, what do we do with it? Well, we use it to test the sample statistic. I'll leave the details of this to the next stretch outcome, but there are two steps.  From the sample statistics and the standard error, we can calculate something called a -score. A -score tells where the sample statistic falls in the sampling distribution. It does this using the standard error: the -score a multiple of the standard error and identifies how far the sample statistic is away from the mean using the standard error as a unit. For example, a score of means that the sample statistics is eactly times the standard error away from the mean. A -score can be positive or negative to indicate above or below the mean.  From the -score, we calculate the -value. This is, as before, a measure of the probability that our sample statistic was the result of random variance under the assumption of the null hypothesis.     Sampling Distribution and Z-Scores      Let me visualize all of this. shows the position of sample statistic in a sampling distribution. The mean of this sampling distribution is and the sample statistic is . It's -score is , meaning it is half of a standard error away from the mean. Its -value is , meaning that there is a chance of randomly generating this sample or something larger. This is unlikely to be below any threshold of significance.  "
},
{
  "id": "section-normal-distributions-3",
  "level": "2",
  "url": "section-normal-distributions.html#section-normal-distributions-3",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": "  The normal distribution is a bell-shaped probability distribution. It is also called the bell curve or Gaussian distribution .  A normal distribution is determined by two pieces of information: a mean and a standard deviation. There is exactly one normal distribution, one bell curve, for any fixed choice of a mean and standard deviation.  In formal mathematics, if is the mean and is the standard deviation, the normal distribution is the following function.    "
},
{
  "id": "figure-normal-distribution1",
  "level": "2",
  "url": "section-normal-distributions.html#figure-normal-distribution1",
  "type": "Figure",
  "number": "5.5.2",
  "title": "",
  "body": " A normal distribution with mean and standard deviation     "
},
{
  "id": "figure-normal-distribution2",
  "level": "2",
  "url": "section-normal-distributions.html#figure-normal-distribution2",
  "type": "Figure",
  "number": "5.5.3",
  "title": "",
  "body": " Three normal distributions     "
},
{
  "id": "section-normal-distributions-9",
  "level": "2",
  "url": "section-normal-distributions.html#section-normal-distributions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normally distributed "
},
{
  "id": "section-normal-distributions-10",
  "level": "2",
  "url": "section-normal-distributions.html#section-normal-distributions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normalized grading on a curve "
},
{
  "id": "section-normal-distributions-13",
  "level": "2",
  "url": "section-normal-distributions.html#section-normal-distributions-13",
  "type": "Theorem",
  "number": "5.5.4",
  "title": "",
  "body": "  The Central Limit Theorem says the following: under some technical continuous, the sampling distribution in hypothesis testing will become closer and closer to a normal distribution as the number of randomly generated samples gets larger.   "
},
{
  "id": "section-normal-distributions-20",
  "level": "2",
  "url": "section-normal-distributions.html#section-normal-distributions-20",
  "type": "Definition",
  "number": "5.5.5",
  "title": "",
  "body": "  The standard deviation of the sampling distribution is often referred to as the standard error .   "
},
{
  "id": "figure-normal-distribution3",
  "level": "2",
  "url": "section-normal-distributions.html#figure-normal-distribution3",
  "type": "Figure",
  "number": "5.5.6",
  "title": "",
  "body": " Sampling Distribution and Z-Scores     "
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
