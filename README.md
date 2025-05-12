# StimulusLibrary-CHS

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
