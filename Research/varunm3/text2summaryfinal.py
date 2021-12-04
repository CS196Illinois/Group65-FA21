#!/usr/bin/env python
# coding: utf-8

# In[1]:


import nltk


# In[2]:

# In[19]:


from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize


text = """2020 showed how the world can come together to fight a social cause, even if an incident occurs in one part of the world. By 2070, I expect the world to have evolved into one united community where everyone is looked upon equally and resources are distributed equally because at the end of the day, we are all humans who deserve these basic human rights. Students studying in 2070 will look back at the COVID 19 pandemic and realize that we were fighting more than just 1 war. They will understand the impact of social movements in creating a unified society. We were fighting against the coronavirus and racial inequality, a virus that has been in society for ages. The murder of George Floyd sparked a social revolution against police brutality and the unjust treatment of POC. This topic will certainly center down the concept of white supremacy, something that has been in the history books for a long time but never before addressed this powerfully. Lastly, a cultural anthropologist might describe this as a step forward in the worldwide issue of racism. This will challenge the early theories or colonialism and reset the world community to how it was before colonialism divided society and assigned a socially stratified class system to differentiate between people with varying identities."""
stopWords = set(stopwords.words("english"))
words = word_tokenize(text)



freqTable = dict()
for word in words:
    word = word.lower()
    if word in stopWords:
        continue
    if word in freqTable:
        freqTable[word] += 1
    else:
        freqTable[word] = 1


sentences = sent_tokenize(text)
sentenceValue = dict()

for sentence in sentences:
    for word, freq in freqTable.items():
        if word in sentence.lower():
            if sentence in sentenceValue:
                sentenceValue[sentence] += freq
            else:
                sentenceValue[sentence] = freq



sumValues = 0
for sentence in sentenceValue:
    sumValues += sentenceValue[sentence]



average = int(sumValues / len(sentenceValue))


summary = ''
for sentence in sentences:
    if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.2 * average)):
        summary += " " + sentence
print(summary)


# In[ ]:


