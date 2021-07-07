---
layout: about
title: Gustavo Penha
permalink: /

profile:
  align: right
  image: L1020635-4.jpg #eu_casa_2.jpg #DSCF1350.jpg #eu_barcelona.jpg
  address:  >
      <p>📷 Delft, NL</p> 
    
news: true
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true
---

I am a PhD candidate at TU Delft :netherlands: on the topic of neural rankers for conversational search and recommendation under the supervision of [Claudia Hauff](https://chauff.github.io/){:target="_blank"}.  I have BSc and MSc degrees from the Department of Computer Science of UFMG :brazil:, where I was supervised by [Rodrygo Santos](https://homepages.dcc.ufmg.br/~rodrygo/){:target="_blank"}. **I am currently doing a 3 month research internship at Amazon's Alexa Shopping team, with [Eyal Krikon](https://scholar.google.com/citations?user=Y7Q_6hAAAAAJ&hl=en){:target="_blank"} and [Vanessa Murdock](https://scholar.google.com/citations?user=YCU2cT0AAAAJ&hl=en)**.

To get an idea of my current research a good beginning is with [MANtIS](https://guzpenha.github.io/MANtIS/){:target="_blank"}, a novel dialogue corpus of information-seeking conversations which has a few properties previous datasets lack. We used MANtIS to study how neural rankers for dialogue perform on unseen domains, and how to improve them in the [domain adaptation](https://guzpenha.github.io/guzblog/assets/pdf/Domain_Adaptation_for_CRR_CAIR20.pdf){:target="_blank"} setup. In our ECIR'20 paper we showed that by intelligently sorting the training batches we get more effective neural rankers, i.e. [curriculum learning for IR](https://arxiv.org/abs/1912.08555){:target="_blank"}. Recently, we reflected on the [challenges](https://guzpenha.github.io/guzblog/assets/pdf/Challenges_CONVERSE20.pdf){:target="_blank"} of current offline evaluation schemes for conversational search tasks, discussing a few implicit and explicit assumptions and their implications. On our RecSys'20 [paper](https://dl.acm.org/doi/10.1145/3383313.3412249){:target="_blank"} we explore what types of knowledge off-the-shelf BERT has about recommendation items, e.g. movies and books, with different probes and how to employ such LMs for conversational recommendation.

 I am currently developing a library to conduct experiments with pre-trained transformers, e.g. BERT, for ranking: [**transformer-rankers**](https://guzpenha.github.io/transformer_rankers/){:target="_blank"}. It can be used to train and evaluate a transformer-based model for different ranking tasks, such as passage retrieval, adhoc retrieval and conversation response ranking. Two of my recent papers ([EACL'21](https://arxiv.org/pdf/2101.04356.pdf){:target="_blank"} and [ECIR'21](https://arxiv.org/pdf/2012.08575.pdf){:target="_blank"}) used the library for experimental evaluation.