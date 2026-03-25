window.TUTORIAL_CONTENT = {
  modules: [
    {
      id: 1,
      title: "From Idea to Reality",
      videoFile: "videos/module1.mp4",
      youtubeId: "-smQkIhWegM",
      duration: "11:37",
      description: "Learn the fundamentals of AI image creation. Create your first custom images with prompts, reference photos, and discover how to place yourself anywhere in the world.",
      sections: [
        {
          id: "m1-intro",
          title: "Introduction & Course Overview",
          timeStart: 0,
          content: `<p>Welcome to <strong>Dream Big With AI</strong>, a beginner-friendly 4-part course for anyone new to AI. Whether you've never used an AI tool before, this is the right place for you.</p>

<p>Your goal: <strong>create one personal ideal moment for 2026</strong>. By the end of Module 4, you'll have transformed a vision into a professional-quality video.</p>

<p>Here's what you'll learn:</p>
<ul>
<li><strong>Module 1:</strong> Create custom images with AI prompts and reference photos</li>
<li><strong>Module 2:</strong> Master emotion and expression in your images</li>
<li><strong>Module 3:</strong> Animate static images into video</li>
<li><strong>Module 4:</strong> Assemble your complete 2026 Moment Video</li>
</ul>

<p>If you've wanted to express your creativity without technical barriers, AI is for you. It levels the playing field and lets you share your vision without judgment or special skills.</p>

<p>These modules focus on doing, not theory. You'll learn by creating. Let's start.</p>`
        },
        {
          id: "m1-overview",
          title: "Overview of OpenArt",
          timeStart: 166,
          content: `<p>For this tutorial project, we're going to create an AI video that features <em>you</em> as the main character. We're using the <strong>OpenArt</strong> platform (openart.ai) — a complete creative toolkit with everything you need.</p>

<p>OpenArt includes:</p>

<ul>
<li><strong>Image Generation:</strong> Create custom images from text prompts</li>
<li><strong>Video Generation:</strong> Animate images or generate video from text</li>
<li><strong>Story Maker:</strong> Create music videos and visual stories</li>
<li><strong>Audio Tools:</strong> Voice cloning and lip-sync</li>
</ul>

<p>This course focuses on image generation and video only. The other tools are there when you're ready to explore.</p>

<p>Note: The interface may change over time, but the core concepts stay the same. Once you understand image and video creation, you can work with any interface.</p>

<p>Let's start with the foundation: <strong>image generation</strong>. Master this, and everything else becomes natural.</p>`
        },
        {
          id: "m1-getting-started",
          title: "Getting Started With Image Creation",
          timeStart: 248,
          content: `<p>Let's create your first AI image. Open OpenArt and follow along.</p>

<p><strong>Step 1: Navigate to Image Creation</strong></p>
<p>Click <strong>Image > Create Image</strong>. You'll see your previous images (if any) and the creation workspace.</p>

<p>You'll see many settings here. Ignore them for now — they're advanced and not needed yet. Focus on uploading your photo and writing a prompt.</p>

<p><strong>Step 2: Choose an AI Model</strong></p>
<p>A model is the AI system that generates your images. Click <strong>Model</strong> to see options. Each model has different strengths. Many models support <strong>reference images</strong> — photos you upload to show the model how you want to look.</p>

<p>We use <strong>Seedream 4.5</strong> because it keeps your face consistent across images. That's crucial if you want the generated images to feel real.</p>

<p><strong>Step 3: Upload a Reference Image</strong></p>
<p>Upload one good photo of yourself — forward-facing, showing how you want to look. You can upload up to 14 images, but start with one.</p>

<p>Click the reference area and select a file, or drag and drop an image onto the box.</p>`
        },
        {
          id: "m1-prompting",
          title: "Basic Prompting & Aspect Ratio",
          timeStart: 388,
          content: `<p>Now write your <strong>prompt</strong>. Tell the model: WHO, WHERE, and WHAT.</p>

<ul>
<li><strong>WHO:</strong> Who is in the image?</li>
<li><strong>WHERE:</strong> Where are they?</li>
<li><strong>WHAT:</strong> What are they doing?</li>
</ul>

<p>Example: <em>"The man is outside a nightclub sitting on a blue and purple sports car."</em></p>

<p>Simple, direct, specific enough to guide the model but not so detailed you lose flexibility.</p>

<p><strong>Output Settings</strong></p>
<ul>
<li><strong>Aspect Ratio:</strong> Choose <strong>Widescreen</strong> for full-screen video. Square works for social media.</li>
<li><strong>Number of Images:</strong> Set to <strong>4</strong> to get variations to choose from.</li>
<li><strong>Resolution:</strong> Leave at <strong>2K</strong> — good quality without huge files.</li>
</ul>

<p><strong>Generate!</strong></p>
<p>Click <strong>Create</strong>. It takes a few seconds. You'll see results with your face and the scene you described.</p>

<p><strong>Refine Your Prompt</strong></p>
<p>Change one thing (like <em>"add a blue and purple tuxedo"</em>) and click Create again. The model generates new images with your updated idea while keeping your face consistent.</p>`
        },
        {
          id: "m1-reference",
          title: "Using Reference Images Effectively",
          timeStart: 356,
          content: `<p>Reference images are powerful. Upload a photo, and the model learns your likeness and includes it in every generated image.</p>

<p><strong>Build a Reference Library</strong></p>
<p>Keep several headshots ready. Include different hairstyles, facial hair, or makeup you like — or even photos of other people if you want to generate them too. You can upload up to 14 images and pick which one to use for each generation.</p>

<p><strong>Different References = Different Looks</strong></p>
<p>Each reference photo produces different results. A photo with beard looks different than clean-shaven. A happy expression differs from a neutral one. Choose the reference that matches how you want to look for that specific image.</p>

<p><strong>Best Reference Qualities</strong></p>
<ul>
<li><strong>Forward-facing:</strong> Face to camera — this gives the model the clearest data</li>
<li><strong>Good lighting:</strong> Your face should be clearly visible</li>
<li><strong>Your desired look:</strong> The expression and styling in the reference will show up in generated images</li>
</ul>

<p>Start with one good photo. You can add more later as you experiment.</p>`
        },
        {
          id: "m1-nano-banana",
          title: "Testing Different Models: Seedream vs. Nano Banana Pro",
          timeStart: 490,
          content: `<p>We recommend <strong>Seedream 4.5</strong> for consistent facial likeness, but other models exist. Try <strong>Nano Banana Pro</strong> to see the difference.</p>

<p><strong>How to Test a Different Model</strong></p>
<p>Click an image you generated. Click <strong>Reuse Settings</strong> — it loads your original prompt, reference, and model. Switch the model to Nano Banana Pro and click Create.</p>

<p><strong>Compare Results</strong></p>
<p>You'll see a very different artistic result. The face may be more stylized or distorted. Each model has different strengths. Seedream 4.5 excels at realistic faces. Other models excel at different things.</p>

<p><strong>Choose What Works For You</strong></p>
<p>Test models and pick what appeals to you. There's no single "best" model — only the best model for your vision.</p>`
        },
        {
          id: "m1-locations",
          title: "Changing Locations & Camera Instructions",
          timeStart: 551,
          content: `<p>Change locations and scenarios just by changing your prompt.</p>

<p><strong>Example 1: On Stage with a Band</strong></p>
<p>Try: <em>"The man is on stage with a band playing the ukulele."</em> Your face and expression stay consistent. (We'll add emotion control in Module 2.)</p>

<p><strong>Example 2: Add Camera Instructions</strong></p>
<p>Be specific about the shot: <em>"Close-up of the man in snowy woods sipping hot cocoa on a log cabin deck, wearing a cozy parka."</em></p>

<p>In seconds, you have four versions of yourself in that moment.</p>

<p><strong>Camera Angle Changes</strong></p>
<p>Change one word: swap <em>"close-up"</em> for <em>"wide shot"</em>. The camera pulls back, showing surroundings, but you're still sipping cocoa wearing a parka. One word = completely different composition.</p>

<p>Prompting is simple: describe the person, location, and action. No magic, no rocket science.</p>`
        },
        {
          id: "m1-homework",
          title: "Module 1 Homework: Your First Images",
          timeStart: 614,
          content: `<p><strong>Your Assignment:</strong></p>
<p>Generate at least three images of yourself in different locations that interest you. Use Seedream, upload a reference photo, write prompts, and create.</p>

<p><strong>Experiment:</strong></p>
<ul>
<li>Try different clothing and lighting</li>
<li>Play with different prompts and reference images</li>
<li>You can't break anything — you either like the results or you refine and try again</li>
</ul>

<p><strong>What's Next?</strong></p>
<p>Module 2 adds emotional depth to your images. You'll create before-and-after transformations and learn to bring feeling to your shots. Have fun creating!</p>`
        }
      ]
    },
    {
      id: 2,
      title: "Transform With Emotion & Expression",
      videoFile: "videos/module2.mp4",
      youtubeId: "KX4hiMLHiok",
      duration: "9:13",
      description: "Bring your images to life by adding emotion and expression. Learn to use reference images strategically, create emotional transformations, and build the foundation for visual storytelling.",
      sections: [
        {
          id: "m2-intro",
          title: "Introduction & Welcome Back",
          timeStart: 0,
          content: `<p>Welcome to <strong>Module 2: Transform With Emotion & Expression</strong>.</p>

<p>If you completed Module 1, you have images of yourself in different locations. Great start. But images alone don't capture what matters: <strong>feeling</strong>. A memorable image has emotion in the eyes and expression. A powerful moment has authentic feeling.</p>

<p>Module 2 teaches you to transform your images from nice-looking to <strong>emotionally compelling</strong>. You'll learn to add depth, feeling, and humanity. By the end, you'll have before-and-after emotional transformations that tell a story through expression.</p>`
        },
        {
          id: "m2-homework-review",
          title: "Homework Check-In & Setting Expectations",
          timeStart: 56,
          content: `<p>Quick check-in on Module 1 homework.</p>

<p><strong>Completed?</strong> You should have:</p>
<ul>
<li>At least one reference image uploaded</li>
<li>Multiple prompts using the WHO/WHERE/WHAT structure</li>
<li>At least 3 generated images in different scenarios</li>
<li>A feel for how the tools work</li>
</ul>

<p><strong>Still working on it?</strong> No rush. Finish Module 1 homework first — it builds the foundation you need for this module.</p>

<p><strong>What's Next</strong></p>
<p>Module 2 adds emotional depth. You'll move from "me in a cool place" to "me feeling something real." That shift makes images unforgettable.</p>

<p><a href="#" class="video-link" data-module="2" data-time="56">▶ Watch Homework Check-In (0:56)</a></p>`
        },
        {
          id: "m2-emotion-expression",
          title: "The Power of Emotion & Expression",
          timeStart: 104,
          content: `<p>Why does emotion matter in visual storytelling?</p>

<p><strong>The Problem</strong></p>
<p>AI images can look technically perfect but feel emotionally flat. A smile doesn't feel genuine. Eyes don't sparkle. Posture doesn't convey confidence or vulnerability. That's because <strong>emotion is hard for AI without guidance</strong>.</p>

<p><strong>The Solution</strong></p>
<p>Add emotion words to your prompts. This tells the AI how to render your face, posture, and presence.</p>

<p>Compare:</p>
<ul>
<li><em>"Close-up of the man in a photo studio"</em> (neutral, flat)</li>
<li><em>"Close-up of the man in a photo studio, pensive expression"</em> (thoughtful, introspective)</li>
</ul>

<p>One word changes everything. Emotion words guide the AI toward authentic feeling.</p>

<p><strong>Why This Matters</strong></p>
<p>Your 2026 Moment video will be powerful because it shows emotional progression — not just locations, but feelings. That transforms a cool video into a meaningful one.</p>

<p><a href="#" class="video-link" data-module="2" data-time="104">▶ Watch Emotion & Expression (1:44)</a></p>`
        },
        {
          id: "m2-expression-prompts",
          title: "Creating Variations With Emotion Words",
          timeStart: 164,
          content: `<p>Create emotional variations by swapping emotion words while keeping everything else the same.</p>

<p><strong>Start With a Base Prompt</strong></p>
<p>Use: <em>"Close-up man posing for portrait in photo studio with a pensive expression."</em> Generate 4 images and pick your favorite.</p>

<p><strong>Swap the Emotion Word</strong></p>
<p>Keep the rest identical. Try these variations:</p>

<ul>
<li><strong>Pensive:</strong> thoughtful, looking away</li>
<li><strong>Confident:</strong> assured, direct gaze</li>
<li><strong>Worried:</strong> realistic concern in the face</li>
<li><strong>Laughing:</strong> genuinely joyful</li>
<li><strong>Crying:</strong> emotional, with tears</li>
</ul>

<p><strong>What You'll See</strong></p>
<p>Each emotion word shifts:</p>
<ul>
<li>Eye focus and gaze direction</li>
<li>Mouth position</li>
<li>Eyebrow position</li>
<li>Overall authentic feeling — not cartoonish</li>
</ul>

<p>This is the foundation of emotional storytelling. Chain emotions together to create a visual narrative arc.</p>

<p><a href="#" class="video-link" data-module="2" data-time="164">▶ Watch Expression Prompts (2:40)</a></p>`
        },
        {
          id: "m2-editing-existing",
          title: "Editing Existing Images as References",
          timeStart: 294,
          content: `<p>Use your generated images as reference images to create emotional transformations with identical composition.</p>

<p><strong>The Workflow</strong></p>

<p><strong>Step 1: Pick an Image</strong></p>
<p>Take a generated portrait you love. This becomes your composition template.</p>

<p><strong>Step 2: Upload as Reference</strong></p>
<p>Drag it into the reference area. OpenArt now treats it as your template for composition and positioning.</p>

<p><strong>Step 3: Add Emotional Instructions</strong></p>
<p>Write a prompt that changes only the emotion:</p>

<p><em>"He is sad, looking off into the distance. Keep the position the same."</em></p>

<p>This tells the AI: keep the framing and composition, just change the emotion.</p>

<p><strong>Step 4: Generate and Compare</strong></p>
<p>Now you have:</p>
<ul>
<li><strong>Image A:</strong> Original expression</li>
<li><strong>Image B:</strong> New emotion, identical composition</li>
</ul>

<p>This is your before-and-after emotional transformation. Same person, same position, different feeling. Perfect for animating later.</p>

<p><a href="#" class="video-link" data-module="2" data-time="294">▶ Watch Editing Existing Images (4:54)</a></p>`
        },
        {
          id: "m2-multiple-references",
          title: "Using Multiple Reference Images (Omni Reference)",
          timeStart: 385,
          content: `<p><strong>Omni Reference</strong> lets you blend elements from multiple reference images into one creation.</p>

<p><strong>Why Use Multiple References?</strong></p>
<p>Say you want yourself holding a specific instrument, sitting on a particular car. You have:</p>
<ul>
<li>A reference photo of yourself (for your face)</li>
<li>A reference image of the car (for exact details)</li>
<li>A reference image of the instrument (not an AI guess)</li>
</ul>

<p>Multiple references let you show the AI exactly what you want instead of asking it to imagine three things correctly.</p>

<p><strong>How to Use It</strong></p>

<p><strong>Step 1: Upload Multiple References</strong></p>
<p>Drag 2-3 images into the reference section. OpenArt labels them "Image 1," "Image 2," etc.</p>

<p><strong>Step 2: Reference Them in Your Prompt</strong></p>
<p><em>"The man sitting on the car holds the instrument from image 2, showing pride and joy."</em></p>

<p>The AI understands: use your face, the car, the specific instrument, and render the emotion.</p>

<p><strong>Create Emotional Variations</strong></p>
<p>Use the same references but change only emotion:</p>

<p><em>"The man sitting on the car holds the instrument from image 2, showing disappointment."</em></p>

<p>Same setup and instrument, completely different emotion. This builds narrative in still images — perfect for animation in Module 3.</p>

<p><a href="#" class="video-link" data-module="2" data-time="385">▶ Watch Multiple References (6:25)</a></p>`
        },
        {
          id: "m2-homework",
          title: "Module 2 Homework: Create Your Emotional Arc",
          timeStart: 460,
          content: `<p><strong>Assignment: Create Before & After Emotional Transformation</strong></p>

<p>Create two images showing emotional progression:</p>

<ul>
<li><strong>"Before" Image:</strong> You waiting or uncertain — try hopeful, nervous, or anxious</li>
<li><strong>"After" Image:</strong> You achieving or receiving something — try joyful, relieved, or proud</li>
</ul>

<p><strong>How to Create This</strong></p>

<p><strong>Step 1: Create "Before" Image</strong></p>
<p>Prompt example: <em>"Man waiting outside a theater with an anticipatory expression, checking his watch"</em></p>

<p>Generate 4 images. Pick your favorite.</p>

<p><strong>Step 2: Create "After" Image</strong></p>
<p>Upload the "Before" image as a reference. Create the "After" version with the same composition but different emotion:</p>
<p><em>"Man standing in the same position but now joyful and grateful, having just received good news. Keep the position the same."</em></p>

<p>Generate and compare.</p>

<p><strong>What You're Learning</strong></p>
<ul>
<li>How to layer emotions into prompts</li>
<li>How to maintain composition while shifting feeling</li>
<li>How to tell a story in two images</li>
<li>The power of before-and-after progression</li>
</ul>

<p><strong>Bonus: Try Omni Reference</strong></p>
<p>Incorporate multiple elements from different reference images. This technique will be useful in Module 4.</p>

<p><strong>What's Next?</strong></p>
<p>Module 3 brings your emotional images to life with motion. Get ready to animate.</p>

<p><a href="#" class="video-link" data-module="2" data-time="460">▶ Watch Homework (7:40)</a></p>`
        }
      ]
    },
    {
      id: 3,
      title: "From Image to Motion With AI Video",
      videoFile: "videos/module3.mp4",
      youtubeId: "IQ1D5nF9m4o",
      duration: "15:36",
      description: "Learn to transform static images into dynamic videos using AI. Discover start/end frames, interpolation, and how to create smooth emotional transitions that bring your 2026 Moment to life.",
      sections: [
        {
          id: "m3-intro",
          title: "Introduction & Quick Recap",
          timeStart: 0,
          content: `<p>Welcome to <strong>Module 3: From Image to Motion With AI Video</strong>. This is where your images come alive.</p>

<p><strong>Recap:</strong></p>

<ul>
<li><strong>Module 1:</strong> You created custom images in different locations.</li>
<li><strong>Module 2:</strong> You added emotion — before-and-after transformations.</li>
</ul>

<p>Now: <strong>animate those images</strong>. Create smooth transitions that feel cinematic and real. By the end, you'll have videos showing your emotional journey — not just pictures, but a moving story.</p>

<p><a href="#" class="video-link" data-module="3" data-time="0">▶ Watch Intro (0:00)</a></p>`
        },
        {
          id: "m3-start-end-frames",
          title: "Understanding Start & End Frames",
          timeStart: 140,
          content: `<p>AI video creation starts with <strong>start and end frames</strong>.</p>

<p><strong>The Concept</strong></p>

<ul>
<li><strong>Start Frame:</strong> The first image</li>
<li><strong>End Frame:</strong> The final image</li>
<li><strong>The Magic:</strong> The AI creates all frames in between, animating a smooth transition</li>
</ul>

<p>This is called <strong>interpolation</strong>. The AI figures out how to animate naturally from start to end.</p>

<p><strong>Why This Matters</strong></p>
<p>Your Module 2 before-and-after emotional images are perfect start and end frames. Using them creates a visual journey showing emotional progression — not just a still image, but a moment unfolding.</p>

<p>OpenArt shows a preview of both frames before generating so you can confirm the transition you want.</p>

<p><a href="#" class="video-link" data-module="3" data-time="140">▶ Watch Start & End Frames (2:20)</a></p>`
        },
        {
          id: "m3-getting-started-video",
          title: "Getting Started With Image to Video",
          timeStart: 195,
          content: `<p>Create your first video using Image to Video with start and end frames.</p>

<p><em><strong>Note:</strong> "Image to Video" has been renamed "Frame to Video" in the updated OpenArt interface (early 2026). The steps below still apply — just look for "Frame to Video" in the menu.</em></p>

<p><strong>Step 1: Navigate to Video Tools</strong></p>
<p>Click <strong>Video > Image to Video</strong> (now called <strong>Frame to Video</strong>).</p>

<p><strong>Step 2: Upload Start Frame</strong></p>
<p>Upload your Module 2 "before" emotional image.</p>

<p><strong>Step 3: Upload End Frame</strong></p>
<p>Upload your Module 2 "after" emotional image. OpenArt now has your beginning and ending point.</p>

<p><strong>Step 4: Choose a Video Model</strong></p>
<p>For your first video, use <strong>Seedance 1.5 Pro</strong>. It handles start and end frames well.</p>

<p><strong>Step 5: Set Duration</strong></p>
<p>Start with 5-10 seconds. This gives the AI time to smoothly animate without rushing.</p>

<p><strong>Step 6: Generate</strong></p>
<p>Click Create. In a minute or two, you'll see a smooth video transitioning from start to end.</p>

<p><a href="#" class="video-link" data-module="3" data-time="195">▶ Watch Getting Started (3:15)</a></p>`
        },
        {
          id: "m3-video-models",
          title: "Exploring Different Video Models",
          timeStart: 310,
          content: `<p>Different AI video models have different strengths. Each was trained differently and has unique capabilities.</p>

<p><strong>Your Options</strong></p>

<p><strong>Seedance 1.5 Pro</strong></p>
<ul>
<li>Native audio generation</li>
<li>720p to 1080p</li>
<li>Smooth, intuitive transitions</li>
<li>Durations up to 12 seconds</li>
</ul>

<p><strong>Kling 2.6 (newer) & Kling 2.5</strong></p>
<ul>
<li>Different visual aesthetics and motion</li>
<li>Strong with emotional expressions</li>
<li>Kling 2.6 has enhanced capabilities</li>
<li>Kling 2.5 doesn't generate native audio</li>
</ul>

<p><strong>Veo 3 (newest)</strong></p>
<ul>
<li>Native audio generation</li>
<li>Cinematic quality</li>
<li>Advanced emotional handling</li>
<li>Smooth interpolation</li>
</ul>

<p><strong>How to Choose</strong></p>
<p>Test with your same frames on different models. Notice motion, visual style, and audio. Pick the one that feels right for your vision.</p>

<p><a href="#" class="video-link" data-module="3" data-time="310">▶ Watch Video Models (5:10)</a></p>`
        },
        {
          id: "m3-support-prompts",
          title: "Using Support Prompts to Guide Animation",
          timeStart: 538,
          content: `<p><strong>Support prompts</strong> (or guidance prompts) guide the AI's animation choices.</p>

<p><strong>What They Do</strong></p>
<p>A support prompt describes what happens during the transition between start and end frames. Without it, the AI guesses (sometimes adding unwanted camera movements). With it, you direct the animation.</p>

<p><strong>Example</strong></p>
<p>Start frame: You nervous on an empty stage</p>
<p>End frame: You confident, band behind you</p>

<p>Support prompt: <em>"The nervous man is joined by his bandmates who walk onto the stage. They begin to play and he relaxes, gaining confidence."</em></p>

<p>You've described what happens, the visual progression, and the story logic.</p>

<p><strong>How to Write Support Prompts</strong></p>

<ul>
<li><strong>Control Camera:</strong> "Camera holds steady on the man's face" (focus on emotion, not shaky camera)</li>
<li><strong>Describe Scene Changes:</strong> "Bandmates walk onto the stage"</li>
<li><strong>Add Emotional Arc:</strong> "The man relaxes and gains confidence"</li>
<li><strong>Note Timing:</strong> "The transition happens smoothly over the duration"</li>
</ul>

<p><strong>Key Rule:</strong> Your prompt should logically connect start and end frames. If your frames show nervous → confident, your prompt should explain how that happens.</p>

<p><strong>Test Different Prompts</strong></p>
<p>Keep frames identical. Change only the prompt. You'll see how the same images can tell different stories.</p>

<p><a href="#" class="video-link" data-module="3" data-time="538">▶ Watch Support Prompts (8:58)</a></p>`
        },
        {
          id: "m3-support-prompts",
          title: "Using Support Prompts to Guide Animation",
          timeStart: 538,
          content: `<p>Create transitions between radically different images for powerful visual storytelling.</p>

<p><strong>Breaking Physics</strong></p>
<p>Traditional film needs strict continuity. AI video doesn't. You can jump from indoors to desert without explanation.</p>

<p><strong>Example: Extreme Transition</strong></p>
<p>Start frame: You on a car drinking coffee in snowy cabin</p>
<p>End frame: You on a car on a desert highway at night</p>

<p>Completely different locations and lighting, but you're the constant. The AI animates the environment transformation while keeping you stable. The result feels surreal and metaphorical — perfect for an aspirational 2026 vision.</p>

<p><strong>Use Support Prompts to Guide</strong></p>
<p><em>"He puts down his coffee, stands up, and walks to his car. The cabin fades and he's driving on a desert highway at night."</em></p>

<p>Or embrace the dreamlike: <em>"Forget physics. Have fun."</em></p>

<p><strong>Creative Freedom</strong></p>
<p>Your 2026 Moment isn't limited by reality. Include impossible transitions, dreamlike sequences, and visual metaphors. Tell the story you want, not the one physics allows.</p>

<p><a href="#" class="video-link" data-module="3" data-time="788">▶ Watch Scene Transitions (13:08)</a></p>`
        },
        {
          id: "m3-radical-transitions",
          title: "Scene Transitions: Pushing the Boundaries",
          timeStart: 788,
          content: `<p>Create transitions between radically different images for powerful visual storytelling.</p>

<p><strong>Breaking Physics</strong></p>
<p>Traditional film needs strict continuity. AI video doesn't. You can jump from indoors to desert without explanation.</p>

<p><strong>Example: Extreme Transition</strong></p>
<p>Start frame: You on a car drinking coffee in snowy cabin</p>
<p>End frame: You on a car on a desert highway at night</p>

<p>Completely different locations and lighting, but you're the constant. The AI animates the environment transformation while keeping you stable. The result feels surreal and metaphorical — perfect for an aspirational 2026 vision.</p>

<p><strong>Use Support Prompts to Guide</strong></p>
<p><em>"He puts down his coffee, stands up, and walks to his car. The cabin fades and he's driving on a desert highway at night."</em></p>

<p>Or embrace the dreamlike: <em>"Forget physics. Have fun."</em></p>

<p><strong>Creative Freedom</strong></p>
<p>Your 2026 Moment isn't limited by reality. Include impossible transitions, dreamlike sequences, and visual metaphors. Tell the story you want, not the one physics allows.</p>

<p><a href="#" class="video-link" data-module="3" data-time="788">▶ Watch Scene Transitions (13:08)</a></p>`
        },
        {
          id: "m3-homework",
          title: "Module 3 Homework: Create Your First Videos",
          timeStart: 728,
          content: `<p><strong>Animate Your Emotional Arc</strong></p>

<p>Create 2-3 videos from your Module 2 emotional transformation images.</p>

<p><strong>Video 1: Before/After Transformation</strong></p>
<ul>
<li>Start Frame: Your "before" emotional image</li>
<li>End Frame: Your "after" emotional image</li>
<li>Model: Seedance 1.5 Pro</li>
<li>Duration: 9-10 seconds</li>
<li>Support Prompt (optional): Describe what happens during the transition and the emotional journey</li>
</ul>

<p>Watch the result. Notice how emotion shifts in real time.</p>

<p><strong>Video 2: Test Different Models</strong></p>
<p>Use the same frames and prompt, but generate with a different model (Kling 2.6 or Veo 3). Compare side-by-side. Which motion feels better to you?</p>

<p><strong>Video 3 (Optional): Radical Transition</strong></p>
<p>Create a video with two very different images and a creative support prompt. Experiment with impossible transitions. Have fun.</p>

<p><strong>What You're Learning</strong></p>
<ul>
<li>How start and end frames create smooth animation</li>
<li>How support prompts guide the story</li>
<li>How different models produce different results</li>
<li>The power of emotional arcs in motion</li>
</ul>

<p><strong>Pro Tip:</strong> Save your best videos. You'll use them in Module 4.</p>

<p><strong>What's Next?</strong></p>
<p>Module 4 assembles all your videos into a complete narrative. You'll add music, arrange clips on a timeline, and export your final 2026 Moment Video.</p>

<p><a href="#" class="video-link" data-module="3" data-time="728">▶ Watch Homework (12:08)</a></p>`
        }
      ]
    },
    {
      id: 4,
      title: "Bringing It All Together",
      videoFile: "videos/module4.mp4",
      youtubeId: "jonRSZO7-14",
      duration: "17:34",
      description: "Assemble your 2026 Moment Video using all techniques from Modules 1-3. Learn timeline editing, sequencing, music integration, and final export to create a professional-quality narrative video.",
      sections: [
        {
          id: "m4-intro",
          title: "Introduction & Full Recap",
          timeStart: 0,
          content: `<p>Welcome to <strong>Module 4: Bringing It All Together</strong>.</p>

<p><strong>Recap:</strong></p>

<ul>
<li><strong>Module 1:</strong> You created custom images in different locations.</li>
<li><strong>Module 2:</strong> You added emotional transformations.</li>
<li><strong>Module 3:</strong> You animated those images into videos.</li>
</ul>

<p>Now: assemble everything into your <strong>2026 Moment Video</strong>. A complete, produced narrative with beginning, middle, end, emotion, motion, and music. Something you'll be proud to share.</p>

<p><a href="#" class="video-link" data-module="4" data-time="0">▶ Watch Intro (0:00)</a></p>`
        },
        {
          id: "m4-image-to-video",
          title: "Working With Image to Video at Scale",
          timeStart: 107,
          content: `<p>Create multiple videos using the image-to-video process from Module 3, at scale.</p>

<p><em><strong>Note:</strong> "Image to Video" has been renamed "Frame to Video" in the updated OpenArt interface (early 2026).</em></p>

<p><strong>The Process</strong></p>
<p>Pick your best Module 1 images, pair them with Module 2 emotional transformations, and create videos from the transitions.</p>

<p>Example:</p>
<ul>
<li>Video 1: Boardroom, nervous to confident</li>
<li>Video 2: Stage, anxious to triumphant</li>
<li>Video 3: With loved ones, grateful to joyful</li>
</ul>

<p><strong>Quality Over Quantity</strong></p>
<p>3-5 strong video clips tell a compelling story. Focus on well-composed images, genuine emotions, and flowing transitions.</p>

<p><strong>Organize Your Assets</strong></p>
<p>Create a "2026 Moment" folder on your computer with:</p>
<ul>
<li>Generated images</li>
<li>Video files</li>
<li>Notes about which clips go where</li>
</ul>

<p>You'll need this for timeline editing.</p>

<p><a href="#" class="video-link" data-module="4" data-time="107">▶ Watch Image to Video (1:47)</a></p>`
        },
        {
          id: "m4-extending-clips",
          title: "Extending Video Clips for Storytelling",
          timeStart: 215,
          content: `<p>Extend video clips when they're too short for your story.</p>

<p><strong>Why Extend?</strong></p>
<p>Pacing matters. To let viewers absorb emotion, you might need 15-20 seconds per clip, not just 9-10.</p>

<p><strong>How It Works</strong></p>
<p>In OpenArt's Video menu, find the extend or continue option. Add frames to an existing video to stretch duration while keeping visual coherence.</p>

<p><strong>When to Use It</strong></p>
<ul>
<li>Let a clip breathe and viewers absorb emotion</li>
<li>Give time for music to play over footage</li>
<li>Create slow-motion effects (extended time feels slower)</li>
<li>Build rhythm and pacing in your overall video</li>
</ul>

<p><strong>Tip:</strong> Aim for 15-20 second clips. Don't extend too much — each extension adds processing time.</p>

<p><a href="#" class="video-link" data-module="4" data-time="215">▶ Watch Extending Clips (3:30)</a></p>`
        },
        {
          id: "m4-timeline-editor",
          title: "Introduction to the Timeline Editor",
          timeStart: 275,
          content: `<p>The <strong>timeline editor</strong> lets you arrange, sequence, and refine video clip timing.</p>

<p><strong>What It Is</strong></p>
<p>A visual representation of your video frame-by-frame. You see every clip, know exactly how long it lasts, and adjust things precisely.</p>

<p><strong>How to Open It</strong></p>
<p>In OpenArt's Video tools, click "Timeline Editor." You'll land in a traditional video editing interface.</p>

<p><strong>Basic Layout</strong></p>

<ul>
<li><strong>Timeline Track:</strong> Where your video clips sit end-to-end</li>
<li><strong>Preview Window:</strong> Shows what the video looks like at the current moment</li>
<li><strong>Playback Controls:</strong> Play, pause, scrub</li>
<li><strong>Properties Panel:</strong> Adjust clip properties (opacity, color, speed, etc.)</li>
</ul>

<p><strong>First Task: Drag and Drop</strong></p>
<p>Import your video clips. Drag them into story order. This is your narrative skeleton.</p>

<p><strong>The Power</strong></p>
<p>The timeline transforms raw clips into a coherent story. You're not just collecting — you're orchestrating. You control pacing, timing, and emotional flow.</p>

<p><a href="#" class="video-link" data-module="4" data-time="275">▶ Watch Timeline Editor (4:35)</a></p>`
        },
        {
          id: "m4-text-to-video",
          title: "Using Text to Video for Narrative Scenes",
          timeStart: 330,
          content: `<p>Generate video directly from text prompts — without starting images.</p>

<p><strong>When to Use It</strong></p>
<ul>
<li>Establish a scene without generating an image first</li>
<li>Create landscape or environment shots</li>
<li>Generate motion without reference images</li>
<li>Build narrative context showing where your character is</li>
</ul>

<p><strong>Example</strong></p>
<p>Instead of creating an image then converting to video, use text-to-video: <em>"A stunning sunset over a coastal city. Camera slowly pans to reveal a figure standing on a cliff overlooking the ocean."</em></p>

<p>You get a complete scene without intermediate steps.</p>

<p><strong>How to Use It</strong></p>
<p>Click Video > Text to Video. Write your prompt (use WHO/WHERE/WHAT). Select model and duration. Generate. In a minute or two, you have a clip.</p>

<p><strong>When to Use</strong></p>
<p>Perfect for opening scenes, transitions, and establishing shots that set context for your 2026 Moment.</p>

<p><strong>Tip:</strong> Use cinematic language. Think like a director describing a scene.</p>

<p><a href="#" class="video-link" data-module="4" data-time="330">▶ Watch Text to Video (5:30)</a></p>`
        },
        {
          id: "m4-creating-story-images",
          title: "Creating Images to Tell Your Story",
          timeStart: 370,
          content: `<p>Before editing, think about your story as a whole. What images do you need?</p>

<p><strong>Story Structure</strong></p>
<p>Every compelling story has a shape:</p>

<ul>
<li><strong>Beginning:</strong> The status quo and goal</li>
<li><strong>Middle:</strong> The journey and challenge</li>
<li><strong>End:</strong> Achievement and transformation</li>
</ul>

<p><strong>For Your 2026 Moment</strong></p>
<ul>
<li><strong>Opening Scene:</strong> You in the present, thinking about your goal</li>
<li><strong>Journey Scenes:</strong> You taking action, growing</li>
<li><strong>Climax Scenes:</strong> You achieving your goal</li>
<li><strong>Resolution Scenes:</strong> You transformed and fulfilled</li>
</ul>

<p><strong>Example: "I'm a Confident Public Speaker"</strong></p>
<ul>
<li><strong>Opening:</strong> You in a mirror (nervous but determined)</li>
<li><strong>Journey:</strong> You in a practice room (focused)</li>
<li><strong>Climax:</strong> You stepping onto a stage (nervous energy)</li>
<li><strong>Resolution:</strong> You on stage (confident, speaking to audience)</li>
</ul>

<p><strong>Generate Missing Images</strong></p>
<p>Use Modules 1 and 2 techniques — prompts, reference images, emotion words. Each image should move the story forward.</p>

<p><strong>Quality Check</strong></p>
<p>Before moving to video, verify your images feel coherent. Do they look like you? Do locations feel intentional? Do emotions feel genuine?</p>

<p><a href="#" class="video-link" data-module="4" data-time="370">▶ Watch Creating Story Images (6:10)</a></p>`
        },
        {
          id: "m4-start-end-motion",
          title: "Using Start & End Frames for Motion Sequences",
          timeStart: 614,
          content: `<p>Convert your story images to videos using start/end frames from Module 3.</p>

<p><strong>The Workflow</strong></p>

<p><strong>Step 1: Identify Emotional Transformations</strong></p>
<p>Which images show emotional shifts that need motion?</p>

<p>Examples:</p>
<ul>
<li>Nervous in green room → confident on stage</li>
<li>Uncertain about goal → fully embodying it</li>
</ul>

<p><strong>Step 2: Create Videos for Key Transitions</strong></p>
<p>Use image-to-video with emotional pairs as start and end frames. This animates your emotional arcs.</p>

<p><strong>Step 3: Create Videos for Standalone Images</strong></p>
<p>For images without before/after, use the same image as both start and end frame with a support prompt describing subtle motion:</p>

<p><em>"The man stands confidently, slight camera movement, ambient light shifts gently"</em></p>

<p>This adds subtle motion without radical transformation.</p>

<p><strong>The Power</strong></p>
<p>You're showing the journey within each moment, not just location but transformation.</p>

<p><strong>Your Video Library</strong></p>
<p>You should have:</p>
<ul>
<li>3-5 major video clips with emotional transformations</li>
<li>Optional: 2-3 establishing or transition videos</li>
<li>Optional: Text-to-video opening or closing scenes</li>
</ul>

<p><a href="#" class="video-link" data-module="4" data-time="614">▶ Watch Start & End Frames (10:14)</a></p>`
        },
        {
          id: "m4-post-production",
          title: "Post-Production: Arranging in the Timeline",
          timeStart: 850,
          content: `<p>Assemble all your video clips into a complete narrative using the timeline editor.</p>

<p><strong>Step 1: Import All Clips</strong></p>
<p>Open the timeline editor. Drag your video files into the project.</p>

<p><strong>Step 2: Arrange by Story Structure</strong></p>
<p>Order them: opening → journey → climax → resolution. This is your rough cut.</p>

<p><strong>Step 3: Trim and Adjust</strong></p>
<p>Trim clips to perfect length:</p>

<ul>
<li>Too long? Trim the end</li>
<li>Should start later? Adjust the in-point</li>
<li>Dead space? Remove it</li>
</ul>

<p><strong>Step 4: Add Transitions (Optional)</strong></p>
<p>Add subtle transitions between clips (fades, dissolves). Don't let effects overshadow content.</p>

<p><strong>Step 5: Adjust Pacing</strong></p>
<p>Watch your rough cut. Does it feel right? Adjust clip duration to control pacing. Slower = emotional impact. Faster = energy.</p>

<p><strong>Step 6: Color and Audio</strong></p>
<ul>
<li><strong>Color Grading:</strong> Adjust color tone for visual consistency</li>
<li><strong>Opacity:</strong> Fade clips in and out</li>
<li><strong>Audio Levels:</strong> Control volume (music comes next)</li>
</ul>

<p><a href="#" class="video-link" data-module="4" data-time="850">▶ Watch Post-Production (14:10)</a></p>`
        },
        {
          id: "m4-music-export",
          title: "Adding Music & Exporting Your Final Video",
          timeStart: 917,
          content: `<p>Add music and export your final video.</p>

<p><strong>Choosing Music</strong></p>
<p>Music sets the emotional tone. It should:</p>

<ul>
<li>Match your emotional arc (uncertain → triumphant)</li>
<li>Support pacing (fast for energy, slow for reflection)</li>
<li>Feel authentic to your vision</li>
</ul>

<p><strong>Where to Find Music</strong></p>
<ul>
<li>Browse royalty-free libraries in OpenArt</li>
<li>Generate music using OpenArt's audio tools</li>
<li>Upload your own music</li>
</ul>

<p><strong>Add Music to Timeline</strong></p>
<p>In the timeline editor, find the audio layer. Drag your music file there.</p>

<p><strong>Audio Mixing</strong></p>
<p>Balance video audio with music. Music should support without overwhelming. Let the visuals be primary.</p>

<p><strong>Optional: Narration</strong></p>
<p>Record your own voice telling your 2026 Moment story. Add it as another audio layer. This adds depth.</p>

<p><strong>Export Your Video</strong></p>

<ol>
<li>Confirm timeline is complete and plays correctly</li>
<li>Click <strong>Export</strong> or <strong>Download</strong></li>
<li>Choose settings:
<ul>
<li><strong>Resolution:</strong> 1080p (standard for online)</li>
<li><strong>Format:</strong> MP4 (universal)</li>
<li><strong>Frame Rate:</strong> 24fps or 30fps</li>
</ul>
</li>
<li>Click Export</li>
<li>Wait for processing (5-15 minutes)</li>
<li>Download your final video</li>
</ol>

<p><strong>You've Done It</strong></p>
<p>Your 2026 Moment Video is complete — a professional narrative of your vision. Something that would cost thousands to produce years ago. You created it.</p>

<p><a href="#" class="video-link" data-module="4" data-time="917">▶ Watch Music & Export (15:17)</a></p>`
        },
        {
          id: "m4-sharing-rewards",
          title: "Sharing Your 2026 Moment & Claiming Your Reward",
          timeStart: 1054,
          content: `<p>Your video is done. Now share it with the world.</p>

<p><strong>Share on Social Media</strong></p>

<ul>
<li><strong>Instagram:</strong> Perfect for short-form video (reels)</li>
<li><strong>TikTok:</strong> Great for inspiring content</li>
<li><strong>LinkedIn:</strong> For professional visions</li>
<li><strong>YouTube:</strong> For longer-form content</li>
<li><strong>Twitter/X:</strong> Quick shares</li>
<li><strong>Email:</strong> Friends and family</li>
</ul>

<p><strong>Tag OpenArt</strong></p>
<p>Tag <strong>@openart_ai</strong> when you share. The community loves creator work, and you might get featured.</p>

<p><strong>Celebrate</strong></p>
<p>Recognize what you've done: zero AI experience to professional video. You visualized your future and brought it to life. That's powerful.</p>

<p><strong>Claim Your 500 Credit Reward</strong></p>

<ol>
<li>Visit <strong>forms.openart.ai/2026moment</strong></li>
<li>Fill out the form with your details</li>
<li>Submit proof of completion (video screenshot, share link, etc.)</li>
<li>Get <strong>500 OpenArt credits</strong> for future generations</li>
</ol>

<p><strong>What's Next?</strong></p>
<p>This course is complete, but your creative journey continues. You can:</p>
<ul>
<li>Create custom images with AI</li>
<li>Tell emotional stories through visual transformation</li>
<li>Animate static images into dynamic videos</li>
<li>Edit and compose multi-clip narratives</li>
</ul>

<p>Keep creating. Keep pushing boundaries. Keep sharing your vision.</p>

<p><strong>Thank you for taking this course. Your 2026 Moment is just the beginning.</strong></p>

<p><a href="#" class="video-link" data-module="4" data-time="1054">▶ Watch Course Conclusion (17:34)</a></p>`
        }
      ]
    }
  ]
};
