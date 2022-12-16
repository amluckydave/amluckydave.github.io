---
layout: page
title: GO-MYO prediction
description: Online Training & Predicting Hand Gestures.
img: assets/img/projects/04_go_myo/01.png
importance: 4
category: Master
---
GO MYO: Online Training & Predicting Hand Gestures.

This project aims to realize real-time hand gestures prediction, which means the GO MYO-embeded model can output target gestures before the completion of signal collection.

**DO NOT provide vital classification algorithm coding.** (- at present)

The first step for predicting is to train the individual classifier, you can follow the GUI notes to save your gesture raw EMG data in the default folder.

Once all the preset 12 gestures are recorded and saved properly, you can press "Train" button to train the recognition model. And the trained classifier will be saved in the same folders.

Then, you can move to Prediction period. If you had trained your classifier, you can just skip training and initialize the prediction.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/04_go_myo/02.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    pyMyo - Gesture information capture system
</div>

📝 **_Predicting_** |
You should initialize the prediction model with the trained data (weights, default options etc.) titled with "CL.h5". Then, just connect the MYO armband, and do the predicting. To evaluate the real-time performance, you can check the LCD module (milli seconds) which stands for the duration between gesture begining and result generating.

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/04_go_myo/03.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/04_go_myo/01.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Gesture presentation & prediction
</div>

You can check the media files about the real-time experiment below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
         <img src="/assets/img/projects/04_go_myo/04.gif" alt=""/>
    </div>
</div>
<div class="caption">
    Real-time prediction experiment
</div>

**Reference:** Python bindings for the Myo SDK: @<a href="https://github.com/NiklasRosenstein">NiklasRosenstein</a> | myo-python


