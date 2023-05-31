const topics = [
    {
        "question": "Importance of Education"
    },
    {
        "question": "Is it beneficial to learn a Second Language?"
    },
    {
        "question": "Music has healing power."
    },
    {
        "question": "Fake news"
    },
    {
        "question": "Love is powerful than hate"
    },
    {
        "question": "Social Impact of Covid-19"
    },
    {
        "question": "How can Online Learning be Fun?"
    },
    {
        "question": "Make Public Transport Free?"
    },
    {
        "question": "Should violent video games be banned?"
    },
    {
        "question": "Learning about all world religions in schools is important"
    },
    {
        "question": "Importance of Kindness"
    },
    {
        "question": "Is there Value in Homework?"
    },
    {
        "question": "Things I learned in Lockdown"
    },
    {
        "question": "How can food be recycled?"
    },
    {
        "question": "Should Art be a part of the school curriculum?"
    },
    {
        "question": "Should schools teach sign languages?"
    },
    {
        "question": "Women make better presidents/prime ministers"
    },
    {
        "question": "Why books are better than their movies?"
    },
    {
        "question": "Life was better when technology was more simple."
    },
    {
        "question": "Impact of technology on our health"
    },
    {
        "question": "Should children reality show be banned?"
    },
    {
        "question": "Learning in the Wake of Covid-19"
    },
    {
        "question": "Hard Work vs Smart Work"
    },
    {
        "question": "What Makes Learning Fun?"
    },
    {
        "question": "The Coolest Inventions You\u2019ve Seen"
    },
    {
        "question": "Men should wear pink"
    },
    {
        "question": "Importance of AI in Education"
    },
    {
        "question": "Importance of Extracurricular Activities"
    },
    {
        "question": "Should exams be banned?"
    },
    {
        "question": "How to tackle Bullying in Schools?"
    },
    {
        "question": "The Best Day of My Life"
    },
    {
        "question": "Social Media: Bane or Boon?"
    },
    {
        "question": "Pros and Cons of Online Learning"
    },
    {
        "question": "Benefits of Yoga"
    },
    {
        "question": "If I had a Superpower"
    },
    {
        "question": "Environment Conservation"
    },
    {
        "question": "Women Should Rule the World!"
    },
    {
        "question": "The Best Lesson I have Learned"
    },
    {
        "question": "Paperbacks vs E-books"
    },
    {
        "question": "How to Tackle a Bad Habit"
    },
    {
        "question": "My Favorite Pastime/Hobby"
    },
    {
        "question": "Why should every citizen vote?"
    },
    {
        "question": "Fear of Missing Out (FOMO): Is it real or not?"
    },
    {
        "question": "Importance of Reading"
    },
    {
        "question": "Importance of Books in Our Life"
    },
    {
        "question": "My Favorite Fictional Character"
    },
    {
        "question": "Introverts vs Extroverts"
    },
    {
        "question": "Lessons to Learn from Sports"
    },
    {
        "question": "Beauty is in the eye of the beholder"
    },
    {
        "question": "Are you a very motivated person or do you wait until the last minute to do things?"
    },
    {
        "question": "What technology helps you to be productive?"
    },
    {
        "question": "Do you think that some people are more productive because of genetics or how they were raised?"
    },
    {
        "question": "How can people improve their productivity?"
    },
    {
        "question": "Who is the most productive person you know personally? How about really productive famous people?"
    },
    {
        "question": "Do you think people today work harder than their parents?"
    },
    {
        "question": "What is the biggest waste of time for you?"
    },
    {
        "question": "What advice will you/do you give your children?"
    },
    {
        "question": "Do you think smart phones increase or decrease productivity?"
    },
    {
        "question": "What do you think was the most productive period of your life so far?"
    },
    {
        "question": "Climate Change"
    },
    {
        "question": "Depletion of Ozone Layer"
    },
    {
        "question": "Reducing Water Levels"
    },
    {
        "question": "Deforestation"
    },
    {
        "question": "Global Warming"
    },
    {
        "question": "Waste Management"
    },
    {
        "question": "Water-Saving Techniques"
    },
    {
        "question": "Reducing Green Cover of Earth"
    },
    {
        "question": "Endangered species need protection"
    },
    {
        "question": "Importance of fishing regulations"
    },
    {
        "question": "Importance of investing in alternative fuels"
    },
    {
        "question": "Impact of ocean acidification on marine organisms"
    },
    {
        "question": "The misuse of the term \u201csustainable development\u201d by environmentalists"
    },
    {
        "question": "Microbial benefits"
    },
    {
        "question": "E-Waste Management"
    },
    {
        "question": "Natural disasters and their impact on economic growth"
    },
    {
        "question": "Energy alternatives \u2013 Only solution to the environmental damage"
    },
    {
        "question": "Extinction of rare species"
    },
    {
        "question": "World Environment Day"
    },
    {
        "question": "Disaster Management"
    },
    {
        "question": "Over and Improper Use of Natural Resources"
    },
    {
        "question": "Air, Water and Soil Pollution"
    },
    {
        "question": "Efficiency of Recycling"
    },
    {
        "question": "Independence Day"
    },
    {
        "question": "Labour Day"
    },
    {
        "question": "Mother\u2019s Day"
    },
    {
        "question": "World Population Day"
    },
    {
        "question": "World Health Day"
    },
    {
        "question": "Ambedkar Jayanti"
    },
    {
        "question": "Gandhi Jayanti"
    },
    {
        "question": "Human Rights Day"
    },
    {
        "question": "Zero Discrimination Day"
    },
    {
        "question": "Women\u2019s Day"
    },
    {
        "question": "Anti Terrorism Day"
    },
    {
        "question": "Hindi Diwas"
    },
    {
        "question": "Honesty is the best policy"
    },
    {
        "question": "When there\u2019s a will, there is a way"
    },
    {
        "question": "Actions speak louder than words"
    },
    {
        "question": "Knowledge is Power"
    },
    {
        "question": "Ignorance is Bliss"
    },
    {
        "question": "Don\u2019t judge a book by its cover"
    },
    {
        "question": "Actions speak louder than words"
    },
    {
        "question": "Knowledge is Power"
    },
    {
        "question": "Ignorance is Bliss"
    },
    {
        "question": "Hard work is the key to success"
    },
    {
        "question": "Importance of teacher in your life"
    },
    {
        "question": "SAT scores for college application"
    },
    {
        "question": "Student bullies should be expelled"
    },
    {
        "question": "Consequences of cheating in exams"
    },
    {
        "question": "Homeschooling is better than normal schooling"
    },
    {
        "question": "Importance of value education"
    },
    {
        "question": "Importance of sports and physical exercises"
    },
    {
        "question": "Schools vs colleges"
    },
    {
        "question": "What is the difference between a school, college and university in the USA?"
    },
    {
        "question": "Elections"
    },
    {
        "question": "Women rights"
    },
    {
        "question": "The Constitution of India"
    },
    {
        "question": "Youth of India"
    },
    {
        "question": "Culture of India"
    },
    {
        "question": "Importance of Unity"
    },
    {
        "question": "Yoga"
    },
    {
        "question": "Generation Gap"
    },
    {
        "question": "Importance of Value Education"
    },
    {
        "question": "Old Age Homes"
    },
    {
        "question": "Family Values"
    },
    {
        "question": "Leadership skills"
    },
    {
        "question": "Rise of Smart Classes"
    },
    {
        "question": "Grading System"
    },
    {
        "question": "Importance of Practical Education"
    },
    {
        "question": "Benefits of Co-Education"
    },
    {
        "question": "Importance of Co-Curricular Activities"
    },
    {
        "question": "Uselessness of Power-Point Presentations"
    },
    {
        "question": "Rise of Technology"
    },
    {
        "question": "Excessive usage of Internet"
    },
    {
        "question": "Speech on Fear"
    },
    {
        "question": "Speech on Dependence on Technology"
    },
    {
        "question": "Importance of Social Media"
    },
    {
        "question": "Speech on Save Water"
    },
    {
        "question": "Speech on India of My Dreams"
    },
    {
        "question": "Speech on Indian Education System"
    },
    {
        "question": "Speech on My India"
    },
    {
        "question": "Should cell phones be banned in classrooms?"
    },
    {
        "question": "Should laptops be allowed in classrooms?"
    },
    {
        "question": "Are single-sex schools more effective than co-ed schools?"
    },
    {
        "question": "Are smartphone and television making children unhealthy, distracted, and irritable?"
    },
    {
        "question": "Should we play sports that involve animals and make them uncomfortable?"
    },
    {
        "question": "Should schools do away with uniform?"
    },
    {
        "question": "Should time on social media sites be limited to an hour a day?"
    },
    {
        "question": "Should violent video games be banned?"
    },
    {
        "question": "Should homework in schools be done away with?"
    },
    {
        "question": "Should animal dissections be banned in schools?"
    },
    {
        "question": "Should attendance in college be made optional?"
    },
    {
        "question": "My top-three foods. Why?"
    },
    {
        "question": "My top-three movies. Why?"
    },
    {
        "question": "My top-three travel destinations. Why?"
    },
    {
        "question": "My three best friends. What do you like about them?"
    },
    {
        "question": "My top-three movie stars. Why?"
    },
    {
        "question": "My top-three sports persons. Why?"
    },
    {
        "question": "My top-three sports persons who don\u2019t play my favorite sport. Why?"
    },
    {
        "question": "My top-three animals. Why?"
    },
    {
        "question": "Which has been your most memorable vacation?"
    },
    {
        "question": "What\u2019s the best surprise you\u2019ve received?"
    },
    {
        "question": "When have you felt the most frightened?"
    },
    {
        "question": "Which subject in your school or college days you disliked the most? Why?"
    },
    {
        "question": "What has been your biggest success so far? What efforts you made to pull it off? How it changed your life?"
    },
    {
        "question": "Which is the best season of the year?"
    },
    {
        "question": "The most important lesson in life I\u2019ve learnt so far is\u2026"
    },
    {
        "question": "Who has been the most influential person in your life? Why?"
    },
    {
        "question": "Summer is the best and worst of times. Why?"
    },
    {
        "question": "What are the three biggest problems your city faces?"
    },
    {
        "question": "Three surprising things about me are\u2026"
    },
    {
        "question": "How do you plan a party?"
    },
    {
        "question": "What is your dream job? Why?"
    },
    {
        "question": "If you could have dinner with anyone, who would he/ she be? What ten questions would you ask?"
    },
    {
        "question": "What is your favorite book? Why?"
    },
    {
        "question": "Most successful person I know is\u2026"
    },
    {
        "question": "Most memorable moment of your life"
    },
    {
        "question": "Worst moment of your life"
    },
    {
        "question": "Should internet access be limited?"
    },
    {
        "question": "Have you been bullied? How did you tackle it?"
    },
    {
        "question": "What foods you\u2019ll never eat? Why?"
    },
    {
        "question": "What are the three things you\u2019re scared of? Why?"
    },
    {
        "question": "Movies are providing cues to people to commit crime. Should the movie content be regulated for this?"
    },
    {
        "question": "Should physical education be compulsory up to High School?"
    },
    {
        "question": "Should students be graded for their handwriting in schools?"
    },
    {
        "question": "Is it better to be honest and poor or dishonest and rich?"
    },
    {
        "question": "Will punishing bullies help?"
    },
    {
        "question": "How to speak confidently in public?"
    },
    {
        "question": "Do exam results alone determine a child\u2019s worth?"
    },
    {
        "question": "Do video games promote violence?"
    },
    {
        "question": "How to overcome the fear of Maths?"
    },
    {
        "question": "Should schools have longer recess time?"
    },
    {
        "question": "Should schools make swimming lessons mandatory?"
    },
    {
        "question": "What is the best age to own a mobile phone?"
    },
    {
        "question": "What is better: Paper books or E-Books?"
    },
    {
        "question": "How to overcome exam fever?"
    },
    {
        "question": "How will recycling help us?"
    },
    {
        "question": "Should there be a ban on smoking in public places?"
    },
    {
        "question": "Should zoos be banned?"
    },
    {
        "question": "Should there be a ban on animal testing?"
    },
    {
        "question": "Will banning plastic bags help?"
    },
    {
        "question": "Should exotic animals be kept as pets?"
    },
    {
        "question": "Is the government doing enough to tackle Global Warming?"
    },
    {
        "question": "How to control water pollution?"
    },
    {
        "question": "What is better: Buying pets or Adoption?"
    },
    {
        "question": "Why Elephant riding is unethical?"
    },
    {
        "question": "APJ Abdul Kalam Speech"
    },
    {
        "question": "Jawaharlal Nehru Speech"
    },
    {
        "question": "Lal Bahadur Shastri Speech"
    },
    {
        "question": "Mahatma Gandhi Speech"
    },
    {
        "question": "Speech On Swami Vivekananda"
    },
    {
        "question": "My Aim In Life Speech"
    },
    {
        "question": "My Mother Speech"
    },
    {
        "question": "My School Life Speech"
    },
    {
        "question": "My School Speech"
    },
    {
        "question": "Climate Change Speech"
    },
    {
        "question": "Global Warming Speech"
    },
    {
        "question": "Save Environment Speech"
    },
    {
        "question": "Save Water Speech"
    },
    {
        "question": "Speech About Nature"
    },
    {
        "question": "Speech On Air Pollution"
    },
    {
        "question": "Speech On Deforestation"
    },
    {
        "question": "Speech On Disaster Management"
    },
    {
        "question": "Speech On Environment"
    },
    {
        "question": "Speech On Importance Of Water"
    },
    {
        "question": "Speech On Pollution"
    },
    {
        "question": "Speech On Waste Management"
    },
    {
        "question": "Speech On Water"
    },
    {
        "question": "Speech On Water Pollution"
    },
    {
        "question": "Speech On World Environment Day"
    },
    {
        "question": "Health Is Wealth Speech"
    },
    {
        "question": "Knowledge Is Power Speech"
    },
    {
        "question": "Laughter Is The Best Medicine Speech"
    },
    {
        "question": "Speech On Unity Is Strength"
    },
    {
        "question": "Speech on Ambedkar Jayanti"
    },
    {
        "question": "Children\u2019s Day Speech"
    },
    {
        "question": "Christmas Day Speech"
    },
    {
        "question": "Gandhi Jayanti Speech"
    },
    {
        "question": "Hindi Diwas Speech"
    },
    {
        "question": "Human Rights Day Speech"
    },
    {
        "question": "Independence Day Speech"
    },
    {
        "question": "International Women\u2019s Day Speech"
    },
    {
        "question": "Labour Day Speech"
    },
    {
        "question": "Mother\u2019s Day Speech"
    },
    {
        "question": "Speech On Baisakhi"
    },
    {
        "question": "Speech On Diwali"
    },
    {
        "question": "Speech On World Population Day"
    },
    {
        "question": "Teachers Day Celebration Speech"
    },
    {
        "question": "Teachers Day Speech"
    },
    {
        "question": "Welcome Speech For Independence Day"
    },
    {
        "question": "Tryst With Destiny"
    },
    {
        "question": "Best Man Speech"
    },
    {
        "question": "Best Farewell Speech"
    },
    {
        "question": "Annual Function Speech"
    },
    {
        "question": "Farewell Speech For Colleague"
    },
    {
        "question": "Retirement Farewell Speech"
    },
    {
        "question": "Thank You Speech"
    },
    {
        "question": "Thank You Speech For Award"
    },
    {
        "question": "Thank You Speech For Birthday"
    },
    {
        "question": "Thank You Speech For Farewell"
    },
    {
        "question": "Vote Of Thanks Speech"
    },
    {
        "question": "Welcome Speech For Republic Day"
    },
    {
        "question": "Welcome Speech For Annual Function"
    },
    {
        "question": "Welcome Speech For College Function"
    },
    {
        "question": "Welcome Speech For Conference"
    },
    {
        "question": "Welcome Speech For Event"
    },
    {
        "question": "Welcome Speech For Farewell"
    },
    {
        "question": "Clean India Speech"
    },
    {
        "question": "Organ Donation Speech"
    },
    {
        "question": "Road Safety Speech"
    },
    {
        "question": "Speech On Child Labour"
    },
    {
        "question": "Speech On Agriculture"
    },
    {
        "question": "Speech On Cleanliness"
    },
    {
        "question": "Speech On Corruption"
    },
    {
        "question": "Women Empowerment Speech"
    },
    {
        "question": "Speech On Unemployment"
    },
    {
        "question": "Importance Of Education Speech"
    },
    {
        "question": "Speech on Education"
    },
    {
        "question": "Speech On Books"
    },
    {
        "question": "Speech On Education System In India"
    },
    {
        "question": "Speech On Girls Education"
    },
    {
        "question": "Value Of Education Speech"
    },
    {
        "question": "Speech On Money"
    },
    {
        "question": "Speech On Mother"
    },
    {
        "question": "Speech On Music"
    },
    {
        "question": "Speech On Respect"
    },
    {
        "question": "Speech On Sports"
    },
    {
        "question": "Speech On Sports And Games"
    },
    {
        "question": "Speech On the Importance of Teacher in Our Lives"
    },
    {
        "question": "Speech About Friendship"
    },
    {
        "question": "Speech On India"
    },
    {
        "question": "Speech On Junk Food"
    },
    {
        "question": "Speech On Grandparents"
    },
    {
        "question": "Speech On Article 370"
    },
    {
        "question": "Speech On Constitution Of India"
    },
    {
        "question": "Election Speech"
    },
    {
        "question": "Leadership Speech"
    },
    {
        "question": "Political Speech"
    },
    {
        "question": "Speech About Youth"
    },
    {
        "question": "Speech On Fashion"
    },
    {
        "question": "Speech On Generation Gap"
    },
    {
        "question": "Speech On Indian Army"
    },
    {
        "question": "Speech On Indian Culture"
    },
    {
        "question": "Speech On Internet"
    },
    {
        "question": "Speech On Technology"
    },
    {
        "question": "Speech On Unity"
    },
    {
        "question": "Speech On Yoga"
    },
    {
        "question": "Speech On Travel And Tourism"
    },
    {
        "question": "Speech On Health"
    },
    {
        "question": "Speech On Importance Of Cleanliness"
    },
    {
        "question": "Should school uniforms be banned?"
    },
    {
        "question": "Should we allow mobile phones in school?"
    },
    {
        "question": "Co-Education has more benefits or drawbacks?"
    },
    {
        "question": "What is better: Rote learning or Hands-on Learning?"
    },
    {
        "question": "Boarding schools are better than Day schools?"
    },
    {
        "question": "Dropping a year helps students or not?"
    },
    {
        "question": "Are PowerPoint presentations a waste of time?"
    },
    {
        "question": "Having the same grading system for all students, is it fair?"
    },
    {
        "question": "Should it be mandatory for all schools to have a canteen?"
    },
    {
        "question": "Are smart classes beneficial to students?"
    },
    {
        "question": "Speech About Dreams"
    },
    {
        "question": "Speech About Life"
    },
    {
        "question": "Speech On Time"
    },
    {
        "question": "Speech On Discipline"
    },
    {
        "question": "Speech On Happiness"
    },
    {
        "question": "Speech On Kindness"
    },
    {
        "question": "Speech On Value Of Time"
    },
    {
        "question": "Speech On Health And Fitness"
    },
    {
        "question": "What three pieces of advice will you give your children?"
    },
    {
        "question": "Whose advice do you follow more, your parents' or your friends' advice?"
    },
    {
        "question": "If you could give the leader of your country some advice, what would it be?"
    },
    {
        "question": "If you could go back in time and give yourself some advice, what would you tell your younger self?"
    },
    {
        "question": "Who was the wisest person in your country's history? What kind of advice did they give?"
    },
    {
        "question": "Where do you go to get good advice?"
    },
    {
        "question": "How often do you give your friends advice? What advice do you give them?"
    },
    {
        "question": "Tell your partner a problem you have and let them give you advice."
    },
    {
        "question": "What advice can you give to someone who wants to make the world a better place?"
    },
    {
        "question": "If a business man, a scientist, and a religious scholar gave you different advice about a problem, whose advice would you follow?"
    },
    {
        "question": "What animal best represents you? Why?"
    },
    {
        "question": "What creature scares you? Why?"
    },
    {
        "question": "Except for food, do humans need other animals? Why or why not?"
    },
    {
        "question": "What is the most effective way to save endangered species?"
    },
    {
        "question": "What are some examples of useful traits that help animals survive? (i.e. a giraffe's long neck)"
    },
    {
        "question": "What is Darwin famous for?"
    },
    {
        "question": "What is the cutest animal you can think of? How about the ugliest?"
    },
    {
        "question": "Why do humans have pets? Do you have a pet? Why or why not?"
    },
    {
        "question": "Are there any animals that we should try to kill off completely?"
    },
    {
        "question": "What kinds of materials are buildings made from?"
    },
    {
        "question": "Is there one type of building material you prefer in buildings?"
    },
    {
        "question": "What kind of style of buildings do you like? (Traditional, modern, crazy, functional, etc.)"
    },
    {
        "question": "What do you think of your country's modern/traditional architecture?"
    },
    {
        "question": "What are some buildings around where you live that you like?"
    },
    {
        "question": "Is it better to build concrete block buildings that are cheap, easy to build, and all look the same or more expensive buildings that have varied designs?"
    },
    {
        "question": "Talk about the construction industry and real estate industry in your country."
    },
    {
        "question": "There are many types of houses (underground, eco-friendly, rural, apartment). What kind of house would be your ideal house?"
    },
    {
        "question": "How much does architecture affect people's moods?"
    },
    {
        "question": "Have you ever been interested in architecture?"
    },
    {
        "question": "What makes a good interior for a restaurant? Office? Home? Classroom?"
    },
    {
        "question": "Smart buildings are being built now that can do lots of things. What would you like to see buildings be able to do in the future?"
    },
    {
        "question": "Do you think beauty is the same for every person?"
    },
    {
        "question": "Do you think that different cultures think about beauty differently?"
    },
    {
        "question": "What do you think of plastic surgery?"
    },
    {
        "question": "What is the most common plastic surgery in your country?"
    },
    {
        "question": "What does \"Beauty is only skin deep\" mean?"
    },
    {
        "question": "What kinds of beauty contests are popular in your country? Do they have beauty contests for men too?"
    },
    {
        "question": "What celebrities do you know of that have gotten plastic surgery?"
    },
    {
        "question": "Who is the most beautiful/handsome celebrity in your country?"
    },
    {
        "question": "What makes someone beautiful?"
    },
    {
        "question": "Do you think science can measure beauty?"
    },
    {
        "question": "What is the most amazing thing about the brain?"
    },
    {
        "question": "What are some extraordinary things some people can do with their brains?"
    },
    {
        "question": "Will we ever be able to augment our brain with technology? Would you augment your brain?"
    },
    {
        "question": "What do you wish your brain was better at?"
    },
    {
        "question": "Do you think male and female brains are better at different tasks? Why or why not?"
    },
    {
        "question": "What is the most mysterious aspect of the brain?"
    },
    {
        "question": "What do you think about most?"
    },
    {
        "question": "What does your brain do that you hate?"
    },
    {
        "question": "Do you think humans will ever completely understand the brain? Why or why not?"
    },
    {
        "question": "When do you use your brain the most?"
    },
    {
        "question": "If you were going to get a new car, what kind of car would you get? A luxury car? A sports car? A hybrid or electric car?"
    },
    {
        "question": "What kinds of cars do you think look the best?"
    },
    {
        "question": "Can you drive? If you can drive, are you a good driver? When did you get your license? If you can't drive, do you want to get a driver's license? Why or why not?"
    },
    {
        "question": "What is the fastest you have gone in a car?"
    },
    {
        "question": "Do you think cars are safe?"
    },
    {
        "question": "What are some of the advantages and disadvantages of driving versus public transportation?"
    },
    {
        "question": "What do you think cars will be like in the future?"
    },
    {
        "question": "Do people drive well in your country?"
    },
    {
        "question": "Would you like to drive an F-1 race car?"
    },
    {
        "question": "Do you think the use of cars will increase or decrease in the future? Why?"
    },
    {
        "question": "What is a challenge you have faced?"
    },
    {
        "question": "There are many amazing challenges to try: Visiting all of the continents, swimming in all of the oceans of the world, or climbing Everest. Can you think of some more"
    },
    {
        "question": "interesting challenges that a person can do?"
    },
    {
        "question": "What kind of challenge would you like to try?"
    },
    {
        "question": "Do you have any heroes that have done something amazing?"
    },
    {
        "question": "Challenges don't have to be amazing. What are some normal challenges people face?"
    },
    {
        "question": "Some people think that facing challenges improves a person. Do you agree or disagree?"
    },
    {
        "question": "Can you think of a friend who overcame a challenge?"
    },
    {
        "question": "What are some challenges you think the next generation will face?"
    },
    {
        "question": "Should people make their children have easy lives with few challenges or make sure their children face challenges?"
    },
    {
        "question": "What is the next challenge in your life you want to overcome?"
    },
    {
        "question": "Do\tyou give to charity or volunteer?"
    },
    {
        "question": "What do you think are some important charities people should give to?"
    },
    {
        "question": "Do you know of any bizarre charities?"
    },
    {
        "question": "Do you give money to homeless people? Do you think people should give money to homeless people?"
    },
    {
        "question": "Who do you think needs charity the most?"
    },
    {
        "question": "How much do you think governments should give to help other countries?"
    },
    {
        "question": "Should rich people and corporations be forced to give to charity?"
    },
    {
        "question": "Do you think there are charities that are scams?"
    },
    {
        "question": "Does your country have a holiday when it is traditional to help out people in your community? If not, should there be a holiday like that?"
    },
    {
        "question": "Do you think it is better to give time or money?"
    },
    {
        "question": "Are you someone who likes change?"
    },
    {
        "question": "In what ways have you changed since you were in junior high school?"
    },
    {
        "question": "How do you think you will change in the future?"
    },
    {
        "question": "Which political party in your country is most likely to make big changes? Is that a good or bad thing?"
    },
    {
        "question": "\"The only thing constant is change.\" Do you agree with this statement? Explain."
    },
    {
        "question": "What are the biggest changes in the world you have seen since you were a child?"
    },
    {
        "question": "What is the biggest change most people experience in their lives?"
    },
    {
        "question": "Is change good or bad for a person's mental health?"
    },
    {
        "question": "What is the most positive change you have experienced in your life?"
    },
    {
        "question": "\"You are the same person you were 5 years ago except for the books you have read, the people you have met, and the places you have traveled.\" Do you think this quote is accurate?"
    },
    {
        "question": "Would you rather live in your own country or live abroad?"
    },
    {
        "question": "Would you rather be smart or beautiful / handsome?"
    },
    {
        "question": "Would you rather be poor and happy or rich and unhappy?"
    },
    {
        "question": "Would you rather marry someone plain with a good personality or someone beautiful without much personality?"
    },
    {
        "question": "If war broke out in your country would you rather flee the country or fight?"
    },
    {
        "question": "Would you rather be rich or famous?"
    },
    {
        "question": "If you had to lose one of your senses (sight, smell, hearing, touch, taste) which would you rather lose?"
    },
    {
        "question": "Would you rather marry a rich celebrity or a rich CEO?"
    },
    {
        "question": "Would you rather have a brand new Mac or PC?"
    },
    {
        "question": "Would you rather take a trip to a new country or get a new TV?"
    },
    {
        "question": "Do you like cities or the country side? Which is better and why?"
    },
    {
        "question": "You can make one change to your city, what will you change?"
    },
    {
        "question": "What are some of the most famous cities in the world? What makes them famous?"
    },
    {
        "question": "Why do you think that humans started living in cities?"
    },
    {
        "question": "What will cities be like 50 years from now? Think about how these will change: Transportation, pollution, crime, advertising, buildings, work, shopping, and nightlife."
    },
    {
        "question": "Do you think that we will still live in cities 100 years from now?"
    },
    {
        "question": "What city would you like to visit?"
    },
    {
        "question": "What city is best known for fashion? How about technology? Art? Industry? Tourism?"
    },
    {
        "question": "What makes a city great to live in?"
    },
    {
        "question": "Are cities good for the environment or bad for the environment?"
    },
    {
        "question": "Do you know how scientists clone animals? What is the process?"
    },
    {
        "question": "Do you think scientists should be allowed to clone people?"
    },
    {
        "question": "Would you want to have a clone of yourself?"
    },
    {
        "question": "What problems could cloning people solve?"
    },
    {
        "question": "Could cloning people lead to problems? What kinds of problems?"
    },
    {
        "question": "If we could clone dinosaurs and bring them back to life, would you want to?"
    },
    {
        "question": "How about cloning ancient humans, like Neanderthals or the early Homo sapiens? Would you want to clone ancient humans?"
    },
    {
        "question": "Should we clone famous people like Albert Einstein or Leonardo Da Vinci? Do you think they would be as successful if they were brought back as clones?"
    },
    {
        "question": "How can cloning animals help science?"
    },
    {
        "question": "What do you think cloning will be like in the future? Will cloning stop or expand?"
    },
    {
        "question": "How is communication changing between people?"
    },
    {
        "question": "Talking to strangers used to be common. Do you think we should talk to people we don't know?"
    },
    {
        "question": "How often do you start up a conversation with people you don't know?"
    },
    {
        "question": "Think about how your grandmother talks with people. Is it the same as how you talk to people?"
    },
    {
        "question": "How will people communicate in the future?"
    },
    {
        "question": "How have smart phones changed communication?"
    },
    {
        "question": "Name at least 10 forms of communication."
    },
    {
        "question": "Do you think people can communicate with ghosts and spirits?"
    },
    {
        "question": "How has communication changed through human history?"
    },
    {
        "question": "What is the most basic form of communication?"
    },
    {
        "question": "What are some famous real conspiracies or cover ups?"
    },
    {
        "question": "What are some common conspiracy theories? Do you think they will be proven right or proven wrong?"
    },
    {
        "question": "Do you think that newspapers sometimes cover up events?"
    },
    {
        "question": "How often do politicians in your country get in trouble because of cover ups?"
    },
    {
        "question": "Do you think it's possible for global conspiracies to exist?"
    },
    {
        "question": "Whose job is it to uncover conspiracies and expose cover ups?"
    },
    {
        "question": "How open should governments be? Do governments need some secrecy?"
    },
    {
        "question": "Are you a suspicious or trusting person?"
    },
    {
        "question": "What are some secret societies you have heard of? Do you think they really exist?"
    },
    {
        "question": "When are secrets a good thing?"
    },
    {
        "question": "Is shoplifting common in your country?"
    },
    {
        "question": "What do you think the most common crime in your country is?"
    },
    {
        "question": "Should police in your country be stricter or less strict?"
    },
    {
        "question": "Is your country a safe country?"
    },
    {
        "question": "Have you ever seen a crime? (Don't talk about it if it's too upsetting for you.)"
    },
    {
        "question": "Do you think criminals can change their behavior?"
    },
    {
        "question": "What type of person shoplifts and what kinds of things do they steal?"
    },
    {
        "question": "Does your country have a big mafia?"
    },
    {
        "question": "Have you ever met someone from the mafia?"
    },
    {
        "question": "Can you tell if a kid will grow up to be a criminal?"
    },
    {
        "question": "Have you ever traveled abroad? If you have, where did you go and what was it like? What customs were different from your country's customs? If you haven't, would you like to go to abroad? Where would you like to go and what do you think it will be like?"
    },
    {
        "question": "Do you think it is important to follow a country's customs when you visit there?"
    },
    {
        "question": "What are some of the most important customs of your country? How about the customs of a country near your country? How about America or Australia?"
    },
    {
        "question": "Do you follow all of your country's traditional customs?"
    },
    {
        "question": "What are some strange foreign customs that you have heard of?"
    },
    {
        "question": "Are there any customs in your country visitors might find strange?"
    },
    {
        "question": "How do people greet each other in your country? Has it changed from the past?"
    },
    {
        "question": "Do you enjoy learning about other countries' customs?"
    },
    {
        "question": "What are some customs in your country that people should follow when they are eating? Do you think other countries have the same custom?"
    },
    {
        "question": "What are some interesting wedding customs in your country?"
    },
    {
        "question": "Where is the best place in your city to take a date?"
    },
    {
        "question": "What can you do if you want to save money and go on a date?"
    },
    {
        "question": "How common are blind dates in your country?"
    },
    {
        "question": "Do most blind dates go well? If not, why not?"
    },
    {
        "question": "What is the best way to meet boyfriends or girlfriends?"
    },
    {
        "question": "Describe your ideal date."
    },
    {
        "question": "What was the worst I best date that you have ever been on?"
    },
    {
        "question": "When a boy and a girl go on a date, which should pay?"
    },
    {
        "question": "How many people should you date before getting married?"
    },
    {
        "question": "What do you think of double dates?"
    },
    {
        "question": "How does the government in your country help disabled people?"
    },
    {
        "question": "What are some common disabilities?"
    },
    {
        "question": "How do you think disabled people feel when people pity them?"
    },
    {
        "question": "Are you comfortable around disabled people?"
    },
    {
        "question": "What is the best thing we can do to help disabled people?"
    },
    {
        "question": "Do you know anyone who is disabled?"
    },
    {
        "question": "Do you think your country's government does enough to help disabled people?"
    },
    {
        "question": "In your opinion, what are the worst disabilities?"
    },
    {
        "question": "How are disabilities viewed in your country?"
    },
    {
        "question": "What kinds of disabilities do people develop as they grow older?"
    },
    {
        "question": "What illegal drugs can you name?"
    },
    {
        "question": "What are some drugs that used to be legal but aren't anymore?"
    },
    {
        "question": "Why are some dangerous drugs legal (alcohol, nicotine, caffeine, etc.) but other safer drugs are illegal? Do you use any legal drugs?"
    },
    {
        "question": "Do you think your country has a drug problem?"
    },
    {
        "question": "Most illegal drugs started out as medicine, what medicine might be made illegal in the future?"
    },
    {
        "question": "What would happen if all illegal drugs were legalized?"
    },
    {
        "question": "Are there any illegal drugs you think should be made legal? How about drugs which are legal but should illegal?"
    },
    {
        "question": "Where do most illegal drugs come from?"
    },
    {
        "question": "Why do people start taking illegal drugs?"
    },
    {
        "question": "Is addiction to drugs a disease or a crime?"
    },
    {
        "question": "Would you ever drive an electric car?"
    },
    {
        "question": "What are some of the benefits and disadvantages of electric cars?"
    },
    {
        "question": "When do you think the first electric car was made?"
    },
    {
        "question": "What technology needs to be improved to make electric cars more popular?"
    },
    {
        "question": "Are electric cars really environmentally friendly if the electricity to charge them comes from coal power plants?"
    },
    {
        "question": "Do you think electric cars, hydrogen cars, or something totally different will be the future of automobiles?"
    },
    {
        "question": "How long does it take to charge an electric car?"
    },
    {
        "question": "Which country do you think is trying the hardest to make electric cars popular?"
    },
    {
        "question": "Do you think electric cars are popular in your country? Why or why not?"
    },
    {
        "question": "Do you think electric planes will become popular soon?"
    },
    {
        "question": "How often do you send emails?"
    },
    {
        "question": "How many email accounts do you have/need?"
    },
    {
        "question": "What email provider do you use?"
    },
    {
        "question": "How much of the email that you receive is spam?"
    },
    {
        "question": "Have you ever hand-written a letter and sent it to someone? If no, why not? If yes, how often do you send letters?"
    },
    {
        "question": "Have you ever pressed \"send\" and then wished you hadn't?"
    },
    {
        "question": "If you could secretly view anyone's email, whose email would you spy on?"
    },
    {
        "question": "What was the best email you have ever received?"
    },
    {
        "question": "What can happen if someone steals your email password?"
    },
    {
        "question": "Have you ever gotten a computer virus from email?"
    },
    {
        "question": "What are some of the most serious environmental problems?"
    },
    {
        "question": "What are ten things individuals can do to help the environment?"
    },
    {
        "question": "What are five things governments can do to help the environment?"
    },
    {
        "question": "What is your opinion on climate change?"
    },
    {
        "question": "Which countries cause the most pollution?"
    },
    {
        "question": "How will our children be affected by climate change?"
    },
    {
        "question": "What kinds of technologies do you know of that might help stop environmental problems?"
    },
    {
        "question": "Are corporations responsible for helping the environment?"
    },
    {
        "question": "What are some things that corporations can do to help the environment?"
    },
    {
        "question": "What are some local environmental problems you have noticed?"
    },
    {
        "question": "Do you think houses will be more environmentally friendly in the future?"
    },
    {
        "question": "Where will we get our energy when we run out of oil?"
    },
    {
        "question": "How will India and China affect the environment in the future?"
    },
    {
        "question": "What will happen if we keep polluting the environment?"
    },
    {
        "question": "Will the climate keep changing or go back to normal?"
    },
    {
        "question": "What do you think about these facts and statistics:"
    },
    {
        "question": "An effice desk has 400 times more bacteria than a toilet."
    },
    {
        "question": "Ten percent of all human beings ever born are alive at this very moment. Most lipstick contains fish scales."
    },
    {
        "question": "You have more bacteria cells in your body than human cells."
    },
    {
        "question": "What are some interesting statistics you know of?"
    },
    {
        "question": "What do you think the saying \"Numbers don't lie\" means?"
    },
    {
        "question": "What are some of the problems with statistics?"
    },
    {
        "question": "Do you agree that \"42.7% of statistics are made up on the spot\"?"
    },
    {
        "question": "What separates a fact from an opinion?"
    },
    {
        "question": "Have you ever taken a survey? What was it for?"
    },
    {
        "question": "Are the results from surveys an accurate form of statistics?"
    },
    {
        "question": "Have you ever made up a statistic to make what you were saying more trustworthy?"
    },
    {
        "question": "Do you trust statistics when you hear them?"
    },
    {
        "question": "How do members of a family support each other?"
    },
    {
        "question": "Who do you think has the most power in the family? Why?"
    },
    {
        "question": "Are good family members or good friends more important? Why?"
    },
    {
        "question": "How close are you to your extended family? (Cousins, aunts, uncles etc.)"
    },
    {
        "question": "What do you think of people who marry and decide not to have children?"
    },
    {
        "question": "How do you think western culture families and eastern culture families differ?"
    },
    {
        "question": "What do you think is the most important thing to make a happy family?"
    },
    {
        "question": "Is it better for mothers to stay at home with kids or go to work to earn more money for the family?"
    },
    {
        "question": "Many families send their children to private institutes or daycares for most of the day. Is this good or bad?"
    },
    {
        "question": "How do you define the word \"home\"? Is it where you live, where your family lives, or where you grew up?"
    },
    {
        "question": "When married people talk about having children they talk about \"starting a family\". Can two married people be a family if they don't have kids?"
    },
    {
        "question": "How do you think family life is changing in your country? (Example: wife working, husband cleaning, etc.) Is this change good or bad?"
    },
    {
        "question": "What do you think of gay marriage?"
    },
    {
        "question": "Is spanking or hitting a good way to discipline children? Why or why not?"
    },
    {
        "question": "What values will you pass on to your children?"
    },
    {
        "question": "Do you think society is losing its values?"
    },
    {
        "question": "How have values changed in society?"
    },
    {
        "question": "What is a value other people think is very important which you don't think is important?"
    },
    {
        "question": "What values did your parents pass on to you?"
    },
    {
        "question": "Are there any values that your parents tried to make you follow but you weren't good at following?"
    },
    {
        "question": "How do values hold a society together?"
    },
    {
        "question": "Some people say that poorer societies have stronger values than richer countries. Do you agree?"
    },
    {
        "question": "What traditional values are not important or not necessary now?"
    },
    {
        "question": "How do you feel when you see someone not following the values you were brought up with?"
    },
    {
        "question": "Would you like to be a fashion model? What are their lives like?"
    },
    {
        "question": "Could you date someone if they had a terrible sense of fashion?"
    },
    {
        "question": "Which country or city is the most fashionable in the world?"
    },
    {
        "question": "Is fashion important or not important? Why or why not?"
    },
    {
        "question": "Do you prefer functional or fashionable clothing?"
    },
    {
        "question": "What do you think of the fashion industry?"
    },
    {
        "question": "How does fashion affect people's lives?"
    },
    {
        "question": "What are some of the silliest fashions you have seen?"
    },
    {
        "question": "Do you think fashions changed as quickly in the past as today? Why or why not?"
    },
    {
        "question": "If you were a fashion designer, what kind of clothes would you design?"
    },
    {
        "question": "What is your least favorite fast food restaurant? Why?"
    },
    {
        "question": "Does fast food taste good or bad? Why?"
    },
    {
        "question": "Why is fast food so popular?"
    },
    {
        "question": "How often do you eat fast food? What do you usually eat? Where?"
    },
    {
        "question": "What is a fast food that people think is healthy but really isn't?"
    },
    {
        "question": "Do you know anyone who has worked at a fast food restaurant? How did they like it?"
    },
    {
        "question": "How has fast food changed in your country?"
    },
    {
        "question": "How is your country's fast food different from other countries' fast food?"
    },
    {
        "question": "Can you think of any healthy fast food?"
    },
    {
        "question": "How would you define \"fast food\"?"
    },
    {
        "question": "When you look at someone, what makes you think they are dangerous, greedy, intelligent, kind, not smart, crazy, or generous?"
    },
    {
        "question": "Do you like to meet new people or do you prefer to hang out with people you already know?"
    },
    {
        "question": "When and where did you meet most of your friends for the first time?"
    },
    {
        "question": "Have you met someone you hated right away even though you didn't know them?"
    },
    {
        "question": "When are the most important times to make a good first impression?"
    },
    {
        "question": "What are the best ways to make a good first impression?"
    },
    {
        "question": "Do you make first impressions based on what people wear?"
    },
    {
        "question": "What kind of impression are you trying to make with your clothes?"
    },
    {
        "question": "Do you try to make a different first impression now than you did in high school?"
    },
    {
        "question": "Have you ever tried to make a great first impression but completely messed it up?"
    },
    {
        "question": "In what jobs do people have to make very quick decisions based on first impressions?"
    },
    {
        "question": "What kinds of food did you eat when you were a child? Do you eat the same things now?"
    },
    {
        "question": "What is the best food to eat when you are sick?"
    },
    {
        "question": "What is your favorite food that your mother/father cooks?"
    },
    {
        "question": "How often do you eat out?"
    },
    {
        "question": "If you could have any food right now, what would it be?"
    },
    {
        "question": "How would you describe your country's food?"
    },
    {
        "question": "What is your favorite food? What's in it? Why is it your favorite?"
    },
    {
        "question": "What is your favorite foreign food? How is it different from your country's cuisine?"
    },
    {
        "question": "Where is the best place to eat in your town? Why is it so good?"
    },
    {
        "question": "Do you eat a healthy diet? Why or why not?"
    },
    {
        "question": "What could you do to improve your diet?"
    },
    {
        "question": "Have you ever gone on a diet to improve your health or lose weight? How well did it work?"
    },
    {
        "question": "Do you eat different foods depending on the season or weather? Give some examples."
    },
    {
        "question": "What kinds of food can you cook? Would you like to learn how to cook more types of food?"
    },
    {
        "question": "What are some things you like to do in your free time?"
    },
    {
        "question": "Do you have more free time now or when you were a kid?"
    },
    {
        "question": "What would you do if you had more free time?"
    },
    {
        "question": "Is there such a thing as too much free time?"
    },
    {
        "question": "How do free time activities differ now compared with the past?"
    },
    {
        "question": "Do you think people had more or less free time in the past?"
    },
    {
        "question": "What is the most worthwhile thing a person can do with their free time?"
    },
    {
        "question": "What does the idiom \"Time is money\" mean? Do you agree with it?"
    },
    {
        "question": "Is there something you wish you could do with your free time but can't?"
    },
    {
        "question": "Do you think a four day work week would be a good idea?"
    },
    {
        "question": "How many genres of video games can you name?"
    },
    {
        "question": "How are some of these genres unique and different from the others?"
    },
    {
        "question": "Choose one or two examples of games or video games. What are their rules?"
    },
    {
        "question": "What kinds of games are popular now?"
    },
    {
        "question": "What were some games that were popular in the past?"
    },
    {
        "question": "What makes a good game?"
    },
    {
        "question": "Are games good for you or bad for you?"
    },
    {
        "question": "Are games in the present better or worse than games in the past?"
    },
    {
        "question": "What is your favorite way to play games (cards, console, computer, mobile, sports)?"
    },
    {
        "question": "Compare games your parents played with games you like to play."
    },
    {
        "question": "What is the best way to find a job?"
    },
    {
        "question": "What do you think are the five most common questions asked at a job interview?"
    },
    {
        "question": "What are some things you should do for a job interview? How about things you shouldn't do?"
    },
    {
        "question": "How is the job market in your country? Is it easy or difficult to get a job?"
    },
    {
        "question": "How many jobs have you had? What were the interviews like?"
    },
    {
        "question": "If you were going to change jobs or try to get a job, what kind of job would you want to apply for?"
    },
    {
        "question": "How should a person dress when they go for a job interview?"
    },
    {
        "question": "How should you act when you are in a job interview? Confident? Polite? Humble?"
    },
    {
        "question": "What are resumes like in your country? What information do employers want to know?"
    },
    {
        "question": "What are some good things to have on your resume?"
    },
    {
        "question": "Do you wear glasses or contacts? If so, when did you start wearing them?"
    },
    {
        "question": "Do you think that people today have worse eyesight than in the past? Why or why not?"
    },
    {
        "question": "Do you know of anyone who has had corrective eye surgery? Were they happy with the results?"
    },
    {
        "question": "What do you think about people wearing glasses they don't need, just for fashion?"
    },
    {
        "question": "People often think that glasses make people look smart. Why do you think this is?"
    },
    {
        "question": "What do you think about contact lenses that change the color of someone's eyes?"
    },
    {
        "question": "What types of glasses are in fashion now?"
    },
    {
        "question": "How will technology change glasses?"
    },
    {
        "question": "In developing countries glasses can sometime be hard to get, how can that problem be fixed?"
    },
    {
        "question": "Do you think that in the future no one will wear glasses?"
    },
    {
        "question": "What are some things you do every day?"
    },
    {
        "question": "What are some good habits you have?"
    },
    {
        "question": "Do you have any bad habits? Can your partner or group give you any advice for your bad habits?"
    },
    {
        "question": "What is something you should do every day but don't?"
    },
    {
        "question": "What are some activities you like to do?"
    },
    {
        "question": "How much exercise do you get every week?"
    },
    {
        "question": "What is a successful life? What habits should you have to have a successful life?"
    },
    {
        "question": "What three habits will improve your life?"
    },
    {
        "question": "What are some habits that can improve your English ability?"
    },
    {
        "question": "What is something you do about once a week, month or year?"
    },
    {
        "question": "How does having children change someone's life?"
    },
    {
        "question": "What kinds of things do people have to give up when they have children?"
    },
    {
        "question": "What are some of the benefits of having children?"
    },
    {
        "question": "What is the perfect number of children a family should have?"
    },
    {
        "question": "Do you think it is better to have children when you are older or younger?"
    },
    {
        "question": "Do you want to have children? If not: Why not? Have you told your parents about your decision? What do they think about it? If so: When do you want to have children and how many do you want to have? Do you want your first child to be a boy or a girl? Why?"
    },
    {
        "question": "Most families in wealthy countries are having less and less children. Is this a good thing or a bad thing? Why?"
    },
    {
        "question": "How do children who have no brothers or sisters act?"
    },
    {
        "question": "Do you agree with the saying \"Children should be seen and not heard\"? Why do you agree or disagree?"
    },
    {
        "question": "What age did women start having children sixty years ago? How about now?"
    },
    {
        "question": "Do you like seeing pictures of other people's babies?"
    },
    {
        "question": "What are the best and worst things about having children?"
    },
    {
        "question": "How much do you know about your country's history?"
    },
    {
        "question": "Who is your favorite person from history?"
    },
    {
        "question": "What historical event had the most impact on the world?"
    },
    {
        "question": "Should history be taught more or less in schools?"
    },
    {
        "question": "George Santayana said \"Those who cannot remember the past are condemned to repeat it.\" Do you agree?"
    },
    {
        "question": "Is it more important to teach world history or your native country's history?"
    },
    {
        "question": "What is the most interesting period of history?"
    },
    {
        "question": "What are some of your favorite historical movies?"
    },
    {
        "question": "Who is your country's most famous historical figure?"
    },
    {
        "question": "What historical event should be made into a movie?"
    },
    {
        "question": "What are some of your hobbies?"
    },
    {
        "question": "How and when did you start your hobby?"
    },
    {
        "question": "Is it important for people to have hobbies?"
    },
    {
        "question": "What are some strange hobbies you have heard of?"
    },
    {
        "question": "What kind of new hobby would you like to try?"
    },
    {
        "question": "Do you think that some hobbies are just for girls and some are just for boys?"
    },
    {
        "question": "What are some of your family members' hobbies?"
    },
    {
        "question": "What are some hobbies that improve a person's life?"
    },
    {
        "question": "Do you know of anyone whose hobby is out of control and has gone too far?"
    },
    {
        "question": "What hobbies are based on certain seasons?"
    },
    {
        "question": "How many of the seven ancient wonders can you name? How many are left?"
    },
    {
        "question": "100 million votes were cast for the new human wonders of the world. The new seven wonders are:"
    },
    {
        "question": "Chichen Itzd, Mexico I Christ the Redeemer, Brazil I the Great Wall, China I Machu Picchu, Peru I Petra, Jordan I the Roman Colosseum, Italy I the Taj Mahal, India."
    },
    {
        "question": "Have you been to any of them or do you know someone who has been to one of the new Seven Wonders of the World??"
    },
    {
        "question": "What do you know about each one?"
    },
    {
        "question": "Which ones would you like to go to?"
    },
    {
        "question": "Why do you think people voted for these wonders?"
    },
    {
        "question": "Are there any you would add to this list of human made wonders?"
    },
    {
        "question": "Can you think of any wonders made in the last 50 years?"
    },
    {
        "question": "What are some of the human made wonders in your country?"
    },
    {
        "question": "If you could build another wonder of the world, what would it be?"
    },
    {
        "question": "Do you think it is a good idea for governments to fund \"wonders\" for their countries? Why or why not?"
    },
    {
        "question": "Which would you prefer to see, human wonders or natural wonders? Why?"
    },
    {
        "question": "What are some funny TV shows you enjoy?"
    },
    {
        "question": "Do you have any favorite comedians? Why are they so funny?"
    },
    {
        "question": "What kind of humor do you find the most funny?"
    },
    {
        "question": "Do your friends think you are funny?"
    },
    {
        "question": "Do you know any jokes? If you do, tell a few of them."
    },
    {
        "question": "Do you think that different cultures have different senses of humor?"
    },
    {
        "question": "What are some things that are funny across all cultures?"
    },
    {
        "question": "What is the funniest thing you have seen or heard this week?"
    },
    {
        "question": "What do you think the best medium (TV, books, music, etc.) for humor is?"
    },
    {
        "question": "Do you think that animals find things funny?"
    },
    {
        "question": "Who are the most popular singers or groups in your country?"
    },
    {
        "question": "What are some crazy examples of fans showing their love that you have heard of?"
    },
    {
        "question": "When do fans go too far?"
    },
    {
        "question": "Are there any groups that you are a huge fan of?"
    },
    {
        "question": "What were some of the groups that you really loved when you were younger?"
    },
    {
        "question": "Besides singers and groups who else is idolized?"
    },
    {
        "question": "Is it natural to idolize famous people? Why?"
    },
    {
        "question": "Do you want to be famous? Why or why not?"
    },
    {
        "question": "Why do teenagers idolize famous people more than other age groups?"
    },
    {
        "question": "Do you feel sorry for famous people being bothered by paparazzi or do you think it is part of their job?"
    },
    {
        "question": "What makes you unique?"
    },
    {
        "question": "Is it okay to look different from other people or should you look the same as other people?"
    },
    {
        "question": "What do you think when you see someone who looks very different?"
    },
    {
        "question": "If you went to a job interview with green hair, what do you think would happen?"
    },
    {
        "question": "If you see someone with a lot of tattoos what do you think of them?"
    },
    {
        "question": "Have you ever felt like a square peg in a round hole?"
    },
    {
        "question": "What are some things you do to blend in?"
    },
    {
        "question": "If you had to do one crazy thing to your appearance what would you do?"
    },
    {
        "question": "If you got a tattoo, what would it be?"
    },
    {
        "question": "Is everyone unique or are all humans basically the same?"
    },
    {
        "question": "Can intelligence be measured? If so, what is the best way to measure it? If not, why not?"
    },
    {
        "question": "What is the most intelligent animal?"
    },
    {
        "question": "Do you think that intelligence is only based on genetics or can a child's environment boost intelligence?"
    },
    {
        "question": "How intelligent do you think you are?"
    },
    {
        "question": "Why are very intelligent children born to parents who are not very intelligent?"
    },
    {
        "question": "Some people say that there are many geniuses born around the world but they can't reach their full potential because they live in a poor country. Do you agree?"
    },
    {
        "question": "What separates a person from being very intelligent and being a genius?"
    },
    {
        "question": "Do you think that we can create artificial intelligence?"
    },
    {
        "question": "If scientists could put a chip in your head that would make you twice as intelligent, would you have the surgery done?"
    },
    {
        "question": "Very intelligent people are often not very good at being social, why do you think this is?"
    },
    {
        "question": "Why are you learning English?"
    },
    {
        "question": "Do you enjoy learning English?"
    },
    {
        "question": "How much would you pay for a pill that instantly allows you to speak perfect English?"
    },
    {
        "question": "What is most difficult about learning English for you? What is easiest about learning English?"
    },
    {
        "question": "What is the best way to improve your speaking skill?"
    },
    {
        "question": "What is the best way to improve your listening, reading, and writing skills?"
    },
    {
        "question": "Are you nervous about making mistakes while speaking English?"
    },
    {
        "question": "How has learning English improved your life?"
    },
    {
        "question": "Should English be taught in public schools? If so, how should it be taught?"
    },
    {
        "question": "English is often used as a common language between two people who speak different languages. Is there a language that would be better to use as a common language?"
    },
    {
        "question": "Do you consider yourself to be lucky or unlucky?"
    },
    {
        "question": "Do you have any good luck charms?"
    },
    {
        "question": "Does your country have any superstitions about bad luck? For example, what causes bad luck?"
    },
    {
        "question": "What about good luck? How can someone improve their luck?"
    },
    {
        "question": "Do you think some people are just born lucky?"
    },
    {
        "question": "What are some idioms about luck in your country?"
    },
    {
        "question": "Do you know of anyone who has a lot of good luck? How about someone who is really unlucky?"
    },
    {
        "question": "Do you believe in luck or do you think it's all just chance?"
    },
    {
        "question": "Some people believe that the harder you work, the luckier you are. Do you agree or disagree?"
    },
    {
        "question": "Why do you think so many athletes have good luck rituals?"
    },
    {
        "question": "What is one luxury item you really want to have?"
    },
    {
        "question": "Do developed countries focus too much on luxury items?"
    },
    {
        "question": "What do you think is the most popular luxury item in your country? Who is it made by?"
    },
    {
        "question": "What is the craziest example of a luxury item you have heard of?"
    },
    {
        "question": "Have you ever been jealous that someone had something you didn't?"
    },
    {
        "question": "Do you think that luxury goods make people happy? Why or why not?"
    },
    {
        "question": "What do you think expensive perfume is made from?"
    },
    {
        "question": "What is something that you can spend money on that will make you happy? How long will it make you happy for?"
    },
    {
        "question": "Who are the best electronics made by?"
    },
    {
        "question": "Do brand name prices mean great quality?"
    },
    {
        "question": "Which types of products must have brand names if you are going to buy them?"
    },
    {
        "question": "How often do you spend money on things you know you shouldn't? What kind of things do you buy?"
    },
    {
        "question": "Who  are the most expensive cars made by?"
    },
    {
        "question": "Are rich people really happier?"
    },
    {
        "question": "What are some examples of bad manners on the bus?"
    },
    {
        "question": "What are some examples of good manners on the subway?"
    },
    {
        "question": "What are some examples of bad manners that you HATE?"
    },
    {
        "question": "Do you think people are more polite or less polite now than in the past?"
    },
    {
        "question": "Do you know someone who is often rude?"
    },
    {
        "question": "Can you think of some examples of how manners have changed in your country?"
    },
    {
        "question": "How are manners different in other countries?"
    },
    {
        "question": "How important is it to be polite to older people even though they are often rude?"
    },
    {
        "question": "What is something that isn't considered rude but should be?"
    },
    {
        "question": "When someone is rude in a public place, do you say something or try to ignore the person?"
    },
    {
        "question": "Has medicine ever saved your life?"
    },
    {
        "question": "What disease will be cured next by advances in medicine?"
    },
    {
        "question": "Do you think there will ever be a cure for ageing?"
    },
    {
        "question": "How could modern medicine be improved?"
    },
    {
        "question": "Who should pay for medicine when a person gets sick, the government, the sick person, or their workplace?"
    },
    {
        "question": "What do you think was the most important medicine ever discovered?"
    },
    {
        "question": "What do you think about gene therapy as medicine?"
    },
    {
        "question": "What will be the future of medicine?"
    },
    {
        "question": "What do you think of people who refuse to take modern medicine and will only use natural remedies?"
    },
    {
        "question": "Is there any medicine you can think of that has done more harm than good?"
    },
    {
        "question": "If you don't know your group very well, ask them some questions to get to know them."
    },
    {
        "question": "Do you like meeting new people? Why or why not?"
    },
    {
        "question": "What are some things that you usually talk about when you meet a new person?"
    },
    {
        "question": "If you see a handsome boy/ beautiful girl that you want to get to know, what is the best way to approach them?"
    },
    {
        "question": "Why don't strangers talk to each other as often as they used to?"
    },
    {
        "question": "Have you ever had a stranger come up and start talking to you? How did you respond?"
    },
    {
        "question": "Do you know any funny \"pick up lines\"?"
    },
    {
        "question": "Do you think that some people are destined to meet?"
    },
    {
        "question": "Where is the best place to meet new people?"
    },
    {
        "question": "Have you ever met someone you hated right after meeting them?"
    },
    {
        "question": "How good is your memory?"
    },
    {
        "question": "What is the best memory you have?"
    },
    {
        "question": "Who was your most memorable teacher? (Bad or good)"
    },
    {
        "question": "Do you have any strong memories linked to a particular smell?"
    },
    {
        "question": "How do you want people to remember you?"
    },
    {
        "question": "What do you wish you were better at remembering?"
    },
    {
        "question": "Are computers making our ability to remember better or worse? Give some examples."
    },
    {
        "question": "How much do you think memories change over time?"
    },
    {
        "question": "Why do you think some people remember the same events differently?"
    },
    {
        "question": "Is the ability to memorize lots of things important? Why or why not?"
    },
    {
        "question": "Are you good at saving money?"
    },
    {
        "question": "Do you think it's possible to have too much money?"
    },
    {
        "question": "How much money per month does someone need to live comfortably?"
    },
    {
        "question": "What do you think about the design of your country's money?"
    },
    {
        "question": "The world is slowly shifting from a cash based to an electronic based money system. Is this a good or bad thing?"
    },
    {
        "question": "Do you prefer to use cash or cards?"
    },
    {
        "question": "Paying with phones is also becoming more popular, is this better than cash or cards?"
    },
    {
        "question": "Do you trust banks?"
    },
    {
        "question": "Do you agree or disagree with the proverb \"Money is the root of all evil\"?"
    },
    {
        "question": "What are some of the advantages and disadvantages of a barter system versus money?"
    },
    {
        "question": "Howard Gardner created the theory of multiple intelligences. The theory says that there are 8 different types of intelligence:"
    },
    {
        "question": "Logical-mathematical, spatial, linguistic, bodily-kinesthetic, musical, interpersonal, intrapersonal, and naturalistic"
    },
    {
        "question": "Can you name two jobs that would be ideal for each intelligence category?"
    },
    {
        "question": "Which one do you think you would score highest for?"
    },
    {
        "question": "If you could choose one for your child to have, which one would you choose?"
    },
    {
        "question": "Which do think is the most likely to improve the world?"
    },
    {
        "question": "Which intelligence is the one that is usually thought of as the most important?"
    },
    {
        "question": "Which one is the least important?"
    },
    {
        "question": "Which intelligence is the hardest to measure? How about the easiest one to measure?"
    },
    {
        "question": "If you had people who each had high intelligence in one area, which would make the most money?"
    },
    {
        "question": "Do you think that people can be labeled a \"genius\" if they score very high for one of these intelligences?"
    },
    {
        "question": "Do you agree with Gardener's theory of multiple intelligences? Why or why not?"
    },
    {
        "question": "How many types of natural disaster can you name? Which is the worst?"
    },
    {
        "question": "What natural disasters are common in your country?"
    },
    {
        "question": "Have you ever been through a natural disaster? Tell your group about your experience if it isn't too traumatic."
    },
    {
        "question": "Think of three natural disasters. What can you do to stay safe during and after those natural disasters?"
    },
    {
        "question": "Do you know the difference between a hurricane, a typhoon, and a cyclone?"
    },
    {
        "question": "Which country has the most natural disasters?"
    },
    {
        "question": "Would you ever volunteer to help after a natural disaster hit? If yes, what would you like to volunteer to do? If not, why not?"
    },
    {
        "question": "How can technology lessen the damage caused by natural disasters?"
    },
    {
        "question": "Can natural disasters ever be a good thing?"
    },
    {
        "question": "What do you think about people who follow tornadoes around to get data, video and photographs?"
    },
    {
        "question": "Can you think of any country that doesn't have natural disasters?"
    },
    {
        "question": "What are the three most famous natural wonders in your country?"
    },
    {
        "question": "What natural wonders are in danger from climate change?"
    },
    {
        "question": "Should humans try to protect natural wonders? If humans protect natural wonders, are the wonders still natural?"
    },
    {
        "question": "Have you ever been to a natural wonder?"
    },
    {
        "question": "What makes something a natural \"wonder\"?"
    },
    {
        "question": "What are three natural wonders you would like to see before you die?"
    },
    {
        "question": "Should people be allowed to visit a natural wonder if the visitors hurt the natural wonder just by visiting it?"
    },
    {
        "question": "Do natural phenomena (i.e. the aurora borealis) count as natural wonders? How about things like thunderstorms?"
    },
    {
        "question": "Are natural disasters like volcanoes and earthquakes also natural wonders?"
    },
    {
        "question": "How many countries with natural wonders can you name? Which country do you think has the most natural wonders?"
    },
    {
        "question": "Would you rather visit natural wonders or manmade wonders?"
    },
    {
        "question": "Did you like your neighborhood where you grew up?"
    },
    {
        "question": "Where is the best place to eat in your city?"
    },
    {
        "question": "Where is there a lot of crime in your city?"
    },
    {
        "question": "What is the worst thing a neighborhood can have?"
    },
    {
        "question": "Where is the best place to shop in your city?"
    },
    {
        "question": "What did you think about your neighbors when you were growing up? Did you have any weird or odd neighbors?"
    },
    {
        "question": "What did you like most about the neighborhood you grew up in?"
    },
    {
        "question": "What kind of neighborhood do you want to raise your children in?"
    },
    {
        "question": "Do you think it should be the government's responsibility to clean up neighborhoods or are the people in the neighborhood responsible for cleaning it up?"
    },
    {
        "question": "What will neighborhoods be like in the future?"
    },
    {
        "question": "What do you think of your neighbors?"
    },
    {
        "question": "Is there anything that your neighbors do that annoys you?"
    },
    {
        "question": "Did you play with kids who were your neighbors when you were a kid? Do you still keep in contact with them?"
    },
    {
        "question": "Here is an idiom: \"Good fences make good neighbors\" What do you think it means? Do you agree?"
    },
    {
        "question": "Do you think that neighbors were friendlier to each other in past or are they friendlier now? Is this a good or bad thing?"
    },
    {
        "question": "Have you ever asked to borrow something from your neighbor? Has your neighbor ever borrowed anything?"
    },
    {
        "question": "What kind of person would be the perfect neighbor? Name at least three characteristics."
    },
    {
        "question": "How are countries that border each other similar to neighbors?"
    },
    {
        "question": "Do you trust your neighbors? Would you leave them a key to your house?"
    },
    {
        "question": "Think back in your life, who was your most memorable neighbor?"
    },
    {
        "question": "Who invented the number system we use today?"
    },
    {
        "question": "What do you know about the history of numbers?"
    },
    {
        "question": "Why are numbers so important?"
    },
    {
        "question": "What are the two most important numbers in the world?"
    },
    {
        "question": "Some people say that math is the language of the universe. Do you agree? Why or why not?"
    },
    {
        "question": "What is your favorite number? Why is it your favorite number?"
    },
    {
        "question": "What numbers are unlucky?"
    },
    {
        "question": "Should students be allowed to use calculators to do math in school or should they learn to do it without calculators first?"
    },
    {
        "question": "Do you know anything about the Fibonacci sequence?"
    },
    {
        "question": "What is the first thing you think of when you think of three?"
    },
    {
        "question": "Can two people fall in love over the internet without meeting each other first?"
    },
    {
        "question": "How acceptable is online dating in your country?"
    },
    {
        "question": "What are some of the good and bad things about online dating?"
    },
    {
        "question": "Do people lie or mislead people on social networks?"
    },
    {
        "question": "Do you know anyone who has tried online dating? How did it go?"
    },
    {
        "question": "Do you think online dating will get more or less popular?"
    },
    {
        "question": "Do you think that dating is better than arranged marriages?"
    },
    {
        "question": "How have smart phones changed online dating?"
    },
    {
        "question": "What are some popular online dating sites in your country?"
    },
    {
        "question": "What do you think about people who date on MMORPGs (Massively Multiplayer Online Roleplaying Games)?"
    },
    {
        "question": "What was something that you were really good at when you were a kid but aren't good at now?"
    },
    {
        "question": "What was something that you couldn't do at all when you were a kid but you can do really well now?"
    },
    {
        "question": "When you were younger could you play: Soccer, cards, baseball, a musical instrument, basketball? How good were you?"
    },
    {
        "question": "\"The older I get, the better I was.\" What does this idiom mean? Do you agree with it?"
    },
    {
        "question": "What was something you wished you could do when you were a child?"
    },
    {
        "question": "What are some childhood games you haven't played in many years?"
    },
    {
        "question": "What is something you wished you had learned when you were younger?"
    },
    {
        "question": "Ask your partner or group about what they could or couldn't do in the past."
    },
    {
        "question": "What is something that your parents did when they were children but your children won't be able to do?"
    },
    {
        "question": "What is something you can do now but probably won't be able to do once you get older?"
    },
    {
        "question": "Do you think police in your country have too much power or too little power?"
    },
    {
        "question": "Is anyone in your family a police officer?"
    },
    {
        "question": "What are the dangers of the police having too much power? How about the dangers of them having too little power?"
    },
    {
        "question": "Do you think that most police are honest or corrupt?"
    },
    {
        "question": "What kind of people become police officers?"
    },
    {
        "question": "Have you ever been helped by a police officer?"
    },
    {
        "question": "If you had enough police officers could you wipe out crime completely?"
    },
    {
        "question": "Who are more important to the public, regular police officers or detectives?"
    },
    {
        "question": "Have police been around since humans started living in cities? How have they changed over time?"
    },
    {
        "question": "Do police make you nervous or do they make you feel safe?"
    },
    {
        "question": "How involved should governments be in individuals' lives?"
    },
    {
        "question": "Are criminals ever NOT responsible for the crimes they commit?"
    },
    {
        "question": "What responsibilities do university students have? How about children or adults?"
    },
    {
        "question": "At what age do you think someone becomes responsible for his or her actions?"
    },
    {
        "question": "What should companies do to protect the environment?"
    },
    {
        "question": "How much responsibility should individuals have for protecting the environment?"
    },
    {
        "question": "Who has more responsibility for the environment, companies or individuals?"
    },
    {
        "question": "What are some of your responsibilities?"
    },
    {
        "question": "Who is responsible for taking care of the poor?"
    },
    {
        "question": "Do you enjoy having responsibilities? Why or why not?"
    },
    {
        "question": "What is your favorite restaurant near where you live?"
    },
    {
        "question": "What is the best restaurant you have ever eaten at?"
    },
    {
        "question": "What types of foreign food restaurants have you eaten at?"
    },
    {
        "question": "Have you ever eaten at a restaurant abroad? What was it like?"
    },
    {
        "question": "What (besides good food) makes a restaurant great?"
    },
    {
        "question": "Do you prefer to eat at your parents' house or a restaurant?"
    },
    {
        "question": "What is the worst restaurant you have eaten at?"
    },
    {
        "question": "What is the strangest restaurant you have heard of?"
    },
    {
        "question": "How do you feel about theme restaurants?"
    },
    {
        "question": "Do you prefer darker or brighter interiors for restaurants? Why?"
    },
    {
        "question": "When is the average retirement age in your country?"
    },
    {
        "question": "When do you want to retire?"
    },
    {
        "question": "What do you plan to do when you retire?"
    },
    {
        "question": "What do retired people do once they retire?"
    },
    {
        "question": "Should the government, family, or the person retiring be responsible for a retired person?"
    },
    {
        "question": "In your country what happens to retired people who can't take care of themselves?"
    },
    {
        "question": "Where would you like to live once you retire?"
    },
    {
        "question": "How do people save money for retirement in your country?"
    },
    {
        "question": "Is it important to stay busy once you retire? Why or why not?"
    },
    {
        "question": "Are you looking forward to retirement or would you prefer to keep working?"
    },
    {
        "question": "What is your favorite season?"
    },
    {
        "question": "What do you think of when you think of winter?"
    },
    {
        "question": "What are some things your family did when you were a child in spring?"
    },
    {
        "question": "What is the worst season in your country?"
    },
    {
        "question": "Does it snow in your hometown in the winter? Did you make snowmen when you were younger?"
    },
    {
        "question": "What is your favorite thing to do in summer?"
    },
    {
        "question": "What festivals or celebrations does your country have during the changing of the seasons?"
    },
    {
        "question": "Do you ever go hiking when the leaves change in fall?"
    },
    {
        "question": "Where is the best place to be in summer? How about winter?"
    },
    {
        "question": "Does your country have a special food for any of the seasons?"
    },
    {
        "question": "How\tcan science help society? Does it hurt society in any way?"
    },
    {
        "question": "What is the most important field of science? (Physics, chemistry, engineering, etc.) Why?"
    },
    {
        "question": "Did you have any really great science teachers when you were a child or when you were in university?"
    },
    {
        "question": "Should governments help fund science?"
    },
    {
        "question": "What was the most important scientific discovery in the last 50 years?"
    },
    {
        "question": "Think about your daily life, how do scientific discoveries affect your daily life?"
    },
    {
        "question": "Should funding be given more to theoretical science or practical science, or should they be funded equally?"
    },
    {
        "question": "Name some of the scientists you know of and what they are famous for."
    },
    {
        "question": "What are some things that scientists in your country have invented or discovered?"
    },
    {
        "question": "Which scientific discovery has improved people's lives the most?"
    },
    {
        "question": "What are some sports you like watching? Why?"
    },
    {
        "question": "What are some sports you dislike watching? Why?"
    },
    {
        "question": "Do you play any sports? If so, which ones?"
    },
    {
        "question": "Would you like to learn how to play a sport or do an activity? What would you like to learn?"
    },
    {
        "question": "Why are sports so popular?"
    },
    {
        "question": "Do you know of any interesting or strange sports or activities?"
    },
    {
        "question": "What two sports would you like to mix?"
    },
    {
        "question": "Do you prefer to watch sports or play them? Why?"
    },
    {
        "question": "What do you think is the most dangerous sport?"
    },
    {
        "question": "What do you think of athletes making so much money? Is it a good thing or a bad thing?"
    },
    {
        "question": "How stressed are you? Why?"
    },
    {
        "question": "How do you relieve stress?"
    },
    {
        "question": "What are some other ways people relieve stress?"
    },
    {
        "question": "Do you think people are more stressed now than in the past? Why or why not?"
    },
    {
        "question": "What is the most stressful thing you can imagine?"
    },
    {
        "question": "What could someone do to live a stress free life?"
    },
    {
        "question": "When are you least stressed?"
    },
    {
        "question": "How bad is stress for your health?"
    },
    {
        "question": "Is stress sometimes good for people? Why or why not?"
    },
    {
        "question": "How much stress should children have as they are growing up?"
    },
    {
        "question": "Talk about how technology has changed in your lifetime."
    },
    {
        "question": "What do you think has been the most important new invention in the last 100 years?"
    },
    {
        "question": "Are there any new gadgets that you really want to get?"
    },
    {
        "question": "What do you think will be the next biggest technological advance?"
    },
    {
        "question": "How can countries help to create more inventors?"
    },
    {
        "question": "What is your favorite piece of technology that you own?"
    },
    {
        "question": "How will computers change in the future?"
    },
    {
        "question": "Do you think there will be more or less new innovation in the future?"
    },
    {
        "question": "Is there a piece of technology that you really want that doesn't exist? (Flying cars, teleportation, etc.)"
    },
    {
        "question": "Give some examples of technology that has made the world worse."
    },
    {
        "question": "What do you think is the most important thing that humans have created?"
    },
    {
        "question": "Do you think that people will travel outside of our solar system? How will they get there?"
    },
    {
        "question": "Do you like new gadgets or do you prefer to use technology you are comfortable with?"
    },
    {
        "question": "What are the possibilities of technology in clothing?"
    },
    {
        "question": "Is it customary to tip in your country? If so, when should people tip? If not, should people start tipping?"
    },
    {
        "question": "Does tipping actually improve the service you get?"
    },
    {
        "question": "What is a reasonable amount to tip a waiter? How about a taxi driver?"
    },
    {
        "question": "In which countries is it customary to tip? How about countries where it isn't customary?"
    },
    {
        "question": "Do you like tipping or dislike tipping? Why?"
    },
    {
        "question": "Talk about a time you felt like you had to tip someone when you didn't want to."
    },
    {
        "question": "Who deserves a tip but doesn't get one?"
    },
    {
        "question": "How do you think tipping started?"
    },
    {
        "question": "When you travel to a country do you follow the local customs or your country's customs when you decide whether to tip or not?"
    },
    {
        "question": "Who do you wish you didn't have to tip?"
    },
    {
        "question": "What are the biggest transitions in an average person's life?"
    },
    {
        "question": "What stage of life were you most happy to move away from?"
    },
    {
        "question": "Which was better for you, elementary school, junior high school or high school? Why?"
    },
    {
        "question": "Did you study hard in high school?"
    },
    {
        "question": "How would you change your life if you could?"
    },
    {
        "question": "Starting university was a big transition. What are some of the good things about starting university? What are some of the bad things?"
    },
    {
        "question": "One of the biggest transitions for people is marriage. What are some of the good and bad things about marriage?"
    },
    {
        "question": "How will your life change after you have children? If you have children, how has your life changed?"
    },
    {
        "question": "What do you think are the biggest transitions in a person's life? Which is the most important?"
    },
    {
        "question": "What kinds of problems did you have when you went from elementary school to junior high?"
    },
    {
        "question": "When does a child become an adult?"
    },
    {
        "question": "Did you or do you enjoy going to university?"
    },
    {
        "question": "Some people say that the connections you make in university are more important than the education you receive. Do you agree or disagree?"
    },
    {
        "question": "Many universities are putting classes online for free. How will this change education?"
    },
    {
        "question": "Should a university education be free?"
    },
    {
        "question": "What do you think about the university system in your country?"
    },
    {
        "question": "Do you think a master's degree is worth the time and money? How about a PhD?"
    },
    {
        "question": "What is the top university in your country? Why is it considered the best?"
    },
    {
        "question": "What are the best degrees for job security?"
    },
    {
        "question": "Do people need degrees to be successful? Can you think of people who are successful who don't have a degree?"
    },
    {
        "question": "Many people are getting fake degrees or degrees from fake online universities. Will this have an effect on the job market and education? If so, what will the effect be?"
    },
    {
        "question": "How much water do you drink every day?"
    },
    {
        "question": "How many glasses of water should people drink every day?"
    },
    {
        "question": "How long can a person live without drinking any water? How long have you gone without drinking anything?"
    },
    {
        "question": "Can you swim? How often do you go swimming?"
    },
    {
        "question": "Where is a good place to go swimming near here?"
    },
    {
        "question": "Try to name 10 water sports."
    },
    {
        "question": "Not being able to get clean drinking water is a big problem in many places. What are some ways we can help people get clean drinking water?"
    },
    {
        "question": "Think of the biggest river in your country. How polluted is it? Would you swim in it?"
    },
    {
        "question": "Where does the biggest city in your country get its clean water from?"
    },
    {
        "question": "The world's population is increasing rapidly. Getting clean water for everyone might become difficult in the future. Think of three ways we can avoid this problem."
    },
    {
        "question": "If you could have three wishes that would come true, what would they be? (No, you can't wish for more wishes.)"
    },
    {
        "question": "What do you wish you could change about the world?"
    },
    {
        "question": "Many cultures throw things into water (like a fountain) and make a wish. Why do you think people do that?"
    },
    {
        "question": "What do you wish you could do after this class?"
    },
    {
        "question": "What do you wish you could eat right now?"
    },
    {
        "question": "What do you wish would happen today?"
    },
    {
        "question": "When do people make wishes in your culture? (Shooting star, birthday, etc.)"
    },
    {
        "question": "Have any of your wishes ever come true?"
    },
    {
        "question": "Do you ever wish you could travel back in time?"
    },
    {
        "question": "What do you wish you had right now?"
    }
];

export default topics;