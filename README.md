
Work-Day-Calendar:

Description:
This repo is for the Module 5 Challenge to create a calendar
that shows the current day, month and date using dayjs. This calendar
also uses local storage to store user input in the specific time-blocks. 
It also uses the dayjs 24 hour time to compare with the various time-blocks
of stated hour of day to change the background colors to accurately represent 
the current status of either past, present, or future by adding of removing the 
classes of the individual time-blocks. 

Process:
This challenge has really taught me quite a bit about jQuery, the DOM, local storage
and github. I initially had some issues with the starter code and not realizing the correct way to work with it locally. Because after working on it for awhile I went to commit and push some changes to main and they went to crispy-octo-meme instead of my github repo...that of course didn't work out. Once I got that issue dealt with it took some time and effort to navigate using dayjs to affect the changes to the time-block class status. I got some really good help from my tutor Juan Santiago, who 
helped me get more familiar with jQuery and helped me deal with a couple of issues with setting up dayjs. I also got some assistance last night during office hours from my TA, Jin Yi, who helped me learn to use the 'application' setting in the inspection tools to work out an issue with local storage. So I definately couldn't have done it alone and received some good guidance from my human resouces and then there's googling the documentation and reviewing some class activity material, stack overflow, geeks for geeks etc..
Even this morning, I woke up and it dawned on me why the past, present and future background colors weren't working past 12PM. It was because the id for 1PM was 'hour-1' instead of 'hour-13'. When I changed it to 24 hour time it worked like 
I was hoping it would. Still learning from this challenge! 
Great project and I'm happy to finally get it to a place where I can submit it.

Screenshot:


