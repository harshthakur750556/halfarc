/* ============================================================================
   HALFARC — the catalogue: 30 families x 7 variants = 210 indicators
   Each entry: f = builder family, n = name, d = description, o = options
   ========================================================================== */
(function (global) {
'use strict';

const FAMILIES = [
  { id: 'draw',    label: 'Hairline',    note: 'One continuous arc' },
  { id: 'seg',     label: 'Segmented',   note: 'Discrete blocks' },
  { id: 'dots',    label: 'Dot Rail',    note: 'Beads on a curve' },
  { id: 'bars',    label: 'Radial Field',note: 'Teeth around the arc' },
  { id: 'needle',  label: 'Pointer',     note: 'Dial hands' },
  { id: 'rings',   label: 'Concentric',  note: 'Nested half rings' },
  { id: 'rev',     label: 'Masked Fill', note: 'Texture revealed' },
  { id: 'liquid',  label: 'Liquid',      note: 'Wave inside a dome' },
  { id: 'counter', label: 'Numeric',     note: 'Type-led' },
  { id: 'scale',   label: 'Ruler',       note: 'Graduations' },
  { id: 'march',   label: 'Marching',    note: 'Travelling dashes' },
  { id: 'knob',    label: 'Dial',        note: 'Rotary control' },
  { id: 'orbit',   label: 'Comet',       note: 'Travelling head' },
  { id: 'pulse',   label: 'Pulse',       note: 'Breathing layers' },
  { id: 'bloom',   label: 'Bloom',       note: 'Rays from centre' },
  { id: 'grid',    label: 'Matrix',      note: 'Cell field' },
  { id: 'halo',    label: 'Halo',        note: 'Blurred glow' },
  { id: 'micro',   label: 'Micro',       note: 'Arc plus caption' },
  { id: 'dual',    label: 'Dual Arc',    note: 'Two related values' },
  { id: 'groove',  label: 'Groove',      note: 'Channel and head' },
  { id: 'ladder',  label: 'Ladder',      note: 'Equaliser columns' },
  { id: 'split',   label: 'Deviation',   note: 'Fills from centre' },
  { id: 'frame',   label: 'Framed',      note: 'Technical brackets' },
  { id: 'stack',   label: 'Stacked',     note: 'Offset layers' },
  { id: 'shade',   label: 'Tone Steps',  note: 'Greyscale bands' },
  { id: 'ribbon',  label: 'Ribbon',      note: 'Gradient stroke' },
  { id: 'spark',   label: 'Spark',       note: 'Particles at the head' },
  { id: 'wedge',   label: 'Wedge',       note: 'Filled sector' },
  { id: 'echo',    label: 'Echo',        note: 'Ghost trails' },
  { id: 'coil',    label: 'Coil',        note: 'Spiral stroke' }
];

const SPECS = [
/* ---------------------------------------------------------- 1. HAIRLINE */
{f:'draw',n:'Feather',d:'A 1px breath of an arc. Nothing else.',o:{w:1.1,cap:'butt',top:.3,dur:1.8,ease:'quart'}},
{f:'draw',n:'Ink Sweep',d:'Round caps, deep easing, soft bloom behind the stroke.',o:{w:2.6,fx:'glow',blur:2.2,dur:1.9,ease:'expo',glowOp:.25}},
{f:'draw',n:'Chalk Dash',d:'Dashed stroke that keeps walking after it lands.',o:{w:3.4,cap:'butt',dash:'3 2.2',fx:'march',marchDur:3.4,dur:1.5,top:.28}},
{f:'draw',n:'Razor + Rail',d:'Hairline value arc riding inside a fainter guide rail.',o:{w:.7,cap:'butt',rail:4.5,railw:.5,dur:2.1,ease:'quint',value:1,vs:11,vy:-12,suf:'%',label:'tension'}},
{f:'draw',n:'Heavy Draw',d:'Nine units of solid stroke, no apologies.',o:{w:9,cap:'round',dur:1.6,ease:'expo',top:.2}},
{f:'draw',n:'Slab',d:'Butt-capped slab with a whisper of track behind it.',o:{w:14,cap:'butt',top:.14,dur:1.4,ease:'quart'}},
{f:'draw',n:'Breath Line',d:'Sine easing plus an endless slow inhale. Calm by design.',o:{w:2,cap:'round',fx:'breathe',brDur:4.6,ease:'sine',dur:2.4,tip:1.5}},

/* --------------------------------------------------------- 2. SEGMENTED */
{f:'seg',n:'Twelve Blocks',d:'The classic: twelve chunks, staggered reveal from the left.',o:{n:12,g:1.6,w:7,value:1,vs:15,vy:6,step:.03}},
{f:'seg',n:'Fine Comb',d:'Thirty-six slivers — reads as texture, not as ticks.',o:{n:36,g:.45,w:6,lit:.35,step:.008,top:.2}},
{f:'seg',n:'Rail 24',d:'Round-capped beads with an even rhythm.',o:{n:24,g:1,w:5,cap:'round',value:1,vs:13,vy:4}},
{f:'seg',n:'Heavy Pips',d:'Eight fat pips. Big targets, big presence.',o:{n:8,g:2.6,w:11,cap:'round',step:.05}},
{f:'seg',n:'Wave Blocks',d:'Lit blocks keep bobbing from the centre out.',o:{n:16,g:1.2,w:8,lit:.75,fx:'wave',waveDur:2.2,dir:'center'}},
{f:'seg',n:'Comb Bloom',d:'Segments scale up from the pivot as they arrive.',o:{n:20,g:.8,w:6,fx:'grow',dir:'out',step:.02,value:1,vs:12,vy:2}},
{f:'seg',n:'Ghost Blocks',d:'Barely-there off state; only the lit blocks exist.',o:{n:14,g:1.4,w:9,offOp:.06,top:0,fx:'glow',glowR:1.6}},

/* ----------------------------------------------------------- 3. DOT RAIL */
{f:'dots',n:'Pearl Rail',d:'Eighteen even pearls on a hairline track.',o:{n:18,size:1.6,ring:1,ringW:.5,value:1,vs:13,vy:2}},
{f:'dots',n:'Constellation',d:'Thirty tiny points — dense enough to read as a gradient.',o:{n:30,size:1,lit:.5,step:.01}},
{f:'dots',n:'Beads',d:'Nine chunky beads with a soft pop on arrival.',o:{n:9,size:3.1,fx:'pop',step:.05}},
{f:'dots',n:'Blink Field',d:'Lit dots blink out of phase. Alive, never frantic.',o:{n:22,size:1.4,fx:'blink',blDur:2.1}},
{f:'dots',n:'Double Rail',d:'Two rails offset by 16% — primary and secondary metric.',o:{n:24,size:1.3,double:1,doubleGap:5.5,doubleShift:16,d2on:.5}},
{f:'dots',n:'Halo Dots',d:'Lit beads carry a soft monochrome halo.',o:{n:16,size:1.8,fx:'glow',glowR:2.2,ring:1,ringW:.4}},
{f:'dots',n:'Comet Dots',d:'A light runs the rail on a loop; tapering sizes lead the eye.',o:{n:26,size:1.25,taper:1,fx:'trail',trDur:2.8,tip:1}},

/* ------------------------------------------------------- 4. RADIAL FIELD */
{f:'bars',n:'Comb 30',d:'Thirty radial teeth, outward from the arc.',o:{n:30,len:7,w:1.4,value:1,vs:14,vy:2,step:.014}},
{f:'bars',n:'Tall Teeth',d:'Fewer, longer, rounder. Reads as a crown.',o:{n:18,len:12,w:2.4,cap:'round',step:.03}},
{f:'bars',n:'Equaliser',d:'Varying tooth heights give the field a rhythm of its own.',o:{n:24,len:10,w:1.8,fx:'pulse',puDur:2.1}},
{f:'bars',n:'Inner Comb',d:'Teeth point inward, leaving the outer edge clean.',o:{n:36,len:5,w:1,inward:1,step:.008}},
{f:'bars',n:'Pillar Field',d:'Twelve thick pillars — architectural, not instrument-like.',o:{n:12,len:14,w:3.4,cap:'round',step:.045,fx:'grow'}},
{f:'bars',n:'Micro Comb',d:'Forty-eight hairlines. From a distance it becomes a gradient.',o:{n:48,len:4,w:.85,step:.005,offOp:.1}},
{f:'bars',n:'Comb + Glow',d:'Lit teeth throw a soft shadow; hover thickens the whole field.',o:{n:28,len:9,w:1.6,fx:'glow',glowR:1.8,hoverW:2.2}},

/* ---------------------------------------------------------- 5. POINTER */
{f:'needle',n:'Classic Hand',d:'A slim hand, a hub, twenty-one quiet ticks.',o:{style:'needle',nw:1.6,tn:21,major:5,arc:0,value:1,vs:12,vy:-14}},
{f:'needle',n:'Blade',d:'Filled blade with a counter-weight tail.',o:{style:'blade',tn:11,major:0,hubR:2.2,dur:1.8}},
{f:'needle',n:'Dot Pointer',d:'Just a travelling dot and a hair. Minimal to the bone.',o:{style:'dot',dr:2.8,tn:0,track:1,tw:.6,value:1,vs:15,vy:4}},
{f:'needle',n:'Hair Pointer',d:'Sub-pixel hand that overshoots the rim.',o:{style:'hair',tn:41,major:10,mnw:.35,track:0}},
{f:'needle',n:'Fork',d:'Two-tined fork — a pointer that refuses to look like a gauge.',o:{style:'fork',tn:15,major:5,arc:1,aw:1.6,arcOff:9}},
{f:'needle',n:'Sweeping Hand',d:'Endless pendulum sweep for idle/ambient states.',o:{style:'needle',mode:'sweep',swDur:5.2,tn:25,major:5,track:1,tw:.7}},
{f:'needle',n:'Arrow + Arc',d:'Arrowhead over a soft value arc; both driven by one property.',o:{style:'arrow',arc:1,aw:3,arcOff:7,tn:0,track:1,tw:.8,tdash:'1 3',value:1,vs:13,vy:-10}},

/* ------------------------------------------------------- 6. CONCENTRIC */
{f:'rings',n:'Twin Rings',d:'Two half rings, the inner one lagging by eleven points.',o:{n:2,w:3.4,cap:1,stagger:1,staggerAmt:11,step:.14}},
{f:'rings',n:'Triple Rings',d:'Three weights stepping down toward the pivot.',o:{n:3,w:3,taper:1,stagger:1,staggerAmt:9,step:.12,value:1,vs:14,vy:2}},
{f:'rings',n:'Quad Stack',d:'Four thin rings — a moiré of progress.',o:{n:4,r0:45,r1:20,w:1.4,stagger:1,staggerAmt:6,step:.09}},
{f:'rings',n:'Staggered Sweep',d:'Each ring lands a beat after the last, from outside in.',o:{n:3,w:4,cap:1,stagger:1,staggerAmt:16,step:.2,ease:'expo',dur:1.7}},
{f:'rings',n:'Fine Rings',d:'Five hairline rings, barely separated.',o:{n:5,r0:45,r1:25,w:.9,mixed:1,mixedAmt:9,step:.07}},
{f:'rings',n:'Dashed Rings',d:'Dashed concentric arcs; the dashes make the motion readable.',o:{n:3,w:2.4,dash:'2 2.6',stagger:1,staggerAmt:12,fx:'glow',glowR:1.4}},
{f:'rings',n:'Echo Rings',d:'Opacity falls off with radius — depth without colour.',o:{n:4,w:3.2,echo:1,cap:1,stagger:1,staggerAmt:8,fx:'pulse',puDur:3.2}},

/* ------------------------------------------------------ 7. MASKED FILL */
{f:'rev',n:'Block Reveal',d:'A heavy arc revealed through a segmented mask.',o:{tex:'seg',n:14,w:10,value:1,vs:15,vy:4}},
{f:'rev',n:'Dotted Reveal',d:'Perforated stroke filling up like a ticket stub.',o:{tex:'dot',gapd:2.4,w:8,top:.22}},
{f:'rev',n:'Bar Reveal',d:'Twenty-two radial slats unveiled left to right.',o:{tex:'bars',n:22,w:12,top:.2,dur:1.8}},
{f:'rev',n:'Comb Reveal',d:'Ultra-fine comb; from afar it reads as a soft wipe.',o:{tex:'comb',n:44,w:14,top:.18,dur:2,ease:'quint'}},
{f:'rev',n:'Soft Reveal',d:'Blurred edge — the fill arrives like fog.',o:{w:13,soft:1.6,dur:2.2,ease:'sine',top:.16}},
{f:'rev',n:'Double Reveal',d:'Second, fainter band rides under the main fill.',o:{tex:'seg',n:10,w:9,double:1,f2op:.3}},
{f:'rev',n:'Slow Reveal',d:'Two-and-a-half seconds of quint easing. Patience as a feature.',o:{w:11,dur:2.6,ease:'quint',tip:1,label:'loading'}},

/* ---------------------------------------------------------- 8. LIQUID */
{f:'liquid',n:'Still Water',d:'One slow wave inside a dome. Barely moving, always moving.',o:{waves:1,amp:1.8,speed:'slow',value:1,vs:15}},
{f:'liquid',n:'Twin Waves',d:'Two out-of-phase waves for real depth.',o:{waves:2,amp:2.6,wgap:2.4}},
{f:'liquid',n:'Bubbles',d:'Dark bubbles drifting in the body of the fill.',o:{waves:2,bubbles:1,bn:5,amp:2.2}},
{f:'liquid',n:'Meniscus',d:'A hairline surface mark riding the water level.',o:{waves:1,edge:1,amp:1.4,marks:1}},
{f:'liquid',n:'Deep Fill',d:'Full-strength ink, no transparency tricks.',o:{waves:2,dark:1,amp:3,value:1,vs:14}},
{f:'liquid',n:'Ripple',d:'Three waves, three speeds, one calm surface.',o:{waves:3,amp:2,speed:'slow',wgap:1.8}},
{f:'liquid',n:'Turbulent',d:'Fast, high-amplitude swell for live/streaming data.',o:{waves:2,amp:3.6,speed:'fast',fx:'breathe',brDur:6}},

/* ---------------------------------------------------------- 9. NUMERIC */
{f:'counter',n:'Big Number',d:'Thirty-pixel numeral, hairline rule, tiny caption.',o:{style:'big',vs:30,wt:300,label:'complete'}},
{f:'counter',n:'Number + Arc',d:'Small arc above the figure — number first, decoration second.',o:{style:'arc',vs:17,w:2,label:'load'}},
{f:'counter',n:'Fraction',d:'x/100 with a dotted arc beneath. Unmistakably not a gauge.',o:{style:'frac',vs:21,wt:300}},
{f:'counter',n:'Stacked',d:'Caption, numeral, ten micro-bars. A vertical hierarchy.',o:{style:'stack',vs:23,label:'progress'}},
{f:'counter',n:'Micro Type',d:'Nine-pixel letterspaced numerals. The quietest one here.',o:{style:'micro',vs:9,label:'indexed'}},
{f:'counter',n:'Odometer',d:'Digits slide up into place one after another.',o:{style:'odo',vs:23,wt:300}},
{f:'counter',n:'Label Flip',d:'Figure plus caption above a round-capped arc.',o:{style:'flip',vs:24,wt:300,label:'synced'}},

/* ------------------------------------------------------------ 10. RULER */
{f:'scale',n:'Ruler 40',d:'Forty graduations, every fifth one longer.',o:{n:40,major:5,mjLen:5.5,mnLen:2.8,value:1,vs:13,vy:0}},
{f:'scale',n:'Dense Ruler',d:'Sixty ticks — the lit ones turn the scale into a bar.',o:{n:60,major:10,mnLen:2.2,mjLen:4.6,step:.006}},
{f:'scale',n:'Numbered Scale',d:'0 / 25 / 50 / 75 / 100 printed inside the arc.',o:{n:20,major:5,labels:1,inward:1,arc:0,vs:0}},
{f:'scale',n:'Inner Ruler',d:'Teeth point inward with a value arc outside them.',o:{n:30,inward:1,arc2:1,aw2:2.2,major:6,value:1,vs:14,vy:0}},
{f:'scale',n:'Precision Scale',d:'One hundred hairlines. Hover lifts the whole field.',o:{n:100,major:10,mnw:.35,mjw:.7,mjLen:4,mnLen:1.8,step:.004}},
{f:'scale',n:'Ruler + Head',d:'A dot tracks the exact value along the scale.',o:{n:40,major:8,tip:1,inward:1,arc2:1,aw2:1.4}},
{f:'scale',n:'Blinking Scale',d:'Lit ticks blink in sequence — a scanning instrument.',o:{n:36,major:6,fx:'blink',blDur:2.6,value:1,vs:12,vy:-2}},

/* --------------------------------------------------------- 11. MARCHING */
{f:'march',n:'March 3/3',d:'Even dashes travelling the revealed portion of the arc.',o:{dash:'3 3',w:2.6,speed:2.4,value:1,vs:14,vy:2}},
{f:'march',n:'Long March',d:'Long dashes, slow walk — a loading bar that curves.',o:{dash:'7 4',w:3,speed:4.2,top:.2}},
{f:'march',n:'Morse',d:'Irregular dash pattern; the rhythm reads as signal.',o:{dash:'1 2 5 2',w:2.2,speed:3.1}},
{f:'march',n:'Dual March',d:'Two counters-rotating dash layers at different radii.',o:{dash:'3 3',w:2.4,second:1,dash2:'1 4',w2:1,s2off:6,speed:2.2,s2drop:14}},
{f:'march',n:'Heavy March',d:'Thick dashes in a deep channel.',o:{dash:'5 3',w:8,speed:3.4,top:.18,cap:'round'}},
{f:'march',n:'Hair March',d:'Sub-pixel dashes on a hairline — nearly subliminal.',o:{dash:'1.5 2.5',w:.9,speed:1.8,top:.25}},
{f:'march',n:'Fast March',d:'Accelerates on hover. Feedback without a single pixel of colour.',o:{dash:'2 2',w:3,speed:3.6,label:'streaming'}},

/* ------------------------------------------------------------- 12. DIAL */
{f:'knob',n:'Studio Dial',d:'Machined knob with an index line and 25 ticks.',o:{r:29,tn:25,nw:2,value:1,vs:10,vy:-14}},
{f:'knob',n:'Minimal Dial',d:'No ticks — just a disc, a notch and a hub.',o:{r:30,tn:0,sw:1.2,dr:1.6}},
{f:'knob',n:'Dense Dial',d:'Forty-one ticks wrap the shoulder of the knob.',o:{r:25,tn:41,tw:.5,nw:1.6,sw:.8}},
{f:'knob',n:'Spinning Dial',d:'Inner ring rotates continuously; the index stays honest.',o:{r:28,tn:19,fx:'spin',spDur:16,k2dash:'4 6'}},
{f:'knob',n:'Weighted Dial',d:'Thick body, deep notch, strong hover tilt.',o:{r:31,tn:13,sw:2.4,nw:3,hubR:2.4,hoverTilt:5}},
{f:'knob',n:'Dial + Value',d:'Percentage set inside the dial face.',o:{r:32,tn:25,value:1,vs:11,vy:1,hubR:0}},
{f:'knob',n:'Breathing Dial',d:'The body pulses gently while the index holds position.',o:{r:27,tn:31,tw:.6,fx:'pulse',puDur:3.4}},

/* ------------------------------------------------------------ 13. COMET */
{f:'orbit',n:'Comet',d:'A head with six fading tails, all riding one rotation.',o:{hr:2.6,comet:1,cn:6,cspread:2.6,trailOp:.45,value:1,vs:14,vy:2}},
{f:'orbit',n:'Halo Head',d:'Single head ringed by a pulsing halo.',o:{hr:2.8,halo:1,trail:1,w:1.6,trailOp:.35}},
{f:'orbit',n:'Bare Orbit',d:'No trail at all — only the travelling head and its track.',o:{hr:3.2,trail:0,top:.3,tdash:'1 3'}},
{f:'orbit',n:'Comet Sweep',d:'Endless sweep variant for indeterminate states.',o:{hr:2.4,mode:'sweep',swDur:5.4,trail:0,comet:1,cn:5}},
{f:'orbit',n:'Long Tail',d:'Ten-particle tail with wide spread — reads as motion blur.',o:{hr:2.2,comet:1,cn:10,cspread:4.4,trailOp:.3,w:1}},
{f:'orbit',n:'Ringed Comet',d:'Head plus halo plus a solid trail: the fullest version.',o:{hr:2.5,halo:1,comet:1,cn:4,w:3,trailOp:.6,puDur:1.8}},
{f:'orbit',n:'Precision Head',d:'Tiny square-ish head on a hairline rail with tick dashes.',o:{hr:1.8,trail:1,w:.8,trailOp:.8,tdash:'.5 4',tw:.5}},

/* ------------------------------------------------------------ 14. PULSE */
{f:'pulse',n:'Triple Pulse',d:'Three arcs breathing at slightly different phases.',o:{layers:3,w:3,gap:4.5,drop:9,puDur:2.4}},
{f:'pulse',n:'Pulse + Beat',d:'Thirteen dots beat around the rim as the arcs breathe.',o:{layers:2,w:3.4,beat:1,blDur:1.9,gap:6}},
{f:'pulse',n:'Deep Pulse',d:'Four layers, slow phase, big drop-off between them.',o:{layers:4,w:2.6,gap:3.6,drop:12,puDur:3.4,phase:31}},
{f:'pulse',n:'Breathing Body',d:'The whole indicator scales in and out like a lung.',o:{layers:2,w:5,fx:'breathe',brDur:4.2,gap:6,puDur:0}},
{f:'pulse',n:'Fast Pulse',d:'Tight, quick pulse for live heart-rate style data.',o:{layers:3,w:2,puDur:1.2,gap:4,drop:6,phase:14}},
{f:'pulse',n:'Soft Pulse',d:'Wide, low-contrast layers — pulse you feel more than see.',o:{layers:3,w:8,gap:2,drop:5,top:.12,puDur:3.8}},
{f:'pulse',n:'Pulse + Value',d:'Centre numeral with two breathing arcs above it.',o:{layers:2,w:2.6,gap:5,value:1,vs:16,vy:2,label:'live'}},

/* ------------------------------------------------------------ 15. BLOOM */
{f:'bloom',n:'Thirteen Rays',d:'Rays open from the centre outward, symmetrically.',o:{n:13,inner:13,w:2.4,dir:'center',value:1,vs:9,vy:12}},
{f:'bloom',n:'Fine Bloom',d:'Twenty-six hairline rays — a sunburst, slowed down.',o:{n:26,inner:9,w:.8,step:.012}},
{f:'bloom',n:'Petal Bloom',d:'Thick round petals that breathe once they open.',o:{n:9,inner:16,w:5,cap:'round',fx:'breathe'}},
{f:'bloom',n:'Bloom Left',d:'Rays cascade strictly left to right.',o:{n:18,inner:11,w:1.6,dir:'in',step:.025}},
{f:'bloom',n:'Bloom Out',d:'Cascade from the right end back to the start.',o:{n:18,inner:11,w:1.6,dir:'out',step:.025}},
{f:'bloom',n:'Blinking Bloom',d:'Open rays blink in sequence around the dome.',o:{n:15,inner:12,w:2.8,fx:'blink',blDur:2.4}},
{f:'bloom',n:'Growing Bloom',d:'Each ray scales up from the pivot as it lights.',o:{n:21,inner:14,w:1.4,fx:'grow',dir:'center',step:.018}},

/* ----------------------------------------------------------- 16. MATRIX */
{f:'grid',n:'Cell Dome',d:'A square cell grid cropped to a half disc, filled in order.',o:{cell:5.4,gap:1.1,r:42,value:1,vs:12,vy:-6}},
{f:'grid',n:'Fine Matrix',d:'Smaller cells, denser field, softer off-state.',o:{cell:3.4,gap:.8,r:42,offOp:.08}},
{f:'grid',n:'Chunky Matrix',d:'Big rounded cells — pixel-art energy.',o:{cell:7.6,gap:1.6,r:41,rx:2}},
{f:'grid',n:'Pop Matrix',d:'Cells pop in with an overshoot.',o:{cell:5,gap:1.2,r:41,fx:'pop',step:.014}},
{f:'grid',n:'Square Matrix',d:'Zero corner radius, sharp and technical.',o:{cell:4.6,gap:.9,r:42,rx:0,offOp:.09}},
{f:'grid',n:'Blink Matrix',d:'Lit cells flicker like a status panel.',o:{cell:5.6,gap:1.3,r:41,fx:'blink'}},
{f:'grid',n:'Hover Matrix',d:'Cells scale on hover — the whole dome responds.',o:{cell:4.8,gap:1.1,r:42,hoverK:1,offOp:.07}},

/* ------------------------------------------------------------- 17. HALO */
{f:'halo',n:'Soft Halo',d:'Three blurred layers behind a crisp core arc.',o:{layers:3,w:5,blur:3,haloOp:.2,value:1,vs:15,vy:2}},
{f:'halo',n:'Deep Halo',d:'Heavy blur, wide spread — light bleeding off the stroke.',o:{layers:4,w:4,blur:5,haloOp:.16,rstep:2}},
{f:'halo',n:'Breathing Halo',d:'The glow swells while the value holds still.',o:{layers:3,w:6,blur:4,fx:'breathe',brDur:3.6}},
{f:'halo',n:'Tight Halo',d:'Small blur radius, high contrast core.',o:{layers:2,w:3,blur:1.8,haloOp:.35}},
{f:'halo',n:'Pulsing Halo',d:'Glow layers pulse out of phase.',o:{layers:4,w:5,blur:3.4,fx:'pulse',puDur:2.8}},
{f:'halo',n:'Halo + Rail',d:'Blurred arc over a faint dotted rail.',o:{layers:3,w:4,blur:3,tdash:0,label:'signal'}},
{f:'halo',n:'Wide Halo',d:'Very wide blur for an ambient, screen-glow feel.',o:{layers:3,w:8,blur:7,haloOp:.14,r:38}},

/* ------------------------------------------------------------ 18. MICRO */
{f:'micro',n:'Micro Left',d:'Tiny arc on the left, numeral and caption on the right.',o:{align:'left',r:15,w:1.6,value:1,vs:15,label:'complete',rule:1}},
{f:'micro',n:'Micro Right',d:'Mirrored layout for right-aligned panels.',o:{align:'right',r:15,w:1.6,value:1,vs:15,label:'done',rule:1}},
{f:'micro',n:'Micro Dot',d:'Arc plus a pulsing dot at the start of the sweep.',o:{align:'left',r:13,w:1.2,dot:1,fx:'pulse',value:1,vs:13,label:'sync'}},
{f:'micro',n:'Micro Thick',d:'A heavier micro arc that still leaves the type in charge.',o:{align:'left',r:17,w:3.4,cap:'round',value:1,vs:17,label:'upload'}},
{f:'micro',n:'Micro Pair',d:'Two micro arcs stacked as one composition.',o:{align:'right',r:14,w:1.4,value:1,vs:14,label:'score',rule:1,ls:'.06em'}},
{f:'micro',n:'Micro Hairline',d:'0.8-unit arc, letterspaced caption. Barely there.',o:{align:'left',r:12,w:.8,value:1,vs:11,label:'index',ls:'.1em'}},
{f:'micro',n:'Micro Butt',d:'Butt caps and no track — pure geometry.',o:{align:'right',r:16,w:2.4,cap:'butt',value:1,vs:16,label:'quota'}},

/* --------------------------------------------------------- 19. DUAL ARC */
{f:'dual',n:'Primary / Secondary',d:'Outer arc is the value; inner arc runs at 72% of it.',o:{r1:44,r2:33,w1:3,w2:3,factor:.72,value:1,vs:14,vy:4,sub:'buffer'}},
{f:'dual',n:'Inverse Pair',d:'Inner ring shows the remainder — the two always total 100.',o:{r1:44,r2:34,w1:3.4,w2:3.4,mode:'inverse',value:1,vs:15,vy:2}},
{f:'dual',n:'Linked Rings',d:'Nine radial links tie the two arcs together.',o:{r1:45,r2:32,w1:2.6,w2:2.6,link:1,factor:.6}},
{f:'dual',n:'Dotted Secondary',d:'Secondary ring is a slow marching dotted line.',o:{r1:43,r2:33,w1:3.4,w2:1.2,fx:'march',dash2:'1 3.4',mDur:4,factor:.8}},
{f:'dual',n:'Pulsing Inner',d:'Inner arc breathes while the outer stays put.',o:{r1:44,r2:31,w1:2.4,w2:4,fx:'pulse',puDur:2.8,factor:.55}},
{f:'dual',n:'Weighted Dual',d:'Heavy outer, hairline inner. Strong figure/ground.',o:{r1:45,r2:36,w1:7,w2:1,cap1:'butt',factor:.85,o2:.7}},
{f:'dual',n:'Twin Fine',d:'Two hairlines a few units apart, second one dimmer.',o:{r1:44,r2:39,w1:1.2,w2:1.2,factor:.66,o2:.4,value:1,vs:13,vy:0}},

/* ------------------------------------------------------------ 20. GROOVE */
{f:'groove',n:'Channel',d:'Wide recessed channel with a slim value stroke inside.',o:{gw:7,gop:.5,w:3,cap:'round',value:1,vs:14,vy:2}},
{f:'groove',n:'Rolling Ball',d:'A ball rolls the groove, its rim cut by the background.',o:{gw:6,gop:.45,w:2.4,ball:1,br:3.2,grooveLine:1}},
{f:'groove',n:'Growing Cap',d:'The terminal cap swells as the value climbs.',o:{gw:5,gop:.4,w:2,capdot:1,capR:3.6,notches:1}},
{f:'groove',n:'Deep Channel',d:'Very deep channel, thin bright core.',o:{gw:11,gop:.6,w:1.6,cap:'round'}},
{f:'groove',n:'Notched Groove',d:'Five notch dots mark the quarters of the channel.',o:{gw:6,gop:.45,w:3,notches:1,nn:5,label:'stage'}},
{f:'groove',n:'Groove + Pulse',d:'Cap pulses to signal an in-progress state.',o:{gw:6,gop:.5,w:2.6,capdot:1,capR:3,fx:'pulse'}},
{f:'groove',n:'Hair Groove',d:'Minimal channel: hairline guide, hairline value.',o:{gw:2.4,gop:.35,w:.9,cap:'butt',grooveLine:0}},

/* ------------------------------------------------------------ 21. LADDER */
{f:'ladder',n:'Equaliser',d:'Columns of even height ringing the dome.',o:{n:18,max:11,w:2.6,dir:'center',value:1,vs:13,vy:2}},
{f:'ladder',n:'Arch Ladder',d:'Heights peak at the top of the arc — a true arch.',o:{n:22,max:14,w:2.2,curve:'center'}},
{f:'ladder',n:'Rising Ladder',d:'Heights climb left to right.',o:{n:20,max:13,w:2.4,curve:'up'}},
{f:'ladder',n:'Falling Ladder',d:'Heights fall left to right — the mirror of Rising.',o:{n:20,max:13,w:2.4,curve:'down'}},
{f:'ladder',n:'Random Ladder',d:'Pseudo-random heights, deterministic per build.',o:{n:26,max:12,w:1.8,curve:'rand',fx:'blink',blDur:1.7}},
{f:'ladder',n:'Chunky Ladder',d:'Ten fat round columns with a soft glow.',o:{n:10,max:15,w:5,cap:'round',fx:'glow',glowR:2}},
{f:'ladder',n:'Micro Ladder',d:'Thirty-four hairline columns, grown from the pivot.',o:{n:34,max:8,w:.9,fx:'grow',step:.012}},

/* -------------------------------------------------------- 22. DEVIATION */
{f:'split',n:'Deviation',d:'Fills from the centre outward — drift, not speed.',o:{w:5,r:42,signed:1,value:1,vs:15,vy:4,label:'drift'}},
{f:'split',n:'Balance',d:'Thin band, long centre mark, ten quiet ticks.',o:{w:2.4,r:43,cap:'butt',signed:1,value:1,vs:13,vy:2}},
{f:'split',n:'Heavy Balance',d:'Wide band with round ends and a strong zero mark.',o:{w:11,r:40,cap:'round',value:1,vs:14,vy:6}},
{f:'split',n:'Deviation + Pulse',d:'The filled side breathes to draw the eye.',o:{w:4,r:42,fx:'pulse',signed:1,value:1,vs:14,vy:4}},
{f:'split',n:'Plain Deviation',d:'No ticks, no zero mark — just the offset band.',o:{w:6,r:41,top:.14,value:0}},
{f:'split',n:'Wide Deviation',d:'Short radius, very wide band, minimal furniture.',o:{w:13,r:33,cap:'butt',value:1,vs:15,vy:2}},
{f:'split',n:'Deviation Hair',d:'Hairline band with a dense tick field.',o:{w:1.2,r:44,value:1,vs:12,vy:0,signed:1}},

/* ------------------------------------------------------------ 23. FRAMED */
{f:'frame',n:'Bracketed',d:'Corner brackets, arc, value, unit caption.',o:{brackets:1,bw:46,bh:43,value:1,vs:13,vy:6,label:'unit 01',meta:'rev 4'}},
{f:'frame',n:'Grid Frame',d:'Adds a faint measurement grid behind the arc.',o:{brackets:1,grid:1,bw:47,bh:44,value:1,vs:12,vy:4,label:'scan',meta:'live'}},
{f:'frame',n:'Cross Frame',d:'Centre crosshair plus brackets — instrument panel.',o:{brackets:1,cross:1,bw:44,bh:42,r:30,w:2.4,value:1,vs:12,vy:6}},
{f:'frame',n:'Open Frame',d:'Brackets removed, only the caption row remains.',o:{brackets:0,bw:46,bh:43,value:1,vs:14,vy:2,label:'module 07'}},
{f:'frame',n:'Tight Frame',d:'Small brackets hugging a small arc.',o:{brackets:1,bw:38,bh:36,r:26,w:2.6,br:4,value:1,vs:11,vy:4,label:'cell'}},
{f:'frame',n:'Wide Frame',d:'Full-bleed brackets with a thick arc inside.',o:{brackets:1,bw:48,bh:45,r:36,w:5,cap:'butt',value:1,vs:15,vy:4,label:'bay 12',meta:'ok'}},
{f:'frame',n:'Frame + Rail',d:'Dotted track inside a technical frame.',o:{brackets:1,grid:1,bw:46,bh:43,r:33,w:3,tdash:'1 2',value:1,vs:12,vy:6,label:'node'}},

/* ---------------------------------------------------------- 24. STACKED */
{f:'stack',n:'Four Layers',d:'Four copies offset diagonally, each dropping value.',o:{layers:4,dx:1.3,dy:.9,w:3,drop:6,fade:.2}},
{f:'stack',n:'Tight Stack',d:'Barely-separated layers — a printed misregistration look.',o:{layers:5,dx:.7,dy:.5,w:2,drop:3,fade:.16}},
{f:'stack',n:'Wide Stack',d:'Strong offsets for an obvious 3D-ish shadow.',o:{layers:3,dx:3,dy:2,w:4,drop:10,fade:.28,cap:'round'}},
{f:'stack',n:'Stack + Pulse',d:'Layers pulse in sequence after they land.',o:{layers:4,dx:1.2,dy:.8,w:2.6,fx:'pulse',drop:7}},
{f:'stack',n:'Fading Stack',d:'Six layers falling to near-nothing.',o:{layers:6,dx:.9,dy:.6,w:1.8,drop:4,fade:.15}},
{f:'stack',n:'Stack Value',d:'Stacked arcs with a centred numeral.',o:{layers:3,dx:1.6,dy:1.1,w:3.4,drop:8,value:1,vs:15,vy:2}},
{f:'stack',n:'Offset Stack',d:'Vertical offset only — layers read as echoes below.',o:{layers:4,dx:0,dy:1.6,w:3,drop:9,fade:.22}},

/* -------------------------------------------------------- 25. TONE STEPS */
{f:'shade',n:'Six Tones',d:'Six bands stepping from white to mid-grey.',o:{n:6,w:8,g:.7,spread:.72,value:1,vs:15,vy:2}},
{f:'shade',n:'Three Tones',d:'Coarse: three wide bands, high contrast.',o:{n:3,w:13,g:1.2,spread:.6}},
{f:'shade',n:'Ten Tones',d:'Fine tonal ladder — the closest thing to a gradient here.',o:{n:10,w:5,g:.45,spread:.85}},
{f:'shade',n:'Round Tones',d:'Round caps soften each tone band.',o:{n:7,w:6,g:1.6,cap:'round',spread:.7}},
{f:'shade',n:'Dim Tones',d:'Off-state dims to 12% so only lit tones exist.',o:{n:8,w:9,g:.6,dim:.12,top:.1,spread:.8}},
{f:'shade',n:'Blinking Tones',d:'Lit bands blink slowly across the dome.',o:{n:6,w:7,g:.9,fx:'blink',spread:.65}},
{f:'shade',n:'Hover Tones',d:'Hover flattens every band to full white.',o:{n:12,w:4,g:.35,spread:.9,hoverK:1}},

/* ------------------------------------------------------------ 26. RIBBON */
{f:'ribbon',n:'Fade Ribbon',d:'Ink fades from full to 12% across the stroke.',o:{w:7,stops:[[0,1],[.5,.55],[1,.12]],ease:'quint',dur:1.8}},
{f:'ribbon',n:'Reverse Ribbon',d:'Same ramp, opposite direction.',o:{w:7,dir:'rev',stops:[[0,1],[.55,.5],[1,.1]]}},
{f:'ribbon',n:'Bloom Ribbon',d:'Blurred duplicate underneath for a lit-tube feel.',o:{w:6,blur:3,blOp:.4,fx:'breathe',brDur:4}},
{f:'ribbon',n:'Hard Ribbon',d:'Two-stop ramp with a sharp midpoint.',o:{w:9,stops:[[0,1],[.62,1],[.63,.15],[1,.15]],cap:'butt'}},
{f:'ribbon',n:'Soft Ribbon',d:'Long, gentle falloff — almost a shadow.',o:{w:11,stops:[[0,.9],[1,.08]],blur:1.6,blOp:.3}},
{f:'ribbon',n:'Ribbon + Head',d:'Gradient stroke with a solid head dot.',o:{w:5,tip:2.2,stops:[[0,.2],[.5,.7],[1,1]],dir:'rev'}},
{f:'ribbon',n:'Pulse Ribbon',d:'Glow layer pulses while the ramp holds.',o:{w:6,blur:4,blOp:.32,fx:'pulse',puDur:3,value:1,vs:14,vy:2}},

/* ------------------------------------------------------------- 27. SPARK */
{f:'spark',n:'Nine Sparks',d:'Particles shed from the head and fade backward.',o:{n:9,spread:7,spDur:1.9,stagger:.13,value:1,vs:14,vy:2}},
{f:'spark',n:'Tight Sparks',d:'Small spread, fast cycle — a fine spray.',o:{n:12,spread:4,spDur:1.3,stagger:.09}},
{f:'spark',n:'Wide Sparks',d:'Long spread across the arc for a comet-tail feel.',o:{n:8,spread:12,spDur:2.4,stagger:.18}},
{f:'spark',n:'Spark + Rail',d:'Dotted rail under a spark-throwing head.',o:{n:7,tdash:'1 3.5',spread:8,hr:2.4}},
{f:'spark',n:'Dense Sparks',d:'Eighteen particles — almost a smoke trail.',o:{n:18,spread:5,spDur:2.1,stagger:.06}},
{f:'spark',n:'Spark No Head',d:'Particles only; the arc end stays clean.',o:{n:10,spread:9,hr:1.2,w:1.4}},
{f:'spark',n:'Fast Sparks',d:'Short cycle that doubles in speed on hover.',o:{n:9,spread:6,spDur:1.1,stagger:.1,w:2.6}},

/* ------------------------------------------------------------- 28. WEDGE */
{f:'wedge',n:'Solid Wedge',d:'A filled sector sweeping open from the left.',o:{r:42,wop:.9,value:1,vs:13,vy:-8}},
{f:'wedge',n:'Wedged Rings',d:'Sector plus three concentric guide rings.',o:{r:41,rings:3,wop:.85,sw:.8}},
{f:'wedge',n:'Edge Wedge',d:'A hairline marks the leading edge of the fill.',o:{r:42,edge:1,wop:.92,value:1,vs:14,vy:-6}},
{f:'wedge',n:'Soft Wedge',d:'Lower opacity fill so the outline stays dominant.',o:{r:40,wop:.45,sw:1.2,edge:1}},
{f:'wedge',n:'Pulsing Wedge',d:'The filled sector breathes once it lands.',o:{r:41,wop:.8,fx:'pulse'}},
{f:'wedge',n:'Inner Wedge',d:'Smaller radius leaves room for a caption below.',o:{r:30,wop:.9,value:1,vs:12,vy:-6,label:'share'}},
{f:'wedge',n:'Wedge + Ticks',d:'Sector with rings and a leading edge — fullest version.',o:{r:42,rings:3,edge:1,wop:.75,sw:.9,value:1,vs:13,vy:-8}},

/* -------------------------------------------------------------- 29. ECHO */
{f:'echo',n:'Four Echoes',d:'Ghost arcs trailing behind the main stroke.',o:{layers:4,gap:3,w:3,drop:4,op:.5,fade:.13}},
{f:'echo',n:'Tight Echo',d:'Six closely-spaced echoes — a ripple frozen in time.',o:{layers:6,gap:1.8,w:2,drop:2,op:.55,fade:.09}},
{f:'echo',n:'Deep Echo',d:'Three wide echoes with heavy drop-off in value.',o:{layers:3,gap:6,w:4,drop:12,op:.45,fade:.16,cap:'round'}},
{f:'echo',n:'Pulsing Echo',d:'Echoes pulse outward in sequence.',o:{layers:4,gap:3.4,w:2.6,fx:'pulse',puDur:3,drop:6}},
{f:'echo',n:'Dashed Echo',d:'Ghost layers are dashed and marching.',o:{layers:3,gap:4,w:2,dash:'2 3',fx:'march',mDur:3.6,drop:8}},
{f:'echo',n:'Echo + Value',d:'Echoes with a centred numeral on top.',o:{layers:4,gap:2.8,w:2.4,value:1,vs:15,vy:2,drop:5}},
{f:'echo',n:'Long Echo',d:'Eight faint layers reaching deep into the dome.',o:{layers:8,gap:2.2,w:1.6,drop:3,op:.4,fade:.045}},

/* -------------------------------------------------------------- 30. COIL */
{f:'coil',n:'Two-Turn Coil',d:'A spiral that draws itself from the centre outward.',o:{turns:2,r0:13,r1:44,w:2,dur:2.2,ease:'quint'}},
{f:'coil',n:'Three-Turn Coil',d:'Tighter spiral, more revolutions, finer stroke.',o:{turns:3,r0:10,r1:44,w:1.4,dur:2.6}},
{f:'coil',n:'Single Coil',d:'One and a half turns — reads as a wave, not a spring.',o:{turns:1.5,r0:18,r1:43,w:2.8,cap:'round',value:1,vs:12,vy:0}},
{f:'coil',n:'Dashed Coil',d:'Coil broken into marching dashes.',o:{turns:2,r0:13,r1:43,w:2,dash:'2 2.6',fx:'march'}},
{f:'coil',n:'Heavy Coil',d:'Thick spiral with a soft pulse at the end of the draw.',o:{turns:2,r0:11,r1:42,w:4.4,fx:'pulse',dur:2}},
{f:'coil',n:'Hair Coil',d:'Four hairline turns — an engraving.',o:{turns:4,r0:8,r1:44,w:.7,dur:3,ease:'quart'}},
{f:'coil',n:'Flicker Coil',d:'Spiral that flickers like an old filament.',o:{turns:2,r0:14,r1:43,w:2.2,fx:'flicker',flDur:7}}
];

global.SC = global.SC || {};
global.SC.FAMILIES = FAMILIES;
global.SC.SPECS = SPECS;
})(typeof window !== 'undefined' ? window : globalThis);
