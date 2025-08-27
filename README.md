# Stimulus Library Internship

This repository contains work I completed during my Software Development Internship at MIT Quest for Intelligence (Feb–May 2025), where I contributed to the Stimulus Library, a platform that supports the Children Helping Science initiative for running large-scale online developmental studies. The project aimed to modernize the library and make it more accessible for researchers by improving usability, streamlining experiment creation, and increasing adoption of the platform. My contributions included prototyping Angular components to simplify researcher input, automating experiment protocol generation by translating JSON-based formats into standardized jsPsych protocols, and creating example studies of varying complexity to support researchers with different technical skill levels. These updates helped reduce setup time, improve workflow efficiency, and lay the groundwork for broader use of the Stimulus Library within the Children Helping Science community.

---

In the files for this repository, you can find:
- LookitForm_Angular:
  - Folder that contains Angular form prototype to inject user input into common sections needed in experiments in the future.
- babyTetris_dynamic.html:
  - Experiment protocol file that dynamically creates the experiment sections/frames with video content and audio.
  - Study frames in the file are organized using an array structure that contains an intro, calibration and content structure.
  - Uses the jsPsychHtmlKeyboardResponse plug-in from jsPsych to show video/audio
- finalHardcoded.html:
  - Experiment protocol file version, hardcoded each trial, created to test jsPsychHtmlKeyboardResponse approach.
  - Uses jsPsychHtmlKeyboardResponse plug-in from jsPsych to show videos/audio
- finalHardcoded_noaudio.html
  - Uses the jsPsychVideoKeyboardResponse plug-in from jsPsych to show videos, but audio cannot be played at the same time.
