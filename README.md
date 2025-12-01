![name.svg](img/name.svg)

---

My name is Christopher DeBoy, and I'm an aspiring game developer and graphic designer/artist. I'm most familiar with the Godot Game Engine and its GDScript scripting language, having worked with it for over 8 years and developed quite a few comprehensive systems in it. **If you're interested in hiring me, [feel free to reach out](https://8bitprodigy.github.io/#contact)**  

Here's a list of languages I'm most familiar with:

- GDScript
- C/C++
- Nim
- Python
- HTML5, CSS3, & JavaScript

Here are some links to my profiles:

- [Github Profile](https://github.com/8bitprodigy)
- [Codeberg Profile](https://codeberg.org/chris_deboy)
- [San Bernardino Operation on Codeberg](https://codeberg.org/San_Bernardino_Operation)
- [Itch.io](https://8bitprodigy.itch.io/)
- [LinkedIn](https://www.linkedin.com/in/christopher-deboy-0aa48278/)

**Portfolio Sections:**

- [Contact info](#contact)
- [Programming](#programming)
- [3D Art & Animation](#3d-art-amp-animation)
- [Graphic Design](#graphic-design)

---

# Contact

![contact.svg](img/contact.svg)

---

# Programming

---

### [Kolibri Engine](https://github.com/8bitprodigy/kolibri_engine)

<video id="kolibri_demo" controls>
        <source src="videos/kolibri_demo_0.mp4" type="video/mp4" />
</video>

This is a minimalist 3D game engine I wrote in C using raylib, weighing in at under 3,000 lines of code.
Its goals are education, hacking/modification, and lightweight but legitimate game development. By focusing only on the core essentials of what makes an engine, it stands apart from conventional engines that accumulate large feature sets.

Currently it includes:

- `Engine`: central loop management (run, pause, unpause, exit), coordinating all systems
- `Head`: couples a render surface with a camera and event callbacks
- `Entity system`: entities with behavior defined via callbacks
- `Scene interface`: generic dependency-injection model for different scene types
- `CollisionScene`: entity–entity collisions via spatial hashing
- `Renderer`: frustum culling (sphere–frustum) and eventually transparent object sorting

Each public-facing system exposes vtables for plugging in custom behaviors. This makes the engine suitable both for simple games and as a foundation for building more complete, specialized engines.

It's currently in alpha, but already demonstrates the core principles of game engine architecture in a compact, accessible way.

---

### [NERC](https://github.com/8bitprodigy/nerc)

NERC is a static site generator written in Nim — deliberately minimal, fast, and lightweight.
Unlike traditional web frameworks that rely on heavy interpreted runtimes, NERC takes an anti-framework approach: it’s compiled, nimble, and designed to get out of your way.
When run, it recursively scans the current directory, converts Markdown files into HTML, builds a navigation sidebar from the folder structure, and applies templates and styles inherited from parent directories.
I use it to generate sites hosted on GitHub (including this portfolio, minus the sidebar), and it can also be run directly on a web server to regenerate pages automatically when content is updated.

---

### [Face-Off!](https://github.com/8bitprodigy/Face-Off)

Face-Off is a simple clone of FaceBall 2000/Midi Maze developed for the Sega Dreamcast and Linux using raylib, with future plans for ports to platforms such as the Nintendo 64 and Sony PSP.
It is currently on hold while I focus on bringing the Kolibri Engine to a usable state, after which Face-Off will be transitioned to run on that engine. 
In the meantime, the project has already been a valuable prototype, teaching me a great deal about engine architecture and directly shaping Kolibri’s design.

---

### [Godot FPS Controller](https://github.com/8bitprodigy/WestMonster_FPS_Base)

<video id="fps_controller" controls>
        <source src="videos/fps_controller_1.mp4" type="video/mp4" />
</video>
<center>
        <a id="fps_1" href="#FPS_CONTROLLER" onclick="changeVideoSrc('fps_controller', 'fps_controller_1')">
                Demo 1
        </a>
         | 
        <a id="fps_2" href="#FPS_CONTROLLER" onclick="changeVideoSrc('fps_controller', 'fps_controller_2')">
                Demo 2
        </a>
         | 
        <a id="fps_3" href="#FPS_CONTROLLER" onclick="changeVideoSrc('fps_controller', 'fps_controller_3')">
                Demo 3
        </a>
</center>

This is a first-person shooter controller I built in the Godot engine. I’m proud of how it’s turning out — it already supports a wide range of movement and weapon systems:

- **Player movement**: walking, stair-stepping, crouching, leaning, sprinting, sneaking, jumping, swimming, and Source Engine–style ladder climbing
- **Camera feel**: speed-dependent head-bobbing
- **Weapons**: procedural sway, bobbing, and inertia; vertical/horizontal recoil; customizable accuracy and precision
- **Ballistics**: projectiles affected by gravity with trajectory fixed at fire time; accuracy affected by sustained fire and barrel overheating
- **Impact effects**: material-specific decals (wood splinters, metal dents, glass cracks, dirt craters, etc.)
- **Interaction system**: buttons, dials, doors, and gates with chainable inputs/outputs, inspired by the Source Engine

The goal is to capture the responsiveness and physicality of classic FPS mechanics while keeping the system highly extensible for new features.

---

### [6DOF Controller Demo](https://github.com/8bitprodigy/6DOF_Demo)

<video id="6dof_controller" controls>
        <source src="videos/6dof_demo_1.mp4" type="video/mp4" />
</video>
<center>
        <a id="6dof_1" href="#6DOF_CONTROLLER" onclick="changeVideoSrc('6dof_controller', '6dof_demo_1')">
                Demo 1
        </a>
         | 
        <a id="6dof_2" href="#6DOF_CONTROLLER" onclick="changeVideoSrc('6dof_controller', '6dof_demo_2')">
                Demo 2
        </a>
</center>

A spaceflight controller inspired by the classic Descent series, demonstrating full 3D movement and rotation systems. This networked multiplayer prototype showcases advanced physics programming and real-time synchronization.

**Features:**

- **Complete 6DOF Movement**: Full rotation and translation along all three axes
- **Realistic Physics**: Angular momentum and inertia modeling for authentic spaceflight feel  
- **Orientation-Relative Controls**: Movement directions based on ship orientation rather than world coordinates
- **Multiplayer Ready**: Networked player controllers with real-time synchronization
- **Space Environment**: Custom skybox for immersive testing

Built in Godot using GDScript. This project demonstrates my experience with complex 3D physics systems and networked multiplayer implementation.

---

### [Mech Controller Demo](https://github.com/8bitprodigy/mech_demo)

<video controls>
        <source src="videos/mech_controller.mp4" type="video/mp4" />
</video>

A mech piloting simulation that demonstrates complex vehicle control systems. This prototype showcases realistic mech movement and combat mechanics.

**Features:**

- **Independent Controls**: Legs and turret rotate separately, with a tank-style reticle showing their relative positions
- **Rate-Limited Aiming**: Turret rotation follows mouse movement direction with speed constraints, similar to Battlefield's vehicle aiming system
- **Authentic Movement**: Walking direction follows leg orientation, not camera view, creating a genuine mech piloting feel
- **Jetpack System**: Thruster-based flight mechanics for vertical mobility
- **Test Environment**: Skybox and infinite ground plane for movement testing

Built in Godot using GDScript. This project demonstrates my approach to creating alternative character controls and intuitive control schemes for complex mechanical systems.

---

### [RZZNNV2N](https://8bitprodigy.itch.io/rzznnv2n)

![RZZNNV2N.jpg](img/RZZNNV2N.jpg)

This is a simple challenge game I made, where you navigate a helicopter through a gauntlet of challenges, increasing in difficulty with each level. Made in Godot 2.X, it was a sequel to my prior game, [RZZNNVZN](https://8bitprodigy.itch.io/rzznnvzn), which was made in JavaScript using [MelonJS](https://melonjs.org/).

---

### Magical Girl FPS

<img id="MGIRL" src="3d/magical_girl.jpg" />
<center>
        <a id="mgirl_0" href="#MGIRL" onclick="changeImgSrc('MGIRL', '3d/magical_girl.jpg')">
                Mall hub level
        </a>
         | 
        <a id="mgirl_1" href="#MGIRL" onclick="changeImgSrc('MGIRL', '3d/magical_girl-0.jpg')">
                Firing
        </a>
         | 
        <a id="mgirl_2" href="#MGIRL" onclick="changeImgSrc('MGIRL', '3d/magical_girl-1.jpg')">
                After firing for a bit
        </a>
         | 
        <a id="mgirl_3" href="#MGIRL" onclick="changeImgSrc('MGIRL', '3d/magical_girl-3.jpg')">
                Some world models I had made
        </a>
         | 
        <a id="mgirl_4" href="#MGIRL" onclick="changeImgSrc('MGIRL', '3d/magical_girl_staff.jpg')">
                The heart wand
        </a>
</center>

This was a magical girl-themed FPS I was working on in Godot. Unfortunately, I'm unable to launch the project, so these images are all that I have of it. In this game, you could play as 3 different magical girls, each one having their own wand and movement mechanic. Movement mechanics were activated with the jump key while airborne.

**Wands:**

- **Ice Wand** - fires ice crystals like a shotgun
- **Earth Wand** - fires a stream of flower petals like a machine gun. As the wand fires, the stream of petals spirals outward.
- **Heart Wand** - Was to fire an explosive, but wasn't implemented yet.

**Movement types:**

- **Double Jump** - an extra jump in midair
- **Glide** - descent is slowed with increased horizontal movement
- **Dive** - accelerate for a short burst in the direction you're moving

---

### 3D Gauntlet-like

<img id="GAUNT" src="3d/3d_gauntlet_wiz_skelly.jpg" />
<center>
        <a id="gaunt_0" href="#GAUNT" onclick="changeImgSrc('GAUNT', '3d/3d_gauntlet_wiz_skelly.jpg')">
                Fighting Skeletons as the Wizard
        </a>
         | 
        <a id="gaunt_1" href="#GAUNT" onclick="changeImgSrc('GAUNT', '3d/3d_gauntlet_barbarian_ghosts.jpg')">
                Fighting ghosts as the Barbarian
        </a>
         | 
        <a id="gaunt_2" href="#GAUNT" onclick="changeImgSrc('GAUNT', '3d/3d_gauntlet.jpg')">
                Items
        </a>
         | 
        <a id="gaunt_3" href="#GAUNT" onclick="changeImgSrc('GAUNT', '3d/3d_gauntlet_potion.jpg')">
                Potion
        </a>
        </a>
</center>

This was a 3D Gauntlet-style game I was working on that the project seems to have been lost to time. I had a character select screen and a single level that you could play through complete with pickup items, unlockable doors, destroyable walls, items to pick up, enemies, and an exit. Unfortunately, these are the only two pictures of it I can find at the moment.

**UPDATE:** I have found the project files and put the models up under the public domain at [Itch.io](https://8bitprodigy.itch.io/public-domain-dungeon-themed-models)!

---

### [NRPNC](https://github.com/8bitprodigy/nrpnc)

![nrpnc.svg]( img/nrpnc.svg)

![nrpnc_screenshot.png]( img/nrpnc_screenshot.png)

This is an RPN (Reverse Polish Notation) calculator in Nim. It operates with a stack-based language with if/else statements, variables, and function declaration, which should, in theory, make it turing-complete.

---

### [N.U.T.E.](https://github.com/8bitprodigy/nute)

![nute_screenshot.png]( img/nute_screenshot.png)

The Nim Unstructured/Useless Text Editor. This is a line text editor I made as an exercise to learn Nim and make use of its built in types. It stores a document line by line in an AVL tree, and it makes editing the text document much like entering a program into an 80's microcomputer. To enter text, you type the number for its line, followed by a space, and then the text you wish to enter. If there's a line number collision, it replaces the old line, but if not, it's entered into the AVL tree, which then self-balances.

---

[AtlasWM](https://codeberg.org/San_Bernardino_Operation/AtlasWM)

![awm_logo.svg]( img/awm_logo.svg)

![awm_screenshot.png]( img/awm_screenshot.png)

This is the Atlas Window Manager. AtlasWM aims to be a lightweight, but featureful, and user-friendly window manager for X11, based on Joe's Window Manager (JWM), that only uses permissively-licensed code and libraries, as it will be the default window manager for AcephalOS and eventually PrometheusOS.  

Currently, I've replaced Cairo/libRSVG with [PlutoSVG](https://github.com/sammycage/plutosvg), and have enhanced the customizability of the motif theme to enable greater readability, and am currently working on replacing Pango/XFT with [libSchrift](https://github.com/tomolt/libschrift). I intend to extend its features, with some of the main ones being tababble windows, like in Haiku or FluxBox, and a global menu panel item.  

AtlasWM is currently in alpha stages, and most planned features are not yet implemented. Many things are likely subject to change, so it is not recommended for daily use.

---

### [GameBoy Color DVD Screensaver demo### ](https://8bitprodigy.github.io/)

<video controls>
        <source src="videos/gb_dvd_screensaver.mp4" type="video/mp4" />
</video>

This is a simple demo I made using GBDK to get familiar with the library. It features a DVD Video logo as a metasprite that bounces around the screen and changes color on collision.

---

### [GameBoy Roguelike](https://codeberg.org/chris_deboy/GameBoy_Roguelike)

<video controls>
        <source src="videos/gb_roguelike.mp4" type="video/mp4" />
</video>

This is a work-in-progress roguelike I've been working on for the GameBoy in C and GBDK. It's pretty early on, but the basic skeleton of dungeon generation is implemented.

---

## 3D Art & Animation

Some 3D models I've worked on, some of which are animated. This is an incomplete list.

---

### Glock 17

<img id="GLOCK" src="3d/glock/3qfl.png" alt="Rigged Glock 17 3D model I was working on in Blender, texture made in Inkscape and GIMP." />
<center>
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/3qfl.png')">
                3-Quarter front left
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/3qfr.png')">
                3-Quarter front right
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/3qrl.png')">
                3-Quarter rear left
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/3qrr.png')">
                3-Quarter rear right
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/front.png')">
                Front
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/rear.png')">
                Rear
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/side_l.png')">
                Left
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/side_r.png')">
                Right
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/locked_l.png')">
                Locked open, left
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/locked_r.png')">
                Locked open, right
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/under_slide.png')">
                Under slide
        </a>
         | 
        <a id="glock_1" href="#GLOCK" onclick="changeImgSrc('GLOCK', '3d/glock/Glock17.png')">
                Texture
        </a>
</center>

Rigged Glock 17 3D model I was working on in Blender, texture made in Inkscape and GIMP.

---

### The New Retro Show intro

<video id="tnrs_intro" controls>
        <source src="videos/newretro.mp4" type="video/mp4" />
</video>

Intro sequence I made for the YouTube channel [The New Retro Show](https://www.youtube.com/@thenewretroshow).

---

### Metal Jesus Rocks intro

<video id="mjr_intro" controls>
        <source src="videos/mjr_intro.mp4" type="video/mp4" />
</video>

An intro sequence I made for the YouTube channel [MetalJesusRocks](https://www.youtube.com/@MetalJesusRocks/). Unfortunately, I do not recall the video it was used in.

---

### Arm Cannon

<img id="SAMUS" src="3d/arm_cannon/animations.gif" alt="Samus Aran arm cannon I made for a Quake Mod I was working on." />
<center>
        <a id="samus_1" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/animations.gif')">
                Animations
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/3Q.png')">
                3-Quarter clay render
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/3QOpen.png')">
                3-Quarter clay render, open
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/fpView.png')">
                First person clay render
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/fpViewOpen.png')">
                First person clay render, open
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/front.png')">
                Front clay render
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/side.png')">
                Side clay render
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/top.png')">
                Top clay render
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/armCannonTex.png')">
                Texture
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/3QTex3.png')">
                3-Quarter textured
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/3QOpenTex3.png')">
                3-Quarter textured, open
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/fpViewTex3.png')">
                First person textured
        </a>
         | 
        <a id="samus_2" href="#SAMUS" onclick="changeImgSrc('SAMUS', '3d/arm_cannon/sideTex3.png')">
                Side textured
        </a>
</center>

Samus Aran arm cannon I made for a Quake Mod I was working on. Made using forward kinematics.

---

### Robot

<img id="ROBOT" src="3d/ROBOT_ANIM_C0.gif" alt="A robot model I created, inspired by some outdoor security cameras I saw around town." />
<center>
        <a id="robot_1" href="#ROBOT" onclick="changeImgSrc('ROBOT', '3d/ROBOT_ANIM_C0.gif')">
                Walking, ready
        </a>
         | 
        <a id="robot_2" href="#ROBOT" onclick="changeImgSrc('ROBOT', '3d/ROBOT_ANIM_D.gif')">
                Crouch-walking, ready
        </a>
         | 
        <a id="robot_3" href="#ROBOT" onclick="changeImgSrc('ROBOT', '3d/ROBOT_ANIM4.gif')">
                Walking, no gun
        </a>
</center>

A robot model I created, inspired by some outdoor security cameras I saw around my hometown. Makes uses of Forward and Inverse kinematics.

---

### Star Raiders

<img id="STAR" src="3d/MechWalk1.gif" alt="A mech model I made for a game a friend of mine and I had started." />
<center>
        <a id="star_1" href="#STAR" onclick="changeImgSrc('STAR', '3d/MechWalk1.gif')">
                Mech, Walking
        </a>
         | 
        <a id="star_2" href="#STAR" onclick="changeImgSrc('STAR', '3d/MechWalk.gif')">
                Mech, Walking, alternate view 1
        </a>
         | 
        <a id="star_3" href="#STAR" onclick="changeImgSrc('STAR', '3d/MechWalk0.gif')">
                Mech, Walking, alternate view 2
        </a>
         | 
        <a id="star_4" href="#STAR" onclick="changeImgSrc('STAR', '3d/hmv_pic3.png')">
                HMV
        </a>
         | 
        <a id="star_5" href="#STAR" onclick="changeImgSrc('STAR', '3d/tank_pic9.png')">
                Tank
        </a>
         | 
        <a id="star_6" href="#STAR" onclick="changeImgSrc('STAR', '3d/turret_1.png')">
                Sentry turret
        </a>
         | 
        <a id="star_7" href="#STAR" onclick="changeImgSrc('STAR', '3d/jet.jpg')">
                Jet with Texture
        </a>
</center>

Various models I made for a game I was working on with a friend called "Star Raiders"(Working title). Animated using forward kinematics.

---

### Various Guns

<img id="GUNS" src="3d/muziSnapTex.png" alt="A low-poly, stylized Micro-Uzi model I had created." />
<center>
        <a id="guns_1" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/muziSnapTex.png')">
                Micro-Uzi
        </a>
         | 
        <a id="guns_2" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/render2cb.png')">
                Kriss Vektor
        </a>
         | 
        <a id="guns_3" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/sgunSnapshotWTEX.png')">
                Ithaca 37 Stakeout
        </a>
         | 
        <a id="guns_4" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/texturedShadedRender3.png')">
                AR-15
        </a>
         | 
        <a id="guns_5" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/render6-.png')">
                FAMAS, untextured
        </a>
         | 
        <a id="guns_3" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/render.png')">
                Recoilless Rifle, clay render
        </a>
         | 
        <a id="guns_3" href="#GUNS" onclick="changeImgSrc('GUNS', '3d/render8.png')">
                Saiga-12, untextured
        </a>
</center>

Various low-poly, stylized weapon models I have created over the years.

---

### Wallpapers

<img id="WALLPAPER" src="3d/goreEffectHD_glow.png" alt="Various retro/synthwave desktop wallpapers I've created in Blender3D." />
<center>
        <a id="wallpaper_1" href="#WALLPAPER" onclick="changeImgSrc('WALLPAPER', '3d/goreEffectHD_glow.png')">
                Synthwave Terrain
        </a>
         | 
        <a id="wallpaper_2" href="#WALLPAPER" onclick="changeImgSrc('WALLPAPER', '3d/goreEffectHD_glow1.jpg')">
                Synthwave Terrain, alternate glow
        </a>
         | 
        <a id="wallpaper_3" href="#WALLPAPER" onclick="changeImgSrc('WALLPAPER', '3d/vaporscapeColorSolids_8.png')">
                Synthwave Color Solids
        </a>
         | 
        <a id="wallpaper_4" href="#WALLPAPER" onclick="changeImgSrc('WALLPAPER', '3d/burger4.png')">
                RetroWave fast food
        </a>
</center>

Various retro/synthwave desktop wallpapers I've created in Blender3D.

---

# Graphic Design

---

### [Liver](https://github.com/8bitprodigy/liver)

![liver.svg]( img/liver.svg)

This is the typeface used throughout this document. Liver is a public-domain sans-serif font in the style of Goma/Shin-Go/Rodin/Saira, modeled with screens in mind.  

Comes in regular and mono variants. Bold variant in the works.

---

## Logos

![AcephalOS_logo.png]( img/AcephalOS_logo.png)

#### AcephalOS logo

Logo I made for a FreeBSD-based OS I am working on.

![san_bernardino_operation.png]( img/san_bernardino_operation.png)

#### San Bernardino Operation logo

Logo I made for the organization to work on AcephalOS.

![iortcw.png]( img/iortcw.png)

#### ioRTCW

![Newioq3.png]( img/Newioq3.png)

#### Old ioQuake3 logo

![logoFinal2.png]( img/logoFinal2.png)

#### The Gore Effect Facebook logo

In addition to the above logos, all other logos on this page were designed by myself.
